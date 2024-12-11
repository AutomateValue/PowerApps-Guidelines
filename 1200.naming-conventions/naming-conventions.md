# Naming conventions

## Environments must be named by purpose <Required/>
Name environments only be there purpose, like Production or Test.

❌ DO NOT use abbrevations or contractions, because most users are not aware of the meaning.

❌ DO NOT use the customer name in the environment name, because this is already clear by the tenant where the environment lives in ([DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

::: tip
You can even use [emoji's](https://getemoji.com/) to make it even more clear for users!
:::

This will result into the following examples:

❌ DO NOT:

- Contoso Production
- Contose PRD
- PRD
- TST

✔️ DO:

- Production
- Test
- 🚀 Production
- 📦 Acceptance
- 🚦 Test
- 🧪 Development
- 👨‍💼 Personal Productivity (default)
- 📊 Load Test

This will result into a clear homescreen for the users.
![environment-naming-homescreen](/assets/environment-naming-homescreen.png)

## Name Default Environment 'Personal Productivity'

A single default environment is automatically created by Power Apps for each tenant and shared by all users in that tenant. Whenever a new user signs up for Power Apps, they're automatically added to the Maker role of the default environment.

The default environment is created in the region closest to the default region of the Azure AD tenant. There is specific guidance for the Default environment to call out because of its unique nature:

- It’s automatically created with the first user in the region closest to the Azure AD tenant
- New users that sign up for Power Apps are automatically added to the Maker role
- Users are not automatically added to the Environment Admin role
- The default environment can’t be deleted, but you can rename it – e.g., Personal Productivity (do it now, if you haven't!)

https://docs.microsoft.com/en-us/microsoft-365/community/defining-a-power-platform-environment-strategy

What is the default environment?

A default environment is a particular type of production environment. Each tenant has a default environment that’s created automatically. For each tenant, a default environment is automatically created by Power Apps, which is shared by all users. Whenever a new user signs up for Power Apps, they’re automatically added to the Maker role of the default environment. So it is seen as a public environment of your tenant.

Why not use the default environment for production?

You can’t backup and restore the default environment.
The default environment is limited to 32 GB of storage capacity. In case you need to store more data, you can create a production environment.
Helps to segregate data and apps so that other environments can not use them.
Everyone in your tenant has permissions to create apps and flows in default. There currently is no way to block the Environment Maker role assignment in the Default environment.
Non-default environments offer more control around permissions.
What’s the use of the default environment then?

It is used the environment as a user and team productivity environment for the business groups, not business-important or mission-critical apps. Hence it is recommended to rename the environment through the admin center to make the purpose of that environment self-explanatory.
This environment is used for first-party integrations, like creating an app from a SharePoint list. Learn more: The default environment. Thus, This environment can’t be disabled or deleted because it hosts integration with products like SharePoint and Project.

https://summitbajracharya.com.np/powerapps-default-environment-important-things-you-must-know/

Name it something like:
- Personal
- Personal (default)
- Personal Productivity
- Personal Productivity (default)
- 👨‍💼 Personal
- 👨‍💼 Personal (default)
- 👨‍💼 Personal Productivity
- 👨‍💼 Personal Productivity (default)

## Don't use `new_` as prefix <Required/>

The prefix  is determined by the publisher. Check if there is already a good custom publisher available and use that one. If not, create a new publisher with a good prefix like for example the customer abbrivation.

## Don't use `Id` in the name of a lookup field <Required/>

This `Id` always bugged me, because of this simple fact - it's not an Id in code, it's a reference. So if you just wanted the `Id` in code you use this:

```csharp
var contactId = ((EntityReference)customMethod["dh_ContactId"]).Id;
```

Which I don't like, because you're repeating the abbreviation `Id`. In my opinion this kind of violates "DRY" so I will avoid it if at all possible. Using the new school way it looks cleaner without this repetition:
 
```csharp
var contactId = ((EntityReference)customMethod["dh_Contact"]).Id;
```

## One-To-Many relationships should have clear names <Recommended/>

One-to-Many aka Lookups relationship should have the following name, where any prefix is removed apart from the first one:

`<prefix>_<primary entity schema name without prefix>_<related entity schema name without prefix>_<fieldname>`

This will look like:

|relationship name                | lookup field name|
|---------------------------------|------------------|
|dh_account_project_customer      | dh_customer      |
|dh_account_project_endcustomer   | dh_endcustomer   |

## Many-To-Many relationships should have clear names

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
