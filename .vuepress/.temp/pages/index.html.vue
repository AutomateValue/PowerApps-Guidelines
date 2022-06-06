<template><div><h1 id="powerapps-guidelines-project" tabindex="-1"><a class="header-anchor" href="#powerapps-guidelines-project" aria-hidden="true">#</a> PowerApps Guidelines project</h1>
<p>This project attempts to provide guidelines for the Power Platform, espacilly Power Apps, Power Automate and the Dynamics 365 CE apps.</p>
<h2 id="set-up-and-work-locally" tabindex="-1"><a class="header-anchor" href="#set-up-and-work-locally" aria-hidden="true">#</a> Set up and work locally</h2>
<p>These instructions will get you a copy of the PowerApps guidelines website up and running on your local machine for writing and development purposes. See deployment for notes on how to deploy the PowerApps guidelines website.</p>
<h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3>
<p>The PowerApps guidelines website is build upon <a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress<ExternalLinkIcon/></a>. To run the website locally it requires Node.js version 8.6 or higher and npm. To check if Node.js and npm is installed open the command line and type the following lines to show the versions of them:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> -v
<span class="token function">npm</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To install or update Node.js download the installer from <a href="https://nodejs.org." target="_blank" rel="noopener noreferrer">https://nodejs.org.<ExternalLinkIcon/></a> To update npm open the command line and type:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> npm@latest -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then restore all dependencies of the project by open the command line in the root of the project and type:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To update existing packages to their latest version:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> outdated <span class="token comment"># show out of date dependencies</span>
<span class="token function">npm</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="running" tabindex="-1"><a class="header-anchor" href="#running" aria-hidden="true">#</a> Running</h3>
<p>To start writing documentation:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will start a local development server on <a href="http://localhost:8080/" target="_blank" rel="noopener noreferrer">http://localhost:8080/<ExternalLinkIcon/></a> that runs the PowerApps guidelines website. Every change in the guidelines will be immediately visible on the local running website.</p>
<h2 id="writing" tabindex="-1"><a class="header-anchor" href="#writing" aria-hidden="true">#</a> Writing</h2>
<p>TODO</p>
<p>We created two Vue-components to visualize if rules are required or recommended. Place the following tags behing the title of a guideline to indicate the importance:</p>
<ol>
<li>The tag <code v-pre>&lt;Required/&gt;</code> will be rendered into <Required/> . Use this for guidelines that you should never skip and should be applicable to all situations.</li>
<li>The tag <code v-pre>&lt;Recommended/&gt;</code> will be rendered into <Recommended/> . Use this for strongly recommended guidelines.</li>
<li>The tag <code v-pre>&lt;Depends/&gt;</code> will be rendered into <Depends/> . Use this for guidellines that may not be applicable in all situations.</li>
</ol>
<h2 id="deploying" tabindex="-1"><a class="header-anchor" href="#deploying" aria-hidden="true">#</a> Deploying</h2>
<p>We are hosting the PowerApps Guidelines on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify<ExternalLinkIcon/></a>. Netlify will build on each commit in the <code v-pre>master</code> branch and publish it, so deploying is fully automated.</p>
<p><a href="https://app.netlify.com/sites/powerapps-guidelines/deploys" target="_blank" rel="noopener noreferrer"><img src="https://api.netlify.com/api/v1/badges/98c67366-67a1-45ad-b485-91c072a23906/deploy-status" alt="Netlify Status"><ExternalLinkIcon/></a></p>
<p>Want to deploy yourself, than running the following command will publish the guidelines as a static website in the folder <code v-pre>.vuepress/dist</code> which can than be served by any webserver.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h2>
<p>Please read <a href="TODO">CONTRIBUTING.md</a> for details on our code of conduct, and the process for submitting pull requests to us.</p>
<h2 id="style-of-writing" tabindex="-1"><a class="header-anchor" href="#style-of-writing" aria-hidden="true">#</a> Style of writing?</h2>
<p>Same as <RouterLink to="/%5Bhttps:/github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.html">Microsoft Azure REST API Guidelines</RouterLink> ?</p>
<p>✅ <strong>DO</strong> adopt this pattern. If you feel you need an exception, contact the Azure HTTP/REST Stewardship Board <strong>prior</strong> to implementation.</p>
<p>☑️ <strong>YOU SHOULD</strong> adopt this pattern. If not following this advice, you MUST disclose your reason during the Azure HTTP/REST Stewardship Board review.</p>
<p>✔️ <strong>YOU MAY</strong> consider this pattern if appropriate to your situation. No notification to the Azure HTTP/REST Stewardship Board is required.</p>
<p>⚠️ <strong>YOU SHOULD NOT</strong> adopt this pattern. If not following this advice, you MUST disclose your reason during the Azure HTTP/REST Stewardship Board review.</p>
<p>⛔ <strong>DO NOT</strong> adopt this pattern. If you feel you need an exception, contact the Azure HTTP/REST Stewardship Board <strong>prior</strong> to implementation.</p>
</div></template>
