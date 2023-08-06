/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    optimizeFonts: false,
    images: {
        domains: ["image.tmdb.org"]
    }
}

module.exports = nextConfig
