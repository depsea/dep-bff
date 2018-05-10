/**
 * user schema
 */
import { IResolvers, ITypedef, ITypeDefinitions, makeExecutableSchema } from 'graphql-tools';

export const UserTypeDef: ITypedef = `
	type User {
		id: ID!
		username: String
		nickname: String
	}
`;

const query: ITypedef = `
	type Query {
		users(start: Int): [User]
	}
`;

const resolvers: IResolvers = {
	Query: {
		users: (parent, { start }) => {
			return [];
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${UserTypeDef}
		${query}
	`,
	resolvers,
});
