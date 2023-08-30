/** 
 * Next配置文件
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
  // basePath: '/',
  env: {
    customKey: 'my-value',
  },
  eslint: {},
  reactStrictMode: true,
}

module.exports = nextConfig
