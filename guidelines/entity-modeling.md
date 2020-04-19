# Entity modeling (DH1100)

::: tip
[Dynamics CRM Tip of the Day](https://crmtipoftheday.com/) created a great guide for [creating entities in Dynamics 365](https://crmtipoftheday.com/wp-content/uploads/2016/05/entity.pdf).
:::

## DH1100 Don't use `new_` as prefix <Required/>

The prefix  is determined by the publisher. Check if there is already a good custom publisher available and use that one. If not, create a new publisher with a good prefix like for example the customer abbrivation.

## DH1101 Don't use `Id` in the name of a lookup field <Required/>

This `Id` always bugged me, because of this simple fact - it's not an Id in code, it's a reference. So if you just wanted the `Id` in code you use this:

```csharp
var contactId = ((EntityReference)customMethod["dh_ContactId"]).Id;
```

Which I don't like, because you're repeating the abbreviation `Id`. In my opinion this kind of violates "DRY" so I will avoid it if at all possible. Using the new school way it looks cleaner without this repetition:
 
```csharp
var contactId = ((EntityReference)customMethod["dh_Contact"]).Id;
```

See also for an extended explination of [Lookup field name vs relationship field name](https://community.dynamics.com/crm/b/conorssnippetdiary/archive/2013/09/30/crm-lookup-field-name-vs-relationship-field-name)

## DH1102 One-To-Many relationships should have clear names <Recommended/>

One-to-Many aka Lookups relationship should have the following name, where any prefix is removed apart from the first one:

`<prefix>_<primary entity schema name without prefix>_<related entity schema name without prefix>_<fieldname>`

This will look like:

|relationship name                | lookup field name|
|---------------------------------|------------------|
|dh_account_project_customer      | dh_customer      |
|dh_account_project_endcustomer   | dh_endcustomer   |

## DH1103 Many-To-Many relationships should have clear names

Many-to-Many relationships should have the following name, where any prefix is removed apart from the first one:

`<prefix>_<entity schema name without prefix>_<entity schema name without prefix>` or
`<prefix>_<role of the relationship>`

This will look like:

|relationship name     | relationship entity name|
|----------------------|-------------------------|
|dh_account_lead       | dh_account_lead         |
|dh_teammembership     | dh_teammembership       |

Important considerations whether or not to use a N:N relationship:

1. N:N relationship entities do not support adding additional attributes to the entity. For example, if you want to have an attribute classifying the type of relationship between the two entities.
2. The N:N "Add Existing Record" lookup button does not use the CRM lookup view—it limits the visible records to 100, you cannot add additional view columns, and it only supports searching by the name of the record. This is problematic in the case where, for example, there are multiple locations of the same account, each with the same account name.
3. The N:N entity that is created does not support workflow. That means that you cannot fire workflows when a new relationship is created, you also cannot use workflow to create relationships.

## DH1104 How do you decide between using a Lookup Field or an Option Set?

Lookups are vastly improved since the change from Web UI to the Unified Client Interface (UCI), so more often lookups are the better choice in UCI than it was in Web UI.

Option Set vs. Lookup in UCI:

|Feature             |Option Set                       |Lookup                        |
|--------------------|---------------------------------|------------------------------|
|Information to store|Only label and value             |Can store other data |
|Purpose             |Data that (almost) never changes |Data that can change or needs to be maintained |
|Localization        |Built-in                         |You build localization |
|Treated as          |Solution component (consultant/deployment needed) |Reference data (no consultant/deployment needed) |
|Retire values       |No built-in way                  |Supports inactive state |
|Filtering values    |By developer script              |By views and security |
|Stored as           |whole number                     |Entity reference |
|Maximum items for UX|About 50 items                   |Lots of items |
|Search for value    |Only first character of value    |Search through all searchable fields + result highlighting in bold |
|Clicking in field   |Shows list with all values       |Shows recently used records |
|Shown information   |Only value                       |Two columns until you click the expend arrow, which shows all columns. (Three columns in Web UI) |

## DH1105 Data Modeling as a team
• Agree on naming with emphasis on consistency
– Sports Team or Team
– Sports Team Player, Team Player, or Player

## DH1106 Built-in vs. Custom Entities
• Many system entities contain additional perks that custom
entities will need additional configuration to provide
– Opportunities, Quotes, Orders, and Invoices provide line
item totals without coding or rollup fields.
– Only Accounts, Contacts, and Leads can be used in
marketing lists
– Activity records roll-up from child records to provide
visibility from parent. 

Evaluating system entity usage
– Are we using it for the intended purpose?
– What is the built-in functionality – do we need it, will it
hurt us?
– Do we have other future uses that might conflict?
– Should we create a type code vs. separate entity per type?
– Are there ISV solutions that depend on us using this
entity?

## DH1107 User/Team vs. Organization
• When in doubt, choose User/Team
• Organization is great for reference data

## DH1108 Choosing other entity options
– Many entity options can’t be turned off once turned on
• Notes, Activities , etc.
– Enabling options if not needed creates extra overhead of relationships created

## DH1109 Existing vs. New Field
– Use fields for their intended purpose
– Do you need field level security in the future?
– Does existing data conform to the data type?
– Does the field take part in built-in functionality like originating lead ID that is populated during convert?