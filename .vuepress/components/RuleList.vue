<!-- https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation 
---
rule_id: 1010
title: Don't suppress compiler warnings using the `new` keyword
severity: Required
---
-->

<template>
<div>
    <table>
        <thead>
            <tr><th>rule</th><th>name</th><th>severity</th></tr>
        </thead>
        <tbody>
        <!-- <h2>
            <router-link :to="rule.path">{{ rule.frontmatter.title }}</router-link>
            <template v-if="rule.frontmatter.severity == 'Required'"><Required /></template>
            <template v-if="rule.frontmatter.severity == 'Recommended'"><Recommended /></template>
            <template v-if="rule.frontmatter.severity == 'Depends'"><Depends /></template>
        </h2>

        <span v-html="rule.excerpt"></span>

        <template v-if="rule.frontmatter.read-more != 'false'">
        <p><router-link :to="rule.path">Read more</router-link></p>
        </template> -->


            <tr v-for="rule in rules">
                <td>DH{{ rule.frontmatter.rule_id }}</td>
                <td>{{ rule.frontmatter.title }}</td>
                <td>
                    <template v-if="rule.frontmatter.severity == 'Required'"><Required /></template>
                    <template v-if="rule.frontmatter.severity == 'Recommended'"><Recommended /></template>
                    <template v-if="rule.frontmatter.severity == 'Depends'"><Depends /></template>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    computed: {
        rules() {
            var currentDirectory = window.location.pathname.split('/').slice(0, -1).join('/');

            return this.$site.pages
                .filter(x => x.path.startsWith(currentDirectory) && !x.path.endsWith('/'))
                .sort((a, b) => a.frontmatter.rule_id - b.frontmatter.rule_id);
        }
    }
}
</script>