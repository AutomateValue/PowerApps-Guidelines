<template><div><h1 id="installation-configuration" tabindex="-1"><a class="header-anchor" href="#installation-configuration" aria-hidden="true">#</a> Installation &amp; configuration</h1>
<h2 id="default-environment-is-the-personal-shared-playground-shared" tabindex="-1"><a class="header-anchor" href="#default-environment-is-the-personal-shared-playground-shared" aria-hidden="true">#</a> Default environment is the Personal shared playground (shared)</h2>
<p><img src="/assets/environment-naming-admin.png" alt="environment-naming-admin"></p>
<p>Environments are tied to a geographic location that is configured at the time the
the environment is created.</p>
<p>Environment can be used to target different audiences and/or for different purposed such as dev, test, and production.</p>
<p>Data Loss Perevention (DLP) policies can be applied to individual environment or tenant</p>
<p>Every tenant has a Default environment</p>
<p>Non-default environments can be created by licensed PowerApps and Flow user and
can be restricted to only global and service admins via a tenant settings.</p>
<h2 id="deployment-stratagy-for-customer-type-1-2" tabindex="-1"><a class="header-anchor" href="#deployment-stratagy-for-customer-type-1-2" aria-hidden="true">#</a> Deployment stratagy for customer type 1 &amp; 2</h2>
<p>Unmanged in Production vs Managed in production</p>
<h2 id="the-five-layers-of-security" tabindex="-1"><a class="header-anchor" href="#the-five-layers-of-security" aria-hidden="true">#</a> The five layers of security</h2>
<p>see image in asset</p>
<h2 id="pervent-data-leakage" tabindex="-1"><a class="header-anchor" href="#pervent-data-leakage" aria-hidden="true">#</a> Pervent data leakage</h2>
<p>Data loss prevention policies (DLP) enforce rules for which connectors can be used togheter.</p>
<p>Connectors are classified as either Business Data only or No Business Data allowed.</p>
<p>A connector in the business data oly group can only be used with other connectors from that group in the same app or flow.</p>
<p>Tenant admins can define policies that apply to all environments.</p>
<p>Multiple policies can apply to an environment</p>
<p>The most restricive policy applies to the combination fo connectors.</p>
<p>Use ONLY selected and EXCEPT to tailor which environment are impacted</p>
<p>images in assets</p>
<h2 id="security" tabindex="-1"><a class="header-anchor" href="#security" aria-hidden="true">#</a> Security</h2>
<p>Non-interactive:</p>
<ul>
<li>Poor: Connection string</li>
<li>Less poor: Encrypted string</li>
<li>Slightly Better: Non-interactive user</li>
<li>Best: App service</li>
<li>Bester: ClientId + Secret</li>
<li>Bestest: Certificate-based</li>
<li>Bonus points: Azure Vault</li>
<li>Medal: Managed Identities</li>
</ul>
<p>Interactive:</p>
<ul>
<li>
<p>Passive</p>
<ul>
<li>Poor: Connection string</li>
<li>Still poor: Encrypted connection string</li>
<li>Better: Connection string deployed as part of Azure app</li>
<li>Best: Registered app</li>
<li>Best: OAuth if impersonation is required</li>
</ul>
</li>
<li>
<p>Active</p>
<ul>
<li>Poor: Connection string</li>
<li>Better: Prompt for password</li>
<li>Better: Use registered app</li>
<li>Best: Xrm.Tooling</li>
</ul>
</li>
</ul>
<h2 id="solutions" tabindex="-1"><a class="header-anchor" href="#solutions" aria-hidden="true">#</a> Solutions</h2>
<ul>
<li>Focus on small footprint</li>
<li>(Re)use as much as possible of default functionality. Focus on What-if scenario that ure solution is removed: will the data still be available (as much as possible).</li>
</ul>
<p>Solution by type vs Solution by feature/functionality (prefered)</p>
</div></template>
