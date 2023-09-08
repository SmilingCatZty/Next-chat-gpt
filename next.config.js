/** 
 * Next配置文件
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  // basePath: '/',
  env: {
    customKey: 'my-value',
    OPENAI_API_KEY: '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'
  },
  eslint: {},
  reactStrictMode: true,
}

module.exports = nextConfig
