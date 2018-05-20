import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';
import { TagAPI } from '../sdk';
import { CommonTypeDef } from './common';

export const TagTypeDef: ITypedef = `
	# 标签
	type Tag {
		# 标签id
		id: ID

		# 标签名称
		name: String

		# 标签描述
		desc: String

		# 创建时间
		createTime: Timestamp

		# 更新时间
		updateTime: Timestamp
	}
`;

const query: ITypedef = `
	type Query {
		# 获取标签列表
		tags(skip: Int = 0, limit: Int = 20): [Tag]

		# 根据id获取标签详情
		tagById(id: ID!): Tag
	}
`;

const mutation: ITypedef = `
	type Mutation {
		# 创建标签
		createTag(newData: String!): Tag

		# 更新标签
		updateTag(id: ID!, newData: String!): Tag

		# 删除标签
		deleteTag(id: ID!): Tag
	}
`;

const resolvers: IResolvers = {
	Query: {
		async tags(parent, { skip, limit }) {
			return await TagAPI.getList({ skip, limit });
		},

		async tagById(parent, { id }) {
			return await TagAPI.getDetail(id);
		},
	},

	Mutation: {
		async createTag(parent, { newData }) {
			return await TagAPI.create(newData);
		},

		async updateTag(parent, { id, newData }) {
			return await TagAPI.update(id, newData);
		},

		async deleteTag(parent, { id }) {
			return await TagAPI.delete(id);
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${CommonTypeDef}
		${TagTypeDef}
		${query}
		${mutation}
	`,
	resolvers,
});
