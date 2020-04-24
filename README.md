---
home: true
heroImage: logo.png
heroText: PowerApps Guidelines
tagline: Coding standards and Guidelines for Customizing and Extending PowerApps & Dynamics 365
actionText: Get Started →
actionLink: /guidelines/
features:
- title: Code standards
  details: No confusions how to do and name parts of the solution. Understanding solutions faster of other projects.
- title: Guidelines
  details: Follow the best practices of experienced senior consultants and developers. Don re-invent the wheel again.
- title: Improve
  details: Learn from this guidelines be reading it. Share your leasons learned and help improve this guidelines.
footer: LGPL-3.0 | Copyright © 2020 DynamicHands
---

# PowerApps Guidelines project

This project attempts to provide guidelines for PowerApp/Dynamics365 projects done by DynamicHands.

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
npm packager npm install npm@latest -g
```

### Running

To start writing documentation:

```sh
npm run dev
```

This command will start a local development server on <http://localhost:8080/> that runs the PowerApps guidelines website. Every change in the guidelines will be immediately visible on the local running website.

## Writing

TODO

We created two Vue-components to visualize if rules are required or recommended. Place the following tags behing the tilte of a guideline to indicate the importance:

- The tag `<Required/>` will be rendered into <Required/> . Use this for guidelines that you should never skip and should be applicable to all situations;
- The tag `<Recommended/>` will be rendered into <Recommended/> . Use this for strongly recommended guidelines.

## Deploying

We are hosting the PowerApps Guidelines on [Netlify](https://www.netlify.com/). Netlify will build on each commit in the `master` branch and publish it, so deploying is fully automated.

Want to deploy yourself, than running the following command will publish the guidelines as a static website in the folder `.vuepress/dist` which can than be served by any webserver.

```sh
npm run build
```

## Contributing

Please read [CONTRIBUTING.md](TODO) for details on our code of conduct, and the process for submitting pull requests to us.
