<!-- 
### Section 7 Mobile-first Essentials 

21. **What does "Mobile-first" Mean?**

(21.1)   
* `Here's what we will cover`.

   * first I want to explain how the phrase `mobile first can mean different things when it's used in different contexts`. 

   * After that I want to talk about `how we can apply the mobile first philosophy` to our travel Web site.

   * And finally you and I will work together to `begin writing CSS the mobile first way`. 

(21.2)   
* what is `responsive web design` and what are the shortcomings with `traditional Responsive Web Design`.

   * when Responsive Web Design first began we would `build the desktop or the most advanced view of the site first` and then `adapt the layout to fit smaller and smaller screens` as necessary.

   * eventually `two big factors` made the web design community `reverse this` and begin building in the opposite direction. 

      * now significantly `more traffic comes from mobile devices` than traditional desktops or laptops.

         * You should design and build `with it in mind` from the `beginning`.

      * Factor number two is that we eventually realized that `traditional desktop first responsive design resulted in bloated slow loading Web sites`

         * The key concept behind factor number two is that `we don't want anyone to have to download extra data that they won't even use`. 
         * We want to build efficient Web sites that `load as quickly as possible` for everyone. 

   * The idea behind mobile first is that `we begin with the most essential view` of our site `and we progressively enhance the layout and the assets only when necessary` for larger and more advanced devices.

(21.3)   
* Now let's talk about `the different context` that the phrase can be used in.
* So there's the `design context` and the `development context`.

   * So when we think of `mobile first design` this refers to actually designing around a `smaller screen first`.

      * This can be a good idea because smaller screens `force us to really prioritize` what we want to showcase.

      * So when we think of `who is involved in mobile first design` it's the information architects it's the graphic designers and it's the usability experts.

   * When we hear about `mobile first development` this refers to `coding this site` in such a way that devices won't download `unnecessary data`.

      * It means that `as a developer we treat the most essential view of our Web site as our baseline` And we code upwards from there

      * as a mobile first developer it's our job to make `the site load quickly for everyone`.

(21.4)   
* in the real world a fair amount of the projects you work on `will not include a design comp for the mobile view`.

   * Even if you were only given a desktop design comp `there is no reason to not make every Web site you develop a mobile first Web site`.

(21.5)   
* When it comes to mobile first best practices `there are things we can do in each of the Big Three languages` HTML CSS and JavaScript. 
   
(21.6)  using media queries 
* We are going to `begin with CSS`. 

   * let's make sure that our `webpack task is up and running`. 
   
      $ `npm dev run`

   * if I begin to make my `browser window smaller` to resemble the form factor of a smartphone 
   
   * I think it becomes immediately clear that the large hero text is too large for a smartphone. So `let's adjust our CSS to fix that`.

   * let's open up the `_large-hero.css` file. 

   * Let's address the `top main title` first.
      ...
      &__title {
         font-weight: 300;
         color: $mainBlue;
         `font-size: 4.8rem;`
         margin: 0;
      }
      ...
   * So `we might be tempted` to leave this font size declaration in place (`font-size: 4.8rem;`) and write a new media query that targets smaller screens. `But`...
      
   * remember in the mobile first philosophy `we want to treat the mobile view as our baseline` and modify things from there as necessary.

   * So `to approach this from a mobile first perspective` let's go ahead and cut this line into our clipboard (`font-size: 4.8rem;`)...

   * and say that `the baseline style` for this element should have a font size of 1.1rem (`font-size: 1.1rem;`) and `we can modify things from here`For larger screens 
      ...
      &__title {
         font-weight: 300;
         color: $mainBlue;
         margin: 0;
         `font-size: 1.1rem;`
      }
      ...
   
   * so `we can use a media query`:
      ...
      &__title {
         font-weight: 300;
         color: $mainBlue;
         margin: 0;
         font-size: 1.1rem;

         <!-- @media (min-width: 530px) {
         font-size: 4.8rem;
         } -->
      }
      ...

