// next.config.js
module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'ca'],
  },
  async rewrites() {
    return [
      {
        source: '/:locale(en|es|ca)/:path*',
        destination: '/:path*', // redirect to the same path without locale
        locale: false,
      },
      {
        source: '/:path*',
        destination: '/:path*', // ensure non-locale paths are handled
        locale: false,
      },
    ];
  },
};
