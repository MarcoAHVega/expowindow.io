# 217. Module Introduction

1. > you're going to learn...

   - => you're going to learn `what exactly JavaScript is` and `why you might wanna use it` or `why you might need it` on certain websites or for certain projects.

   - => We are going to `explore its core syntax`, `its core feature set` and `how we write JavaScript code`.

   - => And of course, as we do it in the entire course, `there will be plenty of examples and demos`. And we are going to learn `all about JavaScript step-by-step` with practical examples.

# 218. What is JavaScript & Why would we use it?

1. > What is JavaScript?

   - => it is `the third language of those three main languages`, which you have to know as a web developer.

   - => we have Javascript for actually `changing the page, After it was loaded for adding interactivity` to page you're currently viewing.

2. > Why would we use it?

   - => There are `many possible use cases and applications`, and examples for JavaScript.

   - => You could, for example, use JavaScript to fetch some data behind the scenes, without fetching a brand new HTML page from a server, to update some data, which has occurred, visible on the screen.

   - => You could use it for reordering or hiding and showing, or removing elements, which are on the screen.

   - => you could also leverage Java scripts to keep, parts of your websites, or maybe even your entire websites up and running to a certain extent, even if the internet connection is lost,

# 219. What You Will Learn In this Module

1. - core syntax and features

   - => let's understand which `core syntax and features` we have to know in order to work with it.

   - => `Syntax` simply is a term which we developers use to describe the rules you have to follow when writing code in a certain programming language.

   - => Now, when it comes to the `core features` you have to know, we're going to learn about them step by step

   - => And we are going to start with `values and variables`,

   - => We are going to have a look at `arrays and objects`,

   - => We are going to learn about `functions`,

   - => We are going to learn about `working with the DOM`,

   - => And we are also going to dive into `control structures`

# 220. Introducing Values & Variables

1. - => `strings values`

   - => And therefore, working with text or strings as it's called in programming, is very common. And that's a typical value we work with in JavaScript.

   - => And String Values are one key value type we work with all the time in programming.

2. - => `Number values`

   - => But another key value type would, for example, be `numbers`.

   - => And numbers are another key value type we work with when we write code.

3. - => `variables`

   - => Now, when we work with values, we typically do that in the context of variables, though.

   - => A variable is basically a box, a container. You could say variables are labeled data containers.

   - => But the idea is important that `you have values, which you want to store in some data container so that you can use them later`. Maybe, also multiple times in different calculations.

   - => It's a little bit like putting an item into a box, let's say your tax documents, you put them into a box and you put a label on to that box that says tax documents.

# 221. Adding the "script" HTML Element _- => START PRACTICE_

1. add a special script HTML element (the script tag)

   - create a new index HTML file

     - => Now to see this all in action. I'm again, back in an empty project folder,

     1. in this empty folder, which I did open in visual studio code here, I will `create a new index HTML file`.

     2. And in this index HTML file, I will `create a brand new HTML skeleton` by entering an exclamation mark, and then in this auto overlay, which I get here, I hit tab to automatically create this skeleton.

     3. And here I'll `just give this a title of "JavaScript introduction".`

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>JavaScript Introduction</title>
       </head>
       <body> </body>
     </html>
     ```

     > And now for the moment, we actually won't add any meaningful HTML content.

     > Instead

   - => for the moment, I just want to start with some JavaScript code and `how we can include it in our HTML file`.

     > And that's actually the first thing I want to do.

     > How can we now add JavaScript code to this project here to this HTML page?

     - => Now there are different ways of doing it, but the most straight forward and easiest way of adding JavaScript to HTML file is to `add a special script HTML element`,

     > opening and closing, you need both tags. This is not a self-closing tag,

     > and it's not a self-closing tag because there is content which you can put between those tags

     > and that content would be the actual JavaScript code.

     - => So that's `very similar to the style tags` we learned about earlier in the course, where we put CSS code between those tags.

     - => Now we have the script tags and we put JavaScript code between those tags, quite straightforward.

     - => Now, when it comes to the placement of that script element, it's basically up to you.

     > For the style tags, I strongly recommended that you put those into the head section. For JavaScript, I basically have the same recommendation, but you will also, quite frequently see it being added in the body.

     - => It's up to you, but it is worth mentioning and highlighting that like style, script won't render anything visible on the screen. So putting it into the body doesn't make a lot of sense from that perspective.

     1. And hence here, I'll actually also put it into the head section.

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>JavaScript Introduction</title>
         <script></script>
       </head>
       <body> </body>
     </html>
     ```

     > Now, but we know script tags, as I mentioned, we can write some JavaScript code. And to get started let's practice working with variables and values.

# 222. Working with Values & Basic JavaScript Commands

1. create a string value

   - => Now we learned that there are different values, `strings, and numbers`, for the moment, and, hence, `let's start with these values`.

   - => `A string value` is always created in JavaScript code by using quotes, double quotes, opening and closing, or single quotes.

   > So these are two individual single quotes. It's up to you, you can use either of the two, you just should be consistent.

   > If you prefer double quotes, use them in all your JavaScript code, and don't switch between double and single quotes.

   > Now, why do we need those quotes?

   - => Those quotes, double or single, doesn't matter, act as delimiters to JavaScript and to the browser therefore,

   > which is the thing executing our code in the end.

   > They tell JavaScript where our text starts and where it ends.

   1. Now, here, I will go with single quotes, since this is my personal preference, but it is up to you. And, here, we could now store some value, for example, 'Hi my name is Max!'

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         'Hi my name is Max!'
       </script>
     </head>
     <body> </body>
   </html>
   ```

   - => Very important, if you wanna use a single quote here in the text, and you're using single quotes for delimiting that text, or if you use double quotes and you wanna use a double quote in the text that won't be possible like this, you have to escape that character instead.

   1. So if I wanna say, 'Hi, I'm Max!' that would be invalid.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         'Hi, I'm Max!'
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > As you can tell, already, by the fact that my IDE is showing an error, and we have to escape this character.

   1. So we have to tell JavaScript that it should not treat it as a closing quote by adding a backward slash in front of it.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         'Hi, I\'m Max!'
       </script>
     </head>
     <body> </body>
   </html>
   ```

   - => That's some special syntax, which is worth knowing when you work with strings, because that's how you can add the quote character inside of a string.

   > Because the quotes around the text are actually not part of the text, but instead delimit the text, they tell JavaScript where your string starts and ends.

   > But, with that, we now did create a first string,

