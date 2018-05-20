import { IResolvers, ITypedef, ITypeDefinitions, makeExecutableSchema } from 'graphql-tools';

export const UserTypeDef: ITypedef = `
	# 用户状态
	enum UserStatus {
		disable
		able
	}

	# 用户
	type User {
		# 用户id
		id: ID!

		# 用户名
		username: String

		# 昵称
		nickname: String

		# 创建时间
		createTime: Int

		# 更新时间
		updateTime: Int

		# 状态
		status: UserStatus
	}
`;

const query: ITypedef = `
	type Query {
		# 获取用户列表
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
