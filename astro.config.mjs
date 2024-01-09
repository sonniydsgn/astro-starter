import { defineConfig } from 'astro/config'
// import compress from 'astro-compress'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon(),
		// compress({
		// 	CSS: false,
		// }),
	],
})
