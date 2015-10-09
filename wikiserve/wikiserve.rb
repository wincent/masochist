# Bootstrapping.
require 'rubygems'
require 'bundler/setup'

# Gems.
require 'dalli'
require 'sinatra'
require 'sinatra/json'
require 'wikitext'

# Standard Library.
require 'json'
require 'set'

# TODO Make defaults configurable via an external config file
PARSER = Wikitext::Parser.new(img_prefix: '/system/images/')

CACHE = Dalli::Client.new

KNOWN_LINKS = {}

KNOWN_LINKS_DIGESTS = []

FALLBACK_LINKS_SET = (Class.new do
  def member?(member)
    true
  end
end).new

def known_links(digest)
  if !KNOWN_LINKS.has_key?(digest)
    targets = CACHE.get('X-Wikitext-Corpus-Targets:' + digest)
    if targets
      KNOWN_LINKS[digest] = Set.new(targets)
      KNOWN_LINKS_DIGESTS.push(digest)
      if KNOWN_LINKS_DIGESTS.size > 10
        KNOWN_LINKS.delete(KNOWN_LINKS_DIGESTS.shift)
      end
    end
  end

  if KNOWN_LINKS.has_key?(digest)
    KNOWN_LINKS[digest]
  else
    FALLBACK_LINKS_SET
  end
end

# Like example "wikitext/preprocess" that comes with wikitext gem.
def preprocess(wikitext)
  # Autolink hashtags, but only ones containing at least one letter.
  wikitext.
    gsub(
      %r{
        (^|\s)                           # only at start of line/after space
        \#(                              # will match a hashtag
          (?:[a-z0-9]*[a-z][a-z0-9]*)+   # "word" containing at least 1 letter
          (?:\.[a-z0-9]*[a-z][a-z0-9]*)* # 0 or more ".word"
        )\b
      }ix,
      '\1[/tags/\2 #\2]'
    ).
    # This part is the same as in wikitext/preprocess:
    gsub(/\b(bug|issue|request|ticket) #(\d+)/i, '[/issues/\2 \1 #\2]')
end

OPTIONS = {
  'autolink' => :autolink,
  'baseHeadingLevel' => :base_heading_level,
  'externalLinkClass' => :external_link_class,
  'externalLinkRel' => :external_link_rel,
  'imgPrefix' => :img_prefix,
  'internalLinkPrefix' => :internal_link_prefix,
  'lineEnding' => :line_ending,
  'mailtoClass' => :mailto_class,
  'minimumFulltextTokenLength' => :minimum_fulltext_token_length,
  'outputStyle' => :output_style,
  'spaceToUnderscore' => :space_to_underscore,
}

def extract_options(options)
  extracted_options = {}
  options.each_pair do |key, value|
    if OPTIONS.has_key?(key)
      normalized_key = OPTIONS[key]
      extracted_options[normalized_key] = value
    end
  end
  extracted_options
end

post '/wikitext' do
  begin
    body = JSON[request.body.read.to_s]
    digest = request.env['HTTP_X_WIKITEXT_CORPUS_DIGEST'] # Defy RFC 6648.
    link_proc = nil
    if digest
      link_proc = -> (target) {
        # TODO: probably make the class configurable
        known_links(digest).member?(target.downcase) ? nil : 'redlink'
      }
    end
    errors = []
    results = body.map do |options|
      begin
        wikitext = preprocess(options.fetch('wikitext'))
        options = extract_options(options)
        options[:link_proc] = link_proc if link_proc
        PARSER.parse(wikitext, options)
      rescue => e
        errors.push(e.to_s)
        nil
      end
    end
    json results: results, errors: errors
  rescue JSON::ParserError => e
    json results: [], errors: [e]
  end
end
