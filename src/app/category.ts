import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';
import { CategoryAPI } from '../sdk';
import { CommonTypeDef } from './common';

export const CategoryTypeDef: ITypedef = `
	# 类别
	type Category {
		# 类别id
		id: ID

		# 类别名称
		name: String

		# 类别描述
		desc: String

		# 创建时间
		createTime: Timestamp

		# 更新时间
		updateTime: Timestamp
	}
`;

const query: ITypedef = `
	type Query {
		# 获取类别列表
		categories(skip: Int = 0, limit: Int = 20): [Category]

		# 根据id查询类别详情
		categoryById(id: ID!): Category
	}
`;

const mutation: ITypedef = `
	type Mutation {
		# 添加类别
		createCategory(newData: String!): Category

		# 更新类别
		updateCategory(id: ID!, newData: String!): Category

		# 删除类别
		deleteCategory(id: ID!): Category
	}
`;

const resolvers: IResolvers = {
	Query: {
		async categories(parent, { skip, limit }) {
			return await CategoryAPI.getList({ skip, limit });
		},

		async categoryById(parent, { id }) {
			return await CategoryAPI.getDetail(id);
		},
	},

	Mutation: {
		async createCategory(parent, { newData }) {
			return await CategoryAPI.create(newData);
		},

		async updateCategory(parent, { id, newData }) {
			return await CategoryAPI.update(id, newData);
		},

		async deleteCategory(parent, { id }) {
			return await CategoryAPI.delete(id);
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${CommonTypeDef}
		${CategoryTypeDef}
		${query}
		${mutation}
	`,
	resolvers,
});
