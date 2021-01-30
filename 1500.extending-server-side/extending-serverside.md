# Extending server-side

## Plugins & Workflow Activities must be stateless <Recommended/>

It isn't guaranteed that for every execution of your plugin or workflow activity, a new instance is created. Therefore you should always write your plugin and workflow activity classes as stateless. This means that you shouldn't use any properties or non-constant fields in your class. The only fields that could be used are: `const` and `static readonly`.

## Always wrap the OrganizationServiceContext class

The OrganizationServiceContext class is a concrete class that doesn't have a base interface. This makes unit testing really difficult. If you decide to use this class, then always wrap it in your own class that has a base interface. Inject the base interface where needed. See example below.

````csharp
    public interface ICrmRepository : IOrganizationService
    {
        IQueryable<TEntity> CreateQuery<TEntity>() where TEntity : Entity;
        IQueryable<Entity> CreateQuery(string entityLogicalName);

        // Other methods from the context class omitted, add what you require.
    }

    class CrmRepository : ICrmRepository
    {
        private readonly OrganizationServiceContext _context;
        private readonly IOrganizationService _service;

        public CrmRepository(IOrganizationService service, OrganizationServiceContext context)
        {
            _service = service;
            _context = context;
        }

        // Implementation omitted
    }

````

## Always implement paging for RetrieveMultiple when not using TopCount <Required/>

When you use RetrieveMultiple, it will only return results up to a specific maximum (5000 by default). If your query would return more data, it requires you to execute another query. Even if you won't expect your query to ever reach that limit, implement it just in case.

Documentation and sample code on how to implement this can be found here for [QueryExpressions](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-queryexpression) and [FetchExpressions](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-fetchxml).

## Exceptions thrown towards the platform within Plugins & Workflow Activities should always be of type 'InvalidPluginExecutionException' and contain an error code for identification <Required/>

When implementing error handling make sure that you always throw exceptions of type 'InvalidPluginExecutionException'. This exception class allows you to pass an errorcode of type integer. Always identify your errors with an unique number. This makes troubleshooting a lot easier as you can search code for this specific number.

TODO:
In the Unified Interface an exception not InvalidPluginExecutionExeception will be shown as. InvalidPluginExecutionExeception will shown the message as is.

Exception Message: An unexpected error occurred from ISV code. (ErrorType = ClientError) Unexpected exception from plug-in (Execute):  DH.Spotler.Plugins.CreateOrUpdateSpotlerJob: System.Exception: Object reference not set to an instance of an object.

## Use filtering attributes in plugin registration to improve performance <Required/>

When registering plugins you can specify filtering attributes. You must always do that if possible and reduce the amount of attributes to a minimum. This will result in the plugin to only be executed if required and thus increasing performance.

## Make Plugins & Workflows asynchronous if possible to improve performance <Required/>

The user won't need to wait for your plugin or workflow if it is asynchronous. This will improve the user experience and keeps dynamics running smoothly.

## Don't impersonate a user not knowing it is existing active user <Required/>

Don't run code based on an user that you don't know if it is active and has a licence, like when recreating an old task on behalf of that user.
