// next.config.js
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
