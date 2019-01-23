module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Heba El-Shimy - Data Scientist | Portfolio & Blog`,
    titleTemplate: '%s · Heba El-Shimy',
    author: `Heba El-Shimy`,
    url: `https://www.hebaelshimy.com`,
    description: `Heba El-Shimy is a Data Scientist, passionate about AI and experienced in Machine Learning. This website is a Personal Portfolio & Blog`,
    image: '/static/assets/heba.png',
    owner: 'Heba El-Shimy',
    twitterUsername: '@heba_el_shimy',
    siteLanguage: 'en',
    logo: '/static/assets/logo.svg',
    launchIcons: [
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-640x1136.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-750x1334.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-1242x2208.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-1125x2436.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-1536x2048.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-1668x2224.png'
      },
      {
        name: 'apple-touch-startup-image',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        link: '/static/images/launch/apple-touch-startup-image-2048x2732.png'
      },
    ],
    touchIcons: [
      {
        type: 'apple-touch-icon',
        size: '',
        href: '/static/images/touch/apple-touch-icon.png'
      },
      {
        type: 'apple-touch-icon',
        size: '57x57',
        href: '/static/images/touch/apple-touch-icon-57x57.png'
      },
      {
        type: 'apple-touch-icon',
        size: '72x72',
        href: '/static/images/touch/apple-touch-icon-72x72.png'
      },
      {
        type: 'apple-touch-icon',
        size: '114x114',
        href: '/static/images/touch/apple-touch-icon-114x114.png'
      },
      {
        type: 'apple-touch-icon',
        size: '120x120',
        href: '/static/images/touch/apple-touch-icon-120x120.png'
      },
      {
        type: 'apple-touch-icon',
        size: '144x144',
        href: '/static/images/touch/apple-touch-icon-144x144.png'
      },
      {
        type: 'apple-touch-icon',
        size: '152x152',
        href: '/static/images/touch/apple-touch-icon-152x152.png'
      },
    ],
    nav: [
      { path: 'https://medium.com/@heba.n.elshimy', name: 'Blog', hidden: true },
      { path: '/#about', name: 'About' },
      { path: '/#projects', name: 'Projects' },
      { path: '/blog', name: 'Blog' },
      { path: '/#contact', name: 'Contact' },
    ],
    menuLinks: [
      {
        name:'home',
        link:'/'
      },
      {
        name: 'about',
        link: '/#about'
      },
      {
        name: 'projects',
        link: '/#projects'
      },
      {
        name:'blog',
        link:'/blog/'
      },
      {
        name: 'contact',
        link: '/#contact'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-images`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography.js`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#d99e8e`,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sacramento', 'Dosis']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-132211546-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Heba's Blog`,
        name: `Heba El-Shimy Porfolio & Blog`,
        start_url: `./index.html?launcher=true`,
        display: `standalone`,
        theme_color: `#d99e8e`,
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
    `gatsby-plugin-netlify`,
  ],
};
