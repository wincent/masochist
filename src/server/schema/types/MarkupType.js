import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';
import escapeHTML from '@wincent/escape-html';
import getAssetURL from '../../getAssetURL';
import markupExtensions from '../../../common/markupExtensions';

const EXTENSION_TO_HLJS_LANGUAGE = {
  // Some of these are aliases to the "canonical" highlight.js name, but it is
  // smart enough to figure out what we mean.
  c: 'c',
  html: 'html',
  m: 'objc',
  patch: 'patch',
  rb: 'ruby',
  sh: 'bash',
  txt: undefined,
};

function validateBaseHeadingLevel(level: ?number): ?number {
  if (level == null) {
    return;
  }
  if (level < 0 || level > 6) {
    throw new Error(`Invalid heading level ${level}`);
  }
  return level;
}

function highlight(str, language) {
  let value;
  try {
    if (language === 'auto') {
      const result = hljs.highlightAuto(str);
      language = escapeHTML(result.language);
      ({value} = result);
    } else if (language && hljs.getLanguage(language)) {
      const result = hljs.highlight(str, {language});
      language = escapeHTML(language.toLowerCase());
      ({value} = result);
    }
  } catch (err) {
    // Fall through.
  }
  if (language && value) {
    // Explicitly not using "hljs" class on the <pre> element here because
    // it futzes with our existing <pre> styling too much.
    return `<pre class="language-${language}"><code>${value}</code></pre>`;
  }
  return `<pre><code>${escapeHTML(str)}</code></pre>`;
}

function getMarkdownRenderer(baseLevel: ?number) {
  const md = MarkdownIt({
    highlight,
    html: true, // Let HTML through.
    linkify: true,
    typographer: true, // (c), ... etc get transformed.
    quotes: '""\'\'', // Death to "Smart" quotes.
  });

  // Start headings at `baseLevel`.
  if (baseLevel) {
    md.renderer.rules.heading_open = (
      tokens,
      index,
      options,
      env,
      renderer,
    ) => {
      const token = tokens[index];
      const desiredLevel = parseInt(token.tag.slice(1), 10) || 1;
      const level = Math.min(baseLevel + desiredLevel, 6);
      token.tag = `h${level}`;
      return renderer.renderToken(tokens, index, options);
    };
  }

  // 1. CDN-ize "src" attribute of `<img>` tags.
  // 2. Mark images as: loading="lazy"
  //
  //    @see https://web.dev/native-lazy-loading/
  md.renderer.rules.image = (tokens, index, options, env, renderer) => {
    const token = tokens[index];
    const src = token.attrGet('src');
    token.attrSet('src', getAssetURL(src));
    token.attrSet('loading', 'lazy');
    return renderer.renderToken(tokens, index, options);
  };

  // Add "external" class to `<a>` tags for off-site hrefs.
  md.renderer.rules.link_open = (tokens, index, options, env, renderer) => {
    const token = tokens[index];
    const href = token.attrGet('href');
    if (
      href.charAt(0) !== '/' &&
      !href.match(/^https?:\/\/wincent\.com(\/|$)/i)
    ) {
      token.attrJoin('class', 'external');
    }
    return renderer.renderToken(tokens, index, options);
  };

  // Prevent wide tables from breaking layout on small screens.
  md.renderer.rules.table_open = (tokens, index, options, env, renderer) => {
    return (
      '<div class="overflow-x-auto">' +
      renderer.renderToken(tokens, index, options)
    );
  };

  md.renderer.rules.table_close = (tokens, index, options, env, renderer) => {
    return renderer.renderToken(tokens, index, options) + '</div>';
  };

  return md;
}

export const MarkupFormatType = new GraphQLEnumType({
  name: 'MARKUP_FORMAT_TYPE',
  // Make an object with entries like: `TXT: {value: 'txt'}`
  values: markupExtensions.reduce((values, value) => {
    values[value.toUpperCase()] = {value};
    return values;
  }, {}),
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
      type: new GraphQLNonNull(GraphQLString),
      description: 'HTML output of transformed markup',
      args: {
        baseHeadingLevel: {
          description: 'Base heading level [0-6]',
          type: GraphQLInt,
        },
      },
      resolve(markup, {baseHeadingLevel}, context, {rootValue}) {
        const level = validateBaseHeadingLevel(baseHeadingLevel);
        if (markup.format === 'md') {
          return getMarkdownRenderer(level).render(markup.raw);
        } else if (
          markup.format === 'c' ||
          markup.format === 'html' ||
          markup.format === 'm' ||
          markup.format === 'patch' ||
          markup.format === 'rb' ||
          markup.format === 'sh' ||
          markup.format === 'txt'
        ) {
          const language = EXTENSION_TO_HLJS_LANGUAGE[markup.format];
          return highlight(markup.raw, language);
        } else {
          throw new Error('Unsupported markup format `' + markup.format + '`');
        }
      },
    },
  },
});

export default MarkupType;
