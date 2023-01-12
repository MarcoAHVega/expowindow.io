<!-- 
& responsive btn Block.md 

? (24.6) let's `lower the font size` of this button for small screens.
----------------------------------------------------
? (24.6) let's `lower the font size` of this button for small screens.
   ...
   `<p><a href="#" class="btn btn--orange btn--large" >Get Started Today</a></p>`
   ...
   
   - So the CSS for this button element lives in the modules folder in the `_btn.CSS` file.
   ...
   .btn {
   background-color: $mainBlue;
   color: #fff;
   text-decoration: none;
   padding: .75rem 1.2rem;
   display: inline-block;

   &--orange {
      background-color: $mainOrange;
   }

   &`--large` {
      font-size: `1.25rem`;
      padding: 1.1rem 1.9rem;
      }
   }
   ...

   - So I think this font size (`1.25rem`) is OK for larger screens. So let's `create a mixin` and say `atSmall.`

   - but for smaller screens or for our line I don't think we even need to define a font size at all. So that will just default to `1rem`.
   ...
   &--large {
      padding: 1.1rem 1.9rem;

      @mixin atSmall {
         font-size: `1.25`rem;
      }
   }
   ...
 -->