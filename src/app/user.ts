import { IResolvers, ITypedef, ITypeDefinitions, makeExecutableSchema } from 'graphql-tools';
import { UserAPI } from '../sdk';
import { CommonTypeDef } from './common';

export const UserTypeDef: ITypedef = `
	# 用户状态
	enum UserStatus {
		disable
		able
	}

	# 用户
	type User {
		# 用户id
		id: ID

		# 用户名
		username: String

		# 昵称
		nickname: String

		# 创建时间
		createTime: Timestamp

		# 更新时间
		updateTime: Timestamp

		# 状态
		status: UserStatus
	}
`;

const query: ITypedef = `
	type Query {
		# 获取用户列表
		users(skip: Int = 0, limit: Int = 20): [User]

		# 根据id获取用户详情
		userById(id: ID!): User
	}
`;

const mutation: ITypedef = `
	type Mutation {
		# 更新用户
		updateUser(id: ID!, newData: String!): User
	}
`;

const resolvers: IResolvers = {
	Query: {
		async users(parent, { skip, limit }) {
			return await UserAPI.getList({ skip, limit });
		},

		async userById(parent, { id }) {
			return await UserAPI.getDetail(id);
		},
	},

	Mutation: {
		async updateUser(parent, { id, newData }) {
			return await UserAPI.update(id, newData);
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${CommonTypeDef}
		${UserTypeDef}
		${query}
		${mutation}
	`,
	resolvers,
});
