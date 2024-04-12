const ROUTES = [
  // {
  //   url: '/check',
  //   auth: false,
  //   rateLimit: {
  //     windowMs: 15 * 60 * 1000,
  //     max: 5,
  //   },
  //   proxy: {
  //     target: 'https://localhost',
  //     changeOrigin: true,
  //     pathRewrite: {},
  //   },
  // },
  {
    url: '/check',
    auth: true,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: 'https://localhost',
      changeOrigin: true,
      pathRewrite: { '^/': '/auth/' },
    },
  },
];

module.exports = { ROUTES };
