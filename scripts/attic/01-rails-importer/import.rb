# Run me with `bin/rails runner $IMPORT_RB_FULL_PATH`.

require 'fileutils'
require 'pathname'
require 'shellwords'

ROOT = Pathname.new(__dir__) + '..' + 'content'

Update = Struct.new(:model, :created_at)

%w[blog snippets wiki].each do |dir|
  FileUtils.mkdir_p(ROOT + dir)
end

content = [Article, Post, Snippet].flat_map do |model|
  model.where(public: true).all
end

# Create Update objects to represent items that get edited after initial
# creation.
index = 0
while content.size > index
  model = content[index]
  if model.created_at != model.updated_at
    content.unshift(Update.new(model, model.updated_at))
    index += 1
  end
  index += 1
end

content.sort! do |a, b|
  a.created_at <=> b.created_at
end

def get_tag_names(model)
  model.tag_names.join(' ')
end

def format_headers(headers)
  output = "---\n"
  headers.each_pair do |key, value|
    if value.present?
      output += "#{key}: #{value}\n"
    else
      output += "#{key}:\n"
    end
  end
  output + "---"
end

def commit(document, model, message)
  system "git -C #{Shellwords.escape ROOT} add #{Shellwords.escape document}"
  system %{
    GIT_AUTHOR_DATE=#{model.created_at.iso8601}
    GIT_COMMITTER_DATE=#{model.created_at.iso8601}
    git -C #{Shellwords.escape ROOT} commit
    -m #{Shellwords.escape message}
    -- #{Shellwords.escape document}
  }.gsub(/\s+/, ' ')
end

# Normalizes line endings and trims leading and trailing whitespace.
def sanitize(text)
  text.gsub(/\r\n?/, "\n").strip
end

def document_for_model(model)
  case model
  when Article
    ROOT + 'wiki' + "#{model.title}.wikitext"
  when Post
    ROOT + 'blog' + "#{model.permalink}.wikitext"
  when Snippet
    extensions = {
      0 => 'wikitext',
      1 => 'txt',
      2 => 'html',
      100 => 'c',
      200 => 'patch',
      300 => 'm',
      400 => 'rb',
      500 => 'sh',
    }
    # In URLs there is no extension, except for .txt for raw.
    document = ROOT + 'snippets' + "#{model.id}.#{extensions[model.markup_type]}"
  end
end

content.each do |model|
  document = document_for_model(model)
  puts '---'
  case model
  when Article
    # Article titles may contain anything except _ and /:
    # URL -> Title converion: _ gets converted to space
    # Title -> URL conversion is reverse: spaces become underscores
    # So, we use titles as filenames.
    # Could use pre-commit hook to disallow bad titles from being committed.
    document.open('w+') do |f|
      headers = {}
      if model.redirect.present?
        headers['redirect'] = model.redirect
        f.puts format_headers(headers)
      else
        headers['tags'] = get_tag_names(model)
        f.puts format_headers(headers)
        f.puts sanitize(model.body)
      end
    end
    commit document, model, "Import article: #{model.title}"
  when Post
    document.open('w+') do |f|
      headers = {
        'title' => model.title,
        'tags' => get_tag_names(model),
      }
      f.puts format_headers(headers)
      f.puts [
        sanitize(model.excerpt),
        sanitize(model.body),
      ].select(&:present?).join("\n\n")
    end
    commit document, model, "Import post: #{model.title}"
  when Snippet
    document.open('w+') do |f|
      headers = {}
      headers['title'] = model.description if model.description.present?
      headers['tags'] = get_tag_names(model)
      f.puts format_headers(headers)
      f.puts sanitize(model.body)
    end
    commit document, model, "Import snippet: #{model.description.presence || model.id}"
  when Update
    puts "update (#{model.model.class}) updated #{model.created_at}"
    # Need do change the content in order for Git to see it, so we increment an
    # arbitrary cache breaker.
    document = document_for_model(model.model)
    old = document.read
    document.open('w+') do |f|
      f.puts old.sub(/\n---/, "\ncache_breaker: 1" + "\n---")
    end
    commit document, model, "Touch #{model.model.class} ##{model.model.id}"
  end
end
