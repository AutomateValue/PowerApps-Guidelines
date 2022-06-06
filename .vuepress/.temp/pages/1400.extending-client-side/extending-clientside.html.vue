<template><div><h1 id="extending-client-side" tabindex="-1"><a class="header-anchor" href="#extending-client-side" aria-hidden="true">#</a> Extending client-side</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h2 id="execution-context-is-automaticly-given-to-onchange-and-onsave-events" tabindex="-1"><a class="header-anchor" href="#execution-context-is-automaticly-given-to-onchange-and-onsave-events" aria-hidden="true">#</a> Execution Context is automaticly given to OnChange and OnSave events</h2>
<p>formContext.getAttribute(&quot;ava_accountid&quot;).addOnChange(ava_accountIdOnChange);</p>
<p>ava_accountIdOnChange: function (executionContext) {
// TODO
},</p>
<h2 id="don-t-use-try-catch-if-you-re-not-going-to-handle-the-error" tabindex="-1"><a class="header-anchor" href="#don-t-use-try-catch-if-you-re-not-going-to-handle-the-error" aria-hidden="true">#</a> Don't use try...catch if you're not going to handle the error</h2>
<p>Only use a try...catch statement when you can handle the error, otherwhise don't do it.</p>
<p>There is already an top-level event registered (on windows.onerror) by the platform that will catch uncatched errors and will display an ErrorDialog (Xrm.Navigation.openErrorDialog) with the error message and stacktrace to the user.</p>
<p>Make use of this registered event by don't catching errors in try...catch statements. Try..catch statements make your code more difficult to read.</p>
<p>Make sure when using <em>async</em> functions that you <em>await</em> all the way (every chained function needs to be async) otherwhise errors are beeing swollawed.</p>
<p>For async-wait is shown in the error dialog but not a lot is given in the detailed log to download. So if you really care for this than catch and rethrow as following:</p>
<pre><code>    try {
        const options = &quot;?$select=accountnumber1&quot;;
        const account = await Xrm.WebApi.retrieveRecord(accountLkp.entityType, accountLkp.id.removeBraces(), options);
    }
    catch (error) {
        throw Error(error.message); // if you don't catch and rethrow you will have less info in the log
        // throw Error(error); // Don't do this because the error message is lost
    }
