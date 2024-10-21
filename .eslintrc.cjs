module.exports = {
	root: true,
	env: {
		node: true,
		es2020: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	extends: ['plugin:astro/recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		'sort-imports': 'off',
		'import/order': 'off',
		'no-var': 'error',
		'prefer-const': 'off',
		'func-names': 'off',
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
}
