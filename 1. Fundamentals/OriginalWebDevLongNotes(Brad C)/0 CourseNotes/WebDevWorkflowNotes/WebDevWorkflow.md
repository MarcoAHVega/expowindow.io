<!-- 


* 25. *Headline Block*


? (25.1) So in this lesson we are going to continue styling `this content`. 
   ```css
   <div id="our-beginning" class="page-section">
   <div class="wrapper">
   ```
   - instead of treating this like a unique section I'm going to create a generic reusable `headline` block 
   
   because we see these headlines and if we scroll down a bit we also see a very similar headline here. So in our HMO. 
   
? Let's go ahead and give all three of those elements a class of headline.

   ```css
   <h2 class="headline">The first trip we planned was our own.</h2>

   <h3 class="headline">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>

   <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
   ```
   - let's go ahead and create a new CSS file that is dedicated to our new headline block 
   `modules/_headline.css`
   
   - Let's create a class named headline And let's begin styling.
   `.headline {}`
   
   - So let's treat this style as our base line for the headline block 
   ``<h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>``

? (25.2) So if we compare this to what we see in the browser I think the first thing that we should change is make the headings. So it's `not so bold`. 
   ```css
   .headline {
      font-weight: 300; 
   }
   ```
   
(25.3)   
- But before we can expect this change to show up in the browser we need to go into our main `styles.css` file and import this new headline file
   ...
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   @import "base/_mixins";
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   @import "modules/_page-section";
   `@import "modules/_headline";`  
   ... 

(25.4)   
- I think the next thing we should change is to `increase the font size` to match the design file. 
   
   - But remember we want to define our font sizes in terms of `rem `So let's open our calculator and take 46 and divide it by 16. So that gives us 2.875REM.
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   }
   ```
   
  
(25.5)   
- Next let's make the baseline color for this block `blue instead of black` color. 
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   color: $mainBlue;
   }
   ```

(25.6)   
- Now let's start working on `modifier classes` for these two elements.

   ```html
   <h2 class="headline">The first trip we planned was our own.</h2>
       
   <h3 class="headline">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ```
   
(25.7)   
- So if we look at our design file we see that the two of those headlines should be `centered horizontally`. 
   
   - So in our html on those two elements let's add a modifier class of `headline--centered`. 
   
   ```html
   <h2 class="headline headline--centered">The first trip we planned was our own.</h2>
       
   <h3 class="headline headline--centered">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ```
   
   - then in our CSS file let's create a modifier rule centered text align center 
   
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   color: $mainBlue;

   &--centered {
      text-align: center;
   }
   }
   ```
   
(25.8)   
- If we look at our design file we see that the second headline should be orange. 
   
   So in our html Let's add another modifier class on this element named `headline--orange` 
   
   ```html
   <h3 class="headline headline--centered headline--orange">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ```
   and 
   
   - then in our CSS file we can create another modifier rule dash dash orange color should use our main orange var. 
   
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   color: $mainBlue;

   &--centered {
      text-align: center;
   }

   &--orange {
      color: $mainOrange;
   }
   }
   ```
(25.9)    
- we see that this headline should also have a bit `smaller of a font size` than the others. 
   
   - So in our html Let's create another modifier class named headline--small 
   
   ```html
   <h3 class="headline headline--centered headline--orange headline--small">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ``` 
   
   - then in our CSS file. Let's create another modifier rule font size. 
   
   - But we want that in terms of REM. So in our calculator let's clear that out and take 30. Divide it by 16 = 1.875
   
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   color: $mainBlue;

   &--centered {
      text-align: center;
   }

   &--orange {
      color: $mainOrange;
   }

   &--small {
      font-size: 1.875rem;
   }
   }
   ```
(25.10)  
- If we compare this to the design file we see that the small orange headline should also be `wrapped onto a second line`. 
   
   - So to create that effect we can simply apply a maximum with this element. So let's give it a max width of about 500 pixels. 
   
   -So in our html Let's add another modifier class to that element of `headline--narrow` 
   
   ```html
   <h3 class="headline headline--centered headline--orange headline--small  headline--narrow">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ``` 
   - then our CSS let's create a modifier rule 
   
   ```css
   .headline {
   font-weight: 300;
   font-size: 2.875rem;
   color: $mainBlue;

   &--centered {
      text-align: center;
   }

   &--orange {
      color: $mainOrange;
   }

   &--small {
      font-size: 1.875rem;
   }

   &--narrow {
      max-width: 500px;
   }
   }

   ```

   - But now we want this 500 pixel element to be horizontally centered itself 

   ```css
   &--narrow {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
   }
   ```
(25.11)
- So if you look really closely you can see that these two headlines use a slightly lighter or `thinner font weight` than this headline 
   
   - so to implement that difference let's add a modifier class to the top two headlines of headline--light.

   ```html
   <h2 class="headline headline--centered headline--light">The first trip we planned was our own.</h2>
       
   <h3 class="headline headline--centered headline--orange headline--small headline--narrow headline--light ">Ever since, we&rsquo;ve been working to make travel better for everyone.</h3>
   ```
   - And in our CSSA Let's create another modifier rule dash dash light find wait 100.
   
   ```css
   &--light {
    font-weight: 100;
  }
   ```
(25.12)
- And the only thing left that I see is that certain `words need to be bold`. So let's go ahead and bold these key phrases in our html
   ```html
   ..The first trip we planned <strong>was our own.</strong></h2>

   ..Ever since, we&rsquo;ve been working to make travel <strong>better for everyone.</strong></h3>

   ``` 
(25.13)
- one other thing that I'm noticing is that I think we should `decrease the margin below the first headline`.   
- And I think we should `increase the margin below the second headline` 
   
   - so to do that let's add on a few new modifier classes.

   - So in our html on the first headline let's add a new modifier class named `headline--b-margin-small` And on the second headline let's add a modifier class of `headline--b-margin-large`. 
   
   ```html
   <h2 class="headline headline--centered headline--light headline--b-margin-small">The first trip we planned <strong>was our own.</strong></h2>

   <h3 class="headline headline--centered headline--orange headline--small headline--narrow headline--light headline--b-margin-large">Ever since, we&rsquo;ve been working to make travel <strong>better for everyone.</strong></h3>
   ```
   
   - and create those two modifier classes in our headline CSS file. 
   
   ```css
   &--b-margin-small {
    margin-bottom: .5em;
  }

  &--b-margin-large {
    margin-bottom: 1.6em;
  }
   ```

(25.14)   
- I like to define margin on my text elements in `EM instead of Rem`. The nice thing about using EM in this context is that `it's relative to the font size of the element itself` which means we can reuse this class on headlines that have different font sizes and this will always scale with it really nicely.
   
(25.15)  
- instead of creating all of those modifier classes `couldn't we have just created a unique class just for this heading and a unique class just for this heading and a unique class just for this heading`. 
   
   - Well my answer to that is yes absolutely. 

   - if we are not using the modifier system I feel like it can become a bit exhausting to continually come up with new unique class names. 
  
   - I feel like the modifier system will make sense to us even if we have to revisit the project years down the road. Those class names will always make sense and they're easy to reuse and recycle 
   
(25.16)
- Let's get back to the task at hand. We want to `horizontally center this image` 

   - We already created a class named `wrapper` that centers our content in the middle twelve hundred pixels of the page. 
   
   - So why don't we go ahead and wrap this image in the wrapper class and then create a new modifier to make it a bit narrower. 
   
   - Let's go ahead and wrap it in a div with a class of wrapper. 

   - let's just add a modifier class of `wrapper--medium` that will be a bit narrower than the default twelve hundred pixels. 

   ```html
   <div class="wrapper wrapper--medium">
        <img src="assets/images/first-trip.jpg" alt="Couple walking down a street.">
      </div>
   ```
   
   - then within the modules folder. Let's open up the `_wrapper.css` file. Let's create a modifier rule medium. 
   
   - So instead of having a max width of 1200 pixels 
  
   - Let's go ahead and give this modifier class a max width of about 976 say Max with 976 pixels.

   ```css
   .wrapper {
   padding-left: 18px;
   padding-right: 18px;
   max-width: 1200px;
   margin-left: auto;
   margin-right: auto;

   &--medium {
      max-width: 976px;
  }
   ```
(25.17)   
- before we bring this lesson to a close let's see `how things look on a mobile or smaller screen`. 
- So the first thing that I noticed is that `this gap is too large On a smaller screen`. 
 
   - So in our text editor in the modules folder Let's open the file named `_page-section.css` 
   
   - So this amount of vertical padding works well on larger screens.

   ```css
   .page-section {
      padding: 4.5rem 0;
      
      &--blue {
         background-color: $mainBlue;
         color: #fff;
      }
   }
   ```
   
   - So let's wrap it in a media query 

   - but let's set `a smaller baseline padding`. 

   - Let's try `1.2rem`.

   ```css
   .page-section {
      padding: 1.2rem 0;

      @mixin atMedium {
         padding: 4.5rem 0;
      }
      
      &--blue {
         background-color: $mainBlue;
         color: #fff;
      }
   }
   ```
(25.18)  
- Next up I think `the font size for this element is way too large on a small screen` so to adjust that. 
   
   - Let's go into our `_headline.css` file. 

   - this font size of 2.875rem looks great on larger screens. 

   - let's place it `within a media query` 

   - And let's set a smaller baseline font size. 
   
   - I think we could afford to almost cut this size in half. So let's try one 1.9 round.

   ```css
   .headline {
      font-size: 1.9rem;
      font-weight: 300;
      color: $mainBlue;

      @mixin atSmall {
         font-size: 2.875rem;
  }
   ```
(25.19)
- But we do still want this headline to have a larger font size than this headline. 
   
   - So remember this headline uses the modifier class of --small.
   
   - So let's decrease it a bit as well for small screens.

   ```css
   &--small {
    font-size: 1.2rem;
    @mixin atSmall {
      font-size: 1.875rem;
    }
  }
   ```
(25.20)
- The next thing that I want to adjust is the way that this image is being positioned incised on small screens. 

   - Now the reason this extra spacing exists is because we have a wrapper wrapped inside a wrapper. 

   - So what we can do is go into our `_wrapper.css`  And let's just say that any wrapper that is nested within another wrapper should no longer have any horizontal padding.

   ```css
   .wrapper {
      padding-left: 18px;
      padding-right: 18px;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;

      &--medium {
         max-width: 976px;
      }

      .wrapper {
         padding-left: 0;
         padding-right: 0;
      }
   }
   ```
  

26. *Column Layout Block* 

(26.1)   
- in this lesson we will build a re-usable block that we can use to create column layouts throughout our page. 
- So in this lesson we want to focus on this content.

   ```html
   <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">

   <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>

   <p>Lorem ipsum dolor...

   <p>Duis aute irure dolor...

   ```
   
(26.2)   
- If we look at our design file we see that that content you use a `two column layout`. 

   - if we think of a spreadsheet. This would be Column A.(image) This would be column B (text) and they're grouped together in a row. 
   
    So in our html Let's wrap all of this content in a new div that has a class of row
   ```html
   <div class="row">
      <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">

      <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>

      <p>Lorem ipsum dolor...

      <p>Duis aute irure dolor...
   </div>      
   ```
   - Let's go ahead and create a new CSS file for our row class. So in our assets styles and then modules. Let's create a new file name this new file  _row.css 
   `modules/_row.css`
   
   - Let's create a `new class`

   ```css
   .row {

   }
   ```
   - And before we forget let's go into our main styles.css file and import this new file _row. 
   ```css
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   @import "base/_mixins";
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   @import "modules/_page-section";
   @import "modules/_headline";
   @import "modules/_row";
   ```

   - Let's wrap each section of content that we want to be a call them in their own div.
   ```html
   <div class="row">
      <div>
         <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
      </div>

      <div>
         <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
         <p>Lorem ipsum dolor...
         <p>Duis aute irure dolor..
      </div>
   </div>      
   ```

(26.3)   
- now the question becomes `what should the class name` be for these two new divs that we just created. 
   
   - We know that they belong to the row block. So their class names should begin with` row__` But what do we actually want to name each of these column elements. 

   - think of our row in terms of a 12 column grid. 

   - it just so happens that it looks like this image column is taking up 4 of the 12 column grid bars. 

   - And it looks like this column is taking up 8 of our 12 column grid bars 
   
   - so we could call this layout a 4 8 split. 

   - why don't we just give this element a class of `row__4` 
   
   - and and give this column a class of `row__8`.

   ```html
   <div class="row">
      <div class="row__4">
         <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
      </div>

      <div class="row__8">
         <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
         <p>Lorem ipsum dolor...
         <p>Duis aute irure dolor..
      </div>
   </div>      
   ```

(26.4)
- jump over to our row.css file and write a bit of css to make the column lay out come to life. 
- `So let's begin with the __4 class`. 
   
   - Let's tell it to float to the left 

   ```css
   .row {
      float: left;
      
   }
   ```
   
   - let's give it a width 

   - if we think of our rows available with as 100% and then divide that up amongst our 12 column grid. 

   - So for our __4 class ...
 
   - gives us 33.33% which is what we expect.

   ```css
   .row {
   &__4 {
      float: left;
      width: 33.33%;
    }

   }
   ```

(26.5)
- All right let's create the rule for our __8 class
   ```css
   .row {

   &__4 {
      float: left;
      width: 33.33%;
    }

   &__8 {
      float: left;
      width: 66.66%;
    }
   }
   ```


(26.6)
- The blue background feature section has moved up and is now sitting behind our content. This is because `we forgot to clear our floats` 
- Now there are several different ways to fix this. Let's look at `the sloppy not ideal way` first. 
   
   - So in our html right before the main road div ends we can create another element and give it a class of clear-me. 
   
   - The key here is that this element comes after all of it's floated siblings. 

   ```html
   <div class="row">
      <div class="row__4">
         <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
      </div>

      <div class="row__8">
         <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
         <p>Lorem ipsum dolor...
         <p>Duis aute irure dolor..
      </div>
      <div class="clear-me"></div>
   </div>      
   ```

   - let's save this file and jump into _row.css Let's create a rule that targets that element and let's say Clear left or clear both. 
   ```css
   .row {
      
   &__4 {
      float: left;
      width: 33.33%;
    }

   &__8 {
      float: left;
      width: 66.66%;
    }
   }
   ```

   - Now the reason I called that the sloppy or not ideal way of clearing our floats is because we added an empty element to our markup and whenever possible you should avoid empty elements that only exist for styling purposes. 


(26.7)
- let me show you a more ideal way of clearing our floats. 

   - So up at the top of this row rule let's create a new selector.

   - to create a bit of pseudo or fake content with CSS. 

   - So let's say content double quotes with nothing in between the quotes, and then let's tell this empty fake space to be set to clear both for a bit of added extra browser support We can also just a display table. 
   
   ```css
   &::after {
      content: "";
      clear: both;
      display: table;
   }
   ```

   - So this css selector will add this blank space after all of the content in the main road div 

   - this code that we used to clear the floats should probably be moved into a mixin so we can easily reuse this code whenever we want. 

   - let's go ahead and cut this code into our clipboard 

   - Let's open up base/mixins.css
   
   - Let's go to the bottom and say `@define-mixin` and let's call this mix in `clearfix` and then just go ahead and paste your clipboard.
   ```css
   @define-mixin clearfix {
      &::after {
         content: "";
         clear: both;
         display: table;
      }
   }
   ```
   - and back and row.css Now we can just say `@mixin clearfix;`
      ```css
      .row {
         @mixin clearfix;
         
         &__4 {
            float: left;
            width: 33.33%;
         }

         &__8 {
            float: left;
            width: 66.66%;
         }
      }
      ``` 

(26.8)
- now I'm noticing that the two columns but up directly against each other. 
- And if we look at the design file we see that `there is indeed supposed to be a margin`. 
    
   - Now there might be situations where we do want our columns to touch like this. 
    
   - So I think the best way to handle this is to go into html and go in on our main row div and give it a modifier class of row--gutters.

   ```html
   <div class="row row--gutters">
   ``` 
    
   - So by default we will not have gutters or margins if we want them we just add this modifier class 
    
   - next, Let's write a bit of css so that if this modifier class is used a bit of horizontal padding will be added to all of the columns and that will create the margin or gutter effect that we are looking for. 
    
   - So in our _row.css let's create a rule for that gutters modifier.

   ```css
   &--gutter {

   }
   ```
    
   - But we don't want to select or style the actual parent row div. We want to select all of its direct children or in other words all of the columns 
    
   - so we can use the greater than symbol to select all direct children that use a tag of div and then we can just say padding-right 65 pixels.

   ```css
   &--gutter > div {
      padding-right: 65px;
   }
   ```

(26.9)
- we see that our column layout broke. So our second column is now getting pushed to a second line. And `this is because the padding values that we just added upset the arithmetic that we set up earlier`. 
   
   - We cannot let the combined with of our columns be more than 100% otherwise they won't be able to both fit on a single line. 
   
   - However we can change the way that web browsers calculate the true with of elements. If we say box-sizing: border-box;

   ```css
   &--gutter > div {
      padding-right: 65px;
      box-sizing: border-box;
   }
   ```

(26.10)
- Now in recent years something that a lot of web developers have been doing is applying this `globally to all elements on the page`. 

   - let's delete this line. 

   - let's open up base/global.css create a new rule where the selector is the asterisk meaning we want to select every single element on the page 

   ```css
   body {
      font-family: 'Roboto', sans-serif;
      color: #333;
   }

   img {
      max-width: 100%;
      height: auto;
   }

   * {
      box-sizing: border-box;
   }
   ```
   - We set that property once in the global file and we can forget about it 


(26.11)
- we created these margins or gutters by applying padding right to each column. We did this so even if we have a row that has three or four or five columns there will automatically be a gutter between each of them. 
- So the question becomes `how do we remove this final gutter on the end`. 

   - We can counteract this padding right by selecting the main parent row with a modifier class of gutters and giving it a negative right margin that matches the padding value.

   ```css
   .row {

   @mixin clearfix;

   &--gutters {
    margin-right: -65px;
   }

   &--gutters > div {
    padding-right: 65px;
   }

   @mixin atMedium {
    &__medium-4 {
      float: left;
      width: 33.33%;
    }

    &__medium-8 {
      float: left;
      width: 66.66%;
    }
  }
  }
   ```
   - So now within `_wrapper.css` we can simply say `overflow: hidden`. 
   ```css
   .wrapper {
      overflow: hidden;
      padding-left: 18px;
      padding-right: 18px;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
   ```
 
   - and we now have a very clean column layout. 

(26.12)
- let's see how things look on a mobile or small screen. 
- There just isn't enough horizontal space to have multiple columns sit side by side. 
- Let's go ahead and adjust this so that small screens use a single column layout. 
- But we do want to maintain the multiple call lay up on larger screens. 

   - over in our html Let's adjust the class names on our column elements. 
   
   - Why don't we adjust this name to say `row__medium-4` And this way we will adjust our css to use media queries. 

   - let's do the same thing to this element so `row__medium-8`

   ```html
   <div class="row">
      <div class="row__medium-4">
         <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
      </div>

      <div class="row__medium-8">
         <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
         <p>Lorem ipsum dolor...
         <p>Duis aute irure dolor..
      </div>
      <div class="clear-me"></div>
   </div>      
   ```
   
   - and then over in our row.css file. Let's simply change the name for these two rules and then wrap them in a media query.

   ```css
      @mixin atMedium {
      &__medium-4 {
         float: left;
         width: 33.33%;
      }

      &__medium-8 {
         float: left;
         width: 66.66%;
      }
   }
   }

   ```
   - So on the small screen the image takes up the full available window and so does the section below it. And we still maintain that two column  layout on larger screens 


27. *Attention to Detail (Part 1)*

(27.1)
* let's work on perfecting this content.(`Here is how we got started... section`)    
- Let's make our first task to add a bit of vertical spacing or margin between these two images. 
   
   - Now we know that this first image lives within its own wrapper div. 
   
   - So why don't we just add a bit of bottom margin to that element. 

   - Let's add the bottom margin to this wrapper div. So let's just add another modifier class to the wrapper div. Let's say a `wrapper--b-margin`.

   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
          <img src="assets/images/first-trip.jpg" alt="Couple walking down a street.">
       </div>
   ```   
 
   - then within our css modules folder Let's open up _wrapper.css Let's create a new rule for that modifier Class 
   
   - but we want that in terms of REM so we can take 62 pixels and divide it by 16. That gives us three point eight seven five. 
   
   ```css
   &--b-margin {
    margin-bottom: 3.875rem;
   ``` 

(27.2)
* So on a small screen that looks like way too much vertical spacing. 
   
   - we wrap this amount in a media query mixin a mixin atSmall use that amount that we specified. 
   
   - But our baseline margin bottom should be much smaller. 
   
   - let's just try 1 rem. 

   ```css
   &--b-margin {
    margin-bottom: 1rem;

    @mixin atSmall {
      margin-bottom: 3.875rem;
    }
  }
   ``` 

(27.3)
* The next thing that I want to work on is I want to `fine tune the exact with values of these two columns`. 
   
   - our image in the browser looks a bit smaller or squished compared to the design file. 
   
   - This is because in the design file this image is technically a little bit wider than Exactly 33 percent of the available width. 
   
   - So let's create a few `modifier classes` to adjust the width distribution of these columns a bit. 
   
   - We want `this column to be a little bit larger` and we want `this column to be a little bit smaller`.

   ```html
   <div class="row__medium-4 row__medium-4--larger">
             <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
          </div>
          <div class="row__medium-8 row__medium-8--smaller">
   ```

   - Let's open up _row.css  

   - let's just increase the width from 33.33% to `37%`. 

   - and instead of 66.66% Let's go with `63%`. 

   ```css
   @mixin atMedium {
    &__medium-4 {
      float: left;
      width: 33.33%;
    }

    &__medium-4--larger {
      width: 37%;
    }

    &__medium-8 {
      float: left;
      width: 66.66%;
    }

    &__medium-8--smaller {
      width: 63%;
    }
   }
   ```

(27.4)
* Now the reason we used a modifier classes instead of just adjusting 33 percent and 66 percent 
   
   - is because later on in our design file down here in the testimonial section These truly are exactly 33 percent each. So we do want to keep that rule in place. 
   
   - And I wanted to show you that it's OK to override your column grid when necessary. 
   
   - I'm not a fan of completely locking yourself into a completely rigid inflexible grid if you need to adjust things a bit here and there to match the design I say go for it. 
   
   - In fact in my opinion `that's one of the things that separates a good developer from a great developer`. 
   
   - We don't want our website to look like a program or created it. We don't want things to feel overly rigid and locked in place. 
   
   - We want it to feel like a designer created it and sometimes that means going the extra mile to customize things. 

(27.5)
* the next thing that I want to address is the `max-width` value that we gave to our wrapper element. 

   - in our `_wrapper.css` file, several lessons ago 
   
   - we gave this element a `max-width of 1200 pixels`. 
   
   - Now since then we applied box sizing border box globally to all elements on the page. 
   
   - And when we did that we actually `decreased the max width of this wrapper element by 36 pixels.`
   
    Right so that's the padding left plus the padding right. 
   
   - So to keep up our attention to detail what's account for that change and what's `add 36 pixels to this max width value`.

   ```css
   .wrapper {
   padding-left: 18px;
   padding-right: 18px;
   max-width: 1236px;
   margin-left: auto;
   margin-right: auto;
   ```

   - that was a subtle change but it gave our design a little bit extra room to breathe. 

(27.6)
* our next task should be to make this image responsive. 

   - if we look at a small screen or mobile device I think it would look better if this image wasn't as tall. 
   
   - I think it would look better if it was landscape instead of portrait. 
   
   - So over in our html Let's find that image. 
   
   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe">
   </div>
   ```
   - And let's actually just `delete this image line` and `start fresh with a picture element` 

   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>

      </picture>
   </div>
   ```
   - within the picture element. Let's begin with `the smallest image first`.

   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```
   - I think that looks a lot better on smartphones. However on larger screens it definitely looks odd.
   
   - To fix that within our picture element we can just add a new `source element` and create a `media query` that says if a screen is larger than 800 pixels use a different image source.

   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source media="(min-width: 800px)">
         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```   
   -So then we can just say `srcset="assets/images/our-star.jpg"` 
   
   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source srcset="assets/images/our-start.jpg" media="(min-width: 800px)">
         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```   
   - So now the image looks great on large screens and on tiny screens. But what about medium sized screens. 
   
   - on a medium sized screen like this I think it would look nice if the image was narrower and taller 
   
   - Let's go ahead and duplicate this source line that we just created.

   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source srcset="assets/images/our-start.jpg" media="(min-width: 800px)">

         <source srcset="assets/images/our-start.jpg" media="(min-width: 800px)">

         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```   
   
   - And within the top source element let's `change its media query to be 1020 pixels` and we will leave that source to continue pointing towards this image.

   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source srcset="assets/images/our-start.jpg" media="(min-width: 1020px)">

         <source srcset="assets/images/our-start.jpg" media="(min-width: 800px)">

         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```   
   - However on this second source element let's change that file to the `our-start-portrait.jpg` and we will leave this media query at 800 pixels. 
   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source srcset="assets/images/our-start.jpg" media="(min-width: 1020px)">

         <source srcset="assets/images/our-start-portrait.jpg" media="(min-width: 800px)">

         <img src="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
      </picture>
   </div>
   ```
   - So if we save this and check out the browser we see the new portrait image that is narrower and taller. And if we make our screen a bit larger here we see the traditional image and we still receive the landscape image on mobile screens. 

(27.7)
* The one final thing that I want to do is `add high DPI copies for each cropping`. 
   
   - So let's `start on this top source` and work our way down.
   ```html
   <source srcset="assets/images/our-start.jpg" media="(min-width: 1020px)">
   ```
   - We can just s`elect the name of the file` in the path to the file and `copy it` and then `add a comma` and `paste it in` And right before the `.jpg` just add `hi-dpi`
   ```html
   <source srcset="assets/images/our-start.jpg, assets/images/our-start-hi-dpi.jpg" media="(min-width: 1020px)">
   ``` 

   - I've created hi-dpi copies for all of our images in the image folder 

   - we need to tell the browser the size of each of these images so it knows which one to use.
   ```html
   <source srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">
   ``` 
   
   - So this regular image has a width of 404 pixels so we say `404w`. And the hi-dpi copy is double that `808w`. 
   
   - Now you might think that we are done with this source element but we're not. 

   - the image that we are currently dealing with is only full browser window with on small tiny devices. 

   - web browsers Unless we tell them otherwise assume that all responsive images need to take up the entire browser window width 

   - it's obviously going to reach for the largest copy of the image. 

   - We can tell the web browser what size the image will be rendered at. By doing this 
   
   - in our html on this source element we can simply say `sizes="404px"` 
   ```html
   <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">
   ``` 
 
   - Now  if we still see the hi-dpi copy but that's because Chrome has that copy cached 

   - Next let's add a hi-dpi copy for the next source of the image. 
 
   - So the standard copy is 382 pixels wide. So W in the hi-dpi copy is double the 764

   ```html
   <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">

   <source srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
   ``` 

   - We need to tell the browser that this image is not going to be displayed at the full width of the browser window. 
   
   - So we need to find out what is the widest that this source of the image will ever need to be displayed at. 
   
   - So let's resize our browser window to right before this break point occurs. 

   - It looks to me like this source of the image will never need to be wider than about 320 pixels. 
   
   - So over in our html on this source we can simply say sizes="320px".

   ```html
   <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">

   <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
   ``` 
 
   - And if I clear my cache we see the standard copy of the image which makes sense from my monitor's DPI.

   - Next let's move on to adding the hi-dpi copy for this crop.(`the third and last one`)
   
   - So the first thing we want to do is change this `from source to source set` so we can add on an additional image. 

   ```html
   <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">

   <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
   
   <img srcset="assets/images/our-start-landscape.jpg" alt="Our founder, Jane Doe">
   ``` 
      
   - So let's copy this, add a comma, paste and then right for the .jpg add -hi-dpi Let's tell the browser the sizes of both these images. So the standard copy is 800 pixels wide. The hi-dpi copy is double that at sixteen hundred. 
   
   ```html
   <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">

   <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
   
   <img srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
   ``` 
   - We don't need to worry about the sizes attribute on this crop of the image because this crop is only used when the layout collapses to a single column view which means in this instance it's OK that the browser assumes that the image needs to take up the full width of the browser. 

(27.8)
* Let's move on and make this image responsive. So back in our html we look up just a few lines. We see that image here
   
   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img src="assets/images/first-trip.jpg" alt="Couple walking down a street.">
   </div>
   ```
   
   - And if we look in our projects image folder the name of this image is `first-trip` so it looks like we have a standard version a hi dpi version and a low res version for smaller screens 
   
   - and all three of these are cropped exactly the same. They are just different resolutions. 
   
   - So in our html `we do not need the picture element because we only need to switch resolutions`. 
   
   - So let's change this `from a source to a source set`

   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img srcset="assets/images/first-trip.jpg" alt="Couple walking down a street.">
   </div>
   ``` 
   
   - and let's copy and paste the path to the image a few times. Comma paste comma paste.

   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img srcset="assets/images/first-trip.jpg, assets/images/first-trip.jpg, assets/images/first-trip.jpg" alt="Couple walking down a street.">
   </div>
   ```
   - Let's change this first file to the `low-res` copy. It has a width of `565w`. 

   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg, assets/images/first-trip.jpg" alt="Couple walking down a street.">
   </div>
   ```
   -We can leave this next file name untouched. But we can specify that it's width is `976w` 
   
   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip.jpg" alt="Couple walking down a street.">
   </div>
   ```
   - and let's changed This third mention of the image to `first-trip-hi-dpi` And it has a width of `1952w`. 
   
   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
   </div>
   ```
   - (Let's go ahead and add the -i before the dot .jpg to all three image files so we can clearly see in the browser which one is being used). 
   
   - Let's save this. Check out the browser. 

   - we see that even though my monitor is not hi dpi I'm being served the hi dpi copy. 
   
   - We know how to address this within this image element. We can simply give it the `sizes` attribute and let the browser know that this image needs to be about `976 pixels` wide instead of full screen.(`sizes="976px`") 
   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img sizes="976px" srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
   </div>
   ```
   - And if I clear my cache we now see the standard version of the image. 
   
   - However if we look at things on a smartphone we see that the sizes attribute we just added forces even tiny smart phones to download the medium sized image instead of the low rez copy. 
   
   - This is because this code is telling the browser that all screen sizes need to display the image at this size and this is not what we want. 
   
   - So instead check this out. We can add a media query and we can say only for screens that are 970 pixels or larger. Does the image need to be 976 pixels comma otherwise for screens that are smaller than this. The image just needs to be 100 percent of the device with 100 VW which stands for viewport width.(`sizes="(min-width:970px) 976px, 100vw"`)

   ```html
   <div class="wrapper wrapper--medium wrapper--b-margin">
      <img sizes="(min-width: 970px) 976px, 100vw" srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
   </div>
   ```
   - This is our way of saying that this image only needs to be 360 pixels wide.


28. *Attention to Detail (Part 2)*    

(28.1)
* Let's `fine tune this typography` So the first thing that I would like to adjust is `removing this vertical gap at the top of this column`. 
      
   - If we look at our design file we see that `the top of this heading should be aligned with the top of this image`. 
   
   - Now back in the browser this vertical gap `is being created by the top margin on this headline`. 
   
   - So let's go ahead and `find this headline in our html`  so we can add a modifier class to it.

   ```html
   <div class="row__medium-8 row__medium-8--smaller">
      <h2 class="headline">Here&rsquo;s how we got started&hellip;</h2>
   ``` 
   - Let's go ahead and give it a modifier. Class of headline dash dash. No T for top margin `headline--no-t margin`

   ```html
   <div class="row__medium-8 row__medium-8--smaller">
      <h2 class="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>
   ``` 

   - within our modules CSS folder. Let's open up `_headline.css`. 
 
   - `create a new modifier rule ``--no-t-margin`. And then we can just say `margin-top: 0`.

   ```css
      &--no-t-margin {
      margin-top: 0;
   }
   ```
(28.2)    
* Next let's focus on fine tuning the `typographic for these paragraphs`. 

   - let's go ahead and find these paragraphs in our html. 
   ```html
      <h2 class="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>

      <p>Lorem ipsum dolor.. <a href="#">quis..</a> ullamco..</p>
      
      <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate.. aliqua.</p>
      
      <p>Duis aute ..<strong>dolore eu fugiat.</strong></p>
   ```

   - `we need a way to target these elements with our CSS.` 
   
   - `the BEM way` of doing things would be to create a new class and to add it to each of these three paragraphs. 

   - when it comes to something as generic and repeatable as a paragraph. `I don't want to have to apply a class to each and every one of them` 
   
   - because it's really common on a Web site to have a block of text that might `have five 10 20 or even 30 paragraphs.` 

(28.3)   
* So in this specific instance let's `forget about doing things the BEM way` and let's do this 
   
   - let's `wrap the heading and these three paragraphs in a new div`with a class of `generic-content-container` 

   ```html
   <div class="generic-content-container">
      <h2 class="headline headline--no-t-margin">Here&rsquo;s how we got started&hellip;</h2>
      
      <p>Lorem ipsum dolor.. <a href="#">quis..</a> ullamco..</p>
      
      <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate.. aliqua.</p>
      
      <p>Duis aute ..<strong>dolore eu fugiat.</strong></p>
   </div>
   ```
   - by setting up a new div for this class `we are keeping our column flexible and future proof`. 

   - `create a new CSS file` for this new class name. So `within our modules CSS folder`. Let's create a new file. Let's name it 
   `_generic-content-container.css`  
   
   - let's created rule generic content container.

   ```css
   .generic-content-container {}
   ``` 

   - let's go into our main styles.CSS file and `import this new file`
   ```css
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   @import "base/_mixins";
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   @import "modules/_page-section";
   @import "modules/_headline";
   @import "modules/_row";
   @import "modules/_generic-content-container";
   ```

   - let's jump back to that new CSS file and let's `create a rule that selects any paragraph elements that are nested within this element`. (`p`)
   
   ```css
   .generic-content-container {
  
      p {

      }
   
   }
   ```

   - if we look at our design file this looks like a larger than normal line height meaning there's more space in between each line. So let's say line-high: 1.65

    ```css
   .generic-content-container {
  
      p {
        line-height: 1.65; 
      }
   
   }
   ```
   
   - line height is one of the few properties that `doesn't require a unit of measurement`. So we don't need to say pixels or REM. 

(28.4)
* Let's also give these paragraphs a slightly `larger font size`. 
   
   - So currently `they're using the browser default which is 16 pixels`. 
   
   - Why don't we go ahead and bump them up to 18 pixels. 
   
   - But we want to specify that in terms of REM so we can just say 18 divided by 16 = 1.125 
   
   ```css
   .generic-content-container {
  
      p {
        line-height: 1.65;
        font-size: 1.125rem; 
      }
   
   }
   ```

(28.5)
* next I think we should `increase the margin between the paragraphs`. 
   
   - So let's say margin let's bump up the vertical margin to 1.8 RAM and have the horizontal margins stay at zero. 
   
   ```css
   .generic-content-container {
  
      p {
        line-height: 1.65;
        font-size: 1.125rem;
        margin: 1.8rem 0; 
      }
   
   }
   ```

   - I think that extra bit of space looks good. 

(28.6)
* the next thing that I see is `that links within a paragraph should be bold`. 
   
   - So in our CSS we could nest a rule within this  P rule and select any link elements like this. 
   
   - But personally `I don't like to nest more than one layer deep in my CSS`
   
   - So instead I will do this I'll create a new rule and create a descendant selector like this.

   ```css
   .generic-content-container {
  
      p {
        line-height: 1.65;
        font-size: 1.125rem;
        margin: 1.8rem 0; 
      }

      p a {

      }
   
   }
   ``` 
   
   So any links (`a`) that live within a paragraph (`p`) within this class should use a bold font weight. So let's go with the font weight of 700. 
   
   ```css
   .generic-content-container {
  
      p {
        line-height: 1.65;
        font-size: 1.125rem;
        margin: 1.8rem 0; 
      }

      p a {
         font-weight: 700;
      }
   
   }
   ``` 


   - By the way a font weight of `400 is considered normal` or standard. So if I want something to be `extra bold we can go with 700`. 
    
(28.7)
* And we also saw in the design file that `the link should be orange.` 
   
   - Now instead of defining that orange color within this rule I think we are safe to actually `define it globally as a fallback for all links on the page`. 
   
   - So within our CSS base folder Let's go ahead and open up a `_global.css` 
   
   - Let's `create a new rule that targets all links` on the page and gives them a color of our `$mainOrange` variable. 
   
   ```css
   body {
      font-family: 'Roboto', sans-serif;
      color: #333;
   }

   img {
   max-width: 100%;
   height: auto;
   }

   * {
   box-sizing: border-box;
   }

   a {
   color: $mainOrange;
   }
   ```

(28.8)   
* All right so I'm not seeing that change take place. I'm going to `check the command line to see if something went wrong`. 
   
   - And it looks like we have an error message that `$mainOrange is undefined`. 
   
   - This is because in our main styles does CSS file we are importing the global file before we've imported the variables file. 
   
   - And this is where the main orange value lives. 
   
   - So to fix the error. Let's just go ahead and cut the `global line` and `move it after variables and mixin`.

   ```css
   @import "normalize.css";
   @import "base/_variables";
   @import "base/_mixins";
   @import "base/_global"; ///
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   @import "modules/_page-section";
   @import "modules/_headline";
   @import "modules/_row";
   @import "modules/_generic-content-container";
   ```

(28.9)
* Now you might be curious as to why I chose to set up all links on the page `globally to be orange`. But when it came to making this link `bold we defined that only within our generic content container` rule. 
   
   - Well my thought process behind that is that `I know for a fact we are never ever ever going to want to use the web browser default color of blue` for any link on the page. 
   
   - So setting a baseline link color of orange doesn't feel like it's hurting us in any way because that default shade of blue was never going to be used anyways. 
   
   - `But when it comes to font weight there are plenty of links on the page that shouldn't be bold`. 
   
   - So we want to `leave that browser default of links being not bold intact`. This will save us extra work later on we won't have to tell the links in the header to not be bold. They just won't be bold because that's the browser default. 

(28.10)   
* the point that I'm trying to drive home here is that I want you to `be very selective over what makes the cut into your global CSS file`. 
   
   - We don't want to make the mistake of polluting our global CSS scope 
   
   - which is really one of the big ideas behind the big methodology. 
   
   - So the reason that the Ben way would have had us out of class to each individual one of these paragraphs is because styling elements directly like that avoids descendant selectors or generic type selectors 
   
   - which really just means we are trying to avoid the cascade from surprising us 
   
   - or drowning us in 12 layers of inheritance and overrides and specificity wars.

(28.11)
* So `we did go against the philosophy of bit by setting up this generic content container and using descendant type selectors`
   
   - but in our defense we did keep the style scoped to this class 
   
   - and we will only apply this class to elements if we are OK with all of their descendants being styled a specific way. 
   
(28.12)
* My personal `rule of thumb` is that if a piece of content looks like it might have been copied and pasted from a word doc 
   
   - or if down the road our Web site is powered by a content management system or a blog platform. 
   
   - We can't expect every element of the content to be output with a class on it. 
   
   - So basically for unique parts of our page where we as the developer are writing the html. 
   
   - Sure. Let's go ahead and add classes to each element The Bem way 
   
   - but four sections where the content is a bit more generic and streamlined and might come from automated sources. 
   
   - I think it's OK to use a setup like we have here. 

(28.13)
* let's see what things look like on a small screen. the first thing that I see is that we should probably `add a bit of vertical margin` for small screens `between this image and this heading.` 

   - `on larger screens we definitely do not need to add bottom margin` to this image but because our two call them lay up stacks to single call them on smaller screens. `We do want to add a bit of bottom margin here`. 

   - Let's find that first column where that image lives. 
   
   ```html
   <div class="row__medium-4 row__medium-4--larger">
      <picture>
         <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)"> 
         <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
         <img srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
      </picture>
   </div>
          
   ```
   - just `add an extra class to this first column` let's call it `row__b (for bottom) -margin-until-medium`. 
   
   ```html
   <div class="row__medium-4 row__medium-4--larger row__b-margin-until-medium">
   ```

   - then within our modules CSS folder. Let's open up `_row.css` right `above` this line that uses the media equerry mixin. 
   
   - Let's create a new rule that targets our new class name.                     `&__b-margin-until-medium {}`- Let's give it bottom margin. So margin bottom go with `1rem` until medium.  

   ```css
      .row {
      @mixin clearfix;

      &--gutters {
         margin-right: -65px;
      }

      &--gutters > div {
         padding-right: 65px;
      }

      &__b-margin-until-medium {  //////
         margin-bottom: 1rem;     /////
      }
   
      
      @mixin atMedium {
         &__medium-4 {
         float: left;
         width: 33.33%;
         }
   
         &__medium-4--larger {
         width: 37%;
         }
   
         &__medium-8 {
         float: left;
         width: 66.66%;
         }
   
         &__medium-8--smaller {
         width: 63%;
         }
      }
   }

   ```

   - So now `within this media inquiry` `Mixin` that is targeting `medium sized` screens we can just say this class name that we just created. margin bottom should be `reset to zero.`

   ```css
      .row {
      @mixin clearfix;

      &--gutters {
         margin-right: -65px;
      }

      &--gutters > div {
         padding-right: 65px;
      }

      &__b-margin-until-medium {  //////
         margin-bottom: 1rem;     /////
      }
   
      
      @mixin atMedium {

         &__b-margin-until-medium {  //////
         margin-bottom: 0;     /////
         }

         &__medium-4 {
         float: left;
         width: 33.33%;
         }
   
         &__medium-4--larger {
         width: 37%;
         }
   
         &__medium-8 {
         float: left;
         width: 66.66%;
         }
   
         &__medium-8--smaller {
         width: 63%;
         }
      }
   }

   ```

   - So now `we have a bit of vertical spacing on small screens and we didn't create any unnecessary spacing on larger screens`. 

(28.14)
* `the font size for our generic content container paragraphs looks a little bit large`. 

   - in our generic content container file.take this `font-size` `cut it to our clipboard `

   ```css
   .generic-content-container {
  
      p {
        line-height: 1.65;
        font-size: 1.125rem; ///////
        margin: 1.8rem 0; 
      }

      p a {
         font-weight: 700;
      }
   
   }
   ``` 

   - and use a media or a mix in say `@mixin atSmall` once the screen is large enough to be considered small instead of tiny or microscopic. Go ahead and use that size.

   ```css
   .generic-content-container {
  
   p {
      line-height: 1.65;
      margin: 1.8rem 0;

      @mixin atSmall {
         font-size: 1.125rem;
      }
   }

  p a {
    font-weight: 700;
  }

   }
   ``` 
   
   - And our baseline style doesn't even need a font size at all `because it will just default to one REM`. 

   - so I think that concludes our fine tuning of this typography

### Section 9: Git Timeout  

29. *Git Branches*

(29.1)
* Our `goals for this lesson` are to
   
   -understand `what in the world a branch is`. 
   
   -We want to learn `how to create a new branch`. 
   
   -We want to learn `how to switch between or check out different branches`. 
   
   -And finally we want to learn `how to merge one branch into another`. 
   
     
(29.2)
* in order `to answer the question. What is a get branch`. I want you to jump into your command line and run a few commands with me 
   
   -now `currently in my command line I am running the Web pack Dev` task which means at the moment I'm not able to type in any new commands here. 

   -we just want to have two command lines. `This one will continue to run our NPM run Dev` task and `in the other command line we are free to type in commands`

(29.2)
* I want you to run the following command `git branch` go ahead and press enter 
   
   -`this command will list all of the branches in our repository`.

   -We can think of a branch as `a version of our project`. 
   
   -And typically we think of the master branch as `our primary or main or live or production version of our project`. 
   
   -And this means that usually `we don't want to commit work in progress code to the master branch`. 

(29.3)
* we want to do instead is to `create a new branch for each new feature or experiment that we want to work on`

(29.4)
* Now before we create a new branch `we want to make sure that we currently have a clean working directory`. 
   
   -That `just means we don't want to have any uncommitted changes`. 
   
   -So if we go ahead and run `git status` you can see that I personally have several files that haven't been committed yet.

   -Let's go ahead and `add any uncommitted files to our staging area` 
   
   -if we want `we can add them one by one`. So for example if I wanted to add this file to my staging area I can just type `git add and then the path to that file`. 

   -you can just type `git add -A` uppercase a and that `will add everything to the staging area in one fell swoop`.

   * let's say that `you want to remove a file from the staging area`. 
   
   -So just as an example if I wanted `to unstage the index.html` file I can just type `git reset app/index.html` 


(29.5)
* creating a new branch is as simple as typing `git branch` and then `the name of the new branch that you want to create`.

   -So let's name our new branch 
   `git branch count-to-ten`

   -So now if we run 
   `git branch` 
   to see a list of all of the branches in our repo we see `count-to-ten` and `* master`

   -`the star next to master indicates that it's the branch we are currently working with.`


(29.6)
* So our next step is `to switch over to the new count-to-ten branch`

   -or in get terminology we want to checkout the count to ten branch. `git checkout count-to-ten`

(29.7)
* So `now we are working with the new branch`.

   -Let's jump to our text editor and `OPEN UP index.html` 
      
   -let's `create an unordered list` and begin counting to 4. 
   
   -`save this` and check out the browser.

   -Let's go ahead and `commit this change.` 
   -So let's run `git status`.

   -Let's go ahead and add this file to our staging area.
   `git add -A` 
   
   -So get add everything get. Status. All right. 
   `git status`

   -So this staging area looks good to me. `I'm ready to commit` 
   `git commit -m 'Counted to 4'`.


(29.8)
* I can switch back to my master branch `git checkout master` 
   
   -And now that we are working with the master branch we see that `our count to ten list is gone` 

   -So let's imagine that we are working on the master branch for a few hours
   
(29.9)
* and switch back to that branch. So `git checkout Count-to-ten` 
   
   -we see that our list is back let's start counting (working) again.

   -we commit those changes
   `git add -A`
   `git commit -m 'counted to 7'` 
   
(29.10)
* the next morning and `we can continue to work on our count to 10 project` and this time we actually have time to finish it. 

   -So let's go ahead and commit those changes
   `git add -A`
   `git commit -m 'completed the count to 10'` 

(29.11)
* So now that our count to ten feature `is complete it's no longer a work in progress`. 
* We can `merge it into our master branch`. 

   -So to do that let's `switch back to our master branch`. 
   `git checkout master`.

   -So in the command line `while we have the master branch checked out`. Let's run 
   `git merge count-to-ten` 
   
   -So we still have the master branch checked out. But if we check the browser `there's the list`. 


(29.12)
* Now let's go ahead and `push our master branch up to github` so we can see a visualization of all the comments. 
   
   -So let's run 
   `git push origin master` 

   -Once we merged `git took the commit history of the count-to-ten branch and added it to the master branch history`. 


(29.13)
* if you know that you only made a few small changes and you don't want to have to deal with the staging area in detail `you can actually stage and commit your files in one move` 
   
   -so we can run 
   `git commit -am 'counted to 13` So this will commit all changes to our tracked files and then we can include a message like always counted to 13.


(29.14)
* I want to show you another way to merge branch. `We can actually have get hub perform the merge` for us.

   -So let's go ahead and `create another brand new branch as another example`.
   - `git branch count-to-15`

   -let's go ahead and `switch over to that new branch` or check out the new branch. 
   - `git checkout count-to-15`

   -And in this new branch let's `expand this list to count up to 15`

   -we `commit that change before` we head out
   - `git commit -am 'counted to 13`

   -before we go home for the day we can actually `push this individual branch up to github`
   - `git push origin count-to-15`

   -we don't see our latest commit here because we are currently looking at the master branch. 
   
   -So if we click this and `switch it to the new count-to-15 branch` that we just pushed there is our latest commit. 

   -Now let's jump back to our text editor and `complete this feature`. So 14 15 this new feature is complete. 
   
   -Let's go ahead and `commit our change`

   -it's ready to be `merged into the master branch`. 

   -`push the count-to-15 `branch up to github

   -if we jump back to github and visit the home page for this repo we see that `github added this row that reads your recently pushed branches:`.

   -and on the far right we see a `compare and pull request` button.

   -Let's go ahead and click that, so on this screen we are creating a `pull request`, a pull request is basically a request to merge one branch into another. 

   -this is your chance to `write a bit of a comment `

   -And you would usually `assign this pull request to someone else on your team`.

   -So let's just go ahead and `assign this to ourselves`

   -`click a signings` and then you can just click your own name

   -and then click `Create pull request`

   -here is the `review screen` for that poll request that we just created.

   -we have the authority to scroll down and `click merge pull request.`

   -We can go ahead and click this `confirm merge button`  

   -It's a good practice to keep your repo clean and `delete unnecessary branches` So let's go ahead and `click delete branch`. Perfect.

(29.15)
* So all we need to do is `pull in the latest copy of master from GitHub down to our machine`.

   -So `git pull origin master` and now our local copy of the master branch has the latest code.

(29.16)(git branch -d count-to-15)
* Let's `keep the local copy of our repo clean` by deleting unnecessary branches.

   -So if we run the `git branch` command to list all of the branches we see `count to 15` which was deleted on the Github servers but it wasn't deleted in our local copy of the repo. 

   So let's go ahead and `delete that locally`.
   - `git branch -d count-to-15`

   -Let's also `delete the count-to-10` branch
   - `git branch -d count-to-10`


(29.17)
* let me show you a trick where `we can create a new branch and switch to it` or check it out in one move. 
- `git checkout -b our-features`

   -So we created a new branch and we switched over to it.

   -So now we are ready to begin working on the our feature section. 



30. *Styling Our Features (Part 1)*

(30.1)   
* We will work on the `our features section.` 
   
 (30.2)   
* So the first thing that I want to work on is `the main title to this section`. 
   
   - Let's begin by `finding this element in our html`.

      ```html
      <h2>Our Features</h2>
      ``` 

   - And I actually want to `create a brand new block for this element`. 
      
   - So let's go ahead and give this a class of `section-title`. 
      
      ```html
      <h2 class="section-title">Our Features</h2>
      ``` 
      
   -now let's `create a new CSS module file` for this new class. 
       
   - Let's go ahead and create a new file. Let's name this new file modules/`_section-title.css` 
      
       
   - And let's create a new class `section-titled {}` save this file. 
      
   - And before we forget it let's open up our main styles.css file and `import this new file.`
   `@import "modules/_section-title";`
 

(30.3)      
* let's `jump back to our brand new _section-title.css` file. 
      All right. So `what CSS Should we write`. 
      
      
   - if we compare this to the design file the first thing that I notice is that `we need a much larger font size`. 
      
   - So if I `measure` from the top of these letters `down to where a letter has a dissenter` like the letter q or y would be. That looks like `about 60 pixels tall`. 
      
   - We want that in REM. So`60/16=3.75` 
      
      let's copy that to our clipboard. 
      
   - `font-Size` pasted in Ren. That looks better. 
      
   ```css
   .section-title {
      font-size: 3.75rem;
   }
   ```
      
(30.4)      
* I also noticed in the design file that `the entire title should not be bold`. Only the word features should be bold. 
      
   - So let's `lower the font weight a bit font weight 300` 
   
   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
   }

   ```
   - and then within our html let's `wrap the word features in a strong tag.` 

   ```html
   <h2 class="section-title">Our <strong>Features</strong></h2>
   ```
   - It looks to me like there's `not enough difference between not bold and bold.` So let's do this within our CSX file. 
   
   - Let's say that any strong tags nested within this class `should have a font weight of 500.` 

   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
   

      strong {
      font-weight: 500;
      }

   }
   ```

      
(30.5)      
* We also `want this title to be centered horizontally.` 
      
   - So let's say `text align center`. 
   
   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
      text-align: center;
      

      strong {
      font-weight: 500;
      }

   }
   ```
      
(30.6)      
* And we also want `these star icon to be positioned next to the title.` 
      
   - So within our html let's just `cut and paste the image that is right above the title into the H2 element right before the text` it's right here. 
      
      I'm just going to paste looks good. 

   ```html
   <h2 class="section-title"><img src="assets/images/icons/star.svg">Our <strong>Features</strong></h2>
   ```
           
   - Let's give this image element `a class` so we can give it a bit of `right margin` and `increase the space` between the icon and the text. 
      
    
   ```html
   <h2 class="section-title"><img    class="section-title__icon" src="assets/images/icons/star.svg">Our <strong>Features</strong></h2>
   ```
      
   - So then back in our CSS let's create a `new rule icon` and let's say margin right. Let's give it just a little bit. Let's go with `half of a ram`. See how that looks. 

   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
      text-align: center;


      strong {
         font-weight: 500;
      }


      &__icon {
         margin-right: .5rem;
      }

   }
   ```
      
   - So our title element is complete. 
      
(30.7)      
* If we look at the design file I think the next thing we should work on is `creating this two column layout.` 
      
   - So over in our html `underneath the heading level two element that we were just working on`
      
   - let's `create a new div` and let's `leverage the row class` that we created earlier in the course. 
      
   ```html
   <div class="row"></div>
   ```

   - `So let's go ahead and use it again here to create a two column layout. Once again` 
      
   - so within this new div that has a class of row. `We want to create two columns that each take up half of the available width. `
      
   - So if we think in terms of each 12 column grid `that means that each column should take up six of the 12 column grid bars`. 
      
   - So let's create a column that has a class of `row__medium-6` and let's go ahead and copy and paste that. `So there are two of them.` 

   ```html
   <div class="row">
         <div class="row__medium-6"></div>
         <div class="row__medium-6"></div>

   </div>
   ```
   - And then let's simply `move half of the content into one column`
      
   - and `the other half of the content into the other column`. 

   - And then within our CSS modules folder let's `open up the _raw.css` file. 
      
   - So currently this raw block supports a two column split of `the one third and two thirds`. 
      
   - Now we want to go ahead and allow it to support the `two columns that are equal width.` 
      
        
   - Let's create a new  rule `&__medium-6` and we will just `float` it to the left and give it a `width` of 50 percent so we see that that gives us a two column layout. 

   ```css
   &__medium-6 {
      float: left;
      width: 50%;
   }
   ```

      
(30.8)      
* However we need `a bit of margin` or gutter between the two columns. 
      
   - Now earlier in the course when we originally created the row block we created a modified class that we can place on the row element of row--gutters which does indeed create a margin between the two columns.
   ```html 
      <div class="row row--gutters">
      ```
      
   - But if we look at the design file I think that this our features section `calls for an extra wide gutter`. 
      
   - So why don't we just go ahead and `create a new modifier class of row--gutters-large` 
   ```css
      <div class="row row--gutters-large">
   ``` 

   - and then over in our CSS for the row block towards the top right after this original gutters modifier.
         
   - Let's just create a new one gutters dash large
   ```css
   &--gutters {
      margin-right: -65px;
    }

   &--gutters {
      
   }

   &--gutters > div {
      padding-right: 65px;
   } 
   ```
   - and if our regular gutters are sixty five pixels let's make the extra wide gutters or the large gutters `about 100 pixels.`
   So for those gutters large modifier margin right. `Negative 100 pixels`.  
   ```css
   &--gutters {
      margin-right: -65px;
    }

   &--gutters-large {
      margin-right: -100px
   }

   &--gutters > div {
      padding-right: 65px;
   } 
   ```
   - And also underneath this next rule let's create a new corresponding one for our gutters large modifier class so any direct children that are a div. So in other words all of the columns instead of padding write of 65 pixels. Let's give it `100 pixels`. 

   ```css
   &--gutters {
      margin-right: -65px;
    }

   &--gutters-large {
      margin-right: -100px
   }

   &--gutters > div {
      padding-right: 65px;
   }

   &--gutters-large > div {
      padding-right: 100px;
   } 
   ```

(30.9)      
* If we check out our design file I think the next thing we should work on is `creating a block for this style.` Right. So this layout where the icon sits to the left and the corresponding text sits to the right. 
      
   - So let's create a new block and apply it `only to this first feature item to begin with`. 
      
   - And once we have things looking good then we can apply that block `to the other three feature items.` 
      
   - So over in our HTML `here is the first feature item` consists of the icon the heading in the paragraph. 
      
   - So let's just go ahead and wrap that in a new div that has a class of `feature-item`. 

   ```HTML
      <div class="feature-item">
         <img src="assets/images/icons/rain.svg">
         <h3>We&rsquo;ll Watch the Weather</h3>
         <p>Download our app and we&rsquo;ll send you a notice if it&rsquo;s about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.</p>
      </div>
   ```
   - next let's `create a new CSS file` for our new feature item class. 
      
   - So `in our CSS modules folder` let's create a new file. Let's name the file `modules/_feature-item.css` 
      
   - Let's create a new class `.feature-item {}` save this file

   ```css
   .feature-item {
   
   }  
   ``` 
   - and then let's go `into our main styles that CSS file and import this new file.` 

   ```css
   @import "modules/_feature-item";
   ```
     
   - So back `in the _feature-item file.` Let's write a bit of CSS that will position this text to sit side by side with the icon. 
      
   _ the way that I'm going to do it is begin `by giving the image element a class` so we can target it with our CSS. 
        
   - Let's go ahead and give it a class of `feature-item__icon`

      ```css
      <img class="feature-item__icon" src="assets/images/icons/rain.svg">
       ```
      
   - now `in our CSS`. Let's try this. Let's give `the overall parent item` the feature item class. Let's give it a bit of `padding left.` 
      
   - `How much` should we give it. Well if we check out the design file if I measure from this left edge of the icon to where the content begins. Looks like about `ninety four pixels`. So let's say padding left ninety four pixels.
   ```css
   .feature-item {
      padding-left: 94px;

   }
   ```
   - All right. So that `pushes all of the content in`. 
      
   - Now we can just `position the icon.` `Absolutely` to sit in the top left corner. 
      
   - So let's select that `&__icon` `position: absolute` `left: 0` 

   ```css
   .feature-item {
      padding-left: 94px;

      &__icon {
         position: absolute;
         left: 0;
      }

   }  
   ```
      
   - And because we want the icon to be `positioned in relation to its parent` let's be sure to give the parent element `position relative`.

   ```css
   .feature-item {
      position: relative;
      padding-left: 94px;

      &__icon {
         position: absolute;
         left: 0;
      }

   }
   ``` 
   - The next thing I think we should work on is `the styling for this title or heading`. 
      
   - So `in our html` let's give `that element a class` so we can target it with CSS 
      
   - Let's give it a class of `feature-item__title`. 
      
   - Let's head over to our `CSS file` and `create a rule title` let's start with `font size`. 
      
   - So if we check the design file for measure from the top of this letter down to the bottom of the Y in the P looks like `about 30 pixels` to me in terms of ran 30 `divided by 16` gives us this let's copy that to our clipboard. Pasted in `rem. (1.875)`

      ```css
      .feature-item {
         position: relative;
         padding-left: 94px;

         &__icon {
            position: absolute;
            left: 0;
         }

         &__title {
            font-size: 1.875rem;
         }
      }
      ``` 
      
   - let's go ahead and also adjust the `font weight to 300` I think that looks good.

   ```css
      .feature-item {
         position: relative;
         padding-left: 94px;

         &__icon {
            position: absolute;
            left: 0;
         }

         &__title {
            font-size: 1.875rem;
            font-weight: 300;
         }
      }
      ```  
   - Next why don't we focus on the `paragraph text`. I think it should use a slightly `larger font siz`e and a significantly higher `line height`. 
      
   - Now if you think back to several lessons ago `we actually created a reusable class named generic-content-container` and that is how we created the styling for these paragraph elements 
      
   - `so we can apply that same font size in line height to the our features section` 
      
   - by heading over `to our html` and on the `main raw div` for the our feature section. Let's just give it a class of `generic-content-container` 
 
   - I'm noticing that `the font weight` for these paragraphs looks a bit high. So why don't we go ahead and open the CSS file for the generic-content-container block and within the rule that selects paragraphs. Why don't we just say font weight. Three hundred. 

   ```css
   .generic-content-container {

      p {
      font-weight: 300; ///
      line-height: 1.65;
      margin: 1.8rem 0;
         
      @mixin atSmall {
         font-size: 1.125rem;
      }
      }
   
      p a {
      font-weight: 700;
      }
   
   }
   ```
     
   - Next let's `reduce the space between the title and the paragraph` 
      
   - so to do that. Let's `take two steps`. `First` let's adjust our `generic-content-container` and tell `paragraphs to not have any top margin`. 
      
   - So within this margin line let's just add a couple of zeros. This is CSS shorthand and it works in a clockwise fashion. 

   ```css
   .generic-content-container {

      p {
      font-weight: 300; 
      line-height: 1.65;
      margin: 0 0 1.8rem 0;  ////
         
      @mixin atSmall {
         font-size: 1.125rem;
      }
      }
   
      p a {
      font-weight: 700;
      }
   
   }
   ```
   - So with that change in place `we are now free to reduce the bottom margin of this title`. 
      
   - So within our `feature-item.CSS` file within these selector for the `&__title` element let's say `margin-bottom: .8rem` perfect that spacing matches the design.


(30.10)      
* So I think the styling for this block is good to go. Let's go ahead and `apply that same html pattern to the other three features.` 
      
   - So in our html file `let's wrap this image heading in paragraph in a div it has a class of feature-item.` Here's the closing div tag. 
      
   - Let's scroll down a bit. Let's do the same thing for these three elements. 
      
   - If we scroll back up to our first feature item we will `remember that we added a class to the image element.` 
   `<img class="feature-item__icon"`
      
   - So let's just go ahead and copy this and then `paste it onto these other three images`. 
      
   - we also want to `do the same thing for the heading Level 3 element.` 
      `<h3 class="feature-item__title">`

   - So let's save that. And check out the browser and `everything starts to fall into place`. 
      

(30.11)      
* Now if we go ahead and compare this with the design file the biggest thing that I notice is that `we need to add a bit of vertical spacing between the items` 

   - let's jump over to our `feature-item.css` file and within the main rule let's just `add a bit of padding bottom`. 
      
   - So let's say `padding-bottom: 3.75rem` that looks like `a bit too much` vertical spacing. `Let's reduce that to 2.5rem.` I think that matches the design nicely. 
   ```css
   .feature-item {
      position: relative;
      padding-left: 94px;
      padding-bottom: 2.5rem;
   ```
   - And at this point we've actually completed the styling for this section or at least for larger screens. 
      
(30.12)      
* Why don't we see how things look on a smaller screen `I see several things that I would like to adjust for mobile.` 

    -  The first would be that I think `this title should use a smaller font size.` 
      
   - So let's jump over to the CSS file for our `section-title` block 
      
   - why don't we copy and paste this current font size `into a media query mixin` 

   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
      text-align: center;
   ```
      
   - some `@mixin atSmall {}`paste that in 

   ```css
   .section-title {
      font-size: 3.75rem;
      font-weight: 300;
      text-align: center;

      @mixin atSmall {
         font-size: 3.75rem;
      }

   ```
   - and let's `lower the baseline font size to 2.55rem.` That looks better.

   ```css
   .section-title {
      font-size: 2.55rem;
      font-weight: 300;
      text-align: center;

      @mixin atSmall {
         font-size: 3.75rem;
      }

   ```
   - Next let's position things `so that this star sits on its own line.` 
   - So back in our CSS within the selector for the `&__icon` element 
      
   - let's tell our baseline styles to `make that element a block level element` which will drop the text after it onto a new line. 

      ```css
      &__icon {
         margin-right: .5rem;
         display: block;

      }
      ```
   - And now that it's a block level element `let's make sure that it stays horizontally centered` by saying `margin-left: auto;` `margin right: auto;`.

      ```css
      &__icon {
         margin-right: .5rem;
         display: block;
         margin-left: auto;
         margin-right: auto;

      }
      ``` 
      
   - Now obviously these will conflict with this previous property that we had but `we only want this right margin to apply if screens are certain size or larger.` 
      
   - So let's cut this line and begin a media query MixIn. So `@mixin atSmall {}` pace that right margin back in.

   ```css
   &__icon {
      display: block;
      margin-left: auto;
      margin-right: auto;

      @mixin atSmall {
         margin-right: .5rem;
      }

   }
   ``` 
      
   - Let's also `offset that left margin that we set for small screen`. So let's say `margin-left: 0;` 

   ```css
   &__icon {
      display: block;
      margin-left: auto;
      margin-right: auto;

      @mixin atSmall {
         margin-right: .5rem;
         margin-left: 0;
      }

   }
   ``` 
      
   - Let's also `tell the icon to be an inline block level element` so that on larger screens it won't drop the text down to a new line. So let's save this.

   ```css
   @mixin atSmall {
         margin-right: .5rem;
         margin-left: 0;
         display: inline-block;
      }
   ``` 

   - I think it could benefit with `a bit of margin vertically in between the icon and the text`. 
      
   - So why don't we say within our baseline Stiles (&__icon) `margin-bottom:` go is just a little over half of a ramp so `.6rem` 
      
   - And then we want to undo that for larger screen. So `margin-bottom: 0;` `within the mixin`. 

      ```css
      &__icon {
         display: block;
         margin-left: auto;
         margin-right: auto;
         margin-bottom: .6rem;

         @mixin atSmall {
            margin-right: .5rem;
            margin-left: 0;
            margin-bottom:0;
            display: inline-block;
         }

      }
      ```
      
   - Let's save that think that looks nice for small screens 

31. **Styling Our Features (Part 2)**

(31.1)      
* So the next adjustment that I think we should make `for small screens` is to `let this content use the full available width` and to stack `its corresponding icon above it`. 
      
   - So to make that change let's jump over to the `CSS file for our feature-item` block 
   
   - and we want to adjust things `so that there's padding left Value is only applied to screens that are a certain size or larger`. 
   ```css
      .feature-item {
         position: relative;
         padding-left: 94px; ////
         padding-bottom: 2.5rem;
   ```
   - Let's go ahead and cut this line and then let's create a media query mixin `@mixin atSmall {}` paste that value back in. 

   ```css
   .feature-item {
      position: relative;
      padding-bottom: 2.5rem;

      @mixin atSmall {
         padding-left: 94px;
      }
   ```
   - Now we just need to `tell small screens to stop positioning the icon. Absolutely`. 
      
   - So `within the &__icon rule`

   ```css
   &__icon {
      position: absolute;
      left: 0;
   }
   ``` 
   - let's `cut both of these lines position: and left:` and let's create a mixin atSmall paste those lines back in.

   ```css
   &__icon {
      @mixin atSmall {
         position: absolute;
         left: 0;
      }      
   }
   ``` 
   - And I think this would look better if `the icon was centered horizontally for small screens`. 
      
   - So within the baseline styles for this icon rule let's just say `display: block` `margin: 0 auto;` perfect. 

   ```css
   &__icon {
      display: block;
      margin: 0 auto;

      @mixin atSmall {
         position: absolute;
         left: 0;
      }      
   }
   ``` 
   - Next I think we should `reduce the font size of this element` just a little bit 
   
   - and also `reduce its top margin for small screens.` So there is a bit less of a vertical gap between the icon and the text. 
      
   - So `within our css` Here is the rule for that element. 

   ```css
   &__title {
      font-size: 1.875rem;
      font-weight: 300;
      margin-bottom: .8rem;
   }
   ```
   - Let's go ahead and `cut this font size and place it within a @mixin atSmall {}.`
   
   - and Let's set `the baseline font size to just 1.6 rem` that looks better 

   ```css
   &__title {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: .8rem;

      @mixin atSmall {
         font-size: 1.875rem;
      }
   }
   ``` 
      
   - and let's `reduce the top margin` just a tiny bit. So we can say `margin-top: .7em` 
      
   - and `within our mixin we can reset that back to 1 em.` I think that looks nice . 

   ```css
   &__title {
      font-size: 1.6rem;
      font-weight: 300;
      margin-top: .7em;
      margin-bottom: .8rem;

      @mixin atSmall {
         margin-top: 1em;
         font-size: 1.875rem;
      }
   }
   ``` 
   - next Why don't we go ahead and `set these titles to be centered horizontally for small` screens but `keep them left aligned on larger screens`. 
      
   - So within our title rule we can simply say `text align center` and then within our mix in media query we can just say `text align Left` looks good. 

      ```css
      &__title {
         font-size: 1.6rem;
         font-weight: 300;
         margin-top: .7em;
         margin-bottom: .8rem;
         text-align: center;

         @mixin atSmall {
            text-align: left;
            margin-top: 1em;
            font-size: 1.875rem;
         }
      }
   ``` 
      
(31.2)      
* At this point in the lesson I'd like to change gears and `talk about merging the our features git branch back into our master branch`. 
      
   - So we've completed the our feature section at this point. I'm going to jump to my command line and commit my changes to my get repo. 
      
   - Let's `press control-C` to tell the npm dev task it can `stop running.` 
      
   - Let's run a `git status` to see what has changed. 
      
   - All of these changes look good to me. So I want to add all changes to the staging area so `git add -A` 
      
   - and then I want to go ahead and commit the staging area.Let's make our message `git commit -m 'completed the our features section'`. 
      
(31.3)      
* All right so now that we've committed those changes to the our features branch the next thing we want to do is `merge that branch back in the master.` 

   - So let's go ahead and `use the command line to merge that branch into a master`. 
      
   - First thing we want to do is to check out the master branch. So `git checkout master`. 
      
         
   - so now that we've checked out the master branch if I go ahead and open up a new tab and fire up  our browser  preview by running npm run dev   
       
   - If we scroll down a bit we see that the `our feature section doesn't have any of our progress because that code only lives in our features branch. `
      
   - So let's go ahead and `merge that branch into Master`. 
      
   - So `back in my other tab` 

   - So let's merge the branch in the master `git merge ` and then the name of the branch that we want to merge into master `our-features` (`git merge our-features`)
      

(31.4)      
* I want to show you `an option you can use to merge branches in a slightly different way.` 
      
   - We can include an option named `git merge our-features --no-ff` 
      
   - this stands for `no fast forward` 

   - certain teams and certain employers will want you to merge using this option.

   ^ 
   git merge our-features --no-ff
      
   - So when you use the no fast forward option Git gives you a chance `to include a merge commit message`.
      ^
      Merge branch 'our-features'

      # Please enter a commit message to explain why  this merge is necessary,
      # especially if it merges an updated upstream into a topic branch.
      #
      # Lines starting with '#' will be ignored, and an empty message aborts
      # the commit. 
      
   - Now nine times out of 10 I would say that this default message of merge branch 'our-features', is A-OK. 
      
   - So to use that you can just hit the` escape key` on your keyboard and then type in `:wq` and press enter 
      
   - that little bit of keyboard wizardry that we just performed is beyond the scope of this course. We were basically editing a text message `using vim` but that's not important for right now. 
      
   - So now that we completed that merge Let's go ahead and `push our master branch up to github.` 
      
   - So I can show you a visual example of what the `--no-ff` option `really does`. 
      
   - So to push master up to github lets just type 
      ^
      git push Origin master 
      
   - And now if we check out `github.com` and go to the main page for `your travel site repo` 
      
   - If you click on commits. Here's the commit When we completed the our feature section. and because we used the no fast forward option `we see a dedicated commit just for the merge.` 
      
   - So if you remember we made each of these three commits to the count to 10 branch and when we merge that branch back into Master 
      
   - `because we didn't include the no fast forward option` git simply fast forward the master's branch history `to point towards the last commit from the count to 10 branch.` 
      
   - Now there is no right or wrong way to merge a branch. I just want you to be aware of the differences because `certain teams that you are on will have certain preferences.` 
      
   - So if we scroll back up to the top and click on this dedicated commit for the merge this will show us the diff. Basically what changed in which files when we performed the merge. 
      
   - Now in this case we only merged in this one commit. 
      
   - But if this was a larger feature and maybe it took us a week to complete it and maybe our progress was broken up into 10 commits 
      
   - most people on our team are not going to want to have to dig through 10 separate commits to see what changed. 
      
   - In a case like that `it is much much easier to just look at the Consolidated merge comment` which will show all of the changes from all 10 of those hypothetical comments in one convenient location. 

   - So hopefully that gives you an idea of what the no fast forward option does. 
      
   - `It creates a dedicated commit in your repos history which is a consolidated place to see all of the changes in all of the commits for that branch` 

   - at the end of the day you can merge branches using that option or not. 

   - The important thing is that I want to at least be on your radar. 
      
32. **Styling Testimonials (Part 1)**

(32.1)      
* before we write even one line of new code. Let's go ahead and jump to the command line and `create a new get branch for this testimonial section`. 
      
   - We can `create a new branch and check it out or switch to it in one move` by typing 
   `git checkout -b testimonials` 
   
   - b for branch and then the name of the branch that we want to create. 
      
 (32.2) (styling the testimonial section)    
* Let's begin by finding `this content in our html`. 
 
   - `real testimonials `

   - the first thing we should work on is `adding in this bit of vertical spacing at the top of the section`. 
      
   - So in our html we already have this `div` surrounding all of the testimonials content. 
      
   - Why don't we go ahead and give this a class that we created. Many many lessons ago `page-section`. 

   ```html
   <div id="testimonials" class="page-section">
   ```
   - All right. So `that created the vertical spacing at the top of the section.` 
--------------------------------------------------------------------------------------------
   - I think the next thing we should do is `add in this background image.` 
      
   - So within our html let's `add a modifier class to the main testimonials parent div`. 
      
   - So `page-section` dash dash to indicate a modifier class and let's call this modifier `--testimonials`. 
      
   ```html
   <div id="testimonials" class="page-section page-section--testimonials">
   ```

   - Now let's go ahead and open up our `_page-section.CSS` file to create that modifier rule. 
 
   - underneath this blue modifier class. `Let's create a new rule &--testimonials {}` 
      
   - And let's go ahead and apply this background image. 
      
   - So in our CSS let's just say background we want to use a U.R.L. that points towards an image. Let's go to the root directory that is being served up and then go into the assets folder and then the images folder and grab the testimonials dash BGP dot JPEG file. 

   ```css
   &--testimonials {
      background: url('/assets/images/testimonials-bg.jpg');
   }
   ```
      
   - Let's tell this image to be `aligned towards the top` of the section and horizontally. It should be aligned in the center. Let's also tell the image that it should `not repeat` or tile. It should only display once. 
      
   - And let's add another property named `background-size: cover` that will shrink or stretch the image to always be large or small enough to perfectly cover the containing div. 

   ```css
      &--testimonials {
      background: url('/assets/images/testimonials-bg.jpg') top center no-repeat;
      background-size: cover;
      }
      }
   ```
   - Next let's adjust the testimonial content `so that it doesn't use the full browser window width` but instead only uses the middle twelve hundred pixels of the screen 
      
   - so we remember that in earlier lessons we created a reusable block named `wrapper` that will do just that for us. 
      
   - So over in our html within the testimonials div let's just `create a new div with a class of wrapper` and then let's cut and paste `all of the testimonial content into that wrapper div.` So let's cut this pasted into the new wrapper div save this and check out the browser perfect 

   ```css
      <div id="testimonials" class="page-section page-section--testimonials">
         <div class="wrapper"> .....
   ```
   - next. Let's go ahead and `style this title headline`. 
      
   - `this headline style` looks very familiar to me. And it's because `it is identical to the section title we set up for the our features area` except that now the text is blue instead of white. 
      
   - So let's go ahead and `reuse the section-titled block` that we created so here the testimonials headline. Let's go ahead and leverage the block that we created a few lessons ago. So section-title 

      ```css
      <h2 class="section-title">Real Testimonials</h2>
      ```
      all right 
      
   - now let's go ahead and `move this icon into that heading level 2` so let's cut that pasted in right here.

   - it looks like the word `testimonials should be bold` so let's wrap that word in a strong tag

   ```css
      <h2 class="section-title"><img src="assets/images/icons/comment.svg"> Real <strong>Testimonials</strong></h2>
   ``` 
   - and I just remembered that back `when we used this section title block` in the our feature section we actually `gave the image element` a class so that we can position it differently for small screens and we gave it a class of `section-title__icon` 

      ```css
         <h2 class="section-title"><img class="section-title__icon" src="assets/images/icons/comment.svg"> Real <strong>Testimonials</strong></h2>
       ```
      
   - next `Let's make this heading text blue` instead of dark gray. 
      
   - So in our html let's go ahead and give that heading level to a modifier class of `section-title--blue` 

      ```css
         <h2 class="section-title section-title--blue"><img class="section-title__icon" src="assets/images/icons/comment.svg"> Real <strong>Testimonials</strong></h2>
       ```
      
   - and then let's open the `section-title.CSS` file and `create a blue modifier class` and we can simply assign the color of our main blue variable perfect 

   ```css
      strong {
         font-weight: 500;
      }

      &--blue {
         color:$mainBlue; 
      }
   ```
      
   - next. Let's `adjust the vertical positioning of this icon`. 
      
   - I feel like we can do a better job of aligning it with the text. If we `moved it down a few pixels` 
      
   - so back within our section titled CSs file. Here is the icon rule `within this media query` mixin let's say `position: relative top: eight pixels`.

   ```CSS
   &__icon {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: .6rem;

      @mixin atSmall {
         position: relative;
         top: 8px;
         margin-right: .5rem;
         margin-left: 0;
         margin-bottom:0;
         display: inline-block;
      }

   }
   ```  
   - So this will push the icon down eight pixels. So let's save that. I think that positioning looks better. 

(32.3)      
* And if we check out the design file once again I think the next thing we should work on is `creating this three column layout`

   - so within our html  `underneath the heading level two` that we were just working on. Let's `create a new div that has a class of row`. 
   
   ```css
      <h2 class="section-title section-title--blue"><img class="section-title__icon" src="assets/images/icons/comment.svg"> Real <strong>Testimonials</strong></h2>

      <div class:"row">
      </div>
   ``` 
   - So we know that `we want three columns`. 
      
   - So let's create a div with a class of `row__medium-4`, 

      ```css
      <div class:"row">
         <div class="row__medium-4">
         </div>

      </div>
      ```
   - if we think in terms of a 12 column grid `one third of 12 is 4.` And we want three equal width columns 
      
   - So this is one call them let's go ahead and copy and paste this. `So there are three of them`.

      ```css
      <div class="row">
         <div class="row__medium-4">
         </div>
         <div class="row__medium-4">
         </div>
         <div class="row__medium-4">
         </div>

      </div>
      ``` 
      
   - And then let's go ahead and begin `cutting and pasting each section of testimonial content into column.` 
      
   - `so that gives us a three column layout`. 
    
   - Next we want to set things up so there is `a margin or gutter in between the columns.` 
      
      So in our html `within the container row class` we can give it a modifier of row--gutters. All right.

      ```html
      <div class="row row--gutters">
      ``` 
      
(32.4)      
* So at this point if we compare this with the design file I think we are ready to begin `creating a reusable block named testimonial` that will be responsible for creating this styling. (`testimonial card`)
      
   - So let's adjust our html So this first bit of content uses a new testimonial block. `And once we have things looking good then we can apply that block to the other two testimonials` as well. 
      
   - So `over in our html within our first column` let's go ahead and create a new div and give it `a class of testimonial`

   ```css
   <div class="row row--gutters">
            <div class="row__medium-4">
               <div class="testimonial">
   ``` 
   - let's `create a brand new css file` to go along with this new testimonial class name. 
      
   - So `within our modules` CSS folder let's create a new file let's name it  `_testimonial.css` create a class testimonial 

   ```css
   .testimonial {

   }
   ```
      
   - and before we forget let's go into our main styles.css file and import this new file. So 
   `@import "modules_testimonial";` 

   - So I think the first thing we should do in this file is `give the testimonial block a background color.` 
      
   - So if we check the design file if you look closely you can see that `this is not a solid white background color but it's actually transparent.` You can see a bit of the background image shining through. 
      
   - So `in our CSS` 

   - `Let's use rgba color.` R.G.B.A. stands for red green blue and then the `a's for Alpha transparency`. 

   - Next let's give this testimonial block `a bit of padding. So the content doesn't sit up against the very edges.` 
      
   - So if we check the design file let's measure how much padding we should use. This looks like about `twenty nine pixels` to me. So to put that into Rams twenty nine `divided by sixteen` (`1.8125rem`) 

   - We `don't need any on the top`.
      
   - Let's paste in that amount (`1.8125rem`) for the right padding. 
      
   - Let's give it `just one pixel of bottom padding.` I'll explain why in just a moment. 
   `padding: 0 1.8125rem 1px 1.8125rem;`

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 1.8125rem 1px 1.8125rem;
   }
   ```
   - now even though we only gave this element one pixel of bottom padding we clearly see more than one pixel of space here. `This is because the bottom margin on this paragraph can create space for us.` 

   - So by giving the container element just even one single pixel of bottom padding it gives the bottom margin of this content something to push up against next. 
      
(32.5)      
* Let's begin `styling the actual content of the testimonial.` 
      
   - So let's start at the top and work our way down. So we will `begin with the image`. 
      
   - Instead of giving the image itself a class I think `I will wrap the image in its own div`. So let's give it a class of `testimonial__photo`.

       ```html
      <div class="testimonial__photo">
         <img src="assets/images/testimonial-jane.jpg">
      </div>
       ```
   - let's `create a new rule that targets that class` &__photo {} 

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 1.8125rem 1px 1.8125rem;

      &__photo {
      
      }
   }
   ```
   - If we check the design file I think the first thing we should work on is `making the image appear to be a circle instead of a square.` 
      
   - So back in our CSS we can create rounded corners by using a property named `border-radius`. 
      
   - So if I say `border-radius: 30px;` `we don't see any change` because the image is allowed to protrude outside the edges of the containing div but if we tell this photo div to set it's overflow to be hidden `overflow: hidden;` we see that these corners are rounded by 30 pixels.

   ```css
   .testimonial {
   background-color: rgba(255, 255, 255, .8);
   padding: 0 1.8125rem 1px 1.8125rem;


      &__photo {
         border-radius: 30px;
         overflow: hidden;
      }
   }
   ```

   - So we can give the illusion of the image being a circle. If we tell the containing div `to have exactly the same width and height that the image has` 
      
   - `we can find out the exact size of this image` by right clicking on it and click open image in new tab and then if you hover your mouse over that tab you can see that it says at the end `160 by 160`. 
      
   - Let's tell this div to have a `width of one hundred and sixty` pixels and a `height of one hundred and sixty` pixels so now we can see the rounded edges on all four corners

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 1.8125rem 1px 1.8125rem;


      &__photo {
         border-radius: 30px;
         overflow: hidden;
         width: 160px;
         height: 160px;
      }
   }
   ``` 
   - and now all we need to do to create a circle is increase the border radius to be exactly half of the width or length of the image. 

   - let's `increase the border radius from 30 to half of 160 which is 80 Perfect`.

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 1.8125rem 1px 1.8125rem;


      &__photo {
         border-radius: 80px;
         overflow: hidden;
         width: 160px;
         height: 160px;
      }
   }
      ```

   - Next let's `center this image horizontally.` 
      
   - To do that we can use `margin` let's use full shorthand. So top zero. Right. Auto bottom zero left auto looks good. 
   ```css
      &__photo {
         border-radius: 80px;
         overflow: hidden;
         width: 160px;
         height: 160px;
         margin: 0 auto 0 auto;
      }
   }
   ```
      
   - I used full shorthand because we are probably going to want to `customize the bottom margin in just a moment`. 
      
   - Next if we compare what we have in the browser to our design file it looks like `we need to position the image so that the top half violates the top edge of the containing element`. 
      
   - To do that we can use `position relative` so within our CSS let's say `position relative`. 

   - So let's say `negative 80 pixels`. All right. So that gave us the desired positioning in terms of violating the top edge. 
   ```css
      &__photo {
         border-radius: 80px;
         overflow: hidden;
         width: 160px;
         height: 160px;
         margin: 0 auto 0 auto;
         position: relative;
         top: -80px;
      }
   }
   ```
   - as far as this content is concerned the image is still sitting where it used to sit. `So we can counteract that by simply giving the image a bit of negative bottom margin` 
      
   - so since we pulled the image up 80 pixels using position relative let's just `give it a bottom margin of (negative) -80 pixels` perfect next.

   ```css
      &__photo {
         border-radius: 80px;
         overflow: hidden;
         width: 160px;
         height: 160px;
         margin: 0 auto -80px auto;
         position: relative;
         top: -80px;
      }
   }
   ```
   - It looked like in the design file that the image is supposed to have a border. So if you look really closely that looks like about `a six pixel thick border to me`. 
      
   - So `within our CSS` let's go ahead and `give this div a 6 pixel border` that is `solid` and what color should the border be. Let's just use these `same transparent white color` that the container element is using for a background color. 

      ```css
         &__photo {
            border-radius: 80px;
            overflow: hidden;
            width: 160px;
            height: 160px;
            margin: 0 auto -80px auto;
            position: relative;
            top: -80px;
            border: 6px solid rgba(255, 255, 255, .8); 
         }
      }
      ```
   - Next let's work on `the styling for these two headings`. 
      
   - Let's jump over to our html and `give those headings classes so we can target them`. 
      
   - So let's give the first a class of `testimonial__title` 
      
   - and for the next heading first. Let's `change it to be an H4 instead of an h3.` So that way from a semantics perspective we are indicating that this headline is more important than this one. 
      
   - And then let's give this a class of `testimonial__subtitle`. All right let's save this 
      
   - and jump back into our testimonial CSX file. `Let's create a new rule that targets the title element`.

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 1.8125rem 1px 1.8125rem;

      &__photo {
         border-radius: 80px;
         overflow: hidden;
         width: 160px;
         height: 160px;
         margin: 0 auto -80px auto;
         position: relative;
         top: -80px;
         border: 6px solid rgba(255, 255, 255, .8);
      }

      &__title {
         
      }
   }
   ``` 
   - So if we check out the design file that heading `should be blue and it should be center aligned`. 
      
   - So let's say `color: $mainBlue;` `text-align: center;` looks good.

   ```css
      &__title {
         color: $mainBlue;
         text-align: center;
      }
   }
   ``` 
   - Next let's `adjust the font size`. So in the design file that heading looks like about twenty four pixels tall. So in terms of REM twenty four divided by 16 is `1.5rem`. So let's say `font-size: 1.5rem;` 
   
   - let's also `lower the font weight` a bit let's say `font-weight: 500;` looks good. 
      
   - I'm noticing that there's too much vertical spacing though above and below this heading. So `let's give it margin: 0;` much better.

   ```css
      &__title {
         color: $mainBlue;
         text-align: center;
         font-size: 1.5rem;
         font-weight: 500;
         margin: 0;
      }
   }
   ``` 
   - Next let's focus on the styling for this heading. So let's create a new rule in our CSS file `&__subtitle {}` 
      
   - We know that it should be orange. So `color: $mainOrange;` 
      
   - it should also be center aligned horizontally, So `text-align: center;` 
   
   - you definitely don't want it to be too bold. So let's give it a `font-weight: 400;` 
      
   - And in terms of `font-size` if we check out the design file that looks like about 15 pixels to me. So in terms of REM 15 divided by 16 gives us this (`0.9375`) let's copy that to the clipboard pasted in say `font-size: .9375rem;` That looks good 
      
   - but it has `too much top margin`. If we check out the design file these two headings should be fairly close together so `let's give it a margin of only a quarter rem on top and one rem on the bottom.` See how that looks looks good. `margin: .25rem 0 1rem 0;`

   ```css
   &__subtitle {
      color: $mainOrange;
      text-align: center;
      font-weight: 400;
      font-size: .9375rem;
      margin: .25rem 0 1rem 0;
   }
   ```

33. **Quick Note**

(33.1)
* In case we want to host our website at a URL that isn't at the root of a domain (e.g. username.github.io/travel-site vs username.github.io/)    
   - So instead of this:

   - background: url('/assets/images/testimonials-bg.jpg') top center no-repeat;

   - Use this:

   - background: url('assets/images/testimonials-bg.jpg') top center no-repeat;

   - This way your code works in a wider variety of hosting situations once you're ready to push the site live to the public.


34. **Styling Testimonials (Part 2)**

(34.1)      
* So let's go ahead and `complete the styling for this testimonial section`. 

   - let's focus `on this paragraph.` 
      
   - This paragraph can use the same `font size` and `line height` as we used in this section. And in this section 
      
   - and we can achieve that font style for paragraph elements by applying the `generic-content-container` class to one of these paragraphs parent elements. 
      
   - So in our html on the main row div for the testimonial section let's go ahead and `add the generic-content-container class`

   ```html
   <div class="row row--gutters generic-content-container">
            <div class="row__medium-4">
               <div class="testimonial">
   ``` 

(34.2)      
* the styling for this block is actually now complete. Let's go ahead and `apply this same html pattern to the other two testimonials`. 
      
   - Let's begin by `finding this content in the html` so if we scroll down a bit here is that testimonial. 
      
   - Let's `wrap this content in a new div` that has a class of `testimonial`. 
      
   - So we know that `the image should be wrapped in its own div` that has a class of `testimonial__photo`
 
   - We want `this heading` to have a class of `testimonial__title` 
      
   - we want `this heading to actually be in H4 instead of an H 3`. And let's give it a class of `testimonial__subtitle`. 
      
   - let's go ahead and `apply the block to this testimonial`. (third)
      
   - So if we scroll down a bit here it is. Let's `wrap it in a div` that has a class `testimonial` to 

   - `wrap the image in a div` of its own `testimonial__photo` 
      
   - close out that div indent the image. 
      Give this a class of `testimonial__title`. 
      
   - Change this to an `H4` and give it a class of `testimonial__subtitle`. 
      
   _ And now `all three testimonials have been styled`. 
      
      Next 
      
(34.3)      
* let's address this issue where `there isn't enough vertical spacing between the section title and the top of the testimonial images`. 
      
   - This issue exists `because we used position relative to pull these images up out of their natural position`. 
      
   - So if we pull these images up `80 pixels from where they would normally sit` 
      
   - `we can counteract this` overlapping issue by simply `adding 80 pixels` of `top padding` to this `row`. 
      
   - So over our html let's find. `The main parent row div` for this section. Here it is. 
      
   - Let's give it a new modifier class of `row--t-padding`. 

      ```html
      <div class="row row--gutters row--t-padding generic-content-container">
            <div class="row__medium-4">
               <div class="testimonial">
      ```
   - And then within our `modules CSS folder`. 
      
   - Let's `open up _row.css` 
      
   - Let's create a new rule for that modifier class`&--t-padding {padding-top: 80px;}`

      ```css
      .row {
         @mixin clearfix;

         &--t-padding {
            padding-top: 80px;
         }

         &--gutters {
            margin-right: -65px;
         }
      ```
(34.4)      
* the next thing that I think we should `adjust is that the gutter or margin between the columns` looks a bit smaller or narrower in the design file than it does in the browser 
   
   - so we can fine tune that by simply `adding a modifier class in our html to that main row div`
   
   - So let's add a new modifier `row--gutters-small` 

   ```css
   <div class="row row--gutters row--gutters-small row--t-padding generic-content-container">
            <div class="row__medium-4">
               <div class="testimonial">
   ```
   
   - and then back in our row.css file. `Here's the normal gutters rule`. And `here is the gutters large rule`. Let's `create a new corresponding one for the gutter small` `margin-right: ;` 
   
   - So if we check out the design file in this instance the gutter looks like `about 45 pixels.` 
   
   - So `from gutters small` let's say margin right should be (negative) -45 pixels. 

   ```css
   &--gutters {
      margin-right: -65px;
   }
   
   &--gutters-large {
      margin-right: -100px;
      
   } 

   &--gutter-small {
      padding-right: -45px;  /////////////
   }

   &--gutters > div {
      padding-right: 65px;
   }
   
   &--gutters-large > div {
      padding-right: 100px;
   }
   ```
   - And then if we scroll down a bit we `also want to create a corresponding rule that targets each column.` 
      
   - So again the normal gutter is 65 pixels, large gutter is 100 pixels. Let's create one for the corresponding small gutters. So      `&--gutter-small > div {}` 
      
   - (look inside that element for any direct descendants that have a tag type of div)

   - and give them all a `padding-right: 45px;` perfect.

   ```css
   &--gutters {
      margin-right: -65px;
   }
   
   &--gutters-large {
      margin-right: -100px;
      
   } 

   &--gutter-small {
      padding-right: -45px;  /////////////
   }

   &--gutters > div {
      padding-right: 65px;
   }
   
   &--gutters-large > div {
      padding-right: 100px;
   }

   &--gutters-small > div {
      padding-right: 45px;  /////////////
   }
   ``` 

(34.5)  (with flexbox)   
* The next thing that I notice is that `each of our testimonials is a different height`. But if we look at the `design file they are all equal height.` 

   - So how can we `adjust things in the browser so that all three testimonials use the height of the tallest item.` 

   - the particular way that we will achieve an equal height lay out is by leveraging something called `Flexbox`. 
      
   - Let's begin by jumping into our html now and giving the main parent row div a new modifier class of `row--equal height-at-medium`. 

   ```html
   <div class="row row--gutters row--equal-height-at-medium row--gutters-small row--t-padding generic-content-container">
      <div class="row__medium-4">
   ```
      
   - `So once the screen is large enough to be considered medium we will apply a bit of CSS to make all of the columns equal height.` 
      

   - jump into our` _row.CSS` file. 
      
   - But scroll down to the `very bottom`. 
      
   - And `right before the final closing curly bracket` let's create a new CSS comment */ begin equal height rules*/We are including this just to stay organized. 
      
   - So after that let's create a new rule that targets the modifier class we just created
   `&--equal-height-at-medium {}`. 
      
   - So let's go ahead and use our media query mixin. So `@mixin atMedium {}` 
      
   - So what we want to do is tell the parent row div to use flexbox so we can just say `display: flex;`

   ```css
      &__medium-8--smaller {
         width: 63%;
         }
      }

      /* Begin Equal Height Rules */
      &--equal-height-at-medium {
         @mixin atMedium {
            display: flex;
         }
      }
   }
   ``` 
      
   - now by itself this won't do anything. 

   - However if we also tell `each of the three columns` to `use flexbox` instead of being `floated to the left` the contents of each will flex to match the tallest element. 
      
   - So in our CSS as `after the media query` but still within this rule let's target all of the columns. 
      
   - So the ampersand (`&`) will give us this selector (`&--equal-height-at-medium`) and then we can say only select direct descendants that have a tag type of (`> div`). So this will select all of the columns 

   ```css
   /* Begin Equal Height Rules */
      &--equal-height-at-medium {
         @mixin atMedium {
            display: flex;
         }

         & > div {   ////////////
            
         }
      }
   }

   ```
   - and then we can tell them to stop being floated, `float: none;` and start using Flexbox instead. `display: flex;`

   ```css
   /* Begin Equal Height Rules */
      &--equal-height-at-medium {
         @mixin atMedium {
            display: flex;
         }

         & > div {   ////////////
           float: none;
           display: flex; 
         }
      }
   }

   ```

   - At this point I think `the testimonial section is complete for larger screens`. 

(34.6)      
* Now let's see how things look `on smaller screens`. 

   - the first thing I would adjust for mobile is to `remove this background image`. 
      
   - on smaller screens I just `don't think the background image is a good fit`. 
      
   - Now we apply that background image in a CSSA file in the modules folder named `_page-section.css`. 
      
   - We created a modifier rule for the testimonials page section.
   
   ```css
   &--testimonials {
      background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
      background-size: cover;
   }
   ```
      So why don't we do this 
      
   - let's `wrap these properties in a mixin media query` so let's say mix in at medium and let's just paste those properties into the media query.

   ```css
   &--testimonials {
      @mixin atMedium {
         background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
         background-size: cover;
      }
      
   }
   ```
   - And for smaller screens let's just `tell the baseline for this testimonials modifier to be a solid light blue background color`.

   ```css
   &--testimonials {
      background-color: #e0e6ef;

      @mixin atMedium {
         background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
         background-size: cover;
      }
      
   }
   ``` 
   - So why don't we go ahead and `remove this margin on the sides` so that the testimony or white background uses the full screens available 

   - So over in our html here is the row for the testimonial content and just above it. Here is `the wrapper element`. 

   ```html
   <div id="testimonials" class="page-section page-section--testimonials">
      <div class="wrapper">
   ```
   - So this wrapper div is what's responsible for creating this margin that we see on the far sides. 
      
   - So let's add a modifier class of `wrapper--no-padding-until-medium`

   ```html
   <div class="wrapper wrapper--no-padding-until-medium">
   ``` 

   - then open up our `_wrapper.css` file. Let's go ahead and create a modifier rule `&--no-padding-until-medium {}`. 
      
   - So basically we want to offset or zero out these padding values. 
      
   - So let's just say `padding-left: 0;` `padding-right: 0;`

   ```css
      .wrapper {
         padding-left: 18px;
         padding-right: 18px;
         max-width: 1236px;
         margin-left: auto;
         margin-right: auto;
      
         &--medium {
         max-width: 976px;
         }

         &--no-padding-until-medium { 
            padding-left: 0;  ////
            padding-right: 0; ////
         }
      ```
      
   - But for screens that are considered `medium or larger We do want padding.` So then we can use a mixin media query say `@mixin atMedium {}` Let's add that padding back in. `So we can just copy and paste these lines`. 

   ```css
      .wrapper {
         padding-left: 18px;
         padding-right: 18px;
         max-width: 1236px;
         margin-left: auto;
         margin-right: auto;
      
         &--medium {
         max-width: 976px;
         }

         &--no-padding-until-medium { 
            padding-left: 0;  
            padding-right: 0; 

            @mixin atMedium {
               padding-left: 18px; ///
               padding-right: 18px;///
            } 
         }
      ```

   - We can even `reduce this margin on the testimonial item itself down at the Mobile view.` 
      
   - Why don't we reduce this so that it matches the margin we see throughout the rest of the design for mobile which is the standard `18 pixels from the wrapper div` 
      
   - we can adjust this by going into our `_testimonial.css` file scrolling up to the top. 
   
   ```css
   .testimonial {
   background-color: rgba(255, 255, 255, .8);
   padding: 0 1.8125rem 1px 1.8125rem;
   ```
   
   - And let's `wrap these padding values in a mixin media query`. 
      
   - So let's just `copy that line` mix in at medium paste line in  
   
      then 
      
   - let's `reduce the baseline horizontal padding to 18 pixels` perfect. 

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 18px 1px 18px;

      @mixin atMedium {
         padding: 0 1.8125rem 1px 1.8125rem;
   }

   ```
      
   - we used position relative on these `images` to pull them up 80 pixels out of their natural position. 
      
   - But on mobile the three testimonials will `stack on top of each other`. 
      
   - So why don't we go ahead and `add a bit of margin bottom` to each testimony on smaller screens to counteract this overlapping issue. 
      
   - So within our `_testimonial.css` file right up at the top on the baseline style for the main block element let's just say `margin-bottom:` 
      
   - to simply prevent the images from overlapping. We could give it a margin of `80 pixels` 
      
   - But I think this would look better if there was `a little bit of extra vertical spacing between the two testimonials`. So why don't we add an `extra 18 pixels` on top of this 80. So `98px` I think that looks nice 

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 18px 1px 18px;
      margin-bottom: 98px; /////

   @mixin atMedium {
      padding: 0 1.8125rem 1px 1.8125rem;
   }
   ```
      
   - but remember `we don't need to add this bottom margin on larger screens`. 
      
   - Now we conveniently `already have an at medium medium query` here. 
      
   - So why don't we just go ahead and `zero out this margin bottom` so we can save margin bottom zero perfect.

   ```css
   .testimonial {
      background-color: rgba(255, 255, 255, .8);
      padding: 0 18px 1px 18px;
      margin-bottom: 98px; 

   @mixin atMedium {
      margin-bottom: 0;
      padding: 0 1.8125rem 1px 1.8125rem;
   }
   ``` 
   - I think we should try to `eliminate this light blue Gap`. 
      
   - This gap is being `created by` the `margin bottom` that we just added to testimonials and also by the `bottom padding` of our page section element. 
      
   - So to remove this gap let's begin `by targeting the third and final testimonial and removing its bottom margin`. 

   - let's give it a modifier class of `testimonial--last`.

      ```html
      <div class="row__medium-4">
         <div class="testimonial testimonial--last">
            <div class="testimonial__photo">
      ``` 
      
   - Now over in our _testimonial.css file let's create a rule that targets that modifier `&--last {}` 
      
   - And let's just say `margin-bottom: 0;` 

      
   - So that got rid of most of the gap `we can get rid of the remaining portion by adding a modifier class to the testimonials page section` element. 
      
   - `The overall testimonials div` has a class of page section. Why don't we go ahead and add on another modifier `page-section--no-b-padding-until-medium`. 

      ```html
      <div id="testimonials" class="page-section page-section--no-b-padding-until-medium page-section--testimonials">
      ```

   - and open up our `_page-section.css` file. Let's create a new rule for that modifier class. So `&--no-b-padding-until-medium {}`.
      
   - So we can just say `padding-bottom: 0;` and then create a `media queries`. So `@mixin atMedium {}` for screens that are medium or larger. We can go ahead and `set the padding-bottom: 4.5rem;  back to its original value of 4.5rem`save this. 
      
   - The gap is gone and we still managed to keep our bottom page section spacing on larger screens

 

35. **Styling Testimonials (Part 3)**

(35.1)      
* But what about `medium sized screens`. 

   - `if I make my browser window smaller` the layout still looks good. Even now it still looks good. 
      
   - But eventually there `just won't be enough horizontal space for this three column layout to fit comfortably`. 
      
   - Now if I keep shrinking the window eventually we will see it switch to a single column view but `the question is Where is that breakpoint occurring`. 
      
   - `Currently` we have set up the testimonial section to only apply a three column layout if a screen is `large enough to be considered medium`. 
      
   - Now in my opinion this does not look good. `These columns are too narrow` and there just isn't enough space for three of them to fit comfortably.

(35.2)      
* So I think instead of applying this layout for screens that are medium or larger I think `we should only apply the three column layout for screens that we consider large or larger`. 
      
   - So in our text editor within app assets styles and then the base folder go ahead and open `_mixins.css` 
      
   - So many lessons ago we created these three mixins `atSmall` `atMedium` and `atLarge` 
      
   - and currently `the testimonial section is using` the medium breakpoint which is `800 pixels`. 
      
   - And it turns out that that just isn't wide enough to comfortably fit three columns. 

(35.3)      
* let's `adjust the testimonial section to not implement a three column layout until these large break point`. 

   ```css
   @define-mixin atSmall {
   @media (min-width: 530px) {
         @mixin-content;
      }
   }

   @define-mixin atMedium {
      @media (min-width: 800px) {
         @mixin-content;
      }
   }

   @define-mixin atLarge {
      @media (min-width: 1200px) {
         @mixin-content;
      }   
   } 
   ```

   - And I think that `1200px` might actually be `overkill`. Let's adjust this to 1010 pixels.

   ```css
   @define-mixin atLarge {
      @media (min-width: 1010px) {
         @mixin-content;
      }   
   } 
   ``` 
   - then jump over to our html and within our testimonial section let's `begin adjusting these medium breakpoints to use large instead`.

   ```html
   <div id="testimonials" class="page-section page-section--no-b-padding-until-medium page-section--testimonials">
   
   ``` 
      
   - So on the main testimonials div let's change this modifier. Class that says `no-b-padding-until-medium`. Let's change that too `until-large`.

   ```html
   <div id="testimonials" class="page-section page-section--no-b-padding-until-large page-section--testimonials">
      
   ``` 
   - And let's go into the `_page-section,css` file to `create a new modifier that targets the large breakpoint`. 

   ```css
   .page-section {
      padding: 1.2rem 0;

  @mixin atMedium {
    padding: 4.5rem 0;
  }

  &--no-b-padding-until-medium { ///
   padding-bottom: 0;            ///
                                 ///
   @mixin atMedium {             ///
      padding-bottom: 4.5rem;    ///
   }
  }
   ```
   - Now `we don't want to delete or replace this medium rule` because even though we want to use large in this particular instance `there might be another section or another page in the future where we will want to use this medium breakpoint`. 
       
   - let's `copy and paste it`. And then within this new copy let's `change this to large` and let's `change the media query to at large`.

   ```css
   &--no-b-padding-until-medium {
      padding-bottom: 0;

      @mixin atMedium {
         padding-bottom: 4.5rem;
      }
   }
   
   &--no-b-padding-until-large { ///
      padding-bottom: 0;

      @mixin atLarge {          ///
         padding-bottom: 4.5rem;
      }
   }
   ```

(35.4)      
* and jump back to our html The next instance of medium is on `the wrapper div`
      
      ```html
      <div class="wrapper wrapper--no-padding-until-medium">
      ```
   - Let's `change that to large`

      ```html
      <div class="wrapper wrapper--no-padding-until-large">
      ```
   - and let's jump into the `_wrapper.css` file to create the large version of this rule. 
      
   - Now `again we don't want to delete or replace` this medium version. We want to leave it intact in case we need it in the future. 
      
   - But let's go ahead and `copy and paste it`. 

   ```css
   &--no-padding-until-medium {
      padding-left: 0;
      padding-right: 0;

      @mixin atMedium {
         padding-left: 18px;
         padding-right: 18px;
      }
   }
   
   &--no-padding-until-medium { ////
      padding-left: 0;
      padding-right: 0;

      @mixin atMedium {
         padding-left: 18px;
         padding-right: 18px;
      }
   }
   ```
   - And within this duplicated copy what's changed `this to large` and change `the breakpoint to at large`.
   
   ```css
   &--no-padding-until-medium {
      padding-left: 0;
      padding-right: 0;

      @mixin atMedium {
         padding-left: 18px;
         padding-right: 18px;
      }
   }
   
   &--no-padding-until-large { ////
      padding-left: 0;
      padding-right: 0;

      @mixin atLarge {        ///
         padding-left: 18px;
         padding-right: 18px;
      }
   }
   ```
      Let's save that 
      
(35.5)      
* and jump back to our html file. `The next instance of the medium breakpoint is on the row element`.

   ```html
   <div class="row row--gutters row--equal-height-at-medium row--gutters-small row--t-padding generic-content-container">
   ```
      
   - So let's change this row equal height at `medium to large` 

   ```html
   <div class="row row--gutters row--equal-height-at-large row--gutters-small row--t-padding generic-content-container">
   ```
      
   - and then let's jump into our `_row.css` file the equal height rules or at the very bottom. 
      
   - So let's scroll down. Let's go ahead and `copy and paste this.`  
   
   - And then within the new copy. `Change this to at large and change the mix in breakpoint to large as well`. 

   ```css
   /* Begin Equal Height Rules */
    &--equal-height-at-medium {
      @mixin atMedium {
         display: flex;
      }

      & > div {
         float: none;
         display: flex;
      }
    }

    &--equal-height-at-large { ///
      @mixin atLarge {         ///
         display: flex;
      }

      & > div {
         float: none;
         display: flex;
      }
    }
   ```

(35.6)      
* jumped back to our html file. All right. Now `the only remaining instances of the medium breakpoint` are the classes that we added `to each of the three columns`.

   ```html
   <div class="row__medium-4">
      ...
   <div class="row__medium-4">
      ...
   <div class="row__medium-4">
      ...
   ```
      
   - So on these three column divs let's just `change this to large`. So that's the first column. Here's the second column and here's the third column. 

   ```html
   <div class="row__large-4">
      ...
   <div class="row__large-4">
      ...
   <div class="row__large-4">
      ...
   
   ```
      
   - Now let's jump back `into our _row.css` file to make sure that this new class name exists 
      
   - we can actually just go ahead and `copy and paste this entire at medium media query in all of its contents`. 
     
   - And then on this duplicate copy let's `change the media query to at large` and then within all of these class names let's just `change them to large`.

   ```css
      @mixin atMedium {

      &__b-margin-until-medium {
         margin-bottom: 0;
       }

      &__medium-4 {
        float: left;
        width: 33.33%;
      }
  
      &__medium-4--larger {
        width: 37%;
      }

      &__medium-6 {
         float: left;
         width: 50%;
      }
  
      &__medium-8 {
        float: left;
        width: 66.66%;
      }
  
      &__medium-8--smaller {
        width: 63%;
      }
    }
         //////////////////////
    @mixin atLarge {

      &__b-margin-until-large {
         margin-bottom: 0;
       }

      &__large-4 {
        float: left;
        width: 33.33%;
      }
  
      &__large-4--larger {
        width: 37%;
      }

      &__large-6 {
         float: left;
         width: 50%;
      }
  
      &__large-8 {
        float: left;
        width: 66.66%;
      }
  
      &__large-8--smaller {
        width: 63%;
      }
    }
   ``` 

(35.7)      
* it looks like `we forgot to change one of the breakpoints in our testimonial block.` 
      
   - So really quickly `in _testimonial.css` 

   ```css
   @mixin atMedium {
      margin-bottom: 0;
      padding: 0 1.8125rem 1px 1.8125rem;
   }
   ```
   
   - let's change this breakpoint to `atLarge`

   ```css
   @mixin atLarge {
      margin-bottom: 0;
      padding: 0 1.8125rem 1px 1.8125rem;
   }
   ``` 
(35.8)      
* let's also change our `page section rule` so that this `background image isn't used until the large break point`. 
      
   - So within `_page-section.css` we scroll down a bit here is the testimonials modifier.

   ```css
   &--testimonials {
      background-color: #e0e6ef;

      @mixin atMedium {
         background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
         background-size: cover;
      }
      
   }
   ``` 
      
   - Let's `change this breakpoint to at large`. Perfect. 

   ```css
   &--testimonials {
      background-color: #e0e6ef;

      @mixin atLarge {   ///////
         background: url('assets/images/testimonials-bg.jpg') top center no-repeat;
         background-size: cover;
      }
      
   }
   ``` 

   - `our testimonial section is now complete for every screen size. Good job`. 
      

(35.9)      
* let's get started on `adding the high DPI copies` (for the images). 
      
   - Let's jump into our html file. Let's find the first column. Here it is. `Here is the image`. 
      
   ```html
   <img src="assets/images/testimonial-jane.jpg">
   ```
   - Let's begin by giving it an `alt`  value. We can simply use the person's name Jane Doe. 

   ```html
   <img src="assets/images/testimonial-jane.jpg" alt="Jane Doe">
   ```
      
   - So let's begin by changing the source attribute to source set. (`src to srcset`) 
      
   - And after we list this first image let's `add a comma` 
      
   - and then we can just `copy and paste` the path to the image. 
      
   - And on this duplicate copy at the very end before .jpg just `add hi-dpi` 
      
   - Now we want to `tell the browser the size of each of these images` so it knows which one to choose based on the devices screen size and pixel density 
      
   - for `the base image` has a width of `160w` 
      
   - and `the hi-dpi copy` is double that at `320w`. 
      
   - And remember that `by default` web browsers assume that responsive images need to take up `the entire browser window width`. 
      
   - We need to manually tell the browser that this image will only ever need to display at a maximum width of 160px so we can `use the sizes attribute` and specify `sizes="160px"`. 

   ```html
   <img sizes="160px" srcset="assets/images/testimonial-jane.jpg 160w, assets/images/testimonial-jane-hi-dpi.jpg 320w" alt="Jane Doe">
   ```


(35.10)      
* `All right let's go ahead and do the same thing for the other two images.` 
      

(35.11)      
* Now before we save this `we can make sure that things are set up correctly` by `adding a -i` at the end of both of these.
   ```html
   <img sizes="160px" srcset="assets/images/testimonial-cat-i.jpg 160w, assets/images/testimonial-cat-hi-dpi-i.jpg 320w" alt="Cat McKitty">
   ```
      
   - `we see 160 by 160` which is what I would expect because I am using a normal monitor instead of a high DPi or high pixel density screen. 
           
   - We can go ahead and `get rid of that -i on both instances` and we have now 100 percent completed this section 
      
(35.12)      
* now because the testimonial section is no longer a work in progress. `We can now merge the testimonials branch into master`. 
      
   - So let's go ahead and `jump over to the command line`. 
      
   - Let's run a `git status` to see what has changed 
      
   - all of these changes look good to me. So I'm going to add everything to the staging area `git add -A` 
      
   - I'm ready to go ahead and commit things so `git commit -m 'completed the testimonials section'`'' 
      
(35.13)      
* We can now go ahead and `checkout the master` branch or switch back to the master branch so `git checkout master` 
      
   - And now back in the browser if I refresh while my web pack task is still running in a different command line we will see that none of our testimonial changes are in place `because they only live in the testimonials branch` and we are currently on the master branch. 
      
(35.14)      
* Let's go ahead and merge the testimonials branch into the master branch `git merge testimonials` 
      
   - if I check the browser now `our testimonial changes are in place` and we're in business. 
      
(35.15)      
* Now just in case my computer blows up I want all of this code to be safe. So `I'm going to push this up to github`. 
      
   - So to push our master branch we can just say `git push origin master` 
      
      All right. 
      
   - `Now github servers have the latest copy of my project.` 
      
   - We can let out a sigh of relief and we have officially completed the testimonials feature 

### Section 12: Let's Finish Styling our Site

36. **Styling our Footer**

(36.1)      
* We will be `styling the footer` or in other words we will be adjusting this very bottom section of the site to match what we see over in the design file. 
      
(36.2)      
* The first thing we should do is to `create a new git branch` for the footer efforts. 
      
   - We `can create a new branch by typing` git branch and then the name of the branch. We would like to create let's name it simply footer `git branch footer`
      
   - and then we can switch to or checkout that branch by typing `git checkout footer` 
      
   - All right and if you haven't already. `Make sure that NPM run dev is running in one of your command lines`. 
      
   - OK. At this point `we have a new git branch and our Webpack dev server is up and running`. 
      
(36.3)      
* Let's go ahead and `begin styling this content` 
      
   - so we can jump over to our text editor and let's open up the html file we can scroll down to the very bottom to `find the footer`.

   - Let's begin by `giving this footer element a class` so that we can target it with our CSS let's name the class site footer.

   ```html
   <footer class="site-footer">
   ``` 
   - next let's `create a brand new CSS file` dedicated to this class. So within our app assets styles modules folder let's create a new file. Let's name this file `_site-footer.css` 
      
   - Let's create the class selector. So `.site-footer {}` 
      
   - And before we forget let's save this file and then `jump into` our main` _styles.css` file and `import in this file`. So `@import "modules/_site-footer";` 
   
   - And jump back into the` _site-footer.css` file. 
   

(36.4)      
* I think we should begin by `giving it a blue background` and `making the text white` So back in our CSS let's say `background-color: $mainBlue;` should use our variable named Main. Blue let's set the `color: #FFF;` white. 

   ```css
   .site-footer {
      background-color: $mainBlue;
      color: #FFF;
   }
   ```
   
(36.5)      
* Currently it looks like `the margin from this paragraph` element is protruding out the top and bottom edges of the container div 
   
   - we can fix this by giving the containing site footer div a bit of vertical padding. So let's say `padding: .5rem 0;` Let's go with half a rem vertically and we don't need any horizontal padding 

   ```css
   .site-footer {
      background-color: $mainBlue;
      color: #FFF;
      padding: .5rem 0;
   }
   ```

(36.6)      
* Why don't we `wrap the content in a new div` that has a class of `wrapper` `so that the content won't sit against the very far horizontal edges`. 
   
   - So over in our html let's go ahead and cut this paragraph into our clipboard and then create a new div that has a class of wrapper. And then within this new wrapper div Let's paste back in that paragraph.

   ```html
   <footer class="site-footer">
    <div class="wrapper">
       <p>Copyright &copy; 2019 Clear View Escapes. All rights reserved. <a href="#" class="btn btn--orange">Get in Touch</a></p>
    </div>
  </footer>
   ```

   - So now we see that this content aligns horizontally with the margin that we are using for the rest of the site's content. 
    
(36.7)      
* Next let's `horizontally align this content to be centered` 
      
   - so in our CSS `text-align: center;` all right.
   
   ```css
   .site-footer {
      background-color: $mainBlue;
      color: #FFF;
      padding: .5rem 0;
      text-align: center;
   }
   ```
(36.8)      
* Now eventually we will want to add a bit of horizontal spacing between this text and the orange button. But first why don't we `see how things look on a small screen`. 

(36.9)      
* I think it would look better if after this text we `dropped down to a new line for the button`. 
      
   - So over in our html let's `wrap the copyright text in a span.` 
      

   - and let's give this span a class of `site-footer__text`

   ```css
   <p><span class="site-footer__text">Copyright &copy; 2019 Clear View Escapes. All rights reserved.</span>
   ``` 

   - And back in our `_site-footer.CSS`. Let's `create a new rule` for that text element. `&__text{}` We can say `display: block;` that gives us a line break after the text. 

   ```css
   .site-footer {
      background-color: $mainBlue;
      color: #FFF;
      padding: .5rem 0;
      text-align: center;

      &__text {
         display: block;
      }
   }
   ```

      - Let's also add a bit of bottom margin on that text. So there's a bit of space before the orange button so we can say `margin-bottom: 1rem;`

      ```css
      .site-footer {
         background-color: $mainBlue;
         color: #FFF;
         padding: .5rem 0;
         text-align: center;

         &__text {
            display: block;
            margin-bottom: 1rem;
         }
      }
      ```

      
(36.10)      
* `on larger screens we do not want the button to drop down to a new line`. 
      
      
   - what we can do `back in our _site footer.css` is use a media query mixedin within this text rule so we can say at `@mixin atMedium {}` 
      
      -So once a screen is large enough to be considered medium `let's set it back to an inline level element`. So `display: inline;` 
      
      -and `we won't need any margin bottom any longer`. So we can zero that out` margin-bottom: 0;`

      ```css
      .site-footer {
         background-color: $mainBlue;
         color: #FFF;
         padding: .5rem 0;
         text-align: center;

         &__text {
            display: block;
            margin-bottom: 1rem;

            @mixin atMedium {
               display: inline;
               margin-bottom: 0;
            } 
         }
      }
      ``` 

(36.11)      
* And now why don't we `add in a bit of horizontal spacing between the text and the orange button` only on larger screens. 
      
   - So `within that media query` that we just set up we can also say `margin-right: .4rem;` go with one point for RAM.

   ```css
      @mixin atMedium {
         display: inline;
         margin-bottom: 0;
         margin-right: .4rem;
      } 
   ``` 
      
(36.12)      
* the only big change that I see remaining is that this text looks like it's using `a lighter than default font weight` 
      
   - So within our CSS within this text rule let's simply say `font-weigh: 200;` 

   ```css
   &__text {
      display: block;
      margin-bottom: 1rem;
      font-weight: 200;
   ```

   - And at this point our footer is styled both for larger screens and smaller screens 
      
(36.13)      
* before we bring this lesson to a close. `Let's take care of things from a git perspective`. 
      
   - So I'm going to jump back `to the command line`. 
      
   - You can either press control C to tell web pack to stop running or you can open a new command line tab or window. Either way 
      
   - we want to go ahead and `commit our changes to the footer branch`. 
      
   - So let's run a `git status` all of these changes look good to me. 
      
   - Let's add it to the staging area. So `git add -A` 
      
   - and then want to commit those changes so git commit. Let's include a message `git commit -m 'Completed styling the footer.'` 
      
     
(36.14)      
* So now that we've committed those changes to the footer branch `we can switch back to our master branch`. 

   - So `git checkout master` 
      
   - If we look back in the browser we see that our footer styling is gone but 
      
   - all we need to do now is merge in the footer branch so `git merge footer` 
      

   - So we are back on the master branch and our footer efforts have been merged in. 
      

37. **Styling our Header (Part 1)**

(37.1)      
* why don't we first make sure that we are working within `a new get branch dedicated to this header effort.` 
      
   - So over in the command line `we can create a brand new branch and switch to it in one move` by typing `git checkout -B header` and let's name this new branch simply header.
      
      
   -  and if you haven't already `make sure that NPM run dev is running` in one of your command lines. 

   - At this point we have a new git branch and our Webpack dev server is up and running. 

(37.2)      
* Here we see the header. Let's go ahead and `give this header element a class` so we can target it with our CSS. 
      
   - Let's give it a class name of `site-header`. 

   ```html
   <header class="site-header">
   ```
      
(37.3)      
* And now let's `create a brand new CSS file` dedicated to this new class name. 
      
   - So within our app assets styles modules folder let's create a new file let's name it `_site-header.css` 
      
   - let's create these selector for that class so `.site-header {}`

       
   - before we forget let's go `into our main style sheet` and `import in the new file.` So 
   `@import "modules/_site-header"; `
       
       
(37.4)      
* if we look at the design file `the first thing that I notice is that the header content is overlapping or is overlaid on top of the large hero section`. 
      
   - And currently in the browser our header section is occupying its own space. And then the large hero section begins. 
      
   - So it's almost as if `we need to take the header out of the normal flow of the page so that the large hero section can slide up underneath it`. 
      
   - We can do that by telling the site header to be positioned absolutely so `position: absolute;`. 
      
   - So it appears that our header has disappeared but really `it's layered underneath the large hero section.` 
      
   - This is because by default when two html elements are positioned in a way where they will overlap the element that comes later in the html will sit on top. 
      
   - `It will be the top layer`. 
      
   - However we can customize which piece of content will sit on top `by using z index` 
      
   - So on .site-header we can simply say `z-index: 2;` 
      
   - the large hero block that is currently overlapping our site header doesn't have a z index value at all. 
      
   - And whichever element has a higher z index value will be placed on top. 
      
   - So if we save this we see that `our z index value brought the site header to the front`. 

(37.5)      
* I think the next thing we should work on is `the transparent blue background` that we see in the design file. 
      
   - So over in our CSS let's give our site header a `background-color: ;` 
      
   - because we want the color to be transparent We will use `rgba();` 
      
   - Now I know that the red green blue values for our main blue variable are actually `rgba(47, 85, 114, .3);` And in terms of Alpha transparency let's set this to be only 30 percent visible. 
      
 
(37.6)      
* I want to address a question you might have. You might be wondering `how you were supposed to figure out the red green and blue values of a color`. 
      
   - So for example in our styles base folder within variables that CSS 
      
   - we know that our main blue color has a hexadecimal color code of this value. 
      
   - But how do we find the RG B equivalent of this color. 
      
   - Well you could paste this value into an app like photoshop or illustrator or sketch but what if you don't have access to an app like that. 
      
   - Well let me show you another way. So back in our site headed up CSS. Wouldn't it be nice if instead of listing the RG B values we could simply include a hexadecimal color code here

   ```css
   background-color: rgba($mainBlue, .3);
   ``` 
      
   - Now `this is not valid. CSS` the web browser would have no idea how to interpret this `but postCSS can save the day`. 
      
   - `We can install a postCSS plugin` that will automatically convert hexadecimal color codes inside an RGA parentheses into the corresponding red green and blue values. So then we can write code like this. 
   
   - So in order to download and install a new postCSS plugin `let's jump to the command line` in this one where we're running our web pack task. You can just press control + C
       
   - And what we want to do is install a package from NPM So `npm install postcss-hexrgba --save-dev` All right. 
      
   - Now that we have that package `let's go leverage it`. So to do that jump into your `webpack.config.js` file towards the top. 
      
   - We have this array named `postCSSPlugins` maybe `right before the final auto prefix` or lines right above that line with a new one and say `require('postcss-hexrgba'),` and its name was post CSX dash hacks. RG B.A.. 
      
   - Be sure to include a comma at the very end of that new line.

   ```css
      const postCSSPlugins = [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-hexrgba'), /////
      require('autoprefixer')
   ]
   ``` 
      
   - and then back in the command line. Let's tell Webb pack to begin running again. So `NPM run Dev` 

   - Let's `take this code syntax for a spin`. So let's just test it out and say that it should be 95 percent visible. 

   ```css
   .site-header {
      position: absolute;
      z-index: 2;
      background-color: rgba($mainBlue, .95);
   }
   ```
      
   - Looks like it's working. 
      
   - we can put it back to 30 percent.

   ```css
   .site-header {
      position: absolute;
      z-index: 2;
      background-color: rgba($mainBlue, .3);
   }
   ``` 

      
   - hopefully you find this syntax useful and you can even use it in future projects. 

(37.7)      
* The next thing that we should probably work on is `making our site header Use the full available width.` 
   - `an element is positioned absolutely by default` it will try to shrink wrap and only use as much space as it needs to fit its content. 
      
   - We can adjust this in our CSS `by simply telling this element to have a width: 100%;`

   ```css
      .site-header {
      position: absolute;
      width: 100%;    ///////
      z-index: 2;
      background-color: rgba($mainBlue, .3);
   }
   ``` 

(37.8)      
* Next why don't we `adjust things so that this content doesn't sit up against the very far left edge`. 
      
   - Why don't we go ahead and `leverage our wrapper class` so that way our header will use the same universal margin we've been using throughout the design. 
      
   - So over in our html we want to `wrap all of this content within a new div`. 
      
   - that has a class of `wrapper`

   ```html
   <header class="site-header">
    <div class="wrapper">  ///////
       <img src="assets/images/icons/clear-view-escapes.svg">
       <a href="#" class="btn">Get in Touch</a>
       <nav>
         <ul>
           <li><a href="#our-beginning">Our Beginning</a></li>
           <li><a href="#features">Features</a></li>
           <li><a href="#testimonials">Testimonials</a></li>
         </ul>
       </nav>
    </div>
  </header>
   ``` 
 
 (37.9)      
* If we check out the design file again the next thing that I notice is that `the get in touch button should be positioned against the right edge` of the header 
      
   - Let's actually wrap it in its own div. Let's give that div a class of `site-header__btn-container`.

   ```html
   <div class="site-header__btn-container">
      <a href="#" class="btn">Get in Touch</a>
   </div>
   ``` 
   - And then over in our `_site-header.css` Let's create a new rule that targets  that    element.    So     `&__btn-container {}` and let's simply float it to the right. `float: right;`
      

(37.10)      
* next Let's go ahead and `position these navigation links` so that they sit here. (to the left) 
      
   - here is the NAV element for those navigation links. Let's `give this element a class so we can target it with our CSS`. 
      
(37.11)      
* Now we could consider this nav an element that belongs `to the site header block.` 
      
   - But remember that `in Bem it's OK to nest one block inside another block.` And if we look at the design file to me this link styling feels very generic. 
      
   - Because `having links in an unordered list and wanting them to be displayed horizontally like this is a pretty common occurrence in web design. `
      
(37.12)      
* I'm going to consider that (nav bar) `it's own block` and let's name it `primary-nav`

   ```html
   <nav class="primary-nav">
      <ul>
         <li><a href="#our-beginning">Our Beginning</a></li>
         <li><a href="#features">Features</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      </nav>
   ```
      
   - let's `create a brand new CSS file` dedicated to this class. So within our styles modules folder let's create a new file. Let's name it `_primary-nav,css` 
      
   - let's create the selector for that class of `.primary-nav {}` 
      
      
   -And before we forget let's jump into our main `styles.css` file and `import` that new file. So `@import "modules/_primary-nav";` 
      
(37.13)      
* if we check out the browser we want to go ahead and `float this content to the right` so that it's positioned here. 
      
   - However `because we are trying to create a reusable block` for this navigation `I don't want the baseline styling` to be floated to the right. 
      
   -So I'm actually going to give that element in our html `a modified class` of `primary-nav--pull-right`

   ```html
   <nav class="primary-nav primary-nav--pull-right">
   ``` 

   - now back in `_primary-nav.CSS` let's create a modifier rule so `&--pull-right {}`. And we can simply tell it to `float: right;`

   ```css
   .primary-nav {

      &--pull-right {
         float: right;
      }

   }
   ``` 
      
   - we want to `remove the default padding and margin on this unordered list` 
      
   - and then we want to `tell the list items to no longer have a bullet.` 
      
      - Now if I was going to follow the Bem philosophy 100 percent I would give a class to this element ,(ul), named primary-nav__list 
      
      - and I would give each list item element a class of primary-nav__item 
      
      - and I would even give each link a class like primary-nav__ink. 
      
      - However `this is one area where I actually disagree` with the best methodology. 
      
      - Our primary nav block has a very specific purpose to styled lists of navigation links so I can't imagine a situation where we don't use this exact html pattern 
      
      - or in other words `I fail to see how using generic type selectors and descendants selectors in this situation would have any undesired side effects`. 
      
   - So I'm just going to jump to our `_primary-nav.css` file and I'm going to say that any unordered lists (`ul`) that live within the primary-nav should have `margin: 0;` and `padding: 0;` 
      
   - And then I'm going to say that any list items (`li`) within primary-nav should have `list-style: none;` to remove the bullets. 
      
   - And I also want them to    be `float: left;` so that they will all sit on one line.

      ```css
      .primary-nav {

         &--pull-right {
            float: right;
         }

         ul {
            margin: 0; ///
            padding: 0;///
         }

         li {
            list-style: none;///
            float: left;///
         }

      }
      ``` 
      
   - And `because I floated all of them` I want the parent element the unordered list (`ul`) `to use our clear fix`. So I can say `@mixin clearfix;`  

      ```css
      .primary-nav {

         &--pull-right {
            float: right;
         }

         ul {
            margin: 0; 
            padding: 0;
            @mixin clearfix; ///
         }

         li {
            list-style: none;
            float: left;
         }

      }
      ``` 
      
(37.14)      
* Let's go ahead and `add horizontal spacing in between each of these links.` 
      
   - So within our CSS for each list item  (`li`) I'm just going to say `padding-right: 20px;`

   ```css
   li {
      list-style: none;
      float: left;
      padding-right: 20px; ///
   }

   ```
      
(37.15)      
* Let's go ahead and `make these links white` instead of orange. And let's also `remove their underline` 
      
   - so we can create a new rule (a) that targets any links within primary-nav `color: #FFF;` should be white 
   
   - and we can say `text-decoration: none;`

   - the font for these links actually looks a bit too bold to me. So let's reduce that let's say `font-weight: 300;` 
   ```css
   .primary-nav {

      &--pull-right {
         float: right;
      }

      ul {
         margin: 0;
         padding: 0;
         @mixin clearfix;
      }

      li {
         list-style: none;
         float: left;
         padding-right: 20px;
      }

      a {                ///////
         color: #FFF;
         font-weight: 300;
         text-decoration: none;
      }

   }
   ``` 

   - We can fine tune the vertical positioning of these links in just a moment but for now I want to check out the design file and 
      
(37.16)      
* I want to point out that ,(in the design), `the height of this transparent blue bar is determined by the height of this content (button)` not of the logo 
      
   - (in our browser) `The transparent blue bar is expanding vertically to fit the logo.` 
       
(37.17)      
* what we need to do if we check out the design file again is `remove the logo from the natural flow of the page.` That way the containing element that gives us the transparent blue background won't even be aware that the logo exists. 
      
   - Here is the logo graphic. Let's go ahead and `wrap it in a new div` and let's give that new div a `class` of `site-header__logo`.

   ```css
   <header class="site-header">
    <div class="wrapper">
       <div class="site-header__logo">
          <img src="assets/images/icons/clear-view-escapes.svg">
       </div>
   ``` 
   - then jump into our `_site-header.CSS` file. Let's create a new rule that targets the `&__logo {}` 
      
   - And in order to take it out of the natural flow of the page like this let's just tell it to be positioned Absolutely `position: Absolute;`

   ```css
   .site-header {
      position: absolute;
      width: 100%;
      z-index: 2;
      background-color: rgba($mainBlue, .3);

      &__btn-container {
         float: right;
      }

      &__logo {               ///
         position: Absolute;
      }
   }
   ``` 
      
   - So `now the height of the transparent blue bar is being determined by this content (button)`. 
      
(37.18)      
* Let's finish styling the logo area. So if we check out the design file we want to `give that area a blue background.` 
      
   - This looks like `our main blue color`. So back in our CSS within the `&__logo` rule let's say `background-color: $mainBlue;`

   ```css
   .site-header {
      position: absolute;
      width: 100%;
      z-index: 2;
      background-color: rgba($mainBlue, .3);

      &__btn-container {
         float: right;
      }

      &__logo {               
         position: Absolute;
         background-color: $mainBlue; ///

      }
   }
   ``` 

(37.19)      
* now we need to add a bit of `padding around the logo image`. 
       
      
   - if we check the design file. This looks like about `25 pixels of vertical padding` and about `36 pixels of horizontal padding.` 
      
   - So we can just say `padding: 25px 36px;`

   ```css
   .site-header {
      position: absolute;
      width: 100%;
      z-index: 2;
      background-color: rgba($mainBlue, .3);

      &__btn-container {
         float: right;
      }

      &__logo {               
         position: Absolute;
         background-color: $mainBlue;
         padding: 25px 36px;  ///
      }
   }
   ```  

(37.20)      
* Next let's work on the `vertical spacing above and below this content`. (button)
      
   - If we reference the design file `above and below` the get in touch `button` it looks like there is about `10 pixels` of vertical spacing. 
      
   - So in order to add that spacing in the browser let's simply `give our main` `site-header` rule a bit of `vertical padding`. So 10 pixels. And it doesn't need any horizontal padding. So we can say zero. `padding: 10px 0;` 

      ```css
      .site-header {
         padding: 10px 0;  /////
         position: absolute;
         width: 100%;
         z-index: 2;
         background-color: rgba($mainBlue, .3);
      ```
      
(37.21)      
* So that gave us the vertical spacing we wanted in terms of this button `but it also pushed our logo down 10 pixels`. 
      
   - Now we can fix the positioning of this logo by jumping into the `&__logo` rule and simply saying that its top position should be zero. `top: 0;`

      ```css
       &__logo {
         position: Absolute;
         top: 0;
         background-color: $mainBlue;
         padding: 25px 36px;
      }
       ```
      
(37.22)      
* The next thing that I notice is that we should `adjust the vertical positioning of these links.` 

   - We want the links to appear as if they are `vertically centered` within the available transparent blue height 
      
   - we can achieve that by simply `giving the links a bit of vertical padding`. 
      
   - So within our CSS we are interested in the `_primary-nav.css` file and within the rule that targets links (`a`) we want to `add a bit of vertical padding`. Let's say `five pixels`. And we don't need any horizontal padding. `padding: 5px 0;`

      ```css
      a {
         color: #FFF;
         font-weight: 300;
         text-decoration: none;
         padding: 5px 0;
      }
       ```
      
   - All right. So that `five pixels clearly wasn't enough`. 
      
(37.23)      
* Now in situations like this where i`t's difficult to guess and fine tune the padding value`. 
      
   - What I like to do is right click on one of these links and click inspect that will open your developer tools. 
      
   - And with that link selected in the right hand section of the screen we see all of the CSX being applied to the element we can actually click on this padding declaration. 
      
   - And if we place our text cursor on that five pixel value we can actually use the arrow keys on our keyboard to increase or decrease that value. 
      
   - And you can see that the links are being adjusted in real time so you can use this to find that perfect sweet spot value. 
      
(37.24)      
* So to me it looks like `twelve is the perfect value` so we can just go back into our text editor and adjust that to twelve perfect 

   ```css
      a {
         color: #FFF;
         font-weight: 300;
         text-decoration: none;
         padding: 12px 0;
      }
       ```

38. **Styling our Header (Part 2)**

(38.1)      
* `this large hero content no longer looks like it's perfectly vertically centered.` 
      
   - I think we can remedy this by simply `adding a bit of top padding` `to this large hero block content.` 
      
   - The question is how much top padding should we add. 
      
   - Well this transparent blue bar is taking up about `60 pixels.` 
      
   - So why don't we just add 60 pixels of top padding to this content. 
      
   - So over in our CSX let's open up the `_large-hero.css` block. 
      
   - And within this `&__text-content {}` rule let's add a new line that says `padding-top: 60px;` 

   ```css
   &__text-content {
      padding-top: 60px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      text-align: center;
      }
   ```

(38.2)      
* let's begin `optimizing the header for small screens`. 
      
   - So here's how the header would look on a mobile device. We definitely have a bit of work to do. 
      
   - Now the designer on our team did not send a mobile design file. This means that it's up to us as the developer to flex our design muscles a bit and make smart design decisions for mobile users. 
      
(38.3)      
* So my first thought is that `for small screens we probably don't need to show the navigation links and get in touch button right away` 
      
      - for small screens we can probably hide this content until the user taps a menu icon. 
      
      - So for small screens that would really only leave the company logo and I think we should probably shrink that logo a bit for smaller screens. 
      
      - Also if the logo is the only content in the header we probably don't need the transparent blue background for small screens either 
      
      - we can fade the background back in once a user taps the mobile menu icon. 
      
(38.4)      
* So let's go ahead and begin making those changes. `Let's start by removing the transparent blue background.` 
      
   - That background is being applied to the site header element. So we want to jump into our `_site-header.CSS` file. `Here is the background color line`. 

   ```css
   .site-header {
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 2;             ////////
      background-color: rgba($mainBlue, .3);

      &__btn-container {
         float: right;
      }

      &__logo {
         position: Absolute;
         top: 0;
         background-color: $mainBlue;
         padding: 25px 36px;
      }
   }
   ```
      
   - Now we do want this to be applied for larger screens. So what I'm going to do is cut this into my clipboard and then `create a mixin media query`.

   - Let's say once the screen is large enough to be considered `medium` then we do want that background colors of paste it back in. 

   ```css
   .site-header {
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 2;
      
      @mixin atMedium {
         background-color: rgba($mainBlue, .3);
      }
   ```
      
(38.5)      
* Next let's `hide the navigation links and "get in touch" button for small screens`. 
      
   - So let's jump into our html now and instead of hiding the button and the navigation separately for small screens `why don't we just wrap both of these pieces of content in a new wrapper div.` 

   - and give it a class of `site-header__menu-content`. 

      ```html
      <div class="site-header__menu-content">
          <div class="site-header__btn-container">
             <a href="#" class="btn">Get in Touch</a>
          </div>
          <nav class="primary-nav primary-nav--pull-right">
            <ul>
              <li><a href="#our-beginning">Our Beginning</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
       </div>
      ```
      
   - And then back in `_site-header.css` we can scroll down to the bottom and create a new rule. Let's select that new `&__menu-content {}` div let's make it hidden by default. So `display: none;` 
      
   - But once a screen is considered at least medium so `@mixin atMedium {}` we can tell it to be visible `display: block;` 
      
      perfect 
      
(38.6)      
* next I think we should `adjust the company logo so that it is horizontally centered for small screens`. 
      
   - So let's jump to our CSS towards the top of our `_site-header.css` file. Here is the rule for the `&__logo {}`.

   ```css
   &__logo {
      position: Absolute;
      top: 0;
      background-color: $mainBlue;
      padding: 25px 36px;
   }
   ``` 
      
   - Why don't we just go ahead and say `left: 50%;` 
      
   - now by itself That will push the logo `too far to the right`. 
      
   - But then all we need to do to get it perfectly centered is `pull it back to the left half of its own width`
      
   - so we can do that by saying `transform: translateX(-50%);`

   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mainBlue;
      padding: 25px 36px;
   }
   ```  
       
   - all right. Now it's perfectly centered but `we don't want it to be horizontally centered on larger screens.`

   - So what we can do within this` &__logo` rule is create a media query so `@mixin atMedium {}` And we basically just want to `undo these two properties` so we can say `left: auto;` and `transform: translateX(0);`zero so the company logo is back to its original positioning on larger screens.

   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mainBlue;
      padding: 25px 36px;

      @mixin atMedium {
         left: auto;
         transform: translateX(0);
      }
   }
   ``` 
<!--?this step is in conflict , skip it!!!!  -->
<!-- (38.7)    
- `the size of this dark blue logo area` does not work for a small screen. 
      
   - So why don't we adjust things so that `for small screens there's a bit less padding around the logo image`   
      
   - to do that back in our text editor within our `&__logo` rule. Let's just `duplicate this padding line so that it also lives in the media query.` 
      
   - But for our baseline styles `for small screens let's reduce this.` So instead of 25 let's put this to maybe `13px` instead of 36. Let's try. `29px`. 

   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mainBlue;
      padding: 13px 29px;
      
      @mixin atMedium {
         left: auto;
         transform: translateX(0);
         padding: 25px 36px;
      }
   }
   ``` 
   -->

(38.8)      
* I think our next step should be to `add in a mobile menu icon`. Right about here that users can tap in order to reveal these navigation links and then get in touch button. 
      
   - So in order to add in a mobile menu icon here let's `jump to our html` 
      
   - and right before our `site-header__menu-content div` let's add a few new lines and create a `new div` that has a `class` of `site-header__menu-icon`. 
      
   - Be sure to close out the div and we can actually leave this div `empty.`

   ```html
   <div class="site-header__menu-icon"></div>

       <div class="site-header__menu-content">
   ``` 
   - and then go create a rule for this new class. So over in our `_site-header.css` file. Let's scroll down to the very bottom `right before` this `&__menu-content {}` rule. Let's add a few new lines and create a new rule for `&__menu-icon {}`

   ```css
      &__menu-icon {
         
      }

      &__menu-content {
         display: none;

         @mixin atMedium {
            display: block;
         }
      }
   }
   ```
      
   - Let's begin by simply `creating a white square` that's positioned right about here 
      
   - so we can say `width: 20px;` `height: 20px;` 
      
   - Let's give it a `background-color: #FFF;` of white. 
      
   - And then in order to position it perfectly in the top right corner we can say `position: absolute;` 
      
   - It should sit down from the very `top: 10px;` And it should sit in from the very far `right: 10px;`

   - However `we do not want this icon to exist on larger screens. `
      
   - So what we can do within this menu icon rule is `include a media query` so we can say `@mixin atMedium {}`
      
   - Let's just go ahead and hide the icon completely. So `display: none;`
      
(38.9)      
* Now we don't actually want this to be just a white square. Instead `we want it to be the famous three horizontal bars icon` that practically every menu in the world uses 
      
   - in the post-production for this lesson. I will overlay an example of the icon I'm referring to. 
      
   - Now don't worry we will set up that icon style in a future lesson. And when we do we will build the icon styles in such a way that when a user taps on it it will smoothly transform and fade from the three bars icon into an X. 
      
   - And when the user taps the X the menu will be hit and once again. 
      
   - Now the reason we will set this up in a future lesson instead of right now in this lesson is because in order to respond to events like that like a tap or a click and subsequently modify the page in some way we will need to write code in another language aside from each TMM and CSX. 
      
   - We will need to leverage javascript and it just so happens that in our very next lesson we will begin a new chapter in the course. 
      
   - We will begin our dive into javascript and we won't write just any old sloppy javascript. 
      
   - We will learn how to write super organized modular javascript. 
      
   - We will write the kind of javascript that will impress your peers and potential employers alike. 
      
   - I know what I'm about to say has already been said about 30 times in the course but this time I truly mean it. 
      
   - This upcoming section should be a lot of fun because in my mind that moment when something in your brain clicks and the chaos that was once javascript is replaced with something that feels organized. 
      
   - That is the moment when a professional web developer is born. 

### Section 13: JavaScript Organization   

39. Object-Oriented Programming

(39.1)   
- So let's begin with a question `what in the world is object oriented programming`. 
   
(39.2)   
- So I want you to jump into our main JavaScript file (App.js) 

(39.3)   
- let's begin by simply `logging a test message to the console` so we can say console dot log quotes. This is a test.
   ```js
   console.log("This is a test!"); // This is a test!
   ```
   
(39.4)   
- Let's `log another message to the console` that reads. Hello my name is John Doe and my favorite color is blue. 
   
   - And then let's actually copy and paste this entire line and 
   
   - in the second copy let's change the name to Jane Smith and let's change her favorite color to green. 
   ```js
   console.log("Hello, my name is John Doe and my favorite color is blue." );
   
   console.log("Hello, my name is Jane Smith and my favorite color is green." );
   ```
   - Now if we save this and then back in the browser `no surprises here`. This is exactly what we would expect. 
   
   -But as a developer as a programmer this code should drive you insane because `it is very repetitive.` 
   
(39.5)   
- So let's delete all of this code and `let's create a function that we can use Time and time again.` 
   
   - So let's give this new function a `name of person`. 
   
   - `We want to log a message to the console` that reads. Hello my name is blank and my favorite color is blank. 
   
   - And we want to `include a closing period` and we want to end this line with a semicolon. 
   ```js
   function person() {
      console.log("Hello, my name is " + blank + " and my favorite color is " + blank + ".");
   }

   ```
   - Now we can simply `call this function once for John and once for Jane`. 
   
   ```js
   function person() {
      console.log("Hello, my name is " + blank + " and my favorite color is " + blank + ".");
   }

   person("John Doe", "blue");
   person("Jane Smith", "green");
   ``` 
   
   - So if each time we are calling the person function we are passing it to arguments a name and a color `we better make sure that up in our function definition we include two parameters to receive those incoming two arguments.` 
   
   - Let's call the first one `name` and let's call the second one `favColor`. 
   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + blank + " and my favorite color is " + blank + ".");
   }

   person("John Doe", "blue");
   person("Jane Smith", "green");
   ``` 
   - Now within the actual body of our function `we can access the argument values that are being passed in by replacing these blanks with the name of our parameters`. 
   
   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
   }

   person("John Doe", "blue");
   person("Jane Smith", "green");
   ``` 
   
   - So if I save this and then back in the browser we see that nothing changes the exact same two sentences are being output but behind the scenes we know that `our code is less repetitive`. 

(39.6)   
- So within this hypothetical application we can imagine that maybe `in the future we would need to reference John's name again or his favorite color again` 
   
   - now because we didn't store these values anywhere if we wanted to reference these values outside of this function `we would have to manually type out John Doe again` 
   
   - and we would have to manually type out blue again and `that would be repetitive.` 
   
   - Now one way around that would be to `create individual variables.` 
   
   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
   }

   let johnName = "John Doe';
   let johnFavColor = "blue';

   person("John Doe", "blue");
   person("Jane Smith", "green");
   ``` 

   - and then we can use these variables `throughout our entire application`. 
   
   - So for example when we call the person function for John instead of actually spelling out any values we can simply pass in those variable names as arguments. 

   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
   }

   let johnName = "John Doe';
   let johnFavColor = "blue';

   person(johnName, johnFavColor);
   person("Jane Smith", "green");
   ``` 
   
   - This code just feels a bit sloppy or disorganized to me because you and I know that `these two variables are intrinsically related to each other. `
   
   - They are both about John but currently `we don't see that relationship reflected in our code.`
   ```js
   let johnName = "John Doe';
   let johnFavColor = "blue';
   ``` 
   
(39.7)   
- So the question becomes `how do we add structure to our data.` 
   
   - Well remember that this is a lesson on object oriented programming. So surprise surprise the thing that is going to save us here is `an object.` 
   
   - So let's `delete these two individual variables` and instead `create an object for John` 
   
   - Now within this single object `we can add anything and everything that has to do with John` 
   
   - so we can give this John object `a property of name` and we can give it a `value of John Doe` 
   
   - and we can give this object `another property named favColor` and give it a `value of blue`.
   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
   }

   let john = {
      name: "JohnDoe",
      favColor: "blue",
   }

   person(johnName, johnFavColor);
   person("Jane Smith", "green");
   ```  
   - So now `all of our data about John lives within a single unified John object` and accessing these object properties is a piece of cake. 
   
   - So if we want `to access John's name` we can reference this property by simply typing John. and then the name of the property that we want. So `John.name` 
   
   - And we can access the favorite color property by simply typing the name of the object. `John.favColor`.
   ```js
   function person(name, favColor) {
      console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
   }

   let john = {
      name: "JohnDoe",
      favoriteColor: "blue"
   }

   person(john.name, john.FavoriteColor);
   person("Jane Smith", "green");
   ```   
   
(39.8)   
- what if I told you that we can store more than just simple properties or variables like this within an object. What if I told you that `we can also store functions within an object`. 
   
   - Let's go ahead and `delete this function` that we've been working on 
   
   - and let's `also delete these two calls` to that function and 
   
   - let's go ahead and add a function within this John object. 
   
   - Let's `create a new piece of this object named greet`
   
   - greet is going to contain behavior so `greet will be a function` 
   
   - as a quick example `let's make this function log out a bit of text to the console` console log. Oh hello.
   ```js
   
   let john = {
      name: "JohnDoe",
      favoriteColor: "blue",
      greet: function() {
         console.log("Oh hello!")
      }
   }

   ```   
(39.9)   
- Now just like we access these properties by typing John.name or John.favoriteColor `we can call this function by simply typing John.greet();`

   ```js
   
   let john = {
      name: "JohnDoe",
      favoriteColor: "blue",
      greet: function() {
         console.log("Oh hellow!")
      }
   }

   john.greet();

   ```   
   
   - This means that `one variable or object can contain all of the data and behavior that it needs to operate.` 
   
(39.10)   
- So object oriented programming is about getting into a mindset where you `stop thinking in terms of individual loose variables and functions and you begin thinking in terms of cohesive self-sufficient objects `
   
   - and an `object is just an entity that has data and behavior.` 
   
   - in the programming world `when we have a function that belongs to an object` like this we no longer refer to it as a function `but instead we call it a method` 
   
(39.11)   
- So now that we have a general understanding of what an object is `let's go ahead and complete the agreed method `
   
   - because we didn't just wanted to say Oh hello we wanted it to say hello my name is John.name and my favorite color is John.favoriteColor and then add in a closing period 

   ```js
   
   let john = {
      name: "JohnDoe",
      favoriteColor: "blue",
      greet: function() {
         console.log("Hello, my name is " + john.name + "and my favorite color is " + john.favoruteColor" + ".");
      }
   }

   john.greet();

   ```   
   - and if we save this and then back in the browser we see our same old trusted sentence. 
   
   - But remember we didn't just have John whose favorite color is blue. `We also had Jane Smith whose favorite color is green`. 
   
(39.12)   
- So how do we want to `create a new object for Jane. `
   
   - Now there are `several different ways to create an object `
   
   - the way that we created the John object gets the job done but `it isn't the most efficient tool for the job when we want to create multiple objects that are very similar to each other.` 
   
   - So let's actually `delete everything that we have and try something new`. 
   
(39.13)   
- Let's `create a reusable blueprint` or recipe that spells out what a person objects should be 
   
   - in JavaScript. We can create a reusable blueprint like that by leveraging something called a `constructor function`. 
   
   - So let's create a new function let's name it person
   
   - and in the programming world. It's a common convention to `begin our blueprint name with a capital letter`. 
   ```js
   function Person() {

   }
   ```
   - Now you might be thinking that this looks like a regular function. `What makes it a constructor function`. 
   
   - Well `it all depends on the way that we actually use the function`. 
   
   
   - We know that we are going to want to create an object named John but `instead of opening up a pair of curly brackets and listing all of the properties and methods that we want` we can `simply say new person`
   ```js
   function Person() {

   }

   let john = new Person();

   ```
   - `the word new in Javascript is an operator that will create a new instance of our person object type` 
   
   - This means that `our John object will contain anything that we list within this constructor function`. 
   
   - So let's say that all person objects should have `a method named greet` 
   
   - within this constructor function. We can simply say this.greet equals and then create a function as a quick example let's just log out a bit of text to the console that says Hello there.

   ```js
   function Person() {
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person();

   ```
   - Now because we added this method to our blueprint or recipe this means that `our John object now has a method named greet` 
   
   - So let's test it out. Let's take it for a spin. Let's say `John.greet`. So if we save.
   ```js
   function Person() {
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person();
   john.greet(); ///Hello there!
   ```
   - And then back in the browser. Hello there. 
   
   - So we know that we are also going to want to create a Jain object. So let's say var Jain equals new person. 
   
   - And we can rest assured that Jain also has a method named Gary. 
   
   ```js
   function Person() {
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person();
   john.greet(); ///Hello there!

   let jane = new Person();
   jane.greet(); ///Hello there!
   ```
   
(39.14)   
- `The this keyword` is what allows our blueprint function to be flexible to be recyclable. `The value of this changes depending on how when and where this function is called.` 
   
   - So let's walk through an example 
   
   - when we create the John object and we call the constructor function in that particular instance The this keyword refers to our John object 
   
   - but when we call this function again to create the Jain object in that instance when this function runs the keyword this has a value of the gane object. 
   
   - `we can use the this keyword to refer to whichever object is currently being created.` 
   
(39.15)   
- we also wanted each person object to store the person's full name and their favorite color. 
   
   - So let's add a couple of properties to our blueprint in order to store that data 
   
   - so we can add a new line. Let's begin with their name. 
   ```js
   function Person() {
      this.name =
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person();
   john.greet(); ///Hello there!

   let jane = new Person();
   jane.greet(); ///Hello there!
   ```
   - So this.name = and we can't just type John Doe because we want our blueprint to be recyclable. 
   
   -So what we can do instead is include each person's full name as an argument. When we call our person constructor function. 
   -So down on this line for John we can include an argument with his full name John Doe and let's do the same thing for Jane Jane Smith
   
   ```js
   function Person() {
      this.name =
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person("John Doe");
   john.greet(); 

   let jane = new Person("Jane Smith");
   jane.greet();
   ```
   - and then within the signature for our constructor function we can add a parameter to receive that incoming name. 
   
   - We could name the parameter anything we'd like. Let's just go with fullName.
   ```js
   function Person(fullName) {
      this.name =
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person("John Doe");
   john.greet();

   let jane = new Person("Jane Smith");
   jane.greet(); 
   ```
   - And then within this function on this line we can just say this dot name equals full name. 
   ```js
   function Person(fullName) {
      this.name = fullName;
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person("John Doe");
   john.greet();

   let jane = new Person("Jane Smith");
   jane.greet(); 
   ```
   All right. 
   
   - Now let's also store each person's favorite color. So down here when we call the constructor function once for each object 
   
   - let's include another argument with their favorite color. So John's is blue and Jane's favorite color is green. 
   
   - Let's add a second parameter to our person function to receive that income and color value. 
   
   Let's call it favColor. All right. 
   
   - And then let's add a property for each object named favoriteColor and it should simply equal the color that is getting passed in. So fave color.
   ```js
   function Person(fullName, favColor) {
      this.name = fullName;
      this.favoriteColor = favColor;
      this.greet = function() {
         console.log("Hello there!");
      }
   }

   let john = new Person("John Doe", "blue");
   john.greet();

   let jane = new Person("Jane Smith", "green");
   jane.greet(); 
   ```
   - Now at this point anywhere within our application if we wanted to access John's name we could simply type John dot name or if we wanted to access Jane's favorite color we could simply type Jane dot favorite color 
   
   - What we do need to do is update our greet method to use our old trusted text so we didn't just want this to say hello there. 
   
   - We wanted it to say hello my name is this dot. Name and my favorite color is this dot favorite color and then add a closing period. 
   ```js
   function Person(fullName, favColor) {
      this.name = fullName;
      this.favoriteColor = favColor;
      this.greet = function() {
         console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
      }
   }

   let john = new Person("John Doe", "blue");
   john.greet();

   let jane = new Person("Jane Smith", "green");
   jane.greet(); 
   ```
   
   - So if we save this and then back in the browser we see the two sentences that we were hoping to see only this time our code is object oriented. 
   
(39.16)   
- So now that we have these clean objects with these useful methods our code down here feels squeaky clean. 
   
   - It's very easy to read and immediately understand what's going on. 
   
(39.17)   
- in other programming languages like C++ or Java this thing that I've been referring to as a blueprint would actually be called a class but technically javascript doesn't have classes 
   
   - it would be nice if we could tuck this class code away into a separate file so that it's out of sight out of mind. 
   
   - And that way our main JavaScript file would be squeaky clean. 
   
   - And that is exactly what we are going to learn how to do in our next lesson. Let's keep things rolling and I will see you then.


40. The JS Module Pattern and "webpack"

   Hello everyone. 
   
   In this lesson we are going to learn 
(40.1)   
- `how to split our javascript up into multiple files` so that we can stay super organized. 
   
   Let's jump into the action. 
   
   So right now I want you to 
   
   - `open up your main JavaScript file` (App.js)
   
   so that lives in app Assets Scripts. So app dot J.S. 
   
   let's give ourselves a goal. 
   
   - So we have `this constructor function` named person and then we're using it twice. 
   
   Right here we're creating a new instance of person saving as John and then here we're creating a new instance of person and saving as Jane. 
   
   So we can look at these four lines of code and they immediately make sense. 
   
(40.2)   
- Now in terms of organization wouldn't it be nice if the blueprint or this constructor function or this class could `be tucked away into its own separate file.` 
   
   Well setting that up is actually very simple. 
   
   So right now do this with me 
   
   - select this function the person function so highlight it and then cut it into your clipboard. 
   
   All right 
   
   now let's go 
   
   create a brand new file the paste that code into. So 
   
   - within our scripts folder let's create a new sub folder. So right click on the scripts folder and choose New Folder and let's name this new folder` modules` 
   
   we could name it anything but let's choose this so you and I are on the same page. OK. 
   
   Now through the remainder of this course 
   
   - anytime we create a new feature using JavaScript. Well `each new feature should have its own new separate file in this modules folder`. 
   
   We want to continue this trend of each file having a single responsibility. 
   
   So let's do this 
   
   - within the modules folder Let's right click and choose new file and let's name the new file `Person.js` 
   
   - within the new file go ahead and `paste in your clipboard` 
   
   
   - now at the very bottom of this file. So even after this closing curly bracket was dropped down to a new line and type this out with me `export default Person` 
   
   - so `export default allows us to choose what this file will export`. If another file tries to import this file 
   
   so then this final word here person. This just matches what we want to export write our function that has that matching name of person. 
   
   - So this function is what will be used if another file imports this file. 
   
   Let's go ahead and 
   
   - save this and then jump back into our `App.js` file. 
   
   - Let's scroll to the very top of App.js and maybe right after this first line let's add a new line and say `import Person from`. And then we give it a file path. So quotes dot slash to start in the current directory and then go into the `modules` directory Slash. And then just grab the file named `Person`
   you could include the .js but it's actually not necessary.  
   ```js
   import '../styles/styles.css'
   import Person from './modules/Person' ///

   if (module.hot) {
      module.hot.accept()
   }
   ```
   
   And this line of code will take whatever was being exported from this file and make it available in this file from this name right. Uppercase Person. 
   
   This means that even though our blueprint for what a Person should be no longer lives in this file this code still makes perfect sense. Right. 
   
   - `Our Person blueprint is made available by importing this file.` 
   
   So if we go ahead and save this file actually 
   
   - to make sure it's working let's `change John Doe's favorite color to red`. 
   
   - And now if we save this `back in the browser`. Cool. Hello. My name is John Doe and my favorite color is red. 
   
   At this point let's change gears. 
   
   - So back in your text editor we've successfully learned how to split javascript code into separate files so we can cross that off our list. 

(40.3)   
- Now what I want to show you is `an alternate way to create a blueprint` 
   
   - jump back into our `Person.js` file. 
   
   - So we have this person function and `we can call this a constructor function`. It is our blueprint for what a person object should be. 
   
   - However in JavaScript there are multiple ways to create a quote blueprint for an object. 
   
(40.4)   
- So this traditional constructor function is one way of doing it. Right now I want to show you `another way of creating a blueprint` that is known as `class syntax`. 
   
   - So `within Person.js we're going to delete this function`. We can keep the export line. 
   
   - But before we delete this function let's copy the console dot log line into our clipboard 
   
   - Let's delete this entire function and we're going to `recreate it using class syntax`. 
   
   - So in Javascript we can just say `class` and then the name of the class let's say `Person` and then curly brackets `()` within the curly brackets we want to provide it a `constructor` so he's say constructor parentheses `()` curly brackets `{}` let's dropdown in between those curly brackets.
   ```js
   class Person {
   constructor() {
      
      }
   }

   export default Person
   ``` 
   - Now within a class `constructor is a reserved or special word`. So javascript will know to call the constructor when a new object is created using our class. 
   
   - Now `within the parentheses for constructor this is where we include our parameters`. So this is where we would include `name` comma `favoriteColor`
   ```js
   class Person {
   constructor(name, favoriteColor) {
      
      }
   }

   export default Person
   ```  
   
   - Now `within the constructor curly brackets` this is where `we are free to create properties` so we can say `this` dot `name` equals `name` and then in the new line we could say `this` dot `favoriteColor` equals `favoriteColor`.

   ```js
   class Person {
   constructor(name, favoriteColor) {
         this.name = name;
         this.favoriteColor = favoriteColor;
      }
   }

   export default Person
   ```   
   - Now `after the closing curly bracket for our constructor` `but still within the overall closing curly bracket for our class.` So right where the cursor is blinking. `This is where we are free to add a method`. 
   
   - Now when we're `using class syntax we don't need to say this dot and then a method name` with class syntax you can simply just type the method name 
   
   - So `greet` parentheses `()` curly brackets `{}` and then `within those curly brackets this is where you can paste back in your clipboard and that's it.`
   ```js
   class Person {
   constructor(name, favoriteColor) {
         this.name = name;
         this.favoriteColor = favoriteColor;
      }
      greet() {
         console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
      }
   }

   export default Person
   ```   
   - `We just created a blueprint using the class syntax.` 
   
(40.5)   
- technically `behind the scenes javascript is still not using classes` right. It's not using classical inheritance. 
   
   - `Behind the scenes the guts of JavaScript are still running based on prototypes`. 
   
   - few years ago javascript added the class syntax which is just a bit of syntactic sugar so that if you're already familiar with the idea of a class you can go ahead and use that in JavaScript now 
   
(40.6)   
- let's go ahead and save this file and then let's jump back `into our App.j`s file to `make sure things are working`. 
   
   - So maybe `change John Doe's favorite color to purple`. Let's go ahead and save that as well and then back in the browser. Cool. Hello my name is John Doe and my favorite color is purple. 
   
(40.7)   
- Now while we're talking about classes I want to show you one of the coolest features. 
   
   - So let's jump back `into App.js` and `classes make inheritance a piece of cake`. 
   
   - let's imagine that `John is a baby` and `Jane is an adult` now both a baby and an adult are `both considered a person`. 
   
   - Both babies and adults have names and they can both have a favorite color. 
   
   - But what if we wanted to create a new class named `adult` 
   
   - and we want the adult class to have `all the same abilities of the Person class`. 
   
   - But maybe we want to `add a new method named pay taxes` that only adult object should have access to and babies are just the generic person class should not have access to pay taxes. 
   
   - `since this file is importing the person class. We can leverage it.` 
   
   - Check this out we can just say new `class` Let's name it. `Adult` and then before we type in curly brackets we can say `extends Person` And now add the curly brackets `{}`
   ```js
   /* Lesson example code below this line */
   class Adult extends Person {}

   let john = new Person("John Doe", "purple");
   john.greet();

   let jane = new Person("Jane Smith", "green");
   jane.greet();
   ```    
   - So this is going to `create a new class named adult` and it's going to `inherit everything from the Person class`. This avoids a lot of duplication. 
   
   - And then if we want to add a new method that only adults should have pay taxes well `within these curly brackets` we can say `payTaxes` parentheses `()` curly brackets `{}` let's drop down `inside those curly brackets` and we could say that this method should just `console.log()` Let's output a message that begins with the person's names. `this.name` plus a string of text at a space in there. `Now owes zero taxes` OK.
   ```js
   /* Lesson example code below this line */
   class Adult extends Person {
      payTaxes() {
         console.log(this.name + "now owes zero taxes.");
      }
   }

   let john = new Person("John Doe", "purple");
   john.greet();

   let jane = new Person("Jane Smith", "green");
   jane.greet();
   ```     
   
   - Now let's test this out So John can remain just a person. But `let's set things up so that Jane is a new instance of the adult class`. 
   
   - So `change this Person to Adult`.
   ```js
   /* Lesson example code below this line */
   class Adult extends Person {
      payTaxes() {
         console.log(this.name + "now owes zero taxes.");
      }
   }

   let john = new Person("John Doe", "purple");
   john.greet();

   let jane = new Adult("Jane Smith", "green");
   jane.greet();
   ```      
   
   - So her name is still Jane Smith her favorite color is still green. We can still go ahead and let her call the green method that's being inherited from the Person class `but maybe right below that let's say jane.payTaxes();`. Let's go ahead and save this.
   ```js
   /* Lesson example code below this line */
   class Adult extends Person {
      payTaxes() {
         console.log(this.name + " now owes zero taxes.");
      }
   }

   let john = new Person("John Doe", "purple");
   john.greet();

   let jane = new Adult("Jane Smith", "green");
   jane.greet();
   jane.payTaxes();
   ```      
   - And back in the browser. Perfect. 
   
   - So here we see the hello message from John the hello message from Jane. And then we also see Jane Smith now owes zero taxes. Cool. 
   
   - So not only does the class syntax maybe feel a bit more familiar to us if we've used another language before but `it also makes borrowing functionality from other classes a piece of cake right`. 
   
### Section 14: Writing JavaScript for Our Header Menu

41. How to Avoid Spaghetti Code

(41.1)
- In this lesson `we are going to begin applying our newly acquired javascript knowledge` or in other words let's get back to building out our travel Web site to be more specific. 
   
   - Let's work on the mobile view of our header navigation. Let's dive right in and get started. All right. 
   
   - `Let's open our main JavaScript file` which lives in the app assets scripts folder and its name is `App.js` 
   
   - Now the person class in the adult class and the john and jane objects from our previous lessons we're just hypothetical examples. 
   
   - So at this point `let's delete all of this`. So delete the john and jane code. Also we can delete our adult class. Essentially we can delete this lesson example code below this line comment and everything below it. Also up at the top we can delete this line where we include the person file. OK. 
   
   - And while we're at it let's `also delete the person dot J.S. file.` All right. 
   
(41.2)
- if our goal for this lesson is to create this mobile menu functionality why don't we go ahead and stay organized by `creating a new module file dedicated to the mobile menu.` 
   
   - So `within these scripts modules` folder let's `create a new file` let's name this new file `MobileMenu.js` 
   
   -let's begin by creating a `class` and let's name it `MobileMenu`.
   ```js 
   class MobileMenu {

   }
   ``` 
   - And we know that we are going to want `to import this file from within our main App.js`. file. So within this file let's be sure to export this class. So let's say `export default MobileMenu;` and then the name of the class mobile menu. All right. 
   ```js 
   class MobileMenu {

   }

   export default MobileMenu;   
   ``` 
   - Now within this class let's `add a constructor function` `constructor() {}`. This function will be ran immediately when a new object is created with this class.
   ```js 
   class MobileMenu {
      constructor() {}
   }

   export default MobileMenu;   
   ```  
   
   - So for now let's just `try a test to make sure that everything's working correctly`. Let's `alert` a message that says testing from Mobile menu.
   ```js 
   class MobileMenu {
      constructor() {
         alert("Testing from MobileMenu.")
      }
   }

   export default MobileMenu;   
   ```   

(41.3)
- `jump back to our main App.js file` and we want to go ahead and `import in the mobile menu module`. 
   
   - So `import MobileMenu` from and then we just provide a path to the module file. So go into the `modules` folder and grab `MobileMenu`.
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'  

   if (module.hot) {
      module.hot.accept()
   }
   ```
   - Now simply importing a module file like this in and of itself won't do anything. 
   
   - We also need to create a new object that uses this class as a blueprint. So on a new line let's say `new MobileMenu()`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'

   new MobileMenu()   

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   
   - Now technically this code will work. This will create a new object that uses this class. 
   
   - But I would say that `nine times out of ten when you create a new object you probably want to save it to a variable so that you can access or reference it later on`. 
   
   - So at the beginning of this line let's say `let` and we can come up with any name we like. How about we name this variable `mobileMenu` But we begin with a lowercase m.
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'

   let mobileMenu = new MobileMenu();   

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   - Now if we save this file over `in the browser we see that test alert message pop up` 
   
(41.4)
- so at this point we are ready to jump back into the mobile menu module file and `begin building the actual functionality`. 
   
   - So let's `delete this test alert message` and let's think about `what our first steps should be`. 
   
   - So before we worry about actually revealing or expanding the navigation links `let's first focus on responding at all to the event` of this top right icon being clicked or tapped. 
   
   - So let's jump over to our text editor and `within the constructor function` let's write a bit of code that `logs out a bit of dummy text to the console whenever this top right icon is clicked or tapped`. 
   
(41.5)
- And I'm actually going to `begin by showing you what we should not do`. I'm going to code this the way that I used to write JavaScript in the past. 
   
   - This code will technically work and it might look familiar to you. But I want to `take the time to point out all of the problems with this style of coding`. 
   
   - `I call this spaghetti code.` 
   
   - So `within our constructor` let's begin by `selecting that element that gets clicked on` so `document` dot `querySelector` quotes and then a dot to select a class. And it had a class of `site-header__menu-icon`. Okay. So that selects the element that gets clicked on.
   ```js
   class MobileMenu {
      constructor() {
         document.querySelector(".site-header__menu-icon")
      }  
   }

   export default MobileMenu; 
   ``` 
   - Then at the end of that we can say dot and add an event listener `.addEventListener()` within these parentheses `quotes` the event that we're listening for is a `"click"` or tap event still within the parentheses. But after those quotes it's a `comma` and then include a `function() {}`. 
   ```js
   class MobileMenu {
      constructor() {
         document.querySelector(".site-header__menu-icon").addEventListener("click", function() {})
      }  
   }

   export default MobileMenu; 
   ``` 
   - within those curly brackets lets dropdown and remember we just wanted to log a test message to the consoles or console log the top right. Icon was clicked.
   ```js
   class MobileMenu {
      constructor() {
         document.querySelector(".site-header__menu-icon").addEventListener("click", function() {
           console.log("The top right icon was clicked.") 
         })
      }  
   }

   export default MobileMenu; 
   ```  
   
   - Let's go ahead and save this. And if we jump over to the browser and I open my console we see that `as soon as I click this top right icon our dummy text is logged out to the console.`Which means our messy spaghetti code is working. 
   
   - I call this spaghetti code because like a plate of noodles `everything is sort of tangled and intertwined together`. 
   
   - Another way of thinking about this is that in your home you don't just throw all of your spoons and forks and knives into one big messy jar. 

   - It's `all smushed together even though it's using three different tools to perform three different actions`. 
   
   - `A we are selecting an element from the DOM `
   
   - `B we are event handling` and 
   
   - `C we are defining our functionality`. 
   
   - Now this chunk of code may seem manageable in this simple example but as we begin working on more and more complex features `this coding style quickly becomes a dirty filthy mess.` 
   
(41.6)
- So let's `delete this and instead I want to show you a way that we can structure our code` so that our forks spoons and knives each fit into their own little organized compartments. 
   
   - So `within our constructor function` the only thing that I'm going to include is `a property or shortcut that stores our Dom selection for the menu icon element`. 
   
   - So let's say `this.menuIcon` equals. And then to select that Dom element we just say `document.querySelector()` 
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector()
      }  
   }

   export default MobileMenu; 
   ```  
   - within these parentheses it's `quotes` a `dot` for a class and it had a class of `site-header__menu-icon`. All right. 
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
      }  
   }

   export default MobileMenu; 
   ```  
   - Now below this constructor function let's create a new method named `events() {}` And within this method let's `list any and all events that we want to watch for`. So for example we know that we want to be on the lookout for this menu icon element being clicked. 
   
   - So` within this events method` let's say `this.menuIcon` and then a `dot` and then we want to add an event listener to it. So `addEventListener()`
   
   - within these parentheses the type of event we want to listen for is a `"click"` then read after the quotes a `comma` 
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
      }
        
      events() {
         this.menuIcon.addEventListener("click", )
      }  
   }

   export default MobileMenu; 
   ``` 
   - and then `this is where we include a function or what we want to happen in response to that click.` 
   
   - Only `this time we are not going to spell out and define our functionality of what we want to actually happen within these parentheses` 
   
   - instead below This events method let's create a brand new method named `toggleTheMenu() {}` 
   
   - and for the time being let's just `have this method log out a bit of dummy text to the console` `console.log("Hooray - the icon was clicked.");` 
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
      }
        
      events() {
         this.menuIcon.addEventListener("click", )
      }
        
      toggleTheMenu() {
         console.log("Hooray - the icon was clicked.");
      }
   }

   export default MobileMenu; 
   ``` 
   - and then `within our event handler` what do we want to do in the icon is clicked we want to respond by calling or running the `toggleTheMenu()` method. 
   
   - So `after this comma` here we could just list a reference directly to this method. 
   
   - However `when add event listener runs whatever function we list here` it's going to `modify the value of this keyword`. 

   - However add event listener wants to modify the this keyword to point towards the DOM element that was just clicked on. So `to get around this` instead of just listing a simple reference directly to our method here what `we're going to do is provide an arrow function here`. 
   
   - So right `after the comma` typed this in with me an empty set of `parentheses` And then after that new set of parentheses include an `equal sign` and a `greater than symbol` and then a `space` and then say `this.toggleTheMenu()` And finally an extra set of parentheses to actually call that method.
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
      }
        
      events() {
         this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
      }
        
      toggleTheMenu() {
         console.log("Hooray - the icon was clicked.");
      }
   }

   export default MobileMenu; 
   ```  

   - One of the nice things about an arrow function is that `it does not manipulate the value of this keyword`. 
   
   - In other words addEventListener() is not receiving a direct reference to our method. 
   
   - Instead we're passing addEventListener() an arrow function that it's going to call and then it's our arrow function that is actually going to execute toggle the menu 
   
   - and since an arrow function does not manipulate this keyword. When this code runs the this keyword will still be pointing towards our overall object. 

   - I do want to point out that the web browser is not going to be on the lookout for a special method named events() 
 
   - if we want to begin listening for this click event as soon as the page loads we need to make sure that our events method is called at some point. 
   
   - So do this with me `in our constructo`r let's just be sure to call `this.events()` All right.
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
         this.events()
      }
        
      events() {
         this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
      }
        
      toggleTheMenu() {
         console.log("Hooray - the icon was clicked.");
      }
   }

   export default MobileMenu; 
   ```   
   
   - With this in place let's go ahead and save this file and see if we can find this test message in the browser's console back in the browser with a small screen to simulate a smartphone. If you go ahead and click on the top right menu icon here cool in my console we see Hurray. The icon was clicked 

(41.7)
- now that we know this is working let's set things up so that when you click on this icon we add a new CSS class to the element that is currently hidden right the element with the navigation links and that new CSS class will make that div visible again. 
   
   - Let me show you what I mean. So back in our text editor let's begin in our constructor by adding another property that selects that div element right the element that contains that content that's hidden for small screens. 
   
   - So on a new line in the constructor we can say `this.menuIcon = document.querySelector(".site-header__menu-icon")`
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
         this.menuContent = document.querySelector(".site-header__menu-content")
         this.events()
      }
        
      events() {
         this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
      }
        
      toggleTheMenu() {
         console.log("Hooray - the icon was clicked.");
      }
   }

   export default MobileMenu; 
   ```    
   
   - Now down in our toggle the menu method we don't actually want to log a message to the console `get rid of that`. 
   
   - Instead we want to add a class to this element that makes it visible. 
   
   - So `in toggleTheMenu() {}` we can just say `this.menuContent.classList.toggle()` 
   
   - within these parentheses. Let's provide a pair of quotes and the toggle method that belongs to class list will add a new CSS class to an element if it doesn't already have it. And if the element does already have whatever class you list here it will remove the class. Hence the name toggle. 
   
   - So within these quotes let's toggle a CSS class of site header underscore underscore menu content and then for a BEM modifier class let's say Dash Dash is Dash visible. 
   this.menuContent.classList.toggle`("site-header__menu-content--is-visible")`
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
         this.menuContent = document.querySelector(".site-header__menu-content")
         this.events()
      }
        
      events() {
         this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
      }
        
      toggleTheMenu() {
         this.menuContent.classList.toggle("site-header__menu-content--is-visible")
      }
   }

   export default MobileMenu; 
   ```    
   - Now before we hit save and test this out I do want to talk for just a moment about `the this keyword`. 
  
      - If we did not provide an arrow function here and instead listed a direct reference to the toggle the menu method then add event listener would have ran this code within a context where this would be pointing towards the element that got clicked on. 
  
      - However because we provided an arrow function so that this keyword doesn't change. Well when this line of code runs this is still pointing towards our overall object which lets us easily access our menu content property. 
  
   - So let's save this and check things out in the browser. And `before I click on this top right icon let's actually right click on it and choose inspect` this will switch your dev tools from the console view to the elements view and right below the selected element we see our menu content Dev. 
  
   - And this is the element that we wanted to add a class to. So with this in view let's go ahead and test things out and `click the icon` perfect. 
  
   - So we see that it added an extra modifier class that ends in `is visible`. 
   
   - `If you don't see this class added` in you're sure that you typed out the code correctly in this lesson. You might just need to manually refresh your web browser 
   
   - And `if I click the top right icon again that extra class gets removed.` 
   
(41.8)
- So now revealing and hiding the navigation links for small screens is as simple as adjusting our CSF to target that is visible modifier class. 
   
   - So back in our text editor `let's open up our header CSS file` so it lives in app assets styles modules and its name is `_site-header.css` 
   
   Let's go ahead and scroll down to the very bottom of this file. `Here is the rule that's targeting our menu-content element`.
   ```css
   &__menu-content {
      display: none;

      @mixin atMedium {
         display: block;
      }
   }
   ``` 
   - So currently `the baseline style is to be hidden for small screens` and then `we are telling medium sized screens to display it once again`. 
   
   - So within this rule let's add a modifier class. Let's use the ampersand symbol so we don't have to type this out again and then we can simply say `&--is-visible {}` and to make it visible. Let's just set it to `display: block;`
   ```css
   &__menu-content {
      display: none;

      @mixin atMedium {
         display: block;
      }

      &--is-visible {
      display: block;
    }
   }
   ``` 
   
   - Let's go ahead and save this file and check things out in the browser. And if we click this top right icon we see our navigation elements are visible and we can tap it again to hide them. And `at this point our functionality is in place.` 
   
   - Now it's just a matter of using CSS to make things look nice and that is exactly what we will be doing in our next lesson.



42. Adjusting Our Mobile Menu

(42.1)   
- In this lesson we will begin styling our header navigation menu for small screens.

(42.1.2)
- Add missing properties inside `_site-header.css`, for `&__logo`
transform: translateX(-50%) `scale(.8)`;
`transform-origin: 50% 0;`
```css
&__logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) scale(.8); /// add
    transform-origin: 50% 0;               /// add
    background-color: $mainBlue;
    padding: 25px 36px;

    @mixin atMedium {
      left: auto;
      transform: translateX(0);
    }
  }
```

   
(42.2)   
- The first thing we should do is to `push the navigation content down` further from the top of the page `so that it's no longer being overlapped by our logo`. 
   
   - To do that let's jump over to our text editor and let's `open up our _site-header.css` file which lives in app assets styles modules. 
 
   - Let's scroll down to the very bottom of the file. Here is the menu content rule that we are looking for. 
   ```css
   &__menu-content {
      display: none;

      @mixin atMedium {
         display: block;
      }

      &--is-visible {
         display: block;
       }
   }
   ```
   - Let's adjust the baseline style to give it `padding-top: 100px;`
   ```css
   &__menu-content {
      display: none;
      padding-top: 100px; ///

      @mixin atMedium {
         display: block;
      }

      &--is-visible {
         display: block;
       }
   }
   ```
   - Let's save this and see how it looks in the browser. All right. So for small screens that push this content down so it's no longer hidden behind the logo 
   
(42.3)   
- but that `100 pixels of top padding was also applied on larger screens which we don't want.` 
   
   - So over in our CSS within this menu-content rule we already have a mixin targeting medium screens and larger. So within there let's say `padding-top: 0;`
   ```css
   &__menu-content {
      display: none;
      padding-top: 100px;

      @mixin atMedium {
         display: block;
         padding-top: 0; ////
      }

      &--is-visible {
         display: block;
       }
   }
   ```

   
(42.4)   
- Currently the get in touch button and the navigation links are floated to the right. This is easier to see on the large desktop version but `for mobile I think we should remove those floats so that the content is just positioned naturally`. 
   
   - Let's begin with the get in touch button. So back in our text editor if we scroll to the top of this file we see a rule for the `&__btn-container {}` element.
   ```css
   &__btn-container {
      float: right;
   }
   ``` 
   - Let's just wrap this float right property within a media query. So let's say `@mixin atMedium {}` and then let's just cut and paste float right into that mixin
   ```css
   &__btn-container {
      @mixin atMedium { ///
         float: right;
      }
   }
   ``` 
   
(42.5)   
- before we remove the float from the navigation links let's first `set this entire menu content div to be text aligned center.` 
   
   - So within our CSS if we scroll back down `within the &__menu-content {}` rule let's simply say `text-align: center;`
   ```css
   &__menu-content {
      display: none;
      padding-top: 100px;
      text-align: center; ///

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         display: block;
       }
   } 
   ```
   
(42.6)   
- Now let's go and `remove the float from these navigation links` 
   
   - the styles for those navigation links live within a different CSS module file which is named `_primary-nav.css` 
   
   - Now currently this entire primary nav element is being floated to the right with this modifier class.
   ```css
   .primary-nav {

   &--pull-right {
      float: right;///
   }

   ul {
      margin: 0;
      padding: 0;
      @mixin clearfix;
   }
   ```
   - Now if we want to remove this float for small screens `we can simply wrap this declaration with an immediate query` so we can say at Mixon at medium. And then just cut and paste float right to live within the media query.
   ```css
   .primary-nav {

   &--pull-right {
    @mixin atMedium { ///
      float: right;
    }
  }

   ul {
      margin: 0;
      padding: 0;
      @mixin clearfix;
   }
   ```
   - Now before we save this 
   
(42.7)   
- why don't we also `adjust these primary nav liks so that they all fit on a single line`. And so that they are `horizontally centered` 
   
   - in order to horizontally center these links we need to tell each li list item to no longer be floated to the left. 
   
   - So back in our text editor within this rule that selects the `li` elements
   ```css
    li {
      list-style: none;
      float: left;
      padding-right: 20px;
      padding-top: 12px;
   }

   ```
   - let's create a media query. So at `@mixin atMedium` and only within this media query do we want to float the list items to the left. So `float: left;` and `then we want to delete float: left; from the baseline styles` and let's `set the list items by default to be inline block`. So display inline block. 
   
   - This will allow them to be horizontally centered but `then within our media query we can reset that by saying display block.` 
   ```css
    li {
      list-style: none;
      display: inline-block; ///3-4
      padding-right: 20px;
      padding-top: 12px;
      @mixin atMedium { ///1
         float: left; ///2
         display: block; //5
      }
   }

   ```
   
   - Now we just need `to free up a bit of space so that the third link testimonials can fit on the same line`. 
   
   - So back in css there's padding right. Twenty pixels is what's creating the horizontal gap between each of our three links. However if we stop and think about it for a second the final link doesn't need to create a gap to its right because it's the final item.There isn't going to be another link sitting to its right. 
   
   - So what we can do to save space for small screens is say the list item that is the last child. So the final list item in the list it should have padding right of zero.   `li:last-child {padding-right: 0;}`
   ```css
    li {
      list-style: none;
      display: inline-block; 
      padding-right: 20px;
      padding-top: 12px;
      @mixin atMedium { 
         float: left; 
         display: block; 
      }
   }

   li:last-child {      //////
      padding-right: 0;
   }
   ```
   
   - Now while this is what we want for small screens `we do want to leave that padding right intact. Even for this final list item for larger screens` so we can say at Mixin at medium go ahead and reapply the 20 pixels of right padding.
   ```css
    li {
      list-style: none;
      display: inline-block; 
      padding-right: 20px;
      padding-top: 12px;
      @mixin atMedium { 
         float: left; 
         display: block; 
      }
   }

   li:last-child {      
      padding-right: 0;
      @mixin atMedium {
      padding-right: 20px;
    }
   }
   ``` 
   
   - Now if we save this and check out the browser `we see that that still didn't free up enough horizontal space to have the third link testimonials fit on the same line`. 
   
   - So what we can do `within our main list item rule` is `lower this 20 pixels padding right to something like 7` and this will be applied for small screens and then within this media query we can say that `larger screens can continue to use our original 20 pixels`. 
   ```css
    li {
      list-style: none;
      display: inline-block; 
      padding-right: 7px;  ///
      padding-top: 12px;
      @mixin atMedium {
         padding-right: 20px; //
         float: left; 
         display: block; 
      }
   }

   li:last-child {      
      padding-right: 0;
      @mixin atMedium {
      padding-right: 20px;
    }
   }
   ``` 
   - So let's save this and now we see that `all three links fit on the same line.` 
   
(42.8)   
- Now before we continue to fine tune the spacing and styling of these links I think `we should first work on making this navigation content easier to read` 
   
   - meaning let's `add a semi transparent background color to this entire header area.` When the mobile menu is expanded 
   
   to do this `we can modify our javascript from our previous lesson to also add a modifier class to the entire site header` 
   
   - and `then we can target that modified class with our CSS to add the background color`. 
   
   So let's go ahead and `open up the mobile menu JavaScript file` so over in our text editor. It lives in app assets Scripps modules. Here it is. `MobileMenu.js` 
   
   - So first `within our constructor` let's `add a new property that selects the entire site header element` from the dom. So let's name this property `this.siteHeader = document.querySelector(".site-header")` And it has a class of site header. All right. 
   ```js
   class MobileMenu {
   constructor() {
      this.menuIcon = document.querySelector(".site-header__menu-icon")
      this.menuContent = document.querySelector(".site-header__menu-content")
      this.siteHeader = document.querySelector(".site-header")//
      this.events()
   }
   ```
   - Now we can `use this property down within the toggle the menu method`. Let's create a new line and say `this.siteHeader.classList.toggle("site-header--is-expanded")` and let's use a CSX class name of site header Dash. Dash is expanded. 
   ```js
   class MobileMenu {
   constructor() {
      this.menuIcon = document.querySelector(".site-header__menu-icon")
      this.menuContent = document.querySelector(".site-header__menu-content")
      this.siteHeader = document.querySelector(".site-header")
      this.events()
   }

   events() {
      this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
   }

   toggleTheMenu() {
      this.menuContent.classList.toggle("site-header__menu-content--is-visible")
      this.siteHeader.classList.toggle("site-header--is-expanded") /////////
   }
   }

   export default MobileMenu
   ```
   
   - Let's go ahead and save this file and then `jump back into our _site-header.css file` and let's scroll back to the top 
   
   - now `towards the top of this main site header rule`. `Let's create a new modifier` we can use the ampersand symbol so we don't have to type out site header again and then we can just type `&--is-expanded {}`. All right.
   ```css
   .site-header {
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 2;

      &--is-expanded {  ///
         
      }
   ``` 
   - And when the site header has this modified class applied to it `we want to give it a semi transparent background color.` 
   
   - So let's say `background-color: rgba($mainBlue, .50);` Let's use our main blue variable. And in terms of transparency let's say that this background color should be fifty five percent visible.
   ```css
   .site-header {
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 2;

      &--is-expanded {
         background-color: rgba($mainBlue, .55);
      }
   ``` 
   
(42.9)   
- If we click this top right icon this looks nice but I think `it would be even better if the menu faded into view gradually.` 
   - So back in our CSS `within the baseline rule` for the site header element let's `add the transition property` and we can say that when `this elements background color changes` we want it to `gradually transition` to the new value over the course of a certain period of time. 
   
   - So I want the transition or fade to be fairly quick. So let's say point three seconds. So this is about a third of a second or `300 milliseconds.` And by default this transition will be linear. But I think transition style of `ease out` looks especially nice.
   ```css
   .site-header {
  padding: 10px 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  transition: background-color .3s ease-out; ///

   ``` 
   
   - So let's go ahead and save this and then take it for a spin in the browser. `So now when we click this top right icon the blue background of the menu gradually fades into view.` 
   
(42.10)   
- Let's `also set up the actual menu content itself to also gradually fade in.`

   - So back in css within our `site header file`. Let's scroll down and within our `menu content rule` 
   ```css
   &__menu-content {
      display: none; ///
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         display: block; //
       }
   }
   ```
   - we are currently using `display none` to initially hide the content but let's actually delete this and `replace it with opacity 0.` 
   
   - So this way the content will still be hidden initially but once our `&--is-visible modifier class is added` Let's `delete this display block` and we can gradually fade to an `opacity: 1;` which is fully visible 
   ```css
   &__menu-content {
      opacity: 0; ///
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1; //
       }
   }
   ```
   - and then back `within our baseline rule` for this element we do want to specify that we want the `transition` for the `opacity` property to gradually change over the course of about a `third of a second` and let's use the `easy out` transition style again. 
   ```css
   &__menu-content {
      opacity: 0;
      transition: opacity .3s ease-out; ///
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
       }
   }
   ```
   - And before we save this and check things out in the browser I want to point out that because we are no longer using display none to hide this content and we are instead using opacity This means that even though the content will be invisible initially it will still exist in the browser and it could be clicked on `and we don't want the user to be able to accidentally click on invisible content`. 
   
   - So what we can do is `use z index` and provide a `negative value` to ensure that this menu content when it's hidden sits beneath all the other content on the page so that it can't be accidentally clicked on. `z-index: -10;`
   ```css
   &__menu-content {
      opacity: 0;
      transition: opacity .3s ease-out;
      z-index: -10;    /////
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
       }
   }
   ``` 
   
   - And if we're going to use the index `we also need to say that this element is positioned relative.`
   
   - `position: relative;` Otherwise the browser won't acknowledge our z index value. All right. 
   ```css
   &__menu-content {
      opacity: 0;
      transition: opacity .3s ease-out;
      z-index: -10;
      position: relative; ////
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
       }
   }
   ``` 
   
   - And then down `within our is-visible class` when the content is ready to be visible we simply give it a `z-index: 1;`
   ```css
   &__menu-content {
      opacity: 0;
      transition: opacity .3s ease-out;
      z-index: -10;
      position: relative;
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         display: block;
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
         z-index: 1;
       }
   }
   ```  
   
   - And remember we only wanted the content to be hidden initially for small screens. So `within this media query for medium screens` and larger `instead of` making the content visible with `display block`. Let's update this to use `opacity: 1;`
   
   - and let's also tell medium screens and larger that they can use as the `index value of one` from the get go. `z-index: 1;` 
   ```css
   &__menu-content {
      opacity: 0;
      transition: opacity .3s ease-out;
      z-index: -10;
      position: relative;
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         opacity: 1; ///
         z-index: 1; ///
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
         z-index: 1;
       }
   }
   ```  
   - Now that we are changing multiple properties on this element both its opacity and its Zi index in this transition line. Let's change this `from opacity` to say that we simply want to transition `all` properties or everything. 
   ```css
   &__menu-content {
      opacity: 0;
      transition: all .3s ease-out; //
      z-index: -10;
      position: relative;
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         opacity: 1; 
         z-index: 1; 
         padding-top: 0;
      }

      &--is-visible {
         opacity: 1;
         z-index: 1;
       }
   }
   ```  
   - All right let's go ahead and save this and check out the browser. And when we click the top right icon `not only does the blue background fade in gradually but now our actual content fades in as well.` 
   
(42.11)   
- Let's take things a step further and `add a neat zoom out effect.` 

   - So check this out `within the baseline rule for this menu content element`.
   
   - Let's give it a new property of `Transform` and let's initially make the content look a bit bigger than we want it to end up so we can say `scale`. Now one is the elements natural size. So if we say `one point two` the content will be 20 percent larger than it naturally would. All right.
   `transform: scale(1.2);` 
   
   - And then down `within our is-visible modifier` class we can simply say transform scale and place it back to its natural size. `transform: scale(1);`
   
   And we only want this neat zoom out effect to happen for small screens. So `within this media query` we can say that larger screens should always use this `scale` of simply `one`. `transform: scale(1);`
   ```css
   &__menu-content {
      opacity: 0;
      transform: scale(1.2);
      transition: all .3s ease-out; 
      z-index: -10;
      position: relative;
      padding-top: 100px;
      text-align: center;

      @mixin atMedium {
         opacity: 1; 
         z-index: 1; 
         padding-top: 0;
         transform: scale(1);
      }

      &--is-visible {
         opacity: 1;
         z-index: 1;
         transform: scale(1);
       }
   }
   ```  
   - So let's go ahead and `save` this and check it out in the browser.
   
   - When we click the top right icon `we see a nice little zoom out fade effect.` 
   
(42.12)   
- There's only one problem `when I try to tap on this icon again to close the menu. It's not working`. 
   
   - This is because we adjusted the z index value of the menu content div. This means that `once the menu content is visible it's overlapping this icon. So we can't click on the icon.` 
   
   -We can fix this `by giving that top right icon a larger z index value.` So within our CSS let's scroll up a bit. And within this menu icon rule. Let's give it a z index of 10.`z-index: 10;`
    ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      background-color: #FFF;
      position: absolute;
      z-index: 10; ///
      top: 10px;
      right: 10px;
    ```
   
   - Let's save this. And `now when we click on this icon our menu closes again and we saw that when it closes we even get a nice little zoom in fade effect` 
   
(42.13)   
- now before we bring this lesson to a close let's `adjust the styling for these three links so that they each have a subtle background and a bit of padding` just to make them feel that much more tangible or clickable. 
   
   - So back in our CSS let's `jump over to our _primary-nav.css file` it down at the very bottom. Let's work on this link rule.
   ```css
   a {
      color: #FFF;
      font-weight: 300;
      text-decoration: none;
      display: block;
      padding: 12px 0;
   }

   ```   
   - Let's begin by `creating a media query` so we can send different styles to small screens and larger screens. So let's say at mix in at medium. All right.`@mixin atMedium {}` 
   
   - So `for medium screens` let's go ahead and continue to use these padding settings so let's just `copy and paste` that. `padding: 12px 0;` 
   
   -But `within the baseline rule` that will be applied for small screens. Let's change this to use five pixels of vertical padding and eight pixels of horizontal padding.
   `padding: 5px 8px;` 
   
   - Let's also use a `slightly smaller font size for small screens`. So let's say font size. Point eight Ram. `font-size: .8rem;` 
   
   - And then `within our media query` we can say that larger screens should use a `standard font size` of `one Ram` 
   `font-size: 1rem;`

   - `within our baseline styles`. Let's also `add a really subtle transparent background background color`. Let's say RGA. Let's use our main blue color and let's have it just be 30 percent visible.
   `background-color: rgba($mainBlue, .3);` 
   
   - And then `within our media query` let's tell larger screens that they `shouldn't apply a background color` at all to the links so they can just use a background color of transparent. `background-color: transparent;`
   ```css
   a {
     color: #FFF;
     font-weight: 300;
     text-decoration: none;
     display: block;
     padding: 5px 8px; ///
     font-size: .8rem; ///
     background-color: rgba($mainBlue, .3); ///

     @mixin atMedium {
       font-size: 1rem; ///
       padding: 12px 0; ///
       background-color: transparent; ///
    }
   }
   ```
   
   - let's go ahead and save this and check it out in the browser. 
   
   - This looks OK. But I think we could afford to `make the backgrounds for each of the three links a bit darker` 
   so within our RGA value let's bump this up to maybe `point five`. I think that looks better. 
   ```css
   a {
     color: #FFF;
     font-weight: 300;
     text-decoration: none;
     display: block;
     padding: 5px 8px; 
     font-size: .8rem; 
     background-color: rgba($mainBlue, .5); ///

     @mixin atMedium {
       font-size: 1rem; 
       padding: 12px 0; 
       background-color: transparent; 
    }
   }
   ```
(42.14)   
- Now we just need to `add a bit of vertical spacing between the get in touch button and these three links.` 
   
   - So let's jump back to our CSS and `at the very top of this primary nav file.` Let's say padding top 10 pixels
   `padding-top: 10px;` 
   
   - but we don't want to create this vertical gap for larger screens. So let's `create a media query`. So at Mixon at medium and then we just want to offset this value. So padding top 0. `@mixin atMedium {padding-top: 0;}`
   ```css
   .primary-nav {
      padding-top: 10px;///

      @mixin atMedium {///
         padding-top: 0;
      }

   ```
   
   - Let's save this and check it out.`That looks a lot better`. 
   
(42.15)   
- But now I'm noticing that maybe `this vertical gap between the logo and this button is a bit too much`. So let's `reduce this maybe by 10 pixels`. 
   
   - So to do that back in our text editor let's `jump over to our _site-header.css file` and if we scroll down to the very bottom `within our menu content rule` we can adjust this padding top value so let's reduce this from 100 pixels to maybe 90 pixels. `padding-top: 90px;`
   ```css
   &__menu-content {
      opacity: 0;
      transform: scale(1.2);
      transition: all .3s ease-out;
      z-index: -10;
      position: relative;
      padding-top: 90px; ///
      text-align: center;
   ```
   
   - Let's save this and I think that looks a lot better. `And that's actually going to bring this lesson to a close` 


43. Animating Hamburger Menu Icon Into an "X"

(43.1)   
- In this lesson we will learn `how to smoothly animate or transform one icon shape into another`. 
   
   - In this instance we will be focusing on `our top right menu icon`. 
   
   - Let's review what we currently have at the moment. Our menu icon is simply a square and our goal for this lesson is to css to turn it into the three bars hamburger menu icon 
   
   - and once it's tapped. We want to turn that shape into an X to indicate that it can be clicked again to close the menu. All right. 
   
(43.1)   
- So the first thing that we should do is `remove the background color from this icon element so that it no longer looks like a solid square.` 
   
   - So let's jump into our text editor and within our styles modules folder `let's open up _site-header.css` 
   
   - If we scroll down this file a little bit further than halfway we will find `the rule for our menu icon element` 
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      background-color: #FFF; ///
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      @mixin atMedium {
         display: none;
      }
   }
   ```
   - and let's just go ahead and `remove this background color line`. 
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      @mixin atMedium {
         display: none;
      }
   }
   ```
   - Now if we save this and check things out in the browser even though we can no longer see that top right icon it still exists. `We can still tap on it and it still works.` 
   
(43.2)   
- So now our next step is to simply `add those three horizontal bars within the currently empty menu icon div`. 
   
   - So in order to do that let's actually `jump into our html file index.html` and let's scroll down a bit. We are looking for the `<div class="site-header__menu-icon">`. Here it is. 
   
   - And in between the opening and closing tags let's drop down to a new line and let's `create a new div` that has `a class of` `class="site-header__menu-icon__top"`. Be sure to close out that div.
   ```css
   <div class="site-header__menu-icon">
        <div class="site-header__menu-icon__top"></div>
      </div>
   ``` 
   - So our hamburger menu icon should have three horizontal bars and `this element will be the top bar` 
   
   - in order `to create the middle and bottom bars`. Let's just `copy and paste this div`. So let's paste it and change this name to `middle` and what's `pasted in again` and change this to `bottom`. 
   ```css
   <div class="site-header__menu-icon">
        <div class="site-header__menu-icon__top"></div>
        <div class="site-header__menu-icon__middle"></div>
        <div class="site-header__menu-icon__bottom"></div>
      </div>
   ``` 
   - Let's go ahead and save this and then `begin writing the CSS to turn these into the three horizontal bars`. 
   
   - So back in our `_site-header.CSS` file `within our menu icon rule` right before this media query. 
   
   - Let's create a new line and let's use the ampersand symbol so we don't have to type this out again. And then we can simply say underscore underscore top. All right. `&__top {}` 
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &__top {
         
      }

      @mixin atMedium {
         display: none;
      }
   }
   ```
   - So how are we going to create the first horizontal bar. Well let's use `position absolute` and say that the top bar should sit in the very `top` `left` corner. And let's say that this bar should have a `width of 20 pixels`. Since we know that's how wide the menu icon parent div is 
   
   - let's give the top bar a `height of three pixels` and let's give it a `background color of white.` Let's go ahead and save this and check things out in the browser. Perfect.
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &__top {
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      @mixin atMedium {
         display: none;
      }
   }
   ``` 
   - Now we just need to `do the same thing for the middle and bottom bars`. 
   
   - So back in our CSs let's just `copy and paste this top bar` copy paste it back in and let's `change its name to middle`. And instead of saying that it should be positioned in the very top corner of its parent div let's say that it should set `eight pixels down from the top`. Let's see how that looks in the browser. Looks good. 
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &__top {
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      &__middle {            ///
         position: absolute;
         top: 8px;            ///
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      @mixin atMedium {
         display: none;
      }
   }
   ``` 
   - Let's `create the bottom bar`. We still have this rule in our clipboard so down below the middle rule. `Let's just pasted in again`. Let's change the name to `bottom` and instead of saying that it should sit at the very top so top zero. Let's change this to `bottom zero`. So it'll set at the very bottom. Let's check it out in the browser so there is our bottom bar. 
   ```css
   &__menu-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &__top {
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      &__middle {            
         position: absolute;
         top: 8px;            
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      &__bottom {      ////          
         position: absolute;
         bottom: 0;     ////          
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }

      @mixin atMedium {
         display: none;
      }
   }
   ``` 
   - But if I zoom in and we look really closely it looks like `the gap between the middle and bottom bar is like one pixel larger `than the gap between the top and middle bar. 
   
   - So to fix that let's just move the bottom bar up a pixel. So to do that back in our CSX let's actually scroll up `to our main menu icon parent element` and `let's change its height from twenty pixels to 19 pixels`. Let's check this out in the browser.
   ```css
   &__menu-icon {
      width: 20px;
      height: 19px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;
   ``` 
   - And I know it's subtle but I think that `looks a lot better`. 
   
   
(43.3)   
- I want to show you `a way that we can clean up our html a bit`. 
   
   - So back in our text editor let's `jump into our index.html  file.` 
   
   - Now currently we have these three empty divs to create the three horizontal bars. But `what if I told you we could create that same exact visual effect using only one empty div instead of three.` 
   
   - Let's `delete this top bar` and let's `also delete the bottom bar`. Let's leave the middle bar intact and let's go ahead and save this.
   ```css
   <div class="site-header__menu-icon">

         <div class="site-header__menu-icon__middle"></div>
         
       </div>
   ``` 
   - And then let's `jump back into our CSS` and this code that was `targeting the top div`. Let's change it selector to an ampersand which will use its parent selector and then we can say colon colon before. `&::before{}` This will create a pseudo element that we can style to look just like the top bar 
   
   - in order `to make sure that this pseudo element appears` we can just say `content` and just include an `empty pair of quotes`. 
   ```css
   &__menu-icon {
      width: 20px;
      height: 19px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &::before {      ////
         content: " "; ///
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
      }
   ```
   - So now we just need to `perform that same pseudo content trick for the bottom bar`. 
   
   - So if we scroll down a bit `here is the bottom rule`. Let's just change this selector to an `&::after {}` then let's be sure to say `content` a pair of `empty quotes`. Let's save this. 
   ```CSS
   &__menu-icon {
    width: 20px;
    height: 19px;
    position: absolute;
    z-index: 10;
    top: 10px;
    right: 10px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
    }

    &__middle {
      position: absolute;
      top: 8px;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
    }

    &::after {     /////
      content: "";  ////
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
    }
   ```
   - And now we have the exact same visual effect but we saved a few bytes in our HTML. 
   
(43.4)   
- Now at this point we are ready to `begin transforming this icon into an x. Once it's tapped on` 
   
   - So over in our text editor `let's open up the relevant JavaScript file`. It lives in app assets Scripps modules and its name is `_mobilemenu.js` 
   
   - Now `on this line`(///) we can see that we've already saved the `menuIcon` DOM element to this property named menu icon. 
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon") ///
         this.menuContent = document.querySelector(".site-header__menu-content")
         this.siteHeader = document.querySelector(".site-header")
         this.events()
   ```
   - So down `within our toggleTheMenu method` let's just `add a new line of code that targets the icon element`. So this dot menu icon dot class list dot toggle. And let's give it a modifier. Class of site header underscore underscore menu icon dash dash. And let's call this close x. Let's save this file `this.menuIcon.classList.toggle("site-header__menu-icon--close-x")`
   ```js
   class MobileMenu {
      constructor() {
         this.menuIcon = document.querySelector(".site-header__menu-icon")
         this.menuContent = document.querySelector(".site-header__menu-content")
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
      }

      toggleTheMenu() {
         this.menuContent.classList.toggle("site-header__menu-content--is-visible")
         this.siteHeader.classList.toggle("site-header--is-expanded")
         this.menuIcon.classList.toggle("site-header__menu-icon--close-x") //////
      }
      }

      export default MobileMenu
   ```
   
   - and then jump back into our `_site-header CSS file`. Let's find our `&__menu-icon` rule and let's find `the very bottom` of this rule so down here is where that menu icon rule ends. 
   
   - Let's `create a brand new rule`. Let's start with ampersand which will give us site header and then we can say underscore underscore menu icon and then target that modifier dash dash close x. `&__menu-icon--close-x {}`
   ```css
   &::after {    
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
       }

      @mixin atMedium {
         display: none;
      }
   }

   &__menu-icon--close-x {  ///

   }   
   ```
   - And now `within this rule we can simply target each of the three horizontal bars` and modify them. However we need to in order to create the x. 
   
(43.5)   
- Let's begin by `targeting the top horizontal bar` so we can select it by saying `&::before {}` 
   ```css
   @mixin atMedium {
         display: none;
      }
   }

   &__menu-icon--close-x {
      &::before {

      }
   }   
   ```
   - Let's actually look at the browser really quickly and ask ourselves `what do we need to do to the top bar in order to make this look like an x`. 
   
   - Well we would want to `rotate the top bar clockwise about 45 degrees so that it's diagonal`. 
   
   - So over in our CSS let's say `transform` let's use the `rotate` function and we want to rotate it `45 degrees clockwise`. `transform: rotate(45deg);`
   ```css
   @mixin atMedium {
         display: none;
      }
   }

   &__menu-icon--close-x {
      &::before {
         transform: rotate(45deg);
      }
   }   
   ```
   
   - So when we click on the icon. Well that's not exactly what we had in mind. So the top bar now is sitting diagonally `but it's positioned very oddly` 
   
   - and `this is because` it's transformed origin or if you think about it as `its pivot point is currently set to its center` meaning the center of this top line is still exactly where it was before the rotation. 
   
   - We want the top left corner of this bar to stay exactly where it is. So `we want the top left corner to be the pivot point`. 
   
   - So let's `jump back to our CSS` and let's scroll up a bit to find the base find style for that top bar. `Here it is`. 
   ```css
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
    }
   ```
   - And let's `add a property` named `transform-origin`. Now `by default web browsers will use a transform origin of 50 percent 50 percent` meaning the horizontal center of the element and the vertical center of the element. 
   
   - So if we want to set the very top left corner to be the transform origin we can just say` 0 0;` Let's save this and check it out in the browser. `transform-origin: 0 0;` 
   ```css
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
      transform-origin: 0 0; ///
    }
   ```
   - So now `when we click the icon the top bar is positioned correctly`. 
   
   - But once it's turned diagonally `we need to make it a bit longer so that it can reach the very bottom right corner`. 
   
   - So back in our CSc Let's scroll down to find our `close-X modifier rule`. 
   ```css
   &__menu-icon--close-x { ///
    &::before {
      transform: rotate(45deg);
    }
   ```
   - And `within this same transform line` we can `add another function the scale() function`. 
   
   - And `if one is the elements natural size` we can increase its size by saying maybe `1.25`. 
   
   - However `we don't want to increase the top bars width and height.` We `only want to increase its width`. So instead of scale we can actually use `scaleX(1.25)`
   ```css
   &__menu-icon--close-x {
    &::before {
      transform: rotate(45deg) scaleX(1.25); ///
    }
   ``` 
   
   - Let's go ahead and save this and check out the browser and the difference is subtle but `now the top bar reaches the bottom right corner`. All right. `So our top bar is complete`. 
   
(43.6)   
- Next `let's focus on our bottom bar` in order to create an X shape. `We just need to rotate the bottom bar counterclockwise 45 degrees` so that it's diagonal as well. 
   
   - So back in our CSS `within this close-X parent rule`. 
   ```css
   &__menu-icon--close-x { ///
      &::before {
         transform: rotate(45deg) scaleX(1.25);
      }
   }    
   ```
   - Let's `create a new rule that targets the bottom bar` 
   `&::after {}`
   
   - And really we can `just copy and paste this line pasted in here` the only difference is that instead of wanting to rotate 45 degrees clockwise we want to rotate counterclockwise so we can just say `negative forty five`. Let's save this.
   ```css
   &__menu-icon--close-x { 
      &::before {
         transform: rotate(45deg) scaleX(1.25);
      }
       
      &::after {  ///
         transform: rotate(-45deg) scaleX(1.25); ///
   }
   ```
   - We see that the bottom bar is now diagonal but `its positioning is way off` and that's `because of its transform origin or its pivot point`. 
   
   - So back in our CSS just like we did for the top bar let's scroll up to `find the baseline rule for the bottom bar`. Here it is
   ```css
   &::after {    
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
       }
   ``` 
   - and let's add `transform-origin: ;` 
   
   - And in this case `we actually want the bottom left corner of the element to be the transform origin` so to specify the bottom left corner. We can say `zero` to point towards the left corner and then we can say `100` percent to point towards the very vertical bottom. Let's save this and check it out. 
    ```css
   &::after {    
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
         transform-origin: 0 100%;
       }
   ``` 
   - Looks good but if we zoom in and look really closely to my eye it looks like `the bottom bar that is now pointing towards the top right is sitting maybe just one pixel up too high.` So I'd like to push it down just a single pixel 
   
   - so to do that within our CSS. Let's scroll back down to our close-X modifier rule `&::after {`
   ```css
   &::after { 
         transform: rotate(-45deg) scaleX(1.25);
      }
   ``` 
   
   - and while we are adjusting the bottom bar let's just add on another function named `translateY()`  which allows us to adjust the y coordinate or vertical positioning for an element and let's just say `one pixel`. Let's save this and check out the browser 
   ```css
   &::after {
      transform: rotate(-45deg) scaleX(1.25) translateY(1px);
    }
  
(43.7)   
- So at this point we have our X. `Now we just need to hide the middle bar` 
   
   - so within our CSS `within our close-X modifier` rule
   ```css
   &__menu-icon--close-x { 
      &::before {
         transform: rotate(45deg) scaleX(1.25);
      }
       
      ////

      &::after {
         transform: rotate(-45deg) scaleX(1.25) translateY(1px);
       }
   }
   ``` 
   - let's `create a new rule that targets the middle bar` and in this instance `we are not going to begin with an ampersand` because that would use this selector as our base and our middle bar does not have close X in its name. 
   
   - So what we can do instead is just use a good old fashioned nested rule. So a dot to look for a class name and then we can just manually type out site header underscore underscore menu icon underscore underscore middle 
   `.site-header__menu-icon__middle {}`
   ```css
   &__menu-icon--close-x { 
      &::before {
         transform: rotate(45deg) scaleX(1.25);
      }
       
      .site-header__menu-icon__middle {

      }

      &::after {
         transform: rotate(-45deg) scaleX(1.25) translateY(1px);
       }
   }
   ``` 
   - and when we are trying to create the X shape. `Let's hide the middle bar by setting its opacity to zero.` 
   ```css
   &__menu-icon--close-x { 
      &::before {
         transform: rotate(45deg) scaleX(1.25);
      }
       
      .site-header__menu-icon__middle {
         opacity: 0;
      }

      &::after {
         transform: rotate(-45deg) scaleX(1.25) translateY(1px);
       }
   }
   ```  
   - Let's save this and check out the browser and `we now have an X icon.` If we tap it again it turns back into the three bar hamburger icon. 
   
(43.8)   
- However `we don't want to just abruptly switch between these two icons`. We want the shapes in the icons to animate and gradually transform and transition into the other shape 
   
   - and to make that happen. All we need to do is go into our CSX scroll up a bit to `find the baseline styles`, so within our original `menu-icon rule`. Here is the code for the top bar.
   ```CSS
   &__menu-icon {
      width: 20px;
      height: 19px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &::before {   ////
         content: " ";
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
         transform-origin: 0 0;
      }
   ``` 
   
   - Let's just give it a new property of `transition:` and say that it should gradually transition its `transform` property over the course of `300 milliseconds`. And let's use an `easy out` transition style. `transition: transform .3s ease-out;`
   ```CSS
   &__menu-icon {
      width: 20px;
      height: 19px;
      position: absolute;
      z-index: 10;
      top: 10px;
      right: 10px;

      &::before {
         content: " ";
         position: absolute;
         top: 0;
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
         transform-origin: 0 0;
         transition: transform .3s ease-out;
      }
   ``` 
   - Let's save this. And check out the browser. So now when we click on the icon `we see that at least the top bar is animating.` 
   
(43.9)   
- So now `we just need to apply the transition property to the other two bars` 
   
   - `on the middle bar`. We want to `transition` not the transform property but the `opacity` property over the course of `three hundred milliseconds`. Let's use the `easy out` transition style  `transition: opacity .3s ease-out;`
   ```CSS
   &__middle {            
         position: absolute;
         top: 8px;            
         left: 0;
         width: 20px;
         height: 3px;
         background-color: #FFF;
         transition: opacity .3s ease-out;
      }
   ``` 
   - and `for the bottom bar` we want to `transition` to `transform` property. `Point three seconds` `ease out`. 
   `transition: transform .3s ease-out;` Let's see how this looks. 
   ```css
   &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
      transform-origin: 0 100%;
      transition: transform .3s ease-out;
    }
   ```
   - That looks excellent. 
   
(43.10)   
- But I think we could make it look even better if when it transitions from the three bars into the x. `If the middle bar instead of just fading away with opacity. If it also shrunk from its full width down to zero width` 
   
   this effect that I have in mind might be hard to describe in words. But let me just write a bit of CSF so you can see it in action. 
   
   - So back in our text editor if we scroll down a bit `to the close-X modifier rules` within the code for the middle bar 
   
   - let's say `transform` and we want to shrink down its `width from 100 percent down to zero down to nothing`. So let's say `scaleX(0);` All right. 
   ```css
   .site-header__menu-icon__middle {
      opacity: 0;
      transform: scaleX(0);
    }
   ```
   - And then if we scroll back up `to the baseline rule` `for the middle bar` 
   
   - let's `change the transition line` so that instead of only transitioning the opacity property it transitions `all` properties. 
   ```css
   &__middle {
      position: absolute;
      top: 8px;
      left: 0;
      width: 20px;
      height: 3px;
      background-color: #FFF;
      transition: all .3s ease-out;  /////
    }
   ```
   - Now I think we can improve this even further because currently it's transform. Origin is its center so you can see that it's shrinking in from both the left and the right. And I think `it would look better if it only shrank in from the right` so that it was treating its left corner as the pivot point. 
   
   - So back in our code `within this baseline rule for the middle bar` let's set the `transform-origin` to be horizontally `zero`. So that's the left edge and vertically. Let's say `50 percent` which is the perfect center.
   `transform-origin: 0 50%;` 
   
   So let's save this. And now when we click the icon 
   
   - this is exactly what I had in mind. `The middle bar not only fades away with opacity but it also shrinks or retracts it into the left edge`. 
   
44. Revealing Elements on Scroll

(44.1)   
- In this lesson we will learn `how to reveal an element when it's been scrolled to`. 
     
   - This is a very popular effect that I'm sure you've seen on many Web sites before and believe it or not `it's pretty simple to set up`. All right. 
     
(44.2)   
- The first thing we should do is `create a new get branch for this functionality`. 
   
   - So let's `jump over to the command line` and 
   
   - before we create a new branch `let's first take care of the branch that we currently have checked out` which is the header branch 
   
   - in our previous lesson We completed the header of our website which means this branch is ready to be merged back into master 
   
   - before we perform the merge Let's check for any uncommitted changes so let's run `git status`. All right. 
   
   - So quite a few files have been changed since my last comment. All of these changes look good. They all look header related 
   
   - so I will add everything to my staging area. So `git add -A` All right. 
   
   - So if we run `git status` again all of the changes have been added to our staging area. 
   
   - We are now ready to commit this so we can just type `git commit -m 'completed desktop and mobile header styles'` And the quote push enter. 
   
   - And now if we run `git status` once again we see working directory clean. 
   
   - So at this point we can now jump back to our master branch so we can say `git checkout master` 
   
   - Now with the master branch checked out `if we look at the browser we see that none of our header changes are in place`. 
   
   - So we want to go ahead and merge the header branch into the master branch. So we simply type `git merge header` 
   
   - and now if we look at the browser we see that our master branch has been updated to include our header 
   
(44.3)   
- and this makes me think that now is a good time to `push our repo up to github` that way even if our computer blows up tonight we won't lose any of our website's progress. 
   
   - So over in the command line let's type `git` and what do we want to do. We want to `push` and where do we want to push our repo to. We want to push it to get hub which we've saved as a remote named `origin`. And just to be safe let's spell out which branch we want to push. `master` let's go ahead and press enter `git push origin master`
   
   - and now `if we pull up our github repo page` in a browser here` we see the latest commit completed desktop and mobile header styles`. 
   
     
(44.4)   
- We want to `create a new git branch for our Reveal on scroll feature` 
   
   - so to create a new branch Let's type `git checkout -b reveal-on-scroll` and then the name of the branch we want to create let's call it reveal on scroll. Let's press enter 
   
   - and now we've checked out a new branch. So we're good to go. 
   
  
(44.5)   
- let's `create a new module file` where we can write the javascript to bring this feature to life. 
   
   - So within our app Assets Scripts modules folder let's create a new file let's name this new file `RevealOnScroll.js` 
   
   - let's begin by creating a class and let's name the 
   `class RevealOnScroll {}`. 
   
   - Open up a pair of curly brackets and below this class let's add a line down here at the very bottom and let's go ahead and export this class. So `export default RevealOnScroll`
   ```js
   class RevealOnScroll {

   }

   export default RevealOnScroll ///

   ```
    
   - And before we forget let's `include or import this file within our main JavaScript file`. So within our app assets scripts folder let's open up `App.js` after the second line of code. Let's create a new line and say 
   `import RevealOnScroll from './modules/RevealOnScroll'`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll' ///

   let mobileMenu = new MobileMenu();

   if (module.hot) {
   module.hot.accept()
   }
   ```
(44.6)   
- Our next step is to `create an object that is a new instance of this class.` 
   
   - So down on a new line let's create an object and name it   `let revealOnScroll = new RevealOnScroll()` Notice we are beginning this with a lower case r and let's say that this equals a new instance of the reveal on scroll class or blueprint. 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll' 

   let revealOnScroll = new RevealOnScroll()   ////
   
   let mobileMenu = new MobileMenu();


   if (module.hot) {
   module.hot.accept()
   }
   ```
     
   - then jump back into our `RevealOnScroll.js` module. 
   
   - And within this class we know that we are going to need a constructor function. So let's say `constructor() {}` 
   ```js
   class RevealOnScroll {
      constructor() {  /////

      }
   }

   export default RevealOnScroll

   ```
   
   - and let's begin by selecting the elements that we want to reveal. So let's create a property within this object and name `this.itemsToReveal` 
   
   - And this property should equal or `point to the DOM elements that we want to reveal`. And just to refresh your memory the elements that we want to reveal are down here within `the our feature section`. These four items and each of these items has a class of `feature-item`. So back in the text editor our items to reveal properties should equal `this.itemsToReveal = document.querySelector()` 
   
   - `quotes` and then to select the class it's a `dot` and then feature-item 
   `this.itemsToReveal = document.querySelector(".feature-item")`  
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelector(".feature-item")  ////
      }
   }

   export default RevealOnScroll

   ```
   - however `querySelector will only select the first element that matches this. (feature-item)`
   
   - `If we want to select multiple elements` well we want to use a method named `querySelectorAll`. So right after the are here after selector just add in `All` just like this.
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  ////
      }
   }

   export default RevealOnScroll

   ``` 
(44.7)   
- So we've selected the elements that we want to reveal once they are scrolled to. But let me point out that `you can't reveal that which isn't hidden`. So our `first step is to actually go ahead and hide these elements initially`. 
   
   - So within our code `let's actually create a new method`. So `below the constructor function` let's create a method named `hideInitially() {}`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {

      }

   }

   export default RevealOnScroll

   ``` 
   - and let's `begin by referencing the property that points towards our elements`. So `this.itemsToReveal`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {
         this.itemsToReveal //
      }

   }

   export default RevealOnScroll

   ```  
   - however `this property is not a single dom element it's a collection of multiple elements`. So at the end of this line let's include a `.forEach()`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {
         this.itemsToReveal.forEach()  ///
      }

   }

   export default RevealOnScroll

   ```   
   - and then `within these parentheses` we can provide a function that will run once for each of the elements in this collection. `Let's start with a traditional anonymous functions` `function` `parentheses` `curly brackets`. Let's dropdown `within these parentheses`. Let's include a parameter of `el` This will stand for element. We could have chose any name. `function(el) {}`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {
         this.itemsToReveal.forEach(function(el) {
            
         })  ///
      }

   }

   export default RevealOnScroll

   ```   
   - And then `within the body of this function` we will just take that current element that's been looped to say `element dot class` list dot add and let's give the element a class of reveal dash item. `el.classList.add("reveal-item")`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {
         this.itemsToReveal.forEach(function(el) {
            el.classList.add("reveal-item")  ///
         })
      }

   }

   export default RevealOnScroll

   ```   
   - All right. Now this is a traditional anonymous function. `Let's turn it into an arrow function` So our code feels a bit cleaner 
   
   - to do that we can `get rid of the word function` and since we have exactly one parameter `we don't need the parentheses around this parameter` so we can get rid of this opening parentheses and this closing parentheses. All right. And now `after our parameter let's include the arrow symbol`. So that's equal sign greater than. And since our function only has one line `we can actually get rid of the whitespace so it sits on a single line` like this. And if you only have one statement in `your function you don't need the curly brackets` either. So we can get rid of this opening curly bracket here and also get rid of this closing curly bracket here. All right.
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")  
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }

   export default RevealOnScroll

   ```   
   - And `we want this method to run as soon as the page loads`. So `within our constructor function` let's actually call or run the method. So `this.hideInitially()` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()  
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }

   export default RevealOnScroll

   ```   
   let's go ahead and save this file 
   
(44.8)   
- and next let's `create a new CSS file` where we can setup the `styling for this new reveal item class` that should hide the elements. 
   
   - So `within our app assets style`s folder `within the modules` folder let's create a new file let's name this new file `_revealed-item.css` All right. 
   
   - And before we forget let's `jump in to our main styles.css file` and down at the bottom. Let's `import in the brand new CSS file`. So import go into the modules folder and look for the file underscore reveal item. 
   
   Let's save this and 
   
   - then `jump back into the new CSX fil`e and let's begin with a class selector. So `.reveal-item {}` and let's hide the element initially by setting its `opacity: 0;`
   ```css
   .reveal-item {
      opacity: 0;
   }

   ```
   - So if we go ahead and save this file and jump over to the browser `our four items are now hidden`. 
   
   - And while we still have our CSX file open why don't we go ahead and create the modifier class that we can add to the elements to reveal them. So within this rule let's create a new rule. Let's begin with the ampersand symbol which will give us dot reveal item. And then we can just add on a modifier Dash Dash is visible. `&--is-visible {}`
   
   - So within this class let's go ahead and set the opacity to 1 or fully visible. `opacity: 1;`
   ```css
   .reveal-item {
      opacity: 0;

      &--is-visible {
      opacity: 1;
    }
   }

   ``` 
   - And remember when we reveal an element we don't want it to go from completely hidden to completely revealed in one millisecond. We want it to gradually fade in so within the baseline rule. Let's set the transition and say that the opacity property should gradually change over the course of one and a half seconds. And let's use the ease out transition style. `transition: opacity 1.5s ease-out;`
   ```css
   .reveal-item {
      opacity: 0;
      transition: opacity 1.5s ease-out;

      &--is-visible {
      opacity: 1;
    }
   }

   ``` 
(44.9)   
- Now at this point we just need to `use javascript to programmatically add this is visible class to the hidden elements` at precisely the right moment when they're scrolled to. 
   
   - jump into our `Reveal on scroll JavaScript file` 
   
   - and let's begin listening for the scroll event in the browser. So below our constructor and above our height initially method let's create a new method named `events() {}`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()  
      }

      events() {

      }      //////

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }

   export default RevealOnScroll
   ```
   - And we know that we want our events method to fire right away. So within our constructor let's just be sure to call it. So `this.events()` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()       //////
      }

      events() {

      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }

   export default RevealOnScroll
   ```
   - Now in our events method let's begin listening on the window or the overall browser element so window dot and then let's add an event listener and the type of event that we want to listen for is a scroll event.
   `window.addEventListener("scroll")` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll")  ////
      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }

   export default RevealOnScroll
   ```
   - So whenever the user scrolls then still within these parentheses but after the quotes comma and let's include a function let's start with a simple arrow function. So empty set of parentheses. And then the equal greater than arrow symbol and then pair of curly brackets. Let's dropdown.
   `window.addEventListener("scroll", () => {})` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {

         })  ////
      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```
   - And now as we are scrolling we want to check to see if any of our four item to review elements have been scrolled to yet. 
   
   - So we'd want to run a calculation once for each of those items
   
   - So let's start working with those four items. This dot items to reveal dot and let's do something once for each of them. So dot for each 
   `this.itemsToReveal.forEach()`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach()      ///////
         })
      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```
   - within the parentheses let's give it an arrow function that just has exactly one parameter. So let's go the parameter name of `el` short for the current element we've looped to. And then the `arrow` symbol and then `curly brackets`
   `this.itemsToReveal.forEach(el => {})`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {})      ///////
         })
      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```
   - let's dropdown `inside these curly brackets` now instead of trying to calculate if the current element has been scrolled to right here. Well why don't we include that logic in a separate method and just call that method here. 
   
   - Let me show you what I mean. So let's pretend we have a method named calculate if scrolled to so let's call it this dot calculate if scrolled to parentheses to call it
   `this.calculateIfScrolledTo()` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo()  /////
            })      
         })
      }      

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```
   - and now within these parentheses let's pass it the current element that we've looped to. `this.calculateIfScrolledTo(el)`
   So now let's go `create a method with this matching name` maybe right above height initially 
   `calculate if scrolledTo() {}`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculate if scrolledTo() {   ///////

      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ``` 
   - within these parentheses let's received that incoming argument with a parameter. `(el)`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculate if scrolledTo(el) {   ///////

      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ``` 
   - And now in the body of this function try this out with me. Let's log a message to the console console dot log and we know that we can say E L to work with the current element and let's say dot get bounding client rect parentheses to call that. And then finally at the end of it say dot y. `console.log(el.getBoundingClientRect().y)`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculateIfScrolledTo(el) {
         console.log(el.getBoundingClientRect().y) ////
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ``` 
   - So this is a property that all modern web browsers make available to us. (`getBoundingClientRect()`) We will see firsthand what it does in just a couple of seconds. 
   
   - Let's go ahead and save this file and `jump into the browser` 
   
   - you can pull up your console and resize your window so you can see the console as you scroll but 
   
   - notice that as I begin scrolling we see all sorts of values being output to the console. 
   
   - So the question becomes what in the world does this get bounding client wrecked. And then it's why property. What in the world does that mean. What are these numbers that we're seeing. 
   
   - So to answer the question of what is this value what is get bounding client rect and then in particular the why property. 
   
   - Well it's a measure of how far the top edge of an element is from the top edge of the current bounding rectangle in this case the browser's viewport. 
   
   - So if I scrolled to where the top edge of this hidden element was perfectly hitting the edge of our viewport Well that would be zero. 
   
   - Now the value is measured in pixels. So if we just barely scroll to where the first item would be touching the bottom of the browser's viewport well then the value would be the height of our browser window in pixels. 
   
   - So with those numbers in mind we can now get a bit creative and come up with a solution. Let me show you what I have in mind. And again remember we want to reveal the items. Once you've scrolled to them a bit let's say maybe once the top of an item has been scrolled into the bottom 25 percent of our browser screen. 
   
   - Then we would want to slowly faded into view. Right. 
   
   - So back in our text editor within our calculate method let's get rid of this current line and start fresh. Let's create a variable and let's call it scroll percent and let's set it to equal. 
   
   - And then we're going to perform a bit of math. I'm going to open up with a bit of parentheses because I want what I'm going to place in here to happen first and then I want to multiply that by a hundred. OK. 
   `let scrollPercent = () * 100`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculateIfScrolledTo(el) {
         let scrollPercent = () * 100 ////
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```  
   - Now within these parentheses what I want to do is take that bounding rectangle number and then divide it by the height of the browser window. So let's do this within the parentheses we can say element dot get bounding client rect parentheses to call that and then after those parentheses dot y and then we want to divide that so forward slash divided by the web browsers height so window dot inner height. OK. 
   `let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculateIfScrolledTo(el) {
         let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100 ////
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```  
   - Now altogether this is going to give us how far into the browser viewport the element has been scrolled to. 

   - So let's do this right after our new line of code here. Let's drop down and say if parentheses curly brackets for our if condition let's say if scroll percent is less then and we can tweak this value later but for now let's just say seventy five. 
   
   - Only if that's the case then let's reveal the item. Let's make it visible. 
   
   - So el to work with the element and then let's say dot class list dot add and we give it a class of reveal item Dash Dash is visible. `if (scrollPercent < 75) {el.classList.add("reveal-item--is-visible")}`
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }

      events() {
         window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
               this.calculateIfScrolledTo(el)
            })      
         })
      }      

      calculateIfScrolledTo(el) {
         let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
         if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
         }
      }

      hideInitially() {
         this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
      }

   }
   
   export default RevealOnScroll
   ```  
   - And now I know web pack inserts the new javascript on the fly but `let's actually perform a refresh` because we don't want our old event handler still firing after you refresh. 
   
   - If we scroll down and scroll very slowly just so we can see this in action noticed that as the item crosses the 75 or depending on how you're looking at it the 25 percent threshold of our viewport it slowly fades into view. 


   45. Quick Note
   
   I have two quick notes:

   1) The code from our previous lesson will work in Chrome and Firefox, but `not the current version of Microsoft Edge.` In order to get things working with Edge, all you need to do is `find` the following bit of code:

   el.getBoundingClientRect().y
   
   And instead change it to:

   el.getBoundingClientRect().top
   
   Essentially, Edge doesn't have the y property but does have the top property.

   2) Shortly after filming this lesson I learned about a feature that only modern web browsers have named `Intersection Observer`. It would allow us to code this feature while using much less computing resources while scrolling. I'll work on using Intersection Observer in a future update to the lesson, but for now, it's not a deal breaker; please continue on and enjoy working on the remainder of this feature!


   46. Revealing Elements on Scroll (Part 2)

(46.1)   
- First `let's improve its performance`. Or in other words we want to use as little web browser or computer processing horsepower as possible. 
   
   - I want to begin by showing you an example of how our current code is super inefficient. 
   
   - So right now do this with me within your reveal on scroll dot J.S. file `within our events method`. 
   
   - When we add an event listener for scroll on the window object. 
   
   - Well we see this line ends with an opening curly bracket right below that lets drop down and create a brand new line and just say console dot log and let's log out a message that says scroll function ran. 
   `console.log("Scroll function ran")`
   ```js
   events() {
      window.addEventListener("scroll", () => {
         console.log("Scroll function ran")   ////
         this.itemsToReveal.forEach(el => {
            this.calculateIfScrolledTo(el)
         })      
      })
   ```
   
   - Let's go ahead and save this and then back in the browser. Be sure to perform a manual refresh. Now watch this as we begin scrolling in the browser's console we see that message scroll function ran. 
   
   - And this number next to it is how many times that message has appeared. So you can see as I scroll that number is just climbing. 
   
   - This means the web browser is calling our function for every single pixel We scroll. 
   
   - Now you might be thinking to yourself `Does this really matter`. Who cares. 
   
   - There are actually `several reasons` why we should care. 

   - The `Web site is really stressing the processor` in your device. 
   
   - In my opinion that `reflects poorly on a Web site` and a brand. `It makes it seem like the people who created the Web site don't know what they're doing`. 

   - as a programmer you are `always striving to write the most efficient well thought out code`. 

   - the `programmer that can write more efficient code` is going to save the company money. 
   
   - Big picture `it's just a good idea to get used to writing efficient code.` 
   
(46.2)   
- Now let's get into the how `how can we make this code more efficient.` 

   - instead of letting the web browser call our scroll function as many times as it wants to as we scroll `we want to throttle it so that it's only called maybe every 100 milliseconds as we scroll or every 200 milliseconds as we scroll.`

(46.3)   
- Now we could write our own throttle function that sets up that limitation but `there's already an industry standard we're going to use` a package from NPM named `lodash`. 

   - let's install loadash. So type this command in with me `npm install lowdash` 
   
   - this time around we do not need the --save-dev This is because loadash is not a package that makes our workflow or development process easier. Rather `it's a package that we actually want to send along to our visitors`. 
   
   -`It's an actual direct dependency of our application.` 

   - And then we can tell Webpack to begin running again. So NPM run Dev OK. 
   
   - And now back in our JavaScript file `RevealOnScroll.js` let's leverage lowdash up at the very top of this file. 
   
   - We are `interested in importing the throttle functionality` of lowdash. So let's do this. Let's say `import throttle` `from` and then inside these quotes we just say `lowdash` the name of the package. And then we don't need to import the entire load Ash library. We can just say `slash throttle`. 
   `import throttle from 'lodash/throttle'`
   ```js
   import throttle from 'lodash/throttle'

   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.events()  
      }
   ```
(46.4)   
- So now we have this function named throttle. That's very easy to leverage. `You just give it to arguments`. 
   
   - The first argument is `a function` that you want to run. 
   
   - The second argument is `how many milliseconds` you want to have to wait before that function can run again. 
   
   - Now we could absolutely go ahead and use the throttle function directly in our `addEventListener` call. Right. 

   - However I want to give our addEventListener a named function. 
   
   - My reasoning for this has nothing to do with throttle but has to do with a bit of performance savings we're going to set up later in the lesson. 

   - I want to be able to remove this listener completely and in order to do that we need this to be a named function that we can reference. 
   
(46.5)   
- So even though that has nothing directly to do with throttling let me show you `how I would set all of this up` 
   
   - `within our constructor` Right above this line where we call events. So right here I would `create a new property` you can name it anything but I'm going to name it `scrollThrottle` and say that it should `equal`.  `this.scrollThrottle =`
   ```js
   import throttle from 'lodash/throttle'

   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.scrollThrottle = ///
         this.events()  
      }
   ```
   - And then I'm going to use the lowdash `throttle()` tool and this method doesn't exist yet. But we will create it in just a moment. 
   ```js
   import throttle from 'lodash/throttle'

   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.scrollThrottle = throttle()///
         this.events()  
      }
   ```
   - So I'm going to say `this.calcCaller` that's the function I want to run `comma`. The second argument is how many milliseconds you want to wait before this can be called again. So I would say `200` milliseconds.`this.scrollThrottle = throttle(this.calcCaller, 200)`
   ```js
   import throttle from 'lodash/throttle'

   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200)///
         this.events()  
      }
   ```
   - So this way for every one second that the user scrolls the page we know that our function is only going to be called five times at the most 
   
   - at the very end of this line I will add `.bind` with the value of `(this)`.
   `this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)` 
   ```js
   import throttle from 'lodash/throttle'

   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)   ///
         this.events()  
      }
   ```
   - This will make sure that no matter how this function is called `the this keyword will still be pointing towards our overall object`. 
   
   - Now `within our events` area I want you to `cut and paste` these four lines of code here. So from console dot log and then these three lines that power our for each. So with these four lines highlighted go ahead and cut them into your clipboard 
   ```js
   events() {
      window.addEventListener("scroll", () => {
         console.log("Scroll function ran")   ////
         this.itemsToReveal.forEach(el => {   ////
            this.calculateIfScrolledTo(el)    ////
         })                                   //// 
      })
   ```
   - and let's `create a brand new method` with this name calc caller. So `right below events` or right above this calculator scroll to method create a brand new method named calc caller parentheses curly brackets. `calcCaller() {}`
   ```js
   calcCaller() {

   }
   ```
   - inside the curly brackets you can `paste in your clipboard` OK. 
   ```js
   calcCaller() {
      console.log("Scroll function ran") ///
      this.itemsToReveal.forEach(el => { ///
         this.calculateIfScrolledTo(el) ///
         })      
   }
   ```
   -And now `back in the events` method let's `get rid of this arrow function`. `() => {}`
   So this line of code `should look like this.`
   ```js
   events() {
      window.addEventListener("scroll", )
   } 
   ```
   - We're `adding an event listener to window` and we need to give it to arguments. We just have the one argument of scroll comma and now we're ready to give it the second argument. So this is where we will use our property named scroll throttle. We can say `this.scrollThrottle` 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
   } 
   ```
   - if the last couple of minutes didn't make perfect sense. That's OK. I think studying this line of code and working backwards will allow things to make sense 
   
   - essentially every time the browser detects a `scroll` event. It's going to call this function. (`this.scrollThrottle`) 
   
   - We set that up so that that function uses the lowdash `throttle` tool which is only going to allow this to run once every `200` milliseconds.
   ```js
   class RevealOnScroll {
   constructor() {
      this.itemsToReveal = document.querySelectorAll(".feature-item")
      this.hideInitially()
      this.scrollThrottle = throttle(this.calcCaller, 200).bind(this) /////
      this.events()  
   }
   ```   
   - And then remember we set up calcCaller to be the code that actually runs our calculations to see if the elements have been scrolled to yet. 
   ```js
   calcCaller() {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
         this.calculateIfScrolledTo(el)
         })      
   }

   ```
   - So let's go ahead and save this and then back in the browser. Let's perform a manual refresh So our old event handlers are gone and now 

   - for every one second that I scroll the function is only being called about five times. And if I scroll down to the hidden elements perfect. So our code is still working. 

(46.6)   
- but we can still do better. Let's set things up `so that once an item is revealed we don't continue to calculate if it should be revealed` any longer 

   - Let's `first add a console dot log line so that we can see when our calculation is actually running` 
   
   - back in our text editor. I want you to find the method that is named `calculateIfScrolledTo` 
   ```js
   calculateIfScrolledTo(el) {
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
      }
   }
   ```
   - within the body of this function. Let's just add a line and say `console.log("Element was calculated")` Let's go ahead and save 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated") ///
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
      }
   }
   ```
   - and then be sure to manually refresh in the browser and you'll notice that even once I scroll and reveal all of my items if I continue to scroll in the console 
   
   - you can see that that message keeps appearing 
   
   - So for performance reasons once we've revealed an item we don't need to continue to calculate for it so `let me show you how I would set things up.` 
   
   - Back in our text editor I want you to scroll down and find our `hideInitially()` method. 
   ```js
   hideInitially() {
      this.itemsToReveal.forEach(el => el.classList.add("reveal-item"))
   }
   ```
   - We've already written a bit of code that loops through the collection of items. And for each item it adds a class. 
   
   - Well if we're already doing something once for each item why don't we create a property on each item named is revealed. And by default it's set to false. 
   
   - But then once we actually calculate that it should be visible we can set it to true. That way we can set up an if statement so that we only bother calculating an item if it hasn't already been revealed. 
   
   - Let me show you what I mean. Let's `adjust our arrow function down here to have curly brackets so we can have more than one statement`. 
   
   - So right after the arrow symbol we can `add an opening curly bracket here and dropdown` 
   ```js
   hideInitially() {
      this.itemsToReveal.forEach(el => {
         el.classList.add("reveal-item"))
   }
   ```
   - and then in between these two closing parentheses here we can add a closing curly bracket right before that closing curly bracket we can drop to a new line. OK. 
   ```js
   hideInitially() {
      this.itemsToReveal.forEach(el => {
         el.classList.add("reveal-item")

         })
   }
   ```
   - Now within the body of this function or within these curly brackets after this line of code let's `add a new line` and we can just say the current element that's been looped to  (`el`) and `Dot` Let's add a new property to it named `isRevealed = false` just by default Set it to false. OK. 
   ```js
   hideInitially() {
      this.itemsToReveal.forEach(el => {
         el.classList.add("reveal-item")
         el.isRevealed = false ///
         })
   }
   ```
   - Now up in this function `calculateIfScrolledTo` 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
      }
   }
   ```
   - `if` this is true and we add the class that makes it visible. Well then `we can also just set that property to True`. So `el.isRevealed = true` OK. 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
          el.isRevealed = true ///
      }
   }
   ```
   - Now let's scroll `up to our calcCaller()` method 
   ```js
   calcCaller() {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
         this.calculateIfScrolledTo(el)
         })      
   }
   ```
   - and `within this forEach` we have this line that calls the calculation method. And this is going to run once for each element in the collection. 
   
   - So just select this line and let's cut it into our clipboard 
   ```js
   calcCaller() {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
         //////
         })      
   }
   ```
   - and we're essentially wrapping it in an if statement. So say `if parentheses curly brackets` 
   ```js
   calcCaller() {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
         if () { /////

         }   
      })      
   }
   ```
   - for the condition say if the current element (`el`) if it's property of `isRevealed` `double equal sign` to check for equality. Only if it equals `false`. Only if that's the case then inside the if curly brackets `just paste back in your clipboard`. 
   `if (el.isRevealed == false) {this.calculateIfScrolledTo(el)}`
   ```js
   calcCaller() {
      console.log("Scroll function ran")
      this.itemsToReveal.forEach(el => {
         if (el.isRevealed == false) {  ////
         this.calculateIfScrolledTo(el)  /////
         }
      })
   }
   ```
   - Now you might be thinking `Did we really need this is revealed property` couldn't we have just checked to see if it didn't have the CSS class that makes it revealed. 
   
   - Well yes absolutely we could have done that instead. But I'm quite certain that `checking if a single value is true or false is going to be a good deal faster` than seeing if an array of CSS classes contains a certain string match or not. 
   
   - Anyways let's go ahead and save this and back in the browser. Be sure to perform a manual refresh. So all of your old event listeners are gone. 
   
   - Now as I scroll down you'll see this element was calculated message keeps appearing. But once I scroll down so that all of them have been revealed. Now when I continue to scroll we no longer see element was calculated. `We only see our generic scroll function Ran` perfect. 
   
(46.7)   
- So now let's take things one step further. `Once the final item` that needs to be revealed has been revealed. Let's `completely remove the scroll event listener`. 
   
   - So back in the text editor `first we need to be able to determine once every single item has been revealed.` 
   
   - There are a hundred different ways you could set this up. But` here's what I'm going to do` 
   
   - within our `hideInitially()` method `after this for each loop`. So right after this closing parentheses here I would drop down and say `this.itemsToReveal`. 
    ```js
   hideInitially() {
      this.itemsToReveal.forEach(el => {
         el.classList.add("reveal-item")
         el.isRevealed = false 
         })
         this.itemsToReveal  ///
   }
   ```
   - So this will give me the collection of items. 
   
   - And then if we use `square brackets` we can select a particular element from this collection. So we want the very last or final element in the collection. So we could put a number here but we don't want a hard code this to a number. So instead what we can do is grab the overall length of this collection. So `this.itemsToReveal.length` so length will be a count of how many items are in the collection. 
   
   - And then just `subtract one` because arrays are zero based. So this will give us the final item in the collection. 
    ```js
   hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item")
      el.isRevealed = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true  ///
  }
   ```
   - Once we've got that element we can just tack on and add a property to it named `.isLastItem = true` and set it to true. OK. 
   
   - Now up within our `calculateIfScrolledTo` method 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
         el.isRevealed = true
           ///
      }
   }
   ```
   - if we've calculated an item should be revealed. Well then after this line but still within the curly brackets from the if we can `dropdown` and let's set up another if statement so `if parentheses curly brackets` 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
         el.isRevealed = true
         if () {  ///

         }
      }
   }
   ```
   - for the if condition if the current element dot is. Last item `if (el.isLastItem) {` 
   
   - only if that's true then we would want to remove the scroll event listener. So the overall browser `window` object and instead of add event listener we can use `removeEventListener` So the type of event we're trying to remove is `scroll` `comma` 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
         el.isRevealed = true
         if (el.isLastItem) {                     ////
            window.removeEventListener("scroll", ) ///
         }
      }
   }
   ```
   - and this is why earlier we gave `addEventListener` a named function that we can point towards or reference because we want to reference it again to remove it. 
   
   - So it was `this.scrollThrottle`. 
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
         el.isRevealed = true
         if (el.isLastItem) {
            window.removeEventListener("scroll", this.scrollThrottle) ///
         }
      }
   }
   ```
   - Let's give this a save. Back in the browser manually refresh. 
   
   So as I scroll we are seeing both element was calculated and scroll function ran but as soon as I reveal all of the items. 
   
   - Now when I continue to scroll `we don't see anything in the console.` You can prove this by maybe selecting a few. And then if I continue to scroll in the browser console doesn't change. Perfect. 
   
   - That's going to bring this video but not this lesson to a close 
  
  

47. Revealing Elements on Scroll (Part 3)

(47.1)   
- `let's set things up so that if you're nowhere near an item that needs to be revealed.` So if I'm way up at the top of the page here and an item that needs to be revealed if it's top edge has not even crossed the bottom edge of the browser's viewport yet. `Well if that hasn't happened yet then let's not bother wasting resources calculating anything else.` 

   - Back in our text editor. Find your `calculateIfScrolledTo` method.
   ```js
   calculateIfScrolledTo(el) {
      console.log("Element was calculated")
      let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
      if (scrollPercent < 75) {
         el.classList.add("reveal-item--is-visible")
         el.isRevealed = true
         if (el.isLastItem) {
            window.removeEventListener("scroll", this.scrollThrottle)
         }
      }
   }
   ``` 
   
   - And I want you to `select or highlight the entire contents of this method.` I want us to go ahead and cut this into our clipboard. So right `now we've just got a completely empty calculateIfScrolledTo method` 
   ```js
   calculateIfScrolledTo(el) {
      
   }
   ``` 
   - and `in the body of it`. Let's set up an if statement. So if parentheses curly brackets `if () {}`
   
   - for the condition let's say only if `window.scrollY`, So this is measured in pixels and it's how far down you've scrolled from the very top of the page. Only if that `plus` `window.innerHeight`. Only if these two combined are `greater than` the current elements top edge and we're talking about its top edge not in relation to the viewport but in relation to the total page height. So we would not use get bounding client rect here. Instead we can just say `el.offsetTop`. 
   ```js
   calculateIfScrolledTo(el) {
      if (window.scrollY + window.innerHeight > el.offsetTop) {

      }
   }
   ``` 
   So only if this is true `then in the if curly brackets` just `paste back in your clipboard` OK. 
   ```js
   calculateIfScrolledTo(el) {
      if (window.scrollY + window.innerHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y /     window.innerHeight) * 100
         if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ``` 
   - Let's go ahead and save this and then back in the browser. Be sure to manually refresh 
   
   - now notice as I'm scrolling. We do see scroll function ran but we don't see any element was calculated messages. 
   
   - However once we scroll to the point where the top edge of an element has crossed the very bottom threshold of the browser but is not up high enough to actually be revealed yet. 
   
   - Well `once that happens then you can see we are calculating if it should be revealed or not`. Right. We see these element was calculated messages so we can continue to scroll until it's revealed perfect 
   
(47.2)   
- at this point `we only have one more efficiency improvement` that I want to make back in our text editor. I want to draw your attention to `window.innerHeight` so this measures the height of the current browser viewport in pixels at this point. `Not only are we using it twice within this function` but remember `this function runs every time we calculate an individual item.` 
   
   - Instead `we can save its answer in memory with one of our own properties`. So here's what I would do 
   
   - up at the very top of our file `within our constructor`. I would just `add a new line` 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         ///
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
         this.events()  
      }
   ```
   - let's say `this.browserHeight` and I would just set it to `equal` `window.innerHeight`. 
   ```js
   class RevealOnScroll {
      constructor() {
         this.itemsToReveal = document.querySelectorAll(".feature-item")
         this.browserHeight = window.innerHeight  /////
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
         this.events()  
      }
   ```
   - Now `down in our calculateIfScrolledTo` we can just reference our property here. (this.browserHeight) 
   
   - This way we're not continually asking the browser or the DOM for that extra little bit of information 
   
   - so back down in `calculateIfScrolledTo`. 
   ```js
   calculateIfScrolledTo(el) {       //V//
      if (window.scrollY + window.innerHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y /     window.innerHeight) * 100
         if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ```
   - Let's `replace this first instance` of `window.innerHeight` instead with `this.browserHeight` 
   ```js
   calculateIfScrolledTo(el) {        //V//
      if (window.scrollY + this.browserHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y /     window.innerHeight) * 100
         if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ```
   - And `then here as well` let's `replace` `window.innerHeight` with `this.browserHeight` 
   ```js
   calculateIfScrolledTo(el) {        
      if (window.scrollY + this.browserHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y /     this.browserHeight) * 100   /////
         if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ```
   - Let's go ahead and save this. I will refresh in the browser let's test to make sure things are still working. 

(47.2)   
- However now that we're not asking the browser for its height in real time if I refresh and then make the browser window a lot shorter `you'll notice that our calculations should be off` yes see other items are already revealed 
   
   - `we can easily get around this issue.` 
   
   - Let me show you what I would do `within our events` method. 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
   }      
   ```
   - Let's just `set up a new event that listens for when the browser window gets resized.` So after this line within our events method I would just say `window.addEventListener` type of event that we're listening for is `resize` `comma`. 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", ) ///
   }      
   ```
   - Now we could include an anonymous or arrow function right here. However I do want to let you know that `as you resize your web browser window your web browser is not very efficient about it.` 
   
   - It's going to fire this resize event many many times every web browser is slightly different but it seems like it almost calls it every pixel or every few milliseconds as you're dragging and resizing. 
   
   - This is not what we want right. `We really only need to update our browser height value at the end of your resizing action.` Just that one time. 
   
(47.3)   
- So luckily `loaddash can save the day here`. 
   
   - Now instead of using throttle `we're going to use a loadAsh tool` named `debounce` up at the very top of our file. Do this with me say `import debounce from 'lodash/debounce'` 
   ```js
   import throttle from 'lodash/throttle'
   import debounce from 'lodash/debounce' ///
   ```
   - So `what in the world is debounce`. It's similar to throttle but there's an important difference. 
   
   - when we are resizing the browser window we don't need to do anything during the middle of this action. `We only need to do something once after we've finally stopped resizing` so that's what `debounce` lets us do. 
   
   - We can give it a value maybe 200 milliseconds or 300 milliseconds and `the browser is only going to call our function once After that many milliseconds have passed from your last iteration` of performing that. 

   - So `within our events` method for resize for the second argument let's just say `debounce()` parentheses to call it. 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce()) ///
   }      
   ```
   - We're gonna give it to arguments for the first argument let's give it `an arrow function` so parentheses arrow symbol curly brackets `debounce(() => {})` let's drop down
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce(() => {

      }))
   }      
   ```
   - just as a test we can say `console.log("Resize just ran")`. So that's just for testing purposes. 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce(() => {
         console.log("Resize just ran")
      }))
   }      
   ```
   - What we actually want to do is babysit `this.browserHeight` property so we can just say this dot browser height equals and we just want to update it so we can grab window dot inner height. `this.browserHeight = window.innerHeight`
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce(() => {
         console.log("Resize just ran")
         this.browserHeight = window.innerHeight
      }))
   }      
   ```
   - Now This is important, `after this closing curly bracket` here for our arrow function we need to `add a comma` right because we want to give the balance a second argument. 
    
   - `This is how many milliseconds we want to wait.` Totally up to you. But why don't we wait. `333 milliseconds`. 
    ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce(() => {
         console.log("Resize just ran")
         this.browserHeight = window.innerHeight
      }, 333))
   }      
   ```
   So let's go ahead and save this. 
   
   - And now back in the browser I will refresh. 

   - if I stopped resizing for only 50 milliseconds nothing would happen but if I actually stopped resizing and then wait three hundred and thirty three milliseconds `perfect` 

   
(47.4)   
- want to mention that `technically we could improve the efficiency of our Reveal feature even further by storing our elements top offset in memory` right. 
   
   - However `we would need to do quite a bit of babysitting of those values.` 

   - So yes you could improve performance even further. `The idea is anytime you can avoid asking the browser for fresh data that's a performance win`. 
   
   - `But in this case I think that would require a lot of attention to detail` to make sure that the offsets were always updated and correct. 

(47.5)   
- At this point let's go ahead and `make our review module recyclable and apply it to these testimonials as well`. 

   - Let me show you how I would set that up. 
   
   - So back in our text editor. Currently we are in our Reveal on scroll file but I want you to `jump into our main App.j file`. 

   - So this is where we import the `RevealOnScroll` class and `then we've created a new instance of it`. 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'///

   let revealOnScroll = new RevealOnScroll()///

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - Well `let's actually create two new instances`. You could make a new variable names but in this case `we don't need to store this in a variable` so we can` get rid of the equal sign` and `the left hand side` like this. 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'

   new RevealOnScroll()   ///

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - So let's create one new instance of the reveal on scroll class and in these parentheses. `Let's give it a dom selector`. 
   
   - Let's give it a selector that selects `these feature items` 
   
   - and then we can create another new instance of that same class and give it a selector that `selects these (testimonials)`
   
   -` Then` we just need to go into the class and `make it flexible`. 

   - So within these parentheses I would say `document` `dot` `query` `selector All` quotes and then select the class. So a `dot of feature-item`. Okay. `document.querySelectorAll(".feature-item")`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'

   new RevealOnScroll(document.querySelectorAll(".feature-item"))   ///

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - And then let's just `copy and paste and duplicate this line of code`. And then on this copy we want the CSS selector that would grab these three testimonial boxes. So just change the selector to dot `.testimonial`. Okay 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'

   new RevealOnScroll(document.querySelectorAll(".feature-item"))   ///
   new RevealOnScroll(document.querySelectorAll(".testimonial"))   ///

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - now we just need to `go into our RevealOnScroll.js` module and `in the constructor` 
   ```js
   class RevealOnScroll {
   constructor() { ////
      this.itemsToReveal = document.querySelectorAll(".feature-item") ///
      this.browserHeight = window.innerHeight
      this.hideInitially()
      this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
      this.events()  
   }
   ```
   - constructor has parentheses where we can have a parameter to receive that incoming argument we can name our parameter anything but let's name it `els` `short for elements`. 
   
   - Okay `then our first line in the constructor itemsToReveal` `instead of setting this to equal a selector`. This is where we would just set it to equal that parameter. The incoming argument value (`els`)
   ```js
   class RevealOnScroll {
   constructor(els) { ////
      this.itemsToReveal = els ///
      this.browserHeight = window.innerHeight
      this.hideInitially()
      this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
      this.events()  
   }
   ```
   - let's go ahead and `save` this and then back in the browser `our feature still work` and `now the testimonials work` 


(47.6)   
- Let's set things up so that back `in App.js` you could give `1 threshold number to feature item` and `then another threshold for testimonials.` 
   
   - So on this first line for feature items in between the two closing parentheses you can `add a comma` 
   
   - and we can just have `a second argument`. So let's say `for feature items` we want it to be `75` 
   
   - but `for testimonials` maybe we want it to be `60`. 
   ```js
    new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   ```
   - Let's save this and then back in `RevealOnScrol.js` up `in the constructor`. We can just `add a second parameter` so `comma` after els and then let's call it `thresholdPercent` OK. 
   ```js
   class RevealOnScroll {
      constructor(els, thresholdPercent) { ///
         this.itemsToReveal = els
         this.browserHeight = window.innerHeight
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
         this.events()
      }
   ```
   - Then within the body of the constructor let's save that as a property. `this.thresholdPercent = thresholdPercent` Okay. 
   ```js
   class RevealOnScroll {
      constructor(els, thresholdPercent) {
         this.thresholdPercent = thresholdPercent
         this.itemsToReveal = els
         this.browserHeight = window.innerHeight
         this.hideInitially()
         this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
         this.events()
      }
   ```
   - And then down `within` our `calculateIfScrolledTo(el)` method 
   ```js
   calculateIfScrolledTo(el) {        
      if (window.scrollY + this.browserHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
         if (scrollPercent < 75) {   ///
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ```
  - just `remove` the hardcoded `75` with `this.thresholdPercent` 
   ```js
   calculateIfScrolledTo(el) {        
      if (window.scrollY + this.browserHeight > el.offsetTop) {
         console.log("Element was calculated")
         let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
         if (scrollPercent < this.thresholdPercent) {   ////
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true
            if (el.isLastItem) {
               window.removeEventListener("scroll", this.scrollThrottle)
            }
         }
      }
   }
   ```
   - let's save this. I will perform a manual refresh. Okay. So now the feature item should still fade in at the same time as before but testimonials should wait a little bit longer as you scroll to become visible. `Cool.` 
   
   - Hopefully at this point if we jump back into app dot J.S. you can see the benefit of creating a reusable class a blueprint. It allows you to set up your logic and functionality once but then you can leverage it multiple times and in different ways in different situations. Cool. 

(47.7)   
- `I do want to add one CSS effect.` So instead of just fading in the opacity `I think it would be cool if the elements sort of zoomed in or zoomed out` right. If they sort of changed their size or scale as they faded into view. 
   
   - All we need to do is `jump into` our CSS file that is named `_revealed-item.CSS` 
   ```css
   .reveal-item {
      opacity: 0;
      transition: opacity 1.5s ease-out;

      &--is-visible {
         opacity: 1;
      }
   }
   ```
   - and `within the baseline` styles here lets `add a new property` named transform and say that the scale should be 1 point 1 5 by default. 
   `transform: scale(1.15);`
   ```css
   .reveal-item {
      opacity: 0;
      transition: opacity 1.5s ease-out;
      transform: scale(1.15);

      &--is-visible {
         opacity: 1;
      }
   }
   ```
   - But then once an element is visible we can set it back to its natural size of just one transform scale 1 ` transform: scale(1);`
   ```css
   .reveal-item {
      opacity: 0;
      transition: opacity 1.5s ease-out;
      transform: scale(1.15);

      &--is-visible {
         opacity: 1;
         transform: scale(1);
      }
   }
   ```
   - and then `to make sure that that value actually animates` or transitions on this line we can just `add a comma` before the ending semicolon and say we also want to transition v transform property over the course of one and a half seconds and E's apt cool
   `, transform 1.5s ease-out;`
   ```css
   .reveal-item {
      opacity: 0;
      transition: opacity 1.5s ease-out, transform 1.5s ease-out;
      transform: scale(1.15);

      &--is-visible {
         opacity: 1;
         transform: scale(1);
      }
   }
   ``` 
  
   - `Notice how they start out a bit larger and then they sort of zoom out into view. I think that looks nice `


### Section 16: Desktop Sticky Header

48. Desktop Sticky Header (Part 1)

- But before we dive into that let's `first take care of our get repository.` 
   
   - So over in the command line we see that we currently have a branch named `reveal-on-scroll` checked out. 
   
   - And in our previous lesson we completed this branch's functionality. 
   
   - So let's `go ahead and commit` any recent changes and then merge this branch back into master. 
   
   - So let's run a `git status` to see what has changed recently. All of these changes look good. 
   
   They all look related to the reveal on scroll functionality. 
   
   - So I'm going to add everything to my staging area `git add -A`. All right. 
   
   - And now we can commit that staging area. So `git commit -m 'completed the reveal on scroll behavior.`' All right. So we've saved and committed our changes. 
   
   - Now we can switch back to our master branch `git checkout master`. 
   
   And now we just want to merge the reveal on scroll branch back into the master branch. So we just say `git merge reveal-on-scroll` all right. 
   
   - So at this point `our master branch has our latest code`. 
   
   - So now we want to create a new branch off of it where we can work on the desktop sticky header features. So to create a new branch let's say `git checkout -b sticky-header` All right. 
   
(48.2)   
- So in this lesson `we want to make this top header sticky for larger screens`. 

   - let's open up app assets styles modules and let's `jump into the _site-header.CSS` file 
   
   - so here we see that we already have `a media query targeting screens that are at least medium or larger`. 
   
   - So `within this media query` let's just say `position: fixed;`. This will lock the element to the top of the screen even as we scroll.
   ```css
   .site-header {
      padding: 10px 0;
      position: absolute;
      width: 100%;
      z-index: 2;
      transition: background-color .3s ease-out;

      &--is-expanded {
         background-color: rgba($mainBlue, .55);
      }
      
      @mixin atMedium {
         position: fixed;                       /////
         background-color: rgba($mainBlue, .3);
      }
   ``` 
   -So let's save this and test it out in the browser. `So now even as we scroll we see that our header stays locked to the top` 
   
(48.3)   
- once we scroll down a bit and it's overlapping a white background `the header bar is just too transparent it's too light and it's making these links really difficult to read.` 
   
   - So what I think we should do is let the header bar use that transparent light blue color when we are scrolled to the very top of the page. But `once we've scrolled down a bit maybe this far let's transition and fade the headers background color to use a much darker less transparent blue.` 
   
(48.4)   
- Now in order to modify the page on the fly like that `we are going to need to use javascript.` So let's jump over to our text editor and `create a new javascript module` file. 
   
   - So within app assets scripts modules let's create a new file let's name this new file `StickyHeader.js` 
   
   - let's begin with a class and let's name it `class StickyHeader {}` 
   
   - and then down below this class we know that we need to export this so we can use it in another file so let's say `export default StickyHeader` 
   ```js
   class StickyHeader {

   }

   export default StickyHeader
   ```
   - let's go ahead and save this file and before we forget `let's include it or import it within our main app J.S.` file so `within` our scripts folder here is `App.js` let's go ahead and import that new file so let's drop down to a new line and say `import StickyHeader from './modules/StickyHeader'` All right. 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader' ///
   ```
     
   - Now we just need to create a new instance of that class. So down here let's drop down to a new line. Let's create a new variable and name it sticky header. This instance of the class or this variable this object will begin with a lowercase s and we will say that it equals a new instance of the sticky header class.`let stickyHeader = new StickyHeader()`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   let stickyHeader = new StickyHeader()   ////
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   ```
   - Let's save this file and then `jump back into our new StickyHeader module` 
   
(48.5)   
- so within our class we know that `we are going to need a constructor function`. So let's say `constructor() {}` 
   ```js
   class StickyHeader {
      constructor() {  ////
         
      }
   }

   export default StickyHeader
   ```
   - and let's stop for a second to `think about what we actually need to do`. 
   
   - So back in the browser `once we scroll down about this far we want to target the site header and give it a modifier. Class that makes it darker`. 
   
(48.6)   
- So why don't `we begin by creating a property that points towards the site header DOM element`. 
   
   - So back in our constructor function let's say this dot and let's name the property site header and let's set that to equal document dot query selector and it has a class. So a dot of site dash header. All right. 
   `this.siteHeader = document.querySelector(".site-header")`
   ```js
   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header") ///
      }
   }

   export default StickyHeader
   ```
(48.7)   
- Now let's ask ourselves `how are we going to add a modifier class to this element at precisely the right moment`. 

   - Well `we can just listen to the web browser scroll event` and once the user has scrolled down let's say about 60 pixels from the top. 
   
   - Well `at that point we can add the dark modifier class to the heade`r and then `if they ever scroll back up so that they are less than 60 pixels scrolled from the top we can remove that dark modifier class`. 
   
   - `Let me show you how we would do that.` 
   
(48.8)   
- So `below our constructor` but still within our class `let's create a method` named `events() {}` 
   
   - and up `in our constructor` let's be sure to `call the events method` right away. So `this.events()` OK. 
   ```js
   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events() ////2
      }

      events() { ////1

      }
   }

   export default StickyHeader
   ```
   - Now` within our events` method let's `target the overall window browser object` and we want to `add an event listener`. So dot add event listener type of event we want to listen for is a `scroll event` after the quotes we include a `comma` and then this is a function that should run in response to this event. `window.addEventListener("scroll", )`
   ```js
   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", ) ///
      }
   }

   export default StickyHeader
   ```
   - But as we've learned we should care about performance or efficiency. 
   
   - Remember that as we scroll the web browser is going to call the scroll event many many times. 
   
   - So why don't we use the load Ash throttle tool here because - we don't need to know the browser scroll position every millisecond or after every single pixel that's scrolled. 
   
   - We really only need to know its value maybe every 200 milliseconds 
   
   - so `up at the very top of this file`. Let's `import in the loadash throttle feature` so let's say import throttle from quotes and we want to use the low dash package and then look inside it just for the throttle tool. OK. 
   ```js
   import throttle from 'lodash/throttle' ////

   class StickyHeader {
   constructor() {
      this.siteHeader = document.querySelector(".site-header")
      this.events()
   }
   ```
   - Now `for the second argument here after this comma` we can just say throttle parentheses
    `window.addEventListener("scroll", throttle())`
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle()) ///
      }
   }

   export default StickyHeader
   ```
   - `inside those parentheses` first we give it a function let's actually give it `an arrow function` so that the this keyword doesn't change. So another set of `parentheses` after that an `arrow symbol` so equal saying greater than and then we haven't created this method yet but let's imagine that we have a method named `this.runOnScroll` so to call it you would just say this dot run on scroll in `parentheses` to call that method. OK. 
      `window.addEventListener("scroll", throttle(() => this.runOnScroll()))`
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll())) ///
      }
   }

   export default StickyHeader
   ```
   - Now `after that most recent set of parentheses` add a `comma` and then the second argument is how many milliseconds we want to wait before this function can be called again. I'm going to go with `200` milliseconds OK. 
    `window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))`
    ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200)) ///
      }
   }

   export default StickyHeader
   ```
   - Now we'd better go ahead and `create a method with this matching name` `runOnScroll`, so right `below the events` method let's say `runOnScroll() {}` 
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
      }

      runOnScroll() {  ///

      }
   }

   export default StickyHeader
   ```
   - and let's just set up `an if statement` that checks to see if the user has scrolled down `60 pixels` or not so we can say `if () {}` 
   
   - right after the closing curly bracket for the if let's `also add in else block` so `else {}`. 
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
      }

      runOnScroll() { 
         if () {  ///

         } else {  ///

         }
      }
   }

   export default StickyHeader
   ```
   - And `for the if condition` we can just say if `window.scrollY`  this is a property that the browser makes available to us. It's how many pixels you've scrolled down from the very top 
   
   - so we can just say if that value is `greater than` and I'm just choosing this number you can tweak this number a bit but I'm going to say `60 pixels`  
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
      }

      runOnScroll() { 
         if (window.scrollY > 60) { ///
              
         } else {

         }
      }
   }

   export default StickyHeader
   ```
   - If they've scroll down that far or farther `than we would want to add the CSS modifier class that makes this top bar a darker or less see through shade of blue.` 
   
   - So `this.siteHeader.classList.add` and let's give it a modifier. Class `"site-header--dark"`. OK. 
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
      }

      runOnScroll() { 
         if (window.scrollY > 60) {  
            this.siteHeader.classList.add("site-header--dark")  ///  
         } else {

         }
      }
   }

   export default StickyHeader
   ```
   - And then `for the else block` if the user has scrolled and the number is not larger than 60 we would want to do the opposite of this. Right. 
   
   - We would want to remove the dark modifier class so to save some typing we can just copy this line into our clipboard and then in the else block pasted in and just change add here to instead be remove. 
   `this.siteHeader.classList.remove("site-header--dark")`
   Let's go ahead and save this file. 
   ```js
   import throttle from 'lodash/throttle'

   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }

      events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
      }

      runOnScroll() { 
         if (window.scrollY > 60) {  
            this.siteHeader.classList.add("site-header--dark") 
         } else {
            this.siteHeader.classList.remove("site-header--dark") ///
         }
      }
   }

   export default StickyHeader
   ```
     
(48.9)   
- hop into our CSC and `create a new rule that targets are dark modifier class`. 
   
   - So back `within _site-header.css` within this media query that targets medium screens and larger. `@mixin atMedium {`
   Let's create a new rule. 
   
   - Let's use the ampersand symbol which will give us dot site header and then let's add dash dash. Dark. `&--dark {` 
   
   - And from here it's as simple as adjusting the `background color`. `Let's use rgba`. So it's still a little bit transparent and instead of using our main blue color I'm actually going to use a darker blue. So let's try 23 for the Red 51 for the green seventy two for the blue and let's try. Eighty five percent transparency.
   `background-color: rgba(23, 51, 72, .85);` 
   ```css
   @mixin atMedium {
      position: fixed;
      background-color: rgba($mainBlue, .3);

      &--dark {
         background-color: rgba(23, 51, 72, .85);
      }
   }
   ```
   - Let's save this file and jump over to the browser and if we start scrolling down `perfect we see that the header transitions to the darker background.` But `if we scroll back up the header reverts to its normal style.` Perfect. 
   
  
(48.10)   
- I think it would look nice if `when the dark header is being used if we also shrunk this top left logo to be small enough so that it could fit within the header bar that way as we scroll down the page the logo isn't using up any precious real estate.` 
   
  -  Now all we need to do to make this happen is to jump back to our text editor and `hop into our _site-header CSS file` and we are looking for `the logo rule.` 
   
   -So if we scroll down a bit here is the logo rule and we already have a `media query that's only targeting screens that are medium or larger`. 
   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mainBlue;
      padding: 13px 29px;
      
      @mixin atMedium {   ///
         left: auto;
         transform: translateX(0);
         padding: 25px 36px;
      }
   }
   ```
   - So `within this media query` let's create a new rule. Let's target the site header class when it's using the dark modifier out of space to create a descendant selector and then just use the ampersand symbol which will give us the selector for the logo element. `.site-header--dark & {}`
   So this selector will `target the logo only when the dark header is being used`. 
   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mainBlue;
      padding: 13px 29px;
      
      @mixin atMedium { 
         left: auto;
         transform: translateX(0);
         padding: 25px 36px;

         .site-header--dark & { ///
         
         }
      }
   }
   ```
   
   - So let's open up curly brackets and let's shrink the element by using the `transform` property and then using the `scale` function. So if one is the elements natural size let's try. `Point five seven`. 
   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) scale(.8);
      transform-origin: 50% 0;
      background-color: $mainBlue;
      padding: 25px 36px;
      
      @mixin atMedium { 
         left: auto;
         transform: translateX(0);
         

         .site-header--dark & { 
            transform: scale(.57); ///
         }
      }
   }
   ```
   - Let's go ahead and save this file and check out the browser. So if I scroll down a bit cool you can see the logo shrinks but it's `just a little bit too tall.` It would be nice if it vertically fit within the blue bar. So let's reduce that a bit instead of point five seven `let's try. Point five six` still doesn't fit perfectly. 
   
   - `Let's try reducing it down to point five five` 
   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) scale(.8);
      transform-origin: 50% 0;
      background-color: $mainBlue;
      padding: 25px 36px;
      
      @mixin atMedium { 
         left: auto;
         transform: translateX(0);

         .site-header--dark & {
            transform: scale(.55); ///
         }
      }

   }
   ```
   
   - perfect for scroll back up to the very top. It's back to its original styling 
   
   - but I think `this could be even better if the logo animated or transitioned did size change.` So back within our CSS `within the baseline rule for the logo` let's just add a transition property and say that the transform value should transition smoothly over the course of about a third of a second. And let's use the ease out transition style so let's save this. `transition: transform .3s ease-out;`
   ```css
   &__logo {
      position: Absolute;
      top: 0;
      left: 50%;
      transition: transform .3s ease-out; ////
      transform: translateX(-50%) scale(.8);
      transform-origin: 50% 0;
      background-color: $mainBlue;
      padding: 25px 36px;
      
      @mixin atMedium { 
         left: auto;
         transform: translateX(0);

      .site-header--dark & {
         transform: scale(.55);
      }
   }
   ```
      
   - `And now when we scroll down we see that the logo size smoothly changes perfect`

   49. Desktop Sticky Header (Part 2)

* In this lesson we will learn how to highlight the link in our header navigation that corresponds with the section of the page that the visitor has currently scrolled to. 
   
   Just so we're on the same page. Here's a bit of footage of the finished product. All right. So now we know what our goal is. 
   
   Let's get started and make it happen. 
   
   So what should our first step be. Where should we begin. Well 
   
* within our html we need to create some sort of a relationship between each section of the page and its matching header link. 
   
   Let's jump over to our text editor and OPEN UP OUR html file and I'll show you what I mean. 
   
   * let's look for this our beginning link in the header so if we scroll down just a bit here is the NAV element that lives in the header. And here is the our beginning link. 

   <nav class="primary-nav primary-nav--pull-right">
      <ul>
         <li><a href="#our-beginning">Our Beginning</a></li>
         <li><a href="#features">Features</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
      </ul>
   </nav>
   
   Let's go ahead and give this link element a unique I.D.. So after this a ref value what's out of space and say I d equals and we could name this anything we'd like but let's just call it our beginning link. All right. 

   <nav class="primary-nav primary-nav--pull-right">
      <ul>
         <li><a href="#our-beginning" id="our-beginning-link">Our Beginning</a></li>
         <li><a href="#features">Features</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
      </ul>
   </nav>
   
   * Next within our HDMI file let's find the actual our beginning section of the page. 
   
      * So in our HDMI file if we scroll down a bit here we see the our beginning page section div. 
   
      <div id="our-beginning" class="page-section">
   
   * And we need a way to relate this div to the header link that we just gave an I.D. to. We can give this element a custom attribute 
   
      custom attributes Begin with the word data and then a dash. But then from here we can choose any custom name we want. Why don't we call this data matching link. 
   
      And what should the value be. Well why don't we just provide a CSX like selector that points back to the link that we just gave an I.D. to so we know that we can use the pound sign to select an element that has an I.D.. And then we just type in the I.D. So it was our beginning link. 
   
      <div id="our-beginning" class="page-section" data-matching-link="#our-beginning-link">

* So now that we've spelled out this relationship we just need to use javascript so that when this section of the page gets scrolled to. (So when this area gets scrolled to) we use this div's custom attribute and we give that target element a modifier CSX class that makes it yellow 
   
   * but before we write that JavaScript let's first go ahead and create a relationship for the remaining two sections of the page 
   
   so features and testimonials. 
   
   So back in our HMO if we scroll back up to the header navigation here is the features link. Let's give it an I.D. of features link and let's give the testimonials link an idea of testimonials link. All right.

   <nav class="primary-nav primary-nav--pull-right">
      <ul>
         <li><a href="#our-beginning" id="our-beginning-link">Our Beginning</a></li>
         <li><a href="#features" id="features-link">Features</a></li>
         <li><a href="#testimonials" id="testimonials-link">Testimonials</a></li>
      </ul>
      </nav>

Next let's find the actual features section of our hmo. So the div that houses this content and we will give it a custom attribute that points back to this link. So in our HMO Let's scroll down to find our features section. Here it is let's give it a custom attribute. So data matching link and let's just set the value to pound sign and then features link. 

   <div id="features" class="page-section page-section--blue" data-matching-link="#features-link">
   
Let's scroll down to find the testimonial section. Here it is. Let's give this div a custom attribute. So data matching link and let's set the value to point back to the header link so pound sign testimonials link. All right. 
   
   <div id="testimonials" class="page-section page-section--no-b-padding-until-large page-section--testimonials" data-matching-link="#testimonials-link">

   Now at this point we are ready to begin writing the javascript that will actually make something happen. So let's save this file and then jump in to app assets scripts modules sticky header. All right. Let's write some javascript. So the first thing we should do within our constructor.


   50. Desktop Sticky Header (Part 3)

(50.1)  
- Now at this point we are ready to `begin writing the javascript` that will actually make something happen....

- So let's save this file and then `jump in to` app assets scripts modules `StickyHeader.js` All right. 
   
   - Let's write some javascript. So the first thing we should do within our constructor. 
   ```js
   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
      }
   ```
(50.2)  
- is to `create a new property that is a collection of all of our actual page section elements`. 
   
   - So for example back in our html all `all of the actual page section divs have a class of page section`. 
   
   - So `within our javascript` let's `create a new property` and name it `page sections`. And it should `equal`. `Document dot query selector all`. Be sure to include the all here because we want to select multiple elements `parentheses` `quotes` and `dot` because it has a class of `page dash section`. OK. 
   ```js
   class StickyHeader {
      constructor() {
         this.siteHeader = document.querySelector(".site-header")
         this.events()
         this.pageSections = document.querySelectorAll(".page-section")   ////
      } 
   ```
   - So now we have this collection of all of our page sections. 
   
(50.3)  
- Now `within our run on scroll method` every time we scroll we just want to `run a calculation` once for each of those page sections `to see if it has been scrolled to or not`. 
   
   - So `after the if else` but still within the run on scroll method let's just start working with that collection of elements of `this dot page sections` and we want to do something once for each of them. So `dot for each` and let's give it an `arrow function` with exactly one parameter parameter of`el` short for element `arrow symbol`. 
   
   - And then this method doesn't exist yet but we can create it in just a moment. Let's say `this dot calc section` `parentheses` to call that method. I just made up this method name. The idea is we're going to calculate if the current page section has been scrolled to. 
   
   - Now when we call this method `within the parentheses` we want to pass it the current element so `el` All right.
   `this.pageSections.forEach(el => this.calcSection(el))` 
   ```js
   runOnScroll() {
      this.determineScrollDirection()

      if (window.scrollY > 60) {
         this.siteHeader.classList.add("site-header--dark")
      } else {
         this.siteHeader.classList.remove("site-header--dark")
      }

      this.pageSections.forEach(el => this.calcSection(el)) ///
   }
   ```
(50.4)  
- Now let's go `create a method with this matching name`. 
   
   - So `after our run on scroll method` but still within our class. So right here let's create a new method with that name `calc section` `parentheses` `curly brackets` 
   
   - within these parentheses  Let's be sure to include a parameter to receive that argument. So you `el` short for element  `calcSection(el) {}`
   ```js
   runOnScroll() {
      this.determineScrollDirection()

      if (window.scrollY > 60) {
         this.siteHeader.classList.add("site-header--dark")
      } else {
         this.siteHeader.classList.remove("site-header--dark")
      }

      this.pageSections.forEach(el => this.calcSection(el))
   }

   calcSection(el) { ///

   }
   ```
   - and `within the body of this method` before we even perform any extra calculations let's `begin with an if statement`. So `if` `parentheses` `curly brackets` and only if the following conditions are met do we need to perform any other calculations so the condition
   ` if () {}`
   ```js
   runOnScroll() {
      this.determineScrollDirection()

      if (window.scrollY > 60) {
         this.siteHeader.classList.add("site-header--dark")
      } else {
         this.siteHeader.classList.remove("site-header--dark")
      }

      this.pageSections.forEach(el => this.calcSection(el))
   }

   calcSection(el) {
      if () {}///
   }
   ```
   - for this if statement will be only `if the user has scrolled down far enough` so that a section has entered into the viewport at all. `And only if they have not scrolled down so far that the bottom edge of a section` is now not in the browser's viewport at all. 
   
   - `In other words if the section isn't in the browser's viewport at all` we don't need to worry about any other calculations. 
   
   - So for the condition it will be `if` `window dot scroll y` `plus` `window.innerHeight`. If those two combined are `greater than` the current `elements offset top` right. So if you scroll down far enough so you can at least see the very top edge of the section and so `double Ampersand` to include another condition that must be true. 

   - but Ampersand Ampersand for the second condition `window dot scrollY.` should be `less than` the bottom edge of the current element. 
   
   - Now the web browser doesn't have a simple easy property that stores the bottom edge position but what we can do is grab the elements top position so `el dot offset top`` plus` the height of that element. So `element dot offset height`. OK `window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight`
   ```js
   runOnScroll() {
      this.determineScrollDirection()

      if (window.scrollY > 60) {
         this.siteHeader.classList.add("site-header--dark")
      } else {
         this.siteHeader.classList.remove("site-header--dark")
      }

      this.pageSections.forEach(el => this.calcSection(el))
   }

   calcSection(el) {
      if (window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {}///
   }
   ```
   - so that is our long winded condition `to make sure the element is on the screen at least` 
   
   if you need to pause the video. Go ahead. But in just a second I'm going to zoom back in the font size so it's easy to read. OK. 
   
   - Now within the curly brackets for the if statement `we want to calculate how far down an element has been scrolled to.` 
   
   - So for example let's take the transition as you're scrolling from our beginning and you're scrolling down into our features when we're about here we would want our beginning to still be selected as the current section but maybe once you scroll until about this threshold then we would want to select our features as the yellow or selected item. 
   
   - So we need to be aware of how tall the browser window is and what percent or how far you've scrolled the element into view. 
   
   - So this calculation is going to be a bit similar to what we set up when we were deciding when to reveal an item. 
   
   - So back in our editor, `in the if` statement let's `create a variable` let's name it `scroll percent` and set it to `equal`. And this is the same formula we used in our previous lesson. So the current `element` and then you'd `get bounding client rect` `call it` and then we want the `Y` property and then we want to `divide` that by the height of the web browser `window.innerHeight` and then we want to multiply that `by 100.` So it seems like a percentage instead of a decimal. 
   `let scrollPercent = el.getBoundingClientRect().y / window.innerHeight * 100`
   ```js
   runOnScroll() {
      this.determineScrollDirection()

      if (window.scrollY > 60) {
         this.siteHeader.classList.add("site-header--dark")
      } else {
         this.siteHeader.classList.remove("site-header--dark")
      }

      this.pageSections.forEach(el => this.calcSection(el))
   }

   calcSection(el) {
      if (window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / window.innerHeight * 100 ///
      }
   }
   ```
(50.5)  
- Now in a previous lesson we learned that if we can avoid asking the browser for information it's a good idea. Right. So `instead of asking the browser how tall it is.` That's something that `we can store in memory` and then we only need to `update that if the user resize is the browser window`. 
   
   - So before we move forward and actually use this value let's do this 
   
   - let's scroll up to the top of our file and `in our constructor` let's `create a property` named browser height. So `this.browserHeigh`t and let's set that to `equal` `window.innerHeight` 
   ```js
   class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.pageSections = document.querySelectorAll(".page-section")
    this.browserHeight = window.innerHeight ///
    this.events()
  }
   ```
(50.6)  
- and then `we do need to babysit this property`. Right. So when the user resize is the browser window we need to update this. 
   
   - Now in order to save a bunch of typing `we can actually just copy and paste that function from` our previous file write our `Reveal on scroll file` 
   
   - so within your app assets scripts modules folder `jump in to reveal on scroll` and down `in the events method`. Remember we have this area where we added an event listener to the window object` for the resize event` 
   ```js
   events() {
      window.addEventListener("scroll", this.scrollThrottle)
      window.addEventListener("resize", debounce(() => { ///
        console.log("Resize just ran")                   ///
        this.browserHeight = window.innerHeight          ///
      }, 333))                                          ///
    }    
   ```
   - so you can just select `these four lines of code` that I've selected here. `Copy them into your clipboard` and then `back in sticky header dot J.S.` well `within its events method.` 
   ```js
   events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
         ///
      }
   ```
   - Right `after this line just paste in your clipboard` we `don't need this console dot log line` for testing purposes and 
   ```js
   events() {
         window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
         window.addEventListener("resize", debounce(() => { ///
            this.browserHeight = window.innerHeight         ///
      }, 333))                                              ///
      }
   ```
(50.7)  
- in order for this to work `we need to make sure that this file or module has access to debounds` 
   
   - so up at the top of this file` we just need to import that in` we've already imported throttle so you can just copy that line pasted in change throttle to D bounce then within load asked to change this to D bounce. OK 
   ```js
   import throttle from 'lodash/throttle'
   import debounce from 'lodash/debounce'
   ```
(50.8)  
   - so now down `within our calculation` `instead of using window to enter height` `we can just use our property`. Right. `this.browserHeight` 
   
   - do the same thing here as well. So instead of window to enter height `this.browserHeight`. OK. 
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100 ///
      }
   ```
(50.9)  
- Now we can actually `use this scroll percent value to determine if you've scrolled down far enough that a section should be considered the current or highlighted yellow section.` 
   - So right below this line let's `begin another if statement` if it sees curly brackets `if () {}`
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if () {  ///

        }
      }
   ```
   - this time for the condition let's say if `scroll percent` is `less` than `18` and so `double Ampersand` and `scroll percent` is `greater than` `negative zero point one`.
  ` if (scrollPercent < 18 && scrollPercent > -0.1)` ...
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) {  ///

        }
      }
   ```
   - Now these are values that I've already experimented and these numbers seem to work for me. But you're free to tweak these values a bit to your liking. So 
   
   - once a section has been scrolled into this sweet spot we want to consider it the current or highlighted yellow links section. 
   
(50.10)  
- So `within the body of this if statement` let's begin by giving `a dom reference to the matching link` that corresponds with the section that's been scrolled to. Let me show you what I mean. 
   
   - So let's create a variable and call it `matching link` and set it to `equal`. And then we can work with the current page section element so `el` and then say `dot get attributes`. And remember earlier in this lesson in the HDL file we gave it a custom data attribute named `data dash matching link`. OK. 
   `let matchingLink = el.getAttribute("data-matching-link")`
    ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) {  ///
          let matchingLink = el.getAttribute("data-matching-link")
        }
      }
   ```
   - So this value is going to be a CSX like selector.`(let matchingLink)` Right. 

(50.11)  
- So now right below this that's the element that we want to select and give it a CSX modifier class to make it yellow. So we can just say `document dot query selector`. We don't need quotes. We want our selector to literally just be this value. So `matching link` and then we want to work with its class list. So `dot class list dot add` and let's give it a CSX modifier. Class of `is current link`. OK. 
   `document.querySelector(matchingLink).classList.add("is-current-link")`
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) {
          let matchingLink = el.getAttribute("data-matching-link")
          document.querySelector(matchingLink).classList.add("is-current-link")  ////
        }
      }
   ```
(50.12)  
- However `if you scrolled through the entire page that would eventually make all three links yellow.` Right. By the time you scroll down to the bottom `instead we only want the current link to be yellow.` 
   
   - So anytime we make a new link the active link we want to remove that active yellow class from the other links. 
   
   - So right above this line that we just wrote. Let's remove this class from any of the site header links that are not the current matching link. 
   
   - So to do that we can just say `document dot query selector all` the all is important here because we're selecting multiple elements and instead of quotes here let's actually use to `back ticks`. So this character is to the left or the one key or right above the tab key. And let's say `dot primary nav` space for a descendant selector any element `colon` any element that is `not`. And then `parentheses` and then `dollar sign` signed `curly brackets` `matching link`. Okay.
   `document.querySelectorAll(`.primary-nav a:not(${matchingLink})`)`
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) {
          let matchingLink = el.getAttribute("data-matching-link")
         document.querySelectorAll(`.primary-nav a:not(${matchingLink})`)
          document.querySelector(matchingLink).classList.add("is-current-link")
        }
      }
   ``` 
   - So that will give us a collection of elements that at the very end of this line we want to loop through them. `So dot for each` within these parentheses will give it an arrow function with one parameter. So `element` arrow symbol and then we'd want to work with that current element. Work with its class list and remove a class of `is current link`. OK. 
   `.forEach(el => el.classList.remove("is-current-link"))`
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) {
          let matchingLink = el.getAttribute("data-matching-link")
         document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
          document.querySelector(matchingLink).classList.add("is-current-link")
        }
      }
   ```

(50.13)  
- Now this code makes sense if you're scrolling down the page but `we need to realize that the calculations should be different if you're scrolling back in the direction of up.` 
   
   - So really quick `let's adjust our code to be able to determine if you're scrolling up or if you're scrolling down` 
   
   - `within our run on scroll method` right `at the very start` of the body of this method. Let's just call a method that doesn't exist yet but we will create in just a moment. So `this.determineScrollDirection()` Okay. 
   ```js
   runOnScroll() {
    this.determineScrollDirection() ////

    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark")
    } else {
      this.siteHeader.classList.remove("site-header--dark")
    }

    this.pageSections.forEach(el => this.calcSection(el))
  }
   ```
   - Now let's just go `create a method with this matching name` so brand new method `determineScrollDirection() {}` 
   ```JS
   runOnScroll() {
    this.determineScrollDirection()

    if (window.scrollY > 60) {
      this.siteHeader.classList.add("site-header--dark")
    } else {
      this.siteHeader.classList.remove("site-header--dark")
    }

    this.pageSections.forEach(el => this.calcSection(el))
  }

  determineScrollDirection() {}  /////
   ```
   - to determine if you're scrolling up or down. `We just need to compare the current scroll y value with the previous scroll y value.` 
   
   - So here's what I would do `up in the constructor`. Let's `take note of the initial scroll y value`. So in the constructor `before we call the events` let's just create the properties so this dot and let's call it previous scroll Y instead it's equal window dot scroll y. Okay 
   `this.previousScrollY = window.scrollY`
   ```JS
   class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.pageSections = document.querySelectorAll(".page-section")
    this.browserHeight = window.innerHeight
    this.previousScrollY = window.scrollY  ///
    this.events()
  }
   ```
   - then `down in our determined scroll direction method` we can just start `and if statements.` So if let's `also have an else block` 
   ```js
   determineScrollDirection() {
    if () {
      
    } else {
      
    }
  }
   ```
   - for the condition if `window dots scroll Y` is `greater than` the previous value. So `this dot previous scroll y`
   `window.scrollY > this.previousScrollY` 
   ```js
   determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      
    } else {
      
    }
  }
   ```
   - if it's greater then that means you're scrolling down so we can store a `new property on our overall object` named scroll direction and set it to down. 
   `this.scrollDirection = 'down'` 
   ```js
   determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = 'down'
    } else {
      
    }
  }
   ```
   - `else` otherwise `this.scrollDirection = 'up'`. 
   ```js
   determineScrollDirection() {
      if (window.scrollY > this.previousScrollY) {
         this.scrollDirection = 'down'
      } else {
         this.scrollDirection = 'up'
      }
   }
   ```
   - And then `after the else block but still within this method` let's `update the previous value`. So 
   `this.previousScrollY = window.scrollY` Cool. 
   ```js
   determineScrollDirection() {
      if (window.scrollY > this.previousScrollY) {
         this.scrollDirection = 'down'
      } else {
         this.scrollDirection = 'up'
      }
      this.previousScrollY = window.scrollY
   }
   ```
(50.14)  
- Now let me show you how we're going to use this value down 
   
   - `within our calculation` for the if statement when we said scroll percent must be between 18 and negative zero point one right after that one. 
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1) { ///
          let matchingLink = el.getAttribute("data-matching-link")
         document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
          document.querySelector(matchingLink).classList.add("is-current-link")
        }
      }
   ```
   - I want you to say. And so Ampersand Ampersand we're going to say and the scroll direction must be down. 
   So this dot scroll direction double equals sign down 
   `&& this.scrollDirection == 'down'`
   
   -  `then` let's say `or` so right after the quotes four down will say pipe pipe to say or if we're scrolling back up we want to use different threshold values to determine if you've scrolled to the sweet spot. So let's say scroll percent should be less than thirty three and double ampersand. This is only if the scroll direction is up. So this dot scroll direction double equals sign up all right. 
   `|| scrollPercent < 33 && this.scrollDirection == 'up'`
   ```js
   calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100
        if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') { ///
          let matchingLink = el.getAttribute("data-matching-link")
         document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
          document.querySelector(matchingLink).classList.add("is-current-link")
        }
      }
   ```

(50.15)  
- before we test things out in the browser `let's first write a bit of CSS` so that this is current link class actually `makes the links yellow or orange`. 
   
   - So within app assets styles modules `let's open up. Primary nav CSX` 
   
   - if we scroll down to the very bottom `here is the rule targeting the link elements.` And remember that our sticky NAV is only for medium screens and larger and it just so happens that `we already have a media query here`. 
   ```css
   a {
      color: #FFF;
      font-weight: 300;
      text-decoration: none;
      display: block;
      padding: 5px 8px;
      font-size: .8rem;
      background-color: rgba($mainBlue, .5);

      @mixin atMedium {
         font-size: 1rem;
         padding: 12px 0;
         background-color: transparent;
      }
   }
   ```
   - So within this media query let's `create a new rule` and use the `ampersand` which will give us this selector and then we can simply say `only if it has a class`(`.`) of `is current link` 
   `&.is-current-link {}`

   - and we just want to give the currently a color. Here's a value for a nice light orange. `color: #fabb69;`
   ```css
   a {
    color: #FFF;
    font-weight: 300;
    text-decoration: none;
    display: block;
    padding: 5px 8px;
    font-size: .8rem;
    background-color: rgba($mainBlue, .5);

    @mixin atMedium {
      font-size: 1rem;
      padding: 12px 0;
      background-color: transparent;

      &.is-current-link {    ////////
        color: #fabb69;
      }
    }
  }
   ``` 
   - Let's go ahead and save this and check things out in the browser. 
   
   - So if I refresh up at the top notice none of the links are yellow. But as I start scrolling down once the hour beginning section is in the viewport it becomes highlighted and as soon as a scroll down until the features area is taking up the majority of the screen you see it becomes highlighted. Perfect. 
   
   - If I keep scrolling down until testimonials is the main focus. Awesome. 

(50.16)  
- currently if we actually click on these header links we are immediately within the course of one millisecond taken to the appropriate section. But I think the cherry on top for this page would be smooth scrolling `so that way when we click on features the browser automatically smoothly scrolls to that section`. 

   
   - So do this with me within our text editor. Within your styles folder look in the base folder for `_global.css` 
   
   - and up at the very top even above our body selector lets select the html element `html {}`
   
   - and we just need to give it one property which is `scroll-behavior:` colon and just set it to `smooth;`. 
   ```css
   html {
      scroll-behavior: smooth;
   }
   
   
   body {
      font-family: 'Roboto', sans-serif;
      color: #333;
   }
   ```
   - Let's go ahead and save this. Back in the browser I refresh and go up to the top when I click on our beginning. Perfect 
   
   - `it smoothly scrolls to the destination instead of just instantly tele-porting you perfect` 


   ### Section 17: Build Our Own Modal / Lightbox Overlay


51. Building a Modal From Scratch (Part 1)

(51.1)   
- Number one and `take care of our git branches.` 
   
   - So over in the command line we can see that we currently have the sticky header branch checked out and in our previous lesson we completed the sticky header behavior. 
   
   - So now let's go ahead and `merge this branch back in the master.` And then once we've done that we can create a new branch for our modal or overlay. 
   
   - Let's begin by running `git status` to see what files have changed recently. 
   
   - All of these changes look good to me so I'm going to add everything to my staging area. So `git add -A` for all. 
   
   - And then we just want to commit everything that's in the staging area. So `git commit -m 'Completed sticky header functionality.` All right. 
   
   - So now that we've made a commit we've saved those changes into gets history. So this means we can safely switch back over to the master branch so we can say `git checkout master` 
   
   - and now that we've checked out the master branch we just want to merge the sticky header branch into it. So let's say `git merge sticky-header` All right. 
   
   - Let's create a new branch for this lesson's modal or overlay. So `git checkout -b create-modal` All right. So at this point we've got our new branch. Let's get to work. 
   
(51.2)   
- Let's jump over to our text editor and within our app folder `let's open up index.html` 

   - If we scroll `down to the very bottom` of this file right above the closing body tag and our script tag `we see commented out html` right. Here's the closing comment. 
   
   - This is the end of the modal reference html and if you scroll up a few lines you'll see the opening comment it reads. Leave this comment it out html here until you need it for an upcoming modal lesson. So this is that lesson. 
   
   - So go ahead and get rid of this top comment line. So just select this entire line. Get rid of that and then go ahead and get rid of this bottom comment line. This entire line. Okay. 
   
   - And if we save this back in the browser down at the very bottom of the page we see get in touch and we will have an online order system in place soon. So on and so forth. 
   
(51.3)   
- Now clearly this does not look like a full screen modal. Right now it's just the raw each demo. So now `let's write the CSS s to make this area look visually or stylistically like a modal.` 
   
   - Once we have the design or styling taken care of then we can set things up so it's hidden by default. 
   
   - And then when you click on the get in touch button it reveals this full screen area. 
   
   - So let's set up a new CSX file to style the model so in our text editor in app assets styles `let's create a new file in the modules folder` let's name the new file  `_modal.css` 
   
   - before we forget let's `jump into our main style sheet` and `import in this new model file` so open up your main styles dot CSX `down at the very bottom.` Let's just say X symbol import modules and grab the file named underscore modal semicolon. `@import "modules/_modal";`
   ```css
   @import "normalize.css";
   @import "base/_variables";
   @import "base/_mixins";
   @import "base/_global";
   @import "modules/_large-hero";
   @import "modules/_btn";
   @import "modules/_wrapper";
   @import "modules/_page-section";
   @import "modules/_headline";
   @import "modules/_row";
   @import "modules/_generic-content-container";
   @import "modules/_section-title";
   @import "modules/_feature-item";
   @import "modules/_testimonial";
   @import "modules/_site-footer";
   @import "modules/_site-header";
   @import "modules/_primary-nav";
   @import "modules/_reveal-item";
   @import "modules/_modal";

   ```
   - Let's give that a save and then `jump back into our new modal CSX` file. 
   
   - Let's create our baseline selector. So `.modal {}` OK 
   
   - now let's begin by making this modal area take up the entire screen and be a bit transparent. So let's say` position fixed`. 
   
   - So this way even if you scroll the modal still takes up your entire screen. Since we're using fixed positioning to make the model take up the entire screen we can just set its `top bottom left and right` values `all to zero` right the extreme edges so top zero bottom 0 left 0 right. 0. Okay 
   
   - let's give it `a slightly transparent white background` color so background color RGA to create white you max out the red green and blues 255 255 255 and let's set its opacity to ninety four percent right. So it's 6 percent see through. So my colon. 
   `background-color: rgba(255, 255, 255, .94);`

   - Let's also set its z index to 5. So it sits on top of all the other content on our page. Okay. 
   `z-index: 5;`
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
   }
   ```

   - Let's save this and see what it looks like so far cool. 
   
   - So notice as we scroll. It doesn't matter. This section still takes up the entire screen. It is layered on top of everything. It's looking good. 
   
(51.4)   
- Next Let's set things up `so that this content is centered vertically within the height of the browser viewport` 
   - and while we're at it `we can also set this X`. It's a bit small right now but you can see this X that you would click on to close the modal `let's position it so it sits in the very top right corner` 
   
   - so back in our CSX `within our baseline rule` here. I want to set it to use flex box to `display: flex`. You'll see why we're setting this up in just a moment. 
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;
   }
   ```
   - Now` within this rule` let's dropdown and `let's target the inner wrapper div` so `ampersand` which will give us dot modal and then we want to add on `underscore underscore` `inner` `curly brackets`. 
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &__inner {

      }
   }
   ```
   - Let's set this `to use all the available space`. So `flex: 1;` semicolon 
   
   - and then if we say `margin: auto;` Well `this in combination with Flex box will center it`. Okay. 
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &__inner {
         flex: 1;
         margin: auto;
      }
   }
   ```
(51.5)   
- After this inner rule let's dropdown `and target that close` or that `x button` that you would click on. 
   
   - So use our baseline selector underscore underscore. Close curly brackets `&__close {}`
   
   - and let's just position it to be in the top right corner so `position absolute`. Let's have it come down from the very` top 15 pixels`. Let's also have it come in from the `right 15 pixels` right. 15 pics. 
    ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &__inner {
         flex: 1;
         margin: auto;
      }

      &__close {
         position: absolute;
         top: 15px;
         right: 15px;
      }
   }
   ```
   - Let's go ahead and save and see what this looks like. Cool. So `the actual content is now centered vertically`. `The X icon is positioned where it should be` 
   
(51.6)   
- next Let's `adjust the text or font styling of this message` here. 
   
   - So back in our CSX it doesn't matter where but maybe `right after the inner rule` we can create a new rule Ampersand underscore underscore description `&__description {}`
   
   - and let's center it horizontally. So `text-align: center;` 
   
   - let's increase the font size a bit font size maybe one point three ram  `font-size: 1.3rem;`
   
   - let's make sure the font isn't too thick so font weight three hundred 
      `font-weight: 300;`

   - and let's bump up the line height a bit so. Line height. One point six five. `line-height: 1.65;`
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &__inner {
         flex: 1;
         margin: auto;
      }

      &__description {
         text-align: center;
         font-size: 1.3rem;
         font-weight: 300;
         line-height: 1.65;
      }

      &__close {
         position: absolute;
         top: 15px;
         right: 15px;
      }
   }
   ```
   - Let's see what that looks like. Go ahead and save. Okay. 
   
(51.7)   
- This text styling looks good `but the spacing looks off.` 
   
   - So first of all there's `too much vertical space between the headline and this text `
   
   - and then also I wouldn't want this text to be able to use up this much width. I think `it should be constrained to the center portion of the screen` like this. 
   
   - Now to make these changes `let's actually jump into our html` instead of our CSA s at first 
   
   - `towards the bottom of our html` file. I want you to `find the modal div` 
   
   - now a few lines into the modal code you'll see a `heading Level 2 that is reusing our section title.` 
   ```html
   <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>
   ```
   - But notice it has a modifier class of `section-title--less-margin` 
   
   - Also we have this extra wrapper div id it has a modifier of `--narrow` 
   
   - So I've already written this html for us but `if we go add these modifier classes for wrapper and section title that will take care of these issues that I was just describing.` 
   
(51.8)   
- Let's start `with the section title` 
   
   - Let me show you what I mean within our CSA as modules folder `jump into our _section-titled.css file`. So down around line 14 we have a blue rule maybe `right below the blue rule`. `Let's create a less margin modifier` class so Ampersand dash dash less margin curly brackets `&--less-margin {}`
   
   - and let's just set `margin-bottom: 1.3rem;`  to only be one point three ram and let's set `margin-top: 0;`. 
   
   - Let's give that to save. Cool. So now there's a bit less spacing in between these two elements. 
   
(51.9)   
- Next up let's `work on the narrow wrapper.` 
   
   - So within your CSF modules jump into the file named `_wrapper.css` 
   
   - We already have a modifier rule four dash dash medium so `maybe right below that`. Let's just say `&--narrow {}` let's set it's `max-width: 470px;` maybe four hundred and seventy pixels.
   ```css
   .wrapper {
      overflow: hidden;
      padding-left: 18px;
      padding-right: 18px;
      max-width: 1236px;
      margin-left: auto;
      margin-right: auto;

      &--medium {
         max-width: 976px;
      }

      &--narrow {
         max-width: 470px;
      }
   ```
   - Let's give that to save cool. I think this text looks a lot better when it's constrained to the middle portion of the screen like this. 
   
(51.10)   
- Next let's `fine tune the styling of the X close icon`. 
   
   - It should be a bit larger or easier to see. So `back in our modal dot CSX file` if we scroll down a bit. We already have a rule for the `close` icon so `within that rule` we can just `increase the font size` to `2 rem` `font-size: 2rem;`
   
   - let's also make it blue color. And we can use our variable dollar sign main blue `color: $mainBlue;` give that save cool. 
   ```css
   &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 2rem;
    color: $mainBlue;
   }
   ```
   - Now I think `it would look even better if it was stretched a bit.` So it was wider and not as tall. Right. 
   
   - So that it actually looked like a close X and not just the letter X from the alphabet. Right if we squished it it was a bit wider 
   
   - to do that. We can just say transform and use the scale X function within these parentheses a value of one will keep it the exact same size but if we say one point two well we are stretching it on its x access to be a bit larger. Sure include a semicolon here. 
   ` transform: scaleX(1.2);`

   - Now before I save this I do want to point out that I want to increase the width from the top right corner as its pivot point because I want to maintain the perfectly spaced out 15 pixels of margin from the top right corner. 
   
   - So I want the element to grow in this direction right starting here and moving out like this. 
   
   - So to do that we just want to set the `transform origin` point to 100 percent to mean the far right corner and then zero to mean the top upper corner. So my colon. 
   `transform-origin: 100% 0;`

   - And while we're at it let's also set the `cursor to be a pointer` so that it looks like a link or something you're supposed to click on when you hover over it. Give that save. `cursor: pointer;`
   ```css
   &__close {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 2rem;
      transform: scaleX(1.2);
      transform-origin: 100% 0;
      cursor: pointer;
      color: $mainBlue;
   }
   ```
   - Cool. 
   
   - That looks a lot better and if you hover over it it looks like something you should be able to click on. 
   
   - If we wanted to we could even `set up a hover rule` so when you hover it it turns orange as well. So right after this color line we can say Ampersand colon hover and just set the color to main orange 
    `&:hover {color: $mainOrange;}`
   ```css
      &__close {
         position: absolute;
         top: 15px;
         right: 15px;
         font-size: 2rem;
         transform: scaleX(1.2);
         transform-origin: 100% 0;
         cursor: pointer;
         color: $mainBlue;

         &:hover {
            color: $mainOrange;
         }
      }
   ```
   - perfect. Okay. 
   
(51.11)   
- At this point we just need to `style these social media icons` that should sit right about here. 
   
   - Now they already exist in the HDMI L. We just can't see them because they are white icons sitting on a mostly white background. 
   
   - So we have Facebook Twitter Instagram and YouTube links here. 
   
   - Now instead of writing all the styling for those links within our modal file `let's create an entirely separate file just for the social icons.` 
   
   - So within our CSF modules folder let's `create a brand new file` and let's name it `_social-icons.css` 
   
   - And before we forget let's `include this file within our main style sheet.` So `at the bottom of styles dot CSX` say 
   `@import "modules/_social-icons";` 
    ```css 
      @import "normalize.css";
      @import "base/_variables";
      @import "base/_mixins";
      @import "base/_global";
      @import "modules/_large-hero";
      @import "modules/_btn";
      @import "modules/_wrapper";
      @import "modules/_page-section";
      @import "modules/_headline";
      @import "modules/_row";
      @import "modules/_generic-content-container";
      @import "modules/_section-title";
      @import "modules/_feature-item";
      @import "modules/_testimonial";
      @import "modules/_site-footer";
      @import "modules/_site-header";
      @import "modules/_primary-nav";
      @import "modules/_reveal-item";
      @import "modules/_modal";
      @import "modules/_social-icons";
   ```
   - Let's give that a save. 
   
   - OK now `back in social icons.` Let's create our baseline selector. So .`social-icons {}` 
   
   - Let's begin by centering everything so `text-align: center;`. OK. 
   ```css
   .social-icons {
      text-align: center;
   }
   ```
   - And then each of the four icons write the Facebook Instagram the YouTube and the Twitter. `Each one of those has a selector of underscore underscore icon` right or social icons underscore underscore icon So let's say Ampersand underscore underscore icon. `&__icon {}`

   - Let's begin by giving them a background color so we can actually see them. So they're not a white icon on a white background. So background color. Let's go a dollar sign. Main orange. 
   `background-color: $mainOrange;`
   
   - Let's set their display to be inline block. 
   `display: inline-block;`

   - Let's set their width to be 72 pixels their height to be 72 pixels. 
   `width: 72px;`  `height: 72px;`

   - Let's give them a bit of margin around each one. So zero top margin five pixels to the right five pixels to the bottom and five pixels to the left. OK. `margin: 0 5px 5px 5px;`
   ```css
   &__icon {
      background-color: $mainOrange;
      display: inline-block;
      width: 72px;
      height: 72px;
      margin: 0 5px 5px 5px;
   }
   ```
   - And still inside this same rule or selector lets just drop down and with a descendant selector let's select the image inside each one of these. So just `img {}` 
   
   - let's tell it to be a block `display: block;`
   
   - and let's position it so it's centered within the orange background area so `position: absolute;` 
   
   - If we're setting this to be position absolute `we should set the parent to be relative.` So `position: relative;` 
   ```css
   &__icon {
      background-color: $mainOrange;
      display: inline-block;
      width: 72px;
      height: 72px;
      margin: 0 5px 5px 5px;
      position: relative;
   
      img {
      display: block;
      position: absolute;
      }
   }
   ```
   - and then back in this new rule `come down from the top halfway`. 50 percent `come in from the left 50 percent` 
   `top: 50%;`  `left: 50%;`
   ```css
   &__icon {
      background-color: $mainOrange;
      display: inline-block;
      width: 72px;
      height: 72px;
      margin: 0 5px 5px 5px;
      position: relative;
   
      img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      }
   }
   ```
   - and then we want to pull it back up into the left half of its own size. So transform translate negative 50 percent comma negative 50 percent. So both vertically and horizontally. `transform: translate(-50%, -50%);`
   ```css
   .social-icons {
  text-align: center;

      &__icon {
         background-color: $mainOrange;
         display: inline-block;
         width: 72px;
         height: 72px;
         margin: 0 5px 5px 5px;
         position: relative;
      
         img {
         display: block;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         }
      }
   }
   ```
   - Let's give this a save and see what it looks like. Cool. 
   
(51.12)   
- So for larger screens this looks great but `for smaller screens I think we should adjust things so that exactly two icons fit Per row.` 
   
   So let me show you how I would do that 
   
   - back in our social icons file within our icon rule maybe right after position relative I would use our Mixon named at small. 
   `@mixin atSmall {}`

   - So super tiny screens will receive the baseline styles while screens that are at least small or larger will receive these styles. 
   
   - So in here we can say with `72 pixels` but within our tiny baseline styles let's change the width so that it's no longer 72 pixels and `instead is 33 percent.` 
   ```css
   .social-icons {
      text-align: center;

      &__icon {
         background-color: $mainOrange;
         display: inline-block;
         width: 33%;  ///
         height: 72px;
         margin: 0 5px 5px 5px;
         position: relative;

         @mixin atSmall {
            width: 72px;  ///
         }

         img {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
         }
      }
      }
   ```
   - Let's give that a save cool. 
   
   - So now for mobile or tiny screens we get exactly to Perot but for larger screens we still have the four wide grid and that's going to bring this video but not this lesson to a close 



   52. Building a Modal From Scratch (Part 2)


(52.1)   
- `write JavaScript to make this modal come to life.` 
   
   - Let's begin by thinking about the html that powers this. 
   
   So back in our text editor if you open up your index start each demo and take a look at the modal html. 
   
   - It's just my own personal preference but I actually want to `move this html that powers the model to live inside javascript` because if we think about it the modal is going to be hidden when you first come to the page. 
   
   - And the only way to see it is if you use javascript to make it appear. 
   
   - So `if for whatever reason javascript is disabled on a user's device there's no point in even sending them this html at all.` 
   
   - So to get started let's do this towards the bottom of your HD CML file. I want you to `select the entire overall modal div` 
   
   so it's an opening div with a class of modal and then just select down until the closing div 
   
   - and let's `cut all of this into our clipboard` okay. You can save your html file. 
   
   And now 

   
(52.2)   
- let's go `create a new JavaScript file for our modal.` 
   
   - So within app assets scripts let's right click on modules and create a new file let's name it uppercase `Modal.js` 
   
   - let's `create a class named modal` and `then outside of that class` at the very bottom let's say `export default Modal` 
   `class Modal {}`
   ```js
   class Modal {

   }

   export default Modal
   ```

(52.3)   
- and before we forget. Let's `save this file and go import it within our main JavaScript file`. So within scripts `go into your main App.js` towards the top here that's imported in so `import Modal from './modules/Modal'` 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import Modal from './modules/Modal' ///
   ```


(52.4)   
- And then `on a new line` let's just `create a new instance of the modal class.`   `new Modal()`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import Modal from './modules/Modal'

   new Modal()  //////
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

   let mobileMenu = new MobileMenu();

   if (module.hot) {
   module.hot.accept()
   }
   ```
   - Don't worry. By the very end of this lesson `I will explain when we do and when we don't need to save the new instance of a class to a variable.` But for now before we get to that explanation we can just have a new instance of modal. 
   
(52.5)   
- let's jump back into our Modal.js and let's do this within our class. Let's `set up a` 
   `constructor() {}` 
   
   - and blow the constructor but still within our class let's create a method named 
   `injectHTML() {}` 
   ```js
   class Modal {
      constructor() {

      }

      injectHTML() { ///

      }
   }

   export default Modal
   ```
   - And then `within our constructor` let's be sure to `call this method right away` as soon as an object is created. So within the constructor just `this.injectHTML()` parentheses to execute it. 
   ```js
   class Modal {
      constructor() {
         this.injectHTML() ///
      }

      injectHTML() {
         
      }
   }

   export default Modal
   ```
   - Now `within this actual method` let's just `add a bit of html towards the bottom of the document.` So to do that we can say  `document.body.insertAdjacentHTML()` 
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML() ///
      }
   }

   export default Modal
   ```
   - This is a method the browser makes available to us. We give it `2 arguments`. The first argument is `where in relation to this element do you want to insert your new html` let's say `'beforeend'` so all the letters here are lowercase even the e and n 
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML('beforeend') ///
      }
   }

   export default Modal
   ```
   - after these quotes we have a `comma.` Now the second argument is `the html that you want to add or insert`.
   
   - Now we could use quotes however instead of quotes here. `Let's use to back ticks.` 

   - The cool thing about `back ticks is that it creates a template literal` and the cool thing about a template literal is that we can drop down in between the two back ticks whereas you cannot drop down in between two quotes that will break javascript but with tactics we can do this just to stay organized and as you might have guessed `this is where you can paste back in your clipboard to` just paste OK. 
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML('beforeend', `
         <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>`) 
      }
   }

   export default Modal
   ```
   - And if we go ahead and save this file over in the browser `we see our model again`. 
   
(52.6)   
- Great except we don't want the model to be visible when you first come to the page. So let's `write a bit of CSS so that the modal is hidden by default`. 
   
   - So in our editor go into app assets styles modules and `open up the _modal.css` file 
   ```css
   .modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;
   ```
   - `within the baseline rule` up at the top here. Let's `add a few new properties.` 
   
   - So by default let's set the `opacity: 0;` 
   
   - Let's also set `visibility: hidden;` 
   
   - Let's also set its scale to be a bit larger than its natural size. So this way when we reveal it it looks like it's sort of doing a zoom out or zoom in scale effect. So it's say
   `transform: scale(1.2);` So it's 20 percent larger than its normal size semicolon. 
   
   - And then let's tell the browser to gradually transition these values. So it looks like it's animating in once we actually reveal it. So transition. So I want to transition all properties over the course of point three seconds and I will use ease out. 
   `transition: all .3s ease-out;`
   ```css
   .modal {
      opacity: 0;                    ///
      visibility: hidden;            ///
      transform: scale(1.2);         ///
      transition: all .3s ease-out;  ///
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;
   ```

(52.7)   
- Now while we're in this file let's go ahead and `create the CSS modifier class that would make the modal visible.` 
   
   - So still within the baseline rule. But maybe right `below this flex property` that's dropdown and say `&--is-visible {}` 
    ```css
   .modal {
      opacity: 0;                    
      visibility: hidden;            
      transform: scale(1.2);         
      transition: all .3s ease-out;  
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &--is-visible {     ////

      }

   ```
   - within this rule. Let's just say `opacity: 1;` fully visible.
   
   - Let's set `visibility: visible;` 
   
   - and let's set it scale or size back to normal. So 
   `transform: scale(1);` Be sure to end that with a semicolon. 
    ```css
   .modal {
      opacity: 0;                    
      visibility: hidden;            
      transform: scale(1.2);         
      transition: all .3s ease-out;  
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .94);
      z-index: 5;
      display: flex;

      &--is-visible {
         opacity: 1;
         visibility: visible;
         transform: scale(1);
      }

   ```
   - Let's go ahead and `save this` cool. So `it's hidden by default.` 
   
(52.8)   
- Now we just need to `write a bit of JavaScript so that when you click this button or this button the modal gets that is visible modifier class.` 
   
   - So let's `jump back into our JavaScript file Modal.js` 
   
   - and right `below the constructor` let's `create an events method`. So `events() {}` 
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
   }

   events() {

   }
   ```


   - `within the constructor let's be sure to call it` 
   `this.events()`

   ```js
   class Modal {
      constructor() {
         this.injectHTML()
         this.events()
   }

   events() {

   }
   ```
   - and `the ordering of these lines matters` in the sense that `we need to inject the html before any of our other javascript can interact with that html`  
   
(52.9)   
- Now` within our events method` we would want to `listen for two things.` 
   
   - So we can even `write comments to ourselves` so first we would want to listen for the open modal button being clicked on so we could say `// listen for open click` 
   
   - and then we could write another comment because we also want to listen for the closing click right. When you click the top right exe to close the modal so `// listen for close click` 
   
   - and while we're at it `let's listen for a third event` and that is if the user presses the escape key that should close the modal. For now let's just write a comment that says `// pushes any key` okay. 
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
         this.events()
   }

   events() {
      // listen for open click

      // listen for close click

      // pushes any key
   }
   ```
(52.10)   
- At this point `let's work on the opening the modal feature` so let's begin by `selecting the open button that you would click on From the DOM` 
   
   - so up `in the constructor` we can create a property let's name it `this` `dot` let's call it `open modal button` and let's set it to `equal.` `Document dot query selector all` all is important here because there are multiple buttons you could click on and let's give it quotes `dot open dash modal` 
   `this.openModalButtons = document.querySelectorAll(".open-modal")`
   ```js
   class Modal {
      constructor() {
         this.injectHTML()
         this.openModalButtons = document.querySelectorAll(".open-modal")
         this.events()
   }

   events() {
      // listen for open click

      // listen for close click

      // pushes any key
   }
   ```
(52.11)   
- now at the moment `I don't believe there are any elements in our html file with this class` (`open-modal`) so let's fix that right now. 
   
   - So `in your html file` up at the very top. For me it's around line number 23. Here is that top right. `Get in touch button.` 
   ```html   
   <div class="site-header__menu-content">
      <div class="site-header__btn-container">
         <a href="#" class="btn">Get in Touch</a>  ///
   ```

   - So in addition to just the class of btn let's `also give it a second class` of `open-modal` okay. 
   ```html   
   <div class="site-header__menu-content">
      <div class="site-header__btn-container">
         <a href="#" class="btn open-modal">Get in Touch</a>  ///
   ```
   - And then let's `also find this orange button` and give it a class of open-modal. So for me that's around line number 50. Here it is button. Button orange button large. 
   - So I'll just give it another class of `open-modal`. 
   
   ```html
   <p><a href="#" class="btn btn--orange btn--large open-modal" >Get Started Today</a></p>
   ```
   
   - And then finally remember we have a button in our footer that also says `get in touch`. So down at the very bottom of our HDMI well. For me it's around line 166 at the end of this line instead of just button button orange. Let's also add `open-modal`. 
   ```html
   <p><span class="site-footer__text">Copyright &copy; 2019 Clear View Escapes. All rights reserved.</span> <a href="#" class="btn btn--orange open-modal">Get in Touch</a></p>
   ```
   - Let's go ahead and save that. 
   
(52.12)   
- Okay `now back in our javascript`. Now we have this collection of all of the buttons that can get clicked on to open the modal so down `in our events`. We can say begin working with that collection. `this.openModalButtons.` Actually why don't we make this name plural so adding S buttons and then down your open model buttons dot 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.   ///
   
   ```
   - and we want to do something once for each item in the collection. So `forEach` let's `give it an arrow function` with exactly one parameter some `element` and then the arrow symbol `(el =>` 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el =>   ///
   
   ```
   - and then what we want to do is just `add an event listener` to that element. So `el.addEventListener()` the type of event we're listening for is a click event `"click"` after the quotes `comma`. 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", ))   ///
   
   ```
   - This is what we want to do `in response to a click`. Let's give it an `arrow function` with exactly one parameter. This time the parameters `e` I just made up this name it's `short for event.` You'll see how we're going to use that in just a minute but e. `Arrow symbol.` And then we haven't created this method yet but we will in just a moment. So let's call a method named open the modal. So `this.openTheModal()` in parentheses to call it. Now in these parentheses when we're calling it let's pass it `e` for event. Okay 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
  }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))   ///
   
   ```
(52.13)   
- now let's go `create a method with this matching name.` `openTheModal()`

   - So right `below our events method` `and right above this inject html method` we can say `openTheModal() {}`

   - within these parentheses let's receive that incoming parameter of `e` 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    // listen for close click

   // pushes any key
   }

   openTheModal(e) {  ////

   }

   ```
   - and then in the body of this method what we want to do is `prevent the default behavior`. So these buttons are a elements right links and they have h ref values. So currently if we clicked on one of these you'll see the hash tag appears at the end of the address bar and in a draft value of hash tag we'll also scroll you up to the very top of the page. 
   
   - So if I click the link in the footer notice it scrolls to the top. So that's not what we want. 
   
   - So `we're going to prevent that default behavior.` 
   
   - So within our open the modal we can just say `e` that is the current event that just happened the Click event and we want to say `dot`` preventDefault`. We want to call that prevent default method. OK. 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    // listen for close click

   // pushes any key
   
   }

   openTheModal(e) { 
      e.preventDefault()  ////
   }  

   ```
   - Once that's been taken care of. `Now we just want to actually open the modal`. 
   
   - So we want to `give that overall modal div the class that makes it visible.` 
   
   - So `within our constructor` 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }
   ```
   - let's select the overall modal div so we can save it into property. `This` `modal` `equals` `document query selector` just `dot modal is the selector`. 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal") ////
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }
   ```

   - Okay then `in our openTheModal` method we can just say 
   `this.modal.classList.add()` 
   ```js
   class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    // listen for close click

   // pushes any key
   
   }

   openTheModal(e) { 
      e.preventDefault()
      this.modal.classList.add()  ////
   }  

   ```
   - and remember our CSS modifier class. That makes it appear is `modal--is-visible` 
   ```js
   class Modal {
   constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.openModalButtons = document.querySelectorAll(".open-modal")
    this.events()
   }

  events() {
    // listen for open click
    this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

    // listen for close click

   // pushes any key
   
   }

   openTheModal(e) { 
      e.preventDefault()
      this.modal.classList.add("modal--is-visible")  ////
   }  

   ```
   - let's go ahead and `save this and test it out.` 
   
   - It's back in the browser. I will refresh just to make sure that any experimental event listeners are gone and if I click the button `perfect` 
   
(52.14)   
- next let's set things up so that you can `click on the X icon to close the modal.` 
   
   - So first up in the constructor let's `create a property that points towards that close icon.` So we can say  
   `this.closeIcon = document.querySelector(".modal__close")`
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")  ///
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click

      // pushes any key
      
      }

      openTheModal(e) { 
         e.preventDefault()
         this.modal.classList.add("modal--is-visible")
      }  

   ```
   - Now `in the events area` we already have `this comment`.  
   `//Listen for close click.` We can just say this dot closed icon. We want to add event listeners or dot add event listener. We're listening for a click event comma. And let's just give it an arrow function so parentheses arrow symbol. And then we haven't created the method yet but let's imagine it's called close the modal. So this dot close the modal parentheses to call it. 
   `this.closeIcon.addEventListener("click", () => this.closeTheModal())`
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
                                           /////
      // pushes any key
      
      }

      openTheModal(e) { 
         e.preventDefault()
         this.modal.classList.add("modal--is-visible")
      }  

   ```
   - And our html is set up so that this is (X) not an A element or a link with an H ref. So `we don't need to worry about preventing the default behavior.` 
   
   - So we can just go `create a method with this name` `closeTheModal` right here `closeTheModal() {}` 
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal()) 

      // pushes any key
      
      }

      openTheModal(e) { 
         e.preventDefault()
         this.modal.classList.add("modal--is-visible")
      }
        
      closeTheModal() {    ///////

      }

   ```
   - and we can actually just copy and paste this line to save a bit of typing. `this.modal.classList.add("modal--is-visible")` 
   
   - Only now `instead of adding this CSS class` `we would want to remove it.` So let's `copy this paste it` into closed the model and just `change add` `to remove` 
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())

      // pushes any key
      
      }

      openTheModal(e) { 
         e.preventDefault()
         this.modal.classList.add("modal--is-visible")
      }
        
      closeTheModal() { 
         this.modal.classList.remove("modal--is-visible")  /////
      }

   ```
   
   - let's save and test it out. I will refresh though just so our add event listeners aren't doubling up and having multiple handlers 
   
   - so I can open the model if I click this cool I can close the modal mean try the button in the footer perfect. 
   
(52.11)   
- Finally let's `set things up so that if the motel is open you can close it by pressing the escape key` on your keyboard instead of only being able to click the close icon. 
   
   - So back in our code `within our events method` we already have `this comment  // pushes any key`. 
   
   - So in this event listener `we're not going to listen for the escape key` because that's not the way the browser works. `First you just need to listen for any key up or key down event.` 
   
   - So I would say `document` right. So the overall page and then `add event listener` the type of event we are listening for is a `key up event`. So once someone presses a key and then releases it up     `document.addEventListener("keyup")`
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal()) 

      // pushes any key
      document.addEventListener("keyup")  ///////
      
      }
   ```
   - what do we want to do in response. Well let's provide it. An `arrow function` with exactly one parameter the parameter will be `e` short for event. 
   
   - This will contain information about the event that just occurred in this case it contains which key was pressed. 
   
   - So in just a moment we're going to want to check this to see if it was the escape key that was pressed but let's include the arrow symbol and then let's call a method that doesn't exist yet but one that we can create in just a moment. 
   
   - So I would say `this.keyPressHandler()` parentheses to call it. 
   
   - And when we call it be sure to give it that `e`. 
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())                                     
         
      // pushes any key
      document.addEventListener("keyup" , e => this.keyPressHandler(e))  ///////
      
      }

   ```
   - Now let's create a method with this matching name so key press handler `keyPressHandler() {}`

   `within these parentheses`. Be sure to receive that incoming argument (`e`) 

   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
      }

   events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())                                     
         
      // pushes any key
      document.addEventListener("keyup" , e => this.keyPressHandler(e))
      
      }

      keyPressHandler(e) { ////

      }

   ```
   
   - and then we can just write an `if statement.` `So only if the key that was pressed was the escape key` only in that situation would `we want to close the modal` if any other key was pressed. We can just ignore it. 
   
   - So if parentheses curly brackets for the condition if e dot key code double equal sign to check for equality. If that equals twenty seven  `if (e.keyCode == 27) {}`
   
      - so every key on the keyboard has a numeric value associated with it. And `I just know from memory that the escape keys key code is twenty seven.` 
   
   - So only if that's the case then in the if block just closed the modal. So this dot close the modal parentheses to call it. 
    `this.closeTheModal()`
    
   - Let's go ahead and save this. Back in the browser I will refresh. So I have fresh event listeners and if I open up the model and then press escape on my keyboard. `Perfect.` 
   
   - At this point the user experience of `our modal feature is complete.` 
 



   ### Section 18: Code Splitting & Lazy Loading



53. Code Splitting With Webpack


(53.1)   
- `our overall goal is to have the visitors of our Web site download as little data as possible` `so that things load as quickly as possible for them.` 
   
   - So with that in mind when someone first visits our Web site immediately `they have no need for the javascript that powers the modal.` 
   
   - So imagine you have this sizable bit of code that the user doesn't need to download right away. 
   
   - In that scenario `there's no sense in including that code in the main javascript bundle that the user downloads right away. `
   
   So here's what we're going to do in this lesson. 
   
(53.2) set things up within this main App dot J.S   
- I want you to `jump into our main or overall App.js JavaScript file.` 
   
   - So this is the main entry point That web pack looks at Right And Web pack is bundling up everything that we are importing 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import Modal from './modules/Modal' ///

   new Modal() ///
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - and up at the top `We are indeed importing our modal JavaScript file.` 
   
   - Now again imagine that our modal was powered by three hundred lines of JavaScript and we wanted to prevent the user from having to download that right away. 
   
   Well do this with me right now 
   
   - within our App dot J.S. I want you to `delete this line completely. Where we are importing the modal class` 
   
   - and then I also want you to `delete the line where we are creating a new instance of the modal class `
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
                                    ///

                  ///
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

   let mobileMenu = new MobileMenu();


   if (module.hot) {
      module.hot.accept()
   }

   ```
   - Now if I save this obviously back in the browser if I refresh `the modal feature no longer works.` 
   
(53.3)   
- So now let's set things up within this main App dot J.S. file `so that when you click on one of the buttons.` Well `then on demand or on the fly we load in the modal JavaScript file. `
   
   
   - So `back in App dot J.S.` maybe below all of these lines where we are creating new instances of classes 

   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   /////////

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - right below that let's `set up the code that loads in the modal code at just the right moment.` 
   
(53.4)   
- So first we're going `to need to handle the Click event When you click on one of the buttons that should open the modal.` 

   - So let's just say `document got query selector all.` Any element that has a class of `open modal.` 
   `document.querySelectorAll(".open-modal")`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal")  ////

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - Now this is going to return a collection or multiple elements. So then we want to call `for each` on that. 
   
   - And then let's give this `an arrow function` with exactly one parameter. Let's say `el` for element `arrow function` for each one of those elements. Let's add an `event listener`. The type of event we're listening for is a `click` `comma`. 
   `.forEach(el => {el.addEventListener("click", )})`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", ) ///
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - And then let's also give that `an arrow function with one parameter`. Let's have the parameter be called `e` for event. So we can prevent the default behavior and then `arrow symbol` `curly brackets`. 
   `e => { }`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {   /////

      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - So first let's say `e dot prevent default` so that way when you click on one of the links it doesn't actually try to take you to a u r allocation of hash tag  `e.preventDefault()`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()        /////
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - and then below this we can actually `load in the modal file` 
   
   - so we can use the `import` method inside these `parentheses` we give it a path to quotes `dot forward slash modules slash modal.`
    `import('./modules/Modal')` 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal') /////
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - Now `this is going to return a promise.` Meaning we don't know how long this is going to take to complete but once it does finish loading that file then we want to actually use it to create a new instance of the class. 
   
   - So at the very end of this line since this is a promise we can say `dot then` and then after that we can say `dot catch.` 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then().catch() /////
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
(53.5)   
- Now if this is your first time ever working with a promise. `Essentially we provide functions in both the then parentheses and the catch parentheses.` 
   
   - The idea is that `we don't know how long it's going to take to load this file.` It could take 10 milliseconds or it could take a thousand milliseconds but when it is successfully retrieved right `if things go as planned` then whenever that happens the function we provide and `then() is going to get called` or `if there is a problem` in the file never loads and for some reason there's an error then whatever function we provide and `catch() will be called.` 
   
   - So let's actually `start with the catch.` 
   
   - For now we can just `provide an arrow function` and just `log a message to the console` that says `there was a problem`. OK. 
      `() => console.log("There was a problem."))`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then().catch(() => console.log("There was a problem."))   ///////
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - But `if things go as planned the then() function is going to run.` 
   
   - So within the then parentheses let's give this `an arrow function` with exactly one parameter. Let's use a parameter name of x. So `X` and then a space and then the `arrow function symbol` and then let's add `curly brackets` and in-between them let's dropdown 
    `x => {}`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then(x => {  /////

         }).catch(() => console.log("There was a problem."))
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ``` 
   - `the X represents the file that we just imported or loaded.` So we want to use this to create a new instance of the modal class. 
   
   - So on this line we can just say create a `new instance of X` and then `due to the way web packed imports` the file in this situation we do need to say X `dot default parentheses`. 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then(x => {
            new x.default()                      //////
         }).catch(() => console.log("There was a problem.")) 
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ``` 
   - `So this will create a new instance of our modal class. `
   
   - Now we don't just want that new instance sitting in outer space `we want to save it to a variable` `so we can reference it later on`. 
   
   - However `we don't want to create a variable using the word let here because it would only be available within this current scope down here.` 
   
   - So let's do this maybe right `below these lines where we're creating new instances of classes.` Let's write a brand new line and we can just say `let lowercase modal` and that's it. That's the entire line of code. This is just creating a variable with this name in the global scope. 
      `let modal`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal   ////////////

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then(x => {
            new x.default()                      
         }).catch(() => console.log("There was a problem.")) 
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ``` 
   - So now down here when we're saying create a new instance of X dot default `at the start of this line we can just say lowercase modal` equals and just for organization this line of code should be indented. 
      `modal =`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then(x => {
            modal = new x.default()         //////               
         }).catch(() => console.log("There was a problem."))
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ``` 
(53.6)   
- Okay. I do want to point out though that `it's not as if every single time you click an open modal button we would want to try to load or import the file.` 
   
   - For example what if you opened the model once and then closed the modal and then click the button to open it again. 
   
   - Right `that second time you click it. We don't need to load the file again the browser already would have that modal code in memory.` 
   
   - So let's do this. I want you to `select these three lines of code. So starting from import and then down until the end of the catch line like this` 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         import('./modules/Modal').then(x => {                 //////
            modal = new x.default()                           //////               
         }).catch(() => console.log("There was a problem.")) /////
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   - let's `cut this into our clipboard` OK and let's `write an if statement` to `determine if the modal file has already been downloaded or not.` So we can say `if` `parentheses` `curly brackets` 
      `if () {}`

   - `after the closing curly bracket`. Let's also `set up an else block.` Else curly brackets. 
      `else {}`
   
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if () {   //////

         } else {  /////

         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   
   - Now for the condition `in these parentheses` only if `typeof modal` `double equal sign` to check for equality. Only if that equals `undefined`. 
     ` typeof modal == "undefined"`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {   //////

         } else {

         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   - So `to review` we are `first creating a variable named modal`. And `at first its type is going to be undefined`. Now `if that's the case then within the curly brackets for this if statement this is where we can paste back in our clipboard.` So go ahead and paste 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
             import('./modules/Modal').then(x => {            //////
            modal = new x.default()                           //////               
         }).catch(() => console.log("There was a problem.")) //////
         } else {

         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   - so `on demand we are loading in that file that we need` and `we are updating the value of that modal variable` right `to be a new instance of our class`. 
   
   - So then the `next time you would click on open modal button this would evaluate to false`. Right. Because now modal is an object not undefined. 
   
   - So `within the else block this is where we would just open the modal.` 
   
   - We don't need to load in the file again. We can just say lowercase `modal` dot and call its method named `open the modal`.   `modal.openTheModal()`
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
             import('./modules/Modal').then(x => {           
            modal = new x.default()                                         
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal()   /////
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
  -  Now` we would also want to open the modal within our if block.` So right `below this line where we're creating a new instance of it` 
  
  - only in this situation `we would probably want to give the browser a few milliseconds to create the object before we try to do something.` So I would actually set a `time out set time out. `` setTimeout()`
    ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
             import('./modules/Modal').then(x => {           
            modal = new x.default() 
            setTimeout()                 //////                                  
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal() 
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   - This allows you to give it a function that you want to run but also then tell it how many milliseconds to wait before you do that. 
   
   - So first I would give it an `arrow function` where I call `modal dot open the modal` after that `comma.` I would just want to wait maybe `20` milliseconds. Right. 
   `() => modal.openTheModal(), 20`
  
   - Just to `let the browser create that new object and inject the HDMI all into the Dom and just be ready` 
   
    ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'

   
   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
             import('./modules/Modal').then(x => {           
            modal = new x.default() 
            setTimeout(() => modal.openTheModal(), 20)        /////   
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal() 
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }
   ``` 
   
   - at this point let's go ahead and save this file. 
   
(53.7)   
-  But before we jump right into the browser let's be sure to `jump into our Modal.js file` and `update things a bit because now our main JavaScript file is handling the on click event.` 
   ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")  /////
      this.events()
      }

   events() {
      // listen for open click  /////
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))

      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
         
      // pushes any key
      document.addEventListener("keyup", e => this.keyPressHandler(e))
   }

   keyPressHandler(e) {
      if (e.keyCode == 27) {
         this.closeTheModal()
         }
      }

      openTheModal(e) {  ////
         e.preventDefault()
         this.modal.classList.add("modal--is-visible") 
      }
      
      closeTheModal() { 
         this.modal.classList.remove("modal--is-visible")
      }
      
   injectHTML() {
   ```
   - So `up in our constructor` we `no longer need to select the open modal buttons we can get rid of this line` 
   
   - `and within our events method` we also no longer need this. `Listen for open click event` so we can` delete all of that`. 
   
   - And finally I want you to go down and `find our open the modal method` and we `no longer need to worry about preventing the default behavior.` Right. That's being handled in our main JavaScript file. So within the parentheses for this method we don't need the `e` parameter and we definitely do not need this line where we say `prevent default`. 
    ```js
   class Modal {
      constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
        /////
      this.events()
      }

   events() {
               //////


      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
         
      // pushes any key
      document.addEventListener("keyup", e => this.keyPressHandler(e))
   }

   keyPressHandler(e) {
      if (e.keyCode == 27) {
         this.closeTheModal()
         }
      }

      openTheModal() {  ////
   
         this.modal.classList.add("modal--is-visible") 
      }
      
      closeTheModal() { 
         this.modal.classList.remove("modal--is-visible")
      }
      
   injectHTML() {
   ```
   - Ok let's go ahead and save this and back in the browser go ahead and perform a refresh. So we're dealing with all new event handlers OK. 
   
   And if I try to open the modal perfect 
   
(53.8)   
- but `to illustrate what's really going on` and why this is impressive `we need to use our developer tools in our web browser.` 

   - So I want you to do this go ahead and perform one more manual refresh. 
   
   - So at this current state the browser has not loaded the modal code and what I want you to do is right click anywhere and choose inspect right that will open your developer tools 
   
   - and then instead of clicking on elements or console we're actually interested in the network tab. If you don't see network you might just need to click on the arrows it might be hidden under the other options. But we are looking for the network tab and your developer tools. OK. 
   
   - Now if you refresh the page with this network tab open. So on P.C. that's control are on Mac. That's command are you will see a list of every asset that your browser downloaded. Right. 
   
   - So every CSX file every J Pag every JavaScript file. 
   
   - Now at this point I want you to click on this clear icon. It looks like a circle with an X through it. You didn't have to do that but it makes it easier to see if any new files are downloaded. 
   
   - Now at this point go ahead and click the button that will open your modal and now back in your developer tools Network tab. If you're like me you've resized this window to be quite small you might need to close the bottom console draw 
   
   - but notice the list of files that our browser has downloaded is updated. So as soon as we actually opened the modal in the browser it fetched a new JavaScript file named zero dash bundle the J S and it also obviously loaded the SPG icons that the modal displays. 
   
   - This is great. This proves that the browser is not downloading the extra modal code until we actually click on that. 
   
(53.9)   
- Now `if he didn't want that separate JavaScript file to be named 0-bundled` let me show you what you can do 
   
   - `back in app dot. J.S`. when we call import and give it a file path right at the start of this. So `in the parentheses` but before the quotes you can actually `write a comment.` 
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'


   let stickyHeader = new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu();
   let modal

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
            import('./modules/Modal').then(x => {        /////////       
            modal = new x.default() 
            setTimeout(() => modal.openTheModal(), 20)       
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal() 
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   - So slash asterisk and then space asterisk slash to close out the comment inside the comment. 
   We can say Web Park uppercase chunk uppercase name colon quotes and then you can give it whatever name you want let's call it modal OK. `/* webpackChunkName: "modal" */`
   
   - Let's save this file. `But in order for this change to actually take place we need to restart our web pack task.` 
   
   - So in the command line just `press control C` and then just fire it up again. So `NPM run Dev` OK. 
   
   - Now back in the web browser. Be sure to perform a manual refresh. And let's check our network tab. 
   
   - We do not see the modal file or any of its SPG icons in this list of files but if we clear that out using this icon and then open the modal back in our developer tools perfect 
   
   `we see that new file using our custom name modal.bundled,js` 
   
(53.10)   
- Now before we bring this lesson to a close `I want to review. `
   
   - So yes in this particular instance our mobile file is not a very large file 
   
   - so we technically don't really need to do this but it's important that you have this tool in your tool box. 
   
   - If you have a large and complex javascript module that you don't need right away. The idea is that you can load it on the fly so that when the visitor first comes to your Web site everything loads very quickly. 
   
(53.11)   
- And one final additional note before we close out this video. If we `jump back into App dot J.S.` in our previous video` I promised I would explain when we need to store a new instance of an object into a variable or not. `

   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'


   let stickyHeader = new StickyHeader()  ///2
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   let mobileMenu = new MobileMenu(); ///3
   let modal  ///1

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {           
            modal = new x.default() 
            setTimeout(() => modal.openTheModal(), 20)       
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal() 
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ```
   
   - Well as we learned in this lesson` you do want to save a new instance of a class into a variable If you're going to need to access it or call its methods later on` right 
   
   - in this case any time the user clicks on one of those open buttons we are actually running the objects open the modal method. 
   
   - So in this case we absolutely wanted to save that new instance of a class into a variable 
   (`///1`)
   
   - but for everything else in our example application `for example the sticky header` that does not need to live in a variable so we can get rid of that first part of this line
   (`///2`) 
   
   - and the same thing is true of our `mobile menu`. `We don't need to store that in a variable.`  
   (`///3`) 
   
   - So I can save this and nothing on our Web site is going to break.
   ```js
   import '../styles/styles.css'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'


   new StickyHeader()  ///2
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   new MobileMenu(); ///3
   let modal  ///1

   document.querySelectorAll(".open-modal").forEach(el => {
      el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {           
            modal = new x.default() 
            setTimeout(() => modal.openTheModal(), 20)       
         }).catch(() => console.log("There was a problem."))
         } else {
            modal.openTheModal() 
         }
      }) 
   })

   if (module.hot) {
      module.hot.accept()
   }

   ``` 
   
   - `However you would want to get in the habit of storing these into variables if your different modules would need to interact with each other.` 
   
(53.12)   
- Now for our travel Web site that's not the case but `if in another project you are building something rather complex where different modules should trigger other events inside of other modules.` Well I would encourage you to look up a package on NPM named `event-emitter`. 
   
  - You can see just in the last week it was downloaded two point three million times. 
   
   - And `the idea here is that inside one of your modules.` Right. So for example inside our modal module if something happens right. `If a certain event happens you can emit an event back to your main JavaScript file` 
   
   - and then when your main JavaScript file detects that event it could call a method on another object. 
   
   - This way your individual modules don't need to import or even be aware of the other modules. Right. Each module self-contained. 
   
   - But your main JavaScript file is sort of the puppeteer you can broadcast certain events to it. And then if you've been storing your objects in variables as we saw here it's very easy to begin working with that and then call a certain method. 
   
   - Again we don't need that sort of complexity for our travel Web site. So going to delete that. 
   
   - But that's just a tip for your future projects 
   
   - anyways. That's going to bring this lesson to a close 
   
   - in our next lesson we are going to learn about lazy loading our images. We are getting very close to pushing our Web site up onto the Web to share with our friends and family. So let's keep things rolling and I will see you in the next lesson.

   
54. Lazy Loading Images for Faster Page Loads

   
(54.1)   
- In this lesson we will learn `how to improve our sight speed and make it load faster by using a technique named lazy loading.` 
  
(54.2)   
- So `the idea behind lazy loading is to only download assets as they become necessary `

   - in this lesson `we are going to focus on lazy loading our images` we `only want to download images as they are getting ready to be scrolled into view`. All right. 
   
   So now we know what our goal is for this lesson. Let's roll up our sleeves and make it happen. 
   
(54.3)   
- Let's begin by `jumping over to the command line` and let's `take care of our get branches`. 
   
   - So in our previous lesson `we completed the create modal functionality` so let's merge this branch back into Master. Let's run it `git status` to see what has changed. 
   
   - All of these changes look good to me. Let's `add them to our staging area`. `git add -A`
   
   - Let's `commit that staging area` and include a message `git commit -m 'Completed the modal overlay.'` All right. 
   
   - Now that we've committed those changes we can `jump back to our master branch`. So `git checkout master` 
   
   - And now we just want to `merge the create-mobile branch into it`. So `git merge create-modal` 
   
   Now just in case our computer blows up tonight we don't want to lose our progress. So why don't we `push our repo up to GitHub` so we can say `git push origin master` All right. 
   
   So now GitHub has our latest copy of the master branch.

(29.16)(git branch -d count-to-15)
- Let's `keep the local copy of our repo clean` by deleting unnecessary branches.

   - So if we run the `git branch` command to list all of the branches we see `count to 15` which was deleted on the Github servers but it wasn't deleted in our local copy of the repo. 

   - So let's go ahead and `delete that locally`.
         - `git branch -d count-to-15`

   - Let's also `delete the count-to-10` branch
         - `git branch -d count-to-10` 
   


(54.4)   
- Now let's go ahead and `create a new branch for this lazy loading feature.` 
   
   - Why don't we try something a little different this time. Let's say get branch and then the name of the branch. We want to create. Let's just call it lazy loading. 
   `git branch lazyloading`
   
   - So that created the new branch but now `we need to check out the new branch or switch to it` so we can just say `git checkout lazyloading` All right. 
   
   - So now we are working within a new branch. 
   
   Let's get to work. We can actually stay in the command line for now because the 
   
(54.5)   
- first thing we want to do is `download a lazy loading library from NPM`. 
   
  -  So type in this command with me `npm install lazysizes` 
   
   - `we do not need to include --save-dev` at the end because this is not a package that makes our workflow easier. This is a package that we actually want the visitors to download. 
   
   - In other words this is a direct dependency not a death dependency. 
   
   - Let's go ahead and press enter as soon as the package finishes downloading. Let's be sure to `start our web pack task up again`. So `npm run dev` OK. 
   
(54.5)   
- Now `leveraging the lazy sizes packages could not be any simpler`. 
   
   - We just need to `go into our main JavaScript file` so that's app assets scripts` App.js`    
   
   - and towards the very top maybe `right after the line where we import our CSS.` We can just say import and we don't need to name it we can just import the entire module. So just quotes and the name of the package. Lazy sizes and that's it. `import 'lazysizes'`
   ```js
   import '../styles/styles.css'
   import 'lazysizes'    
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   ```
   - `We don't need to create a new instance of it.` The package will take care of everything. So let's go ahead and save this file.
   
(54.6)   
- And now we just need to `jump into our html file to tell lazy sizes which images we want to be lazy loaded` as opposed to just loading the standard or typical way. 
    
   - So do this with me `jump into your index that html file` 
   
   - so `towards the very top. We don't need the lazy load anything right`. Because even if someone's on a very small screen they're going to be able to see this photo immediately. 
   
   - I think the first image we would want to lazy load would be this image. So `in our html` Let's scroll down to about line number fifty five. That is `the our beginning area.` And for me it's around line number sixty one where we actually see that image. 
   ```html
    <div class="wrapper wrapper--medium wrapper--b-margin">
          <img sizes="(min-width: 970px) 976px, 100vw" srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
       </div>
   ```
   - Now `to tell the lazy sizes packages to do its job we just need to give this image an extra class `
   
   - currently this image doesn't have any classes. So let's give it an attribute class and let's give it a value of lazy load. `class="lazyload"`
    ```html
     <picture>
            <source sizes="404px" data-srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)">
            <source sizes="320px" data-srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
            <img class="lazyload" data-srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
          </picture>
   ```
   - So the lazy sizes packages will look for any image on the page that has this `class lazyload` on this same image element We also need to `find the srcset attribute.` 
   
   - Now `by default when a Web browser sees the srcset or the source attribute is going to try to download this immediately.` 
   
   - However `if we change this attribute to` instead be `data-srcset` well `web browsers are not programmed to immediately download this attribute.` 
    ```html
    <div class="wrapper wrapper--medium wrapper--b-margin">
          <img class="lazyload" sizes="(min-width: 970px) 976px, 100vw" data-srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
       </div>
   ```
   - `So that takes care of that image.` 
   
   - Let's `scroll down and find this image.` So for me that begins around line number 66. 
   ```html
    <picture>
      <source sizes="404px" srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)"> 
         <source sizes="320px" srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
            <img srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
   </picture>
   ```
   - So `on this source element` here is srcset right. That's what's listing the actual J pigs. So just change that to be `data-srcset` 
   
   - do the same thing for this `data-srcset` 
   
   - around line number sixty nine we see the actual image element. So change that to `data-srcset` as well. 
   
   - And finally on the actual image element let's `give it a class of lazyload`. OK. 
   ```html
    <picture>
      <source sizes="404px" data-srcset="assets/images/our-start.jpg 404w, assets/images/our-start-hi-dpi.jpg 808w" media="(min-width: 1020px)"> 
         <source sizes="320px" data-srcset="assets/images/our-start-portrait.jpg 382w, assets/images/our-start-portrait-hi-dpi.jpg 764w" media="(min-width: 800px)">
            <img class="lazyload" data-srcset="assets/images/our-start-landscape.jpg 800w, assets/images/our-start-landscape-hi-dpi.jpg 1600w" alt="Our founder, Jane Doe">
   </picture>
   ```
(54.7)   
- Now you could apply lazy loading to our SVG images if you wanted to but `they're so small. I'm not going to worry about it for now `



- `let's apply lazy loading to the three images down in the testimonials section.` 
   
   - So around line number 123 we begin the testimonials area. So `here is the first` of three images. 
   
   - Let's change source that could be `data-srcset` and give the image element a class of `lazyloan`. OK. 
   ```html
   <div class="testimonial__photo">
              <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-jane.jpg 160w, assets/images/testimonial-jane-hi-dpi.jpg 320w" alt="Jane Doe">
            </div>
   ```
   - Let's take care of the other two testimonial photos. So change this to data dash so asset class should be lazy load. 
    ```html
   <div class="testimonial__photo">
              <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-john.jpg 160w, assets/images/testimonial-john-hi-dpi.jpg 320w" alt="John Smith">
            </div>
   ```
   Here's the third and final testimonial photo data dash class people's lazy load. 
   ```html
   <div class="testimonial__photo">
              <img class="lazyload" sizes="160px" data-srcset="assets/images/testimonial-cat.jpg 160w, assets/images/testimonial-cat-hi-dpi.jpg 320w" alt="Cat McKitty">
            </div>
   ```
   - Let's go ahead and save this and then back in your browser go ahead and scroll up to the very top and perform a manual refresh. 
   
(54.8)   
- Actually first make sure that your developer tools network tab is open so inspect and then open up the network tab and then perform another refresh right now OK. 
   
   - Now depending on the size of your browser window and depending on how zoomed in or zoomed out you are that's going to affect what lazy sizes thinks that it should download ahead of time. 
   
   - So at my current zoom level and the size of my browser report I believe it's going to download all of the images except for the three testimonials in the very bottom. 
   
   - The easiest way to test this is back in your network tab. You can click this clear icon it's a circle with a line through it 
   
   - that will clear the list of files that have been downloaded and then let me resize my windows so I can see my network tab even while I'm viewing the Web site. OK. 
   
   - So I will refresh again and clear the network history once again. And now as I scroll down you'll see right about here. Lazy sizes just loaded the first testimonial image. 
   
   - If I scroll down a tiny bit further it loads the second testimonial and finally if I scroll down a bit further it loads the final and third testimonial image. Cool. 
   
(54.9)   
- And that's all it takes to implement lazy loading for your images lazy sizes is a great package that's already thought of every detail 
   
   - I've read their documentation and they've even made sure that your search engine optimization score with Google will not be affected. 
   
   - Images are not actually hidden from the Google crawler. 
   
   - The lazy sizes JavaScript can detect if the current device that's access in your website can scroll or not. 
   
   - If the device cannot scroll it just actually lets the image load immediately so it's a great package. 
   
   - It has tremendous attention to detail and our job here is done. 
(54.10) 
- More importantly give yourself a pat on the back maybe throw a party because we just finished creating our travel Web site and that's a pretty big milestone 
   
- now in our next lesson. We will get ready to go live. 
   
- We will need to prep our site files before we go ahead and deploy them to get hubs free hosting so that the world can view our site. 
   
- This is the one remaining step we have before we can share our site with the entire world. We are almost to the finish line. Let's keep rolling and I will see you in the next lesson. 


### Section 19: Building and Deploying


55. Preparing Our Files for Go Live (Part 1)

  
(55.1)   
- in this lesson we're going to set things up so that we still have the app folder just the same as it's always been that's for us the developer but `we're also going to have web back automatically generate another copy of our Web site.` 
   
   - So it's going to create `a new folder in this directory named dist short for distribution and that will be the copy of the Web site that we actually deliver to a web host intended for the public to view. `
   
   So again the app folder is for us the developer the source code and then the dist folder that we're going to create is for the public.   
   
(55.2)   
- This process of creating a copy of your project that is ready to distribute is often referred to as your `build process.` 
   
   - And luckily for us `Webpac is arguably the best tool in the world to create a build process with.` So let's get to work. 
   
(55.3)   
- Well actually before we start working on our build process let's first take care of our get branches. 
   
   - So this lazy loading branch is ready to be merged into Master. Let's run and `git status` to see what's changed. 
   
   - These changes look good. Let's add them all to our staging area
   `git add -A` 
   
   - and then let's commit that staging area and say Completed lazy loading of images. `git commit -m 'Completed lazy loading of images.'` 
   
   - Now that we've committed those changes we can safely jump back to the master branch so `git checkout master` 
   
   - And now we just want to merge in the lazy loading branch so
    `git merge lazyloading` All right. 
   
   - So our master branch has now updated. 
   
   - Let's go ahead and create a new branch for our build process so we can just say `git branch build-process`  press enter 
   
   - and then let's switch over or check out that branch. So 
   `git checkout build-process` Cool. 
   
   Let's get to work. So 
   
(55.4)   
- whenever we want to get work done we know that we go into the command line and run our NPM run Dev task right that spins up our Web pack dev server. Well right now `let's create another command that we can run named NPM run build that will generate the copy of our website for the public.` 
   
   - So `to create a new NPM script or command like that we can just jump into our package.json File`. Okay. 
   
   `We are looking for these scripts area`. So here is that NPM run Dev script. So at the end of this line there's a comma or if there's not already a comma. Be sure to add one but let's drop down to a new line 
   ```json
    "scripts": {
      "dev": "webpack-dev-server",
             ///////
      "test": "echo \"Error: no test specified\" && exit 1"
   ```       
   and let's say quotes you could name it anything but just so you and I are on the same page. Let's name it build quotes build coal in quotes and then we just need to call Web pack. `"build": "webpack",`
    ```json
    "scripts": {
      "dev": "webpack-dev-server",
      "build": "webpack",   ////
      "test": "echo \"Error: no test specified\" && exit 1"
   ```
   - And `if this is not the last script` for you so you can see I have this one name test then. `Be sure to include a comma at the very end of this line.` OK. 
   
   - So big picture when we want to work on our Web site we run NPM run Dev. That's an ongoing task that's going to stay open and running until we tell it to stop. 
   
   - However NPM run build will be a task that just runs once. It's going to generate the alternate copy of our Web site and then it's done. 

   
(55.5)   
 - we need to `jump into our web pack config dot J.S. file.` Now `within this config file we need to be able to determine which NPM script just ran was it NPM run Dev or was it NPM run build.` 
   
   - Because we need to do drastically different things depending on the situation. Right.   
   
   - One is optimized for our convenience and workflow as a developer. 
   
   - The other is optimized for publicly deliverable files. 
   
   - So do this with me up at the very top of our `Webpack.config file` it's start a brand new line of code and let's say a `const` 
   ```js
   const /////
   const path = require('path')

   const postCSSPlugins = [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-hexrgba'),
      require('autoprefixer')
   ]
   ```
   - and we can name this anything but just so you and I are on the same page. Let's name it `currentTask` and let's set it to `equal` whatever `the name of the current NPM script.` That was just executed is to grab that value we can just say process.env.npm_lifecycle_event this is super useful.
   `currentTask = process.env.npm_lifecycle_event `
   ```js
   const currentTask = process.env.npm_lifecycle_event  /////
   const path = require('path')

   const postCSSPlugins = [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-hexrgba'),
      require('autoprefixer')
   ]
   ```
   
   - So now our constant variable named `currentTask will equal either Dev or build.` Right. Because those are the names of our two scripts Dev or build. 
   
(55.6)   
- So now we can do different things. `We can configure web Park differently depending on whether it's Dev or build.` 
- Now from this point there are a million different ways you could organize this code to be different for the two scenarios. But `let me show you how I would do it.` 
   
   - So `right below our collection of postsCSSPlugins` or right above where we say module that exports equals I would add a new line and I would `create a variable` we can name it anything but to be on the same page. Let's name it. Config So let config equal a new or empty object
    `let config = {}`
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')

   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   let config = {}   /////
   ```
   - We will circle back to this in just a moment. 
   
   - Now after that I would set up an `if statement` and I would say if parentheses curly brackets for the condition if `currentTask` `double equal` sign to check for equality `if that equals Dev` well then this is where we can customize the config object for Dev  `if (currentTask == 'dev') {}`
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')

   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   let config = {}
   
   if (currentTask == 'dev') {  ////

   }


   ```
   - and then let's just copy and paste this if statement `and right below it just paste it in again` and check to see `if an equals built.` Okay.
   `if (currentTask == 'build') {}`
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')

   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   let config = {}
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') { ////

   }

   ```
   - Now `this configuration object.` 
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')

   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   let config = {}
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') {

   }

   module.exports = {             //////////////////////////////
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }
   ```

   - This is `no longer what we want this file to export but I don't want to just delete this code right away` because we can use this as reference code. 
   
   - We know that this works perfectly for our dev environment. 
   
   So just to keep this code around let's `change this from module.exports to  a variable` and `let's just call it deleteMeLater.` So by the end of this lesson we can delete all of this but for now it's a good reference 
   ```js
   let config = {}
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') {

   }

   let deletMeLater = {             //////////////////////////////
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }
   ```
   - and then down `at the very very bottom of this file.` Let's `add a new line` and say` module.exports = config` object that we created. 
   ```js
   let config = {}
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') {

   }

   let deletMeLater = { 
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config ///////////////////

   ```
   - So let's `scroll back up to where we first created config` so `the idea is that any configuration that can be the same or shared between dev and build will live in this object here ` let config = {}
    ```js
   let config = {}  /////////////////////
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') {

   }

   let deletMeLater = { 
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - and `then any code that's specific to Dev`. Well we can modify the config object `in this if statement`   
   ` if (currentTask == 'dev') {}`
   
   and `we can setup unique things for the build task within this if statement.`  
   `if (currentTask == 'build') {}`


(55.7)   
- Let's `start with a piece of configuration that's the same for both dev` and build. And that is `our entry point` 
   
   - right. No matter what `the entry point into our application is always going to be that main App.js` file.  So let's just `copy this entry line` endure clipboard and `then within this let config` equals `within these curly brackets` you can drop down and then `paste in` your clipboard. Cool. 
   `entry: './app/assets/scripts/App.js',`
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',  ////////////////////////
   }  
   
   if (currentTask == 'dev') {

   }

   if (currentTask == 'build') {

   }

   let deletMeLater = { 
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - Now we no longer need that within this reference code `so we can get rid of that down here` 
   
   ```js
   let deletMeLater = { 
     ////////////////////////////////////////
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
(55.8)   
- and now `output` is an example of something that `should be different depending on whether it's for Dev or build.` 
   
   So regarding the bundled file that Web pack generates. `Where do we want it to live.` 
   
   Well `this could make sense for Dev right.` It's going to `add it to the app folder`   `path: path.resolve(__dirname, 'app')`
   
   but `for our build` the task we would want this to be the dist folder. 
        `path: path.resolve(__dirname, 'dist')`
   
   - So let's do this. Go ahead and `select these curly brackets for the output value.` We `don't need to select the output: property name` we just want the curly brackets for this object 
   `{filename: 'bundled.js' ,path: path.resolve(__dirname, 'app') }`
   
   - and go ahead and `copy this into your clipboard` OK. Now up `in the if statement for Dev` let's say `config.output =` and `then just paste in your clipboard`. OK. 
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      //////paste
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
   }

   if (currentTask == 'build') {

   }

   let deletMeLater = { 
      
      output: {                              ////copy
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - And `then within the if statement for build` then the curly brackets we can say `config.output =` And `once again just paste in your clipboard.` Only this time instead of outputting the bundle to 'app' we would want this to be `'dist'` OK 
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
   }

   if (currentTask == 'build') {
      config.output = {                         //////paste                     
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
   }

   let deletMeLater = { 
      
      output: {                              ////copy
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      },
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - so `now down in our reference code we no longer need the output.` 
   
(55.9)   
- `Next up we see devServer`. Now `this entire bit of dev server code that is entirely only for the dev task.` We don't need this at all for the build task. 
   
   - So just begin selecting from this curly bracket down to the closing curly bracket here. You don't need to select the property name just the actual object itself. `So from curly bracket to curly bracket. Copy that into your clipboard` 
   ```js
            {
         before: function(app, server) {
               server._watch('./app/**/*.html')
         }, 
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000,
         host: '0.0.0.0'
      }
   ```
   - and `then up within our if statement for Dev` `after this chunk of code for output` we can just say `config.devServer = equal` And `then just paste in your clipboard`. OK 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer = equal {                 ///// paste 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }                        

   }

   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
   }

   let deletMeLater = { 
      
      
      devServer: /// {                                 /// cut
         before: function(app, server) {           ///
               server._watch('./app/**/*.html')    ///
         },                                        ///
         contentBase: path.join(__dirname, 'app'), ///
         hot: true,                                ///
         port: 3000,                               ///
         host: '0.0.0.0'                           ///
      },                                            ///


      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - let's go ahead and `get rid of that down in our reference code.` 

(55.10)   
- `Next` up we see a property named `mode = 'development'` 

   - obviously for Dev we would want this to be `development`
   
   - `but for build` we would want this to be set to `mode = 'production'` 
   
   - essentially during development. There are different things that web patch can do for us to make our life as a developer easier. 
   
   - But when we're just delivering code to the public we don't need to do those things any longer. 
   
   - So backup `in the if statement for Dev` after the object for config got dev server we can just say `config.mode = 'development'` OK 
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer = equal {                 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }
      config.mode = 'development'  /////////////////

   }

   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
   }

   let deletMeLater = { 
      
      
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
               }
            ]
         }
      }

      module.exports = config

   ```
   - then let's go `set it up for build`. So `within the if statement for build` after config output to say `config.mode = 'production'` OK 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer =  {                 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }
      config.mode = 'development'  

   }

   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'     /////////////////
   }

   let deletMeLater = { 
      
      
      mode: 'development',
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   }

      module.exports = config

   ```
   - so `now down in our reference code we no longer need mode `
   
   
(55.11)   
- and now `all that's left is the module property.` 
   ```js
   let deletMeLater = { 
      
      
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   }

      module.exports = config

   ```
   - Now a bit later we will indeed want this to be different for Dev and build but `for now just so we can move forward and test our two tasks. Let's consider this to be shared or that it can be the same between the two tasks.` 
   
   - So `this time we do want to select the property name`. 
   
   - So just select `from module down to this closing curly bracket`. Make sure you `do not accidentally select the additional closing curly bracket` so your selection should end with a ending square bracket and then just one ending curly bracket.


   
   - Let's go ahead and `we can even cut this into our clipboard` instead of copying it. 
   ```js
   module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   ```
   - And as you can see this is now completely empty so it can live up to its name right of delete me later. This is that moment let's `just delete it`. OK 
   
   - now with that code in our clipboard let's go up to our `config` object right. `This is the shared code for Dev and build.` 
   
   - Now `after this line of entry` and it ends with a comma we can just drop down and paste in our clipboard. OK. 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                             ///////////////////
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   }  
   
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer =  {                 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }
      config.mode = 'development'  

   }

   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
   }

  
      module.exports = config

   ```
(55.12)   
- At this point let's go ahead and save this file and `let's test out our two NPM scripts.` 
   
   - So in our command line let's first test and `make sure that our dev task is still running` as it has been throughout the course. 
   
   - Let's make sure we didn't break anything. So NPM run dev that should fire up our web pack dev server back in the browser. 
   
   - Our website should be available from local host colon three thousand looks good to me. 
   
   - If you really want to test to make sure that it's still working you could go into your main `App dot J.S.` file and maybe just `add an alert line` that says hello. This is a test. `alert("hello, this is a test.)`
   
   - Give that a save and you should see that pop up in the browser. Cool. `Let me get rid of that alert text message `
   
   - so we know that our dev task is working so `we can stop that task in the command line` press control see we know that it's working properly and this is the moment of truth. 
   
(55.13)   
- Let's test out our build task so to run that we just say `npm run build` 
   
   - now how do we know if that was successful. Well if you open up your project folder well in the directory where you would find your app folder we should now also see a brand new automatically generated folder named `dist`. 
   
   - And if we go into the disk folder. Perfect. So this is our main bundled file with all of our javascript and CSS 
   
   - and this little lonely file `is our modal javascript`. Remember we set that up so it loads on the fly. Or on demand only when the user actually clicks on the button to open the modal. 
   
(55.14)   
- So we still have a bit of work to do 
   
   - we still need to set up Web pack so that it also copies over our html. 
   
   - And so it splits the CSS out of this file into its own traditional CSX file 
   
   - and so it also copies over all of our images and photographs into the disk folder. 



56. Preparing Our Files for Go Live (Part 2)

(56.1)   
- I first want to `enable a feature in web back only for our build task that will help our visitors download less data in the long run. `
   
   - Let me show you what I mean. So right now do this with me within our `webpack.config file.` 
   
   Let's `find the if statement` for our `build` task right. 
   ```js
   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
   }


   module.exports = config
   ```
   - So if currentTask equals build maybe right `after this config.mode = 'production'` we can just drop down and let's say `config.optimization` So this should `equal` an object within this object let's say `splitChunks:` Colon and that should be set to an object itself. And let's just give it one property named chunks. Colon and then give it a value of quotes all. 
   `config.optimization = {splitChunks: {chunks: 'all'}`
   ```js
   if (currentTask == 'build') {
      config.output = {                                             
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
   }


   module.exports = config
   ```
  - So all in all I just added these three highlighted lines of code. If you need to pause the video to type this in. That's OK. But 
  
  - once we're ready let's go ahead and save this and let's run our` NPM run build` task again. 
  
  - So in the command line let's test out our build process so NPM run build. 
  
  - Let's see what's different this time around. So if we go back into our disk folder instead of only two files we now have three. 
  
  - So this is our main overall bundle. This is the modal javascript module that should be loaded on the fly. `And this brand new file. This is our vendor code.` 
  
  - In this case vendor `just means code that we didn't write.` 
  
  - So for example the load Ash throttle and d bounce functions and also the lazy sizes javascript. 
  
(56.2)  
 - ` Why would we want these in a separate file`. Well imagine the scenario where the code that we write ourselves write our sticky header our Reveal on scroll. Imagine that that code is going to change very frequently so the visitors of our Web site would need to be continually downloading a new copy of this file. 
  
  - `However if the load ash does bounce and throttle and if the lazy sizes packages` if that code that we didn't write `doesn't get updated very often there's no sense in forcing our visitors to re download that every time we want them` to read download the code that we write in the long run. 
  
  `This can save our visitors from downloading quite a bit of unnecessary data. `OK. 

(56.3)  
- Now with this in mind `we need to think about the way that web browsers handle caching of files. `

   - So imagine we make a change to our Reveal on scroll J.S. file and then we need to create a new bundle. Well we'd probably want that new bundle there generated file to in some way have `a slightly different file name.` 
   
   - So `the web browser would know that it's different` that it's changed and that it should re download the file `from the server` instead of using its own local cached copy. 
   
   - So let me show you what we can do. `Back in our webpack.config` within `the if statement for our build` the task I want you to `find the config.output area`. 
   ```js
   if (currentTask == 'build') {
      config.output = {                 /////                                   
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
   }


   module.exports = config
   ```
   - So instead of the filename: just being 'bundled.js' Well let's hollow out these quotes and instead type this in with me `square brackets` inside the square brackets type `name` and then `dot` after the square brackets `new set of square brackets` and inside these say `chunkhash` and then after the square brackets say `.js` OK. 
   ```js
   if (currentTask == 'build') {
      config.output = {                                                    
         filename: '[name].[chunkhash].js',  ////
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
   }


   module.exports = config
   ```
   - Now at the very end of this line Let's go ahead and `create a new line` and let's say `chunkFilename:` `quotes` and at the end of the quotes at the very end of this line while we're at it. Be sure to include a `comma`. OK. Now `within these quotes` we can just use the exact same value that we used on this line.  `'[name].[chunkhash].js'` So you can just copy within these quotes and then paste that within these quotes. 
   ```js
   if (currentTask == 'build') {
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
   }

   ```
   - OK. Let's go ahead and save this. But `before we run our build task in the command line` I want you to `go into your dist folder and go ahead and manually delete these three files just moving to the trash OK. `
   
   - Now back in our command line let's test things out. Let's run our build process so `NPM run build` OK. 
   
   - And then let's go check out our disk folder. Perfect. 
   
   - So we see two new changes `instead of every file having just the basic name of bundled bundled one bundled two. Now we actually see their names` right. Main modal the vendor's file for the main file. 
   
   - And then `after that name we also see a string of characters that is the chunk hash.` 
   
   - What in the world is a chunk cache. 
   
   - Well if we ran NPM run build once again these seemingly randomly generated strings of characters would stay exactly the same because none of our actual files changed. 
   
   - However do this with me `if we go into our main App dot J.S.` and just write an `alert` that says `testing` and we save that and we run NPM run build once again well. 
   
   - Notice `now that I have a new copy of that main bundled file` `with a different chunk cash right.` So its main dot and then the chunk cash string. So this is a new one. 
   
   - However nothing in these two files actually changed. So they have the identical or same chunk hash. This is great. 
   
   - This allows us to perform cash busting for the web browser visitors web browsers will see that the file has a new name and know that hey. Something must have changed in that file. I need to download the newest version of the file. 
   
(56.4)  
- However `we obviously don't want to have two copies of the same file.` So right now `let's set things up so that every time we run our build process it begins by completely deleting this folder` so that then only the most recent latest copies of each file exist. 
   
   - I would have thought that this is a feature that web pack includes by default. But `as of today we actually need to go download a plug in `
   
   - so do this with me `in your command line` run the following command 
   `npm install clean-webpack-plugin --save-dev`  
   
   - `within our Webpack.config file` let's `leverage that new plug in` up `at the very top.` I will say contest let's say curly brackets clean web pack plug in let's set that to equal. And then just require it and so require in the exact name of the package was lowercase clean dash web pack dash plug in. OK. 
      `const {CleanWebpackPlugin} = require('clean-webpack-plugin')`

   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')
   const {CleanWebpackPlugin} = require('clean-webpack-plugin') /////
   ```
   - Now we can go `leverage this within our build process`. So let's `find the if statement.` So if current task equals build and then maybe `below this configure optimization` we can just say `config dot plugins equals`. And this should be an array so you can have multiple plugins if you'd like to. For now we can just have one item in this array so we would just create a new instance of. And then the name we gave it is clean web path plug in and instead of parentheses. OK. `config.plugins = [new CleanWebpackPlugin()]`
   ```js
   if (currentTask == 'build') {
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin()]
   }
   ```
   - Let's give this a save and then `to really test it out.` Let's make another random change `in our main JavaScript file` so that it will have a new chunk cache. So you could just add a few random strings in this `alert message` just so it's different. Save that. `alert("testing!!!!!!!")`
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   alert("testing!!!!!!!")   ///////////

   new StickyHeader()
   new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
   new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
   new MobileMenu();
   ```
   - And now let's run a fresh build process. So in the command line `NPM run build` 
   
   - cool so on my screen we saw there was an old copy of Maine and then it got deleted. Actually all the files were deleted but these two were instantly replaced. They still have the exact same chunk hash because they didn't actually change. And `here we see the brand new latest copy of our main bundle with a new chunk cash value `
   
(56.5)  
- at this point let's change gears a bit and `let's work on extracting the CSS out of this main bundle.` And have it instead live in its own separate traditional CSS file. 
   
   - That way if we make a change to our CSX it doesn't force our visitors to have to download the entire bundle again. They could just re download the CSX file 
   
   - so let's go download the industry standard package to make that possible jump back into your command line and run this with me. Let's say `npm install mini-css-extract-plugin --save-dev` 
   
   - and this package is great. Just in the last week alone it's been downloaded over 5 million times. So go ahead and press enter OK 
   
   - and then back `in our webpack.config file` up at the very top. Let's import in that new package so 
   `const MiniCssExtractPlugin = require('mini-css-extract-plugin')`  
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')
   const {CleanWebpackPlugin} = require('clean-webpack-plugin')
   const MiniCssExtractPlugin = require('mini-css-extract-plugin')

   ```
   - Now `we actually need to leverage this plug in in two different locations` in this config file. 
   
   - So `first` `within` our generic or `shared configuration` within the `module` property we see `rules` and then we have a rule that only applies to CSS files and it's using the style loader and the CSS loader in the post CSS loader. 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                            
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   }  
   ```
   
   - `Well we want to use a loader that that new extract plug in offers to us.` 
   
   - `However we only want to use it for our build task` not for our dev task. 
   
   - Also we only want to use this `'style-loader'` `for dev` `but not for build` so to handle the different situations here's what I would do. 
   
   - We can see that `rules: is an array` right. The square brackets now. `Right now there's only one rule` the rule for our CSX files 
   
   - but what we can do is `make this a variable` and `then modify it in the if statements for Dev` `and build accordingly`. 
   
   - So here's what I would do `within this array`. The square bracket. `Select the one rule that we have.` So `from Curly bracket to curly bracket` like this and `cut this into your clipboard` 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                            
         rules: [
            ////
         ]
      }
   }  
   ```
   - in its place. Say `cssConfig` 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                            
         rules: [
           cssConfig
         ]
      }
   }  
   ```
  - Okay now we just need to `create a variable with this matching name` so maybe `right above config` we can say left CSX config equal and then paste in our clipboard. `let cssConfig = {}`
   ```js
   let cssConfig = {  //////
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }

   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                            
         rules: [
           cssConfig
         ]
      }
   }  
   ```
   - OK now in the code that we just pasted in. `Be sure to delete style-loader` like this. 
   ```js
   let cssConfig = {
               test: /\.css$/i,
               use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }

   let config = {
      entry: './app/assets/scripts/App.js',
      module: {                            
         rules: [
           cssConfig
         ]
      }
   }  
   ```
   - OK now we can just modify this `within the dev if statement` to `add style loader back in` 
   
   - and `also modify it within the build if statement` to `add in the C Ss extract plug we just download it.`
   
   - So first let's `go into our if statement for the dev` task 
   ```js
   if (currentTask == 'dev') {
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer =  {                 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }
      config.mode = 'development'  
   }
   ```
   - and `maybe write inside the curly brackets` for that if statement we can just say `cssConfig.use` Remember that is an array so we can say `.unshift` to add an item to the beginning of the array. So for the dev task we can just say `quotes` `'style-loader'` OK  `cssConfig.use.unshift('style-loader')`
   ```js
   if (currentTask == 'dev') {
      cssConfig.use.unshift('style-loader')  //////////
      config.output = {                      
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      }
      config.devServer =  {                 
         before: function(app, server) {           
               server._watch('./app/**/*.html')    
         },                                        
         contentBase: path.join(__dirname, 'app'), 
         hot: true,                                
         port: 3000,                               
         host: '0.0.0.0'                           
      }
      config.mode = 'development'  
   }
   ```
   - and then let's `scroll down to the if statement for our build task.`
   ```js 
   if (currentTask == 'build') {
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin()]
   }
   ```
   - If current task equals build right inside there we can just say `cssConfig.use.unshift()` and in this case we want to use the loader that came with that package we just downloaded from NPM so `MiniCssExtractPlugin.loader` 
      `cssConfig.use.unshift(MiniCssExtractPlugin.loader)`
   ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)  ////
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin()]
   }
   ```
   - Okay that takes care of the loader situation. `Now we just need to actually add this as a plug in.` 
   
   - Luckily for us down here we already have `config.plugins =` 
   ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin()] ////
   }
   ```
   - So right now we just have one item in this array of plugins but right after we call the clean web back right here we can say `comma`. And then just create a new instance of mini CSX extract plug in parentheses at the end. 
      `new MiniCssExtractPlugin()`
    ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin()] ////
   }
   ```

   - Now `inside these parentheses` we want to give it an object so `curly brackets` and we just need to give it one option and that is 
   `{filename: }` so file name colon because I want to have fine grained control over the name of the CSS file that gets generated. So let's say `quotes.` So inside these quotes let's say `styles.` dot and then `square brackets` inside the square brackets let's say `[chunkhash]` after the square brackets a `.css`
      `{filename: 'styles.[chunkhash].css'}`
    ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})] ////
   }
   ```
   - OK let's go ahead and save this and `test out our new build process` so in the command line just run `NPM run build` OK. 
    
   - Let's go check our dist folder. Perfect. Here `we see a separate traditional CSX SS file` 
    
(56.6)  
- now `by default it will not be compressed or mystified.` So if I check the file size currently it's about 21 kilobytes. 
    
   - Let me show you how `we can set things up so this file is modified or compressed` 
    
   - back in our command line. I want you to `install one more post CSF plug in with me` to run this command `npm install cssnano --save-dev` Be sure to include dash dash save Dev OK. 
    
   - Now `we only want to run this nano package that will compress our C Ss within our build the task` not our dev task. So `within` 
   `if (currentTask == 'build') {}`  maybe right below that C Ss config line we just wrote 
   ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      ///////////////
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})] ////
   }
   ```
   - We can just say `postCSSPlugins` Remember at the very top of this file we have a collection of plug ins with this name so we can just say `.push` to add an item onto the end of this array of post plug ins and `within these parentheses` what we want to add is that CSX nano package so we can just say `(require('cssnano'))` 
                        `postCSSPlugins.push(require('cssnano'))`
   ```js 
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano')
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})]
   }
   ```

   - Let's go ahead and save this file. And now let's run our build process again and see how many kilobytes we saved on that CSX file. 
   
   - So `NPM run build` and if I inspect the newest CSX file. Cool. Now it's only `13 kilobytes now`. 
   

57. Preparing Our Files For Go Live (Part 3)


(57.1)   
- Let's `set things up so that it also copies over our html all from the app folder. `
   
   - However we need to be aware of the fact that an `html file needs to know the names of the CSS and JavaScript files that it wants to load.` 
   
   - And `remember we added these chunk hash values and there is no way for our html file to be able to predict the future and magically know the chunk cache values. `

   
(57.2)   
- our `file names are unpredictable` `how are we going to load the assets in our html now. `

   - within your index.html file. I actually want you to `delete this script tag.` 
   ```html
   <script src="bundled.js"></script>
   ```
   - Go ahead and save this file. Now clearly if you ran NPM run dev to preview your site you would not be seeing any javascript or CSX. Right. Because we just remove the reference to it. 
   
   - However we can use `a very popular Web pack plug in` to save the day. Right now in your command line I want you to install a package with me. So run npm install in the name of the package is h t M.L. dash web pack dash plug in. Be sure to include dash dash save Dev. 
   `npm install html-webpack-plugin --save-dav`
   
   - OK now let's go leverage that plug in. So jump `back into webpack.config.js` and up `at the very top.` Let's load in that package so I will say const HDMI all web Park plug in should equal. And then just require it require parentheses quotes HDMI l dash web pack dash plug.
   `const HtmlWebpackPlugin = require('html-webpack-plugin')`
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')
   const {CleanWebpackPlugin} = require('clean-webpack-plugin')
   const MiniCssExtractPlugin = require('mini-css-extract-plugin')
   const HtmlWebpackPlugin = require('html-webpack-plugin')  ////
   ``` 
   
   - I forgot to mention that just in the last week this plug in has been downloaded over 4 million times. It's a reliable industry standard. 
   
(57.3)   
- Now `we want to leverage this plug in for both our dev and our build tasks`. So let's do this. Let's `find our config variable` right. This code is used for both dev and build.
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```

   - And maybe right `after this entry` line. So `after this comma` we can drop down to a new line and let's say `plugins` `colon.` And we know that plug ins should be an array. So `square brackets`. And then at the very end `comma.` ` plugins: [],`
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: [],  ////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - Now you might remember that we've already set the plug ins option within our if statement for the build task. That's OK. In just a moment `we can modify the code down there to push onto this existing array instead.` However

   - within this shared config `within this array` let's just create a new instance of the html plugin. So `new HtmlWebpackPlugin()` 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: [new HtmlWebpackPlugin()], ////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - `inside these parentheses` we give it an object to configure it. So `curly brackets` and we just need to give it to properties `filename:` is the name of the file that we want it to generate. So let's say `quotes` and for now let's just say `index.html` after the quotes include a `comma`.
   {filename: 'index.html', }
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: [new HtmlWebpackPlugin({filename: 'index.html', })], ////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - We need one more property named `template:` And this is where we point towards the file that we wanted to use as its basis which is our index.html file that contains all of our actual content and html So `quotes` `dot` `slash` go into the `app` folder `slash` grab the file named `index.html`
      `template: './app/index.html'`
    ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})], ////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - OK now we just need to `go into the if statement for our build tas`k and `adjust the plug ins to be added on to this array`. 
    
   - So scroll down we're looking for if current task equals build in towards the bottom of that we see `config.plugins =` 
    ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})  //////////
      ]
   }
    ```
   - Well we no longer want to completely modify or replace the value of plug ins. `Instead we just want to add these on to that array that already exists from up above.` 
    
   - So here's what I want you to do `inside these square brackets.` I want you to `select everything`. So we don't need to select and highlight the square bracket but just begin with new and then scroll all the way to the end of this line right before the closing square bracket. OK. 
    
   - Then go ahead and `cut that into your clipboard` you'll know that you selected and cut the right code. If now it just looks like this config dot plug ins equals an empty square bracket pair. 
      `config.plugins = []`
    
   - Now we can `get rid of the equal sign in the square brackets` so config dot plug ins `.push()` Right. We want to add on or push more items onto this array that already exists. 
      `config.plugins.push()`

   - So `within these parentheses` we can just `paste in our clipboard`. Cool. 
    ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})
      )  /////
   }
    ```
   - Let's go ahead and save this file and `test it out.` So in the command line let's say `npm run build` 
    
   - Let's go check our dist folder cool.` We see a file named index.html. `
   
   - Now here's the moment of truth. `Let's drag this static HDMI file on top of an open web browser to open a preview.` 

   - Well you see that annoying alert test message that I forgot to get rid of. But if we click OK things look a bit weird because we haven't copied over the images or photographs to the disk folder yet. 
   
   - But you'll notice that our C Ss and JavaScript are both loading perfectly right. So I can click on get in touch and it opens the modal 
   
   - if you're curious how this works. Well you can open this generated index dot HDL file write the one that lives in our dist folder you can open this in your text editor cool around line number 9 you can see that that web pack HDMI plug in automatically added this reference to the CSF file. Right. 
   
   - And Web Park has access to that chunk cash value. And then if we scroll down to the very bottom perfect web pack also knew the perfect chunk cash value of the latest copies for our main javascript and our vendor javascript. This is excellent. We can close that. 

(57.4)   
- But before we get to that I want to address the common question of well `what if we have more than one html file.` Right. 
   
   - What if we had a small Web site with three or five or ten pages. Well that's a great question. 
   
   - I would say if you have more than 10 pages you should probably be using a static site generator or something a bit more dynamic. 
   
   - However for less than 10 pages you probably don't need a static site generator. And instead we can just configure this web packed scenario to work perfectly. 
   
   - Let me show you what I would do first of all we need to have more than one each CML file to practice with. So right now I want you to go into your. This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookiesLearn more.




58. Preparing Our Files For Go Live (Part 4)

(58.1)
- However `for less than 10 pages` you probably don't need a static site generator. And instead `we can just configure this webpack scenario to work perfectly.` 
   
   - `Let me show you what I would do` 
   
   - first of all `we need to have more than one html file` to practice with. 
   
   - So right now I want you to go into your app folder so up `out of the disk folder` into our `app folder`.  `our source code.` 
   
   - And right now we just have index.html but I want you to `copy and paste or duplicate this file.` 
   
   - So just create a duplicate copy of it and I will name to duplicate copy `about.html` and then you can even duplicate that and name the third copy `contact.html` 
   
   - OK now we're not actually going to customize these pages `we just want something to practice with to make sure that our setup would work with multiple pages.`

(58.2)  
- So our `first step is to use node to create an array of the different html files we're working with. `
   
   - Technically we could use the built in node F S module but `I prefer the package named fs-extra.` It's just a lot easier to work with. 
   
   - I'm not alone in feeling this way because the package F S extra has been downloaded 20 million times in the last week. 
   
   - So right now do this with me in the command line. Let's install the new package. So we're going to say `npm install fs-extra --save-dev`  
   
(58.3)  
- Now up `at the very top of our Webpack config file` Let's `import in that new package` 
   
   - let's say `const` `fse` (for file system extra) let's set that to `equal.` And then just `require` in the package that was named `fs-extra`
   `const fse = require('fs-extra')`
   ```js
   const currentTask = process.env.npm_lifecycle_event
   const path = require('path')
   const {CleanWebpackPlugin} = require('clean-webpack-plugin')
   const MiniCssExtractPlugin = require('mini-css-extract-plugin')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   const fse = require('fs-extra')  ////

   ```
(58.4)  
- now `let's leverage this package to search for any html files` 
   
   - we know that we only have these three and you and I are aware of their names but `we want our setup to be flexible so that no matter what these files were named or even if we had 10 or 15 of them this would still work.` 
   
   - So let's `find our shared config object` This is used for both dev and build. 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - And remember `we just set up` plugins call in and then we wrote this code to work with the html plugin. 
   
   - Well believe it or not actually want you to `delete the rest of this line after plugins:` so it should look like this now 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins:   //////////////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - and instead of clogging this area of the file up with a bunch of code `let's just point towards a variable` we can name in anything but let's name it` pages` and be sure to include a comma after that. 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,   //////////////
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```
   - OK now let's just `create a variable with this matching name` and what we want this variable to be is `an array where we use the Webpack html all plugin once for each html file that we have`. 
   
   - `Let me show you how we can do that.` 
   
   - So `right above let config.` We can say `let pages =` and we're going to begin by working with filesystem extra. So `fse.` and we want to use a method named `readdirSync()` 
      `let pages = fse.readdirSync()`
   ```js
   let pages = fse.readdirSync()
   
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
   - within these parentheses. Let's begin working with our app folder right. Because that's where all of our html files will live. So `quotes` `dot` `slash` `app`  Then after these parentheses let's say `dot` `filter`
      `('./app').filter()`
   ```js
   let pages = fse.readdirSync('./app').filter()
   
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
   - essentially `this code is going to return an array of all the files in the app folder` and then in JavaScript every array has access to the filter method. Now filter will return a new array that we can customize. 
   
   - So big picture this will include every single file and then it's the job of filter to say we only want files that end with dot html 
   
   - So within these parentheses let's provide an `anonymous function`. Function parentheses curly brackets. Feel free to dropdown inside these parentheses. Let's include a parameter we can name it anything but I will name it file and then inside the body of this function we can say return the current file that we've looped to file dot ans with inside these parentheses `quotes` `.html`
      `function(file) {return file.endsWith('.html')`
   ```js
   let pages = fse.readdirSync('./app').filter(function(file) {
      return file.endsWith('.html')
   })  //////

   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
   - So altogether `this will return an array with all of the files that end in dot html`. 
   
   - So at the very end of this where my cursor is right now we can say `.map()` 
   ```js
   let pages = fse.readdirSync('./app').filter(function(file) {
      return file.endsWith('.html')
   }).map()  //////

   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
   - `map or let us generate a new array based on this array` (.filter(function(file))
   
   - because instead of an array of just the file names `we want an array of multiple html web pack plugins.`  
   
   - we want to use the Web pack plug in once for each of our HDMI templates. 
   
   - So `inside the map parentheses` we give it an anonymous `function`. Function `parentheses` `currently brackets` `within these parentheses`. Let's give it a parameter `page` and then in the body of this function we can just `return` a `new` instance of the `HtmlWebpackPlugin` within these `parentheses.` Remember we give that plug in a configuration object in between these `curly brackets` we can dropdown. 
   `(function(page) {return new HtmlWebpackPlugin({})`

   ```js
   let pages = fse.readdirSync('./app').filter(function(file) {
      return file.endsWith('.html')
   }).map((function(page) {
      return new HtmlWebpackPlugin({
   
     })    
  })

   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
(58.5)  
- First we need to give it `a property of` `filename:` This is the file that gets generated automatically so that can literally just be the exact same name as our template.`page` 
   
   - So that would be indexed on HDMI all or about Dot HDMI all `comma.` We also want to give it a property of `template:` So this is where we point towards the current file that we've looped to. I'm going to use back ticks instead of quotes. So right above the tab key on your keyboard and let's say dot slash go into the app folder slash and then dollar sign. Curly brackets page. OK. `filename: page,` ` template: `./app/${page}``
   ```js
   let pages = fse.readdirSync('./app').filter(function(file) {
      return file.endsWith('.html')
      }).map(function(page) {
      return new HtmlWebpackPlugin({
         filename: page,
         template: `./app/${page}`
      })
   })

   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig
         ]
      }
   }
   ```   
   - (Now before we save this file I just realized that I spelled width wrong on this line of code. This should not be width as in the width of the rectangle. So get rid of the D. It should be W I T H. We are interested in the file that ends with DOT HDMI out. Cool.) 
   
   - Let's go ahead and save this and `test it out.` So in the command line NPM run build  
   
   - Let's `check out our dist folder`. So I was an app. If I go back up go into dist awesome `we see index about in contact.` 
   
(58.6)  
- Let me try opening up contact.html out. `Let's go ahead and get rid of this annoying testing alert message` 
   
   - within my main app dot J.S. remember I added alert testing. Get rid of that. 
   
   - Give that to save and you can` run NPM run build one more time` cool. 
   
   `So now you're free to create different separate pages at this point`. 
   
(58.7)  
- Let's `set things up so that our images or photographs get copied over to the dist folder.` 
   
   - So `back in our webpack.config` file we would `only need to copy the images for our build task` not our dev task. 
   
   - So down in `if (currentTask == 'build')` down in this area where we are working with the plugins 
   ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})   /////////////////
      }
   ```

(58.8)  
- let's `set things up so that each plug in call is on its own line. So this is easier to read.` 
   
   - So maybe right `before this first word of new` push enter 
   ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }

      config.plugins.push(
         new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'})   /////////////////
      }
   ```
   - and `then after this comma` we can drop down 
   ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }

      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}))  /////////////////
      }
   ```
   - and then `in between these two closing parentheses here.` In between those two we can `add a comma` and dropdown again  
   ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }

      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
            //////////////////
         )
      }
   ```
   - And `now on this line let's call one more plugin` so let's create a `new` instance. And I'm going to make up a name. But let's use the same names or on the same page. Let's call it `new RunAfterCompile()` 
    ```js
   if (currentTask == 'build') {
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }

      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
         new RunAfterCompile()
         )
      }
   ```

(58.9)  
- And now we can just go `create our own plugin for webpack with this matching name.` 
   `RunAfterCompile()`
   
   - Why don't we go up to the very top of our file. It doesn't matter where but maybe `right below const postCSSPlugins` 
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

      ///////////////////////

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - let's create a `class` with that matching name of `RunAfterCompile {}` 
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   
   class RunAfterCompile {  //////
      
   }

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - Again you could have chose any name `I chose a generic name like this so you could also perform any other tasks other than just copying the images folder` 
   
   - within this class let's call apply. So `apply()` `curly brackets` `within these parentheses.` Let's include `compiler` and then inside these curly brackets let's say `compiler.hooks.done.tap()` 
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   
   class RunAfterCompile {
     apply(compiler) {        ///
    compiler.hooks.done.tap() 
   }

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - `inside these parentheses` we give it `2 arguments.` The first is the name of our plug in. You could call it anything you call it your name or you could just say hello world. I will say `'copy images'` OK after that `comma` we want one more argument and this is a function that should actually run. So anonymous function `function() {}` 
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   
   class RunAfterCompile {
     apply(compiler) {        ///
    compiler.hooks.done.tap('Copy images', function() {}) 
   }

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - and I'm just going to use the `FSC package again.` So `fse.copySync()` 
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   
   class RunAfterCompile {
     apply(compiler) {        
    compiler.hooks.done.tap('Copy images', function() {
       fse.copySync()  ///
    }) 
   }

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - so you can just give this `2 arguments.` The first is the directory that you want to copy `quotes` `dot` `slash` go into `app` go into `assets` grab the `images` folder `comma`. The second argument is where you would want to copy it too. So `quotes` `dot` `slash` `dist` `slash` `assets` `slash` `images`. Cool. 
     `('./app/assets/images', './dist/assets/images') `
   ```js
   const postCSSPlugins = [
   require('postcss-import'),
   require('postcss-mixins'),
   require('postcss-simple-vars'),
   require('postcss-nested'),
   require('postcss-hexrgba'),
   require('autoprefixer')
   ]

   
   class RunAfterCompile {
     apply(compiler) {        
    compiler.hooks.done.tap('Copy images', function() {
       fse.copySync('./app/assets/images', './dist/assets/images')  ///
    }) 
   }

  let cssConfig = {
      test: /\.css$/i,
      use: ['css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
   }

   ```
   - So that `will copy everything inside the images folder`. 
   
   - Let's go ahead and save this and `test it out`. 
   
   - So in the command line `NPM run build`. Let's `look at our disk folder.` Awesome. 
   
   - We see assets inside it images there are the files. 
   
   - So back in the browser. Remember I was previewing the contact file by refresh. Perfect. 
   
   We just need to do one more thing before we can bring this lesson to a close. So you and I as web developers are always going to be using the newest version of our web browser. Meaning we will have access to the latest and greatest javascript features. 
   
   However we can't assume that everyone in our audience right. Everyone viewing our Web site will also be on the latest and greatest web browser. 
   
(58.10)  
- So let's `set things up so that when we run our build task web pack adjusts our javascript so that it's backwards compatible `
   
   - we can continue to use modern javascript features like Arrow functions classes. So on and so forth. But `our generated bundled file we'll use similar but older features.` 
   
   - Big picture we don't need to change the way we are writing javascript but `our code will work in a wider range of older browsers.` 
   
   - Let me show you how to set this up. So `in our command line` we need to install a few packages
   
   - So `npm install @babel/core @babel/preset-env babel-loader --save-dev` 
   
(58.11)  
- OK let's go leverage these packages. So `within our webpack.config` file 

   `within the if statement for our build task` let's `add a new line` 
   ```js
   if (currentTask == 'build') {
      ///////////////////////////
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
         new RunAfterCompile()
      )
   }
   ```
   - and we can say config dot module dot rules and we want to push a new item onto that array  `config.module.rules.push()`
   
   - inside these parentheses let's add curly brackets to create a configuration object. So we want a property named test. `config.module.rules.push({test: })`
   
   - This is where we say we only want this rule to apply for JavaScript files so forward slash backslash dot J S dollar sign forwards slash comma 
      `config.module.rules.push({test: /\.js$,})`
   
   - we want another property named `exclude` colon and we want to basically ignore the node modules folder. Right. Because there are JavaScript files in that folder that we don't want to worry about converting or transpiling so forward slash parentheses node underscore modules after the parentheses at a forward slash in a comma. 
    `config.module.rules.push({test: /\.js$, exclude: /(node_modules)/,})`
   ```js
   if (currentTask == 'build') {
      config.module.rules.push({  ///////////////////////
         test: /\.js$/,
         exclude: /(node_modules)/,
      })
      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
         new RunAfterCompile()
      )
   }
   ```
   - OK. We also want a property named `use` colon. `Curly brackets` dropdown let's give it a property named `loader`. Give that a value of `quotes` babble dash loader comma the property of options. Set that to an object inside that we can drop down give it a property named presets colon. This will be an array. We only need one item in the arrays of quotes at symbol babble slash preset dash envy. 
   ```js
   if (currentTask == 'build') {
      config.module.rules.push({
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      })

      cssConfig.use.unshift(MiniCssExtractPlugin.loader)
      postCSSPlugins.push(require('cssnano'))
      config.output = {                                                    
         filename: '[name].[chunkhash].js',
         chunkFilename: '[name].[chunkhash].js',
         path: path.resolve(__dirname, 'dist')
      }
      config.mode = 'production'
      config.optimization = {
         splitChunks: {chunks: 'all'}
      }
      config.plugins.push(
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
         new RunAfterCompile()
      )
   }
   ```
   - OK let's go ahead and save this and just run one more build to make sure our javascript is still working so in the command line `NPM run build`. OK. 
   
   - And if I refresh my dist html I'll file. You can see the javascript still works. `Only now this generated file will work in a wider variety of Web browsers` 
   
  
   - the fact that this lesson is complete means that this folder is ready for us to send to a web host. 


59. Go Live! Deploying our Site to GitHub Pages

   Hello everyone. 
   
   In this lesson we are going to push our website up onto the Web. 
   
   So by the end of this video you will have a U.R.L. that you can share with your friends family and colleagues. 


(59.1)   
- Before we push our files up `there's a few changes I want to make first. `
   
   - So if you find your travel site folder or your project folder `go into the app folder` 
   
(59.2)   
- and `we don't actually need the about.html or the contact.html` 
   
   - We only needed these multiple HMO files as a test to make sure that our build process could handle multiple files. 
   
   - But `we really only have the one home page` so I'm going to `delete these two files` OK
   
   - and then back up a folder `we named our public folder dist dist` is a very popular name. 
   
(59.3)   
- However `since we are using the github pages service they require that the public folder be` named `docs` D O C S 
   
   - most other services besides get up pages let you choose whatever you want to name this folder. But in this case we do need to play by GitHub rules. 
   
   So `do this with me` right now. I want you to `manually delete the entire dist folder` ok. 
   
   And then we need to `go into our web pack config file` and `tell it to output to DOCS` `instead of dist`. 
   
   So in web packed config we just need to replace the word dist with docs `in two locations.` 
   
   So first is `in our RunAfterCompile class.`
   ```js
   class RunAfterCompile {
      apply(compiler) {
      compiler.hooks.done.tap('Copy images', function() {
         fse.copySync('./app/assets/images', './dist/assets/images')  ////
      })
      }
   }
   ```
   - So on this line of code we are copying our images from app to dist So right here `change dist to instead be docs` 
   ```js
   class RunAfterCompile {
      apply(compiler) {
      compiler.hooks.done.tap('Copy images', function() {
         fse.copySync('./app/assets/images', './docs/assets/images')
      })
      }
   }
   ```
   And then the one other change down towards the bottom `within our if current task equals build.` 
   
   If we scroll down a bit we are looking for `config.output` `within output`. Here we see path. And at the end here we see `dist`. 
   ```js
   if (currentTask == 'build') {
   config.module.rules.push({
     test: /\.js$/,
     exclude: /(node_modules)/,
     use: {
       loader: 'babel-loader',
       options: {
         presets: ['@babel/preset-env']
       }
     }
   })
   cssConfig.use.unshift(MiniCssExtractPlugin.loader)
   postCSSPlugins.push(require('cssnano'))
   config.output = {                                                    
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')  //////
   }
   ```
   So `just change disc to DoCS`. OK. 
   ```js
   if (currentTask == 'build') {
   config.module.rules.push({
     test: /\.js$/,
     exclude: /(node_modules)/,
     use: {
       loader: 'babel-loader',
       options: {
         presets: ['@babel/preset-env']
       }
     }
   })
   cssConfig.use.unshift(MiniCssExtractPlugin.loader)
   postCSSPlugins.push(require('cssnano'))
   config.output = {                                                    
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'docs')  //////
   }
   ```
   - Now let's save this file and run a fresh build process. So in the command line just run` NPM run build` 
   
   - so if we check our folder cool we have app and `instead of dist now we have docs` 
   
   - again Usually you can name this whatever you want it just so happens that the github pages service requires this name. Cool. 
   
(59.4)   
- At this point let's use git to push up our changes `first Let's take care of our branches.` 
   
   - We are currently on the build process-branch We've completed our work here. So let's add all of our changes to the staging area `git add -A`  
   
   - Then let's commit our changes `git commit -m 'completed our build process configuration.'` closing quote. Press enter 
   
   - now that we've committed those changes we can switch back over to the master branch because we want to merge build process in the master so `git checkout master`  
   
   - And then to merge the other branch in we just say `git merge build-process` 
   
   - Cool so now our master branch is good to go let's go ahead and push this up to get hub so `git push origin master` 
   
(59.5)   
- as soon as your push completes. Now `I want you to go to GitHub.com` in your web browser 
   
   - `navigate to the overview screen for the current repo` that you're working with. For me it's travel-site but it could be something different for you but whichever repo you just pushed to. 
   
   - Now we just need to `enable one setting and our Web site will be ready up on the web` 
   
   - from this overview screen we need to `click on settings` 
   
   - from this main setting screen. We want to `scroll down` and in the main column we're looking for a feature named `GitHub pages` at the time of this recording it's about three quarters of the way down the page GitHub pages. 
   
   - Here we see a `source` option and a dropdown to select different options. You just want to `click on this` and change it to the option that says `master branch /docs folder`. 
   
   - So the subtext says use only the docs folder forget hub pages. `That's exactly what we want right. The docs folder is our public folder.`
   
   - Once I selected that you can see it sort of reloaded the page but `if you scroll back down to where the github pages section` is `you will now find a link to your Web site.` 
   
   - So it's typically going to be `your user name` and then `github.io` and then `the name of your repo` so obviously your link will be different than mine. But 
   
   - let's go ahead and `open this up in a new tab`
   
(59.6)   
- awesome. `This is our website live on the web.` 
    
   - You can share this U.R.L. with your friends and family. 
   
   - Now if you don't see your Web site and you instead see a GitHub forum for error screen don't panic. `Oftentimes GitHub can take 10 to 20 minutes for your Web site to show up. `
   
(59.7)   
- I just got lucky this time. `If you are receiving the 404 error` at the very end of your address you can try manually typing index.html
   `https://marcoahv.github.io/Travel-Site/index.html` 
   
   - Sometimes that will allow you to view your site but you should not need to do this because then you're U.R.L. look sloppy. 
   
(59.8)   
- So the other trick to get your website working immediately `is just to perform another commit` pushing a new commit will trigger GitHub to redeploy your files and often oftentimes that will get rid of the initial 10 to 20 minute delay for your you or else to start working. 
   
   - I'll walk through that with you right now. 
   
   - So just for a minor change just to have something to push. `Let's imagine we don't want the period after this Your clarity.` 
   
   - So within our html file `in the app folder` towards the top. For me it's around line number forty seven. But `I will remove that period after your clarity`. Save that let's run  `NPM run build`. So our public docs folder is updated so NPM run build OK.
    
   - Then let's add all of our changes `git add  
   
   - commit with a new message. `git commit -m 'Changed primary headline.'`  
   
   - And then we just push that back up to get up. So `git push origin master` . 
   
   - And then if I try to visit my U.R.L. again you can see it might take GitHub 10 to 30 seconds for that change to go through but if I refresh again could we see that period is gone. 
   
   - So hopefully after you pushed your second commit your GitHub pages U.R.L. begins to work 
   
(59.9)   
- and you can even go purchase a real dot com domain and use that for your Web site. 
   
   You would just tell your domain company to point towards the github pages servers 
   
(59.10)   
- so GitHub pages is great. It's completely free. It's easy to use. They don't add any weird advertisements to our website. 
   
   It's great. 
   
(59.11)   
- However in my opinion `there is a service that is even 10 times better than GitHub pages` and that service is named `netlifiy` 
   
   - We will learn what makes net LA fi so great in our very next lesson 
   
   - but I don't want to completely steal the thunder of you having a U.R.L. that you can now share with your friends family and colleagues. 
   
   - So enjoy your GitHub pages link. You have pushed a website up onto the Web. Congratulations. 
   
(59.12)   
- But I must say that now that I'm aware that netlifiy exists I can't see myself ever using GitHub pages again. 
   
   - There's nothing wrong with GitHub pages. It's just that netlifiy has a few features that are incredible and they offer these features even on their completely free plans. 
   
   - You don't even need to enter a credit card. Now I am not affiliated with netlifiy in any way shape or form. It's just one of the coolest products and services that I've seen in a long time. 
   
(59.13)   
- Not to get you a bit excited to jump into the next lesson on netlifiy We are going to set things up so that our build process is completely automated. 

   - You won't even need a disk or docs folder on your personal computer. 
   
   - You can just work with the source code in your app folder and then anytime you push your changes up netlifiy will run our build process for us right and generate the public folder on its own. 
   
(59.14)   
- And once that's set up we are also going to learn about cloud functions or AWS lambda functions 
   
   - essentially even though we are just working with a static html front end based Web site. Well netlifiy makes it super easy to add cloud functions where you could perform server side tasks. 
   
   - Trust me this is amazing. I'm a huge fan of netlifiy and in our next lesson we are going to open up the door to all of these possibilities. 
   
   - Let's keep our momentum rolling and I will see you in the next lesson.





   60. Netlify Introduction

  
(60.1)   
- Our first step is to `sign up for a completely free Netlify account.` 
   
   - We don't even need to enter a credit card so you can `visit. Netlify.com` or you can just google for Netlify 
   
   - by the end of this video you'll understand `what Netlify is.` But for now all you need to know is that `it's sort of an alternative to traditional web hosting right. `
   
   - They host our Web site files for us and make our Web site available to the public. 
   
   - Anyways right now all we need to know is that we are interested in their `completely free plan` so you can either click on sign up or use the. `Get started for free button`. 
   
   - Now you are free to sign up with your GitHub get lab or bit bucket account but if you're like me you usually `just sign up with a traditional email registration`. 
   
   - So that's what I'm going to click on email. OK. And then obviously just pause this video lesson while you're entering your new email and password to sign up 
   
   - `once you submit that form you should see a screen saying that Netlify is e-mailing you.` So just go to your email inbox. You might need to check your spam folder but there will be an e-mail from Netlify with a link that you `click on to activate or verify your account.` 
   
   - Once you click on that link you should be taken to a screen that looks something like this. I'm going to close this quick start guide. OK. 
   
(60.2)   
- And from here we have `a few different ways to create our first site with Netlify `
   
   - So one way would be to literally just `drag and drop` a folder from your computer into this area of the screen. `We're not going to do that` because that's not a very powerful workflow. 
   
   - `Instead we want to create a new site from git` so `click this new site from git button`
   
   - from the screen `You can choose where your repo lives`. So you need to already have an account with either get hub get lab or bit bucket. 
   
   - Now if you've made it this far in the course you already have a get hub account. So let's `click on get hub` 
   
   - that should open a new pop up window. So make sure that your browser didn't automatically block the pop up window but essentially this window is GitHub dot com and `it's asking us Do we really want to give Netlify access to our github account.` 
   
   - We absolutely do. So you have `a couple of options.` You can grant Netlify `access to all repositories` in your get up account or you can `just select specific repos`. 
   
   - So I'll leave that up to you. But `if you do select these specific repo option be sure to choose the travel site repo` that you just pushed to in the previous lesson. OK. 
   
   - Down at the very bottom of this pop up I'm going to `click the install` button cool. 
   
   - So back in this Netlify window `our Netlify account now has permission to talk to and get data from our get hub account `
   
   - for this new project we're setting up a Netlify We need to `choose which GitHub repo it's associated with.` 
   
   - So for me `that is the travel-site repo.` So I will click on that OK. 
   
   - We can leave these options the way they are. `You are the owner` and `we want to work with our master branch` 
   
(60.3)   
- this is where things get interesting `Basic build settings.` 
   
   - So we see `there is a field here titled Build the comman`d click into this field and `type` `npm run build`. 
   
   - We `also see published directory`. So in this field go ahead and `type` in `docs` a little bit later in the video we will circle back to why this is so cool and powerful. 
   
   - But for now all you need to know is that `if Netlify is aware of our build command that can create some very powerful automation` anyways we can circle back to that later for now. 
   
   - Go ahead and `click the deploy site button` 
   
   - so this is a randomly generated name. Yours will be different but `you should see site deploy in progress.` Now through the magic of video editing and post-production I actually just sat here and waited maybe 20 to 40 seconds 
   
   - and `this turned into a link that is ready to be clicked on` again your name will be different. This is randomly generated. 
   
   - But go ahead and `click on your link` `or open it in a new tab`. Awesome and `there is our Web site` and you can share this link with anyone in the world your friends your family your colleagues. 
   
   - Now you might be thinking to yourself didn't we already set this up with GitHub pages. Right. 
   
   - You already had a public GitHub pages linked that you could share with the world. 
   
   - Well yes that's true. But 
   
   - `our Netlify powered site has so many extra features. `
   
   So right now let's circle back and 
   
(60.4)   
- I want to show you one of the biggest reasons I'm a huge fan of Netlify and that is `automated builds.` 
   
   Now before we worry about what that means or how it works let's first give ourselves a goal. 
   
   - Let's `imagine that our goal is to update our public Web site so that this headline ends with an exclamation point. `
   
   - So let's make that happen. We know that we would need to `jump back to our text editor` 
   
   - and within our app folder jump and `index.html` For me it's around line number 47. So I will `add an exclamation point right here`. Let's go ahead and save this file. 
   
   - However before we commit this into get and push it to get hub I first want to do something that might seem a bit extreme. So `not only am I not going to run NPM run build` I'm also going to `delete the entire docs folder.` I 
   
   - want you to do this as well so you can either delete it within your text editor or just within your computer's file explorer going to travel site and `delete this entire public docs folder` so I'm just moving it to the trash. OK 
   
   - now let's commit those changes. So if I run `git status `
   
   - here are all of the changes. So yes I modified the index on each to AML. But you can see I also deleted every single file that was in the docs folder. 
   
   - So I want to stage all of those changes so type this in with me `git add -A` OK 
   
   - then let's commit that so `git commit -m 'changed headline and deleted docs folder as Netlify will now take care of bills.'` 
   Be sure to end that with a quote. Let's push enter. OK. 
   
   - And then let's push our repo up to get hub. So `git push origin master` 
   
   - now Here's the cool part. If we go `back into our Netlify control panel` or just the overview screen for this project I just had to `manually refresh the screen` usually I don't think you need to manually refresh 
   
   - but now you can see `Netlify detected that we pushed a new change` to our github and Netlify `has published the newest version of our site.` 
   
   - So `if I go back to the Netlify U.R.L. and refresh` awesome. `There we see that exclamation point`. 
   
   - Now this is pretty cool. `This means that when we push our latest changes to our github repo` not only does `Netlify  detect that change` but Netlify `also runs the NPM run build task` for us right that task that optimizes our files to be delivered to the public 
   
   - so `whenever Netlify detects that we push a change to get hub Netlify will see our package dot Jason File and the net lo fi hardware actually downloads all of the NPM dependencies. `
   
   - Once it's done then it actually runs the NPM run build task on their net lifting hardware. 
   
   - And since we told Netlify that our public directory is the docs directory it all just works flawlessly. 
   
   - Big picture this means that our workflow is now super smooth 
   
(60.5)   
- so locally on your computer `you can run NPM run dev` to spin up your local web packet dev server right so you get on the fly live reloads for CSX as javascript and HDMI out 

   - once you're done working you just commit your changes to get push that up to get hub and that's it. `Netlify will copy your files and run your build task for you. `
   
(60.6)   
- And it goes without saying `Netlify I also hosts those files for you.` 
   
   - So Netlify is like a web hosting company that actually understands modern web development. 
   
(60.7)   
- Now I will point out that `because we deleted our docs folder from our repo our github pages site will no longer work` right. 
   
   - So if I go back into GitHub and click on settings for this repo down in the github pages area it says your side is having trouble building because there is no docs folder 
   
   - that's fine `if you want to use get up pages instead of net lift by then obviously just don't delete your docs folder` 
   
(60.8)   
- but if you're like me and you want to use Netlify `we could even take things one step further.` 
   
   - So `back in our text editor` even though Netlify will take care of builds for us `there may come a time in the future where we need to adjust our build process. `
   
   - So imagine if we had to go into web page config and `update or change the way that our site was being generated.` 
   
   - In that case `we would want to test the build process locally to make sure that it works as we'd expect. `
   
   - However and this is just personal preference for organization reasons. But `I still wouldn't want that docs folder to be committed into the get repo.` 
   
   - I `really only want my source code in the repository` so here's what I would do 
   
   - I would `go into our get ignore file` and `it doesn't matter where in the get ignore file` but you can see we're already ignoring node modules folder. 
   
   - So I would just `add a new line` and `ignore the docs folder.` Go ahead and save that.  
   ```js
   # Numerous always-ignore extensions
   *.diff
   *.err
   *.orig
   *.log
   *.rej
   *.swo
   *.swp
   *.vi
   *~
   *.sass-cache
   node_modules/
   docs/
   .tmp/

   ```
   - So `now even if I did make changes to my Web patch config` and I wanted to test my build process locally I could `say NPM run build` and yes `that generates the docs folder` however `git isn't going to pay attention to that.` 
  
   - So if I say `git status` 
  
   - `the only change that it notices is that I modified get ignore.` Cool. 
  
   - This way `our git repository that's hosted on GitHub stays clean` it `only contains the actual source code`. 
  
   - We don't even need to worry about the docs or the public folder because Netlify takes care of all of that 
  
(60.9)   
- before I commit and push this get ignore change. Why don't we also `set this back to end with a period instead of an exclamation point`. 
  
   - So `back in index.html` I will just `change that back to a period` save it 
  
   - if I run `git status` once again. Cool. `Those are the only two changes that I want in the repository. `
  
   - I indeed do want to ignore my local copy of docs folder so `git add -A` 
  
   - `git commit -m 'changed headline and ignored the docs folder.'` 
  
   - Let's push that up to get up `git push origin master` 
  
(60.10)   
- we can `jump back over to the Netlify Web site` and if you `click on the deploys` tab you can actually see `real time updates` 
   
   - so you can see it's in the p`rocess of building` right now as I'm watching this right. 
   
   - We see that commit message changed headline and ignored the docs folder and again through the magic of video editing I just sat here and waited maybe 20 seconds but you can see in real time it's updated to say `published.` 
   
   - So back at my Netlify websites URL if I refresh. `This is back to a period` awesome 
   
(60.11)   
- if you want to try to make a minor CSS or JavaScript change just to make sure that things are working that's OK.
   
   - But at this point we can rest assured that our workflow is now silky smooth. 
   
   - Now this automated build feature is just one of two main reasons I'm a huge fan of net lo fi 





61. Cloud Functions / AWS Lambda Example (Part 1)

(61.1)   
- So big picture `in order to do anything securely We need to have a private and trusted environment where we can run code.` So this is the whole point of a back-end or these server side. 
   
   - The idea is even if I am a malicious user I type in my value whether it's correct or incorrect that value gets sent off to a server somewhere and `it's up to that server that hardware to run the code that determines if that value is correct or not. `
   
   - Then it sends back its response and then that's what I see in my browser. So even if I'm a malicious user I didn't have the opportunity or the power to make anything bad happen. 
   
(61.2)   
- Now I realize none of this is earth shattering news. We all know that server side code exists for a reason. `The issue is that our Web site is static html` 
   
   - It's not like this is generated by P HP or Python or Ruby. It's just an HD CML file being served up by very basic servers. Right. 
   
   - Because whether it's GitHub pages or net Lafite servers they aren't actually running any server side or back in language they're just a simplistic file system server that literally just sends whatever files we tell it to send. 
   
(61.3)   
- So the question becomes how can we have the speed and security benefits of a static web site while still being able to perform actual actions that require server side logic. Well `this is where cloud functions come into play.` 
   
   - Now I realize I still haven't explained what a cloud function is. Instead of trying to use words to describe it `let's just build the cloud function` right here right now. 
   
   - So I will close this finished product preview. So now my Web site is exactly back to the way your Web site is. Right. 
   
   - There's no client area below the footer and 
   
   - let's go set up a cloud function so we can begin to understand what it is. So `jump over to your text editor` 
   
   - and with your travel site project open. We want to `create a new folder`. So not even within the app folder just `within the root of the project` folder I will right click choose New Folder. We could name it anything but. So you and I are on the same page. Let's name it `cloud-functions` OK 
   
   - `within this new folder let's create a new file` and just so we're on the same page. Let's name this file `secret-area.js` OK. 
   
   - Now in this new file `we're going to write a bit of code` but I'm not going to explain the code in detail until we've got it up and running. 
   
   - So we will circle back to this to make sure we understand what's going on. But `for now I just typed this in with me.` 
   
   - `Exports dot handler` `equals` in anonymous functions `function` `parentheses` `curly brackets` inside the function parentheses. Let's include three parameters. Let's say` event` comma `context` comma `callback`. ` exports.handler = function(event, context, callback) {`
   ```js
   exports.handler = function(event, context, callback) {

   }
   ```
   - `Inside the body of this function.` Let's call the callbacks.` Callback` `parentheses` to run it we'll give it to arguments first we'll say `null` comma. The second argument will be `an object` so `curly brackets` 
         `callback(null, {}`
   ```js
   exports.handler = function(event, context, callback) {
      callback(null, {} )
   }
   ```
   - `inside the curly brackets` we can drop down. Let's give it one property of `statusCode:` That's uppercase C colon. `Two hundred` comma. Let's give it another property of `body:` and let's set this to a string of text that says `Welcome to the super secret area`. OK. 
        ` statusCode: 200, body: "Welcome to the super secret area"`
   ```js
   exports.handler = function(event, context, callback) {
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      } )
   }
   ```
   - And that's it. Let's go ahead and save this file. 
   
(61.4)   
- However before we push it up to get hub `we do want to make one change within our Netlify account.` 
   
   - So right now `open up the overview screen for your project on Netlify` and `in the top navigation` we're looking for `settings` to click into settings
   
   - within this left hand sidebar of the settings screen `we're looking for functions` from this function settings screen we can click on `edit settings` 
   
   - and we just want to tell Netlify `what we named that folder that contains our cloud functions`. (in Function Directory:)
   
   - So remember we gave it a name of `cloud-functions`. Go ahead and save that call at this point. 
   
(61.5)   
- We are ready to now `push our latest changes up to get hub` and net fi we'll see our changes. So then we'll see what happens and we'll begin to understand what a cloud function is. 
   
   - So in your command line run this with me `git add -A` 
   
   - Then let's commit `git commit -m 'Created our first cloud function.'` close up quote push enter 
   
   - let's push that up to gitHub so `git push origin master` 
   
(61.6)   
- we can `jump back over the Netlify` and if you `click on the deploys section` we can see in real time it hasn't even started building yet but it should start in the next few seconds. Here we can see that commit message rent created our first cloud function through the magic of video editing and post-production. I just waited maybe 30 or 40 seconds and in real time I see that this just updated to `published.` 
   
   - So with that in place now we can `scroll up and in the top navigation` for this Netlify project we can `click on functions` 
   
   - awesome since we just push that one function we see `one lambda function actively running in production` and `down here` we see `secret area.js` so `we can click on this to get a bit more information` so functions secret area it's running in production 
   
   - and here's the cool part `we see Endpoint` I want you to `grab this U.R.L.` and `copy it into your clipboard` obviously your U.R.L. will be a bit different than mine right. This is a randomly generated name but select your U.R.L. 
   
   - and then just `open up a new browser tab and paste in that you are URL` and visited when you do that `you should see. Welcome to the super secret area. `
   
(61.7)   
- So right now we have a lot of questions. What in the world is going on. `Why is this supposed to be impressive` or powerful or interesting and still you're wondering `what is a cloud function.` 
   
   - Well what we do know is that we created this new JavaScript file and it includes a function but when we visit this U.R.L. our web browser is not executing any javascript code or any functions. 
   
   - Our web browser is just receiving a simple response a simple string of text. So the question becomes `what is executing or running that function that we wrote. `
   
   - `It's not our personal computer or web browser.` And `it's also not the net lo fi server` that hosts star HDMI LCROSS and JavaScript. 
   
   - What's really going on is `Netlify takes the function that we wrote and they send it over to a private and trustworthy environment over on Amazon Web Services` 
   
   `then net the fi sets up a convenient U.R.L.` and whenever anyone sends a request to that you are all `net the fi tells Amazon Web Services to run and execute our function.` 
   
(61.8)   
- And `within this function we are free to do anything.` 
   
   Typically    
   ```js
   exports.handler = function(event, context, callback) {
      
      //////////////////
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      } )
   }
   ```
   - So right here you could `talk to a database` you could `tell a third party service to send an email` or if we think back to earlier in this video you could `write an if statement to evaluate the incoming string` of text that a visitor sent with their request. 
   
   - Then once you're done you can call callback. `This is our way of saying our function has done its job` 
   
   - so `a statusCode of two hundred means success`. Right. We all know that a status code of 4 0 4 means cannot be found. And then this is the actual value of our response. 
   
(61.9)   
- The whole idea is that `within this function we are safe to perform typical back end or server side actions` 
   
   - because the public including potentially malicious visitors of our Web site `they will never see any actual function code that we type here.` 
   
   - `The public will only ever see the value that we respond with.` So this function is our private trustworthy environment to run code. OK. 
   
(61.10)   
- But `why do we call this a cloud function.` Well it's because this function is not being executed by the web browser. It's not being executed by the static file host. And it's also not being executed on a server that we as the developer ever need to worry about or be aware of. 
   
   - Amazon Web Services will take care of the hardware that our function runs on and depending on how much traffic our net life eyesight receives. Amazon Web Services will use as few or as many of their computing resources to execute our function. 
   
   - So we as the developer don't need to care if Amazon is using one or 100 thousand computers to execute our function enough times to take care of all of our visitors. 
   
   - That's why we say it's a cloud function because it just sort of exists out there in the cloud. 
   
(61.11)   
- We don't need to care about the environment in which it runs in all we need to know is that it's going to be an environment that speaks the node language. Right. 
   
   - So this is javascript intended for the node environment not the web browser environment. 
   
(61.12)   
- Now to get back to the actual task at hand. Remember our goal is to add this area at the very bottom of our Web site. 
   
   - And in order to determine if the visitor typed in the correct secret phrase or not we need to leverage the power of a cloud function. 
   
   - So in the very next video we will continue this lesson by learning how to work with any data that the visitor might have sent along with their request to our cloud function. 
   
   - You are out if things aren't perfectly clear right now. That's OK. I think once we see how our cloud function can have different results or different outcomes depending on the incoming values I think that'll be a real aha moment. 






  62. Cloud Functions / AWS Lambda Example (Part 2)

(62.1)   
- We need to learn` how to send data along with our request to this url` 
   
   because a bit later in this lesson we're going to set things up so that when the user submits this form we program the web browser `to send a request to this U.R.L. but also send along with it whatever value the user typed into this field. `
   
(62.2)   
- let's first `learn how to make our cloud function work with any incoming data.` 
   
   Now when it comes to experimenting with sending requests to different urls `and sending along different data with those requests.` There is no better tool than `postman` 
      
(62.3)   
- you can either visit get postman dot com or `just google for postman so we can download this tool completely free.` 
      
      We don't need to register or sign up or enter any payment information. It's a completely free download. 
      
      Go ahead and pause this video while you download and install post man. But at this point I'm going to assume moving forward that everyone has postman on their computer. OK. 
      
   So `here is the postman application` running on my computer. 
      
   So we just want to `click this button` here `(+)` to `create a new tab for a new request`. 
      
      If you can't see this button it might be because your sidebar is open and if your screen is small the sidebar would cover that up. So you can click view and then toggle sidebar to hide the sidebar if your screen is small. But we just want to click this icon to create a new tab for a request. OK. 
      
(62.4)   
- So `we're going to use postmen to simulate a web browser sending a request to a U.R.L..` 
      
   So first of all instead of a git request `let's send a post request` because we want to post or send a bit of data along with the request. 
      
   So click on this. `Change` it `from git` `to post` 
      
   and then `in terms of the actual U.R.L`.. This is where you can just `copy and paste` your `cloud function url`. 

      
   But `we also want to send along a bit of data` with the request. 
      
   So in this area `click on Body` 
      
   from this selection. We want to choose `raw` 
      
   and `then we can begin typing in this area`. 
      
(62.5)   
- So `let's just send a bit of Jason data.` 
      
   So `curly brackets` inside the curly brackets. In Jason you want to `wrap your property names in quotes.` 
      
   So for example we could have `a property named "SkyColor":` and give it `a value of "blue",` comma 
      
   and then we could have `a property named "grassColor":` and give it a `value of "green"` 
   ```json
   {
   "SkyColor": "blue",
   "grassColor": "green"   
   }
   ```   
   So `this Jason format is a very common way to send data along with your request`. 
      
(62.6)   
- But in this case we don't actually want sky color and grass color. `We would want a property name that makes sense` for this value whatever the user typed in as the secret password or passphrase. 
      
   So in postman why don't we do this. Let's get rid of these two example properties inside our curly brackets. 
      
   Let's just have one property quotes and let's name it `password quotes colon.` And for a test let's just give it a value of `1 2 3`. `ABC` doesn't matter. You can type anything here within these quotes. OK. 
   ```json
   {
   "password": "123abc"  
   }
   ```    
   And now `let's actually send this request` to just `click this send button` 
      
   and `then down at the very bottom of post man`. If your screen is small you might need to scroll down the overall screen. But `here we see the response from the server.` 
         `Welcome to the super secret area`

(62.7)   
- Now at the moment our cloud function is programmed to `always send this as the response.` So right now let's jump into our text editor and let's `learn how to send a different response depending on what password value` the user sends along. Right. 
      
   So let's `imagine that the correct password should be a value of JavaScript`. Any other string of text is considered the `incorrect password`. 
   
   So I'll let you know that `the event parameter contains information about the incoming request` 
   ```js
   exports.handler = function(event, context, callback) {
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   so `we can use this parameter to extract the data that the user sent along.` 
   
   So` right above` this line where we call `callback` but still within the function. Let's do this. Let's `create a variable` let's name it `body`. And for now we don't need to set it to equal anything. We're just declaring this name in this scope. OK. 
   ```js
   exports.handler = function(event, context, callback) {
      let body  ////
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   And then `below` this let's write `an if statement`. So if parentheses curly brackets after those brackets let's `also add in else block` 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if () {  ///

      } else { ///

      }
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   before we worry about the password value. `Let's first make sure that the incoming request has any body data whatsoever`. So for the condition I would say if `event.body` if that even exists. 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {  ///

      } else {

      }
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   Well then `I would want to parse that data as Jason data.` 
   
   In other words `event.body is going to be the literal text characters that the visitor sent along.` 
   
   So the actual Curly rackets and the quotations and the semicolon we don't want that. `We want to understand it as if it's actual javascript` not just a literal string of text. 
   
   So what we can do is say a `body` should now `equal` and then javascript environments have access to all uppercase `JSON` `dot` because that has a method named `parse()` 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse()   ///
      } else {

      }
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   `within these parenthese`s we give it `a string of text` and it's going to pass it `or convert it into actual javascript.` Right. `A javascript object` so we can just say `event.body` 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)   ///
      } else {

      }
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   `else` Otherwise `if there is no incoming body data` on the request `let's just set body to equal an empty object`. OK. 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}  ////
      }
      
      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
(62.8)   
- Now `below all of this we can actually now pay attention to the password value.` So do this with me. 
   
   Let's have `one more if statement` after that. Let's `also have an else block `
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if () {  ///

      } else {

      }

      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   and within the condition let's say only `if body.password` double equals sign to check for equality. Only if that `equals javascript`. 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  ///

      } else {

      }

      callback(null, {
         statusCode: 200,
         body: "Welcome to the super secret area"
      })
   }
   ```
   So now `if this evaluates to true we can send the user the supersecret content` 
   
   else. `Otherwise we can say sorry that password is incorrect.` 
   
   So let's just do this. `Let's cut this callback call` so just select these four lines of code. Cut that in your clipboard 
   
   `in the if block`. Just `paste it in` 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                  ///
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      } else {

      }
      
   }
   ```
   `in the else block pasted in once again` 
   ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                 
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      } else {
         callback(null, {                  ///
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      }
      
   }
   ```
   only this time if they typed the incorrect password let's change the status code `from 200` which means success to maybe `401` which means unauthorized. 
   
   And since we're sending a failed status code we actually don't even need a message here. `So we can get rid of the body property` `and this comma after 401 as well.` OK. 
    ```js
   exports.handler = function(event, context, callback) {
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                  
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      } else {
         callback(null, {                  ///
            statusCode: 401
         })
      }
      
   }
   ```
(62.9)   
- Now if they send the correct password while we're at it instead of this just welcome to the super secret area. `Let's include the html all that you saw in my finished product example.` 
   
   You could just type a bunch of html all right here but `to stay organized we could also go up to the very top of this file and maybe right above. When we say let body` 
   
   we can say `const secretContent equals` and then `back ticks` two of them 
   ```js
   exports.handler = function(event, context, callback) {
      const secretContent = ` ` //////

      
      
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                  
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      } else {
         callback(null, {                  ///
            statusCode: 401
         })
      }
      
   }
   ```
   in between the two back ticks we can drop down and begin typing html So for example maybe we want a `heading level three` that says `Welcome to the secret area` and then maybe a `paragraph` below that. `Here we can tell you that the sky is blue and two plus two equals four.` 
   
   And just to really drive home the fact that we're sending html maybe we want `the word blue to be bold` so we can wrap that in a strong tag. 
   ```js
   exports.handler = function(event, context, callback) {
      const secretContent = `
      <h3>Welcome To The Secret Area</h3>
      <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
      `
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                  
            statusCode: 200,
            body: "Welcome to the super secret area"
         })
      } else {
         callback(null, {                  ///
            statusCode: 401
         })
      }
      
   }
   ```
   You don't have to have your server send back html `all you could just send back raw data or Jason data and then have the front end or the web browser pass that Jason data to create its own html.` 
   
   There's a million different ways we could do this `but this is just a quick example`. OK. 
   
   So now we can leverage this secret content variable. `If the password is correct instead of body being this string we can just replace this with secretContent.` OK 
    ```js
   exports.handler = function(event, context, callback) {
      const secretContent = `
      <h3>Welcome To The Secret Area</h3>
      <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
      `
      let body

      if (event.body) {
         body = Json.parse(event.body)
      } else {
         body = {}
      }
      
      if (body.password == "javascript") {  
         callback(null, {                  
            statusCode: 200,
            body: secretContent  ////
         })
      } else {
         callback(null, {                  
            statusCode: 401
         })
      }
      
   }
   ```
   let's go ahead and save this. 
   
(62.10)   
- But before we push this to get hub I do want to let you know that `you should probably go make your GitHub repo private` because even though net lo fi and Amazon Web Services will keep our code private and safe. Well if you're get a hub repository as public then obviously the secret password value will be leaked to the public. And that's not net lo fi or Amazon's fault. 
   
   Now luckily for us as of the beginning of 2019 `even free get hub accounts can make a repo private.` So just go to the overview screen for your GitHub repo. `Click on settings` and then `down towards the very bottom you'll see an option to make that particular repo private cool. `
   
   Now in this case it doesn't really matter because it's not like Javascript is an actually secure password anyways but you get the idea. You wouldn't want to leak your secret password value to the entire world. OK 
   
(62.11)   
- with this file saved `let's push it up to github.` 
   
   So in the command line I will add everything to the staging area `git add -A` 
   
   Then I will commit `git commit -m 'Updated cloud function to check password.'` 
   
   and then push it up to get up. So `git push origin master` OK 
   
(62.12)   
- if we `jump back over to the netlify` overview screen for this project 
   
   we can `click on deploys` you can see in real time it's still building OK. I just waited maybe 20 or 30 seconds and `now it's published.` 
   
(62.13)   
- So let's `jump back over to postman` and test it out again. 
   
   So currently our test request is going to send a password value of "123abc" `which is obviously incorrect`. 
   ```json
   {
   "password": "123abc"
   }
   ```
   So `if we send out again` `click on send` 
   
   cool `so we don't see response body text` but we can see that the status is `401 unauthorized` 
   
   however if we go up and change this password value to be "javascript" and `then send that off again` 
   ```json
   {
   "password": "javascript"
   }
   ```
   check the response from the server. Awesome. `There's that successful html message.` 
   
   So at this point our cloud function is up and running 
   
(62.14)   
- now that we know that it works as we would expect `We are ready to begin programming the browser,  the front end,  to actually send along the data of this form. When you submit it` 
   
   now I realize we have not actually added this form to our page yet. `This is the example of the finished product.` Right. 
   
   As of right now our Web site still has just the bottom footer. 
   
   So in our very next lesson we are going to work on the H all CSS and front end javascript to begin powering this secret client area. 
   
   It should be fun to see all of the different puzzle pieces come together. 
   
   Let's keep things rolling and I'll see you then.  




   63. Cloud Functions / AWS Lambda Example (Part 3)

(63.1)
- In this video we are going to `complete our client area feature `
   
   so down at the very bottom of our Web site. We're going to `add the area where visitors can type in the secret password to see the secret content. `
   
   Let's get started. So if you're not already running your web backed task Be sure to `run NPM run Dev.` 
   
(63.2)
- All right let's begin by `creating a javascript file that will insert the necessary html down at the bottom of our page.` 
   
   So `within` app Assets `Scripts` and then in the `modules` folder `let's create a new file. `
   
   The name could be anything but just so you and I are on the same page. Let's name it. `ClientArea.js` 
   
   inside this file let's start a class. Let's name it. `ClientArea` curly brackets 
   ```js
   class ClientArea {

   }

   export default ClientArea
   ```
   down below that `let's export that class from this file`. So export default client area. Let's give this a save. 
   
   And now before we forget let's go `import this file within our main JavaScript file.` So `within our App.JS` towards the top your let's import it import client area from quotes dot slash modules slash client area. Okay. 
      `import ClientArea from './modules/ClientArea'`
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import ClientArea from './modules/ClientArea'
   ```
   
   And then let's just be sure to `create a new instance of new ClientArea.` Cool. 
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import ClientArea from './modules/ClientArea'
   
   new ClientArea()
   new StickyHeader()
   
   ```
(63.3)
- Let's give that a save and then `jump back in the ClientArea.js `
   
   within our class `let's create a constructor` parentheses curly brackets. Okay. 
   ```js
   class ClientArea {
      constructor() { ///
         
      }
   }
   ```
   Inside the constructor let's begin by calling a method that we will name injectHTML()  So `this.injectHTML()` to call it. 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML() ///
      }
   }
   ```
   Now below the constructor let's `create a method with that matching name.` `injectHTML() {}`  
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {  ///

      }
   }
   ```
   and let's just insert a bit of html out the very bottom of the page so `document.body.insertAdjacentHTML()` parentheses to call that 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML() ///
      }
   }
   ```
   the first argument is `'beforeend',` comma. And the second argument will be `2 back ticks` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML('beforeend', ``) ///
      }
   }
   ```
   `in between these two we are free to include html` so you can even dropdown in between them. Okay. 
   
(63.4)
- Now instead of spending a bunch of time typing out the html at this point `I don't feel like that would be very educational.` 

   So instead if you pause this video and look in the associated resources for this lesson you'll see a file that you can download. So it should say reference html or example html or copy and paste html 
   
   So again go ahead and take a moment to copy that into your clipboard and `then within these back ticks just go ahead and paste` OK. 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
      }

      injectHTML() {
         document.body.insertAdjacentHTML('beforeend', `
            <div class="client-area">
               <div class="wrapper wrapper--medium">
                  <h2 class="section-title section-title--blue">Secret Client Area</h2>
                  <form class="client-area__form" action="">
                     <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
                     <button class="btn btn--orange">Submit</button>
                  </form>
                  <div class="client-area__content-area"></div>
               </div>
            </div>
            `) ///
      }
   }
   ```
   Let's give this a save 
   
   and then if we jump back over to the web browser at first it looks like nothing changed but if I scroll down `there we see the new content.` 
   
(63.5)
- Now before we write the javascript to make this form talk with our cloud function `let's first write a bit of CSS to fix this positioning and sizing.` 
   
   So do this with me back `in app` `assets` `styles` `let's create a new file in the modules folder` 
   
   let's name it `_client-area.css` 
   
   Before we forget `let's include this file within our main style sheet.` So `in styles.css` down at the bottom. 
      `@import "modules/_client-area";` Save that. 
      
   Let's `jump back into _client-area.CSC.` 
   
   Let's `set up our baseline rule or selector` so 
   `.client-area {}` 
   
   Let's begin by giving it a bit of `padding: 30px;` 
   
   Then let's `create a rule inside this rule.` So 
   `&__form {}` 
   
   Let's tell that to use flex box `display: flex;` 
   
   After that rule but still within our overall rule it's again create a new sub rule so 
   `&__input {}` 
   
   we want that to take up all of the available extra space. So just tell it to `flex: 1;` 
   
   and then one more rule `&__error {}` 
   
   give that a `color: red;` 
   ```css
   .client-area {
      padding: 30px;

      &__form {
         display: flex;
      }

      &__input {
         flex: 1;
      }

      &__error {
         color: red;
      }
      }
   ```
   Let's give that a save. And back in the browser. Cool. `I think this looks better `
   
(63.6)
- at this point let's switch our focus back to JavaScript. Now before we write JavaScript to communicate with our cloud function `we first need to capture the event of this form being submitted.` 
   
   So do this with me `back in our ClientArea.js` file `within our constructor` let's `select a few elements from the dom.` 
   
   So let's create a few properties. Let's say `this.form =` should equal. 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form =  ///
      }
   ```
   And then just select the HDL form element so `document.querySelector(" ")` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(" ") ///
      }
   ```
   It has a class of client dash area underscore underscore form `.client-area__form` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form") ///
      }
   ```
   while we're at it let's also `create a property that points towards the input field.` 
   
   So let's say `this.field =` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = ///
      }
   ```
   And you could just copy and paste this to save a bit of typing only instead of underscore underscore form its underscore underscore input `".client-area__input"` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input") ///
      }
   ```
   and let's also `create one more property that points towards this empty div.` 
   `<div class="client-area__content-area"></div>`

   Inside this empty div `we want to display either these successful secret HCM l content` `or the red error text that says sorry that password is incorrect.` 
   
   So let's select this div up here we can create a property. Let's say `this.contentArea =` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = ///
      }
   ```
   again you can just recycle this code to save typing so you could paste that in instead of underscore underscore form its underscore underscore content dash area. 
   `document.querySelector(".client-area__content-area")` OK 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area") ///
      }
   ```
   at this point let's `create a new method.` So below the constructor and let's name this new method events parentheses curly brackets `events() {}` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area") 
      }

      events() { ///

      }      
   ```
   at the very end of our constructor. `Let's be sure to call the events method.` So this dot events parentheses
    `this.events()` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events() ////
      }

      events() {

      }      
   ```
   now `in the events` method `we just want to listen for this html form element being submitted`. 
   
   So `this.form.addEventListener(" ")` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener(" ")
      }      
   ```
   to type of event we're listening for is not click but this time it is submit comma.  `"submit",`
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit",)  ///
      }      
   ```
   `The second argument` is a `function that we want to run in response to this event`. Let's give it an arrow function with exactly one parameter so a parameter of e Arrow symbol curly brackets I will dropdown `e => {}`
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {  ///

         })
      }      
   ```
   `first let's prevent the default behavior of submitting an html form right.` 
   
   Because `by default when you submit this form` if I enter a value of ABC 1 2 3 and click submit you'll see that `the browser performs a full page reload or refresh.` This is not what we want. 
   
      It also added a question mark at the end of the U.R.L. let me get rid of that. OK. 
   
   `Instead we want to use javascript to handle this form being submitted` in other words we want to prevent this default or traditional behavior. 
   
   So within the body of our arrow function we can just say 
   `e.preventDefault()` OK. 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()  ///
         })
      }      
   ```
   Right below that. `Let's call a method` that doesn't exist yet but one `that we will create in just a moment.` So let's say this dot. We could make up any name but just so we're on the same page. Let's call it `this.sendRequest()` OK. 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()  ///
         })
      }      
   ```
   Now `let's go create a method with this matching name.` 
   
   So maybe right here we can just say `sendRequest() {}` 
   ```js
   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()  ///
         })
      }

      sendRequest() {

      }      
   ```
   and `this is where we will actually communicate with our cloud function.` 
   
(63.7)
- Now we could use the web browsers fetch functionality to send off an asynchronous request but `I actually like to use a third party package named axioms`. 
   
   I just feel like `it's syntax is a lot cleaner and easier to work with than the fetch API.` 
   
   I must not be alone in that sentiment because you can see from the NPM page 4 axioms just in the last week it was downloaded six point three million times. 
   
   So right now let's do this within our command line let's `press control C to stop our web pack dev server` 
   
   and let's install a package. So let's run 
   `npm install axios` 
   
   `We do not need dash dash save Dev` because this is a direct dependency of our app that we want visitors to have to download. 
   
   So go ahead and press enter okay. Then let's `start our web pack dev server up again`. So `NPM run Dev` OK 
   
   now up at the very top of this javascript file `let's import in the axioms library`. So I will say 
   `import Axios from 'axios'` 
   ```js
   import Axios from 'axios'  ///////////

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {

      }      
   ```
   this package is great. `It makes sending off an asynchronous request. Super easy.` So check this out. 
   
   Down in our send request method within its body we can just say act CEOs dot post right. We want to send a post request to our U R L  `Axios.post()`
    ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post() //////
      }      
   ```
   before we worry about filling in these parentheses `at the very end of this line` I want you to say `.then()` 
   
   and then at the very end of that `.catch()` 
    ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch() //////
      }      
   ```
(63.8)
- so the axiom post method is going to result in `a promise`.
   
   The idea with a promise is `we don't know how long it's going to take right.` 
   
   So communicating with our cloud function might take five milliseconds or it could take five thousand milliseconds but `eventually it's either going to complete successfully or it's going to fail.` 
   
   So `within the then parenthese`s we provide a function. If things go as planned 
   
   `within catch` we provide a function for if things fail 
   
(63.9)
- let's actually `begin with the catch` function
   
   so `this will occur if the password does not match our desired javascript string` right because our cloud function is going to send back a status code of 401 or unauthorized. 
   
   So `within the catch parenthese`s let's just provide an arrow function parentheses arrow symbol curly brackets. 
      `() => {}`
    ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch(() => {}) //////
      }      
   ```

   Now what we would want to do is `add a bit of text that says that secret phrase is not correct.` `Please try again` so we can just say `this.contentArea.innerHTML =` 
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch(() => {
            this.contentArea.innerHTML =  ///
         })
      }      
   ```
   and then let's `use back ticks` and then let's add a bit of HDMI out. Let's create a` P for paragraph` and let's give it `a class` of client dash area underscore underscore error. So the text will be read inside the paragraph tag let's say that secret phrase is not correct. Try again. 
   ``<p class="client-area__error">That secret phrase is not correct. Try again.</p>``
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`  ///
         })
      }      
   ```
   Now right below this line `let's clear out the value of the input field` 
   
   Because if someone types in an incorrect password and then they submit the form well `instead of the user having to select or backspace we should just delete that incorrect value for them` 
   
   so we can say this dot field dot value should equal just an empty pair of quotes. `this.field.value = ''` 
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''  ////
         })
      }      
   ```
   `Also let's make sure that input field is focused` so `they can just begin typing again`. So `this.field.focus()` 
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then().catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()  ///
         })
      }      
   ```
   So that will run if the cloud function responds with a 401 unauthorized result. 
   
(63.10)
- However `if we type in the correct password` then `the then function will run.` 
   
   So let's give it an arrow function with exactly one parameter. Let's name the parameter response so then arrow symbol curly brackets `let's drop down in between`. 
   `response => {}`
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then(response => {}).catch(() => { ///
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()  ///
         })
      }      
   ```
   Now `if they type in the correct password` we can actually `delete the form from the page` 
   
   and then also `insert the secret content into that content area div.` 
   
   So `to get rid of the form` we can just say 
   `this.form.remove()` 
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then(response => {
           this.form.remove() ////
         }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()
         })
      }      
   ```
   And `then below that` we can say this dot content area right that same area where we would add the error message. `In this case we are successful`. So content area dot inner utml should now equal response dot data 
   `this.contentArea.innerHTML = response.data`
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post().then(response => {
            this.form.remove()
            this.contentArea.innerHTML = response.data ////
         }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()
         })
      }      
   ```
   so `this  (response.data) will be the value that the cloud function responds with`. 
   
   And remember `we set it up to respond with a bit of html` saying Welcome to the secret area the sky is blue. Two plus two equals four. OK. 
   
(63.11)
- `All that remains is the parentheses for post.` So inside these parentheses we want to give it `2 arguments.` 
   
   `So you could say (a, b) as placeholders `
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post(a, b).then(response => {  ////
            this.form.remove()
            this.contentArea.innerHTML = response.data
         }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()
         })
      }      
   ```
   the first argument (a) `is the U.R.L. that you want to send a request to. `
   
   So you `can just go back to postman` and that is `this url` 
   
   or if you don't have postman open any longer `you can always go into your Netlify control panel` jump into the project `click on functions` and look for its `Endpoint value` 
   `https://jovial-curran-9107bb.netlify.app/.netlify/functions/secret-area`

   if you wanted to you could just grab from the forward slash dot Netlify forward `/.netlify/functions/secret-area` 
   
   so that way if you actually purchased a real dot com domain for your Netlify site this would be a relative link instead of an absolute link that depends on the domain. 
   
   In my case though `I'm just going to grab the entire U.R.L.` 
   
   `back in our text editor` 
   
   `for the first argument` say `quote` Be sure to include the quotes and then `paste in your clipboard` 
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post('https://jovial-curran-9107bb.netlify.app/.netlify/functions/secret-area', b).then(response => {  ////
            this.form.remove()
            this.contentArea.innerHTML = response.data
         }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()
         })
      }      
   ```
   And then `for the second argument` instead of this be place holder `we give it an object` so `curly brackets` 
   
   and remember and post man when we sent a bit of Json data along with our request `we just want to have one property named password` 
   
   so within this empty object {}.we can just say `password:`
   
   and give it a value of whatever the user has typed into the field. `this.field.value`  
   ```js
   import Axios from 'axios'

   class ClientArea {
      constructor() {
         this.injectHTML()
         this.form = document.querySelector(".client-area__form")
         this.field = document.querySelector(".client-area__input")
         this.contentArea = document.querySelector(".client-area__content-area")
         this.events()
      }

      events() {
         this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
         })
      }

      sendRequest() {
         Axios.post('https://jovial-curran-9107bb.netlify.app/.netlify/functions/secret-area', {password: this.field.value}).then(response => {  ////
            this.form.remove()
            this.contentArea.innerHTML = response.data
         }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value = ''
            this.field.focus()
         })
      }      
   ```
   And that's it. But before we save this file I do want to point out that I misspelled value down here within the catch function when I said this dot field. `Make sure you spell the value correctly here.`  
   
   `Let's save this file.` 
   
(63.12)
- Also `we're not actually going to test this functionality locally on our computer` due to a web browser security protocol named cause `c o r s` which stands for `cross origin resource sharing` this network request would not go through. 
   
   The reason is `because we would be on local host` `and this is a different domain.` 
   
   Now I realize that in the real world you definitely want to test your code locally before pushing it up live. However `I don't want us diving into the tangent of CORS` 
   
   but if you really want to be able to test this locally after this video lesson `you'll find a text article with a bit of sample code so that you can modify your cloud function so that it would be accessible from our local dev environment`. 
   
   `However that's not the perfect solution`. 
   
   The perfect solution is to use Netlify his tool named `Netlify Dev` which makes previewing all of your code locally a piece of cake. 
   
   However `we're not going to set that up because this course is not really about Netlify` 
   
   We're just trying to see `the bigger picture of workflow and how everything fits together. `
   
   `All that is to say that we're not going to worry about previewing this locally` 
   
(63.13)
- let's just go ahead and `push it up to github` and `test it out on our Netlify Web site`. 
   
   So in the command line I will `stop our web PAC task` control C 
   
   and then get add everything `git add -A`
   
   and then `git commit -m 'Added clients area feature'` 
   
   and then push `git push origin master` 
   
   we can `jump over to our Netlify control panel` 
   
   and `click on Deploys`. See right now it's currently building.  
   
   A bit in the future I can see that this was successfully `published.` 
   
(63.14)
- So if I visit my public Netlify website and refresh `down at the very bottom we see secret client area. `
   
   If I type in a password that's incorrect on purpose and submit code that secret phrase is not correct. 
   
   Try again. But if I type in javaScript awesome. Welcome to the secret area. 
   
   `This means that we have completed this feature.` 
   
   Now obviously our cloud function didn't do anything actually complex or super interesting. 
   
(63.15)
- Remember within that cloud function you can do anything. You could talk to a database. You could send off an e-mail anything that a server would normally do you're free to do 
   
   they're actually learning about back end or server side development is way outside the scope of this course. 
   
   I just wanted you to see the bigger picture and workflow of how the front end can communicate with the back end. 
   
   This cloud function architecture that net defined makes so simple the set up is becoming more and more popular each year. 





64. CORS Solution (Test Cloud Function from Localhost)

  Hello everyone, if you'd like to be able to test the Client Area feature from your localhost:3000 preview, simply modify your Cloud Function file named secret-area.js to look like this instead:
```js
exports.handler = function(event, context, callback) {
  const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers" : "Content-Type"
  }
 
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 200,
      headers,
      body: "This was not a POST request"
    })
  }
  
  const secretContent = `
  <h3>Welcome To The Secret Area</h3>
  <p>Here we can tell you that the sky is <strong>blue</strong>, and two plus two equals four.</p>
  `
  
  let body
 
  if (event.body) {
    body = JSON.parse(event.body)
  } else {
    body = {}
  }
 
  if (body.password == "javascript") {
    callback(null, {
      statusCode: 200,
      headers,
      body: secretContent
    })
  } else {
    callback(null, {
      statusCode: 401,
      headers
    })
  }
 
  
}

```
- If you'd like to learn more about the topic of CORS I always recommend the Mozilla Developer Network.

- The actual solution to this issue is to use Netlify Dev. If you're interested in the Netlify platform it's definitely worth looking into.    

### Section 21: Integrating React Into Our Workflow




65. Integrating React Into Our Workflow

(65.1)   
- In this lesson we are going to `learn how to integrate react into our project` 
   
   or I should say `into our web pack powered workflow.` 
   
(65.2)   
- `This lesson is just about integrating react into a typical workflow that already exists`. 
   
   If you read a few react tutorials you'll quickly find out that they almost all tell you to just use a package called `Create react app.` 
   
   Now there's nothing wrong with this package. I think it's a phenomenal tool. `However in the real world you're not always going to get to start from scratch.` 
   
   `Oftentimes you'll want to integrate react into a workflow that you've already set up.` 
   
(65.3)   
- to begin Let's jump over to our command line and we want to `install two packages` to run this command with me npm install react space because we want a second package named react dash Dom   `npm install react react-dom`
   
   `react is the core of the library` and `react Dom is specifically for the web browser environment.` 
   
   `We don't need to include dash dash save Dev` because these are direct dependencies that we want our visitors to actually download. Go ahead and press enter OK. 
   
(65.4)   
- Now let's go `leverage those packages`. 

   So right now I want you to `jump into your main JavaScript file` that lives in app assets scripts and is named `App.js` 
   
   maybe `below these first several lines` where we import packages in we could even `write a comment to ourselves and say` `// React Related Code Goes Here` 
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import ClientArea from './modules/ClientArea'

   // React Related Code Goes Here
   ```
   let's `import the overall react library` so import react from quotes the lowercase NPM package name. 
   ```js
   // React Related Code Goes Here
   import React from 'react' ///

   ```
   
   We also want to `import react Dom`'s import react Dom from the NPM name of react dash Dom. OK.
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'///
   ``` 
(65.5)   
- And now to actually output a react powered component onto our Web site `we need to add an empty div somewhere within our html.` 
   
   So do this with me Let's `open up index.html` which lives in our app folder. 
   
   You can add an empty div anywhere but in my case `I'm going to scroll down to the very bottom` and maybe `right before the footer I will add a new div.` So do this with me div closing div tag. We just want it to be empty. You can give this a really unique class name where we could even just give it an I.D.. So I.D. equals let's say my react example. OK. Let's go ahead and save this file. OK. 
   ```html
   <div id="my-react-example"></div>  ////

   <footer class="site-footer">
   ```
(65.6)   
- Now let's `jump back into our main JavaScript file` 

   and right below these to react lines `let's add another line` and type this in with me. `ReactDom.render()`
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'
   ReactDom.render() ////
   ``` 
   `So we're using the render method of the react on package `
   
   `within these parentheses` We provide `two arguments` so we could say `a, b as place holders.` 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'
   ReactDom.render(a, b) ////
   ``` 
   `The first argument is a component` that you want to render to the page in react. Everything really boils down to the idea of components. 
   
   `For now you can just think of a component as a reusable feature.` Again we're not actually learning react in this course. That's outside of our scope. 
   
   I just want to show you how to integrate react into our project or our workflow or technology stack. OK. 
   
   So this first argument should be a component we haven't created a component yet but we will in about 30 seconds from now. 
   
   So `instead of a placeholder` type this in with me less than symbol and let's say my amazing component space forward slash greater than symbol. OK. `<MyAmazingComponent />`
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'
   ReactDom.render(<MyAmazingComponent />, b) ////
   ``` 
   And then `for the second argument` instead of this b place holder this is `the element on the page that you want to render to.` In other words that empty div that we just added to our H T.M. L 
   
   so `instead of the B type this` in with me document dot query selector inside these parentheses we say quotes to select an element based on its I.D. we just say hash tag and remember we gave it an I.D. of my dash react dash example. 
      `document.querySelector("#my-react-example")`
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'
   ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example") ) ////
   ``` 
   OK now you might notice that `this almost looks like an html tag`  `<MyAmazingComponent />` that's sort of the whole idea. 
   
   So instead of a heading level three tag or a paragraph tag `we can create a component with its own custom name and custom features custom behavior.` 
   
   So let's do this right above this line `right here.` 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   ////

   ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example") )
   ``` 
   Let's create a function with this matching name. So let's say your `function MyAmazingComponent() {}` parentheses curly brackets. Obviously you could chose any name here. I just made this name up. Okay. 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   function MyAmazingComponent() {}  ///

   ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example") )
   ``` 
   Now within the body of this function let's say we want to `return()` parentheses. 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   function MyAmazingComponent() {
     return(  ///

     ) 
   }

   ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example") )
   ``` 
   Here's where things get interesting in between these two parentheses I want you to drop down and now `even though we're not within quotes or back ticks` we can actually start writing `what would seemingly look like html.` 
   
   So let's create an overall `wrapper div` and inside that div we could create a `heading Level 1`. This is my amazing react component 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   function MyAmazingComponent() {
     return(
        <div>
            <h1>This Is My Amazing React Component</h1> ///
        </div>
     ) 
   }

   ReactDom.render(<MyAmazingComponent />, document.querySelector("#my-react-example") )
   ``` 
   below that but still within our overall div we could create `a paragraph` and say 
   `<p>React is great, The sky is blue, grass is green.</p>` 
   ```js
   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   function MyAmazingComponent() {
     return(
        <div>
            <h1>This Is My Amazing React Component</h1>
            <p>React is great, The sky is blue, grass is green.</p>
        </div>
     ) 
   }

   ReactD.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))
   ``` 
   Now `this might look like html` but it's not. `It's something called jsx` 
   
   Now again since we're not actually going to learn react in this course unfortunately we can't dive into the details of JSX 
   
   for now All we really need to know is that the web browser would be tremendously confused by JSX and not only the web browser but our web packed workflow would probably throw an error message if our dev task was watching and we tried to save this file. 
   
   However luckily for us we already have a tool at our disposal that can look at javascript analyze it and then convert it or trans pilot. 
   
   Remember we used a tool named babble to look at our javascript and turn it into something that is backwards compatible with older browsers. 
   
(65.7)   
- Well even though web browsers would not be able to understand JSX `we can just download a babel tool that is specifically designed for react and the jsx syntax`. 
   
   Then whenever web pack bundles up our code it will convert this into something that does make sense to JavaScript interpreters and web browsers in general 
   
   so do this with me we can save this file but `go into your command line` and we need to `install just one more package` so let's run 
   `npm install @babel/preset-react --save-dev`  
   
   include --save-dev because the visitors of our site do not need to download this. This is just for our workflow As the developer of the site
   
(65.8)   
- let's go ahead and push enter okay `to leverage that package.` We just need to `jump into our webpack.config.js` file 
   
   now `previously we set things up so that only our built task` but not our dev task leveraged babble. 
   
   This made sense because you and I are always going to have the latest version of our web browser so we didn't need to transpire. Our code locally but we did want to convert it to be backwards compatible before pushing it up onto the Web. 
   
   `However` `we want to apply the react babel tool to both our dev and build workflows.` So let's go `find the babble code that's down in our build task.` So for me it's around line number sixty seven. 
   ```js
   if (currentTask == 'build') {
      config.module.rules.push({ 
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env']
         }
      }
      })
   ```
   We see if current task equals build right and then we said config dot module dot rules dot push. 
   
   Here's what I want you to do `inside that parentheses for push.` I want you to begin `selecting this curly bracket down to this closing curly bracket.` 
   ```js
   if (currentTask == 'build') {
      config.module.rules.push({ /// cut from here
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env']
         }
      }
      }) /// to here
   ```
   Okay. And then go ahead and `cut this into your clipboard.`
   
   `You'll know that you cut the right code if it now just looks like this` an empty push call. 
    ```js
   if (currentTask == 'build') {
      config.module.rules.push() /// to here
   ```
   So `we can delete this line entirely`. Okay. 
   ```js
   if (currentTask == 'build') {
       /////
   ```
   Now I want you to `scroll back up to our common config object` right. This is the shared config `that is the same between both our dev and build tasks.` 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
      rules: [
         cssConfig  ///
      ]
      }
   }
   ```
   Well `all we need to do` within the module and then rules within this array. `Right after cssConfig` you can just `add a comma` `dropdown` 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
      rules: [
         cssConfig,
         ///
      ]
      }
   }
   ```
   and then `just paste in your clipboard.` OK 
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
      rules: [
         cssConfig,
         {
            test: /\.js$/, //1 
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader', //2
               options: {
                  presets: [ '@babel/preset-env']  //3
               }
            }
         }
      ]
      }
   }
   ```
   so we've `added a rule that is only for JavaScript` files//1 
   
   We're `using the babel-loader`//2 
   
   and `we were already using this preset that will make our code a bit more backwards compatible.`//3 
   
   Well this is an array that can have multiple presets so let's just add the react preset to the beginning of this. So add a pair of quotes add a comma in between and in these quotes say at Symbol babble forward slash preset dash react cool `'@babel/preset-react',`
   ```js
   let config = {
      entry: './app/assets/scripts/App.js',
      plugins: pages,
      module: {
         rules: [
            cssConfig,
            {
               test: /\.js$/,
               exclude: /(node_modules)/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-react', '@babel/preset-env']
                  }
               }
            }
         ]
      }
   }
   ```
   let's `go ahead and save this` and again `make sure your main app dot J.S. file has been saved` 
   
   and let's fire up our `npm run dev` 
   
   If we jump back over to the Web browser just to be safe go ahead and perform a manual refresh 
   
   and then if we scroll down to where we added that empty div awesome you can see that our ReACT component rendered into that div. 
   
(65.9)   
- Now even though we're not going to actually learn react or J.S. X in this lesson `I do want to show you a few tips.` 
   
   So back in our code within our function for my amazing component we need to remember that this might look like html But it's not html 
   ```js
   function MyAmazingComponent() {
      return (
         <div>   
            <h1>This Is My Amazing React Component</h1>
            <p>React is great!!!</p>
         </div>
      )
      }
   ```
   So imagine I wanted to add a class to this heading to make it blue and large and centered so I could say `class="section-title section-title--blue" `
   ```js
   function MyAmazingComponent() {
      return (
         <div>   
            <h1 class="section-title section-title--blue">This Is My Amazing React Component</h1>
            <p>React is great!!!</p>
         </div>
      )
      }
   ```
   Well this code would make sense in  html but this will break JSX 
   
   since JSX is actually just JavaScript. `We need to realize that the word class is reserved in javascript.` 
   
(65.10)   
- So when we want to apply a CSS class to one of our elements here we need to say `className` and capitalized the N in name. Okay let's go ahead and save this then back in the browser. Cool. 
   ```js
   function MyAmazingComponent() {
      return (
         <div>   
            <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
            <p>React is great!!!</p>
         </div>
      )
      }
   ```
   We don't need to refresh our `web PAC just injects the newest version of our code` can see it's blue and it's large. OK 
   
(65.11)   
- another quick `JSx tip is that you can only have one route or top level element.` It doesn't need to be a div. You could use something called a react fragment. But again we're not going to get into that because we're not actually learning react here. 
   
   Essentially I just want to let you know that if you tried to have this top level div and then if I tried to add another element down here 
    ```js
   function MyAmazingComponent() {
      return (
         <div>   
            <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
            <p>React is great!!!</p>
         </div>
         <h3>Hello</h3>  ////
      )
      }
   ```
   this would break everything. This is not valid JSx. `You can only have one top level or root level element.` OK 
   
(65.12)   
- before we bring this lesson to a close I want to show you how `you could tuck this component code away into its own separate file right. `
   
   So that way our main JavaScript file stays super clean. We import the files we need and that's it. 
   
   So do this with me `within our scripts modules folder`. Let's create a new file let's name it. 
   `MyAmazingComponent.js` OK. 
   
   `Back in App.js` just `copy this entire function for my amazing component.` 
   ```js
   function MyAmazingComponent() {
      return (
         <div>   
            <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
            <p>React is great!!!</p>
         </div>
      )
   }
   ```
   Let's cut that into our clipboard `back in our new empty file MyAmazingComponent.js we can just paste it in` 
   
   and then down at the very bottom here say 
   `export default MyAmazingComponent` right.
   ```js
   function MyAmazingComponent() { ////
   return (
      <div>
         <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
         <p>React is great!!!</p>
      </div>
   )
   }

   export default MyAmazingComponent  ////
   ```
   So that `if any file tries to import this file that's what we want the official export to be` 
   
   before we save this file though up at the very very top. `We do need to import in the core react library` so 
   `import React from 'react'` 
   ```js
   import React from 'react' ////

   function MyAmazingComponent() { 
   return (
      <div>
         <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
         <p>React is great!!!</p>
      </div>
   )
   }

   export default MyAmazingComponent 
   ```
   Don't worry `it's not like including react both here and in the main file is going to bloat the bundle.` Webpac is super efficient and `it just points towards the same instance`. 
   
   OK at this point we can save this file 
   
   and then `back in our main App.js` Right below when we imported react and react. Dom `we can just import our component file`. We `could even write a comment to ourselves. Stay organized.` 
   `// Import react components that we created` 
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import ClientArea from './modules/ClientArea'

   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   // Import react components that we created  ///

   ```
   Then we can just say import my amazing components from. Give it a file path dot slash into the modules folder my amazing components.
    `import MyAmazingComponent from './modules/MyAmazingComponent'`
   ```js
   import '../styles/styles.css'
   import 'lazysizes'
   import MobileMenu from './modules/MobileMenu'
   import RevealOnScroll from './modules/RevealOnScroll'
   import StickyHeader from './modules/StickyHeader'
   import ClientArea from './modules/ClientArea'

   // React Related Code Goes Here
   import React from 'react'
   import ReactDOM from 'react-dom'

   // Import react components that we created  ///
   import MyAmazingComponent from './modules/MyAmazingComponent'
   ```
   And `then this line` 
   ```js
   // Import react components that we created  ///
   import MyAmazingComponent from './modules/MyAmazingComponent'

   ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))  /////
   ```
   `will be able to access that component or that function.` 
   
(65.13)   
- Let's go ahead and also save this file and then `to prove that things are working` now that we've split it into its own file we could `go into that file and just change any of the text` so I'll change this paragraph to just say react is great `with three exclamations`. 
   
   I save that `back in the browser we see that change reflected.` Okay. 
   
   And then finally I do want to let you know that `it's not as if react Dom dot render is the only thing that can list a component using this html tag style.` 
   
   So for example `in our component file` within our JSX here below this paragraph we could say `<MyCoolPhotoBox />`
   ```js
   function MyAmazingComponent() {
   return (
      <div>
         <h1 className="section-title section-title--blue">This Is My Amazing React Component</h1>
         <p>React is great!!!</p>
         <MyCoolPhotoBox /> ////
      </div>
   )
   }
   ```
   and then `we could create a functioning component with this matching name in a separate file` just like we did with this component. 
   
   Let me go ahead and delete this example. 
   
(65.14)   
- Now I realize we didn't do anything truly interesting or exciting with react in this lesson. 
   
   That wasn't the point of this lesson. 
   
   I'm not here to advertise or to quote sell you on react. However it's such a popular library that I felt like I'd be doing you a disservice if I didn't show you how to integrate it into our existing workflow 
   
   if react has piqued your interest at all. I strongly strongly encourage you to continue learning about react. 
   
   `In particular I'd encourage you to research the reactive topics of props` Once the idea of props makes sense then I would encourage you to `research hooks` and specifically the `use state hook`. Anyways big picture. 
   
   Do a bit of react research and if it excites you at all. Dive into it because I can't overstate how popular and in demand react is right now in the industry. 
   
   Anyways that's going to bring this lesson and our coverage of react in this particular course to a close. 


### Section 22: Git Timeout

66. Git Tips - How to Handle (and Avoid) Merge Conflicts


(66.1)   
- in this lesson we will `learn how to work with a team of other developers without letting merge conflicts` and get stresses out. 
   
   Here's `an overview` of what we'll cover. 
   
   First we'll answer the question of `what is A merge conflict.` 
   
   Next we'll learn `how to fix or resolve A merge conflict.` And 
   
   finally we will learn `how to avoid a lot of merge conflicts in the first place.` 
   
   Let's start at the top with number one. 
   
(66.2)   
- `What is a merge conflict. `
   
      Well we know that get is really good at taking two versions or snapshots of a project in squishing or merging them together. Right 
   
      so we've used the get merge command many times to do just that. So 
   
   `most of the time` git can automatically merge our code from one commit state into another without any problems. 
   
   But `if we ask get to do the impossible and read our minds` we'll run into something named a merge conflict. 
   
   Let me show you `a couple examples` of what I'm talking about. 
   
   So `first we'll see an example of a successful merge` that saves the day. 
   
         And then secondly we'll see an example of a failed merge that runs into a conflict. 
   
   Let's imagine we have an html file in our repo on github and let's say we have two developers on our team working on this project. John and Jane. 
   
   Let's imagine John pulled down the master branch to his computer and begins working on a few changes. 
   
   Let's say he adds a few new list item elements `to the end of the unordered list`. 
   
   Now imagine at the same time that John is working on those changes. Jane also pulls down the master branch to her computer and before John can push his master branch back up to get hub Jane is able to quickly add a new list item elements `to the very beginning of the unordered list` and she successfully pushes her master branch back up to get hub. 
   
   This would mean that John's copy of the master branch is now outdated compared to the copy on good hub. 
   
   So when John tries to push his master branch to get hub he'll see an error message that his push failed because his Ribault is outdated. 
   
   Now `at that point all John needs to do to fix things is run a get pull to pull in the latest changes from get hub and then it can automatically merge his outdated commit with Jane's recent commit `
   
   now if you're in the command line and get is trying to perform a merge you might be wondering what keys you're supposed to press. 
   
   So from this screen we want to push the escape key and then type a colon and then W Q And then press enter. 
   
   After that successful automatic merge John is now free to push his master branch up to get up get is able to save the day and merge for us here because the lines of code that each team member added are different from each other 
   
   one added to the beginning of the list and the other added to the end. 
   
(66.3)   
- However let's imagine it's a new day. And on this day John pulls down the master branch to his computer and begins to work on adding his thoughts and opinions about each number. 
   
   So he edits the four line to say that `four` is a good number. He edits the five line to say that` 5` has been bad luck in my life 
   
   and before John can finish his work and push his master branch up to get Herb. Jane also starts working on her master branch and she too is adding her opinions on numbers 
   
   so she edits the four line to say `four` is unlucky and she edits the `five` line to say five is my favorite number and Jane is faster than John. 
   
   So let's imagine that Jane is able to push her branch up to get hub before John finishes his work. 
   
   So again when John does finish his work and tries to push it to get up his push will fail because his repot is now outdated 
   
   but this time when John tries to fix things by running a get pole get will not be able to automatically merge and save the day. 
   
   Instead John will run into a merge conflict. `The conflict is that John and Jane both want to commit different changes to the same lines of code `
   
   and `get. Has no way of knowing who to listen to John or Jane.` So in this case a computer can't decide for us 
   
   as a human being. We need to step in and manually make a judgment call and choose which code to use for those lines. 
   
   So the command line here is telling us which files have conflicts. So let's open this file up in our text editor and see how easy it is to resolve a merge conflict 
   
   so the Get system automatically added a few lines of code to the file. This line this line and this line. 
   
   So first head is the commit that John tried to push and following that are the matching lines of code from James recent comment. 
   
   So we just need to do two things we need to remove the label lines that get added to the file and we also need to decide which conflicting winds to actually use. 
   
   So let's make a judgment call. Why don't we say that John is right about the number four and Jane is right about the number five. 
   
   So let's delete the line of code from Johns commit that was about five and let's delete the line of code from Jane's commit that was about four. 
   
   And then let's also delete these lines that get automatically added 
   
   and once we've cleaned up the file we just save it and then jump over to the command line and we can simply stage and commit our changes just like we normally would. 
   
   And because we resolved the conflict John would now be free to push his master branch up to get up 
   
   so you can see that emerge. Conflict is nothing to be afraid of. You just open up the file and make a judgment call. 
   
(66.4)   
- But in a perfect world we wouldn't run into conflicts in the first place. So now let's change gears in this lesson and review a few best practice tips we can follow to avoid merge conflicts in the future. 
   
(66.5)   
- Tip number one is to run the get pull command as often as possible. 
   
   If you're working with a team of other developers you want to constantly be pulling in their commits from the server so that you're working with the latest code 
   
   you want to make this part of your routine so running get pool just becomes a habit. 
   
   Any time you sit down to work on your project before you actually edit any files run a get pull. 
   
   So if you get into work at 8 AM first thing running get Paul. If you get called into a few meetings or phone calls and you don't actually get to work on the project until after lunch well after lunch. Run another get pool. 
   
(66.6)   
- Tip number two and this probably goes without saying. But simply communicating with your team can go a long way. 
   
   Talk with each other about who is responsible for which changes and which parts of the project. 
   
   Be aware of what each team member is working on for that day or week and you don't need to go overboard and waste a ton of time chatting about what you're working on. 
   
   But you'd be surprised. Even just having a general idea of what each person is working on will put you in a position where you are far less likely to edit the same lines of code within the same file at the same time. 
   
   And that means less conflicts. 
   
(66.7)   
- Tip number three is to get everyone on your team to agree on whitespace settings in your text editors. 
   
   So for example if I jump into my text editor and I press the tab key we need to ask ourselves what exactly did my text editor do to create that space or that indebt. 
   
   Is that a single tab space character or is it actually just for individual space bar spaces or to individual space bar spaces. What is it. 
   
   Well in the bottom right corner of my text editor I can customize what happens when I push the tab key so I can choose to use space bar spaces or actual single character tabs spaces and I can also choose the tab width so whether I want to indent a little or a lot you get the idea. 
   
   Now you want to make sure that everyone on your team uses consistent settings. 
   
   Otherwise get will notice differences in you and your teammates code that you didn't even intend. 
   
   All right 
   
(66.8)   
- let's move on to tip number four. Tip Four won't help you avoid conflicts outright but if you're working on a feature branch Tip 4 will help you deal with any potential conflicts before it's time to actually Merge feature branch back into Master. 
   
   So let's imagine you're working on a new feature. Let's say on January 1st you create a new branch off of master named home page feature. 
   
   Let's imagine this branch is taking you a couple of weeks to finish. So on January 15th you finish your feature and you want to merge your branch back in the master. 
   
   However your home page feature branch is based off the January 1st state of the master branch 
   
   and since then your teammates have been making all sorts of updates to the master branch. Which means when you try to merge your feature branch into Master you could very well run into conflicts 
   
   and we typically want our merges into Master or our pool requests to not have any conflicts. 
   
(66.9)   
- So tip number four is to change the way we think about the get merge command. 
   
   Let's stop viewing it as a one way street where we only merge feature branches into Master 
   
   Let's view it as a two way street where we can also merge the master branch into our feature branches. 
   
   So in our example between January 1st and January 15th every couple of days why don't we just pull down the latest copy of the master branch and while we have our feature branch checked out let's merge master into that branch. 
   
   If we do this often enough we will likely avoid any conflicts 
   
   and even if we do run into a few conflicts we can deal with them now so that when it comes time to actually merge our branch into master the process will be smooth and painless 
   
   and that will actually wrap up our top four tips for avoiding conflicts. 
   
(66.10)   
- Obviously there are a ton of other strategies out there but these four are simple enough to follow and they will make a huge difference. 
   
   Now in our next lesson we will be changing gears big time. We will learn how to get more job interviews and more importantly once we've gotten an interview we want to be sure that we interview well 
   
   it should be a ton of fun. Let's keep things rolling and I will see you in the next lesson. 


   ### Section 23: Looking Forward

67. Job Interviews


(67.1)   
- In this video we will talk about job interviews. `This video has two main components to it.` 
   
   First we'll learn `how to get more interviews` 
   
   and then secondly once you've gotten the interview we'll learn `how to interview well.` 
   
   Now I've personally been on both sides of developer job interviews the applicant side and the hiring side. 
   
   So I'm going to share my top tips. These are things that worked for me when I was job hunting and these are also things that I was looking for an applicants when I was on the hiring side. 
   
   So without further ado let's dive right in and let's learn how to get more interviews. 
   
(67.2)   
- My first tip is to `consider working remotely.` 
   
   This will allow you to simply cast a wider net. This tip may seem obvious but believe it or not I see a lot of people who are job hunting who make the mistake of only looking for jobs in their local area. 
   
   This isn't 1950. You're a developer you work on a computer you can work from anywhere 
   
   you are throwing away countless amazing opportunities. If you refuse to work remotely. 
   
   Now if you happen to live somewhere where there is a wealth of local opportunities that's fantastic. 
   
   But if you live somewhere where there isn't as much going on locally you really need to ask yourself would you rather work for a disappointing local company or a thriving fun supportive company that just happens to be across the country. 
   
   To me the choice is obvious. Working remotely is an attractive option. 
   
(67.3)   
- Now you might be wondering where to look to find remote jobs. 
   
   Well Web sites change over time so I won't mention any specific site names in this video. 
   
   But in the text discussion for this video I'll include a few links to the top remote developer job board sites. 
   
(67.4)   
- My next tip is don't limit yourself to officially listed openings only sometimes you can create an opening. 
   
   So if you see a company that you like and you honestly think that you would bring value to their team reach out to them. 
   
   A lot of companies are always on the lookout for talented new team members and many will have a career page on their company Web site that says they are accepting applicants even though they haven't necessarily posted any openings on official job board sites. 
   
   So the point is don't wait for an opening. Sometimes you can create an opening. 
   
(67.5)   
- My next tip can be referred to as call their bluff meaning you need to be able to tell when a job description is lying. 
   
   Now when I say lying here's what I'm referring to. Sometimes a job posting will include a description of who they're looking for and they will basically describe a non-human genius alien with superpowers that knows everything about everything. 
   
   Well I'm here to tell you that that person doesn't exist. So we need to call their bluff. 
   
   So even if you don't have everything that the job description mentioned as long as you have the majority of the things they list I want you to go ahead and apply. 
   
   So for an example a lot of companies will mentioned that they're looking for a full stack developer. 
   
   Now while some of these companies are indeed actually looking for a senior level well-rounded developer who can do it all a lot of companies use that phrase full stack developer pretty lightly. 
   
   They might not actually be looking for a full blown genius phenomenon. They might just be looking for someone who is at least familiar with several different aspects of development. 
   
   So trust your gut you know you'll have a general feeling of whether you're qualified or not for the job. But I would say to try and error on the side of overestimating yourself instead of underestimating yourself. 
   
   Don't let the job descriptions intimidate you. Basically don't pre reject yourself. It never hurts to try. 
   
   The great Michael Scott once quoted the great Wayne Gretzky and said You miss 100 percent of the shots that you don't take. So in your gut if you think you even got a small chance I want you to apply. 
   
(67.6)   
- My next tip is to customize your message for each job that you apply to. 
   
   When I say your message I'm referring to your cover letter or the email you send or the little text box message that the job site lets you include. 
   
   Notice I'm not saying I want you to completely rewrite the message for each job but just make minor adjustments to it. 
   
   So after you read a job description and you research the company even just for three to five minutes you'll get a feel for what specific qualities and experiences they're looking for and you'll get a feel for what traits they value in people. 
   
   And I want you to highlight those skills experiences and traits in your message. 
   
   Now I don't want you to lie or make stuff up. I want you to be honest but think about how you align with what they've said they're looking for. 
   
   So for example if a company mentions a certain piece of software they use and you have experience with that software mention that in your message. 
   
   Basically I just don't want you to copy and paste a generic cookie cutter cover letter and use it for every single application. 
   
   Don't do that. It only takes a couple of minutes to customize your message for each job. 
   
(67.7)   
- My next tip is to keep that message relatively short but not so short that you don't look interested. 
   
   This is about finding that happy middle ground so no one wants to read a novel but you do want to write enough that you wet their appetite. 
   
   So as a general guideline I'd say begin with a sentence where you introduce yourself and then no more than one medium length paragraph where you talk about your experience and your strengths. 
   
   After that no more than one or two sentences about why you like the sound of their company and why you think you'd be valuable and that's it. 
   
   Anything longer than that and you run the risk of sounding self-important or like you're compensating for something. 
   
   So basically keep your message short and sweet. 
   
(67.8)   
- My next tip is to create a personal website for yourself that you can linked to in your job applications. 
   
   There's no excuse for you to not do this. Now that you know how to use GitHub pages for free 
   
   and even if you don't have a portfolio of real world projects to show off that's OK. Just create a site that simply has a paragraph about yourself. Maybe a photo and a list of things you're interested in. 
   
   Why is this so important. Because your website is a chance for the company to see your code to see that you understand best practices. 
   
   The website itself the HMO CSX the javascript that is your portfolio they can check it out. 
   
   They can ask themselves Is it responsive. Is it mobile first. Does it load quickly. Does this applicant stay current. 
   
   I know this tip sounds super obvious but you'd be surprised how many applicants I've seen that don't have a Web site. 
   
   So again don't worry so much about your personal site's content. The content only needs to be one step above law met some dummy content but just treat your site as a design exercise as a coding exercise to show people what you can do. 
   
(67.9)   
- My next tip is don't use bootstrap on your personal site. 
   
   Now I'm not saying that bootstrap is bad and I'm not saying that it's never the right tool for a job. I'm just saying don't use it on your personal site. 
   
   It would be like if someone was applying to be the lead chef for a five star restaurant and in their resume. They said that they make dinners from boxed Rice mixes and they make desserts from boxed cake mixes 
   
   using Bootstrap makes you look like the opposite of an artisan craftsman who takes pride in building Web sites 
   
   bootstrap makes you look like you just wanted to finish the site in the most economical rushed way possible. 
   
   So again this is an antique bootstrap propaganda. I'm not saying it's not the right tool for certain jobs but I am saying for your personal site it's a no no. 
   
(67.10)   
- And here's my final tip for getting more interviews. Find a way to demonstrate that you stay current. 
   
   There are a ton of different ways to do this. 
   
   On Twitter you can tweet about new things that you're learning or start a blog and post about what you're excited to learn next. Or even just mentioned new technologies that you're interested in on your Web site. 
   
   I know that Staying current is important in any industry but in ours it's even more important because technology moves so quickly 
   
   you immediately become an applicant that is at least worth considering. If you can present yourself as someone who makes an effort to stay current. 
   
(67.11)   
- All right now let's change gears let's say that you've landed an interview and now you want to be sure to interview well. So here are a few tips. 
   
   Tip number one is that it's OK to be nervous if you're nervous or stressed out about an interview. That just means that you're human. 
   
   The interviewers know that everyone gets nervous and they aren't going to judge you for it. 
   
   Also even though you think you might look super nervous it probably isn't as bad as you think it is. As far as they can tell you probably seem at least relatively calm. 
   
   My next tip is to prime yourself before the interview. Again it's normal to be nervous or stressed out but you don't want to be so nervous that it robs you of your personality. 
   
   So try to prime yourself before the interview to be in a somewhat playful mood. 
   
   Watch a few videos that make you laugh or listen to your favorite music. 
   
   You want to do something that keeps you grounded in your personality. That way you can own your nervousness instead of it owning you. 
   
(67.12)   
- My next tip is to remember that an interview is a two way street and this might help you feel less nervous. 
   
   So an interview isn't just you trying to convince them to hire you don't feel like all of the pressure is on you. 
   
   You are also finding out if you like them they are in the hot seat to you are finding out if you would even want to work for them. 
   
   So don't mentally give away all of your power before you go into an interview. Don't think of it as a meeting where you need to convince someone that you're good enough you are good enough. 
   
   Just think of it as a meeting where you want to see if you can be friends. 
   
   So what would you do in a social situation. Well you'd want to give off a positive vibe. You'd want to be kind. You want to be humble. You want to speak confidently about the things you're good at and that interest you try to approach it like that. 
   
(67.13)   
- My next tip is don't try to make yourself seems super intelligent. It's more important that you seem likeable. 
   
   The best way for me to describe this tip is to just share one of my own personal experiences. 
   
   So we were interviewing applicants for a mid-level developer position and we ran into a candidate who is the smartest most talented developer by far. 
   
   It wasn't even close. He was a genius. But during the entire interview he didn't laugh even once he barely smiled and he didn't say anything positive about anyone or anything other than himself. 
   
   Now again even though he was the most skilled person we interviewed by far he just wasn't likeable. 
   
   And because of that we did not pursue him as a candidate. 
   
   So smile laugh. Employers want positive likeable people someone who is positive instantly seems like someone with leadership potential. 
   
   So in a nutshell being likeable is more important than being super intelligent. 
   
(67.14)   
- My next tip is to try and convey enthusiasm in this industry things change super quickly. So the best developers are the ones that love what they do because this leads to them spending the time to stay current. 
   
   You don't want to seem like this is quote just a job to you. You want to seem passionate 
   
   you've got to remember that we have the luxury of working in an area that we are interested in that engages us that challenges us in a good way. 
   
   Millions of people would love to be mentally stimulated by their work the way that developers are. 
   
   So be thankful for the field you're in and let that gratitude and enthusiasm come across in your interview. 
   
(67.15)   
- My next tip is don't be afraid to present yourself as a specialist. Don't be afraid to admit that you don't know something. 

   So for me it's a turnoff. When an applicant tries to act like they know everything about everything because I know they're lying. 
   
   If someone really was that proficient at that many different things they wouldn't even need the job that they're applying for. 
   
   They would have already invented the next Facebook. So I'm much more impressed when an applicant presents themselves in a realistic light. 
   
   They talk about the things they're strong at and they also open up and maybe be a little bit vulnerable and talk about the things that they are still working on improving. 
   
(67.16)   
- My next tip is that even though you don't need to know everything about everything. Building up your vocabulary as much as possible is always a good idea. 
   
   You want to familiarize yourself with as many different technologies as possible. 
   
   Notice I'm not saying you need to learn as many technologies as possible just become familiar with them. 
   
   Just being able to use a technology word in a sentence correctly and talk about how what you do know interfaces with the technology in question shows that you're a valuable candidate. 
   
   So for example maybe you don't know how to use Mongo D.B. in javascript to save data to a database but just knowing that Mongo D.B. is a database system is helpful. 
   
   So basically you don't need to know everything but building up your tech vocabulary certainly helps. 
   
(67.17)   
- And my final tips interview well is to prepare a custom question beforehand. 
   
   What I mean by this is that most interviewers will ask you if you have any questions for them. 
   
   You want to have at least one question preferably multiple questions that show you are picturing yourself working there. 
   
   Your questions show that you are genuinely interested and engaged and can imagine yourself in the job 
   
   in a perfect world we would be able to think of a question on the fly about something in the interview but thinking on your feet like that can be tricky. 
   
   So why don't you come into the interview with a semi canned question in your pocket 
   
   now don't have a completely generic cookie cutter question that you ask in every interview. 
   
   Instead research the employer before the interview check out their Web site and their social media and create a question about something you saw that interests you 
   
   that way. If you can think on your feet and come up with the perfect question in the heat of the moment great. But if you can't you know that you have a solid question in your back pocket 
   
   all right before we bring this video to a close. I've saved the most important big picture tip for last and that is that most likely the biggest challenge you'll run into during your job search is running out of patience 
   
   because finding the right developer job can take a surprising amount of time. 
   
   I know personally the last time I was job hunting it took me longer than I thought it would and I have a close friend who even with a degree in computer science from a good school still took longer than you might think to land the job that he wanted. 
   
   So don't be so hard on yourself. This doesn't happen overnight for anyone you might think it's taking you quote too long to find a job that there's something wrong with you that you aren't good enough and that's why you haven't found a job yet. 
   
   Stop. It's normal to have those thoughts. If you're having those thoughts it just means you're human. But deep down you know those thoughts are not true. 
   
   You are more than good enough. You know it. I know it. I know it because you've made it through my five million hours of rambling in this course 
   
   and that alone proves that you're driven you have ambition and that you're going to get what you want. 
   
   The only problem is that you've ran out of patience. You think the job search is taking too long. And so now your mind is trying to punish and attack you. 
   
(67.18)   
- So let me try and help you strengthen your patience. 
   
(67.19)   
- First of all know that it's normal for a job search to take what feels like an eternity. 
   
(67.20)   
- Secondly maybe none of the jobs you've interviewed for so far were the right one for you 
   
   so personally during my last job hunt I had met with several companies and just didn't click with any of the people. So obviously I didn't get the jobs and started to bring me down. 
   
   When you have multiple interviews in a row where you don't get the job it's normal human behavior to feel discouraged 
   
   but then I had an interview with a company that I had a good feeling about. The interviewer was friendly and someone that I immediately gelled with the job needed a certain skillset that I was strong in so my weaknesses weren't a big deal. 
   
   And by the end of the interview I was convinced that this would be a really good fit and I really wanted the job. 
   
   And 
   
(67.21)   
- it made me stop and think that I was glad the previous few companies had passed on me. I stopped feeling bad about those rejections because if any of those companies had hired me I wouldn't have ever interviewed with this amazing company 
   
   and the amazing company would actually go on to hire me and it would become the best job that I ever had. 
   
(67.22)   
- So long story short the job search can take a lot longer than you thought it would. And you've got to stay patient. 
   
   I don't want you to let anyone including yourself tell you that you can't get the job that you want. 
   
   You know fully well that there are things you are downright amazing at and you would add so much value to so many teams out there. 
   
   You can contribute to a project through get you right clean HDMI all super organized CSX modular object oriented javascript. You're a beast. 
   
   You understand what no JSA is and how to leverage NPM and build tools like web pack and babble. 
   
   I am not exaggerating when I say that there are tons and tons and tons of companies out there looking for the exact skill set that you now possess. 
   
   All you need to do is keep your patients stay positive and sooner or later you will walk into an amazing opportunity. 
   
   If you need to come back in a month or two and re listen to this last part of the video to remind yourself what a catch you are go for it. 
   
   I'll be here waiting. 
   
   That's going to bring this video to a close in our next lesson. We'll look at next steps you can take and we'll talk about career progression should be interesting. Let's keep rolling and I will see you in the next lesson. 



68. Next Steps & Career Progression

   Hello everyone 
   
   and this video will talk about the next
   steps you can take. 
(68.1)   
- This video has two main components to it. 
   
(68.2)   
- First we'll talk about what you can learn next. 
   
   So we've finished learning new skills in this course. And now you might be wondering what's the next logical step. What should I learn now. So we'll cover that. And 
   
(68.3)   
- then secondly we'll also talk about career progression. 
   
   So let's say you get a job that's fantastic. It's definitely something that's worth going out and buying a cake to celebrate. 
   
   But you don't want to stay at that exact job or position for the rest of your life. 
   
   You want to be able to grow and continually see progress. 
   
   So we'll talk about a few things that can help you in that area. 
   
   But first let's talk about what you can learn next. 
   
(68.4)   
- I want to start out by saying that with everything you've learned in this course I think you'd be valuable to just about any dev team out there right now with what you currently know. 
   
   But the developer spirit is to never stop learning to always be moving forward. 
   
   So with that in mind 
   
(68.5)   
- here are my recommendations on what to learn next. 
   
   Really it's as simple as JavaScript javascript and more Javascript. 
   
   It's still a plus to know server side languages like HP or Ruby but honestly at this point in time I'd say there are more companies that will value javascript. This is because javascript is now completely ubiquitous. 
   
   It's on the front end it's on the back end. It's in simple brochure type websites. 
   
   It's in complex web apps it's in device native apps it's everywhere. 
   
   So a developer who knows javascript is incredibly in demand right now. 
   
(68.6)   
- Now we definitely learned about javascript in this course but I would still jump at any opportunity to learn more about javascript. 
   
   Keep practicing keep building new things with it. 
   
   I'll include a few links in this video description where you can read more about javascript news and resources and best practices because really anything you do to advance your understanding of javascript is going to propel your career forward tenfold. 
   
(68.7)   
- Now my advice is always to learn what interests you the most your natural curiosity is the best motivator and teacher. 
   
   So I'd say whatever interests you the most just pursue that from a javascript angle. 
   
(68.8)   
- So if you say that design or front end or user experience interests you the most. Try to learn a single page application library like react 
   
   react to super popular right now and learning it will open all sorts of doors for you. 
   
   You can find introduction to react to Tauriel is on YouTube and across Google and if it looks like something that interests you at all. 
   
   I wholeheartedly recommend you sink your teeth into it. Re-act is a great tool to know right now. It's very in demand. 
   
(68.9)   
- Or if you say that back and interests you the most. So dealing with data and actually making things happen. Try learning more about node J.S.. 
   
   So remember way back in the course when we wrote no js code to programmatically go out onto the Internet and save the photo of a dog to our hard drive. 
   
   You can do stuff like that only ten thousand times more advanced. 
   
   You can learn how to use node to serve up an API or even an entire website. 
   
   You can learn how to talk directly to a database with node and if you use a database system like Mongo D-B your actual requests for the database themselves can be written in Javascript. 
   
   So long story short you can do anything with Knode and node developers are incredibly in demand right now. So again if data and back end tasks are what excite you. I recommend staying in the node J.S. ecosystem instead of sinking your teeth into something like BHP or Ruby. 
   
   All right so those are my recommendations on what to learn next. At this point let's change gears and 
   
(68.10)   
- now let's talk about career progression. The first topic I want to cover is how important it is to know yourself. 
   
   So we all have our own unique blend of strengths and weaknesses. And if you want your career to grow you need to align your decisions to leverage your strengths. 
   
(68.11)   
- Here are a few examples of what I'm talking about. 
   
(68.12)   
- So some people are super intelligent programming just comes a little bit easier to these people than it does for others. 
   
   Their minds seem to learn a little bit quicker than others and they can train themselves to see the most elegant solution with code. 
   
   Their minds are just built that way. 
   
(68.13)   
- But that same person might not be a very good leader. They might lack charisma they might lack the ability to bring out the best in others. 
   
   They might not be very good at seeing the bigger picture. Maybe they tend to focus on smaller technical details. 
   
   So for this person maybe their career progression doesn't involve staying with a mid-level company for a long time and moving up to a management or executive position. 
   
(68.14)   
- Considering this person's strengths and weaknesses maybe their best career move would be to try to become the absolute best developer or programmer they can be and to keep getting developer jobs at bigger and better companies. 
   
(68.15)   
- But let's take a look at a different person. So some people are good programmers but they're not great or amazing but maybe they do possess leadership qualities. 
   
   Maybe they are good at keeping a level head no matter what. Maybe they have the ability to inspire people and they can get a group of people working together in harmony to complete a huge project. 
   
   Maybe they can see the bigger picture for a project and know when to make a judgment call. 
   
   So for this person considering their strengths and weaknesses maybe their best bet is to get their foot in the door at a company as a developer and then stay with that company and work their way up to a management or executive position. 
   
(68.16)   
- Now those are just two examples. There are billions of people on the planet. So there are billions of different types of people but the general idea is that we are all good at different things. 
   
   We all have unique gifts. 
   
(68.17)   
- And the trick is to aim your career so that you're in a position where you get to use your gifts on a daily basis 
   
   because if you try to progress in a career path that uses your strengths you will still be met with many challenges but because you are aligned with your natural gifts you will remain energized. 
   
   When we do something we're good at it makes us feel good. We feel like we are useful and like we're helping others. 
   
(68.18)   
- So the analogy here is when your career is aligned with your gifts it's like running on a flat surface. Running is still difficult and taxing but it's doable and it's rewarding. 
   
- On the other hand if you try to progress in a career path that ignores your strengths and overing gauges your weaknesses you will become burnt out and probably end up stagnating 

   when your career isn't aligned with your gifts. The person in the mirror knows that it's a waste of your gifts. 
   
   You're going to feel like you're not giving all that you can give and that's going to take its toll on you. 
   
(68.19)   
- So the analogy here is when your career isn't aligned with your natural strengths. It's like running uphill nonstop for 50 years. It's not sustainable. 
   
   So long story short get to know yourself. 
   
(68.20)   
- Let's move on to my final tip and this is a tip that will help you progress in your career. Whether that's through promotions at a job or seeing growth in a business you on that tip is to `follow these two rules.` `Limit your complaining` and `try not to dodge responsibility.` 
   
   Now I think you'd be surprised even if you aren't the best developer in the world. Just following these two rules will make people want to promote you or it will make people want to work with you. 
   
   Now I know these things sound cliche and are easier said than done. And unfortunately this isn't a personal development course it's a web development course so I can't give you effective ways to actually follow these rules 
   
   but I can tell you that these things are super important to career progression and that it's definitely worth your time to google how to improve in these areas. 
   
   All right that brings this video to an end. 
   
   And actually that brings this course to an end. 
   
   Thank you so much for coming on this journey with me. I hope you feel like you learned something. And don't be a stranger. Reach out to me in the course discussion area let me know how things are going. 
   
(68.21)   
- Anyways here's my final message for the course. 
   
(68.22)   
- Don't put your dreams or goals on hold while you quote learn even more. 
   
   There's always going to be something else to learn. And being a developer means learning on the fly as you go and not waiting for that perfect moment. 
   
   When you quote know enough and only then jumping in. 
   
   You already know what time you already have the skill set and knowledge to go out and make crazy things happen. 
   
   I guarantee you are underestimating your skills talents and knowledge. 
   
   So do not wait. Make something happen now. You are enough right now today. 
   
   So until the next time we meet in a course I wish you the very best of luck and take care. 
    -->
