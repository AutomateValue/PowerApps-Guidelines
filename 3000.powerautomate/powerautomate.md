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