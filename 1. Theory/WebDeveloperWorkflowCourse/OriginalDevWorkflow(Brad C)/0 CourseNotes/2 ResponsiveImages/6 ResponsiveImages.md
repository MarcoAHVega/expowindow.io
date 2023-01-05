<!--
~ 22 Responsive Images

(22.2)
* Number one `what is a responsive image and why do we need it`

   - this image file is `well suited for a desktop monitor` or a large laptop.

   - But `if we view this same IMAGE` on a `smartphone` form factor I immediately see `two big problems.`

      ? Number one is that we are `forcing smartphone users to download way more data than is necessary` for them to see a crisp photo of the dog.

      ? The second big problem is simply the `way that the image is cropped right`.

         - this cropping and aspect ratio works wonderfully on a large wide screen but on a smaller screen `it just feels kind of scrunched up I think on smaller screens` the image would look better if it was closer to a square.

   * the problem is that `this traditional image element is forcing us to send one single image file to every user and device` under the sun.

      ? Instead `what we need is a way to send different image files to different screen sizes`

      ? and `that is exactly what responsive images` do.

(22.3)
~ there are `two distinct reasons` to use a `responsive image in` the first place.

    & (1) The art `direction` and `cropping` situation.

   ~ Step 1
   todo> when you want to send different images to different users because of art direction or cropping reasons `you use the picture element`.
      ^
      <picture>

      </picture>
   
      todo> within the picture element we want to begin `with a traditional image element`.
      ^
      <picture>
         <img>
      </picture>

      todo> and we want to `begin with the smallest image`.
      ^
      <picture>
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>
   
      * So that image will `be used for all devices`.

   ~ step 2
   todo> within this picture element `we can create another element named source`.
      ^
      <picture>
         <source>
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>
      
      todo> And within this source element we can `create a media query`.
      ^
      <picture>
         <source media="">
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>
      
      todo> So let's create a media query that targets `any screens that are 760 pixels or larger`
      ^
      <picture>
         <source media="(min-width:760px)">
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>
      
      todo> within the source element we can just use a new attribute named `source set and point towards the medium image`.
      ^
      <picture>
         <source srcset="images/dog-crop-medium.ipg" media="(min-width:760px)">
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>

   ~ step 3   
   todo> Let's go ahead and `set up our large image` , to do that We can just `create another source element`.
      ^
      <picture>
         <source srcset="images/dog-crop-large.ipg" media="(min-width:1200px)">
         <source srcset="images/dog-crop-medium.ipg" media="(min-width:760px)">
         <img src="images/dog-crop-small.jpg" alt="Puppy in the sand" >
      </picture>
      
      ? All right. So when you need to use a responsive image `for Art Direction reasons` you `use the picture element`.

& (2) the `image resolution and file size` situation.

   *`In this example we love the way that the image is cropped. `We want it to be cropped like this for every screen size`.

   ~ step 1
   todo> we can begin with a traditional `image element` and all we need to do is create a `smorgasbord` of image file options for the web browser and device to choose from.
      ^
      <img srcset="image/dog-resolution-small.jpg,image/dog-resolution-medium.jpg,image/dog-resolution-large.jpg">
      
      * So in this situation we are taking `a very hands off approach`.

      * `browsers and devices` are intelligent enough to `choose the smallest image file that will still result in a crisp picture`.

      ? we don't want the web browser to have to `download all three images`

   ~ step 2
   todo> So what we need to do is tell the browser `the size of each image` so it knows which one to use.

      todo> So for example after we list the small image before the comma we just include a space and then we say " 570w"

      todo>for the medium " 1200w" and fot the large " 1920w"
      ^
      <img srcset="image/dog-resolution-small.jpg 570w,image/dog-resolution-medium.jpg 1200w,image/dog-resolution-large.jpg 1920w">

   ~ step 3   
   todo> let's `add a quick alter value`
      ^
      <img srcset="image/dog-resolution-small.jpg 570w,image/dog-resolution-medium.jpg 1200w,image/dog-resolution-large.jpg 1920w" alt="Puppy in the sand">
---------------------------------------------------------------------------
(22.4)
* If you visit the site starting from a large screen and then resize the screen to the smallest, you will notice the the browser never shows the smaller images.
 
? Chrome is intelligent enough to know that if an image was sharp enough for a large window it's obviously sharp enough for a small window and `there's no sense in burning through extra data to download those smaller images`.  

   & how can I make sure that my small image is set up correctly. 
      
   todo> You can do a few things`

      * you can `clear your browsers cache` and not visit this page until you've already made the browser window small 

      *  or you can `open up a new incognito window` and visit the page and the larger image will no longer be in the browser's cache so it will download the smartest image choice for this window size which is obviously the small image.  
---------------------------------------------------------------------------

(22.7)
~ the hero image
&  we can also `combine` the `image resolution` and `file size` situation into `this responsive image as an example`.

      ~ step 1 
      todo> start by set up the image, with different cropping and dimensions according to the design, in a <picture> element    
         ^
         <picture>
            <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg">
            <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg">
            <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
            <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
         </picture>

         * for example when my browser window is quite large like this, this image file is 1920pixels wide.

         * what if I was using a 4K monitor or even a 5K monitor.

         * In that case we would want to send an even larger image that is using this exact same cropping ratio.

         * if you look in the project's image folder you will notice that that larger higher resolution copy of each image already exists.
            hero--large-hi-dpi.jpg
         * (exact same cropping ratio but this one is `double the size`)

   ~ step 2
   todo> So within our code, within the source element for the large image, within the srcset attribute, `we can simply provide another image `

      todo> and then remember `we want to tell the browser the size of each of these images` so it knows which one to use.
      ^
      <picture>
         <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w ">
         <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg">
         <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
         <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
      </picture>


      todo> Let's go ahead and add in the high DPI versions for the `medium` `small` and `smaller` crops.

   ~ step 3
   todo> for the smaller crop (in the <img> tag) we want to change this attribute `from src to srcset `

   ```html
   <picture>
      <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w ">
      <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w">
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg 990w, assets/images/hero--large-hi-dpi.jpg 1980w">
      <img srcset="assets/images/hero--smaller.jpg 640w , assets/images/hero--large-hi-dpi.jpg 1280w" alt="Costal view of ocean and mountains">
   </picture>
   ```

   * So now we have a `responsive image` that `sends different crops` to different screen sizes and at each unique crop it can send `a high DPI version if necessary`


~ 23. Tips for Testing Responsive Images

(23.1)
todo> for the first tip let's use the large hero image as an example.
   ? if you resize your browser window very slowly it's not too difficult to see when the image snaps and switches to a new image `but other times it's not so clear`.

   & I created these `-i` copies of each image for you so you can clearly see when an image is being used.

   * the `-i` version of the image file has `a transparent black overlay` and `in white text we see the dimensions of the image`. (`1920 X 654`)

   * So now when we resize our browser we see those numbers change. So `it is abundantly clear when the two images are swapping back and forth`.

   *  I've created `-i` versions of every image we are going to use.

