<template><div><h1 id="extending-server-side" tabindex="-1"><a class="header-anchor" href="#extending-server-side" aria-hidden="true">#</a> Extending server-side</h1>
<h2 id="plugins-workflow-activities-must-be-stateless" tabindex="-1"><a class="header-anchor" href="#plugins-workflow-activities-must-be-stateless" aria-hidden="true">#</a> Plugins &amp; Workflow Activities must be stateless <Recommended/></h2>
<p>It isn't guaranteed that for every execution of your plugin or workflow activity, a new instance is created. Therefore you should always write your plugin and workflow activity classes as stateless. This means that you shouldn't use any properties or non-constant fields in your class. The only fields that could be used are: <code v-pre>const</code> and <code v-pre>static readonly</code>.</p>
<h2 id="always-wrap-the-organizationservicecontext-class" tabindex="-1"><a class="header-anchor" href="#always-wrap-the-organizationservicecontext-class" aria-hidden="true">#</a> Always wrap the OrganizationServiceContext class</h2>
<p>The OrganizationServiceContext class is a concrete class that doesn't have a base interface. This makes unit testing really difficult. If you decide to use this class, then always wrap it in your own class that has a base interface. Inject the base interface where needed. See example below.</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ICrmRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IOrganizationService</span></span>
    <span class="token punctuation">{</span>
        <span class="token return-type class-name">IQueryable<span class="token punctuation">&lt;</span>TEntity<span class="token punctuation">></span></span> <span class="token generic-method"><span class="token function">CreateQuery</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TEntity<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token class-name">TEntity</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Entity</span></span><span class="token punctuation">;</span>
        <span class="token return-type class-name">IQueryable<span class="token punctuation">&lt;</span>Entity<span class="token punctuation">></span></span> <span class="token function">CreateQuery</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> entityLogicalName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Other methods from the context class omitted, add what you require.</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span> <span class="token class-name">CrmRepository</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ICrmRepository</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">OrganizationServiceContext</span> _context<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">IOrganizationService</span> _service<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token function">CrmRepository</span><span class="token punctuation">(</span><span class="token class-name">IOrganizationService</span> service<span class="token punctuation">,</span> <span class="token class-name">OrganizationServiceContext</span> context<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            _service <span class="token operator">=</span> service<span class="token punctuation">;</span>
            _context <span class="token operator">=</span> context<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Implementation omitted</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="always-implement-paging-for-retrievemultiple-when-not-using-topcount" tabindex="-1"><a class="header-anchor" href="#always-implement-paging-for-retrievemultiple-when-not-using-topcount" aria-hidden="true">#</a> Always implement paging for RetrieveMultiple when not using TopCount <Required/></h2>
<p>When you use RetrieveMultiple, it will only return results up to a specific maximum (5000 by default). If your query would return more data, it requires you to execute another query. Even if you won't expect your query to ever reach that limit, implement it just in case.</p>
<p>Documentation and sample code on how to implement this can be found here for <a href="https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-queryexpression" target="_blank" rel="noopener noreferrer">QueryExpressions<ExternalLinkIcon/></a> and <a href="https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-fetchxml" target="_blank" rel="noopener noreferrer">FetchExpressions<ExternalLinkIcon/></a>.</p>
<p><a href="https://markcarrington.dev/2021/02/23/msdyn365-internals-paging-gotchas/" target="_blank" rel="noopener noreferrer">MSDYN365 INTERNALS: PAGING GOTCHAS<ExternalLinkIcon/></a></p>
<h1 id="if-you-only-expect-one-result-from-retrievemultiple-then-add-topcount-1" tabindex="-1"><a class="header-anchor" href="#if-you-only-expect-one-result-from-retrievemultiple-then-add-topcount-1" aria-hidden="true">#</a> If you only expect one result from RetrieveMultiple then add TopCount = 1</h1>
<p>This will stop CRM from searching further. Optionally set it to 2, if you want to throw an error if there is more then 1 found.</p>
<h2 id="exceptions-thrown-towards-the-platform-within-plugins-workflow-activities-should-always-be-of-type-invalidpluginexecutionexception-and-contain-an-error-code-for-identification" tabindex="-1"><a class="header-anchor" href="#exceptions-thrown-towards-the-platform-within-plugins-workflow-activities-should-always-be-of-type-invalidpluginexecutionexception-and-contain-an-error-code-for-identification" aria-hidden="true">#</a> Exceptions thrown towards the platform within Plugins &amp; Workflow Activities should always be of type 'InvalidPluginExecutionException' and contain an error code for identification <Required/></h2>
<p>When implementing error handling make sure that you always throw exceptions of type 'InvalidPluginExecutionException'. This exception class allows you to pass an errorcode of type integer. Always identify your errors with an unique number. This makes troubleshooting a lot easier as you can search code for this specific number.</p>
<p>TODO:
In the Unified Interface an exception not InvalidPluginExecutionExeception will be shown as. InvalidPluginExecutionExeception will shown the message as is.</p>
<p>Exception Message: An unexpected error occurred from ISV code. (ErrorType = ClientError) Unexpected exception from plug-in (Execute):  DH.Spotler.Plugins.CreateOrUpdateSpotlerJob: System.Exception: Object reference not set to an instance of an object.</p>
<h2 id="use-filtering-attributes-in-plugin-registration-to-improve-performance" tabindex="-1"><a class="header-anchor" href="#use-filtering-attributes-in-plugin-registration-to-improve-performance" aria-hidden="true">#</a> Use filtering attributes in plugin registration to improve performance <Required/></h2>
<p>When registering plugins you can specify filtering attributes. You must always do that if possible and reduce the amount of attributes to a minimum. This will result in the plugin to only be executed if required and thus increasing performance.</p>
<h2 id="make-plugins-workflows-asynchronous-if-possible-to-improve-performance" tabindex="-1"><a class="header-anchor" href="#make-plugins-workflows-asynchronous-if-possible-to-improve-performance" aria-hidden="true">#</a> Make Plugins &amp; Workflows asynchronous if possible to improve performance <Required/></h2>
<p>The user won't need to wait for your plugin or workflow if it is asynchronous. This will improve the user experience and keeps dynamics running smoothly.</p>
<h2 id="don-t-impersonate-a-user-not-knowing-it-is-existing-active-user" tabindex="-1"><a class="header-anchor" href="#don-t-impersonate-a-user-not-knowing-it-is-existing-active-user" aria-hidden="true">#</a> Don't impersonate a user not knowing it is existing active user <Required/></h2>
<p>Don't run code based on an user that you don't know if it is active and has a licence, like when recreating an old task on behalf of that user.</p>
<h2 id="write-queryexpressions-as-simple-as-possible" tabindex="-1"><a class="header-anchor" href="#write-queryexpressions-as-simple-as-possible" aria-hidden="true">#</a> Write QueryExpressions as simple as possible</h2>
<p>When creating a QueryExpression the constructor will already create an FilterExpression (default And) and PagingInfo (and ColumnSet). This means a simple query can be written very clear, like:</p>
<pre><code>  this._criteria = new FilterExpression();
  this._pageInfo = new PagingInfo();
  this._columnSet = new ColumnSet();
</code></pre>
<div class="language-c# ext-c# line-numbers-mode"><pre v-pre class="language-c#"><code>QueryExpression query = new QueryExpression
{
    EntityName = entityName,
    ColumnSet = cols,
    Criteria = new FilterExpression
    {
        Conditions =
        {
                        new ConditionExpression
                        {
                            AttributeName = attributeName,
                            Operator = ConditionOperator.Equal,
                            Values = { attributeValue }
                        }
                    }
                                    }
                                };

var query = new QueryExpression(dh_spotlerpermission.EntityLogicalName)
{
    ColumnSet = new ColumnSet(&quot;dh_name&quot;, &quot;dh_subscribed&quot;),
    Criteria =
    {
        Conditions = { new ConditionExpression(&quot;dh_leadid&quot;, ConditionOperator.Equal, originatingLead.Id) }
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-to-use-getattributevalue" tabindex="-1"><a class="header-anchor" href="#try-to-use-getattributevalue" aria-hidden="true">#</a> Try to use GetAttributeValue</h2>
<p>http://crmentropy.blogspot.com/2013/08/entitygetattributevalue-explained.html</p>
<h2 id="don-t-put-every-plugin-in-a-seprate-project" tabindex="-1"><a class="header-anchor" href="#don-t-put-every-plugin-in-a-seprate-project" aria-hidden="true">#</a> Don't put every plugin in a seprate project</h2>
<p>This is a code smell. You see this when new developers take over a project (or not experinced), they will create a new project.</p>
</div></template>
