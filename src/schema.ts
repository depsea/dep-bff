import { makeExecutableSchema } from 'graphql-tools';

const RootQuery = `
	type RootQuery {

	}
`;

const RootMutation = `
	type RootMutation {

	}
`;

export const Schema = makeExecutableSchema(RootQuery);
