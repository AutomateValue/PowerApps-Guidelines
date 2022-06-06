export const data = {
  "key": "v-123bf70c",
  "path": "/02.environment-configuration/DH1202.html",
  "title": "Title DH1202",
  "lang": "en-US",
  "frontmatter": {
    "rule_id": 1202,
    "rule_category": "class-design",
    "title": "Title DH1202",
    "severity": "Recommended",
    "read_more": false
  },
  "excerpt": "<h2 id=\"title-dh1202\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#title-dh1202\" aria-hidden=\"true\">#</a> Title DH1202 <Recommended/></h2>\n<p>This <code v-pre>Id</code> always bugged me, because of this simple fact - it's not an Id in code, it's a reference. So if you just wanted the <code v-pre>Id</code> in code you use this:</p>\n<div class=\"language-csharp ext-cs line-numbers-mode\"><pre v-pre class=\"language-csharp\"><code><span class=\"token class-name\"><span class=\"token keyword\">var</span></span> contactId <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>EntityReference<span class=\"token punctuation\">)</span>customMethod<span class=\"token punctuation\">[</span><span class=\"token string\">\"dh_ContactId\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>Id<span class=\"token punctuation\">;</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div><p>Which I don't like, because you're repeating the abbreviation <code v-pre>Id</code>. In my opinion this kind of violates &quot;DRY&quot; so I will avoid it if at all possible. Using the new school way it looks cleaner without this repetition:</p>\n<div class=\"language-csharp ext-cs line-numbers-mode\"><pre v-pre class=\"language-csharp\"><code><span class=\"token class-name\"><span class=\"token keyword\">var</span></span> contactId <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>EntityReference<span class=\"token punctuation\">)</span>customMethod<span class=\"token punctuation\">[</span><span class=\"token string\">\"dh_Contact\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>Id<span class=\"token punctuation\">;</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div>",
  "headers": [
    {
      "level": 2,
      "title": "Title DH1202",
      "slug": "title-dh1202",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "02.environment-configuration/DH1202.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
