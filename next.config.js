/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig
module.exports = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/entryPage',
        permanent: false,
      },
    ];
  },
};