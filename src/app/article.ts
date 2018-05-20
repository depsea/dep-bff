import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';
import { ArticleAPI } from '../sdk';

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
		articles(limit: Int, skip: Int): [Article]
		articleById(id: ID): Article
	}
`;

const mutations: ITypedef = `
	type Mutation {
		createArticle(newData: ID): Article
	}
`;

const resolvers: IResolvers = {
	Query: {
		async articles(parent, args) {
			const { limit, skip } = args;
			const result = await ArticleAPI.getList({ limit, skip });
			return result;
		},
		async articleById(parent, args) {
			const { id } = args;
			const result = await ArticleAPI.getDetail(id);
			return result;
		},
	},

	Mutation: {
		createArticle(parent, { newData }) {
			return newData;
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${ArticleTypeDef}
		${query}
		${mutations}
	`,
	resolvers,
});
