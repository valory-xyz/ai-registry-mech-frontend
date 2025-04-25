module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/gnosis/mechs',
      permanent: false,
    },
    {
      source: '/mechs',
      destination: '/gnosis/mechs',
      permanent: false,
    },
    {
      source: '/mech',
      destination: '/gnosis/mech',
      permanent: false,
    },
    {
      source: '/factory',
      destination: '/gnosis/mechs',
      permanent: false,
    },
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'strict-dynamic' https://www.walletconnect.org; style-src 'self'; img-src 'self' blob: data:; font-src 'self' https://fonts.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; block-all-mixed-content; upgrade-insecure-requests; connect-src 'self' https://bridge.walletconnect.org usb;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Permissions-Policy',
            value: 'usb=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};
