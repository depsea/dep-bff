import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';

const mock = [
	{ id: 1, title: 'test1', desc: 'demo1', body: 'body1' },
	{ id: 2, title: 'test2', desc: 'demo2', body: 'body2' },
	{ id: 3, title: 'test3', desc: 'demo3', body: 'body3' },
	{ id: 4, title: 'test4', desc: 'demo4', body: 'body4' },
	{ id: 5, title: 'test5', desc: 'demo5', body: 'body5' },
];

export const ArticleTypeDef: ITypedef = `
	type Article {
		id: ID!
		title: String
		desc: String
		body: String
	}
`;

const query: ITypedef = `
	type Query {
		articles(start: Int): [Article]
		articleById(id: ID): Article
	}
`;

const resolvers: IResolvers = {
	Query: {
		articles(parent, { start }) {
			return mock;
		},
		articleById(parent, { id }) {
			return mock.filter(i => i.id === +id)[0];
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${ArticleTypeDef}
		${query}
	`,
	resolvers,
});
