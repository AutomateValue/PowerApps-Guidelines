export const data = {
  "key": "v-695a5e6c",
  "path": "/1000.environment-configuration/DH1201.html",
  "title": "Regel 1201",
  "lang": "en-US",
  "frontmatter": {
    "rule_id": 1201,
    "rule_category": "class-design",
    "title": "Regel 1201",
    "severity": "Required",
    "read_more": true
  },
  "excerpt": "<h1 id=\"title-dh1201\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#title-dh1201\" aria-hidden=\"true\">#</a> Title DH1201 <Required/></h1>\n<p>This <code v-pre>Id</code> always bugged me, because of this simple fact - it's not an Id in code, it's a reference. So if you just wanted the <code v-pre>Id</code> in code you use this:</p>\n<div class=\"language-csharp ext-cs line-numbers-mode\"><pre v-pre class=\"language-csharp\"><code><span class=\"token class-name\"><span class=\"token keyword\">var</span></span> contactId <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>EntityReference<span class=\"token punctuation\">)</span>customMethod<span class=\"token punctuation\">[</span><span class=\"token string\">\"dh_ContactId\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>Id<span class=\"token punctuation\">;</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div>",
  "headers": [],
  "git": {
    "updatedTime": 1654501708000,
    "contributors": [
      {
        "name": "remyvd",
        "email": "remy.vanduijkeren@dynamichands.nl",
        "commits": 1
      },
      {
        "name": "remyvd",
        "email": "remy@automatevalue.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "1000.environment-configuration/DH1201.md"
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
