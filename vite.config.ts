import path from "node:path";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import react, { type BabelOptions } from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import svgr from "vite-plugin-svgr";

import { remarkTokenProcess } from "./src/features/tokenize/plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		base: "./",
		plugins: [
			{
				enforce: "pre",
				...mdx({
					remarkPlugins: [remarkTokenProcess],
					providerImportSource: "@mdx-js/react",
				}),
			},
			svgr(),
			tailwindcss(),
			react({
				babel: [["babel-plugin-react-compiler"]] as BabelOptions,
			}),
			VitePluginRadar({
				enableDev: false,
				analytics: {
					id: env.VITE_GA_TRACKING_ID,
				},
			}),
			visualizer({
				emitFile: false,
				open: true,
			}),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
