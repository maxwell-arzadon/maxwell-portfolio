/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {    
		  colors: {
		  'new-blue': '#6B8AA4'
		  },
		  fontFamily: {
			body: ['Inter']
		  },
		  screens: {
			'custom-md': '1279px',
			'custom-lg': '1536px'
		  }
		},
	  },
	plugins: [],
}
