import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	compressHTML: false,
	integrations: [
		icon({
			iconDir: 'src/assets/icons',
			svgoOptions: {
				plugins: [
					{
						name: 'removeAttrs',
						params: {
							attrs: '*:(stroke|fill):((?!^currentColor$).)*',
						},
					},
				],
			},
		}),
		compress({
			CSS: false,
		}),
	],
})
