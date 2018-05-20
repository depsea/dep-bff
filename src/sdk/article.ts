import { Base } from './_base';

const mock = [
	{ id: 1, title: 'test1', desc: 'demo1', body: 'body1' },
	{ id: 2, title: 'test2', desc: 'demo2', body: 'body2' },
	{ id: 3, title: 'test3', desc: 'demo3', body: 'body3' },
	{ id: 4, title: 'test4', desc: 'demo4', body: 'body4' },
	{ id: 5, title: 'test5', desc: 'demo5', body: 'body5' },
];

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
	static async getDetail(articleId: string) {
		const { res } = await this.GET({
			api: '/articles/:article_id',
			params: [articleId],
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 添加文章
	 */
	static async create() { }

	/**
	 * 更新文章
	 */
	static async update() { }

	/**
	 * 删除文章
	 */
	static async delete() { }
}
