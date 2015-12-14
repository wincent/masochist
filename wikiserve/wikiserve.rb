# Bootstrapping.
require 'rubygems'
require 'bundler/setup'

# Gems.
require 'redis'
require 'sinatra'
require 'sinatra/json'
require 'wikitext'

# Standard Library.
require 'json'
require 'set'

# TODO Make defaults configurable via an external config file
PARSER = Wikitext::Parser.new(
  img_prefix: '/system/images/',
  pre_code: true
)

CACHE = Redis.new
CACHE_VERSION = 2

KNOWN_LINKS = {}

KNOWN_LINKS_DIGESTS = []

FALLBACK_LINKS_SET = (Class.new do
  def member?(member)
    true
  end
end).new

def get_key(suffix)
  "masochist:#{CACHE_VERSION}:#{suffix}"
end

def known_links
  index_key = get_key('wiki-index')
  last_indexed, cardinality = CACHE.multi do
    CACHE.get(get_key('last-indexed-hash'))
    CACHE.zcard(index_key)
  end
  if !KNOWN_LINKS.has_key?(last_indexed)
    targets = CACHE.zrevrange(index_key, 0, cardinality)
    if targets.any?
      KNOWN_LINKS[last_indexed] = Set.new(targets.map(&:downcase))
      KNOWN_LINKS_DIGESTS.push(last_indexed)
      if KNOWN_LINKS_DIGESTS.size > 10
        KNOWN_LINKS.delete(KNOWN_LINKS_DIGESTS.shift)
      end
    end
  end

  if KNOWN_LINKS.has_key?(last_indexed)
    KNOWN_LINKS[last_indexed]
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

get '/heartbeat' do
  json PARSER.parse('OK')
end

post '/wikitext' do
  begin
    body = JSON[request.body.read.to_s]
    known = known_links
    link_proc = -> (target) {
      # TODO: probably make the class configurable
      known.member?(target.downcase) ? nil : 'redlink'
    }
    errors = []
    results = body.map do |options|
      begin
        wikitext = preprocess(options.fetch('wikitext'))
        options = extract_options(options)
        options[:link_proc] = link_proc
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
