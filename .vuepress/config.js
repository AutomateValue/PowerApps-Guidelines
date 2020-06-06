const { nav, sidebar } = require("vuepress-bar")(`${__dirname}/..`, { addReadMeToFirstGroup: false });

module.exports = {
    title: 'PowerApps Guidelines',
    description: 'Coding standards and Guidelines for Customizing and Extending PowerApps & Dynamics 365',
    themeConfig: {
      repo: 'DynamicHands/PowerApps-Guidelines',
      editLinks: true,
      lastUpdated: 'Last Updated', // string | boolean
      logo: 'logo.png',
      displayAllHeaders: false,
      //...menuConfig
      nav: [
        { text: 'Home', link: '/' },
        { text: 'DynamicHands', link: 'https://www.dynamichands.nl' },
        ...nav
      ],
      sidebar: sidebar.filter(i => !(i.title === "Node Modules" || i === ""))
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-24299173-2' // UA-00000000-0
      }
    ]
  ],
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
    ['link', { rel: 'icon', sizes: '196x196', href: '/favicon-196x196.png' }],
    ['link', { rel: 'icon', sizes: '128x128', href: '/favicon-128.png' }],
		['link', { rel: 'icon', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'icon', sizes: '64x64', href: '/favicon-64x64.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#f18800' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
};