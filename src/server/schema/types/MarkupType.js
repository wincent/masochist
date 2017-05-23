import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import marked from 'marked';
import getAssetURL from '../../getAssetURL';
import escapeHTML from '../../escapeHTML';

marked.setOptions({
  // There are all defaults, but re-set them here explicitly as documentation.
  gfm: true,
  sanitize: false, // Let HTML through.
  smartypants: false,
});

function validateBaseHeadingLevel(level: ?number): ?number {
  if (level == null) {
    return;
  }
  if (level < 0 || level > 6) {
    throw new Error(`Invalid heading level ${level}`);
  }
  return level;
}

function getMarkedRenderer(baseLevel: ?number) {
  const renderer = new marked.Renderer();

  // Start headings at `baseLevel`.
  if (baseLevel) {
    renderer.heading = (text, desiredLevel, raw) => {
      const level = Math.min(baseLevel + desiredLevel, 6);
      return marked.Renderer.prototype.heading.call(renderer, text, level, raw);
    };
  }

  // CDN-ize "src" attribute of `<img>` tags.
  renderer.image = (href, title, text) => {
    const src = getAssetURL(href);
    return marked.Renderer.prototype.image.call(renderer, src, title, text);
  };

  // Add "external" class to `<a>` tags for off-site hrefs.
  renderer.link = (href, title, text) => {
    let className;
    if (
      href.charAt(0) !== '/' &&
      !href.match(/^https?:\/\/wincent\.com(\/|$)/i)
    ) {
      className = 'external';
    }
    if (title) {
      if (className) {
        return `<a href="${href}" class="${className}" title="${title}">${text}</a>`;
      } else {
        return `<a href="${href}" title="${title}">${text}</a>`;
      }
    } else if (className) {
      return `<a href="${href}" class="${className}">${text}</a>`;
    } else {
      return `<a href="${href}">${text}</a>`;
    }
  };

  return renderer;
}

export const MarkupFormatType = new GraphQLEnumType({
  name: 'MARKUP_FORMAT_TYPE',
  values: {
    WIKITEXT: {value: 'wikitext'},
    TXT: {value: 'txt'},
    HTML: {value: 'html'},
    C: {value: 'c'},
    PATCH: {value: 'patch'},
    M: {value: 'm'},
    MD: {value: 'md'},
    RB: {value: 'rb'},
    SH: {value: 'sh'},
  },
});

const MarkupType = new GraphQLObjectType({
  name: 'Markup',
  description: 'The textual markup for a piece of content',
  fields: {
    raw: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Unprocessed plain-text source of the markup',
    },
    format: {
      type: new GraphQLNonNull(MarkupFormatType),
      description: 'The format of the markup source',
    },
    html: {
      type: GraphQLString,
      description: 'HTML output of transformed markup',
      args: {
        baseHeadingLevel: {
          description: 'Base heading level [0-6]',
          type: GraphQLInt,
        },
      },
      resolve(markup, {baseHeadingLevel}, context, {rootValue}) {
        const level = validateBaseHeadingLevel(baseHeadingLevel);
        if (markup.format === 'wikitext') {
          return rootValue.loaders.Wikitext.load({
            wikitext: markup.raw,
            baseHeadingLevel: level,
          });
        } else if (markup.format === 'md') {
          const renderer = getMarkedRenderer(level);
          return marked(markup.raw, {renderer});
        } else if (
          markup.format === 'c' ||
          markup.format === 'html' ||
          markup.format === 'm' ||
          markup.format === 'patch' ||
          markup.format === 'rb' ||
          markup.format === 'sh' ||
          markup.format === 'txt'
        ) {
          // TODO: syntax highlighting for languages
          return '<pre><code>' + escapeHTML(markup.raw) + '</code></pre>';
        } else {
          throw new Error('Unsupported markup format `' + markup.format + '`');
        }
      },
    },
  },
});

export default MarkupType;
