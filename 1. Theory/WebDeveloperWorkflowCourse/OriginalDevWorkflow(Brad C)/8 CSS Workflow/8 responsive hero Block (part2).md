<!-- 
& responsive hero Block (part 2).md 

? (24.3) Next let's `fine tune the font sizes` for these text elements. 
-----------------------------------------------

? (24.3) Next let's `fine tune the font sizes` for these text elements. 
   
   - So to do that let's open up the `_large-hero.css` file 

      let's begin by fine tuning the font size for this `your clarity` element.

   `<h1 class="large-hero__title">Your clarity.</h1>`

   - So right now it has a baseline font size of `1.1 Rem` and that is clearly too small. I think we can afford to have a larger font size even at the Mobile view. So let's try to round let's increase that just a little bit with `2.4rem`. 
   ...
   &__title {
         font-weight: 300;
         color: $mainBlue;
         margin: 0;
         font-size: `2.4`rem;
   ...

   - we can obviously afford to use `a larger font size` for larger screens.

      - but in reality I think `this is overkill`. 
    
      - I think as soon as the screen gets to this `atSmall` size we can begin to use the full `4.8rem` size.

      - So let's `change this to 4.8rem` and let's just `delete this at medium`. `And this at large mixing.`

      ...
      &__title {
      font-weight: 300;
      color: $mainBlue;
      margin: 0;
      font-size: 2.4rem;

      @mixin atSmall {
         font-size: `4.8`rem;
      }

      @mixin atMedium {
         font-size: 3.2rem;
      } 

      @mixin atLarge {
         font-size: 4.8rem; 
      } 
     ...

(24.4)   
- Next I think we can afford to bump up the font size of this `one tip away` element. 
   `<h2 class="large-hero__subtitle">One trip away.</h2>`
   
   - So here is the rule for that element. Let's change the font size `from 1.1` `to 1.5.` 
   ...
   &__subtitle {
      font-weight: 300;
      color: $mainBlue;
      font-size: `1.5`rem;
      margin: 0;

      @mixin atSmall {
         font-size: 2.9rem;
      }
   } 

(24.5)   
- Next let's `shrink this font size` quite a bit. 
   ...
   `<p class="large-hero__description">We create soul restoring journeys that inspire you to be you.</p>`
   ...

   - Now we want to `leave this font size (1.875rem) in place for desktop` large screens `but we do want to set a smaller baseline` font size.
   ...
   &__description {
      color: #fff;
      font-size: `1.875`rem;
      font-weight: 100;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
      max-width: 30rem;
      margin-left: auto;
      margin-right: auto;
   } 
   ...

   - Let's use a  mixin `atSmall`. 

   - But let's lower the baseline to something like `1.1rem`
   ...
   &__description {
         color: #fff;
         font-size: `1.1`rem;
         font-weight: 100;
         text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
         max-width: 30rem;
         margin-left: auto;
         margin-right: auto;

         @mixin `atSmall` {
            font-size: 1.875rem;
         }
      }
   ...
 -->