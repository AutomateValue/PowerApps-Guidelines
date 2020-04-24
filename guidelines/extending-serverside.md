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
