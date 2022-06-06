import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-61cfcd0a","/00.introduction.html",{"title":"Introduction"},["/00.introduction","/00.introduction.md"]],
  ["v-73005554","/CONTRIBUTING.html",{"title":"How to contribute"},["/CONTRIBUTING","/CONTRIBUTING.md"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html","/README.md"]],
  ["v-695a5e6c","/1000.environment-configuration/DH1201.html",{"title":"Regel 1201"},["/1000.environment-configuration/DH1201","/1000.environment-configuration/DH1201.md"]],
  ["v-65f0ad2e","/1000.environment-configuration/DH1202.html",{"title":"Regel DH1202"},["/1000.environment-configuration/DH1202","/1000.environment-configuration/DH1202.md"]],
  ["v-6286fbf0","/1000.environment-configuration/DH1203.html",{"title":"Regel 1203"},["/1000.environment-configuration/DH1203","/1000.environment-configuration/DH1203.md"]],
  ["v-6f09952d","/1000.environment-configuration/installation-configuration.html",{"title":"This is another rule 3"},["/1000.environment-configuration/installation-configuration","/1000.environment-configuration/installation-configuration.md"]],
  ["v-6cf4ec6e","/1000.environment-configuration/",{"title":"Overview"},["/1000.environment-configuration/index.html","/1000.environment-configuration/README.md"]],
  ["v-d652d7a8","/1100.user-experience-design/ux-design.html",{"title":"UX design"},["/1100.user-experience-design/ux-design","/1100.user-experience-design/ux-design.md"]],
  ["v-5c63ceb0","/1200.naming-conventions/azure-resources.html",{"title":"Azure Resources"},["/1200.naming-conventions/azure-resources","/1200.naming-conventions/azure-resources.md"]],
  ["v-50cbde04","/1200.naming-conventions/azure-tags.html",{"title":"Azure Tags"},["/1200.naming-conventions/azure-tags","/1200.naming-conventions/azure-tags.md"]],
  ["v-ba4dba04","/1200.naming-conventions/naming-conventions.html",{"title":"Naming conventions"},["/1200.naming-conventions/naming-conventions","/1200.naming-conventions/naming-conventions.md"]],
  ["v-0cf8cfc0","/1300.customization/entity-design.html",{"title":"Entity design"},["/1300.customization/entity-design","/1300.customization/entity-design.md"]],
  ["v-bbf2e5b6","/1400.extending-client-side/extending-clientside.html",{"title":"Extending client-side"},["/1400.extending-client-side/extending-clientside","/1400.extending-client-side/extending-clientside.md"]],
  ["v-53892bf6","/1500.extending-server-side/extending-serverside.html",{"title":"Extending server-side"},["/1500.extending-server-side/extending-serverside","/1500.extending-server-side/extending-serverside.md"]],
  ["v-287069e4","/1600.external-applications/external-applications.html",{"title":"External applications"},["/1600.external-applications/external-applications","/1600.external-applications/external-applications.md"]],
  ["v-2167bd5a","/1700.design-patterns/design-patterns.html",{"title":"Design Patterns"},["/1700.design-patterns/design-patterns","/1700.design-patterns/design-patterns.md"]],
  ["v-6f172275","/1800.data-migrations/datamigrations.html",{"title":"Data migrations"},["/1800.data-migrations/datamigrations","/1800.data-migrations/datamigrations.md"]],
  ["v-17bb38ad","/2000.guidelines/possible-structure.html",{"title":"Guidelines Dynamichands"},["/2000.guidelines/possible-structure","/2000.guidelines/possible-structure.md"]],
  ["v-df17b1fa","/2000.guidelines/rules-list-test.html",{"title":"Rule list based on pages"},["/2000.guidelines/rules-list-test","/2000.guidelines/rules-list-test.md"]],
  ["v-0edc2073","/2000.guidelines/tools.html",{"title":"Tools"},["/2000.guidelines/tools","/2000.guidelines/tools.md"]],
  ["v-14c6e1f6","/2000.guidelines/tryout-markdown.html",{"title":"Try-out"},["/2000.guidelines/tryout-markdown","/2000.guidelines/tryout-markdown.md"]],
  ["v-59a9b32e","/3000.powerautomate/powerautomate.html",{"title":"Power Automate"},["/3000.powerautomate/powerautomate","/3000.powerautomate/powerautomate.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
