const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')	

module.exports = [
	{
		input: 'src/index.ts',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				rootMode: 'upward',
				exclude: ['node_modules/**']
			})
		]
	}
];