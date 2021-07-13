# Power Automate

## Do keep Conditions empty of steps

Try to keep the 'If yes' and 'If no' is empty as possible, because when closed it hides the steps (logic).

Try to do the **Condition** and **Terminate** if not meet, while continue the happy flow under the Condition.

![keep-condition-empty](/assets/poweratomate-keep-condition-empty.png)

## Terminate with the correct status

Terminate is often used when a Condition is not meet to run the flow. To inform the administrator, use Cancelled as status.

## Resource not found for the segment '[MY_GUID]' or Empty segment encountered in request URL. Please make sure that a valid request URL is specified. ##

OData is used by Power Automate and OData needs to know about the type. Only the Id is not enough. Lookup attributes need to be specified as:
````
<plural entity name>(<EntityId>)

Example: accounts(2999a72c-c4ed-ea11-a817-000d3abb4345)
````

![lookup-with-type](/assets/powerautomate-lookup-with-type.png)

This plural name is not the plural name of the entity, but created by odata. It will pick the entityname and add s, es, ies. To found out with the plural name is do:
````
<org ur>/api/data/v9.1/EntityDefinitions(LogicalName='<LogicalName>')?$select=EntitySetName
````

## Avoid unneeded Apply to Each steps ##

If only one value is needed or is returned then doing an Apply to Each step is not needed.

The Apply to Each step takes the item by using the input (Select an output from previous steps) like:
````
outputs('Get_Publications')?['body/value']
````
To get the value of an item in the containing step it looks like:
````
items('Apply_to_each')?['cht_publicationid']
````
To get rid ot the Apply to Each step we can combine the two expressions into one like:
````
outputs('Get_Publications')?['body/value']?[0]?[cht_publicationid']
````
or try to use body() instead of output()
````
body('Get_Publications')?['value']?[0]?[cht_publicationid']
````

## Use Find Items as name for Lists steps ##

## USe Get Item as name for Get by ID steps .##

## Make Apply to Each steps parallel when doing bulk ##

*Apply to Each* steps process sequential (one-by-one) by default. When a lot of records need to be looped, changing it to run in parallel, will improve performance a lot.

Go to the settings of the step (menu->settings) and enable **Concurrency Control**. Default degree of Parallelism is 20 which will result around 10x performance, depending on the workload. Bring it down to 10 or lower when you experience issues.

## Use Connection References ##

![Connection References](/assets/powerautomate-connection-references.png)

TODO: Explain benefit

Keep in mind that a maximum of 16 flows can use one connection reference. If the same connection needs to be used in more than 16 flows, then create another connection reference with a connection to the same connector. There is no limit to the number of actions in each flow that can be associated with the connection reference.


Still in Preview at time of writing and the ALM will surely smooth out soon but meanwhile you still need to make sure you are documenting exactly what they are and how they are connecting (via the user, via a service principal etc) and re-use.  You might be limited to the scale of reuse during Preview but having 3 different connection references to the same Dataverse table in a single flow? You’re creating work for yourself!

## Secured Inputs & Outputs ##
It’s absolutely fine to leave this step till after the debug stage but you definitely need to put some thought into what data is visible to people allowed to view your Flow’s run history. Hit the ellipsis in the top right of your action, select Settings and toggle on Secure Inputs and Secure Outputs. Your organisation likely has its own rules on what is considered sensitive but if you’re connecting to Key Vault or working with HR data, I’d be flicking those toggles!

## Actions Should Have Meaningful Names ##
When you're deep in the loops it's far too easy to lose track of context! Assigning memorable and meaningful names will pay dividends later down the line. You may already have naming policy elsewhere where you work so agree a convention between you and stick to it to help each other out. I’m a fan of descriptive Pascal Case myself.

## Consider Concurrency In Loops ##
For an immediate performance boost, head back to Settings and enable concurrency on your loops. Remember it does not tend to play well if you are using variables in there but I find it’s sometime beneficial to engineer away from a variable if it means I can knock 80% off the run time!

## Don’t Nest Too Deep ##
I know how hard it is to avoid sometimes but try to avoid nesting too deep. PA itself will impose a limit (8 at time of writing) but your bleeding eyes 10 weeks later when you’re debugging probably have a lower threshold!

## Error Handling ##
Do you know what will happen if a step fails? Have you captured said failure? Use Configure Run After to have different follow-on actions depending on the success or failure of key Actions. Stephen Siciliano wrote a great blog all about this.

## Optimise & Look For Efficiencies ##
It probably goes without saying but you should always aim for the absolute minimum amount of calls needed to do the job, especially where you are calling potentially slow or expensive APIs. A good example of this is querying Environment Variables, should that be six calls for the six variables or could you make one call with a well thought out Dataverse filter and an array?

## Variables Should Have Meaningful Names ##
I’ve already mentioned that your steps should have meaningful names but the same also goes for your variables. A quick tip here, if you are using PowerApps as your trigger, put “ask in PowerApps” dynamics expressions into an Initialise Variable action and give both the action and variable a good name to reap a much more meaningful prompt to your users over in their Canvas Apps.

## Cloud Flows Should Be In Solutions ##
It’s getting better all the time but it can still be confusing to try and find specific flows or work out who can do what with them. Not only do Solutions help you move your creations around but they also help you organise your work into logical features or story collections.

## Always Think Scale ##
Sure your cloud flow works when there are only ten records in your table but what happens when you’re dealing with 10 million? This is where Filters and Tops on Lists, timeouts (and concurrency) have to come into play.
Keep It Simple Stupid – It’s an old adage but a good one. If you’re seven nests in then maybe it’s time to start thinking about breaking your cloud flow out into smaller, more discreet functions.

## Comments ##
Don't forget to comment your actions. Like many useful features Add a Comment it underneath that ellipsis in the top right.

## Consider Performance / Readability ##
It's a fine line and adding 10 strings together in a loop might be easy to understand but that might be taking 6 seconds whereas an expression utilising join is done in milliseconds. If you have a using waiting for the outcome of this Flow, go for speed and comment and document well.
