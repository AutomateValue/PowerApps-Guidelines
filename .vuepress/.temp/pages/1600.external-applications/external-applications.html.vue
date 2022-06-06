<template><div><h1 id="external-applications" tabindex="-1"><a class="header-anchor" href="#external-applications" aria-hidden="true">#</a> External applications</h1>
<h2 id="implement-handling-of-api-limits-for-external-applications" tabindex="-1"><a class="header-anchor" href="#implement-handling-of-api-limits-for-external-applications" aria-hidden="true">#</a> Implement handling of API limits for external applications</h2>
<p>External applications may reach the API limits and start throwing an exception. If you are developing a third party application, then you should always implement this to avoid crashes. Below is a table of the different error codes and their description.</p>
<table>
<thead>
<tr>
<th>Error Code</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>-2147015902</td>
<td>Number of requests exceeded the limit of X over time window of 300 seconds.</td>
</tr>
<tr>
<td>-2147015903</td>
<td>Combined execution time of incoming requests exceeded limit of X milliseconds over time window of 300 seconds. Decrease number of concurrent requests or reduce the duration of requests and try again later.</td>
</tr>
<tr>
<td>-2147015898</td>
<td>Number of concurrent requests exceeded the limit of X.</td>
</tr>
</tbody>
</table>
<p>The ErrorDetails of the FaultException contains a 'Retry-After' property that specifies in how much time you can try again (see code below).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ex.Detail.ErrorDetails["Retry-After"] as TimeSpan?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
