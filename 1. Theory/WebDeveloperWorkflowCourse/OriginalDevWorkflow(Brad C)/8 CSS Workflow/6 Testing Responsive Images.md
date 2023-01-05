<!-- 
& 6 Testing Responsive Images.md 
? (23.1) `-i` copies of each image for you so you can clearly see when an image is being used.
? (23.2) The next tip that I will cover has to do with the topic of `simulating and testing different pixel densities`.   

----------------------------------------------- 
23. **Tips for Testing Responsive Images**

? (23.1) `-i` copies of each image for you so you can clearly see when an image is being used.
* for the first tip let's use the large hero image as an example.
- if you resize your browser window very slowly it's not too difficult to see when the image snaps and switches to a new image `but other times it's not so clear`.

   - I created these `-i` copies of each image for you so you can clearly see when an image is being used.

   - the `-i` version of the image file has `a transparent black overlay` and `in white text we see the dimensions of the image`. (`1920 X 654`)

   - So now when we resize our browser we see those numbers change. So `it is abundantly clear when the two images are swapping back and forth`.

   - I've created `-i` versions of every image we are going to use.

? (23.2) The next tip that I will cover has to do with the topic of `simulating and testing different pixel densities`.   


   - as a developer I want to `be able to test all of the images` 
   
   - I want to see The `-hi-dpi` version in action to make sure that I didn't include a typo in its filename.

   - How can I see that `-hi-dpi` image in my browser If the actual monitor I'm using isn't `hight DPI` 
   
   - or your situation might be the opposite `If your screen is hight DPI` then you would want to `be able to test this image` to make sure that you didn't include a typo in the file name. 

   - the `Google Chrome` web browser has a developer tool that can help us.

   - We can right click and choose inspect that will open a developer tools window and now I want you to click this icon. The icon that looks like a couple of devices.

   - in this situation what we want to do is set it to responsive.

   - our goal is to simulate different pixel densities.

   - So to do that you might need to click these three dots in the top right corner and be sure to check the show device pixel ratio option so once that option is checked we now see this option.

   - jump to my html and make sure that both versions of this large crop are using the -i version so we can easily distinguish between the two. 

   - Let's go ahead and simulate a device that has a higher pixel density. 

 -->