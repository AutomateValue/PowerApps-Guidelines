# Extending client-side

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Execution Context is automaticly given to OnChange and OnSave events
formContext.getAttribute("ava_accountid").addOnChange(ava_accountIdOnChange);

ava_accountIdOnChange: function (executionContext) {
        // TODO
    },

## Don't use try...catch if you're not going to handle the error

Only use a try...catch statement when you can handle the error, otherwhise don't do it.

There is already an top-level event registered (on windows.onerror) by the platform that will catch uncatched errors and will display an ErrorDialog (Xrm.Navigation.openErrorDialog) with the error message and stacktrace to the user.

Make use of this registered event by don't catching errors in try...catch statements. Try..catch statements make your code more difficult to read.

Make sure when using _async_ functions that you _await_ all the way (every chained function needs to be async) otherwhise errors are beeing swollawed.

For async-wait is shown in the error dialog but not a lot is given in the detailed log to download. So if you really care for this than catch and rethrow as following:

        try {
            const options = "?$select=accountnumber1";
            const account = await Xrm.WebApi.retrieveRecord(accountLkp.entityType, accountLkp.id.removeBraces(), options);
        }
        catch (error) {
            throw Error(error.message); // if you don't catch and rethrow you will have less info in the log
            // throw Error(error); // Don't do this because the error message is lost
        }

Most of the time the try...catch will make the code more complicated, so it can also be emitted.


## quetes in Dynamics 365
https://medium.com/javascript-in-plain-english/the-real-difference-between-single-quotes-and-double-quotes-in-javascript-3d00bf720bcd
https://github.com/airbnb/javascript#strings--quotes

