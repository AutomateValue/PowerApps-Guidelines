module.exports = {
    title: 'PowerApps Guidelines',
    description: 'Coding standards and Guidelines for Customizing and Extending PowerApps & Dynamics 365',
    themeConfig: {
      repo: 'DynamicHands/PowerApps-Guidelines',
      editLinks: true,
      lastUpdated: 'Last Updated', // string | boolean
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guidelines', link: '/guidelines/' },
        { text: 'DynamicHands', link: 'https://www.dynamichands.nl' }
      ],
      displayAllHeaders: false,
      sidebar: [
        {
          title: 'Introduction',
          path: '/guidelines/',
          collapsable: false,
          sidebarDepth: 2
        },
        {
          title: 'Guidelines',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guidelines/installation-configuration',
            '/guidelines/entity-modeling',
            '/guidelines/extending-clientside',
            '/guidelines/extending-serverside',
            '/guidelines/datamigrations',
            '/guidelines/tools',
            '/guidelines/tryout-markdown'
          ]
        }
      ]
  }
}