2. create a number value

   - => and we can also `create a number`, maybe in a new line, we can add 32 as a number. And for numbers we don't have quotes around them, we just entered a number like this.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         'Hi, I\'m Max!'
         32
       </script>
     </head>
     <body> </body>
   </html>
   ```

3. outputting values with a so-called `alert function`

   > Now you might be thinking, okay, what's the idea behind all of that? What does this code do?

   > Well, that's the problem. This code doesn't do anything because we're not giving the browser any useful instructions.

   > We are just creating two values here, but we're not doing anything with those values.

   _Now, what could we do with those values? Well, for a start, we could output them. We could output them, such that we see them in some way on the loaded page._

   - => And one way of outputting a value is to actually wrap that text here, maybe, with a so-called `alert function`.

   > I'll come back to functions later, you can forget the term for now because, for the moment, it's enough if you just type along.

   1. You can write alert, here, and then an opening bracket, opening parentheses, and after the text a closing bracket, a closing parentheses,

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         alert("Hi, I'm Max!")
         32
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > and then this actually will send the instruction to the browser.

   - => Alert is a built-in instruction, which the browser understands, which actually tells the browser to show a certain alert overlay on the screen, and to show this text inside of that overlay.

   > If you now save this HTML file, and you open this with that Live Server extension, you should see Hi, I'm Max! on that screen.

   > You should get this overlay, and you get this overlay because of JavaScript.

   > This is our first, at least a bit, useful JavaScript instruction, and we're doing something with that text value, now, we are sending it as an alert to the browser.

   _Now, as you can imagine, there are more things that we can do than just showing alerts._

   > We can send behind the scenes requests to some server,

   > we can set timers,

   > we can, of course, also manipulate the HTML code that's visible on the page, if we had any,

   > but we're going to dive into those features step-by-step. But, now, we at least have a first example of what we can do.

   > But, with that, we're still not doing anything with that number. This 32 value still just sits there and does nothing.

   1. Now, of course, we can all just show this (32 value) with an alert if we want to like that.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         alert("Hi, I'm Max!")
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > Also, again, execute this alert command, here, and then wrap this between brackets, this number.

   - => And that's important, alert works with both text and a number as you can see.

   > If I save this and I reload, I get Hi, I'm Max!, and if I click OK, I get this 32 value, and if I click OK again, that's gone.

   So now we're sending two alerts to the browser, and that's how we can work with values

   and what we can generally do with JavaScript.

   What we don't see here, though, are variables.

# 223. Introducing Variables ("Data Containers")

1. variables

   - => Now I mentioned that variables would be labeled data containers, which allow us to save values so that we can use them later in a different line of code basically, or possibly also multiple times.

   - => And to show you the idea behind variables, let's say we want to output the same alert with the same text again.

   > This all doesn't make too much sense, but we're just getting started here.

   1. Now, of course, we can copy and paste this code line as I'm doing it here.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         alert("Hi, I'm Max!")
         alert("Hi, I'm Max!")
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > If we do that and I reload this page, I get "Hi, I'm Max!" and then I get this again. And then I got the alert with the number because that's the order of alerts we're defining here.

   > But this approach, besides the fact that it's not doing too many useful things, has one major downside.

   - => I'm basically copy and pasting this text here. And that means that if I want to output something else, let's say, I want to say "Hi, I'm Max!" with multiple exclamation marks, I have to update it in two places.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         alert("Hi, I'm Max!!!!")
         alert("Hi, I'm Max!!!!")
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > And for this simple example here, that's of course not too difficult or too bad to do, but it's also a bit redundant.

   - => That's where a variable could help us. What if we could save this text in a variable and then just reuse that variable for both alerts?

   > Then if we want to change that value, we just have to do it in one place, in that variable, instead of in multiple places.

   - => And therefore, we can now add a new feature, a new line of code to our script here. `We can add a variable`.

2. the let keyword

   - => And we do this with a special keyword in JavaScript. JavaScript is all about special keywords that give certain instructions to the browser.

   > We saw one keyword, one instruction here, the alert instruction, which told the browser to show an alert.

   > Now that actually was an instruction that caused something that we can see. There also are instructions which we can't directly see as a visitor of the page.

   > And one instruction that we can't see as a visitor would be that we tell the browser to create a variable.

   - => And we do this with the let keyword.

   1. Now, unlike alert, let is not used like this, with brackets, but instead you type let, and then a blank, and then you choose the label, the name of your variable,

   > because let is actually a keyword that tells the browser to create a variable, and every variable needs a name.

   So here this name is up to you, and we could use greetingText as a variable name here.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText
         alert("Hi, I'm Max!!!!")
         alert("Hi, I'm Max!!!!")
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

3. naming variables

   - => One word about the name though. It is up to you, but it has to follow certain rules.

   1. Most importantly, it has to be one word, which basically does not use any special characters.

   2. There are some allowed characters like a dollar sign, but most characters are not allowed, especially dashes or forward slashes or colons and so on. That's all not allowed.

   > So this must not be greetingText with a dash or anything like that.

   > A underscore would be fine,

   1. but the convention for naming variables in JavaScript is actually to use this notation where your word starts with a lowercase character.

   2. And if it includes other words, where you normally would have a blank or anything like this, which is not allowed, those sub-words start with an uppercase character.

   > This notation is called camel case. That's just a name developers gave it. And that's the naming convention you should follow when naming your variables in JavaScript.

   - => Now the actual content of that name is up to you. It should describe the kind of value you will be storing.

   > And in this case, I plan on storing this text, which we could say is a `greetingText` And hence I chose this name following this camel case convention.

4. assigning a value

   - => Now that creates a variable and gives it a name. One important thing is missing though. We're not assigning a value.

   > And we can, but don't have to do this in the same line `with an equal sign`. As I said, you don't have to do this.

   > Alternatively you can also do it in a new line by repeating that variable name now without the let though.

   > You only use this when you first introduce a variable. Once you did introduce it, you can always assign a value in any other line of code by repeating that variable name and adding an equal sign.

   1. But you can also do this in one step like this, and now just copy your value and add this here.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         alert("Hi, I'm Max!!!!")
         alert("Hi, I'm Max!!!!")
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > And now we created our first variable, which we gave a name of our choice and into which we stored a value.

5. using the variable in other parts of our code

   - => And now that this variable is created, we can use it in other parts of our code.

   1. For example, we can use it here for these two alerts.

   > And for that, we just use that variable name, and we replace our strings here with that variable name.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         alert(greetingText)
         alert(greetingText)
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > And with that, we're telling the browser to send an alert or to show an alert, and to show an alert with the value that is stored in that variable.

   > So we won't show greetingText as our text in the alert, but instead the text stored in that greetingText variable.

   > That's the idea behind variables.

   > We can now reuse that stored value in different places.

6. assign a new value

   - => We can also assign a new value if we want to, because it's called variable, because it's flexible.

   1. We can overwrite the value stored in there. We could say `"Hi, I am really Max!"`

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         alert(greetingText)
         alert(greetingText)
         greetingText = 'Hi, I am really Max!'
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > And now I'm overwriting the value stored in greetingText with a brand new value.

   > Again, without the let keyword here, so we don't have that, because I'm not creating a new variable.

   > Instead I'm assigning a new value to an existing variable.

   1. And now if I would, again, alert this and show the greeting text here after assigning a new value,

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         alert(greetingText)
         alert(greetingText)
         greetingText = 'Hi, I am really Max!'
         alert(greetingText)
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

7. all your JavaScript code is executed top to bottom, left to right

   > we should see the initial value twice, and then that new value once before we then see that alert with 32 again.

   - => And the reason for that simply is that `all your JavaScript code is executed top to bottom, left to right`. That's how it always works.

   > It's executed line after line, step by step,

   > and if you alert a variable with a value, and then you change that value in a line thereafter, the first alert still uses the initial value

   > because at this point of time, when code execution reaches this line, the value has not been changed yet.

   > But in subsequent alerts, after we change the value stored in the variable, we will of course output that new value

   > because again, it's executed top to bottom so that change in the variable value will have an impact on that alert, which we execute thereafter, not on the alerts before.

   > That should hopefully make a lot of sense.

   > And hence, if I save that and reload, I get "Hi, I'm Max!" twice. Then I get this new text, and then I get 32.

   > And again, this is still a very made-up example to introduce those basics, but that is how you work with values and variables.

# 224. A Closer Look At The JavaScript Syntax

1. You've learned about some important syntax features and rules already...

   1. For example, that there must be a white space after let

   2. and that let is a special keyword in JavaScript, which we can use to instruct the browser to create a variable.

   3. We learned that we then can store a value with help of the equal sign in that variable

   4. and, very important for that variable name, that it must not contain any blanks or special characters

   5. and that we therefore typically use this camelCase convention for giving it a name.

   - => The difference between a rule and a convention is that a convention is not a must to do, a rule on the other hand is.

   > So it's a rule to not have blanks,

   > but a convention to then use this camelCase notation for assigning that name.

   > You could also set it to `GreetingTexts` like this, starting with a capital G, that would be valid, it would not violate any rules, but it would be against this convention.

   > So that's why I'm following it with a lowercase g.

2. Now it's not considered a good practice to put multiple instructions into one line though. And therefore you typically should split them across multiple lines and hence, `you can omit semi-colons`

   - => Now another syntax feature, which you will see in a lot of JavaScript code, including my JavaScript code from now on is that lines end with a semi colon.

   > It's actually not a must to do, as you can clearly tell by the fact that this code worked without issues, but it is something which is often done.

   > It's done to clearly mark, where a line of code ends.

   > Now, of course you could say, well, obviously the line ends where it ends, but theoretically, in JavaScript, you are allowed to have multiple commands in one line,

   > but without a semi-colon you would get an error, as you can tell. If I add a semi-colon here, that would work again.

   - => Now it's not considered a good practice to put multiple instructions into one line though. And therefore you typically should split them across multiple lines and hence, you can omit semi-colons.

   > Nonetheless, since we must use semi-colons in many other programming languages,

   > and since you must use them in JavaScript if we had multiple instructions in the same line,

   > it's often seen that people do use semi-colons after every line, even if they do split their code across multiple lines correctly.

   > And it's also something, a certain programming style, which I like to follow and therefore, I also put semi-colons at the end of each line,

   > but

   - => it's technically not required and you don't have to do it, but if you don't do it, you should never do it.

   > So again, be consistent, just as with the quotes. You can create strings with double or single quotes around them, but you should be consistent once you've made a decision.

   > And here I will be consistent and I will be using semi-colons at the end of every code line.

# 225. A Second Variable & Practice

1. practice storing and using a number value in a variable

   - => Now that we covered some important basics about variables, I want you to practice what we learnt up to this point.

   1. And I want you to take this 32, value you this number and store it in a variable instead of using it here in the place where we need it. Instead,

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         alert(greetingText)
         alert(greetingText)
         greetingText = 'Hi, I am really Max!'
         alert(32)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > store it in a variable at the beginning of our script, and then use that variable down here.

   > Maybe also we'll use two alerts that then work with that variable to make adding that variable a bit more useful.

   > Now, one important hint, which you will need for creating this variable, this value 32 could be a age, but that might matter for picking a proper variable name.

   > That's my challenge for you, add this new variable, I'll give you a short pause, to pause the video and try this on your own thereafter, we'll do this together.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let greetingText = "Hi, I'm Max!!!!"
         let userAge = 32
         alert(greetingText)
         alert(greetingText)
         greetingText = 'Hi, I am really Max!'
         alert('what is the user age?)
         alert(userAge)
       </script>
     </head>
     <body> </body>
   </html>
   ```

