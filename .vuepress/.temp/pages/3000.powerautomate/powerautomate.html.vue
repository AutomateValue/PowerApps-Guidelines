<template><div><h1 id="power-automate" tabindex="-1"><a class="header-anchor" href="#power-automate" aria-hidden="true">#</a> Power Automate</h1>
<h2 id="do-keep-conditions-empty-of-steps" tabindex="-1"><a class="header-anchor" href="#do-keep-conditions-empty-of-steps" aria-hidden="true">#</a> Do keep Conditions empty of steps</h2>
<p>Try to keep the 'If yes' and 'If no' is empty as possible, because when closed it hides the steps (logic).</p>
<p>Try to do the <strong>Condition</strong> and <strong>Terminate</strong> if not meet, while continue the happy flow under the Condition.</p>
<p><img src="/assets/poweratomate-keep-condition-empty.png" alt="keep-condition-empty"></p>
<h2 id="terminate-with-the-correct-status" tabindex="-1"><a class="header-anchor" href="#terminate-with-the-correct-status" aria-hidden="true">#</a> Terminate with the correct status</h2>
<p>Terminate is often used when a Condition is not meet to run the flow. To inform the administrator, use Cancelled as status.</p>
<h2 id="resource-not-found-for-the-segment-my-guid-or-empty-segment-encountered-in-request-url-please-make-sure-that-a-valid-request-url-is-specified" tabindex="-1"><a class="header-anchor" href="#resource-not-found-for-the-segment-my-guid-or-empty-segment-encountered-in-request-url-please-make-sure-that-a-valid-request-url-is-specified" aria-hidden="true">#</a> Resource not found for the segment '[MY_GUID]' or Empty segment encountered in request URL. Please make sure that a valid request URL is specified.</h2>
<p>OData is used by Power Automate and OData needs to know about the type. Only the Id is not enough. Lookup attributes need to be specified as:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;plural entity name>(&lt;EntityId>)

