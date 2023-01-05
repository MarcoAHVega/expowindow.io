--------------------------------------------
(1)
<!-- 
(13.3)
~ webpack
todo> from the terminal, install webpack and webpack-cli, (command lime interface), into your project:
   ^ 
   npm install webpack webpack-cli --save-dev
      

(13.5)
~ webpack.config.js file
* inside webpack.config.js we tell webpack what to do.
431 5840

(13.6)
~ webpack module.exports = {} object
~ webpack entry: point property
todo>  for now we just want to give webpack `an entry point` to our project.
   so inside webpack.config.js `we add`:
      
      ^
      module.exports = {
      entry: './app/assets/scripts/App.js'
      }

(13.7)
~ package.Jason file
~ npm script for webpack ("dev": "webpack",)
todo>  we need `create an npm script`, in the package.Jason file, so we can run webpack from the terminal
      - jump into our `package.Jason` file
      - looking for a property named `"scrips":`
      - within these scripts objects, at the top, add:

      ^
      "dev": "webpack",
      

(13.8) * //Skip//
~ dist folder vs app folder
~ main.js file vs App.js file
*so now if we run our new npm script on the terminal like this : $ `npm run dev`, 
   - webpack would `look in` our App.js file (entry point),
   - process it and bundle it, 
   - and would create a new `dist folder` with a new `main.js` file.

* but we want to control these inside our `webpack.config.js` file by adding an `output:`

(13.9)
~ webpack output: property
~ output path: property
todo> so we want our new js file to be called `bundled.js` and we want it to live `inside our app folder`, so inside webpack.config.js `we add` (path //1) (output //2): (add a comma after ../App.js')

^
const path = require('path')  //1

module.exports = {
   entry: './app/assets/scripts/App.js',
   output: {                //2
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app')
   },  
}


(13.10)
~ webpack mode: 'development' property
~ webpack watch: true property
todo> we also have to: set the mode to development: `mode: 'development'` (//3) - and `set the watch option to true` (//4) 

   ^
   const path = require('path')

   module.exports = {
      entry: './app/assets/scripts/App.js',
      output: {
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      mode: 'development',  //3  
      watch: true           //4   
   }
   
  

(13.11)
~ webpack outputs everything as javascript thru our bundled.js file
todo> now we need to jump into our `index.html` file and use the script tag `to link` it with  our bundled.js file:
   
   ^
      <script src="bundled.js"></script>
   </body>
   </html>
   

(13.12) run and stop 
todo> now we can have webpack to run our project using: 

^
npm run dev 

todo> open the index.html in the browser for testing by drag and dropping on the search bar

* you should see the alert from App.js and the test h1 from index.html 
   
   now because we told web pack to watch our files for us it's going to continue to run in the command line until we tell it to stop.

todo> So when we are ready for the webpack task `to stop watching us` in your command line you just press the `control + c `

-----------------------------------------------------------
# adding basic css support

(15.2) 
~ CSS With Webpack
   - we will use Webpack to set up an automated CSS workflow.

   - So tools like sass and less and stylists or PostCSS let us write CSS the way we wish we could   write it even though it won't work in a web browser. (autoprefixer for different browsers, variables for hex colors, nested CSS)

   - And then these tools pass our code through a filter that spits out a new file and in that new file it automatically converts our code into regular CSS That will work in Web browsers.

  *In order to get all of those neat CSS features that we just discussed we are not going to use SASS or less or stylus.*

~ We are going to use something called PostCSS

   - PostCSS is the trendy new kid on the block in the CSS World but it also has the objective benefit of being the fastest to compile out of all of the CSS pre and post processors.

~ Adding basic CSS support in 3 steps

* we actually want to load the styles.CSS file from within our main JavaScript file, so jump into our `App.js` file 

~ step 1 : import our styles.css file into our App.js file
   - webpack will manage all css and javascript from our App.js file.
   - Remember App.js is webpack's entry point
todo> so at the top, inside App.js let's add a brand new line of code:
   
   ^
   import '../styles/styles.css'
   
(15.3)
~ step 2 : install css-loader and style-loader to add CSS support to webpack
   
   ~ css-loader 
   will allow webpack to import and understand our styles.css file from within App.js file and add it to our bundled.js file

   ~ style-loader 
   will allow us to apply the css styles in the bundled.js file to the browser 

todo> to `add CSS support` to our Webpack setup we're going to install `two packages`:
   
   ^
   npm install css-loader style-loader --save-dev

(15.4)
~ step 3 : configure webpack to use  css-loader and style-loader

   ~ webpack module: and rules: properties
   - We can tell webpack what to do when it runs into certain files by adding a property named module and rules

   -the idea is that you can have multiple objects in this array where you tell Webpack to do something different depending on the file type.

   ~ test: property
   -We want to tell Webpack what it should do if we run into a CSS file using this regular expression (/\.css$/i,)

   ~ use: property
   -Now this is where we can leverage those packages that we just downloaded from NPM.
todo> Now that we've downloaded those two packages let's go leverage them
   - jump into your webpack.config.js` file
   - add a comma after the `watch: true`,
   - and add the `module:` property with `rules:`
   
   ^
   const path = require('path')

   module.exports = {
      entry: './app/assets/scripts/App.js',
      output: {                
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      mode: 'development',     
      watch: true,
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false']
            }
         ]
      }
    }

(16.1) Important Note
* `By default`, the css-loader will attempt to handle any images we reference in our CSS, for our usage in this course we want to `disable` this and we'll manage our image files `manually`.

   - With this in mind, when you list 'css-loader' in your webpack.config.js file you'll want to add an option to the end of it like this:
   
    ^
    css-loader?url=false 
    
   * already included in (16.4)


(15.5)
todo>  Now that we've confirmed that the bundled JavaScript files loading in the browser `let's go get rid of this annoying alert message`.
   - go within our App.js file and `delete the  test alert() line` 

------------------------------------------------------------------

Adding pastCSS support in 4 steps

*In order to get all of those neat CSS features that we just discussed we are not going to use SASS or less or stylus.*

~ We are going to use something called PostCSS


(15.6)
~ step 1 : install postcss-loader
todo> let's `download the post CSS loader` for webpack

   ^
   npm install postcss-loader --save-dev


(15.7)
~ step 2 : configure webpack to use postCSS

   ~ loader: property
   
   ~ postcssOptions: property

   ~ plugins: property

   ~ const postCSSPlugins = []

todo> Now let's go `Leverage that loader`.
   - jump back into our `webpack.config.js` file and add the following to` use:`
   ,{loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}

   - and up on top we need a const for the postcss plugins = [] we are gonna use:

   ^
   const path = require('path')

   const postCSSPlugins = []

   module.exports = {
      entry: './app/assets/scripts/App.js',
      output: {                
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      mode: 'development',     
      watch: true,
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {postcssOptions:{plugins: postCSSPlugins}}}]
            }
         ]
      }
   }
   -------------------------------
   ! sass
    const path = require('path')

   const postCSSPlugins = []

   module.exports = {
      entry: './app/assets/scripts/App.js',
      output: {                
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      mode: 'development',     
      watch: true,
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false', 'sass-loader', {loader: 'postcss-loader', options: {postcssOptions:{plugins: postCSSPlugins}}}]
            }
         ]
      }
   }  