2. solution

   - => So, did you succeed? Let's do this together.

   1. We wanna create a second variable. And I mentioned that you should add it somewhere at the beginning of this script,

   > though I wanna emphasize that you can add the variables anywhere in your script.

   > You can add them at the end, in between and at the beginning.

   > Now at the end doesn't make sense here since I wanna use it in my code. So adding the variable thereafter would not work since the code is executed from top to bottom.

   > Adding it in the middle or maybe a right before I plan on using it would work.

   > But since my instruction for you was to add it at the beginning of the script,

   > I wanna add it here or maybe after greeting text, up to you.

   1. I will add it right at the top.

   > Now we did learn that `we can now add a new variable with the let keyword.` That's what we used before as well.

   > And then we need to pick a name. That name as you learnt is up to you, but has to follow certain rules and conventions

   > and which name we choose depends on what that value represents. And here, I'm assuming it represents my age.

   1. So I will name the variable age.

   > Now that's my name and the interesting thing about this name of course is that, unlike greeting text, this has no capital characters inside of it because that's not a must do.

   > It's only a must to do if your variable name actually consists of multiple words, sometimes you might need that to properly describe the value.

   > In the case of age, the word age is enough to describe that. Guess what, a number that represents an age is stored in there.

   > We could of course also choose `userAge` instead, and then write it like this, but that's totally optional. It would also be fine though,

   > but here I'll go for age

   1. and then store 32 as a value. And I will also add that semi-colon, since that is the style I will use in this course,

   > and that is a style you will see a lot out there in general.

   1. And now that this variable was created, we can use it. We can use it here for the alert and output age by referencing it.

   > So by basically telling JavaScript and therefore the browser, "Hey, please show an alert" and the content of the alert should be the value stored in age. That's what we're telling JavaScript here.

   1. And of course we can also output multiple alerts for this age like this.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
       <script>
         let age = 32
         let greetingText = "Hi, I'm Max!!!!"
         alert(greetingText)
         alert(greetingText)
         greetingText = 'Hi, I am really Max!'
         alert(age)
         alert(age)
       </script>
     </head>
     <body> </body>
   </html>
   ```

   > And if I save that, if I reload this page, I get "Hi I'm Max", twice, and then that changed text.

   > And then there after, I get my age, 32 being output twice.

   > And of course we could now also change that variable somewhere and assign a new value again with the equal sign, as we're doing it with creating text.

   > And that's something you can do, but not something you need to do here. And that's now another variable introduced.

# 226. Outsourcing JavaScript Code Into External Files

1. adding an app.js file to our folder

   - => just as with the CSS code between the style tax earlier in the course, we also don't want to add too much JavaScript code to the HTML file.

   > Instead The HTML filed should stay focused on HTML and should not be bloated with all our script code.

   > Because of course this here is a simple file. It has basically no real HTML content, since I want to focus on Java script here, but that's not realistic in a reality,

   > we would probably have a lot of HTML content. And then also having a lot of script code in here can make it harder to work with that file and manage this file efficiently.

   - => Therefore, instead of having that script code in here, we typically want to outsource that code into a separate file and that's something we can easily do.

   1. We can add a new file here in our project folder, and we can give this file. Any name of our choice, for example, app.JS.

   > The only thing which is not up to you is the file extension. That should be dot JS, which stands for JavaScript.

   > And since we're going to the store, some Java script code in that file, that's the extension we should use.

   > But the part in front of the extension is up to you. That could be scripts dot JS, or site dot JS. And here I'll just choose app dot JS, but it is up to you.

2. cut and paste our js code into our app.js file

   1. Now we can grab our JavaScript code and only the code between the script tags, not including the script tags,

   just as we did it with the CSS code before as well. We took the CSS code between the style tags, not including the style tags.

   1. And then we cut that JavaScript code, from the HTML file and paste it into our app JS file.

   > And here I'll press that format document shortcut to quickly format this appropriately and get rid of that extra white space.

   ```js
   let age = 32
   let greetingText = "Hi, I'm Max!!!!"
   alert(greetingText)
   alert(greetingText)
   greetingText = 'Hi, I am really Max!'
   alert(age)
   alert(age)
   ```

   > If I would leave the white space here, the code would still work, but it's harder to read and then over here, I want to get rid of it

   > kind of the opposite of what we had with HTML, There we added indentation to make our code easier to read

   > with JavaScript, Since we have a line after line and not really this nesting, which we have in HTML, we typically don't add redundant white space like this

   > Though we'll see some use cases for white space later on.

   1. Now as a side note, hitting that format document shortcuts did add double quotes here around the dispersed string for me.

   > And it did add those double quotes because I had this escaped single quote in there and keep in mind what I had here before was this, this kind of string,

   > and that was valid code, but the prettier extension, which I'm using for formatting here actually changes this slightly so that we don't have to escape the single quote character anymore. As it wraps this overall string with double quotes,

   > that's an alternative way of doing it. And even though I'm a fan of consistency, that's what the auto format shortcut does for me here.

   > And we could change the configuration, but we can also just stick to that behavior. I just wanted to highlight it here,

   1. but now we got our JavaScript code in here and then index HTML. We can now get rid of these script tags.

3. using the script tag with the src attribute to link our js file to our html file

   - => And now to question just as how we can link this HTML file to this Java script file so that this code still is executed in our browser.

   > And you could think that you again, use this link element, which we used for style sheets. So for a CSS files as well, maybe we need to add scripts here for derail attribute, but unfortunately that's not the case.

   > It would make sense, but it's simply not how HTML works when it comes to linking scripts.

   - => And for that, it's always important to keep in mind that HTML is a language with a lot of history. It was not written and invented on one day.

   > Instead it evolved over many, many years and new features were added and improved. And that's why we don't have to as uniform way of linking to external resources.

   - => And for linking to scripts, we therefore indeed, again, used to script tags opening and closing,

   1. and we use them differently now instead of putting our script code between those tacks, we now add the SRC attribute here. So does source attribute not ref,

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
     </head>
     <body>
       <script src=""></script>
     </body>
   </html>
   ```

   > but source as we did it on the image.

   1. And then here we specify a path to the JavaScript file we want to include here.

   > And that that can be a URL, a link to an external server with some exposed to JavaScript file,

   > or like we have it in this case to a local file, which is our project directory and here it's app.JS. So I'll just point at this file, including the file extension here,

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>JavaScript Introduction</title>
     </head>
     <body>
       <script src="app.js"></script>
     </body>
   </html>
   ```

   - => with that, we are telling the browser to link, to import this JavaScript file and to load that JavaScript code and also execute it.

   - => Now, one thing is very important here, even though we have no code between the opening and closing script tag, it's not allowed to use this as a void element. So removing the closing script tag is not allowed

   > as you can already tell, by the errors I'm getting here in my IDE, you have to have that closing script tag,

   - => and you also should not add any JavaScript code between these script tags If you have that source attribute and you are linking to an external file.

   > If you want to use code between the script tags, you should not add the source attribute,

   > but here, of course, I don't want to write code between the script tax. I want to link to the external JavaScript file instead. And that's now how we can do that.

   > If we save all of this, we again get these alerts, which we got before as well. But now through that external JavaScript file.

# 227. Introducing Arrays (Managing Lists Of Data)

1. arrays are lists of values

   - => there are other useful values as well. For example, so-called arrays, which are lists of values.

   1. And let me give you an example. Let's assume we are dealing with some user input here and `I'll actually delete all that code and write some new code`.

   2. We are dealing with some user input and we get an age as we did it before, and we get a user name which maybe is Max, and now we also get some hobbies.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies
   ```

   > We get some hobbies entered through some form, let's say, and we want to store that entered data in a variable so that we can later, output it, change it, do whatever we need to do with it.

   - => Now hobbies as the name suggests is not just a single value, but multiple values.

   1. Now we could, of course create multiple variables like hobby one and hobby two, and then store different values in different variables.

   ```js
   let age = 32
   let userName = 'Max'
   let hobby1
   let hobby2
   ```

   1. But that has a couple of disadvantages,

   > for one we don't know in advance, how many hobbies a user of our website might be entering. So we don't know as a developer, how many variables we need to create in advance.

   > In addition, even if we would know it,

2. We create an array in JavaScript by using `square brackets`

   - => we have a lot of variables which actually are kind of connected. And that's why we have this special array value.

   1. We create an array in JavaScript by using square brackets,

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = []
   ```

   > opening and closing square brackets, and that creates a so-called array value.

