# Entity design

::: tip
[Dynamics CRM Tip of the Day](https://crmtipoftheday.com/) created a great guide for [creating entities in Dynamics 365](https://crmtipoftheday.com/wp-content/uploads/2016/05/entity.pdf).
:::

## How do you decide between using a Lookup Field or an Option Set?

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

## Data Modeling as a team
• Agree on naming with emphasis on consistency
– Sports Team or Team
– Sports Team Player, Team Player, or Player

## Built-in vs. Custom Entities
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

## User/Team vs. Organization
• When in doubt, choose User/Team
• Organization is great for reference data

## Choosing other entity options
– Many entity options can’t be turned off once turned on
• Notes, Activities , etc.
– Enabling options if not needed creates extra overhead of relationships created

## Existing vs. New Field
– Use fields for their intended purpose
– Do you need field level security in the future?
– Does existing data conform to the data type?
– Does the field take part in built-in functionality like originating lead ID that is populated during convert?