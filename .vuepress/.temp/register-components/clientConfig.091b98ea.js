import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Depends", defineAsyncComponent(() => import("C:/Users/RemyvanDuijkeren/OneDrive/Source/PowerApps-Guidelines/.vuepress/components/Depends.vue"))),
      app.component("NumberModifier", defineAsyncComponent(() => import("C:/Users/RemyvanDuijkeren/OneDrive/Source/PowerApps-Guidelines/.vuepress/components/NumberModifier.vue"))),
      app.component("Recommended", defineAsyncComponent(() => import("C:/Users/RemyvanDuijkeren/OneDrive/Source/PowerApps-Guidelines/.vuepress/components/Recommended.vue"))),
      app.component("Required", defineAsyncComponent(() => import("C:/Users/RemyvanDuijkeren/OneDrive/Source/PowerApps-Guidelines/.vuepress/components/Required.vue"))),
      app.component("RuleList", defineAsyncComponent(() => import("C:/Users/RemyvanDuijkeren/OneDrive/Source/PowerApps-Guidelines/.vuepress/components/RuleList.vue")))
  },
}