3. And in this array, we can store a list of values. So multiple values, which are kind of connected, you could say, stored in one variable.

   1. For example, multiple strings here, like sports and cooking and reading.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   ```

   > And as you can see, `you separate these different values`, these different array elements `with a comma`,

   > the white space here, the blank is optional. I just added it for readability purposes. It's technically not required.

   > The comma is technically required. It's part of the JavaScript array syntax, and it tells JavaScript where a one value ends and a new value begins, so to say.

   > So now with that, we created an array with three elements, separated by commas.

   - => And here I have three strings. We could also have numbers or numbers and strings mixed, that's all allowed.

   > Depending on what you're storing, you might need different values in here.

   > In this case, I need three strings.

4. we can output the entire array (or any of those array values) `bracket notation`

# 228. Introducing Objects (Grouping Related Data)

1. groups of related data which is not just a list but needs more context, like labels

   - => Sometimes we also have other kinds of related data which is not just a list but which is related, but needs more context, so which is not just a list of equal values;

   > these are all hobbies after all but instead multiple connected values that describe different things.

   1. Sounds very abstract. Let's consider a passport or an ID.

   > This here, for example, is the German ID, but you have something like this for every country in the world, I would assume.

   > And the interesting thing here is that this of course describes related data in the end,

   1. but we have labels that tell us which piece of data describes which trait of this person.

   > So for example, we have a label for the name and then we have to value the actual name of this person.

   > Last name and the first name, we have to date of birth and so on.

   1. And we always have these labels and then the values for these labels.

   > And overall, of course, we can clearly say that this is related data, all these different pieces of data, describe one person,

   > but it's not a list of data because it's not the same kind of data.

   > We have names, dates, countries, cities, different kinds of data on there.

   > So it's not the same as a list of hobbies

2. we create an object with `curly braces`

   - => and to describe such kind of data as well in JavaScript, we have another important data type, another important value we can create. And that would be objects.

   > Let's say our user who visits this website has a job, but a job is not just a string where we say developer, for example,

   > but instead, the job could be a combination of different values, where we have the name of the company, the place where he or she works and so on.

   1. And for that, we could create such an object. We do that `with curly braces` after this equal sign here.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {}

   alert(hobbies[0])
   ```

   > So opening and closing curly brace,