</code></pre>
<p>Most of the time the try...catch will make the code more complicated, so it can also be emitted.</p>
<h2 id="quetes-in-dynamics-365" tabindex="-1"><a class="header-anchor" href="#quetes-in-dynamics-365" aria-hidden="true">#</a> quetes in Dynamics 365</h2>
<p>https://medium.com/javascript-in-plain-english/the-real-difference-between-single-quotes-and-double-quotes-in-javascript-3d00bf720bcd
https://github.com/airbnb/javascript#strings--quotes</p>
<h2 id="use-template-strings-instead-of-concatenation-when-it-contains-fetchxml" tabindex="-1"><a class="header-anchor" href="#use-template-strings-instead-of-concatenation-when-it-contains-fetchxml" aria-hidden="true">#</a> Use template strings instead of concatenation when it contains FetchXML</h2>
<p>When writing FetchXMl always use template strings (`).</p>
<p>Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features. It can also be easy copied and tested on correctness.</p>
<pre><code>const fetchXml =
    `&lt;fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'&gt;
        &lt;entity name='account'&gt;
            &lt;attribute name='name' /&gt;
            &lt;attribute name='accountid' /&gt;
            &lt;order attribute='name' descending='false' /&gt;
            &lt;filter type='and'&gt;
                &lt;condition attribute='statecode' operator='eq' value='0' /&gt;
                &lt;condition attribute='name' operator='eq' value='${searchName}' /&gt;
            &lt;/filter&gt;
        &lt;/entity&gt;
    &lt;/fetch&gt;`;
</code></pre>
<h2 id="seperate-form-and-ribbon-scripts" tabindex="-1"><a class="header-anchor" href="#seperate-form-and-ribbon-scripts" aria-hidden="true">#</a> seperate form and ribbon scripts</h2>
<p>Another common “mistake” is using the same webresource for form events, and for ribbon commands. This is not a problem in itself, but you should be aware that the scripts will be loaded twice, and that it might make debugging more confusing. While form web resources are loaded as normal included scripts during form initialization, command code for ribbon buttons are loaded as unnamed dynamic script blocks when the ribbon loads. This means that you cannot set a breakpoint in the ribbon code before clicking a button the first time (because the script is not yet loaded). It also means that if you use the same web resource for the form and the ribbon, the ribbon dynamic script will overload the form script, and thus you will loose the ability to debug the loaded form script (The dynamic script block can still be debugged if you can locate it…).</p>
<p>https://pederwagner.wordpress.com/2015/12/01/crm-js-webresource-best-practice-for-ribbon-commands-forms/</p>
<p>Enable Rules will make the ribbon script load earlier. Move this to the main script? But is loaded async (form and ribbon is loaded seperate)</p>
<h2 id="don-t-change-the-javascript-file-or-namespace-name-that-is-being-used-in-forms-or-ribbons-isv" tabindex="-1"><a class="header-anchor" href="#don-t-change-the-javascript-file-or-namespace-name-that-is-being-used-in-forms-or-ribbons-isv" aria-hidden="true">#</a> Don't change the javascript file or 'namespace' name that is being used in forms or ribbons (ISV)</h2>
<p>The filename and namespace of you're javascript is part of the public API that you are making available. Think good about the name of your javascript file and it's namespace, because you can't change or remove it easily.</p>
<p>This especially applies to ISV's, where the solution is managed and customer can create a dependency on your code. Because of this depency you can't remove or change it. Assume its going to be set in stone and you need to support it 'forever'.</p>
<p>For ISV's it could also be wise to have all your javascript code in one javascript file in your solution, to make your public API as small as possible. By doing this the customer can only make one javascript dependency. Use tools like Webpack or Rollup to develop in multiple files, but deploy it as one file.</p>
<h2 id="make-only-one-event-handler-public-for-forms-the-onloadform-event-handler-isv" tabindex="-1"><a class="header-anchor" href="#make-only-one-event-handler-public-for-forms-the-onloadform-event-handler-isv" aria-hidden="true">#</a> Make only one event handler public for forms: the onLoadForm event handler (ISV)</h2>
<p>Every event handler (public function) you make available in your javascript is part your public API, that needs to be maintained and that can't be changed or removed easily. This especially applies to ISV, where the solution is managed and customer can create a dependency on every public function in you're javascript code.</p>
<p>Only make the onLoad (form) event handler available. Every other event handler is connected within the code of the OnLoad function, like:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">function</span> <span class="token function">onLoadForm</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> formContext <span class="token operator">=</span> executionContext<span class="token punctuation">.</span><span class="token function">getFormContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// bind events</span>
        formContext<span class="token punctuation">.</span>data<span class="token punctuation">.</span>entity<span class="token punctuation">.</span><span class="token function">addOnSave</span><span class="token punctuation">(</span>onSave<span class="token punctuation">)</span><span class="token punctuation">;</span>
        formContext<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"address1_postalcode"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addOnChange</span><span class="token punctuation">(</span>onChangePostalCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">function</span> <span class="token function">onSave</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Do work...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onChangePostalCode</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Do work...</span>
    <span class="token punctuation">}</span>
    
    exports<span class="token punctuation">.</span>onLoadForm <span class="token operator">=</span> onLoadForm<span class="token punctuation">;</span> <span class="token comment">// make it public</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>MyCustomCode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MyCustomCode <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Bind the form onload event to: MyCustomCode.onLoad</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Doing it this way, makes it sure, that only one dependency exist on your code: the <strong>formOnLoad</strong> function. This also prevents <em>'hidden'</em> event handlers on fields on the form you need to look for. (p.s. use Script Finder in the XrmToolkit to help with this).</p>
<h2 id="add-ondataload-and-put-fireonchange-in-this-method" tabindex="-1"><a class="header-anchor" href="#add-ondataload-and-put-fireonchange-in-this-method" aria-hidden="true">#</a> Add onDataLoad and put fireOnChange in this method</h2>
<p>The OnLoad form event is only triggerd when the form is loaded or the refresh button is clicked. If you want behavior that needs to be triggered when the data is changed after saving the onLoad data event should be used. This event is also being called after the onLoad form event.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">function</span> <span class="token function">onLoadForm</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> formContext <span class="token operator">=</span> executionContext<span class="token punctuation">.</span><span class="token function">getFormContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// bind events</span>
        formContext<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"address1_postalcode"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addOnChange</span><span class="token punctuation">(</span>onChangePostalCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        formContext<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">addOnLoad</span><span class="token punctuation">(</span>onLoadData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onLoadData</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// triggerd after save</span>
        <span class="token keyword">const</span> formContext <span class="token operator">=</span> executionContext<span class="token punctuation">.</span><span class="token function">getFormContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        formContext<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">"address1_postalcode"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fireOnChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">onChangePostalCode</span><span class="token punctuation">(</span><span class="token parameter">executionContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Do work...</span>
    <span class="token punctuation">}</span>
    
    exports<span class="token punctuation">.</span>onLoadForm <span class="token operator">=</span> onLoadForm<span class="token punctuation">;</span> <span class="token comment">// make it public</span>

<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>MyCustomCode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MyCustomCode <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Bind the form onload event to: MyCustomCode.onLoad</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-x-null-to-check-for-undefined-and-null" tabindex="-1"><a class="header-anchor" href="#use-x-null-to-check-for-undefined-and-null" aria-hidden="true">#</a> Use x == null to check for undefined and null</h2>
<p>A lot of places in javascript code things can be undefined or null. Normally the guidelines is to use triple operator for checks (=== or !==), except for checking for undefined and null at the same time:</p>
<pre><code>// Don't
if (x === undefined || x === null) {
    // do work
}

if (x !== undefined &amp;&amp; x !== null) {
    // do work
}

// Do
if (x == null) {
    // do work
}

if (x != null) {
    // do work
}
</code></pre>
<h2 id="use-check-for-truthy-or-falsy" tabindex="-1"><a class="header-anchor" href="#use-check-for-truthy-or-falsy" aria-hidden="true">#</a> use check for truthy (or falsy)</h2>
<p>https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a</p>
<p>If you need to check for undefined, null, empty string o or false then use the following syntax.</p>
<pre><code>// DO
if (x) {

}

if (!x) {
    // `a` is falsy, which includes `undefined` and `null` and `&quot;&quot;`, and `0`, and `NaN`, and `false`
}
</code></pre>
<h2 id="prefer-iffe-module-pattern-above-others" tabindex="-1"><a class="header-anchor" href="#prefer-iffe-module-pattern-above-others" aria-hidden="true">#</a> prefer IFFE Module pattern above others</h2>
<p>https://ui.dev/javascript-modules-iifes-commonjs-esmodules/</p>
<p>https://stackoverflow.com/questions/22906662/javascript-design-pattern-difference-between-module-pattern-and-revealing-modul</p>
<p>Try to write ES6 modules and than convert using a packer (Webpack, Rollup) to a IFFE pattern.</p>
<h2 id="remove-braces-from-id-s-when-doing-odata-calls" tabindex="-1"><a class="header-anchor" href="#remove-braces-from-id-s-when-doing-odata-calls" aria-hidden="true">#</a> Remove braces from id's when doing OData calls</h2>
<p>Remove braces from guid's when doing OData calls like:
let cleanedid = id.replace(/[{}]/g, &quot;&quot;);</p>
<p>If doing this a lot an option could be to extend string with following method:
/**
* Returns a string where { and } is removed. Use this to clean up GUID's for OData calls.
* @returns {string} - String where { and } is removed.
*/
String.prototype.removeBraces = function () {
return String(this).replace(/[{}]/g, &quot;&quot;);
};</p>
<h2 id="use-es2019-as-target" tabindex="-1"><a class="header-anchor" href="#use-es2019-as-target" aria-hidden="true">#</a> use ES2019 as target</h2>
<p>Browsers have improved a lot and currently using ES2019 as target for javascript will cover 95% of browsers. This will be higher because some features in javascript you will never use in the context of Dynamics.</p>
<p>async...await support https://www.w3schools.com/js/js_async.asp Most browser support this already from 2016/2017.</p>
<p>When using USD, then validate which browser engine is used (the new Edge engine can be used, which can handle ES2019 without any problems).</p>
<h2 id="clear-notification-at-start-of-function" tabindex="-1"><a class="header-anchor" href="#clear-notification-at-start-of-function" aria-hidden="true">#</a> Clear notification at start of function</h2>
<p>Make sure that when (re-)entering a function that sets notification(s), that they are first cleared.</p>
<p>When the user fixes the notification, but still sees the notification, the user wil get confused if the problem is revsolved or not.</p>
<h2 id="prevent-save-create-new-on-quick-create-form" tabindex="-1"><a class="header-anchor" href="#prevent-save-create-new-on-quick-create-form" aria-hidden="true">#</a> Prevent 'Save &amp; Create new' on Quick Create Form</h2>
<p>If only one records is allowed than disable the 'Save &amp;Create new' option.</p>
<pre><code>function formOnSave(executionContext) {        
    const formContext = executionContext.getFormContext();
    formContext.ui.clearFormNotification(&quot;SAVE&quot;);

    // prevent 'save and create new' function to be used
    if (executionContext.getEventArgs().getSaveMode() === 59) {// save and create new
        formContext.ui.setFormNotification(&quot;'Opslaan en nieuwe maken' functie is niet toegestaan!&quot;, &quot;ERROR&quot;, &quot;SAVE&quot;)
        executionContext.getEventArgs().preventDefault();
    }        
}
</code></pre>
<h2 id="don-t-minifier-javascript-code" tabindex="-1"><a class="header-anchor" href="#don-t-minifier-javascript-code" aria-hidden="true">#</a> Don't minifier javascript code</h2>
<p>JavaScript Minifiers:
I personally avoid JavaScript minifiers as much as possible. In a bid to reduce the size of the libraries developers use minifiers when they feel it gets too large. While minifiers has its advantages, it also comes with a few negative factors as well.</p>
<p>Readability is a major issue. Once a code is minified it looks like one major paragraph. It becomes very difficult to debug issues in the code as well. The non-minified version of the code also needs to be maintained in a Source Control or at least in the Web Resources of the organization.</p>
<p>This will help the developer to debug issues.</p>
<h2 id="first-email-or-reply-to" tabindex="-1"><a class="header-anchor" href="#first-email-or-reply-to" aria-hidden="true">#</a> First email or reply to</h2>
<p>Reply to emails are always saved before the forms opens, so Form Type is Update. Also the field 'inreplyto' is filled. So we can check it like:</p>
<pre><code>// opening reply email
if (formContext.ui.getFormType() === 2 &amp;&amp; formContext.getAttribute(&quot;inreplyto&quot;).getValue()) {

}

// opening first email
if (formContext.ui.getFormType() === 1 &amp;&amp; !formContext.getAttribute(&quot;inreplyto&quot;).getValue()) {

}

// also check the direction if needed if you want to change the from from a user to a queue
if (formContext.getAttribute(&quot;directioncode&quot;).getValue() === 1) { // 1 is outgoing
    formContext.getAttribute(&quot;from&quot;).setValue([{entityType: &quot;queue&quot;, id: queueId, name: queueName}]);
}
</code></pre>
<h2 id="set-form-paramaters-with-the-name-and-expected-value" tabindex="-1"><a class="header-anchor" href="#set-form-paramaters-with-the-name-and-expected-value" aria-hidden="true">#</a> Set Form paramaters with the name and expected value</h2>
<p>By giving form parameters the same name and correct value as the attribute on the target form, the parameters will auto-set the fields on the target form. In this way the receving form parameters on the the target form doesn't need to be explicit set.</p>
<pre><code>const formParameters = {
    from: [{ entityType: &quot;queue&quot;, id: queueId, name: queueName }],
    to: [{ entityType: customerType, id: customerId, name: customerName }],
    regardingobjectid: [{ entityType: &quot;incident&quot;, id: incidentId, name: incidentTitle }],
};

const formOptions = {
    entityName: &quot;email&quot;
}      

await Xrm.Navigation.openForm(formOptions, formParameters);
</code></pre>
<p>When possible, use the new form option 'createFromEntity', to make use of the mapped column values between the entities.</p>
<pre><code>const formOptions = {
    entityName: &quot;email&quot;,
    createFromEntity: [{ entityType: &quot;incident&quot;, id: incidentId, name: incidentTitle }]
}

await Xrm.Navigation.openForm(formOptions, formParameters);
</code></pre>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<p>https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/design-performant-forms
https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/define-ribbon-enable-rules#custom-rule</p>
</div></template>
