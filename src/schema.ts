import { GraphQLSchema } from 'graphql';
import { mergeSchemas } from 'graphql-tools';
import * as schemas from './app';

export const Schema = mergeSchemas({
	schemas: Object.values(schemas).filter(s => s instanceof GraphQLSchema),
});