(15.8)
~ step 3 : install the postCSS plugins
   - similar to npm, when you use postCSS you can choose the package or plugins that you want to install and use.

   - we are starting with these 3:

   ~ postcss-simple-vars

   ~ postcss-nested

   ~ autoprefixer

todo> before we list any plugins here. `Let's go download the plugins`

   ^
   npm install postcss-simple-vars postcss-nested autoprefixer --save-dev
--------------------
   ! sass
   npm install autoprefixer --save-dev

   
(15.9)
~ step 4 : require in the plugins in the webpack.config.js
todo> Now let's `list these packages within our array`.
   
   ^
   const postCSSPlugins = [
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('autoprefixer')
   ]
-------------------------    
  ! sass
  const postCSSPlugins = [
      require('autoprefixer')
   ]


----------------------------------------------------------------------------------
(15.9.1) *Adding Sass to the project* https://youtu.be/eddzBlXBl3Y
                                     https://youtu.be/SH6Y_MQzFVw

* install sass

  ! sass 
  npm install sass sass-loader

  * Now that we've downloaded those two packages
      - jump into your web `pack.config.js` file
      - change the test rule from `test: /\.css$/i,` to `test: /\.scss$/i,`,
      - and add the sass-loader
   ```js
      watch: true,
      module: {
         rules: [
            {
               test: /\.scss$/i,
               use: ['style-loader','css-loader', 'sass-loader']
            }
         ]
      }
    }
   ``` 

* rename `styles.css` to `styles.scss`

* make sure to update the name of the `.scss` file we are importing in our App.js file

```
import '../styles/styles.scss'
```

* test if sass is working by creating a variable inside `styles.scss`


```
$mainColor: orange;

body {
   color: $mainColor;
}
```
------------------------------------------------------------------------------
(15.10)
~ testing the postCSS features 
todo> now jump back into our `styles.CSS` file and let's `test out these postCSS` features:

   - Let's start with variable:
   - while we are at it, let's also test out our nested CSS:
   
   ^
   $mainRed: red;
   
   body {
      h1 {
         color: $mainRed 
      }
   }
   
   * Now this code is absolutely not valid CSS and the web browser will have no idea what this means. But because we have an automated workflow Now Webpack will create a file that the web browser does understand.

todo> in the command line let's tell web pack to begin running:
   ^
   npm run dev