Example: accounts(2999a72c-c4ed-ea11-a817-000d3abb4345)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/assets/powerautomate-lookup-with-type.png" alt="lookup-with-type"></p>
<p>This plural name is not the plural name of the entity, but created by odata. It will pick the entityname and add s, es, ies. To found out with the plural name is do:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;org ur>/api/data/v9.1/EntityDefinitions(LogicalName='&lt;LogicalName>')?$select=EntitySetName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="avoid-unneeded-apply-to-each-steps" tabindex="-1"><a class="header-anchor" href="#avoid-unneeded-apply-to-each-steps" aria-hidden="true">#</a> Avoid unneeded Apply to Each steps</h2>
<p>If only one value is needed or is returned then doing an Apply to Each step is not needed.</p>
<p>The Apply to Each step takes the item by using the input (Select an output from previous steps) like:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>outputs('Get_Publications')?['body/value']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To get the value of an item in the containing step it looks like:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>items('Apply_to_each')?['cht_publicationid']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To get rid ot the Apply to Each step we can combine the two expressions into one like:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>outputs('Get_Publications')?['body/value']?[0]?[cht_publicationid']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To get the numbers of items, like for checking there are existing records, than write:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>length(outputs('Get_Publications')?['body/value'])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or try to use body() instead of output()</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>body('Get_Publications')?['value']?[0]?[cht_publicationid']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="use-find-items-as-name-for-lists-steps" tabindex="-1"><a class="header-anchor" href="#use-find-items-as-name-for-lists-steps" aria-hidden="true">#</a> Use Find Items as name for Lists steps</h2>
<h2 id="use-get-item-as-name-for-get-by-id-steps" tabindex="-1"><a class="header-anchor" href="#use-get-item-as-name-for-get-by-id-steps" aria-hidden="true">#</a> USe Get Item as name for Get by ID steps .##</h2>
<h2 id="make-apply-to-each-steps-parallel-when-doing-bulk" tabindex="-1"><a class="header-anchor" href="#make-apply-to-each-steps-parallel-when-doing-bulk" aria-hidden="true">#</a> Make Apply to Each steps parallel when doing bulk</h2>
<p><em>Apply to Each</em> steps process sequential (one-by-one) by default. When a lot of records need to be looped, changing it to run in parallel, will improve performance a lot.</p>
<p>Go to the settings of the step (menu-&gt;settings) and enable <strong>Concurrency Control</strong>. Default degree of Parallelism is 20 which will result around 10x performance, depending on the workload. Bring it down to 10 or lower when you experience issues.</p>
<h2 id="use-connection-references" tabindex="-1"><a class="header-anchor" href="#use-connection-references" aria-hidden="true">#</a> Use Connection References</h2>
<p><img src="/assets/powerautomate-connection-references.png" alt="Connection References"></p>
<p>TODO: Explain benefit</p>
<p>Keep in mind that a maximum of 16 flows can use one connection reference. If the same connection needs to be used in more than 16 flows, then create another connection reference with a connection to the same connector. There is no limit to the number of actions in each flow that can be associated with the connection reference.</p>
<p>Still in Preview at time of writing and the ALM will surely smooth out soon but meanwhile you still need to make sure you are documenting exactly what they are and how they are connecting (via the user, via a service principal etc) and re-use.  You might be limited to the scale of reuse during Preview but having 3 different connection references to the same Dataverse table in a single flow? You’re creating work for yourself!</p>
<h2 id="secured-inputs-outputs" tabindex="-1"><a class="header-anchor" href="#secured-inputs-outputs" aria-hidden="true">#</a> Secured Inputs &amp; Outputs</h2>
<p>It’s absolutely fine to leave this step till after the debug stage but you definitely need to put some thought into what data is visible to people allowed to view your Flow’s run history. Hit the ellipsis in the top right of your action, select Settings and toggle on Secure Inputs and Secure Outputs. Your organisation likely has its own rules on what is considered sensitive but if you’re connecting to Key Vault or working with HR data, I’d be flicking those toggles!</p>
<h2 id="actions-should-have-meaningful-names" tabindex="-1"><a class="header-anchor" href="#actions-should-have-meaningful-names" aria-hidden="true">#</a> Actions Should Have Meaningful Names</h2>
<p>When you're deep in the loops it's far too easy to lose track of context! Assigning memorable and meaningful names will pay dividends later down the line. You may already have naming policy elsewhere where you work so agree a convention between you and stick to it to help each other out. I’m a fan of descriptive Pascal Case myself.</p>
<h2 id="consider-concurrency-in-loops" tabindex="-1"><a class="header-anchor" href="#consider-concurrency-in-loops" aria-hidden="true">#</a> Consider Concurrency In Loops</h2>
<p>For an immediate performance boost, head back to Settings and enable concurrency on your loops. Remember it does not tend to play well if you are using variables in there but I find it’s sometime beneficial to engineer away from a variable if it means I can knock 80% off the run time!</p>
<h2 id="don-t-nest-too-deep" tabindex="-1"><a class="header-anchor" href="#don-t-nest-too-deep" aria-hidden="true">#</a> Don’t Nest Too Deep</h2>
<p>I know how hard it is to avoid sometimes but try to avoid nesting too deep. PA itself will impose a limit (8 at time of writing) but your bleeding eyes 10 weeks later when you’re debugging probably have a lower threshold!</p>
<h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error Handling</h2>
<p>Do you know what will happen if a step fails? Have you captured said failure? Use Configure Run After to have different follow-on actions depending on the success or failure of key Actions. Stephen Siciliano wrote a great blog all about this.</p>
<h2 id="optimise-look-for-efficiencies" tabindex="-1"><a class="header-anchor" href="#optimise-look-for-efficiencies" aria-hidden="true">#</a> Optimise &amp; Look For Efficiencies</h2>
<p>It probably goes without saying but you should always aim for the absolute minimum amount of calls needed to do the job, especially where you are calling potentially slow or expensive APIs. A good example of this is querying Environment Variables, should that be six calls for the six variables or could you make one call with a well thought out Dataverse filter and an array?</p>
<h2 id="variables-should-have-meaningful-names" tabindex="-1"><a class="header-anchor" href="#variables-should-have-meaningful-names" aria-hidden="true">#</a> Variables Should Have Meaningful Names</h2>
<p>I’ve already mentioned that your steps should have meaningful names but the same also goes for your variables. A quick tip here, if you are using PowerApps as your trigger, put “ask in PowerApps” dynamics expressions into an Initialise Variable action and give both the action and variable a good name to reap a much more meaningful prompt to your users over in their Canvas Apps.</p>
<h2 id="cloud-flows-should-be-in-solutions" tabindex="-1"><a class="header-anchor" href="#cloud-flows-should-be-in-solutions" aria-hidden="true">#</a> Cloud Flows Should Be In Solutions</h2>
<p>It’s getting better all the time but it can still be confusing to try and find specific flows or work out who can do what with them. Not only do Solutions help you move your creations around but they also help you organise your work into logical features or story collections.</p>
<h2 id="always-think-scale" tabindex="-1"><a class="header-anchor" href="#always-think-scale" aria-hidden="true">#</a> Always Think Scale</h2>
<p>Sure your cloud flow works when there are only ten records in your table but what happens when you’re dealing with 10 million? This is where Filters and Tops on Lists, timeouts (and concurrency) have to come into play.
Keep It Simple Stupid – It’s an old adage but a good one. If you’re seven nests in then maybe it’s time to start thinking about breaking your cloud flow out into smaller, more discreet functions.</p>
<h2 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h2>
<p>Don't forget to comment your actions. Like many useful features Add a Comment it underneath that ellipsis in the top right.</p>
<h2 id="consider-performance-readability" tabindex="-1"><a class="header-anchor" href="#consider-performance-readability" aria-hidden="true">#</a> Consider Performance / Readability</h2>
<p>It's a fine line and adding 10 strings together in a loop might be easy to understand but that might be taking 6 seconds whereas an expression utilising join is done in milliseconds. If you have a using waiting for the outcome of this Flow, go for speed and comment and document well.</p>
</div></template>
