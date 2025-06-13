// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from 'next';
// import type { Rewrite } from 'next/dist/lib/load-custom-routes';

// const nextConfig: NextConfig = {
//   async rewrites(): Promise<{ beforeFiles?: Rewrite[]; afterFiles?: Rewrite[]; fallback?: Rewrite[] } | Rewrite[]> {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://host.docker.internal:8000/api/:path*/',
//       },
//     ];
//   },
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://host.docker.internal:8000/api/:path*/',
            },
        ]
    },
};
