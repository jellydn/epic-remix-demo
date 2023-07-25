/// <reference types="vitest" />

import { react } from './tests/setup/vitejs-plugin-react.cjs'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: { postcss: { plugins: [] } },
	test: {
		include: ['./app/**/*.test.{ts,tsx}'],
		environment: 'jsdom',
		setupFiles: ['./tests/setup/setup-test-env.ts'],
		globalSetup: ['./tests/setup/global-setup.ts'],
		coverage: {
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
	},
})
