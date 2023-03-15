module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		]
	],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-transform-named-capturing-groups-regex',
		[
			'module-resolver',
			{
				alias: {
					'~': './src'
				}
			}
		]
	],
	env: {
		production: {
			plugins: ['transform-remove-console']
		}
	}
};
