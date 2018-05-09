import { makeExecutableSchema } from 'graphql-tools';

export const ArticleTypeDef = `
	type Article {
		id: ID!
		title: String
		desc: String
		body: String
	}
`;

const ArticleQueryTypeDef = `
	type Query {
		articles(start: Int): [Article]
	}
`;

export const ArticleSchema = makeExecutableSchema({
	typeDefs: `
		${ArticleTypeDef}
		${ArticleQueryTypeDef}
	`,
});
