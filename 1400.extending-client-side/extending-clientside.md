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