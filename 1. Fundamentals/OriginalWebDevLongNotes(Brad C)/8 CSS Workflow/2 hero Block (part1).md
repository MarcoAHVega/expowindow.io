<!-- 

& 2 hero Block.md 
? (17.6) choosing to start with the large-hero section
? (17.10) position: relative;
? (17.18) to position this text to sit on top of the image 
? (18.1) Let's focus on `styling the text`
? (18.7) CSS nesting  
? (19.2) `eliminate this margin between the different text elements`. 
? (19.3)  making `this text` white and using a larger font size 
? (19.4) the perfect segue way into talking about `REM` 
? (19.5) let's focus on fine tuning this `font size`.
? (19.8) `make the text drop to a second line after the word journeys`. 
-----------------------------------------------------------------
? (17.6) choosing to start with the large-hero section
* back in the index.HTML whole file. we see this area with a class of`large-hero`. 

? (17.10) position: relative;
* inside `_large-hero.css` add this css rule as an example:

      .large-hero {
         position: relative;
      }         

? (17.18) to position this text to sit on top of the image 
* Let's get back to the actual task at hand. We want to `write CSS` for this part of the design (`large-hero`) 

   * `this image` can stay where it is 

   * if we want to position this text to sit on top of the image we want to `wrap these elements in a div`

   * let's give this div a unique class name:
   `<div class="large-hero__text-content">`

   * in our `large-hero.css` we want to write CSS that positions the text `on top of the image`:

      ? position the text in the `very top left corner` of the image
      ```css      
      .large-hero__text-content {
         position: absolute;
         top: 0;
         left: 0; 
      }
      ```
      ? centering it `horizontally`
      ```css      
      .large-hero__text-content {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         text-align: center;
      }
      ```
      ? center `centering the content vertically` is a bit trickier.
      ```css
      .large-hero__text-content {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left: 0;
         width: 100%;
         text-align: center;
      }
      ```
      * `translateY()`  will let us position an element vertically relative to itself.

      * there is no right or wrong way to overlay text on top of an image. `This is just one way to do it`.


? (18.1) Let's focus on `styling the text`

   * let's begin with this `your clarity` line (`<h1>Your clarity.</h1>`)


   * `the Bem way` of doing it would be to go into the HTML and `just give this element a class`:

      `<h1 class="large-hero__title">Your clarity.</h1>`

   * and then we would simply target the element with that class in our `_large-hero.css`:

      .large-hero__title {
         font-weight: 300;
      }      


   ? We want this your clarity line to be `blue and large to match the design`.

   * So over in our CSS file `within this title` rule let's apply the hexadecimal code for `the main blue color` that we will be using throughout the design.
      
   * And let's also bump up the `font size` to four point a rem 

      .large-hero__title {
            font-weight: 300;
            color: #2f5572;
            font-size: 4.8rem;
         } 

   ? Let's go ahead and begin styling this `one trip away heading`. 
        
   * here is that element and let's give it a class so that we can target it the BEM way.
      `<h2 class="large-hero__subtitle">One trip away.</h2>`
      
   * and over in our CSS we can `create a new rule` 
      
      large hero underscore underscore subtitle we can actually just 
      
   * `copy and paste` these three declarations and just change the font size to `2.9 REM`. 
   
   .large-hero__subtitle {
         font-weight: 300;
         color: #2f5572;
         font-size: 2.9rem;
         }

? (18.7) CSS nesting  
* normally when we write `postCSS` or SASS `we like to make use of the nesting feature` to conceptually group code that is related to each other. 

   * `the nesting feature gets compiled into a descendant selector`. And while this will work in the browser, `descendant selectors go against the beam philosophy`.

   * How can we `write nested CSS to help us stay organized conceptually without having Web pack compile things down to a descendant selector`.

   * the ampersand `(&)` will give   us `.large-hero` and then we can say underscore underscore text content `(__text-content)` go ahead and hit save that will generate `the exact bem class name`.

   .large-hero `{`
      position: relative;

      `&__text-content` {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left: 0;
         width: 100%;
         text-align: center;
         }

      `&__title` {
         font-weight: 300;
         color: #2f5572;
         font-size: 4.8rem;
         }
            
      `&__subtitle` {
         font-weight: 300;
         color: #2f5572;
         font-size: 2.9rem;
      } 
   `}`

