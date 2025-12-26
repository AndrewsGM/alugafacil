/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@aluga-facil/ui', '@aluga-facil/utils', '@aluga-facil/types'],
    images: {
        domains: ['localhost', 'alugafacil.com.br'],
        formats: ['image/webp', 'image/avif'],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    },
};

module.exports = nextConfig;
