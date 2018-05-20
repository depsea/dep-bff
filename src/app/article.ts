import { IResolvers, ITypedef, makeExecutableSchema } from 'graphql-tools';
import { ArticleAPI } from '../sdk';
import { CommonTypeDef } from './common';
import { UserTypeDef } from './user';

export const ArticleTypeDef: ITypedef = `
	# 文章状态
	enum ArticleStatus {
		disable
		able
		publish
	}

	type Article {
		# 文章id
		id: ID

		# 文章标题
		title: String

		# 文章摘要
		desc: String

		# 文章内容
		body: String

		# 创建者
		createUser: User

		# 创建时间
		createTime: Timestamp

		# 更新时间
		updateTime: Timestamp

		# 状态
		status: ArticleStatus
	}
`;

const query: ITypedef = `
	type Query {
		# 获取文章列表
		articles(skip: Int = 0, limit: Int = 20): [Article]

		# 通过id获取文章详情
		articleById(id: ID!): Article
	}
`;

const mutations: ITypedef = `
	type Mutation {
		# 创建文章
		createArticle(newData: String!): Article

		# 更新文章
		updateArticle(id: ID!, newData: String!): Article

		# 删除文章
		deleteArticle(id: ID!): Article
	}
`;

const resolvers: IResolvers = {
	ArticleStatus: {
		disable: '0',
		able: '1',
		publish: '2',
	},

	Query: {
		async articles(parent, { limit, skip }) {
			return await ArticleAPI.getList({ limit, skip });
		},

		async articleById(parent, { id }) {
			return await ArticleAPI.getDetail(id);
		},
	},

	Mutation: {
		async createArticle(parent, { newData }) {
			return await ArticleAPI.create(newData);
		},

		async updateArticle(parent, { id, newData }) {
			return await ArticleAPI.update(id, newData);
		},

		async deleteArticle(parent, { id }) {
			return await ArticleAPI.delete(id);
		},
	},
};

export default makeExecutableSchema({
	typeDefs: `
		${CommonTypeDef}
		${UserTypeDef}
		${ArticleTypeDef}
		${query}
		${mutations}
	`,
	resolvers,
});