(18.8)   
* So we can already see how organized `our CSS is becoming`
   
   * our main CSS (`style.css`) file imports in different single responsibility CSS files 
      
   * and within our CSS modules folder `we will have a new file for each block of the design`. 



? (19.2) `eliminate this spacing or margin between the different text elements`. 
   
   * So let's completely `remove that margin`.
   ...
      &__title {
         font-weight: 300;
         color: #2f5572;
         font-size: 4.8rem;
         `margin: 0;`
      }
      
      &__subtitle {
         font-weight: 300;
         color: #2f5572;
         font-size: 2.9rem;
         `margin: 0;`
      }
   ...
   }

? (19.3)  making `this text` white and using a larger font size than what we currently have.

   * Let's go ahead and give it a bem class. 
      ...
      `<p` class="`large-hero__description`">We create soul restoring journeys that inspire you to be you.`</p>`
      ...

      * jump over to our `large-hero.CSS` file and underneath the subtitle rule let's just `create a brand new rule`.
      ...
      &__description {
            color: #fff;
            font-size: 1.5rem;
         }
      ...
      }

? (19.4) the perfect segue way into talking about `REM` 

   * Whenever we declare a `font size` or a `padding` or `margin` value `we want to do so in terms of REM`

   * when we use Rem, `Everything is relative to the root of the page` and the root of any web page is always `the HTML element`.

   * `Most web browsers` will have a `default font size` on the HTML element of about the `equivalent of 16 pixels`.

   * So when we say 1.5rem X 16px = 24 pixels.

   * we use rem instead of pixels because `not everyone in the world has their web browser configured exactly the same`.

    * their web browser `might be configured to use a font size of 20 or 25 or even 30 pixels`.

    * and if we use rem for `font size` and `padding` and `margin` our entire web design and all of the whitespace and balance will `scale accordingly to the user's font size preference`.

? (19.5) let's focus on fine tuning this `font size`.

   * to keep things moving right along I will just say that the designer told me this text should be 30 pixels. (`30px / 16px = 1.875rem`)
      ...
      &__description {
            color: #fff;
            font-size: `1.875rem`;
         }
      ...
      }

(19.6)   
* next Let's go ahead and edit this text to use a really `thin font weight`.
      ...
      &__description {
            color: #fff;
            font-size: 1.875rem;
            `font-weight: 100;`
         }
      ...
      }

(19.7)   
* If we look really closely I see a super subtle `shadow on this white text`.
      ...
      &__description {
            color: #fff;
            font-size: 1.875rem;
            font-weight: 100;
            `text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);`
         }
      ...
      }

      * Just a `2 pixel offset` `zero blur`. And what color should it be. Let's use a `black`. But a really transparent black. So we only want the black to be `10 percent` visible.

? (19.8) `make the text drop to a second line after the word journeys`. 

   * I would (`measure on the design`) this and I would say that this has a width of `about 480pixels`

   * So if we go into our CSS and give this element a max width of 480 pixels we see that that breaks the text onto a second line `just like we wanted it to`.
   ...
      &__description {
         color: #fff;
         font-size: 1.875rem;
         font-weight: 100;
         text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
         `max-width: 480px;`
      }
   ...   
   }
   
   * But now we also want that four hundred and eighty pixel paragraph `to be aligned center within the entire block`. So to do that we can use `margin`
   ...
      &__description {
         color: #fff;
         font-size: 1.875rem;
         font-weight: 100;
         text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
         max-width: 480px;
         `margin-left: auto;`
         `margin-right: auto;`
      }
   ...
   }

   * But `if a user has customized` their browser to use a larger than default font setting 480 pixels `won't work`. So instead of using pixels here Let's convert this to REM.(`480 / 16 = 30`).
   ...
      &__description {
      color: #fff;
      font-size: 1.875rem;
      font-weight: 100;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
      max-width: `30rem`;
      margin-left: auto;
      margin-right: auto;
      }
   }
 -->