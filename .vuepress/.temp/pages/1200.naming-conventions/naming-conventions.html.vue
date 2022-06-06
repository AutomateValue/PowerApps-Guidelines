<template><div><h1 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions" aria-hidden="true">#</a> Naming conventions</h1>
<h2 id="environments-must-be-named-by-purpose" tabindex="-1"><a class="header-anchor" href="#environments-must-be-named-by-purpose" aria-hidden="true">#</a> Environments must be named by purpose <Required/></h2>
<p>Name environments only be there purpose, like Production or Test.</p>
<p>❌ DO NOT use abbrevations or contractions, because most users are not aware of the meaning.</p>
<p>❌ DO NOT use the customer name in the environment name, because this is already clear by the tenant where the environment lives in (<a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank" rel="noopener noreferrer">DRY principle<ExternalLinkIcon/></a>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can even use <a href="https://getemoji.com/" target="_blank" rel="noopener noreferrer">emoji's<ExternalLinkIcon/></a> to make it even more clear for users!</p>
</div>
<p>This will result into the following examples:</p>
<p>❌ DO NOT:</p>
<ul>
<li>Contoso Production</li>
<li>Contose PRD</li>
<li>PRD</li>
<li>TST</li>
</ul>
<p>✔️ DO:</p>
<ul>
<li>Production</li>
<li>Test</li>
<li>🚀 Production</li>
<li>📦 Acceptance</li>
<li>🚦 Test</li>
<li>🧪 Development</li>
<li>👨‍💼 Personal</li>
<li>📊 Load Test</li>
</ul>
<p>This will result into a clear homescreen for the users.
<img src="/assets/environment-naming-homescreen.png" alt="environment-naming-homescreen"></p>
<h2 id="don-t-use-new-as-prefix" tabindex="-1"><a class="header-anchor" href="#don-t-use-new-as-prefix" aria-hidden="true">#</a> Don't use <code v-pre>new_</code> as prefix <Required/></h2>
<p>The prefix  is determined by the publisher. Check if there is already a good custom publisher available and use that one. If not, create a new publisher with a good prefix like for example the customer abbrivation.</p>
<h2 id="don-t-use-id-in-the-name-of-a-lookup-field" tabindex="-1"><a class="header-anchor" href="#don-t-use-id-in-the-name-of-a-lookup-field" aria-hidden="true">#</a> Don't use <code v-pre>Id</code> in the name of a lookup field <Required/></h2>
<p>This <code v-pre>Id</code> always bugged me, because of this simple fact - it's not an Id in code, it's a reference. So if you just wanted the <code v-pre>Id</code> in code you use this:</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> contactId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EntityReference<span class="token punctuation">)</span>customMethod<span class="token punctuation">[</span><span class="token string">"dh_ContactId"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Which I don't like, because you're repeating the abbreviation <code v-pre>Id</code>. In my opinion this kind of violates &quot;DRY&quot; so I will avoid it if at all possible. Using the new school way it looks cleaner without this repetition:</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> contactId <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EntityReference<span class="token punctuation">)</span>customMethod<span class="token punctuation">[</span><span class="token string">"dh_Contact"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="one-to-many-relationships-should-have-clear-names" tabindex="-1"><a class="header-anchor" href="#one-to-many-relationships-should-have-clear-names" aria-hidden="true">#</a> One-To-Many relationships should have clear names <Recommended/></h2>
<p>One-to-Many aka Lookups relationship should have the following name, where any prefix is removed apart from the first one:</p>
<p><code v-pre>&lt;prefix&gt;_&lt;primary entity schema name without prefix&gt;_&lt;related entity schema name without prefix&gt;_&lt;fieldname&gt;</code></p>
<p>This will look like:</p>
<table>
<thead>
<tr>
<th>relationship name</th>
<th>lookup field name</th>
</tr>
</thead>
<tbody>
<tr>
<td>dh_account_project_customer</td>
<td>dh_customer</td>
</tr>
<tr>
<td>dh_account_project_endcustomer</td>
<td>dh_endcustomer</td>
</tr>
</tbody>
</table>
<h2 id="many-to-many-relationships-should-have-clear-names" tabindex="-1"><a class="header-anchor" href="#many-to-many-relationships-should-have-clear-names" aria-hidden="true">#</a> Many-To-Many relationships should have clear names</h2>
<p>Many-to-Many relationships should have the following name, where any prefix is removed apart from the first one:</p>
<p><code v-pre>&lt;prefix&gt;_&lt;entity schema name without prefix&gt;_&lt;entity schema name without prefix&gt;</code> or
<code v-pre>&lt;prefix&gt;_&lt;role of the relationship&gt;</code></p>
<p>This will look like:</p>
<table>
<thead>
<tr>
<th>relationship name</th>
<th>relationship entity name</th>
</tr>
</thead>
<tbody>
<tr>
<td>dh_account_lead</td>
<td>dh_account_lead</td>
</tr>
<tr>
<td>dh_teammembership</td>
<td>dh_teammembership</td>
</tr>
</tbody>
</table>
<p>Important considerations whether or not to use a N:N relationship:</p>
<ol>
<li>N:N relationship entities do not support adding additional attributes to the entity. For example, if you want to have an attribute classifying the type of relationship between the two entities.</li>
<li>The N:N &quot;Add Existing Record&quot; lookup button does not use the CRM lookup view—it limits the visible records to 100, you cannot add additional view columns, and it only supports searching by the name of the record. This is problematic in the case where, for example, there are multiple locations of the same account, each with the same account name.</li>
<li>The N:N entity that is created does not support workflow. That means that you cannot fire workflows when a new relationship is created, you also cannot use workflow to create relationships.</li>
</ol>
</div></template>
