---
home: true
title: Home
heroImage: logo.png
heroText: PowerApps Guidelines
tagline: Coding standards and Guidelines for Customizing and Extending Power Apps, Dynamics 365 Apps & Power Automate 
actions:
  - text: Get Started →
    link: /00.introduction
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
- title: Code standards
  details: No confusions how to do and name parts of the solution. Understanding solutions faster of other projects.
- title: Guidelines
  details: Follow the best practices of experienced senior consultants and developers. Don re-invent the wheel again.
- title: Improve
  details: Learn from this guidelines be reading it. Share your leasons learned and help improve this guidelines.
footer: LGPL-3.0 | Copyright © 2022 AutomateValue
---

# PowerApps Guidelines project

This project attempts to provide guidelines for the Power Platform, espacilly Power Apps, Power Automate and the Dynamics 365 CE apps.

## Set up and work locally

These instructions will get you a copy of the PowerApps guidelines website up and running on your local machine for writing and development purposes. See deployment for notes on how to deploy the PowerApps guidelines website.

### Prerequisites

The PowerApps guidelines website is build upon [VuePress](https://vuepress.vuejs.org/). To run the website locally it requires Node.js version 8.6 or higher and npm. To check if Node.js and npm is installed open the command line and type the following lines to show the versions of them:

```sh
node -v
npm -v
```

To install or update Node.js download the installer from <https://nodejs.org.> To update npm open the command line and type:

```sh
npm install npm@latest -g
```

Then restore all dependencies of the project by open the command line in the root of the project and type:
```sh
npm install
```

To update existing packages to their latest version:

```sh
npm outdated # show out of date dependencies
npm update
```

### Running

To start writing documentation:

```sh
npm run dev
```

This command will start a local development server on <http://localhost:8080/> that runs the PowerApps guidelines website. Every change in the guidelines will be immediately visible on the local running website.

## Writing

TODO

We created two Vue-components to visualize if rules are required or recommended. Place the following tags behing the title of a guideline to indicate the importance:

1. The tag `<Required/>` will be rendered into <Required/> . Use this for guidelines that you should never skip and should be applicable to all situations.
2. The tag `<Recommended/>` will be rendered into <Recommended/> . Use this for strongly recommended guidelines.
3. The tag `<Depends/>` will be rendered into <Depends/> . Use this for guidellines that may not be applicable in all situations.

## Deploying

We are hosting the PowerApps Guidelines on [Netlify](https://www.netlify.com/). Netlify will build on each commit in the `master` branch and publish it, so deploying is fully automated.

[![Netlify Status](https://api.netlify.com/api/v1/badges/98c67366-67a1-45ad-b485-91c072a23906/deploy-status)](https://app.netlify.com/sites/powerapps-guidelines/deploys)

Want to deploy yourself, than running the following command will publish the guidelines as a static website in the folder `.vuepress/dist` which can than be served by any webserver.

```sh
npm run build
```

## Contributing

Please read [CONTRIBUTING.md](TODO) for details on our code of conduct, and the process for submitting pull requests to us.

## Style of writing?

Same as [Microsoft Azure REST API Guidelines]([https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md) ?

:white_check_mark: **DO** adopt this pattern. If you feel you need an exception, contact the Azure HTTP/REST Stewardship Board **prior** to implementation.

:ballot_box_with_check: **YOU SHOULD** adopt this pattern. If not following this advice, you MUST disclose your reason during the Azure HTTP/REST Stewardship Board review.

:heavy_check_mark: **YOU MAY** consider this pattern if appropriate to your situation. No notification to the Azure HTTP/REST Stewardship Board is required.

:warning: **YOU SHOULD NOT** adopt this pattern. If not following this advice, you MUST disclose your reason during the Azure HTTP/REST Stewardship Board review.

:no_entry: **DO NOT** adopt this pattern. If you feel you need an exception, contact the Azure HTTP/REST Stewardship Board **prior** to implementation.
