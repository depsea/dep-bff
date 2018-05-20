import { FetchOptions, Http, LogLevel } from 'xhttp-js';
import { Env } from '../utils';
import { hosts } from './_config';

const host = hosts[Env.getEnv()];

const _http = new Http({
	host,
	logLevel: Env.isProd() ? LogLevel.simple : LogLevel.full,
});

export class Base {
	static GET(options: FetchOptions) {
		return _http.get(options);
	}

	static POST(options: FetchOptions) {
		return _http.post(options);
	}

	static PUT(options: FetchOptions) {
		return _http.put(options);
	}

	static PATCH(options: FetchOptions) {
		return _http.patch(options);
	}

	static DELETE(options: FetchOptions) {
		return _http.delete(options);
	}

	static async JSON<T>(res: Response) {
		const json = await res.json() as T;
		return json;
	}
}
