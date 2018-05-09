/**
 * user schema
 */
import { makeExecutableSchema } from 'graphql-tools';

export const UserTypeDef = `
	type User {
		id: ID!
		username: String
		nickname: String
	}
`;

const UserQueryTypeDef = `
	type Query {
		users(start: Int): [User]
	}
`;

export const UserSchema = makeExecutableSchema({
	typeDefs: `
		${UserTypeDef}
		${UserQueryTypeDef}
	`,
});
