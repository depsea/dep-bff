import { Base } from './_base';

export type UserID = string;

export class UserAPI extends Base {
	/**
	 * 获取用户列表
	 */
	static async getList(conditions: {
		skip?: number,
		limit?: number,
	} = {}) {
		const { skip = 0, limit = 20 } = conditions;

		const { res } = await this.GET({
			api: '/users',
			query: { skip, limit },
		});
		return this.JSON<{}>(res);
	}

	/**
	 * 获取用户详情
	 */
	static async getDetail(userId: UserID) {
		const { res } = await this.GET({
			api: '/users',
			params: [userId],
		});

		return this.JSON<{}>(res);
	}

	/**
	 * 更新用户信息
	 */
	static async update(userId: UserID, newData: any) {
		const { res } = await this.PUT({
			api: '/users',
			params: [userId],
		});

		return this.JSON<{}>(res);
	}
}
