# UX design

## 1 Understand what User eXperience design means

TODO: Explain what UX is, compared with UI.

What is this _UX_ thing anyway? It's not the same as User Interface design.

_User knowing how to use the system_ vs _system knowing what the **user** wants_

The human brain hates uncertainty - UX design can reduce uncertainty via:

- Choice reduction
- Visual cues
- Adapting to user interaction
- Following the user's natural process

User Experience is about the whole process
[IMG]

Why user experience is important for CRM systems:

- The frequency of user pain
    - Online store customer: temporary pain caused during the commercial transaction
    - CRM system user: continuous pain through repeated encounters with the dat-to-day tools
- The variety of use cases and user groups
    - People who don't share the same processes trying to use the same customer information system
    - Trying to deliver _sometething for everybody_ will results in monolithic enterpries software

Why its'especially important with Dynamics 365:

- Higher user expectations due to relative ease of out-of-the-box functionality
- Simplified UI only delivers benefits when the actions visible are the relevant ones
- Tons of new components to configure = more potential for UX sucess AND failure

## 2 Start from the navigation


## Addresses

Account has two addresses (and Contact even has three), which are being keept in sync with the Address entity. Thats why you see  all those address fields, because they are the same as in the Address entity. In the Address entity you can add more addresses, if really need to.

Most organization agree which type of addres is stored in Address 1 and which in Address 2. For example Delivery addres is always Address 1 and Post Address is Address 2. This makes searching easier. If you want to search for thu both addresses, you can also search the Address entity.

Make sure Address type is corretly filled.

I know your feelings; these are the same when I entered the Dataverse world a long time ago. Dataverse is originated from model-driven apps. Learning about model-driven apps & Dynamics 365 apps will give you much more info why things are like this. In model-driven apps you will be given much more out-of-the box functionality then canvas apps, which will out-ways the negative points you mentioned. You need to do some of the work that normally a RDBMS does, which sucks, but it will grow on you.

Account has two addresses (and Contact even has three), which are being keept in sync with the Address entity. Thats why you see all those address fields because they are the same as in the Address entity. In the Address entity you can add more addresses, if really need to. This solution is because historically in model-driven apps, editing related records was not that user friendly (it's improved now-a-days).

Most organization agree which type of address is stored in Address 1 and which in Address 2. For example, Delivery address is always Address 1 and Post Address is Address 2. This makes searching easier. If you want to search in both addresses, you can also search the Address entity.

Looking at all the phone numbers point: The Address entity has three phone numbers, which are specific for that address. Those Address phone numbers also exist on Account, to keep al the address fields the same. Often these are not used, but for companies in logistics, they can be handy. 

Views are different from Database Views! Microsoft should rename these to Lists or List Views, because they are connected to the entity and are primarily used for viewing in Lists. I agree that it is annoying you can only query one step further. I highly requested feature by Dynamics 365 consultants.

Multi-valued fields are added recent because consultants really needed a solution for this much requested feature. Too bad that Microsoft created a not so great solution (not proper database-design, Power BI problems, etc.), and the general advice is to only use them when you have no other option.

Dataverse indeed hides the many-2-many relationship implementation. I can understand your worries about this, but I have to say that this feature is one I think is a desirable choice by Dataverse. I practice you almost don't need to query this table. In contrast I have seen enough developers struggle with this in custom apps connecting to a RDBMS. Many-2-many relationship is a hard concept to grasp for a lot of people. If you really want to, you can still create your own many-2-many entity.

Dataverse is indeed creating multiple columns, for like the Customer datatype, which can connect to Account or a Contact. This used to be explicitly (you can still do this), but connection to Account or Contact is used so much in Dynamics 365, that they made it implicit.

I agree that experts should do data modeling if it concerns important business data. But sometimes data starts as a small side project by one person or a department: in this stage correct data modeling is not the most important thing. When it evolves it should be taken over by IT and be proper modeled.