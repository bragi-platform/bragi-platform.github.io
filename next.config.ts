import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { remarkTokenize } from "@/features/tokenize/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: "export",
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    reactStrictMode: true,
    webpack: (config) => {
        config.module?.rules?.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkTokenize],
    },
});

export default withMDX(nextConfig);