(21.7)   install mixins 
* I want to show you a quick postCSS tip that `will make working with media queries much easier`. 
* I want us to leverage the power of `mixins`.

   * The first thing we want to do is `configure our postCSS setup to support mixins`.

   * let's jump to the command line and `install a new package from NPM`.

      $ `npm install postcss-mixins --save-dev`

   * now `to actually leverage that package` we just need to jump into our `webpack.config.js` file

      * We created this array named `postCSSPlugins = []` 

      * right after `'postcss-import'` Let's just `add a new line` and let's require in:
         ...
         const postCSSPlugins = [
            require('postcss-import'),
            `require('postcss-mixins'),`
            require('postcss-simple-vars'),
            require('postcss-nested'),
            require('autoprefixer')
         ]
         ... 
      * And now we can start Webpack up again.

         $ `npm dev run`

(21.8)creating  mixins for media queries
* let's `create a new mixin` that will make `working with media queries` throughout our entire Web site much easier.          

   * a Mixin is really just `a reusable bit of code` so we don't want to store the mix in itself in this _large-hero block file instead... 
   
   * in our app/assets/styles/`base folder` let's create a new file and let's name this file underscore `_mixins.css` 
   
   * Let's create a mixin that passes styles along `only to screens that are larger than what we typically consider a smartphone size`. `530 pixels or larger`
   ...
      @define-mixin atSmall {
         @media (min-width: 530px) {
         @mixin-content;
      }
   }


   And `before we can use this mixin` in our _large-hero block file `we need to open` our main style sheet which lives in our styles folder and its named `styles.css`

   * Now right after this `_variables` line let's create a new line and go ahead and import that Mixin file that we just created. 
   ... 
   @import "normalize.css";
   @import "base/_global";
   @import "base/_variables";
   `@import "base/_mixins";`
   @import "modules/_large-hero";
   @import "modules/_btn";

   * `now we can access` the mixin from any of our files. 
   
   * So here we are in the `_large-hero CSS` file. Let's `delete this media query` and try using our mixin instead.
   ...
   // @media (min-width: 530px) {  //delete
      //    font-size: 4.8rem;
      // }

      @mixin atSmall {
         font-size: 4.8rem;
      } 

   * so now Let's try adjusting this subtitle. (`&__subtitle`)
   ...
      &__subtitle {
         font-weight: 300;
         color: $mainBlue;
         font-size: 2.9rem;
         margin: 0;
      } 

   * So let's adjust this `font-size`. Let's copy (cut) this to our clipboard and say that the baseline font-size should `only 1.1REM`
   ...
   &__subtitle {
      font-weight: 300;
      color: $mainBlue;
      `font-size: 1.1rem;`
      margin: 0;
   }  

   * all we need to remember is at `@mixin atSmall {}`, and then paste in that font size that we had just a moment ago. 
   ...
      &__subtitle {
         font-weight: 300;
         color: $mainBlue;
         font-size: 1.1rem;
         margin: 0;

         @mixin atSmall {
            font-size: 2.9rem;
         }
      } 

   * in our `mixins.css` file `let's create another mixin` Except `atMedium` we'll have a min width of `800` pixels.
   ...
   @define-mixin atMedium {
      @media (min-width: `800`px) {
      @mixin-content;

   } 

   * And while we're at it why don't we create `a third mixin`. `atLarge`
   ...  
      @define-mixin atLarge {
         @media (min-width: 1200px) {
            @mixin-content;
         }     
      }

   * let's try using all three mixins on this top. `Your clarity` heading
   ...
   &__title {
      font-weight: 300;
      color: $mainBlue;
      margin: 0;
      font-size: 1.1rem;

      @mixin atSmall {
         font-size: 2rem;
      }

      @mixin atMedium {
         font-size: 3.2rem;
      }

      @mixin atLarge {
         font-size: 4.8rem;
      }

   }

(21.9)   
* So this is the `mobile first CSS pattern` that `we are going to follow` throughout the remainder of the course. 
   
   * We begin with the baseline styles that we want all screens to receive including super super tiny screens 
   
   * and we modify things for larger and larger screens progressively 
 -->