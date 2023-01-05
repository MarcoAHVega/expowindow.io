<!-- 
& 10 hero Block (part2).md
? (24.7) the only thing we're missing is `this blue bar` that runs along the bottom. 
? (24.8) let's `switch the image to be a block level element` so we can get rid of the gap. 

-----------------------------------------------------------------------
? (24.7) the only thing we're missing is `this blue bar` that runs along the bottom. 

   - within this main `_large-hero` rule, lets `add  a new line`
   ...
   .large-hero {

      position: relative;
   ...
   
   - and we can create this bar by using `the border property`.
   ...
   .large-hero {
      `border-bottom: 10px solid $mainBlue;`
      position: relative;
   ...

   - the blue bar was added but there's this tiny `white gap` in between the image and the blue bar.

      - The reason this gap exists is because our image element is an in line level element `instead of a block level element.`


? (24.8) let's `switch the image to be a block level element` so we can get rid of the gap. 

   - So in our css for the _large block `we don't currently have a rule that targets the image file`. 
   
   - So in our html let's scroll up a bit here is the picture element and `we want to add a class on this image` element that it contains so that we can select it with css.
   ...
   `<img srcset="assets/images/hero--smaller.jpg 640w , assets/images/hero--large-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains">`
   ... 

   - So let's give it a class of `large-hero` because that is the block that it belongs to. 
   
   - And using the Bem system to signify that this is an element we use to underscores and let's name this element `__image`.
   ...
   `<img srcset="assets/images/hero--smaller.jpg 640w , assets/images/hero--large-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains" `class="large-hero__image"`>`
   ... 

   - Now back `in our CSS file` we can select the image `by creating a new rule`. And let's just tell it to be a block level element.

   - by declaring that the image should be a block level element we are telling the web browser that it should treat the image almost as a div right so it treats it as a rectangle that can align perfectly without worrying about leaving any room for bottom parts of letters.
 -->