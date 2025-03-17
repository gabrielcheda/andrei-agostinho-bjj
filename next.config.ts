import type { NextConfig } from "next";

//config pra exportar estatico
const nextConfig: NextConfig = {
  basePath: '/andrei-agostinho-bjj',
  trailingSlash: true,
  output: "export", 
  // eslint: {
  //   ignoreDuringBuilds: true
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig; 