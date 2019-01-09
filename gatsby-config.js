const autoprefixer = require('autoprefixer')
const rucksackCSS = require('rucksack-css')
const config = require('./.config')

module.exports = {
  siteMetadata: {
    title: `Heba El-Shimy's Portfolio & Blog`,
    author: `Heba El-Shimy`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blogposts`,
        name: `blogposts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Portfolio`,
        name: `Heba El-Shimy Porfolio & Blog`,
        start_url: `./index.html?launcher=true`,
        display: `standalone`,
        theme_color: `#000000`,
        background_color: `#000000`,
        icons: [
          {
            src: 'favicon.ico',
            sizes: '16x16 24x24 32x32 64x64',
            type: 'image/x-icon'
          },
          {
            src: 'images/touch/favicon-16x16.ico',
            sizes: '16x16',
            type: 'image/x-icon',
          },
          {
            src: 'images/touch/favicon-24x24.ico',
            sizes: '24x24',
            type: 'image/x-icon',
          },
          {
            src: 'images/touch/favicon-32x32.ico',
            sizes: '32x32',
            type: 'image/x-icon',
          },
          {
            src: 'images/touch/favicon-64x64.ico',
            sizes: '64x64',
            type: 'image/x-icon',
          },
          {
            src: 'images/touch/chrome-touch-icon-1x.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'images/touch/chrome-touch-icon-2x.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'images/touch/chrome-touch-icon-3x.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'images/touch/chrome-touch-icon-4x.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'images/touch/ms-touch-icon-144x144-precomposed.png',
            sizes: '144x144',
            type: 'image/png',
          }
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          rucksackCSS(),
        ],
        precision: 8,
      },
    },
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: { 
        name: `pages`,
        path: `${__dirname}/src/pages`,
        ignore: `[**/.*]`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: { 
        name: `blogposts`,
        path: `${__dirname}/src/blogposts`,
        ignore: `[**/.*]`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor,
        showSpinner: true,
      },
    },
  ],
};
