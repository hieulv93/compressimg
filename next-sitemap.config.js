/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://compressimg.pro',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/compress-image': 1.0,
      '/': 0.9,
    }
    return {
      loc: path,
      priority: priorities[path] ?? (path.includes('/blog') ? 0.8 : 0.7),
      changefreq: path.includes('/blog') ? 'monthly' : 'weekly',
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/compress-image'),
  ],
}
