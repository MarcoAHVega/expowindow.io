<!-- 
& 3 btn Block.md
? (19.9) this medium sized blue button is the default state for the button block 
? (19.13) let's `create a variable for this blue color` .
? (19.16) Let's get back to `styling the button`.
? (19.17) Let's work on some of `the other instances of the button`.
? (19.19) We want to `save this orange color as a variable`: 
? (19.20) Let's scroll back up to the top of the page and let's work on `this button`
? (19.22) Now `in future lessons` we can fine tune these buttons dials a bit
--------------------------------------------------------------------
? (19.9) `this medium sized blue button` is the `default state for the button block`. 
   
   * So let's begin with it.
   `<a href="#">Get in Touch</a>`
   
   * Let's go ahead and give this element `a class
   `<a href="#" class="btn">Get in Touch</a>`

(19.10)
* and then let's `create a brand new CSS file` just for this button block
   
   * so `within our app folder` and then the `assets` folder and then within these `styles folder` and within the `modules` folder let's create a new file.
   `.../modules/_btn.css`

(19.11)
* and then begin styling `inside _btn.cs`

   * the first thing we want to do is give the button a `blue background` and make it use `white text`
   ...
   .btn {
   background-color: #2f5572;
   color: #fff;
   }
   ...

(19.12)
* we need to include or `import this button block file into our main style sheet`(styles.css).
   ...
   @import "normalize.css";
   @import "base/_global";
   @import "modules/_large-hero";
   `@import "modules/_btn";`

? (19.13) let's `create a variable for this blue color` .

   ...
   `$mainBlue:#2f5572;` 

   .btn {
      background-color: `$mainBlue`;
      color: #fff;
   } 

(19.14)
* let's `create a brand new file` in these styles `base` folder that has the single responsibility of `holding our variables`.
   ...base/_variables.css   

   * let's just go ahead and `cut` this line where we defined the main blue variable and let's `paste` it into the new `_variables.css` file.


(19.15)   
* Let's be sure to go into our `main CSS file` and `import in that new variables file` that we just created.
   ...
   @import "normalize.css";
   @import "base/_global";
   `@import "base/_variables";`
   @import "modules/_large-hero";
   @import "modules/_btn";

* let's go back into our `large-hero` block and `update` the rules for these two headings to use that `blue variable`
   ...
   &__title {
         font-weight: 300;
         color: `$mainBlue`;
         font-size: 4.8rem;
         margin: 0;
      }
      
      &__subtitle {
         font-weight: 300;
         color: `$mainBlue`;
         font-size: 2.9rem;
         margin: 0;
      }

? (19.16) Let's get back to `styling the button`.
    
   * Let's go ahead and `remove the text underline` and also give the button a bit of spacing or `padding`.
   ...
   .btn {
      background-color: $mainBlue;
      color: #fff;
      `text-decoration: none;`
      `padding: 1.2rem;`
   }

   * `because` we are giving it padding. Let's also make sure that we set it to be an `inline block` level element. That way it's parent and surrounding elements will be aware of its `vertical padding`.
   ...
   .btn {
      background-color: $mainBlue;
      color: #fff;
      text-decoration: none;
      padding: 1.2rem;
      `display: inline-block;`
   }

   * so if we compare what we have to the design file I think that our horizontal padding looks good. But I think `we have too much vertical padding`. So in our CSS we can use `CSS shorthand`.
   ...
   .btn {
      background-color: $mainBlue;
      color: #fff;
      text-decoration: none;
      padding: `.75rem 1.2rem`;
      display: inline-block;
   }

   
   * So at this point I think `our default state for the button block` is good to go. 

? (19.17) Let's work on some of `the other instances of the button`.

   * in the `footer the button` is `orange` instead of blue.
   * Let's find that footer button `in our html file`:
      
      `<a href="#">Get in Touch</a>`

   * Let's give it `a class of button`:
      
      `<a href="#" class="btn">Get in Touch</a>`

(19.18)   
* Now we just want to make it `orange` instead of blue.
* let's give it a second class. That begins with the button block and we want to use a `BEM modifier`:
   
   `<a href="#" class="btn btn--orange">Get in Touch</a>`

      * let's jump over to our button CSS file and `create that modifier rule`.
      * So we will `nest it` within the main button block rule:
      ...
      .btn {
         background-color: $mainBlue;
         color: #fff;
         text-decoration: none;
         padding: .75rem 1.2rem;
         display: inline-block;

         &--orange {
            background-color: #d59541;
         }
      }

? (19.19) We want to `save this orange color as a variable`: 
   
   * So let me actually `cut` this (`#d59541`) and

   * let's head over to our `_variables.css` file. 
   
   * Let's `create a brand new variable` named:

      `$mainOrange: #d59541;`

   * back in `_btn.css` we can just say background color should be `$mainOrange`:
      ...
      .btn {
         background-color: $mainBlue;
         color: #fff;
         text-decoration: none;
         padding: .75rem 1.2rem;
         display: inline-block;

         &--orange {
            background-color: `$mainOrange`;
         }
      }

? (19.20) Let's scroll back up to the top of the page and let's work on `this button`

   * should be `orange` and it should be quite a bit `bigger` than the buttons in the header and the footer.

   * let's find this element `in our HTML code`:
   
   `<p><a href="#">Get Started Today</a></p>`

   * let's give it a class of `btn`. 
   
   * Let's give it another class of `btn--orange` so just recycling those classes gets us half the way there. 
   
   * Now let's add on another modifier btn-- and let's create a new one named large. `btn--large`

   `<p><a href="#" class="btn btn--orange btn--large" >Get Started Today</a></p>`

(19.21)   
* Let's jump into our `_btn.css` file and `create a new modifier rule for large` 
   
   * in this large version. Let's do two things. Let's `bump up the font size` and let's give it `extra padding`:
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

      `&--large` {
         `font-size: 1.25rem`;
         `padding: 1.1rem 1.9rem`;
      }
   }

? (19.22) Now `in future lessons` we can fine tune these buttons dials a bit

   
    * maybe add a super subtle text shadow 
    
    * or even a subtle hint of a gradient on hover.     
 -->