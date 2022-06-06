<template><div><h1 id="ux-design" tabindex="-1"><a class="header-anchor" href="#ux-design" aria-hidden="true">#</a> UX design</h1>
<h2 id="_1-understand-what-user-experience-design-means" tabindex="-1"><a class="header-anchor" href="#_1-understand-what-user-experience-design-means" aria-hidden="true">#</a> 1 Understand what User eXperience design means</h2>
<p>TODO: Explain what UX is, compared with UI.</p>
<p>What is this <em>UX</em> thing anyway? It's not the same as User Interface design.</p>
<p><em>User knowing how to use the system</em> vs <em>system knowing what the <strong>user</strong> wants</em></p>
<p>The human brain hates uncertainty - UX design can reduce uncertainty via:</p>
<ul>
<li>Choice reduction</li>
<li>Visual cues</li>
<li>Adapting to user interaction</li>
<li>Following the user's natural process</li>
</ul>
<p>User Experience is about the whole process
[IMG]</p>
<p>Why user experience is important for CRM systems:</p>
<ul>
<li>The frequency of user pain
<ul>
<li>Online store customer: temporary pain caused during the commercial transaction</li>
<li>CRM system user: continuous pain through repeated encounters with the dat-to-day tools</li>
</ul>
</li>
<li>The variety of use cases and user groups
<ul>
<li>People who don't share the same processes trying to use the same customer information system</li>
<li>Trying to deliver <em>sometething for everybody</em> will results in monolithic enterpries software</li>
</ul>
</li>
</ul>
<p>Why its'especially important with Dynamics 365:</p>
<ul>
<li>Higher user expectations due to relative ease of out-of-the-box functionality</li>
<li>Simplified UI only delivers benefits when the actions visible are the relevant ones</li>
<li>Tons of new components to configure = more potential for UX sucess AND failure</li>
</ul>
<h2 id="_2-start-from-the-navigation" tabindex="-1"><a class="header-anchor" href="#_2-start-from-the-navigation" aria-hidden="true">#</a> 2 Start from the navigation</h2>
<h2 id="addresses" tabindex="-1"><a class="header-anchor" href="#addresses" aria-hidden="true">#</a> Addresses</h2>
<p>Account has two addresses (and Contact even has three), which are being keept in sync with the Address entity. Thats why you see  all those address fields, because they are the same as in the Address entity. In the Address entity you can add more addresses, if really need to.</p>
<p>Most organization agree which type of addres is stored in Address 1 and which in Address 2. For example Delivery addres is always Address 1 and Post Address is Address 2. This makes searching easier. If you want to search for thu both addresses, you can also search the Address entity.</p>
<p>Make sure Address type is corretly filled.</p>
<p>I know your feelings; these are the same when I entered the Dataverse world a long time ago. Dataverse is originated from model-driven apps. Learning about model-driven apps &amp; Dynamics 365 apps will give you much more info why things are like this. In model-driven apps you will be given much more out-of-the box functionality then canvas apps, which will out-ways the negative points you mentioned. You need to do some of the work that normally a RDBMS does, which sucks, but it will grow on you.</p>
<p>Account has two addresses (and Contact even has three), which are being keept in sync with the Address entity. Thats why you see all those address fields because they are the same as in the Address entity. In the Address entity you can add more addresses, if really need to. This solution is because historically in model-driven apps, editing related records was not that user friendly (it's improved now-a-days).</p>
<p>Most organization agree which type of address is stored in Address 1 and which in Address 2. For example, Delivery address is always Address 1 and Post Address is Address 2. This makes searching easier. If you want to search in both addresses, you can also search the Address entity.</p>
<p>Looking at all the phone numbers point: The Address entity has three phone numbers, which are specific for that address. Those Address phone numbers also exist on Account, to keep al the address fields the same. Often these are not used, but for companies in logistics, they can be handy.</p>
<p>Views are different from Database Views! Microsoft should rename these to Lists or List Views, because they are connected to the entity and are primarily used for viewing in Lists. I agree that it is annoying you can only query one step further. I highly requested feature by Dynamics 365 consultants.</p>
<p>Multi-valued fields are added recent because consultants really needed a solution for this much requested feature. Too bad that Microsoft created a not so great solution (not proper database-design, Power BI problems, etc.), and the general advice is to only use them when you have no other option.</p>
<p>Dataverse indeed hides the many-2-many relationship implementation. I can understand your worries about this, but I have to say that this feature is one I think is a desirable choice by Dataverse. I practice you almost don't need to query this table. In contrast I have seen enough developers struggle with this in custom apps connecting to a RDBMS. Many-2-many relationship is a hard concept to grasp for a lot of people. If you really want to, you can still create your own many-2-many entity.</p>
<p>Dataverse is indeed creating multiple columns, for like the Customer datatype, which can connect to Account or a Contact. This used to be explicitly (you can still do this), but connection to Account or Contact is used so much in Dynamics 365, that they made it implicit.</p>
<p>I agree that experts should do data modeling if it concerns important business data. But sometimes data starts as a small side project by one person or a department: in this stage correct data modeling is not the most important thing. When it evolves it should be taken over by IT and be proper modeled.</p>
</div></template>
