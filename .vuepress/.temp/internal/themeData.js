export const themeData = {
  "repo": "AutomateValue/PowerApps-Guidelines",
  "editLink": true,
  "logo": "/logo.png",
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "AutomateValue",
      "link": "https://automatevalue.com"
    }
  ],
  "sidebar": [
    "00.introduction",
    {
      "title": "Environment Configuration",
      "children": [
        "/1000.environment-configuration/",
        "/1000.environment-configuration/DH1201",
        "/1000.environment-configuration/DH1202",
        "/1000.environment-configuration/DH1203",
        "/1000.environment-configuration/installation-configuration"
      ],
      "text": "Environment Configuration"
    },
    {
      "title": "User Experience-Design",
      "children": [
        "/1100.user-experience-design/ux-design"
      ],
      "text": "User Experience-Design"
    },
    {
      "title": "Naming Conventions",
      "children": [
        "/1200.naming-conventions/azure-resources",
        "/1200.naming-conventions/azure-tags",
        "/1200.naming-conventions/naming-conventions"
      ],
      "text": "Naming Conventions"
    },
    {
      "title": "Customization",
      "children": [
        "/1300.customization/entity-design"
      ],
      "text": "Customization"
    },
    {
      "title": "Extending Client-Side",
      "children": [
        "/1400.extending-client-side/extending-clientside"
      ],
      "text": "Extending Client-Side"
    },
    {
      "title": "Extending Server-Side",
      "children": [
        "/1500.extending-server-side/extending-serverside"
      ],
      "text": "Extending Server-Side"
    },
    {
      "title": "External Applications",
      "children": [
        "/1600.external-applications/external-applications"
      ],
      "text": "External Applications"
    },
    {
      "title": "Design Patterns",
      "children": [
        "/1700.design-patterns/design-patterns"
      ],
      "text": "Design Patterns"
    },
    {
      "title": "Data Migrations",
      "children": [
        "/1800.data-migrations/datamigrations"
      ],
      "text": "Data Migrations"
    },
    {
      "title": "Guidelines",
      "children": [
        "/2000.guidelines/possible-structure",
        "/2000.guidelines/rules-list-test",
        "/2000.guidelines/tools",
        "/2000.guidelines/tryout-markdown"
      ],
      "text": "Guidelines"
    },
    {
      "title": "Powerautomate",
      "children": [
        "/3000.powerautomate/powerautomate"
      ],
      "text": "Powerautomate"
    },
    "CONTRIBUTING"
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