3. inside those curly braces we put the `property-value pairs`

   1. and between those curly braces, we now put the different properties of this object, the different labels and their values, that make up, this overall object.

   > And we call these label value combinations `properties` in the context of such a object in JavaScript.

   > And these labels are up to us. And we could say that a job is described by a title and then maybe the place where this job is being done.

   1. And therefore we could add two labels here, a title label, and then separated by a comma, our place label.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {title, place}

   alert(hobbies[0])
   ```

   > And again, these labels are up to you. You can use any labels you want.

   > Now the labels on their own are not that useful though. If we have a look at our passport again, we did not just have the labels there, but also values for those labels

   1. and values are now assigned, not with an equal sign, but by a colon after our labels.

   > And then after that colon, before you have that comma, and then the next label you have to value for that label

   > and values for labels instead of an object. Can again be all those values you already learned about strings, numbers, arrays, even other objects. So-called nested objects,

   > but that's something we'll explore later.

   > So here, our title could be a string and that could be `'developer'` for example,

   > and then place also needs a value. So we add a colon and then again, a value that makes sense here. So that could again be a string and it's maybe `'New York'`,

   > maybe a job also has a Salary. And that could be a number let's say `'50000'` U.S dollars per year or anything like that.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {title: 'developer', place: 'New York', salary: 50000}

   alert(hobbies[0])
   ```

   > That could be a job, a rich object where multiple pieces of data are grouped together.

4. you can think about these properties as variables that are a scoped, that belong to one object.

   - => Now we could also use three individual variables.

   > We could create a variable `let jobTitle = 'Developer'` that store's developer

   > and create another variable `jobPlace = 'New York'` that store's New York,

   > and create yet another variable `jobSalary = 50000` that store's the 50,000.

   > We could use these three variables instead of this job object.

   > We could work with a those of variables in our subsequent code as well,

   - => but if we use three individual variables, instead of one object, then we as a developer, always have to kind of keep in mind that these three variables are logically related.

   > And that might be easy to do, especially in a simple script like this, but it's even easier if you grouped them together explicitly by creating such an object

   > just as we created an array for multiple connected list items, instead of working with multiple variables.

   - => And that's why here I will not create three individual variables, but instead of one object that has these different properties,

   - => by the way, you can of course think about these properties as variables that are a scoped, that belong to one object.

   > You don't have to let keyword here though. You just directly have to label name and then the value.

   > And you assign that with a colon instead of an equal sign.

   > But other than that, it's basically like variables that are closed into that object. So to say.

# 229. Splitting Code Across Multiple Lines

