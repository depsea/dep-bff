import { mergeSchemas } from 'graphql-tools';
import { ArticleSchema } from './article';
import { UserSchema } from './user';

export const Schema = mergeSchemas({
	schemas: [ArticleSchema, UserSchema],
});
