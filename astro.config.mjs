// если сайт многостраничный, то для лучшего seo можно поставить зависимость @astrojs/sitemap и раскомментировать
// import sitemap from '@astrojs/sitemap'

import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

// гайд по конфигу — https://astro.build/config
export default defineConfig({
	compressHTML: true,
	// site: 'https://nova-ug.ru',
	vite: {
		css: {
			transformer: 'lightningcss',
		},
	},
	integrations: [
		// sitemap(),
		icon({
			svgoOptions: {
				multipass: true,
				plugins: [
					'preset-default',
					{
						name: 'removeAttrs',
						params: {
							attrs: '*:(stroke|fill):((?!^currentColor$).)*',
						},
					},
				],
			},
		}),
	],
})