1. typically we split objects and their properties across multiple lines

   - => Now, the bigger your objects get the harder it can get to fully read and understand them if you are looking at code like this. And that's why typically we split objects and their properties across multiple lines.

   1. After the opening curly brace, we often add a line break to have the first key value pair.

   > The label is our key and then this is the value. 2. And after the comma, if we have another property, we add another line break.

   1. And again,

   2. and then another one in front of the closing curly brace.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   alert(hobbies[0])
   ```

   > This is a bit easier to read.

   > And hear you now see that some white space was added automatically by my IDE. It's not required technically, we could remove it and the code works either way.

   > But of course, it is a bit easier to read if we do have that white space, and if you wanna re add it, you can simply hit the tab button and it will automatically indented a bit or that format document button or shortcut, which also will automatically format this.

   > And that's now simply a bit easier to read.

2. You could also add line breaks like this for arrays

   - => You could also add line breaks like this for arrays, if you wanted to, if that helps you with readability.

   > And there, it also makes sense if this would be a longer array, but for this array, I think having it in one line is okay as well.

   > But you could add those line breaks as well.

3. you are not allowed to add a line break inside of a string, but you can use `string concatenation`

   - => Now, when it comes to adding a line breaks and splitting code across multiple lines, there also are a couple of other rules which are worth keeping in mind.

   1. And for example, inside of a string, so between those quotes, you are not allowed to add a line break.

   > You'll see, I'm getting an error here in my IDE, if I try to do that.

   - => If you would have a longer text and you wanna split it across multiple lines, there are two main ways of doing that.

   1. You can either add a plus here, which actually will add another string to the first one, it will combine two strings together.

   ```js
   let age = 32
   let userName = 'Max' +
   let hobbies = ['Sports', 'Cooking', 'Reading']

   alert(hobbies[0])

   ```

   > so you can use plus not just with numbers, but also with strings.

   1. And then you could have your other string in a new line and that would work

   ```js
   let age = 32
   let userName = 'Max ' +
   \'other string'
   let hobbies = ['Sports', 'Cooking', 'Reading']

   alert(hobbies[0])
   ```

   > because JavaScript would understand that it should look for another value that belongs to this operation in the next line. So that would work.

   > You could even write it like this and it would still work. That is all valid Java script, though typically you would not write it like this because that's not super obvious that this belongs together. But you can split longer strings like this.

4. Alternatively, you can also use `Temple literals`

   1. Alternatively, you can also use back ticks instead of single quotes.

   > It looks similar, but it's a different character on your keyboard. And if you use such back ticks,

   > then you can actually add a line break inside of the string. So that would be an alternative for longer text.

   > Here I will go back to single quotes since those are also easier to reach for me on the keyboard and are more commonly used.

   > But these back ticks can actually help you, if you need such a line break inside of the string.

5. our goal is always code readability

# 230. Accessing Object Properties

1. For objects, it's not that different than arrays (`dot notation`)

   1. If we want to output the job title, let's say, then we again use the variable name, job, but now we can add a dot here.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   alert(hobbies[0])
   alert(job.)
   ```

   > If we add a dot here, we should get auto completion. If you don't get it, you can manually trigger it with control space. You need to type that dot first, though.

   - => This dot is a special syntax, which we can use in JavaScript, to access the different properties of our object.

   > And here we can see that the IDE, Visual Studio Code, automatically suggests these three properties.

   ```
   It also suggests a couple of other things, but these are just some guesses it makes, which are not directly related to this object and which actually won't work.
   ```

   > We can see that these three suggestions are the actual properties of this object by this blue box here in front of them. That's how we can identify those suggestions.

   1. And now if you want to output the title here, we can simply select it here in the dropdown and hit tab and simply alert job dot title.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   alert(hobbies[0])
   alert(job.title)
   ```

   > And with this, if we saved this, if I reload, I first of all get sports and then thereafter, developer.

   > So that works and that's how we can work with objects and their properties in our code.

   > And objects are another important value type, which we'll work with quite a bit when writing JavaScript code.

# 231. Performing Operations

1. basic math operators

   - => very often you want to do calculations, transformations. You want to do operations like that with your data.

   > And therefore, I now want to explore some important basics related to that with you now.

   > For this I'll `delete these two alert lines here`,

   - => and now let's say we want to derive for how many years this user, which we are describing here, is an adult, assuming that you become an adult once you reach 18 years.

   1. Now for that, we could add a new variable that stores our result of that calculation, which we could name adultYears.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   let adultYears =
   ```

   > Again, the name is up to you as long as you follow the rules and the convention,

   > but the name of course also should convey some meaning and describe the value which you will store in this variable.

   > And here I plan on storing the number of years for which this person here already is an adult.

   1. Now, the interesting thing here now is that now I don't want to hard code a new value. Of course, I could store 14 in there because I quickly calculated in my head that 32 minus 18 is 14, but that's not the idea here.

   > This input here could be coming from a user through a form. So even though we did hard coded here as a developer for demo purposes, this value 32 might actually not really be known by us, the developer.

   > And therefore, we want to derive the adult years dynamically. We want to calculate them.

   > Also of course, to avoid the fact that we make an error whilst doing that math in our head. So therefore, instead of just the writing 14 here, I instead want to use my age, which stores the 32, and now deduct 18 from that age.

   - => And you can do all those basic math operations, which you know, in JavaScript as well. You can deduct something by adding the minus symbol `(-)` and then the value you want to deduct, 18 in this case.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   let adultYears = age - 18
   ```

   > And now adultYears will store the result of this operation.

   - => And of course, this could also be a longer operation with multiple steps. So you're not just allowed to deduct one value from another, but you can add as many steps here as you want.

   - => Of course, you're also not limited to subtraction. You can also add values with the plus symbol,`(+)` multiply values with the asterisk symbol, `(*)` and divide by values with the forward slash. `(/)`

   > But here we need the subtraction and now adultYears should store the result of age, which in this case is 32, minus 18.

   1. And I will, again, alert this here. I will alert adultYears,

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   let adultYears = age - 18
   alert(adultYears)
   ```

   > save that, and on my website, I therefore get 14 here in this alert box. So that's working, and that's important.

   > This might sound obvious, and if it is, great, but

2. this is a key thing in programming, you can use variables to store values derive from mathematical or other operations

# 232. Onwards To Custom Commands! (functions)

