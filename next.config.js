/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: 'Referrer-Policy',
        value: 'same-origin',
    },
    {
        key: 'X-Permitted-Cross-Domain-Policies',
        value: 'none',
    },
]

const nextConfig = {
    experimental: {
        appDir: true,
        async headers() {
            return [
                {
                    source: '/(.*)',
                    headers: securityHeaders,
                },
            ]
        },
    },
}

module.exports = nextConfig
