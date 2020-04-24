# Extending server-side (DH2100)

## DH2101 Plugins & Workflow Activities must be stateless
It isn't guaranteed that for every execution of your plugin or workflow activity, a new instance is created. Therefore you should always write your plugin and workflow activity classes as stateless. This means that you shouldn't use any properties or non constant fields in your class. The only fields that could be used are: "const" and "static readonly"

## DH2102 Always wrap the OrganizationServiceContext class
The OrganizationServiceContext class is a concrete class that doesn't have a base interface. This makes unit testing really difficult. If you decide to use this class, then always wrap it in your own class that has a base interface. Inject the base interface where needed. See example below.

````
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

## DH2103 Always implement paging for RetrieveMultiple when not using TopCount
When you use RetrieveMultiple, it will only return results up to a specific maximum (5000 by default). If your query would return more data, it requires you to execute another query. Even if you won't expect your query to ever reach that limit, implement it just in case.

Documentation and sample code on how to implement this can be found here for [QueryExpressions](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-queryexpression) and [FetchExpressions](https://docs.microsoft.com/en-us/powerapps/developer/common-data-service/org-service/page-large-result-sets-with-fetchxml).

## DH2104 Exceptions thrown towards the platform within Plugins & Workflow Activities should always be of type 'InvalidPluginExecutionException' and contain an error code for identification
When implementing error handling make sure that you always throw exceptions of type 'InvalidPluginExecutionException'. This exception class allows you to pass an errorcode of type integer. Always identify your errors with an unique number. This makes troubleshooting a lot easier as you can search code for this specific number.

## DH2105 Use filtering attributes in plugin registration to improve performance
When registering plugins you can specify filtering attributes. You must always do that if possible and reduce the amount of attributes to a minimum. This will result in the plugin to only be executed if required and thus increasing performance.

## DH2106 Make Plugins & Workflows asynchronous if possible to improve performance
The user won't need to wait for your plugin or workflow if it is asynchronous. This will improve the user experience and keeps dynamics running smoothly. 
