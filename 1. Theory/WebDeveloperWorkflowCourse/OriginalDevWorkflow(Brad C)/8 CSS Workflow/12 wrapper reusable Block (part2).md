<!-- 
& 12 wrapper reusable Block (part2).md 
? (24.11) the next thing that I think we should address is the fact that `this content is pushed up against the very far left` edge of the screen.   
? (24.13) I want to show you an example of why it's worth our energy and effort to `think of our design in terms of reusable blocks` and `repeatable design patterns`. 

-----------------------------------------
? (24.11) the next thing that I think we should address is the fact that `this content is pushed up against the very far left` edge of the screen.   

   - Now earlier in the lesson we already `created a block named wrapper` that can help us out here.

   - let's create another inner div with a class of wrapper
   ...
   `<div id="our-beginning" class="page-section">`
   <`div class="wrapper">`
   ...

(24.12)
- if we look at the design file we see that throughout the design there seems to be a` max width` of about `1200 pixels`.

   - So lets do this within css in the `_wrapper.css` file. 
   
   - Let's add a `max width` of twelve hundred pixels.
   ...
   .wrapper {
   padding-left: 18px;
   padding-right: 18px;
   `max-width: 1200px;`
   }
   ...
   - but we want it to be `horizontally centered` in the screen So... 
   
   - let's also say `margin-left: Auto`. `Margin-right: Auto`.

? (24.13) I want to show you an example of why it's worth our energy and effort to `think of our design in terms of reusable blocks` and `repeatable design patterns`. 

   - look at the `our features section` watch how far we can get styling this section by simply reusing existing blocks. 

   - we see that there is already a div with an `id of features.`
   `<div id="features">`

   - Let's give this div a class of `page-section`
   `<div id="features" class="page-section">`

      - that creates the `vertical padding` above and below our feature section. 

   - Next let's give the section a `blue background`.

   - Let's go ahead and give this section a modifier class named `page-section--blue.`

      `<div id="features" class="page-section page-section--blue">`

   - And then in our `_page-section.css` file. Let's create a new rule that targets that blue modifier class 
   ...
   .page-section {
   padding: 4.5rem 0;
   
   &--blue {
      background-color: $mainBlue;
      color: #fff; //text color 
   }
   }
   ...

   - and we can use the `wrapper class` to limit the content to this middle. Twelve hundred pixels instead of using the full screen. 
   ```html
   <div id="features" class="page-section page-section--blue">
    <div class="wrapper">
   ```

- So hopefully that gives you an idea of just how useful it can be to identify patterns and create reusable blocks.
 -->