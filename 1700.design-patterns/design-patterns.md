# Design Patterns

## lookup columns of lookup and set vaules on parent
    async function onChangeProductId(executionContext) {
        const formContext = executionContext.getFormContext();

        const productDetails = [columns.Manufacturer, columns.Model, columns.Capacity, columns.ProductionYear]
        
        const productLkp = getAttributeLookupValue(columns.ProductId, formContext);
        if (!productLkp) {
            productDetails.forEach(c => formContext.getAttribute(c).setValue(null));
            return;
        }

        let options = "?$select=";
        productDetails.forEach(c => options += `${c},`);
        const product = await Xrm.WebApi.retrieveRecord(productLkp.entityType, productLkp.id.removeBraces(), options);

        productDetails.forEach(c => {
            if (product[c] && formContext.getAttribute(c).getValue() !== product[c]) {
                formContext.getAttribute(c).setValue(product[c]);
            }
        });
    }

## lookup ref in first lookup and set second lookup
    async function onChangeCountry(executionContext) {
        const formContext = executionContext.getFormContext();

        const countryLkp = getAttributeLookupValue(columns.Country, formContext);
        if (!countryLkp) {
            formContext.getAttribute(columns.Region).setValue(null);
            return;
        }

        const regionValue = `_${columns.Region}_value`; // lookup column needs to have the format '_{column}_value' to retrieve its data 
        let options = `?$select=${regionValue}`;
        const country = await Xrm.WebApi.retrieveRecord(countryLkp.entityType, countryLkp.id.removeBraces(), options);
        
        if (country[regionValue]) {
            formContext.getAttribute(columns.Region).setValue([{
                id: country[regionValue],
                name: country[`${regionValue}@OData.Community.Display.V1.FormattedValue`],
                entityType: country[`${regionValue}@Microsoft.Dynamics.CRM.lookuplogicalname`]
            }]);
        }
    }

# async pattern

Kick of async work and notify user using notification (like in Azure portal) https://docs.microsoft.com/en-us/power-platform-release-plan/2021wave1/power-apps/model-driven-app-adds-in-app-notifications

This way the work is done in the background, but the user is still in the loop.

Providing feedback to the user can be as simple as showing a dialog confirming the data was received, which gives the back end a second to process the message. In a healthy system there really shouldn’t be more than a few milliseconds delay before the message is processed. In other situations, you can use client-side script to “fake” the user into thinking the data was refreshed instantly.

In the most complex cases your app can have a pending tasks concept and receive updates via SignalR. I like to give the example of the Azure Portal. Some long running operations, like provisioning a virtual machine, can’t be completed instantly. So when you complete the wizard, a task is kicked off, and you find out when it completes via the Notifications area in the corner of the screen.