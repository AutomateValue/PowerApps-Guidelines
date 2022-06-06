<template><div><h1 id="entity-design" tabindex="-1"><a class="header-anchor" href="#entity-design" aria-hidden="true">#</a> Entity design</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://crmtipoftheday.com/" target="_blank" rel="noopener noreferrer">Dynamics CRM Tip of the Day<ExternalLinkIcon/></a> created a great guide for <a href="https://crmtipoftheday.com/wp-content/uploads/2016/05/entity.pdf" target="_blank" rel="noopener noreferrer">creating entities in Dynamics 365<ExternalLinkIcon/></a>.</p>
</div>
<h2 id="how-do-you-decide-between-using-a-lookup-field-or-an-option-set" tabindex="-1"><a class="header-anchor" href="#how-do-you-decide-between-using-a-lookup-field-or-an-option-set" aria-hidden="true">#</a> How do you decide between using a Lookup Field or an Option Set?</h2>
<p>Lookups are vastly improved since the change from Web UI to the Unified Client Interface (UCI), so more often lookups are the better choice in UCI than it was in Web UI.</p>
<p>Option Set vs. Lookup in UCI:</p>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Option Set</th>
<th>Lookup</th>
</tr>
</thead>
<tbody>
<tr>
<td>Information to store</td>
<td>Only label and value</td>
<td>Can store other data</td>
</tr>
<tr>
<td>Purpose</td>
<td>Data that (almost) never changes</td>
<td>Data that can change or needs to be maintained</td>
</tr>
<tr>
<td>Localization</td>
<td>Built-in</td>
<td>You build localization</td>
</tr>
<tr>
<td>Treated as</td>
<td>Solution component (consultant/deployment needed)</td>
<td>Reference data (no consultant/deployment needed)</td>
</tr>
<tr>
<td>Retire values</td>
<td>No built-in way</td>
<td>Supports inactive state</td>
</tr>
<tr>
<td>Filtering values</td>
<td>By developer script</td>
<td>By views and security</td>
</tr>
<tr>
<td>Stored as</td>
<td>whole number</td>
<td>Entity reference</td>
</tr>
<tr>
<td>Maximum items for UX</td>
<td>About 50 items</td>
<td>Lots of items</td>
</tr>
<tr>
<td>Search for value</td>
<td>Only first character of value</td>
<td>Search through all searchable fields + result highlighting in bold</td>
</tr>
<tr>
<td>Clicking in field</td>
<td>Shows list with all values</td>
<td>Shows recently used records</td>
</tr>
<tr>
<td>Shown information</td>
<td>Only value</td>
<td>Two columns until you click the expend arrow, which shows all columns. (Three columns in Web UI)</td>
</tr>
</tbody>
</table>
<h2 id="data-modeling-as-a-team" tabindex="-1"><a class="header-anchor" href="#data-modeling-as-a-team" aria-hidden="true">#</a> Data Modeling as a team</h2>
<p>• Agree on naming with emphasis on consistency
– Sports Team or Team
– Sports Team Player, Team Player, or Player</p>
<h2 id="built-in-vs-custom-entities" tabindex="-1"><a class="header-anchor" href="#built-in-vs-custom-entities" aria-hidden="true">#</a> Built-in vs. Custom Entities</h2>
<p>• Many system entities contain additional perks that custom
entities will need additional configuration to provide
– Opportunities, Quotes, Orders, and Invoices provide line
item totals without coding or rollup fields.
– Only Accounts, Contacts, and Leads can be used in
marketing lists
– Activity records roll-up from child records to provide
visibility from parent.</p>
<p>Evaluating system entity usage
– Are we using it for the intended purpose?
– What is the built-in functionality – do we need it, will it
hurt us?
– Do we have other future uses that might conflict?
– Should we create a type code vs. separate entity per type?
– Are there ISV solutions that depend on us using this
entity?</p>
<h2 id="user-team-vs-organization" tabindex="-1"><a class="header-anchor" href="#user-team-vs-organization" aria-hidden="true">#</a> User/Team vs. Organization</h2>
<p>• When in doubt, choose User/Team
• Organization is great for reference data</p>
<h2 id="choosing-other-entity-options" tabindex="-1"><a class="header-anchor" href="#choosing-other-entity-options" aria-hidden="true">#</a> Choosing other entity options</h2>
<p>– Many entity options can’t be turned off once turned on
• Notes, Activities , etc.
– Enabling options if not needed creates extra overhead of relationships created</p>
<h2 id="existing-vs-new-field" tabindex="-1"><a class="header-anchor" href="#existing-vs-new-field" aria-hidden="true">#</a> Existing vs. New Field</h2>
<p>– Use fields for their intended purpose
– Do you need field level security in the future?
– Does existing data conform to the data type?
– Does the field take part in built-in functionality like originating lead ID that is populated during convert?</p>
<h2 id="yes-no-or-blank-choice" tabindex="-1"><a class="header-anchor" href="#yes-no-or-blank-choice" aria-hidden="true">#</a> Yes/No (or blank) choice</h2>
<p>Always try to use the expliciet Yes/No chooice datatype, if possible. This will make sure in code it is a boolean, wich makes programming easier, and SQL Server can store this more efficiently.</p>
<p>One downside is that needs a default value, yes or no, so you can't make it blank by default. It can be made blank (=null) by making the column not required and settings it explicitly to null, but it is cumbersome.</p>
<p>A second best option is to create a global choice (option) with the values Yes (=1) and No (=0). Give this gloabl chooice a good generic name like, <em>Optional Yes or No</em>, so that it can be reused in your environment.</p>
<p>p.s. there is also a build in global choice called <em>yesornoselectiontype</em>, but we can't select this one 😦.</p>
<h2 id="datetime-fields" tabindex="-1"><a class="header-anchor" href="#datetime-fields" aria-hidden="true">#</a> DateTime Fields</h2>
<p>Most IT systems work with date&amp;times in different timezones use the following rules:</p>
<ul>
<li>show local timezone in the user interface</li>
<li>store as UTC</li>
<li>integrate in UTC</li>
</ul>
<p>Systems that integrate, integrate in UTC. When those systems that are integrating, want to show the date&amp;times to the user, they it should show them in the local timezone of the user.</p>
<p>By default Dynamics 365 CE/PowerPlatform/Dataverse uses the mentioned rules above. It will use the user timezone, set in in personal settings of Dynamics 365 (or windows settings for Canvas Apps), in forms and views. When saving a record it will be stored in UTC. This means for a user in the Netherlands, the value on screen 26-6-2020 00:00, will be saved as 25-6-2020 22:00 UTC (-1 or -2 depending on Zomertijd) in the database. When integrating the API will return two values, the stored value (UTC) and the FormattedValue (timezone and format of calling user). This FormattedValue is only to be used when immidatly shown to the user. Don't store this value in other systems, because when the calling user timezone is changed, things will go wrong.</p>
<p>In this case we are not interested in the time part of the TakeOverDate. It's a date like a birthdate, that is independent of the timezone. Preferable we like to store this in the database as a date without time.</p>
<p>Behaviors
Dynamics 365 CE/PowerPlatform also has some other behaviors for storing (and formatting) date&amp;time, depending on the context how a date&amp;time is used. The following behaviors for date&amp;time are possible (https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/behavior-format-date-time-attribute#specify-the-behavior-of-a-date-and-time-attribute):
UserLocal
This is the default and is already described above.
TimeZoneIndependent
There is no timezone conversion taking place between the User Interface and storing the data. What you see on the screen, is what is stored for every user arond the world. This still stores the time, so timecalculations are still possible. This is usefull for date&amp;times where the time could be important, but is timezone indepent, like checkin times for hotels.
In the WebAPI the issue example would be shown as 2020-06-26T00:00:00Z.
DateOnly
This is the same as TimeZoneIndepent, but setting time is not possible. The time will be always be 00:00:00. It is truly only a Date. This is usefull for things like birthdays.
In the WebAPI the issue example would be shown as 2020-06-26!
Keep in mind that the behaviors is for what happens in the background. What is show in the User Interface also depends on the format (DateTime or DateOnly).</p>
<p>The behavior of an existing DateTime field in Dynamics365 can be changed from UserLocal to TimeZoneIndependent or DateOnly. Keep in mind this is a irreversable change! For a international company like Heineken with possible users in different timezones this should be done with care. After the change, this behavior only applies for newly added/changed data, not currently stored data.</p>
<p>Solution
DateTime fields in the system should be reviewed in there context. Starting(or only) with fields that are used by Blink. Do these DateTime fields only represent the Date (or DateTime independant of timezone). If so the behavior (and format) should be changed in the following steps:
Decide on DateOnly or TimeZoneIndependent:
For fields where only the date is important the DateOnly behavior is the best to use and only use TimeZoneIndependent when time is/could be important. But there is a risk that Javascript,/C# with timecalaculations and integrations like Blink that can't handle DateOnly (without a change). This should be checked first, or TimeZoneIndependent should be chosen for safety.
Review all dependencies (businessrules, workflows, calculated and rollop fields) for issues
Change behavior of field
Open up each dependencies and save it, to make user the latest metadata is used.
Convert the existing values in the database to the expected values *.</p>
<ul>
<li>To convert existing values a batch-tool needs to be created to execute this (see also https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/behavior-format-date-time-attribute#convert-behavior-of-existing-date-and-time-values-in-the-database).</li>
</ul>
<p>Estimation is partly dependend on the number of fields. Proberly 1 to 2 hours per datetime fields. Apart from this a batchtool needs to be created for the existing data, which will be like 1 or 2 days to create.</p>
<h2 id="https-docs-microsoft-com-en-us-powerapps-maker-model-driven-apps-design-productive-forms" tabindex="-1"><a class="header-anchor" href="#https-docs-microsoft-com-en-us-powerapps-maker-model-driven-apps-design-productive-forms" aria-hidden="true">#</a> https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/design-productive-forms</h2>
</div></template>
