const { isDevelopment } = require('./src/helpers')

if (isDevelopment) {
  require('dotenv').config({
    path: '.env',
  })
}

module.exports = {
  siteMetadata: {
    title: 'Donde la locura nos lleve!',
    headline: 'Vanlifers y viajeros a tiempo completo!',
    description: 'Blog de viaje donde dos locos contaran sus pequeñas aventuras en todos y cada uno de sus viajes.',
    author: '@dondelalocura',
    url: 'https://dondelalocuranoslleve.es',
    keywords: ['viajes', 'vanlife', 'aventuras'],
    startDate: '2019-05-30',
    social: {
      twitter: {
        name: '@dondelalocuranoslleve',
        url: 'https://twtter.com/dondelalocuranoslleve',
      },
      facebook: {
        name: 'dondelalocuranoslleve',
        url: 'https://www.facebook.com/dondelalocuranoslleve',
      },
      instagram: {
        name: 'donde_la_locura_nos_lleve',
        url: 'https://instagram.com/donde_la_locura_nos_lleve',
      },
    },
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-reading-time',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'wheremadnesstakesus',
        // eslint-disable-next-line camelcase
        short_name: 'starter',
        // eslint-disable-next-line camelcase
        start_url: '/',
        // eslint-disable-next-line camelcase
        background_color: '#663399',
        // eslint-disable-next-line camelcase
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/logo.png',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        // eslint-disable-next-line camelcase
        access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
        // eslint-disable-next-line camelcase
        instagram_id: process.env.GATSBY_INSTAGRAM_ID,
        username: process.env.GATSBY_INSTAGRAM_USERNAME,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}