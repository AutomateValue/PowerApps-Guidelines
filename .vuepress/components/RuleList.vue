<!-- https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation 
---
rule_id: 1010
rule_category: class-design
title: Don't suppress compiler warnings using the `new` keyword
severity: 1
---
-->

<template>
<div>
    <div v-for="rule in rules">
        <h2>
            <router-link :to="rule.path">{{ rule.frontmatter.title }}</router-link>
            <template v-if="rule.frontmatter.severity == '1'"><Required /></template>
            <template v-if="rule.frontmatter.severity == '2'"><Recommended /></template>
        </h2>
        
        <p>{{ rule.frontmatter.rule_category }}</p>

        <span v-html="rule.excerpt"></span>

        <p><router-link :to="rule.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        rules() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/rules/') && x.frontmatter.publish)
                .sort((a, b) => a.frontmatter.rule_id - b.frontmatter.rule_id);
        }
    }
}
</script>