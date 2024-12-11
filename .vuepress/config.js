const { defaultTheme } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
//const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { nav, sidebar } = require("vuepress-bar")({ addReadMeToFirstGroup: false });

// https://github.com/vuejs/vuepress/issues/613
sidebar.forEach(element => {
  element.text = element.title;

  if (element.children)
  {
    let withSlash = [];
    element.children.forEach(child => {
      withSlash.push(`/${child}`);
    });
    element.children = withSlash;
  }
});

console.log(sidebar);

module.exports = {  
    lang: 'en-US',
    title: 'PowerApps Guidelines',
    description: 'Coding standards and Guidelines for Customizing and Extending PowerApps & Dynamics 365',
    theme: defaultTheme({
      repo: 'AutomateValue/PowerApps-Guidelines',
      editLink: true,
      logo: '/logo.png',
      navbar: [
        { text: 'Home', link: '/'},
        { text: 'AutomateValue', link: 'https://automatevalue.com' },
        ...nav
      ],
      //sidebar: 'auto'
      sidebar: sidebar.filter(i => i.title !== "Node Modules" && i !== "")
    }), 
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
    ],
    plugins: [
      //googleAnalyticsPlugin({ id: 'G-XXXXXXXXXX' }),
      registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components'), }),
    ],
};