1. code duplication

   - => Now, let's build up on what we learned up to this point.

   > We are calculating our adult years here by deducting 18 from the age.

   1. Now we can actually switch the order here and do that before I reassign the age. And then thereafter calculate the new adult years, which is age minus 18, again.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   let adultYears = age - 18
   age = 45
   adultYears = age - 18

   alert(adultYears)
   ```

   > So now I'm doing the same thing twice, but I do it for the different age values because, in between, I do assign a new age value.

   1. Now I'm still only outputting adult years once down there, though. Hence, if I do that and save this,

   > if this reloads, I still only see 27 because I never alert adult years before I recalculated.

   1. But of course we could do that. We could also alert it here and then reassign the age and recalculate adult years.

   ```js
   let age = 32
   let userName = 'Max'
   let hobbies = ['Sports', 'Cooking', 'Reading']
   let job = {
     title: 'developer',
     place: 'New York',
     salary: 50000,
   }

   let adultYears = age - 18
   alert(adultYears)

   age = 45
   adultYears = age - 18

   alert(adultYears)
   ```

   > By the way, if you're wondering why I'm sometimes adding an empty line, this is totally optional, not required. I'm just doing it for readability purposes to make my code a bit easier to read. You don't have to add to those blank lines. But back to our code.

   > I did now also alert adult years here.

   > And hence, of course, we now see 14 and then 27.

   - => Now, why am I showing this here? Because, now we again have some code duplication. We are repeating the same step in two different places.

   1. And, do you see which step I'm talking about? Which operation I'm talking about?

   > I'm talking about the calculation here, where we are deriving adult years.

   > Now, of course, we are also repeating this alert code here, for example, but there is an important difference. For alert, we are just executing one command, which is built into the browser.

   1. For this operation here, for this calculation, we basically built our own very simple algorithm.

   > We have a clearly defined operation that executes certain steps.

   > In this case, one key step where we deduct 18 from age.

2. we typically want to avoid scenarios like this as a developer

   1. But if this operation would change, if I, for some reason, need to add these values, instead of subtract them, then we have to do this in two places.

   2. And we typically want to avoid scenarios like this as a developer.

   > We want to be "lazy," as it's sometimes called.

   > We don't want to do the same work in different places,

   > because if we ever decide that the correct operation would be to use a plus here to add these two values, then we have search our entire code for every occurrences of this operation

   > and make the changes there as well, which is annoying and error prone. We can, for example, easily overlook one of the places where adjustments would be needed if we have complex code.

   > That's why

   - we typically want to put our own operations into our own clearly defined commands, which have their own name and which we can then reuse by just then using that name, so to say, instead of repeating the entire operation code all the time.

   - => So basically like it's working for the built in alert.

   > Here, we always repeat the same command, which has the same name. And adding errors here is way harder

   > because we get all the completion for that name and so on. And hence, this is a great way of reusing logic. The logic for outputting this alert box with some content.

3. Here, we now also want to write our own command and that's called a `function`.

# 233. Introducing Functions

- => functions are basically our own commands, which we can define as a developer to then execute them anywhere in our code.

- => So we saw the let keyword for defining variables, now we have to function keyword for defining functions.

- => function names should not describe what's in them, but instead, what this operation does.

- => When this entire JavaScript code file is being parsed and executed by the browser, once the browser reaches this line and this entire code block therefore it will just memorize this function, it will learn your own custom command so to say, but it will not execute it yet.

- => Instead, you as a developer now have to tell the browser when this function should be executed.

- => And to execute a function, you repeat its name, so calculateAdultYears in my case, and then you add parentheses, opening and closing thereafter.

- => And now, the advantage of this is that we only have this operation once in our function, and here, I should also add a semicolon, and then we just called this function into different places where we wanna perform this operation.

- => And hence if we ever, for whatever reason, need to change the logic in this operation here, we can do it in this function instead of searching for all the different places in our code where we used this operation.

# 234. Functions & Variables

- => But why am I not just creating adult years here in the function like this?

- => And if you open the developer tools and go to the console there, you will see an error. And you should always check that console if something does not work as expected,

- => Here we are creating a variable, but if you create a variable inside of a function, it's only usable in there.

- => using let inside of a function creates a new variable, which is only usable in that function.

- => And the reason for that is that we're still creating a custom variable inside of this function, even though it has the same name as the variable outside of the function.

- => This is something which is allowed in JavaScript. It's called variable shadowing.

- => You can create new variables with the same name and that will leave the outside variables intact, it will not delete them or changed them, it will just create an additional variable of the same name, which is only usable inside of this function.

# 235. Returning Values In Functions

- => It works but we have a couple of bad practices in there, which we don't typically wanna do.

- => It would be best if this function doesn't even have to know about the variable name of our outside variable here, if it could work stand alone.

- => And indeed that is something you typically wanna strive for, that your functions work without knowing external variable names.

- => what we can do in a function is we can return the result of a calculation with the special return keyword.

- => this function does now not just perform a certain operation

- => Now with the return statement, calling that function does produce a new value and calling that function does return this result.

- => it's very often the case that you store functions like this in separate files. And then you at least don't have to dive into those files as well, to make such variable name changes. (because now there is no name variable to be change)

- => And in addition we now also made a huge step towards making our function more reusable, more flexible.

- => now we can use this function anywhere in our code and in the place where we use it. So in the place where we call this function, we can then decide where the result should be stored.

- => And that is a huge benefit of using the return statement, instead of directly accessing a variable in the function and storing our value there, because now our function is more reusable and more flexible,

- => functions don't have to return the value. For example, alert here doesn't return a value. We're not storing this anywhere, but they often do.

- => And especially if you have a function that performs a certain mathematical operation, it's very common that you do want to return so that the result of this operation then can be stored in different variables in your code.

# 236. Passing Data Into Functions With Parameters

- => there still, is another external variable, which we are using in calculate adult years. And that will be this age.

- => And again, we typically want to avoid referencing and using such external variables here.

- => For this use case, we have a feature called function parameters.

- => Function parameters are basically inputs we can accept in a function.

- => It's like to defining a variable, but without the let keyword, but following the same naming conventions as we had them for variables.

- => This is now a parameter of this function and inside of this function code, So between these curly braces, it acts as a variable that's only accessible inside of this function.

- => We can't use user age here that won't work. It's only available inside of this function. And we can now use that in our calculation instead of age we can use userAge.

- => now that we added this parameter when we call the function, we have to pass a value for that parameter.

- => and that's the great thing about functions and why they are so useful. Especially if you do use parameters and return values.

- => Now we define our general code once, but it's pretty flexible. We can call this function with different values for age, and we'll get back different results.

- => But since you are the one writing your functions, and you're the one calling your functions, or if you're working in a team, you are passing on the information on how this function should be used, you of course know how to call it.

- => Now this function only needs one parameter. If we would need multiple parameters and other functions could need multiple parameters.

- => then you can separate them with commas.

- => And now with that, we are using all those amazing function features you should know about.

# 237. Functions - A Summary

- => We are going to write and use a lot of functions throughout this course so you will get a lot of practice, but the general idea should be clear by now.

- => I wanna emphasize again that functions don't need to return and don't need to take parameters.

- => I also wanna emphasize again that functions of course can execute multiple steps in there

- => and you can of course also introduce variables in there, like result, which then are only available in this function.

- => So which code goes into a function And whether you return and/or whether you use parameters depends on what your function does.

# 238. Time To Practice: The Problem

- => It's now time to practice what you learned and for that, attached you'll find this 'exercise.JS' file,

- => And in that file, I've got some instructions for you.

- => As a side note, these are all JavaScript comments, you add them by adding two forward slashes,

- => and the first task is that you create three new variables;

- => Now, once you completed the first task, take these variables and output alert them as we also did it before in this section.

- => Now in the third task, you will need to apply more of the things we learned. I now want you to group these variables together,

- => Now in step four and task number four, I want you to also output the second element in your main goals, variable.

- => Now in task number five, you should define your own command your own custom command, with any name of your choice that actually will use that main goals variable, and access and element by its identifier.

- => Now step number six, or task number six is to then use this custom command, which you did define in task number five and output alert the result four different values,

- => Now these are my tasks for you, you can put your solution code or write into this exercise JS file.

- => In the solution video, I will show you my solution and I do recommend that you go through that video also to compare your solution,

# 239. Time To Practice: The Solution

- => Let's now solve this together. And for this first of all, I will include exercise.js here in my index.html file instead of app.js,

- => and now go back to exercise.js. And here we can start with task number one, creating three variables.

- => Now let's start by defining those variables.

- => Task number two, now is to output these values.

- => Task number three now becomes more tricky. Because now we should group the three variables we defined before together.

- => Now we did group these variables together, now we should still output their values.

- => Task number four now is to also outputs the second element.

- => In task number five, we're now going to build a function.

- => And now we have our function in place, now we can use it down there to get our, let's say firs goal, for example,

- => Now I am 100% aware that this part was probably very challenging and tricky, because you had to apply certain steps which we haven't used exactly like this before,

# 240. Introducing Methods

- => Now let's dive back into our app.js file here.

- => Now it is also not uncommon that you don't just want to have values like that in an object, but that you also wanna have functions inside of an object.

- => So just as you can basically put variables into an object, you can also put functions into that object.

- => And adding a function here works like this.

- => And if we add a function to an object, we typically call that a method.

- => So a function in an object is called a method just as a variable in an object is called a property.

- => But now the question is, how do we execute this function in this object? We don't execute it like this.

- => Instead we do access a function in an object, so a method, just as we access other values in an object, by using that dot notation.

# 241. Making Our Developer Life Easier (Logging with console.log())

- => We can log data into this console. So that we see it here.

- => And during development for learning Javascript and for playing around with it, that's great. It's quicker and simply easier to use, than working with that alert box.

- => I'm now using console.log in all the places where I used alert.

- => And that's why I wanted to introduce methods, because console.log is just one example of a built-in method, which we'll use a lot.

# 242. Math Operations & Working With Different Kinds Of Values

- => Now let's come back to mathematical operations in general,

- => Now, I did, of course already talk about the general math operations you can perform.

- => but it is worth pointing out that these two different kinds
  of numbers, which be see here numbers without decimal places and numbers with decimal places technically have different names.

- => we call numbers without decimal places, integer numbers,

- => and we call numbers with decimal places, floating point numbers or short floats.

# 243. The Modulus Operator

- => Now, there also is another mathematical operation which I want to show you and that's the modulus operation, the modulus operator, which is this percentage sign character (%) used as an operator.

- => And what this modulus operator actually yields as a result is the remainder, the remaining part of performing a division here.

# 244. Math Operations & Math Rules

- => you are not limited to two numbers only when you perform a certain operation.

- => You can, of course also use floating point numbers.

- => If you do use multiple values in your calculation though, as we do it here, and this is the result, then it is important to keep in mind that regular mathematical rules apply,

- => which means that multiplication and division have a higher priority than using plus or minus.

- => If you ever want to change these rules, you can do it just like you do it in regular math as well. You can add brackets, parentheses around the operation that should be evaluated first,

- => So that's what you should keep in mind about mathematical operations in your JavaScript code.

- => Now, as I mentioned before, you can also store results of operations in variables. And I briefly want to come back to that.

- => Of course you can then also reassign the value.

- => Now I'm emphasizing this because there is one way of changing a variable that stores a value that can be shortened a little bit.

- => You can use a variable on the right side of such a variable assignment, even if you're assigning the result here, to the existing variable.

- => This works because JavaScript will always evaluate and execute the right side of the equal sign first with the old value of result.

- => Now there are a couple of operations which are very common and therefore can be shortened, though. (result++) (result--)

- => Now sometimes of course, you don't just want to add or subtract one. Sometimes you maybe want to add five, let's say. (result += 5) (result -= 5) (result /= 5) (result \*= 5)

- => And these are just some shortcuts which can be useful if you're doing some mathematical operations and you are changing an existing variable based on its previous value.

# 245. Performing String (Text) Operations

- => We can also work with strings, So with text in our JavaScript code, And I want to show this as well.

- => Now here, I'm using the plus operator, but I'm not using it on numbers as I did it before, but instead on strings, and that will work.

- => The strings have been concatenated, That's how we call this.

- => So you can use the plus operator on strings as well to concatenate those strings. You can't however, use the minus operator.

- => Instead, we get NaN as a result, this is a special type built into JavaScript, which means "not a number."

- => And you get this type whenever you perform a mathematical operation on values where JavaScript then is not able to yield a number as a result.

- => And in case of the plus operator, there is an exception. This is allowed to work on strings, but for minus, the times operator, the division operator, and the modulus operator, all these operators can really only be used on numbers and not on strings.

- => Of course, we could store these individual strings in variables and then combine these variables, or also store the result of this in a variable, and then use that variable.

# 246. JavaScript Operators, Shorthand Operators & Value Types

- => More on Operators

- => There also are useful shorthand operators that we haven't explored in the video but which will also be shown later in the course:

- => More on Value Types

- => Why does that matter?

# 247. String Operations & String Methods

- => Now there is one last characteristic about strings which I want to show to you, which is related to arrays actually.

- => let's assume we're getting this from some dynamic input, and we don't know the length in advance. In such cases, we might want to derive the length programmatically, and that is thankfully easy to do in JavaScript.

- => We can just use the string that we want to count, or the variable that holds the string, which I have in this case and then use the dot notation to access dot length.

- => And that's really important, and maybe also confusing. A string is not an object. And yet we can use the dot notation on a string to access various methods.

- => Now this is simply something that's built into JavaScript. You could say that all the strings you are creating are automatically wrapped with an invisible object behind the scenes, by JavaScript, so that you have certain properties that you can access on your strings.

- => So they kind of are converted into objects behind the scenes

- => And as you can see, if I, again add a dot here and I get this suggestion popup, there is way more than just length. And you see we have a bunch of methods here,

- => For example, there is the toUpperCase method,

# 248. Basic Array Operations

- => Now that length property is also interesting because it does not just exist on strings, but also on arrays.

- => And this length property then will tell us how many items are in this array.

- => And of course, there's kind of a relation between length on a string and length on an array. You could say that a string is a bit like an array.

- => It's technically not exactly the same, but a string of course, is a collection of characters, an array is a collection of any kind of values. That's why we have length on both.

- => Now on our array, if I, again, add a dot after hobbies, we also have many methods here, like push or reduce or sort, but these are a bit more advanced and therefore, we will not explore them right now.

- => I just wanted to highlight this length property since it is very useful, we will need it later in the course,

- => And that's it for these operations and values and what you can do with them for the moment.

# 249. Splitting JavaScript Code Across Multiple Files

- => In this module (and also in the next module), we always work on one `*.js` file only and we only include (link) one `*.js` file at the same time to our HTML file. That's not a must-do though!

- => If you build more complex websites, that might required different scripts that do different things, you can absolutely include multiple, separate script files into one and the same `*.html` file.

- => You can simply add multiple `<script src="...">` elements into your HTML document
- => You can also define functions or variable in file A and use them in file B, though you should make sure that the file where you define them is included (linked) before the file where you use them.

# 250. Module Summary

- => Now you might recall that at the beginning of this module, I also mentioned working with the Dom and I made that super funny joke about Vin Diesel and that I mentioned control structures.

- => For the moment, you should know what variables are and that we have values like numbers or, strings or, a arrays or, objects, which we can store in variables.

- => That we do use variables so that we can define them in one place and use them in another place. Possibly also change them and overwrite them and use them as often as we want.

- => And you learned that we can use variables either for just outputting them with alert or console log or other ways which we'll learn about later.

- => And that'd be a can of course also use them in calculations like here, a mathematical calculation, deriving a new value, which I store in a new variable in this case.

- => And that actually all takes place in a function, which is not a must do, but which makes sense if you have to same operation, which you want to perform in different parts of your code, maybe also with different concrete values.
- => That's possible because functions take parameters so that you can call them with different values

- => and they can return values so that the, you can also store the result of calling a function in another variable, or use it in another part of your code.

- => We also learned that we can add functions to objects and we then call them methods, just as we call a variables inside of object, properties.
