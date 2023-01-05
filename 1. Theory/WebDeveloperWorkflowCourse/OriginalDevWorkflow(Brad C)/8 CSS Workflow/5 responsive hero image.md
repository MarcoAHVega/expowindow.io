<!-- 
& responsive hero image.md
? (22.6) making the image in this large hero block responsive. 
? (22.7) we can also combine the image resolution and file size situation into this responsive image.
?(22.7.1) So now we have a `responsive image` that `sends different crops` to different screen sizes and at each unique crop it can send `a high CPI version if necessary` 
------------------------------------------------------------

? (22.6) making the image in this large hero block responsive. 

   - if we make our browser `window smaller` we see that the way this image is cropped is problematic `for smaller screen sizes`.

   - within the app folder open up the `index.html` file.

   * here is the `image element that we want to replace`.

   <img src="assets/images/hero--large.jpg">

   - if we look within the `image folder for the project`.

   - you will notice that there is another file named `hero--medium` `hero--small` and even `hero--smaller`. 
   -And all of these images are `cropped differently`.

   ? let's go ahead and delete this traditional image element and `replace it with the picture element`

   
   * within the `picture element` we want to create a traditional `image element` and we always want to begin with the `smallest image first`.
   ...
   <picture>
       <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>
   ```
  * So within this picture element we just `create a new source element` and let's `set up a media query`.  
   
   ```html
   <picture>
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
      <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>
   ```
   * So now we want to `do the same thing for the medium and large image`.

   ```html
   <picture>
       <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg">
       <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg">
       <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
       <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>
   ```

? (22.7) we can also combine the image resolution and file size situation into this responsive image.


   - for example when my browser window is quite large like this this image file is 1920pixels wide.

   - what if I was using a four K monitor or even a five K monitor. 

   - In that case we would want to send an even larger image that is using this exact same cropping ratio.

   - if you look in the project's image folder you will notice that that larger higher resolution copy of each image already exists. 

   - if you look in the project's image folder you will notice that that larger higher resolution copy of each image already exists. 
   `hero--large-hi-dpi.jpg`
   (exact same cropping ratio but this one is `double the size`)

   - So within our code within the source element for the large image within the source set attribute `we can simply provide another image `

   - and then remember `we want to tell the browser the size of each of these images` so it knows which one to use.

   ```html
   <picture>
         <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w ">
         <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg">
         <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
         <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
      </picture>
   ```
   - Let's go ahead and add in the high DPI versions for the `medium` `small` and `smaller` crops. 

   - for the smallest crop we want to change this attribute `from source to source set `

   ```html
   <picture>
      <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w ">
      <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w">
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg 990w, assets/images/hero--large-hi-dpi.jpg 1980w">
      <img srcset="assets/images/hero--smaller.jpg 640w , assets/images/hero--large-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains">
   </picture>
   ```

?(22.7.1) So now we have a `responsive image` that `sends different crops` to different screen sizes and at each unique crop it can send `a high CPI version if necessary` 
 -->