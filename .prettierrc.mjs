export default {
	tabWidth: 2,
	useTabs: true,
	semi: false,
	endOfLine: 'lf',
	arrowParens: 'avoid',
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 80,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
