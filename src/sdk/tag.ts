import { Base } from './_base';

export type TagID = string;

export class TagAPI extends Base {
	/**
	 * 获取标签列表
	 */
	static async getList(conditions: {
		skip?: number,
		limit?: number,
	} = {}) {
		const { skip = 0, limit = 20 } = conditions;

		const { res } = await this.GET({
			api: '/tags',
			query: { skip, limit },
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 获取标签详情
	 */
	static async getDetail(tagId: TagID) {
		const { res } = await this.GET({
			api: '/tags',
			params: [tagId],
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 创建标签
	 */
	static async create(newTag: any) {
		const { res } = await this.POST({
			api: '/tags',
			body: newTag,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 更新标签
	 */
	static async update(tagId: TagID, newTag: any) {
		const { res } = await this.PUT({
			api: '/tags',
			params: [tagId],
			body: newTag,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 删除标签
	 */
	static async delete(tagId: TagID) {
		const { res } = await this.DELETE({
			api: '/tags',
			params: [tagId],
		});

		return this.JSON<{}>(res);
	}
}