(23.2)
todo> The next tip that I will cover has to do with the topic of `simulating and testing different pixel densities`.

   ? as a developer I want to `be able to test all of the images`

   ? I want to see The `-hi-dpi` version in action to make sure that I didn't include a typo in its filename.

   & How can I see that `-hi-dpi` image in my browser If the actual monitor I'm using isn't `hight DPI`

   & or your situation might be the opposite `If your screen is hight DPI` then you would want to `be able to test this image` to make sure that you didn't include a typo in the file name.

   * the `Google Chrome` web browser has a developer tool that can help us.

   todo> We can right click and choose inspect that will open a developer tools window and now I want you to click this icon. The icon that looks like a couple of devices.

   Todo> in this situation what we want to do is set it to responsive.

   ?  our goal is to simulate different pixel densities.

   - So to do that you might need to click these three dots in the top right corner and be sure to check the show device pixel ratio option so once that option is checked we now see this option.

   - jump to my html and make sure that both versions of this large crop are using the -i version so we can easily distinguish between the two.

   - Let's go ahead and simulate a device that has a higher pixel density.
--------------------------------------------------------------------------
& Responsive Images Workflow and Templates From the Travel-site

~ 1 Hero Image
This is a full width image with 4 different crops, and 2 different definitions each
(22.6)   
todo>  making `the image in this large hero block` responsive. 

   * if we make our browser `window smaller` we see that the way this image is cropped is problematic `for smaller screen sizes`.
~ step 1 
todo> here is the `image element that we want to replace`.
   ^
   <img src="assets/images/hero--large.jpg">

   * if we look within the `image folder for the project` you will notice that there is another file named `hero--medium` `hero--small` and even `hero--smaller` And all of these images are `cropped differently`.
~ step 2
todo> let's go ahead and delete this traditional image element and `replace it with the picture element`

   todo> within the `picture element` we want to create a traditional `image element` and we always want to begin with the `smallest image first`.
   ^
   <picture>
       <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>

   todo> So within this picture element we just `create a new source element` and let's `set up a media query`.  
   
   ```html
   <picture>
      <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
      <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>
   ```
   - So now we want to `do the same thing for the medium and large image`.

   ```html
   <picture>
       <source media="(min-width: 1380px)" srcset="assets/images/hero--large.jpg">
       <source media="(min-width: 990px)" srcset="assets/images/hero--medium.jpg">
       <source media="(min-width: 640px)" srcset="assets/images/hero--small.jpg">
       <img src="assets/images/hero--smaller.jpg" alt="Costal view of ocean and mountains">
    </picture>
   ```

(22.7)   
* we can also `combine` the `image resolution` and `file size` situation into `this responsive image`.


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

* So now we have a `responsive image` that `sends different crops` to different screen sizes and at each unique crop it can send `a high CPI version if necessary`  
-------------------------------------------------------------------------
& 2 first-trip image (couple walking)
this is a landscape image with 3 deferent resolutions all same crop and always center

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
------------------------------------------------------------------------
& 3 our-start image (Our founder, Jane Doe)
this is an image that sits on the wright column on desktop viewport and then on one center column
with 3 different crops and 2 resolutions each

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
--------------------------------------------------------------------------------
& 4 testimonial background image


* (32.2) (styling the testimonial section)
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
---------------------------------------------------------------------------------------------
& 5 testimonial avatar images

*`our testimonial section is now complete for every screen size. Good job`. 
      

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
      
---------------------------------------------------------------------------------------
   -->
