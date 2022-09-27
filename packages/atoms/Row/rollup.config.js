const babel = require('rollup-plugin-babel')
const typescript = require('@rollup/plugin-typescript')	
import { DEFAULT_EXTENSIONS } from '@babel/core';

const commonConf = {
	output: [
		{ dir: 'lib', format: 'cjs',
		sourcemap: true,
	
		preserveModules: true,
		preserveModulesRoot: 'src'
	},
		{ dir: 'lib', format: 'es',
		sourcemap: true,
	
		preserveModules: true,
		preserveModulesRoot: 'src'
	}
	],
	plugins: [
		typescript(),
		babel({
			rootMode: 'upward',
			exclude: ['node_modules/**'],
			extensions: [
				...DEFAULT_EXTENSIONS,
				'.ts',
				'.tsx'
			]
		})
	]
}

module.exports = [
	{
		input: [
			'src/index.tsx',
			'src/styles.ts'
		],
		...commonConf
	}
];