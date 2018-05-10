/**
 * tag
 */
import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';

const mock = [
	{ id: 1, name: '1', desc: '1' },
	{ id: 2, name: '2', desc: '2' },
	{ id: 3, name: '3', desc: '3' },
	{ id: 4, name: '4', desc: '4' },
	{ id: 5, name: '5', desc: '5' },
];

export const TagTypeDef: ITypedef = `
	type Tag {
		id: ID!
		name: String
		desc: String
	}
`;

const query: ITypedef = `
	type Query {
		tags(start: Int): [Tag]
		tagById(id: ID): Tag
	}
`;

const resolvers: IResolvers = {
	Query: {
		tags: (parent, { start }) => {
			return mock;
		},
		tagById: (parent, { id }) => {
			return mock.filter(i => i.id === +id)[0];
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${TagTypeDef}
		${query}
	`,
	resolvers,
});
