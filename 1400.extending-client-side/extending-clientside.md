# Extending client-side

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Level2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

## Execution Context is automaticcly given to OnChange and OnSave events
formContext.getAttribute("ava_accountid").addOnChange(ava_accountIdOnChange);

ava_accountIdOnChange: function (executionContext) {
        // TODO
    },


## quetes in Dynamics 365
https://medium.com/javascript-in-plain-english/the-real-difference-between-single-quotes-and-double-quotes-in-javascript-3d00bf720bcd
https://github.com/airbnb/javascript#strings--quotes

## seperate form and ribbon scripts

Another common “mistake” is using the same webresource for form events, and for ribbon commands. This is not a problem in itself, but you should be aware that the scripts will be loaded twice, and that it might make debugging more confusing. While form web resources are loaded as normal included scripts during form initialization, command code for ribbon buttons are loaded as unnamed dynamic script blocks when the ribbon loads. This means that you cannot set a breakpoint in the ribbon code before clicking a button the first time (because the script is not yet loaded). It also means that if you use the same web resource for the form and the ribbon, the ribbon dynamic script will overload the form script, and thus you will loose the ability to debug the loaded form script (The dynamic script block can still be debugged if you can locate it…).

https://pederwagner.wordpress.com/2015/12/01/crm-js-webresource-best-practice-for-ribbon-commands-forms/