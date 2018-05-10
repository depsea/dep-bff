/**
 * category
 */
import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';

const mock = [
	{ id: 1, name: '11', desc: '111' },
	{ id: 2, name: '22', desc: '222' },
	{ id: 3, name: '33', desc: '333' },
	{ id: 4, name: '4', desc: '4' },
];

export const CategoryTypeDef: ITypedef = `
	type Category {
		id: ID!
		name: String
		desc: String
	}
`;

const query: ITypedef = `
	type Query {
		categories(start: Int): [Category]
		categoryById(id: ID): Category
	}
`;

const resolvers: IResolvers = {
	Query: {
		categories: (parent, { start }) => {
			return mock;
		},

		categoryById: (parent, { id }) => {
			return mock.filter(i => i.id === +id)[0];
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${CategoryTypeDef}
		${query}
	`,
	resolvers,
});
