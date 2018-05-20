import { Base } from './_base';

export type CategoryID = string;

export class CategoryAPI extends Base {
	/**
	 * 获取类别列表
	 */
	static async getList(conditions: { skip?: number, limit?: number } = {}) {
		const { skip = 0, limit = 20 } = conditions;

		const { res } = await this.GET({
			api: '/categories',
			query: { skip, limit },
		});

		return this.JSON<{}>(res);

	}

	/**
	 * 获取类别详情
	 */
	static async getDetail(categoryId: CategoryID) {
		const { res } = await this.GET({
			api: '/categories',
			params: [categoryId],
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 添加类别
	 */
	static async create(newCategory: any) {
		const { res } = await this.POST({
			api: '/categories',
			body: newCategory,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 更新类别
	 */
	static async update(id: CategoryID, newCategory: any) {
		const { res } = await this.PUT({
			api: '/categories',
			params: [id],
			body: newCategory,
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 删除类别
	 */
	static async delete(id: CategoryID) {
		const { res } = await this.DELETE({
			api: '/categories',
			params: [id],
		});

		return this.JSON<{}>(res);
	}
}
