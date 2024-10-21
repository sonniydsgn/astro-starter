import type { HTMLAttributes } from 'astro/types'

export interface ButtonLink extends HTMLAttributes<'button'>, HTMLAttributes<'a'> {
	link?: string
	class?: string
}
