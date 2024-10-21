export default {
	tabWidth: 2,
	useTabs: true,
	semi: false,
	endOfLine: 'auto',
	arrowParens: 'avoid',
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 120,
	organizeImportsSkipDestructiveCodeActions: true,
	astroOrganizeImportsMode: 'SortAndCombine',
	plugins: [
		'prettier-plugin-css-order',
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-plugin-astro-organize-imports',
	],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
