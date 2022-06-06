<template><div><h1 id="try-out" tabindex="-1"><a class="header-anchor" href="#try-out" aria-hidden="true">#</a> Try-out</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#this-is-awesome">This is awesome</RouterLink></li><li><RouterLink to="#sections-heading">Sections Heading</RouterLink></li><li><RouterLink to="#alert-options">Alert Options</RouterLink><ul><li><RouterLink to="#line-highlight-in-code-blocks">Line highlight in code blocks</RouterLink></li></ul></li></ul></nav>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h2 id="this-is-awesome" tabindex="-1"><a class="header-anchor" href="#this-is-awesome" aria-hidden="true">#</a> This is awesome</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
<p>REQUIRED RULES use <Required/>.</p>
<p>RECOMMENDED RULES use <Recommended/>.</p>
<h1 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown 👌</h1>
<p>Her's my <strong>awesome</strong> text that lives in a '.md' file and is <em>emphasized</em> in all of its magnificent glory! 🎉</p>
<p>🎉 💯 👌 👍</p>
<p>See <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noopener noreferrer">all emoji<ExternalLinkIcon/></a>.</p>
<blockquote>
<p>I ❤️ VuePress</p>
</blockquote>
<h2 id="sections-heading" tabindex="-1"><a class="header-anchor" href="#sections-heading" aria-hidden="true">#</a> Sections Heading</h2>
<p>And lists are easy...</p>
<ul>
<li>Apples</li>
<li>Bananas</li>
<li>Cherries</li>
</ul>
<p>And ordered lists...</p>
<ol>
<li>First you do this</li>
<li>And then this</li>
<li>And finnaly this</li>
</ol>
<h2 id="alert-options" tabindex="-1"><a class="header-anchor" href="#alert-options" aria-hidden="true">#</a> Alert Options</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">No</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block, which does not work in IE / Edge</p>
</details>
<h3 id="line-highlight-in-code-blocks" tabindex="-1"><a class="header-anchor" href="#line-highlight-in-code-blocks" aria-hidden="true">#</a> Line highlight in code blocks</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="using-vue-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-in-markdown" aria-hidden="true">#</a> Using Vue in Markdown</h4>
<p><em>How are you doing?</em></p>
<blockquote>
<p><strong>I'm doing fine, thanks!</strong></p>
</blockquote>
<p><em>Great, I was wondering what <code v-pre>49 + 32</code> is?</em></p>
<blockquote>
<p><strong>{{49 + 32}}</strong></p>
</blockquote>
<p><em>Could you repeat that a few times?</em></p>
<blockquote>
<p><strong>Sigh...</strong></p>
</blockquote>
<p v-for="i of 3">{{49 + 32}}</p>
<p>{{ 4 + 5 * 9 }}</p>
<p><strong>Our Component:</strong></p>
<NumberModifier :start="5"></NumberModifier></div></template>
