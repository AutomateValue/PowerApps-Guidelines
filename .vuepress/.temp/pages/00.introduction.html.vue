<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>This website attempts to provide guidelines for PowerApp/Dynamics365 projects that have learned the hard way be seniors, but are everytime made by juniors. Of course, if you create such a document you should practice what you preach. So rest assured, these guidelines are representative to what we at DynamicHands do in our day-to-day work. Notice that not all guidelines have a clear rationale. Some of them are simply choices we made at DynamicHands. In the end, it doesn’t matter what choice you made, as long as you make one and apply it consistently.</p>
<h2 id="why-would-you-use-this-guidelines" tabindex="-1"><a class="header-anchor" href="#why-would-you-use-this-guidelines" aria-hidden="true">#</a> Why would you use this guidelines</h2>
<p>Although some might see coding guidelines as undesired overhead or something that limits creativity, this approach has already proven its value for many years. This is because not every consultant or developer:</p>
<ul>
<li>is aware that code is generally read 10 times more than it is changed;</li>
<li>is aware of the potential pitfalls of certain solutions in the Power Platform;</li>
<li>is up to speed on certain conventions when building on the Power Platform;</li>
<li>is aware of the impact of using (or neglecting to use) particular solutions on aspects like security, performance, multi-language support, etc;</li>
<li>realizes that not every developer is as capable, skilled or experienced to understand elegant, but potentially very abstract solutions;</li>
</ul>
<h2 id="basic-principles" tabindex="-1"><a class="header-anchor" href="#basic-principles" aria-hidden="true">#</a> Basic principles</h2>
<p>There are many unexpected things I run into during my work as a consultant, each deserving at least one guideline. Unfortunately, I still need to keep this document within a reasonable size. But unlike what some junior developers believe, that doesn't mean that something is okay just because it is not mentioned in this document.</p>
<p>In general, if I have a discussion with a colleague about a smell that this document does not cover, I'll refer back to a set of basic principles that apply to all situations, regardless of context. These include:</p>
<ul>
<li>The Principle of Least Surprise (or Astonishment): you should choose a solution that everyone can understand, and that keeps them on the right track.</li>
<li>Keep It Simple Stupid (a.k.a. KISS): the simplest solution is more than sufficient.</li>
<li>You Ain't Gonna Need It (a.k.a. YAGNI): create a solution for the problem at hand, not for the ones you think may happen later on. Can you predict the future?</li>
<li>Don't Repeat Yourself (a.k.a. DRY): avoid duplication within a component, a source control repository or  a <a href="http://martinfowler.com/bliki/BoundedContext.html" target="_blank" rel="noopener noreferrer">bounded context<ExternalLinkIcon/></a>, without forgetting the <a href="http://lostechies.com/derickbailey/2012/10/31/abstraction-the-rule-of-three/" target="_blank" rel="noopener noreferrer">Rule of Three<ExternalLinkIcon/></a> heuristic.</li>
<li>The <a href="https://github.com/TelerikAcademy/Object-Oriented-Programming/tree/master/Topics/04.%20OOP-Principles-Part-1" target="_blank" rel="noopener noreferrer">four principles of object-oriented programming<ExternalLinkIcon/></a>: encapsulation, abstraction, inheritance and polymorphism.</li>
<li>In general, generated code should not need to comply with coding guidelines. However, if it is possible to modify the templates used for generation, try to make them generate code that complies as much as possible.</li>
</ul>
<p>Regardless of the elegance of someone's solution, if it's too complex for the ordinary developer, exposes unusual behavior, or tries to solve many possible future issues, it is very likely the wrong solution and needs redesign. The worst response a developer can give you to these principles is: &quot;But it works?&quot;.</p>
<h2 id="how-do-you-get-started" tabindex="-1"><a class="header-anchor" href="#how-do-you-get-started" aria-hidden="true">#</a> How do you get started</h2>
<ul>
<li>Ask all developers to carefully read this document at least once. This will give them a sense of the kind of guidelines the document contains.</li>
<li>Include the most critical coding guidelines on your Project Checklist and verify the remainder as part of your Peer Review.</li>
</ul>
<h2 id="to-which-guidelines-should-you-comply" tabindex="-1"><a class="header-anchor" href="#to-which-guidelines-should-you-comply" aria-hidden="true">#</a> To which guidelines should you comply</h2>
<p>The document does not state that projects must comply with these guidelines, neither does it say which guidelines are more important than others. However, we encourage projects to decide themselves which guidelines are important, what deviations a project will use, who is the consultant in case doubts arise. Obviously, you should make these decisions before starting the real work.</p>
<p>To help you in this decision, I’ve assigned a level of importance to each guideline:</p>
<ol>
<li>
<Required/> = Guidelines that you should never skip and should be applicable to all situations
</li>
<li>
<Recommended/> = Strongly recommended guidelines.
</li>
<li>
<Depends/> = May not be applicable in all situations.
</li>
</ol>
</div></template>
