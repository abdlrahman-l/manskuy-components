const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')	
const typescript = require('@rollup/plugin-typescript')	
import { DEFAULT_EXTENSIONS } from '@babel/core';
let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };

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