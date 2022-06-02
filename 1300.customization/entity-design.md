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

## Yes/No (or blank) choice

Always try to use the expliciet Yes/No chooice datatype, if possible. This will make sure in code it is a boolean, wich makes programming easier, and SQL Server can store this more efficiently.

One downside is that needs a default value, yes or no, so you can't make it blank by default. It can be made blank (=null) by making the column not required and settings it explicitly to null, but it is cumbersome.

A second best option is to create a global choice (option) with the values Yes (=1) and No (=0). Give this gloabl chooice a good generic name like, *Optional Yes or No*, so that it can be reused in your environment.

p.s. there is also a build in global choice called *yesornoselectiontype*, but we can't select this one :(.

## DateTime Fields

Most IT systems work with date&times in different timezones use the following rules:
- show local timezone in the user interface
- store as UTC
- integrate in UTC

Systems that integrate, integrate in UTC. When those systems that are integrating, want to show the date&times to the user, they it should show them in the local timezone of the user.

By default Dynamics 365 CE/PowerPlatform/Dataverse uses the mentioned rules above. It will use the user timezone, set in in personal settings of Dynamics 365 (or windows settings for Canvas Apps), in forms and views. When saving a record it will be stored in UTC. This means for a user in the Netherlands, the value on screen 26-6-2020 00:00, will be saved as 25-6-2020 22:00 UTC (-1 or -2 depending on Zomertijd) in the database. When integrating the API will return two values, the stored value (UTC) and the FormattedValue (timezone and format of calling user). This FormattedValue is only to be used when immidatly shown to the user. Don't store this value in other systems, because when the calling user timezone is changed, things will go wrong.

In this case we are not interested in the time part of the TakeOverDate. It's a date like a birthdate, that is independent of the timezone. Preferable we like to store this in the database as a date without time.

Behaviors
Dynamics 365 CE/PowerPlatform also has some other behaviors for storing (and formatting) date&time, depending on the context how a date&time is used. The following behaviors for date&time are possible (https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/behavior-format-date-time-attribute#specify-the-behavior-of-a-date-and-time-attribute):
UserLocal
This is the default and is already described above.
TimeZoneIndependent
There is no timezone conversion taking place between the User Interface and storing the data. What you see on the screen, is what is stored for every user arond the world. This still stores the time, so timecalculations are still possible. This is usefull for date&times where the time could be important, but is timezone indepent, like checkin times for hotels.
In the WebAPI the issue example would be shown as 2020-06-26T00:00:00Z.
DateOnly
This is the same as TimeZoneIndepent, but setting time is not possible. The time will be always be 00:00:00. It is truly only a Date. This is usefull for things like birthdays.
In the WebAPI the issue example would be shown as 2020-06-26!
Keep in mind that the behaviors is for what happens in the background. What is show in the User Interface also depends on the format (DateTime or DateOnly).

The behavior of an existing DateTime field in Dynamics365 can be changed from UserLocal to TimeZoneIndependent or DateOnly. Keep in mind this is a irreversable change! For a international company like Heineken with possible users in different timezones this should be done with care. After the change, this behavior only applies for newly added/changed data, not currently stored data.

Solution
DateTime fields in the system should be reviewed in there context. Starting(or only) with fields that are used by Blink. Do these DateTime fields only represent the Date (or DateTime independant of timezone). If so the behavior (and format) should be changed in the following steps:
Decide on DateOnly or TimeZoneIndependent:
For fields where only the date is important the DateOnly behavior is the best to use and only use TimeZoneIndependent when time is/could be important. But there is a risk that Javascript,/C# with timecalaculations and integrations like Blink that can't handle DateOnly (without a change). This should be checked first, or TimeZoneIndependent should be chosen for safety.
Review all dependencies (businessrules, workflows, calculated and rollop fields) for issues
Change behavior of field
Open up each dependencies and save it, to make user the latest metadata is used.
Convert the existing values in the database to the expected values *.
* To convert existing values a batch-tool needs to be created to execute this (see also https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/behavior-format-date-time-attribute#convert-behavior-of-existing-date-and-time-values-in-the-database). 

Estimation is partly dependend on the number of fields. Proberly 1 to 2 hours per datetime fields. Apart from this a batchtool needs to be created for the existing data, which will be like 1 or 2 days to create.


## https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/design-productive-forms