<!-- 
& 11 page-section reusable Block.md 
? (24.9) Now let's move on and begin styling this intro area `<div id="our-beginning">`
? (24.10) this is a `design pattern`. So to create spacing between the large block and this content `let's create a new block`.  
? (24.10.1) this new class will have the responsibility of adding `top padding` and `bottom padding` for `each section` on the page:

-----------------------------------
? (24.9) Now let's move on and begin styling this intro area `<div id="our-beginning">`

   - let's just work our way down `from the top to the bottom`. 
   
   - So the first piece of the design that I see is this empty space this white space here.(`white space at the top of the section `) 

? (24.10) this is a `design pattern`. So to create spacing between the large block and this content `let's create a new block`.  

   - within the modules folder let's create a new file. 
   
   - Let's name this file `_page-section.css`.

   So let's create a class named `page-section {}` 

? (24.10.1) this new class will have the responsibility of adding `top padding` and `bottom padding` for `each section` on the page:
   ...
   .page-section {
      padding: 4.5rem 0; 
   }
   ...

   - let's be sure to open up our main `styles.css` file and import in this new page section module.
   ...
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   @import "base/_mixins";
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   `@import "modules/_page-section";`

   - And now we can use the new .page-section class `in our html`.
   ...
   `<div id="our-beginning" class="page-section">`
   ...

   - And there is our vertical spacing.
 -->