import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

function validateBaseHeadingLevel(level: ?number): ?number {
  if (level == null) {
    return;
  }
  if (level < 0 || level > 6) {
    throw new Error(`Invalid heading level ${level}`);
  }
  return level;
}

const MarkupFormatType = new GraphQLEnumType({
  name: 'MARKUP_FORMAT_TYPE',
  values: {
    WIKITEXT: { value: 'wikitext' },
    TXT: { value: 'txt' },
    HTML: { value: 'html' },
    C: { value: 'c' },
    PATCH: { value: 'patch' },
    M: { value: 'm' },
    RB: { value: 'rb' },
    SH: { value: 'sh' },
  },
});

const MarkupType = new GraphQLObjectType({
  name: 'Markup',
  description: 'The textual markup for a piece of content',
  fields: () => ({
    raw: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Unprocessed plain-text source of the markup',
      resolve: markup => markup.raw,
    },
    format: {
      type: new GraphQLNonNull(MarkupFormatType),
      description: 'The format of the markup source',
      resolve: markup => markup.format,
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
      resolve(markup, {baseHeadingLevel}, {rootValue}) {
        if (markup.format === 'wikitext') {
          const level = validateBaseHeadingLevel(baseHeadingLevel);
          return rootValue.loaders.wikitextLoader.load({
            wikitext: markup.raw,
            baseHeadingLevel: level,
          });
        } else {
          throw new Error('Unsupported markup format `' + markup.format + '`');
        }
      },
    },
  }),
});

export default MarkupType;
