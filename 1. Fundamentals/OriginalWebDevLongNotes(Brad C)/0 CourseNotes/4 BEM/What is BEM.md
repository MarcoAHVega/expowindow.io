<!--
------------------------------------------------------------------------------------
https://medium.com/swlh/the-popular-css-architecture-bem-a929e4b01362
~ The Popular CSS architecture BEM

~ Code Structure Benefits
Confidence and efficiency as a programmer is something that is in constant ebb and flow, especially at a junior level. There’s a myriad of ways to organize a web development project and recognizing them is something that will make you more confident as a coder and efficient as a code-reader.
So in between your jumbled Javascript files, relax by learning about current popular file structure or naming conventions. There aren’t many and lots of coders will pick and chose their own. That said, use conventions to your own power along the way however you please.

~ BEM Methodology is one that has helped me build confidence and greaten my scalability skills for quite some time

~ Why BEM
BEM methodology is one of the more popular organization philosophies for web development projects. BEM is most used as a naming convention for HTML/CSS classes. However, the concepts can go beyond. And this methodology is popular for good reason.
~ 1.It communicates purpose or function
~ 2. It communicates component structure
~ 3. It sets a consistent low-level or specificity for styling selectors
https://seesparkbox.com/foundry/bem_by_example

~ 4. It’s easy to onboard. To use BEM, all you have to do is follow BEM naming conventions. According to State of CSS, BEM is the most popular methodology with new coders and those with longtime exposure.
~ 5. Similarly BEM is popular with software engineers of all salaries, the popularity often going up as the salary does.

Get more demographic facts about BEM and other CSS-related technologies through this awesome website.https://2019.stateofcss.com/technologies/methodologies/

~ The Basics
To reiterate. BEM is a naming convention for HTML and CSS classes. The methodology was developed by Yandex in order to better connect the HTML and CSS files and make developers be more descriptive with their class names.
~ BEM stands for Block Element Modifier, the three types of BEM entities.

^ a block 
is an entity that exists independently, a parent, a top-level abstraction (ex: button, navigation bar, menu, form, …). 
? The BEM class name simply is the name of the block 
(ex: btn navbar login-form …)

^ an element 
is an entity that depends on a block, a child component (ex: button’s text, navigation bar’s logo, menu list item, form label, …). 
? The BEM class name is the name of the parent block followed by two underscores and the element name 
(ex: btn__text navbar__logo menu__item …)

^ a modifier 
is a an entity which describes the style or behavior of a block or an element. 
? A modifier is added to a block or element with a double hyphen to describe its style or functionality. 
(ex: btn--animated logo--primary menu__item--disabled …)

? Note that
~ Nested elements more than 1 level deep, such as nav__item and nav__link are still written as dependent on the block nav

~ Modifiers should add a class name since they add to another layer of styling to a block or element.
<button class="btn btn--animated">Click Me</button>

///NOT
<button class="btn--animated">Click Me</button>

* CSS
~ The accompanying CSS will be so clean. BEM makes specifying by class really straightforward.
.nav {
  padding: 1em;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__title {
  color: brown;
}

.nav__list {
  list-style-type: none;
  display: flex;
  width: 70%;
  text-align: center;
  justify-content: space-around;
}

.nav__item {
  flex-grow: 1;
  padding: 1em;
  background: maroon;
  transition: 0.5s background ease;
  cursor: pointer;
}

.nav__item:hover {
  background: red;
}

.nav__item--selected {
  background: purple;
}

.nav__link {
  text-decoration: none;
  font-size: 17px;
  color: white;
}

* SCSS
~ Nesting elements in SCSS feels even more satisfying. The different styling elements are in their own modular sections. And when you edit the stylesheet, you know exactly what you’re changing.

.nav {
  padding: 1em;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
  color: brown;
  }

  &__list {
  list-style-type: none;
  display: flex;
  width: 70%;
  text-align: center;
  justify-content: space-around;
  }

  &__item {
  flex-grow: 1;
  padding: 1em;
  background: maroon;
  transition: 0.5s background ease;
  cursor: pointer;

    &:hover {
    background: red;
    }
  }

  &__item--selected {
  background: purple;
  }

  &__link {
  text-decoration: none;
  font-size: 17px;
  color: white;
  }
  
}
~ Conclusion
BEM is really satisfying and guaranteed to make you happier when building your web development project or reading someone elses. Enjoy being happy.
--------------------------------------------

----------------------------------------------------------------------------------
* 18. **What is BEM?**

(18.1)   
* let's continue working on this `large-hero section`

   * Let's focus on `styling the text`

   * let's begin with this `your clarity` line (`<h1>Your clarity.</h1>`)

(18.2)
* One of the most popular systems or methodologies for coming up with selectors is named `BEM`.

   * `the Bem way` of doing it would be to go into the HTML and `just give this element a class`:

      `<h1 class="large-hero__title">Your clarity.</h1>`

   * and then we would simply target the element with that class in our `_large-hero.css`:

      .large-hero__title {
         font-weight: 300;
      }      


 (18.3)   
* first of all `Bem is an abstract way of thinking about our design or interface `
   
* this philosophy or way of thinking `can be broken up into three concepts`.

   * The first is the B in Bem which stands for block `a block is an independent reusable part` of our design.

      * This `block is independent it can stand on its own and it can be reused`.

   * the e in Bem. It stands for element `an element belongs to a block it is dependent on a block` which means it cannot be used outside of the block that it belongs to. 

   * the M in Bam which stands for modifier `a modifier can be used on a block or an element`. 
   
      * And `we use a modifier to indicate a change to the default state` of an object. 

(18.4) 
* Now let's talk about a few of the other `key concepts` and advantages to using BEM.

   * All of our CSS selectors should `target elements directly with classes` instead of relying on generic type selectors descendant selectors and the cascade.

      * We are creating `a one on one relationship between a block of HTML and its CSS.`

      * This means that our `blocks are independent self-contained and we are free to move them around and reuse them` throughout the page.

   * Another important concept is that `blocks can be nested inside of other blocks`. 

      * The idea is to `identify patterns` in our design and then `create single responsibility blocks` that can be `used together`. 

      * So clearly columns are a pattern that we have identified in the design. 
         
      * And there is no reason to code a pattern more than once. 

      * That way the column block has the `single responsibility of creating column layouts` and we can reuse that block throughout the page.

   * `bem makes the relationship between our HTML and our CSS crystal clear.`

      * So you can come back to a Web site a year later and `confidently edit the existing styles since you know exactly where and how those rules will affect the page`.


   * `The primary purpose of a class name` is to be a hook for C Ss and JavaScript. 
      
   * `Class names should communicate` useful information to developers. 

 -->