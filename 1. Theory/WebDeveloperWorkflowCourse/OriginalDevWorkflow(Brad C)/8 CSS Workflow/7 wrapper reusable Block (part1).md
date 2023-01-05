<!-- 
& wrapper reusable Block (part1).md 
? (24.1) cleaning up the mobile styles for this section. `<div class="large-hero__text-content">` 
? (24.1.1) adding a bit of spacing or `padding` on the left and right sides.
? (24.2) Let's go ahead and create a new module. _wrapper.css 
------------------------------------------
24. **Creating Reusable Blocks**

? (24.1) cleaning up the mobile styles for this section. `<div class="large-hero__text-content">` 

   - the first problem that I noticed aside from these font sizes needing a bit of attention is the fact that `this text is pushed up against the very far left and right edges` of the device. 

   `<p class="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>`
? (24.1.1) adding a bit of spacing or `padding` on the left and right sides.
And from a design perspective that is something that `you want to avoid at all costs`. So let's work on adding a bit of spacing or `padding` on the left and right sides.

   - `is that a pattern` that we could use again and again throughout the page?

? (24.2) Let's go ahead and create a new module. _wrapper.css 
   - So because this isn't unique to the large hero block instead of writing CSS in this large high profile `Let's go ahead and create a new module`.

   `_wrapper.css`
   
   - Let's `create a class` named wrapper and let's give it a bit of `padding` on the left let's say 18 pixels. And let's also give it a bit of padding on the right 

   ```css
   .wrapper {
   padding-left: 18px;
   padding-right: 18px;
   }
   ```
   
   - be sure to `go into our main styles.css file` and include an import that points towards the new wrapper file.
   ...
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   @import "base/_mixins";
   @import "modules/_large-hero";
   @import "modules/_btn";
   `@import "modules/_wrapper";` 
   
   - now we can use this new wrapper class `in our HTML`.

   - We only want to apply the padding to the text content so down here `this div` that houses `all of the text content`.
   ```css
      <div class="large-hero__text-content">
         <h1 class="large-hero__title">Your clarity.</h1>
         <h2 class="large-hero__subtitle">One trip away.</h2>
         <p class="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>
         <p><a href="#" class="btn btn--orange btn--large" >Get Started Today</a></p>
      </div>
   ```
   - Let's wrap these within a `new div`
   - and give it a class of `wrapper`
   
   -if we check the browser We now have the spacing that we wanted.
 -->
