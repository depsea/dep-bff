import { Base } from './_base';

export type ArticleID = string;

export class ArticleAPI extends Base {
	/**
	 * 获取文章列表
	 * @param conditions
	 */
	static async getList(conditions: {
		limit?: number,
		skip?: number,
	} = {}) {
		const { limit = 20, skip = 0 } = conditions;

		const { res } = await this.GET({
			api: '/articles',
			query: { limit, skip },
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 获取文章详情
	 */
	static async getDetail(articleId: ArticleID) {
		const { res } = await this.GET({
			api: '/articles',
			params: [articleId],
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 添加文章
	 */
	static async create(newArticle: any) {
		const { res } = await this.POST({
			api: '/articles',
			body: newArticle,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 更新文章
	 */
	static async update(id: ArticleID, newArticle: any) {
		const { res } = await this.PUT({
			api: '/articles',
			params: [id],
			body: newArticle,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 删除文章
	 */
	static async delete(id: ArticleID) {
		const { res } = await this.DELETE({
			api: '/articles',
			params: [id],
		});

		return this.JSON<{}>(res);
	}
}
