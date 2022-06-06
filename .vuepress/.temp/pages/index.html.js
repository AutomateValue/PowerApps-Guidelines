export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "logo.png",
    "heroText": "PowerApps Guidelines",
    "tagline": "Coding standards and Guidelines for Customizing and Extending Power Apps, Dynamics 365 Apps & Power Automate",
    "actions": [
      {
        "text": "Get Started →",
        "link": "/00.introduction",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Code standards",
        "details": "No confusions how to do and name parts of the solution. Understanding solutions faster of other projects."
      },
      {
        "title": "Guidelines",
        "details": "Follow the best practices of experienced senior consultants and developers. Don re-invent the wheel again."
      },
      {
        "title": "Improve",
        "details": "Learn from this guidelines be reading it. Share your leasons learned and help improve this guidelines."
      }
    ],
    "footer": "LGPL-3.0 | Copyright © 2022 AutomateValue"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Set up and work locally",
      "slug": "set-up-and-work-locally",
      "children": [
        {
          "level": 3,
          "title": "Prerequisites",
          "slug": "prerequisites",
          "children": []
        },
        {
          "level": 3,
          "title": "Running",
          "slug": "running",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Writing",
      "slug": "writing",
      "children": []
    },
    {
      "level": 2,
      "title": "Deploying",
      "slug": "deploying",
      "children": []
    },
    {
      "level": 2,
      "title": "Contributing",
      "slug": "contributing",
      "children": []
    },
    {
      "level": 2,
      "title": "Style of writing?",
      "slug": "style-of-writing",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1646020873000,
    "contributors": [
      {
        "name": "remyvd",
        "email": "remy.vanduijkeren@dynamichands.nl",
        "commits": 5
      },
      {
        "name": "remyvd",
        "email": "remy@automatevalue.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
