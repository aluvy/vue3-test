// const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: config => {
		config.plugin('define').tap(definitions => {
			Object.assign(definitions[0], {
				__VUE_OPTIONS_API__: 'true',
				__VUE_PROD_DEVTOOLS__: 'false',
				__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
			});
			return definitions;
		});
	},

	// publicPath: process.env.BASE_URL,
	publicPath: process.env.NODE_ENV === 'production' ? 'https://aluvy.github.io/vue3-test/front/dist/' : '/',
	assetsDir: process.env.BASE_URL,
	// devServer: {
	// 	contentBase: path.join(__dirname, ''),
	// },
});
