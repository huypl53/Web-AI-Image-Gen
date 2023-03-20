module.exports = {
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.js']
			},
			'babel-module': { allowExistingDirectories: true }
		}
	},
	parser: '@babel/eslint-parser',
	extends: ['prettier', 'plugin:import/errors', 'plugin:import/warnings'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			legacyDecorators: true
		}
	},
	plugins: ['import', '@babel', 'jest'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jquery: true,
		mocha: true,
		'jest/globals': true
	},
	rules: {
		'import/extensions': [
			'error',
			{
				js: 'warning',
				ts: 'warning'
			}
		],
		'ordered-imports': [0],
		'import/prefer-default-export': 0,
		'import/no-cycle': 0,
		'import/order': [
			'error',
			{
				'newlines-between': 'ignore'
			}
		],
		camelcase: 0,
		'no-underscore-dangle': 0,
		'no-return-assign': 0,
		'no-param-reassign': 0,
		'no-tabs': 0,
		'no-multi-spaces': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-multi-str': 2,
		'no-use-before-define': 2,
		'no-const-assign': 2,
		'no-cond-assign': 2,
		'no-constant-condition': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-delete-var': 2,
		'no-dupe-keys': 2,
		'no-dupe-args': 2,
		'no-dupe-class-members': 2,
		'no-duplicate-case': 2,
		'no-else-return': [0, { allowElseIf: true }],
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-semi': 2,
		'no-fallthrough': 2,
		'no-func-assign': 2,
		'no-inner-declarations': [2, 'functions'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-mixed-spaces-and-tabs': 1,
		'no-sparse-arrays': 2,
		'no-negated-in-lhs': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-redeclare': 2,
		'no-regex-spaces': 2,
		'no-undef': 2,
		'no-unreachable': 2,
		'no-unused-expressions': 0,
		'no-unused-vars': 'off',
		'max-len': 0,
		'no-void': 2,
		'no-var': 2,
		'one-var': [2, 'never'],
		'no-lonely-if': 2,
		'no-trailing-spaces': 2,
		complexity: [1, 31],
		'space-in-parens': [2, 'never'],
		'space-before-blocks': [2, 'always'],
		indent: 'off',
		'eol-last': [2, 'always'],
		'comma-dangle': [2, 'never'],
		'keyword-spacing': 2,
		'block-spacing': 2,
		'brace-style': [2, '1tbs', { allowSingleLine: true }],
		'computed-property-spacing': 2,
		'comma-spacing': 2,
		'comma-style': 2,
		'guard-for-in': 2,
		'wrap-iife': 2,
		'block-scoped-var': 2,
		curly: [2, 'all'],
		eqeqeq: [2, 'allow-null'],
		'new-cap': 'off',
		'use-isnan': 2,
		'valid-typeof': 2,
		'linebreak-style': 0,
		'prefer-template': 2,
		quotes: [1, 'single'],
		semi: [2, 'always'],
		'prefer-const': 2,
		'object-shorthand': 2,
		'consistent-return': 0,
		'global-require': 'off',
		'require-await': 2,
		'func-names': 0,
		'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
		'no-async-promise-executor': [0],
		'max-classes-per-file': [0],
		'no-multiple-empty-lines': [0],
		'no-sequences': 'off'
	},
	globals: {
		__DEV__: true
	},
	overrides: [
		{
			files: ['e2e/**'],
			globals: {
				by: true,
				detox: true,
				device: true,
				element: true,
				expect: true,
				waitFor: true
			},
			rules: {
				'import/no-extraneous-dependencies': 0,
				'no-await-in-loop': 0,
				'no-restricted-syntax': 0
			}
		},
		{
			files: ['**/*.js', '**/*.ts'],
			extends: [
				'eslint:recommended',
				'prettier',
				'plugin:import/recommended',
				'plugin:import/errors',
				'plugin:import/warnings'
				// "plugin:import/javascript",
			],
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2018,
				ecmaFeatures: {
					experimentalObjectRestSpread: true,
					legacyDecorators: true
				}
			},
			plugins: ['import'],
			rules: {
				'func-call-spacing': 'off',
				indent: 'off',
				'comma-dangle': [2, 'never'],
				'no-return-assign': 0,
				'no-dupe-class-members': 'off',
				'no-extra-parens': 'off',
				'no-spaced-func': 'off',
				'no-unused-vars': 'off',
				'no-useless-constructor': 'off',
				'no-use-before-define': 'off',
				'new-cap': 'off',
				'lines-between-class-members': 'off'
			},
			settings: {
				'import/resolver': {
					node: {
						extensions: ['.js', '.ts']
					},
					// javascript: {
					// 	alwaysTryTypes: true
					// },
					'babel-module': { allowExistingDirectories: true }
				}
			}
		}
	]
};