## Use template strings instead of concatenation when it contains FetchXML
When writing FetchXMl always use template strings (`).

Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features. It can also be easy copied and tested on correctness.

    const fetchXml =
        `<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
            <entity name='account'>
                <attribute name='name' />
                <attribute name='accountid' />
                <order attribute='name' descending='false' />
                <filter type='and'>
                    <condition attribute='statecode' operator='eq' value='0' />
                    <condition attribute='name' operator='eq' value='${searchName}' />
                </filter>
            </entity>
        </fetch>`;

## seperate form and ribbon scripts

Another common “mistake” is using the same webresource for form events, and for ribbon commands. This is not a problem in itself, but you should be aware that the scripts will be loaded twice, and that it might make debugging more confusing. While form web resources are loaded as normal included scripts during form initialization, command code for ribbon buttons are loaded as unnamed dynamic script blocks when the ribbon loads. This means that you cannot set a breakpoint in the ribbon code before clicking a button the first time (because the script is not yet loaded). It also means that if you use the same web resource for the form and the ribbon, the ribbon dynamic script will overload the form script, and thus you will loose the ability to debug the loaded form script (The dynamic script block can still be debugged if you can locate it…).

https://pederwagner.wordpress.com/2015/12/01/crm-js-webresource-best-practice-for-ribbon-commands-forms/


Enable Rules will make the ribbon script load earlier. Move this to the main script? But is loaded async (form and ribbon is loaded seperate)

## Don't change the javascript file or 'namespace' name that is being used in forms or ribbons (ISV)

The filename and namespace of you're javascript is part of the public API that you are making available. Think good about the name of your javascript file and it's namespace, because you can't change or remove it easily.

This especially applies to ISV's, where the solution is managed and customer can create a dependency on your code. Because of this depency you can't remove or change it. Assume its going to be set in stone and you need to support it 'forever'.

For ISV's it could also be wise to have all your javascript code in one javascript file in your solution, to make your public API as small as possible. By doing this the customer can only make one javascript dependency. Use tools like Webpack or Rollup to develop in multiple files, but deploy it as one file.

## Make only one event handler public for forms: the onLoad event handler (ISV)

Every event handler (public function) you make available in your javascript is part your public API, that needs to be maintained and that can't be changed or removed easily. This especially applies to ISV, where the solution is managed and customer can create a dependency on every public function in you're javascript code.

Only make the onLoad (form) event handler available. Every other event handler is connected within the code of the OnLoad function, like:

```js
(function (exports) {

    function formOnLoad(executionContext) {
        const formContext = executionContext.getFormContext();
        
        // bind events
        formContext.data.entity.addOnSave(onSave);
        formContext.getAttribute("address1_postalcode").addOnChange(onChangePostalCode);
    }
    
    function onSave(executionContext) {
        // Do work...
    }

    function onChangePostalCode(executionContext) {
        // Do work...
    }
    
    exports.formOnLoad = formOnLoad; // make it public

}(this.MyCustomCode = this.MyCustomCode || {}));

// Bind the form onload event to: MyCustomCode.onLoad
```

Doing it this way, makes it sure, that only one dependency exist on your code: the **formOnLoad** function. This also prevents _'hidden'_ event handlers on fields on the form you need to look for. (p.s. use Script Finder in the XrmToolkit to help with this).

## Use x == null to check for undefined and null

A lot of places in javascript code things can be undefined or null. Normally the guidelines is to use triple operator for checks (=== or !==), except for checking for undefined and null at the same time:

    // Don't
    if (x === undefined || x === null) {
        // do work
    }

    if (x !== undefined && x !== null) {
        // do work
    }

    // Do
    if (x == null) {
        // do work
    }

    if (x != null) {
        // do work
    }

## use check for truthy (or falsy)

https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a

If you need to check for undefined, null, empty string o or false then use the following syntax.

    // DO
    if (x) {

    }

    if (!x) {
        // `a` is falsy, which includes `undefined` and `null` and `""`, and `0`, and `NaN`, and `false`
    }


## prefer IFFE Module pattern above others
https://ui.dev/javascript-modules-iifes-commonjs-esmodules/

https://stackoverflow.com/questions/22906662/javascript-design-pattern-difference-between-module-pattern-and-revealing-modul


Try to write ES6 modules and than convert using a packer (Webpack, Rollup) to a IFFE pattern.

## Remove braces from id's when doing OData calls

Remove braces from guid's when doing OData calls like:
    let cleanedid = id.replace(/[{}]/g, "");

If doing this a lot an option could be to extend string with following method: 
    /**
     * Returns a string where { and } is removed. Use this to clean up GUID's for OData calls.
     * @returns {string} - String where { and } is removed.
     */
    String.prototype.removeBraces = function () {
        return String(this).replace(/[{}]/g, "");
    };

## use ES2019 as target

Browsers have improved a lot and currently using ES2019 as target for javascript will cover 95% of browsers. This will be higher because some features in javascript you will never use in the context of Dynamics.

async...await support https://www.w3schools.com/js/js_async.asp Most browser support this already from 2016/2017.

When using USD, then validate which browser engine is used (the new Edge engine can be used, which can handle ES2019 without problems).

## Clear notification at start of function

Make sure that when (re-)entering a function that sets notification(s), that they are first cleared.

When the user fixes the notification, but still sees the notification, the user wil get confused if the problem is revsolved or not.

## Prevent 'Save & Create new' on Quick Create Form

If only one records is allowed than disable the 'Save &Create new' option.

    function formOnSave(executionContext) {        
        const formContext = executionContext.getFormContext();
        formContext.ui.clearFormNotification("SAVE");

        // prevent 'save and create new' function to be used
        if (executionContext.getEventArgs().getSaveMode() === 59) {// save and create new
            formContext.ui.setFormNotification("'Opslaan en nieuwe maken' functie is niet toegestaan!", "ERROR", "SAVE")
            executionContext.getEventArgs().preventDefault();
        }        
    }


## Don't minifier javascript code

JavaScript Minifiers:
I personally avoid JavaScript minifiers as much as possible. In a bid to reduce the size of the libraries developers use minifiers when they feel it gets too large. While minifiers has its advantages, it also comes with a few negative factors as well.

Readability is a major issue. Once a code is minified it looks like one major paragraph. It becomes very difficult to debug issues in the code as well. The non-minified version of the code also needs to be maintained in a Source Control or at least in the Web Resources of the organization.

This will help the developer to debug issues.

## First email or reply to

Reply to emails are always saved before the forms opens, so Form Type is Update. Also the field 'inreplyto' is filled. So we can check it like:

    // opening reply email
    if (formContext.ui.getFormType() === 2 && formContext.getAttribute("inreplyto").getValue()) {

    }

    // opening first email
    if (formContext.ui.getFormType() === 1 && !formContext.getAttribute("inreplyto").getValue()) {

    }

    // also check the direction if needed if you want to change the from from a user to a queue
    if (formContext.getAttribute("directioncode").getValue() === 1) { // 1 is outgoing
        formContext.getAttribute("from").setValue([{entityType: "queue", id: queueId, name: queueName}]);
    }

# Set Form paramaters with the name and expected value 

By giving form parameters the same name and correct value as the attribute on the target form, the parameters will auto-set the fields on the target form. In this way the receving form parameters on the the target form doesn't need to be explicit set.

    const formParameters = {
        from: [{ entityType: "queue", id: queueId, name: queueName }],
        to: [{ entityType: customerType, id: customerId, name: customerName }],
        regardingobjectid: [{ entityType: "incident", id: incidentId, name: incidentTitle }],
    };

    const formOptions = {
        entityName: "email"
    }      

    await Xrm.Navigation.openForm(formOptions, formParameters);

When possible, use the new form option 'createFromEntity', to make use of the mapped column values between the entities.

    const formOptions = {
        entityName: "email",
        createFromEntity: [{ entityType: "incident", id: incidentId, name: incidentTitle }]
    }

    await Xrm.Navigation.openForm(formOptions, formParameters);