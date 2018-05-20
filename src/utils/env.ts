const { NODE_ENV = '' } = process.env;

export const Env = {
	getEnv() {
		return NODE_ENV;
	},

	isDev() {
		return NODE_ENV === 'dev';
	},

	isProduction() {
		return NODE_ENV === 'production';
	},

	isProd() {
		return ['production'].includes(NODE_ENV);
	},
};