todo> check and see for changes in the browser, (the h1 should be red), 

todo> and stop (Control + C)

~ CSS File architecture
   - if we think back to the key concepts of this lesson we remember that we wanted to pay attention to file architecture which means we don't want to just dump all of our CSS within one file

   ~ and this is actually where postCSS and imports come into play.

(17.13)
~ step 1 : install postcss-import
todo> we want(need) to install a post CSS package so lets type:
      
   ^
   npm install postcss-import --save-dev

(17.14)
~ step 2 : require in postcss-import in our webpack configuration   
todo> we then want to go leverage that package. So to do that we need to hop into our 
 - `webPark.config.Js` file 

   * Remember we created this array named 
   `const postCSSPlugins = []`

todo> right `at the beginning` of this first require line. Let's add a new line: 
   ^
   require('postcss-import'),


(17.16)  
~ step 3 : create a partial css file for global css rules
   - this is the first of all the partial css files we will create

todo> jump `back into our main styles.CSS` file. and lets  `move the testing rules into _global.css file

   todo> So go ahead and `copy these rules` to your clipboard and paste them inside _global.css
   ^
   $mainRed: red;
   
   body {
      h1 {
         color: $mainRed 
      }
   }
   
(17.16.2)
~ step 4 : we will import this and all the partial css files into our style.css file
todo> back in our main `style.css` sheet up on the very top line. Let's create an import:
   ^
   @import "base/_global";

(17.17)   
* We haven't used `normalized.css` yet but we did install it when we were first learning how to use NPM  

~ import normalize.css
todo> within our main `style.css` sheet. We can just say 
   ^
   @import "normalize.css";
   @import "base/_global";
   

(19.14)
   todo> let's `create a brand new file` in these styles `base` folder that has the single responsibility of `holding our variables`.
   ...base/_variables.css   

   
(19.15)   
todo> Let's be sure to go into our `main CSS file` and `import in that new variables file` that we just created.
   ^
   @import "normalize.css";
^  @import "base/_variables";
   @import "base/_global";

todo> let's just go ahead and `cut` this line (in _global.css) where we defined the $mainRed: red, variable and let's `paste` it into the new `_variables.css` file.

--------------------------------------

~ Webpack Dev Server And JS hot reload

(20.1)
~ step 1 : install webpack-dev-server
* to have css and js hot reload  
todo> now let me show you how to begin using it. (`Webpack dev server`.)
^   
npm install webpack-dev-server --save-dev


(20.1.1)
~ step 2 : add the devServer: property to our webpack configuration

   ~ contentBase: property 
      -for the path

   ~ hot: true property
      - hot: is what's going to allow Webpack to inject our new CSS and JavaScript into the browser's memory on the fly without even needing a reload or refresh.

   ~ port: 3000 property
      - port: This would have a value of 8080 by default but we're setting it to 3000 just because I think it's a bit easier to remember.

todo> Now that we've installed the package `we need to leverage it`. 

   todo> go into our `webpack.config,js` file

   todo> We want to add a new property: devServer: {} in module.export 

   * this is where we `point towards the folder or directory that we want webpack to serve up`. 

   todo>  we no longer need this watch property. So I would just `delete this entire watch: true line`
   
   ^
   module.exports = {
      entry: './app/assets/scripts/App.js',
      output: {                
         filename: 'bundled.js',
         path: path.resolve(__dirname, 'app')
      },
      devServer: {  
         contentBase: path.join(__dirname, 'app'),
         hot: true,
         port: 3000
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


   (20.1.2)
   ~ step 3 : edit the "dev": script in the package.Jason File
   todo> jump into our `package.Jason` File

   todo> within package.Jason  find the 
      scripts area.

   todo> we have this NPM script named 
      "dev":

   * we just want to change what it actually runs. 
   todo> So instead of calling Webpack we want it to call `webpack serve`
      ^
         {
      "name": "travel-site",
      "version": "1.0.0",
      "scripts": {
   ^     "dev": "webpack serve",
         "test": "echo \"Error: no test specified\" && exit 1"
      },
   

   (20.1.3)
   ~ step 4 : 
   todo> we need to go into our main JavaScript file (`App.js`) and tell it to accept hot module replacements:
   ^
   import '../styles/styles.css'

   if (module.hot) {
      module.hot.accept()
   }
   

(20.1.4)
~ step 5 : 
   * now `we can test everything` out:
   ^
   npm run dev
   
   todo> And now to check things out in the web browser we do `need to visit a different U.R.L.` :
   - localhost:3000

(20.2)   
* let's test things out to `make sure` `webpack ` can actually `update our code without a full page reload`.

   todo> So go ahead and select a bit of text on the browser

   todo> go into our `_global.CSS file` and change the h1 color to blue

   * Now as soon as we hit save. Back in the browser we don't need to refresh and you can see the web browser itself didn't even refresh because `our text selection is still in place`.


(20.4)
~ step 6 :  
* item number two is to `set things up` so that whenever we save a change to our `HTML file` the browser reloads on its own
   
   todo> jump back into our `webpack.config.js` file go ahead and find your `devServer: {}` object within it.

   todo> add one more property `inside` devServer{} named `before:`

   todo> and we're actually going to give it a `function`.
   
   ^
      devServer: {
       before: function(app, server) {
            server._watch('./app/**/*.html')
      },  
      contentBase: path.join(__dirname, 'app'),
      hot: true,
      port: 3000
   },
   
   * tells it to watch for any file that `ends with .html` 
  

(20.6)
~ step 7 :   
* our third and final task. We want to be able to `view our website on any device connected to our Wi-Fi` or our network 
   
   * this way. It's really `simple to test our website on a small screen` like a smartphone or tablet.

   ~ host: '0.0.0.0' property
   todo> jump into our `webpack.config.js` file

   todo> within our `devServer:` object maybe right `below the port line` lets `add a comma` at that line `add a new line` and we just need to give it a property of `host: '0.0.0.0`'

   ^
   const path = require('path')

   const postCSSPlugins = [
      require('postcss-import'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('autoprefixer')
   ]

   module.exports = {
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
      watch: true,
      module: {
         rules: [
            {
               test: /\.css$/i,
               use: ['style-loader','css-loader?url=false' ,{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
         ]
      }
   }

   (20.6.1)
   todo> And then since we have a new Webpack configuration let's `restart the web pack task`.
   ^
   npm run dev`
 
   ~ step 8 : 
   * we need to find the `local IP address` of the computer you're working on. 

   * if you're on Mac just go into your `system preferences` and then click on the `network` icon and then towards the top of the right hand column you should see a bit of text and it will say which `network` you're on and it will also include an IP address that's your local IP.

   * If you're on Windows to find your local IP address go to the command line and run the following command $ `ipconfig` Press enter the command line will output a bunch of text you're looking for the one that's called `IPv4 address` to the right of that you'll see an IP and again it should begin with `1 9 2 1 6 8` and then a number separated by a period and another number.
   
   ~ step 9 : 
   todo> on your smartphone `type that IP address number` that we just found into the address bar and at the end of it add `in 192.168.1.80:3000` 


(21.7)   
~ install postcss-mixins
   - working with media queries

* I want to show you a quick postCSS tip that `will make working with media queries much easier`. I want us to leverage the power of `mixins`.

   * The first thing we want to do is `configure our postCSS setup to support mixins`.

   ~ step 1 :
   todo> let's jump to the command line and `install a new package from NPM`.
   ^
   npm install postcss-mixins --save-dev

   ~ step 2 : 
   todo> now `to actually leverage that package` we just need to jump into our `webpack.config.js` file

     * We created this array named `postCSSPlugins = []` 

   todo> right after `'postcss-import'` Let's just `add a new line` and let's require in:
         ^
         const postCSSPlugins = [
            require('postcss-import'),
      ^     require('postcss-mixins'), 
            require('postcss-simple-vars'),
            require('postcss-nested'),
            require('autoprefixer')
         ]
         
   (21.8)
   ~ step 3 :
   todo> in our app/assets/styles/base folder let's create a new file and let's name this file underscore `_mixins.css`

   ~ step 4 :
   todo> add mixins in _mixins.css

   (21.8)
   ~ creating  mixins for media queries
   * let's `create a new mixin` that will make `working with media queries` throughout our entire Web site much easier.          

   * a Mixin is really just `a reusable bit of code` so we don't want to store the mix in itself in this _large-hero block file instead... 
   example:
   ^
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
      @media (min-width: 1010px) {
         @mixin-content;
      }   
   } 

   @define-mixin clearfix {
      &::after {
         content: "";
         clear: both;
         display: table;
      }
   }
-------------------
   ! sass
   @mixin atSmall {
       @media (min-width: 530px) {
          @content;
       }
    }

    @mixin atMedium {
       @media (min-width: 800px) {
          @content;
       }
    }

    @mixin atLarge {
       @media (min-width: 1010px) {
          @content;
       }   
    } 

    @mixin clearfix {
       &::after {
          content: "";
          clear: both;
          display: table;
       }
    }
    -----------
   ~ step 5 :
   todo> we need to open` our main `styles.css`Now right after this `_variables` line let's create a new line and go ahead and import that _mixins file that we just created. 
         ^
         @import "normalize.css";
         @import "base/_global";
         @import "base/_variables";
   ^     @import "base/_mixins";
         
   todo> And now we can start Webpack up again.
      ^
      npm dev run

? Project BoilerPate ends here
-------------------------------------------------------




todo> go to 4 ProjectContent.md
 
-----------------------------------------------
-->
(2)