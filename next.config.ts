import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	sassOptions: {
		quietDeps: true,
		silenceDeprecations: ['legacy-js-api'],
	},
}

export default nextConfig
