# 252. Module Introduction

- => In this course section, we are now going to see why we really need JavaScript and we'll see its biggest strength and action that we can interact with the so-called DOM

- => And therefore, in this course section, we are going to explore what exactly that DOM thing is, how we can interact with it and how we can also actually listen to events

- => and how we can then leverage JavaScript to reach out to HTML elements that make up our website and how we can change them with JavaScript so that we can build interactive websites,

# 253. Our Starting Setup

- => Now to get started. I am again back in an empty project and I'll do what we did many times before,

- => Now we're ready to write more JavaScript code and therefore I'll open this site with my live server again

- => and we will continue working with that console in the developer tools for now,

- => And with that, we got the setup we need to dive in and get started.

# 254. The Global "window" & "document" Objects

- => let me first of all introduce two global variables, which are always available in our code, which we can always use.

- => And dat would be the window and the document variables and objects that are actually stored in that variables.

- => and we got this global window object, (and we will see how we can use it in just a second,) which is a globally available variable that contains an object, which then in turn holds a lot of utility information and functionality related to the active browser window

- => And now to see this in action, in our code we can access this window object like this, `window`

- => And the great thing is dat when you console log an object in that console here in the DevTools, you can dive into that object and have a look at all the properties and methods that might exist in this object.

- => But one thing we can see in there, for example, if I scroll to the very top is this alert function here, this alert method, and that might sound familiar.

- => Now, the interesting thing about this window object is that you can access it by its name, (like I'm doing it here when I'm logging it.) but that everything that's built into this window object is actually also made available by the browser as global variables or functions.

- => So all the methods and all the properties you find in here can also be accessed without window dot.

- => Now, why am I mentioning this? Because this window object gives us a lot of utility information and methods that we can use to achieve a lot of things.

- => but there also is one very specific property on this window object, which is even more useful to us and which is super important and which we will use a lot in web development. And that's the document object.

- => And this document object holds information and functionality related to the loaded website content.

- => And dis for example, will give us a lot of functionalities that allow us to reach out to certain HTML elements,

- => this document object is related to this DOM concept, which is also extremely important when working with JavaScript.

# 255. What Is "The DOM"?

- => DOM is the abbreviation for document object model.

- => that's a concept in web development that describes the data representation, the browser internal representation, of the parsed HTML code we wrote.

- => Every HTML element we created is translated to a JavaScript object and those objects are then nested into each other to represent our HTML structure.

- => since this HTML structure was translated into a structure of JavaScript objects, our JavaScript code is able to interact with that DOM as it's called.

- => And the door to this DOM thing is this document object. Through that object we access this so-called DOM.

- => Now why will they is DOM thing and this document object matter to us?

- => because in our (JavaScript) code we will, for example, use this document object, to get access to certain elements in our HTML code.

- => We need a way of getting access to the parsed HTML code in the browser so that we can change it or that we can extract values from it.

- => That's why we need the DOM, because our JavaScript code needs access to what's happening on the screen.

# 256. Exploring The DOM

- => So this document object, this document property on the window object, which holds an object itself. is our bridge to this DOM.

- => And now, we can play around with that code and with JavaScript to tap into that DOM, into this JavaScript object representation of the parsed HTML code.

- => Now, we can still expand this (document) object because it still is a regular JavaScript object, just fulfilling a certain special purpose, so to say.

- => But, this also is confusing, because I want to clarify, that inside of this document thing here, we don't have HTML code.

- => And to see this real object, we can use console.dir instead of console.log, which is simply a different way of outputting this to the console.

- => Now, most interesting right now, are two properties, which we find in there. If we search for H, we find this `head` property.

- => But more interesting than this head property, with all that stored information, is the `body` property.

- => And that's a lot of useful information, which we can access through JavaScript

# 257. Drilling Into The DOM To Select & Change HTML Elements

- => So let's start playing around with that DOM, and let's see how we can manipulate it from inside JavaScript,

- => Now let's say we want to write some JavaScript code that changes this (link's) address.

- => And therefore, we now need to get access to this `ref` attribute in this anchor element, which is in the children property of the paragraph element, which in turn is part of this children array of the body property, which is part of the document. Okay. So that will be some drilling which we have to do.

- => So now here, we got hold of this href element, and now we want to assign a new value for this link.

- => (But) if we drill into a property of an already existing object with the dot notation, then we actually assign a value with an equal sign, just as we do it on a regular variable.

- => So now if I save that and we then reload this page, I get an error,

- => The reason for this error is basically impossible to find unless you know how JavaScript works and how it's being executed.

# 258. Loading Our Script Correctly

- => The reason for it failing is that actually our JavaScript code here executes too early.

- => So our JavaScript code executes before the browser, even parsed these HTML elements and created the DOM representation for them.

- => Now you might remember that we were able to console 'log' or 'dir' document though. And we were able to drill into it there in this JavaScript console earlier.

- => So that's where we can log it, but not change it because when we change it that happens instantly. It's not waiting until maybe the content is there.

- => There are two ways of working around that;

- => we can take our script and not load it here in the head, but instead cut it and move it to the end of the body section here.

- => The other more elegant and recommended way is that you will leave it here in 'head' and you add another attribute to this script element. And that would be the `defer` attribute.

- => and 'defer' tells the browser that it should defer the script execution, (that it should wait with the script execution) until the entire document has been parsed.

- => And that's a first way, a first example of how we can interact with the DOM to manipulate the page.

# 259. The DOM Tree & DOM Traversal

- => there is one important characteristic about this HTML code, which is also true about this DOM representation.

- => And with the DOM, we have the same. You can think of the DOM as a tree, a nested tree of JavaScript objects.

- => Now I am emphasizing this, because it is an important characteristic, and it's important to be aware of that, when it comes to looking for a certain HTML element in that DOM object,

- => Because it is a very common task, that you wanna reach out to a certain element in your DOM, and you wanna change it.

- => And there are two general approaches which we can look at, when it comes to accessing HTML elements in the DOM. Two approaches which we can also combine.

- => You can either drill into the DOM, and drill into elements as I like to call it. Which means you `use this dot notation` for digging deeper and deeper.

- => The alternative approach, which often is easier, is that you instead don't remember this exact structure, but you `use the utility methods`, JavaScript and the browser gives you, to search for a certain elements.

- => For example, by ID or by any CSS selector.

- => The advantage here is that you don't need to know the exact structure of your DOM and your HTML code, it's enough to know that there is some element with a certain ID, or with a certain class,

- => And `these are basically your two main ways of traversing this DOM tree`, and of selecting specific elements.

# 260. Drilling Into The DOM & Exploring Text Nodes

- => Now to practice this, I'm here in my console, in the DevTools on the loaded webpage

- => and now let's say we wanna select this H1 element here.

- => So that's one way of selecting this H1 element

- => and then I'll show you an alternative way

- => and that's another way of drilling into the DOM.

- => it's important to understand that in our DOM here, we don't just have all these HTML elements but the text which we have in our HTML document also is of course saved and understood by the browser.

- => A Node is basically either text or an HTML element and your entire content, your HTML content is translated to these nodes.

- => all the text content is also saved as such nodes. And we can see that with childNodes or with firstChild,which actually asks us to first child node, not the first element child,

- => With children, you just get access to the HTML elements that are stored.

- => And with first child, you actually access the first child node, so to say. The name is just a bit confusing here.

- => keep in mind that we have all this white space here and this white space is not displayed on the screen, but it's technically part of our HTML content. And that is this first child text Node here.

- => Now I will say that this is not too important to keep in mind because most of the time, you will work with the HTML elements.

# 261. DOM Drilling Limitations

- => let's come back to accessing elements in the DOM.

- => when you do dive into your DOM tree, your DOM structure like this. You always have to know the exact DOM structure.

- => And if you ever change it, for example,if we add a new paragraph in here, `<p>I'm new!</p>`

- => and we wanted to access this second paragraph, which before was the only paragraph. Then we have to adjust our code where we drill into the DOM,

- => So that can be a disadvantage, if you drill into your DOM like this.

- => And that's why using this drilling approach can sometimes be useful, but mostly only if you want to access the direct child or parent element of another element.

- => Instead, it's more common that you use these query functions, these query methods, which are provided to you by the browser.

# 262. Searching The DOM For Elements

- => Now, let's comment out this code here and let's write this again, but let's now use these query functionalities.

**getElementById()**

- => And now we've got a function (a method) in JavaScript, which we can use to get access to that element by id.

- => And then this will look for an element with that ID and if it finds it, it gives us access to that element, it returns that element.

- => Alternatively, we can, of course, also store this returned object in a variable,

- => The latter approach has the advantage of avoiding overly long lines and therefore, it tends to lead to cleaner, easier to read code.

- => Of course, we must use a variable if we ever want to use this anchor element again anywhere else in our code.

- => So if that's our plan, storing it in a variable and only running this command once will be a bit more efficient.

- => And that's simply a quicker and more secure way of getting access to a specific element by its id.

# 263. Querying Elements

**querySelector()**

- => And alternative is another utility function, which you have built into JavaScript. And that's the querySelector() method, which is also part of this document object.

- => but unlike ID, this does not want an ID as a parameter, but instead it wants a CSS selector.

- => So we can use a tag selector here, a class selector or an ID selector. So I could also select this element by ID b writing this appropriate CSS ID selector, which is #external-id

- => Now this is an alternative to getElementById. And when you have alternatives, the obvious question is always which alternative where which approach is better.

- => getElementById as the name suggests is really focused on getting elements by ID.

- => querySelector on the other hand, wants any CSS selector. it doesn't have to be the ID selector.

- => And this will then select the first, important, the first anchor element it finds on your page.

- => But it's the extra flexibility compared to getElementById that could be useful.

- => You can also have more complex selectors in here like "p a" So selecting the first anchor element that sits inside of a paragraph.

- => That's how you can do it here, (like in CSS,) with the important difference that this will always select the first matching element, not all matching elements.

**querySelectorAll()**

- => If you want to match all elements, then you have `querySelectorAll()`. This will then not return a single element, but all matching elements.

- => And for the moment, that's it. It already was a lot of new knowledge with the drilling we can do with those different utility functions. But these are core mechanisms of selecting content off your page and of working with JavaScript and the dom.

# 264. Common Query Methods

- => When it comes to querying / selecting HTML elements via JavaScript, there are a couple of commonly used built-in methods that are worth knowing:

- => `document.getElementById('some-id')`: Select a HTML element by its ID (selects only one element, since IDs should be unique)

- => `document.querySelector('<some-css-selector>')`: Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector (e.g. ID selector, tag type selector, class selector, combined selectors etc.)

- => `document.querySelectorAll('<some-css-selector>')`: Selects ALL matching HTML elements that are met / selected by the provided CSS selector

- => There also are a few lesser used selection methods, that you also should've heard about:

- => `document.getElementsByClassName('some-css-class')`: Selects all HTML elements that have the provided CSS class

- => `document.getElementsByTagName('tag')`: Selects all HTML elements that are of the provided HTML tag type

# 265. Time to Practice: The Problem

- => It's exercise time, and attached. You'll find this exercise JS file, which contains some tasks, for you to practice what you learnt.

# 266. Time to Practice: The Solution

- => So let's now solve this together.

- => 1. Now here we should select the `<h1>` element by drilling into the DOM.

- => 2. The next task is that we should use this h1Element variable, and therefore, this stored `<h1>` element object to get access to its parent,

- => 3. Now let's move on to three, task number three. Here, we should again select the `<h1>` element, but now with getElementById.

- => 4. In task number four, we should select the second paragraph here with help of querySelector. And I suggest that you maybe use a class and then the class selector to do so.

- => 5. Last but not least, in this bonus task, we should now try changing that text content.

# 267. Next Steps

- => So let's dive into DOM manipulations. We practiced how we can select elements. Now it's time to change things on the page.

- => And of course, we did already change some things.

- => Now, these are already super important kinds of DOM manipulations because `changing the text content` `and/or attribute values`, these are amongst the most common operations you will do.

- => But there are three other very important kinds of DOM manipulation and that would be `adding a new element`, `deleting an existing element`, or `moving an existing element` to a different place.

# 268. Inserting New HTML Elements via JavaScript

- => Now let's start with adding elements. And for this, let's say we want to write JavaScript code. That adds a new link inside of this first paragraph,

- => and then in app JS, we now need to do three main things When we want to add an element,

- => And these are the three steps we typically execute. When we create an add new elements.

- => 1. Now let's start with creating a new element.

- => 2. Now we want to get access to the parent element that should hold the new element

- => 3. Now I did store this in a variable so that in the next line, we can operate on this saved first paragraph element and then insert our anchor element.

- => As I mentioned, this does add it at the end, but of course it is a useless link. It has no text between the opening and closing tags. And this has no destination either.

# 269. Deleting DOM Elements

- => Inserting elements is nice and good to know, but of course, sometimes you want to remove elements and how do you remove elements now?

- => Well, for dis you will have only two steps that you need to execute.

- => 1. Now, of course, we do know how selecting an element works and therefore let's say we want to remove this h1 element `<h1 id="heading-one">Hi there!</h1>`

- => 2. Now, did we do have it selected We can remove it by simply using first H one element and then calling the `remove()` method on it.

- => And alternative way of removing. It would be to select its parentElement. (So the body in this case,) and calling removeChild on that element,

- => this is way longer and more complex than doing it like this. But I am mentioning it because this approach here using remove does not work in older browsers,

- => Of course, if you're targeting modern browsers, then using the shorter approach is better because it's shorter and you can see removing elements is really straightforward and not difficult.

# 270. Moving Existing Elements Around

- => Now last but not least, let's see how we can move elements around so how we can move existing elements,

- => And let's say, we simply want to switch order. So let's say we want to take this first paragraph and move it off after our second paragraph,

- => And since I'll be doing that on an existing element instead of a new element, the browser will automatically remove the element here and move it to the new position.

- => And that's how we can move elements around. You can move them around by selecting the parent of the place where they should be inserted and then using append() or insertBefore() there to insert the element there in that place.

# 271. Working with "innerHTML"

- => Now, there is another operation or property to be precise Related to inserting, deleting, or moving elements, but primarily related to removing and inserting. (`innerHTML`)

- => And now let's say we actually wanna change this paragraph this first paragraph, and we want to change the content that's inside of it. And `we actually want to insert a mixture of texts and HTML elements`.

- => Now, `innerHTML` is a bit like `textContent` where text content gives you access to the well text content.

- => `innerHTML` gives you access to all the HTML content stored in an element. That could be just the text, but it would `also include other HTML elements`.

- => So innerHTML contains the HTML elements and it's mostly useful if we are not using it to read or output the values, (though, of course we could have used cases for this as well,) but `it is mostly useful if we instead use it to set some new content with the equal sign`,

- => Because than here there is a major difference compared to textContent. Where as textContent (as the names suggest) wants just text. InnerHTML actually takes a string that `could also contain HTML code`.

- => and that's pretty nice to have, because in the end, this means that if you have more complex content that should be inserted, you can do it with innerHTML instead of creating elements with createElement and upending them manually.

- => on the other hand, doing it like this (with createElement and upending them manually) has the huge advantage that you have all the JavaScript configuration options for the created element.

- => But if you don't need direct access to the HTML elements, which you want to create, then of course you can use innerHTML to just output a mixture of text and or HTML elements.

- => And the HTML code you have in this string can be as complex as you want.

- => Just keep in mind that you're not allowed to add line breaks here. So readability could be an issue if this becomes more complex

- => and whilst JavaScript past solutions for this as well, we can ignore them for the moment.

- => The most important takeaway here is that you have this innerHTML property and that you can use it to output some text HTML mixture and force the browser to parse and display it

# 272. Introducing Events

- => By now we know how to select elements in the DOM. We know how to manipulate them, how to change the text content, for example. And we had a look at how we can insert, delete and move elements. Now that's all great.

- => But what's missing is that we also need to listen to an event.

- => So we will need to learn about events. And never a key feature JavaScript allows us to, to implement or to use in our code.

- => With JavaScript we can listen to such events and we can then execute code of our choice when such an event occurs.

- => And we will be able to do that by adding EventListeners with that `addEventListener` method to our elements.

# 273. Adding a First "click" Event Listener

- => Now to get started with eventListeners and how that works, I want to start simple here.

- => Now the goal is to add an eventListeners to this paragraph, and an eventListener where we listen to the click event. And when that click event occurs, I want to change the content of this paragraph, let's say.

- => First of all, we need to get access to the paragraph because we can't add an eventListeners without having access.

- => Now we got hold of that paragraph, we got access to it. Now, how can we add an eventListener?

- => We can use our element and then use the special addEventListener method on it.

- => addEventListener does what the name implies. It adds an eventListeners to that element.

- => And addEventListener wants two main parameters,

- => Now the (first parameter) the type actually should be a string. That's what addEventListener expects.

- => And here, I'll use a super common event, which you will use very often in Java script development, and that would be the click event.

- => Now we also need this second parameter value where we describe what should happen when that click occurs. And for this, we now need to define the code that should execute when that click happens.

- => Instead here, as a second parameter value, we should point at a function.

- => We can write code, put it into a function, and then in this case, let the browser execute it whenever a click occurs.

- => And that's generally true, but you can't always avoid using external variables.

- => we will hand this function off to the browser through this eventListener here to let the browser execute it for us at some point in the future, when that click occurs.

- => This is also called "a callback function" : a function that is passed as a parameter value tu another function or method (to be executed in the future)

- => the only thing that should happen is that this eventListener is added and the browser is aware of this function that should eventually be executed when the click occurs.

- => And then that's how we set up such an eventListener and how we define the code that should be executed when the event occurs.

- => This eventListener will not just listen to the event once. Instead, it will keep on listening.

- => But of course, changing the text to something which we can already see, has no effect.

# 274. Listening To User Input Events

- => To get a bit closer to what we actually need to do, let's add a input field next of type text maybe,

- => Now let's say we do want to listen to every keystroke and find out what the user entered, because ultimately that is what we need to do to solve this task later.

- => Now, definitely feel free to try this on your own first. Here's a quick pause for you to pause the video and give this a try. Then after, we'll do this together.

=> First of all, we of course need to get access to this input element.

- => Now, once we got hold of it, we can again add an event listener

- => And now the question just is what's the name of the event we want to listen to? Now, maybe you searched for events related to key and there you find keydown, keypress and keyup.

- => But an even better event, which you probably did not find though is the input event,

- => And therefore that is event you typically listen to when working with input elements.

- => Now we still need a function that can be executed when that event occurs.

- => and then the question is how do we get access to what the user entered? And that's definitely another challenge.

- => Because for input elements, to get the inserted value, you can use the value property.

- => And now we can connect this and again, tell the browser to execute retrieveUserInput when that input event occurs.

- => And that is how we can listen to input events on input elements, which is another very common scenario.

# 275. The "event" Object

- => Now when dealing with events, the browser actually automatically provides you with a certain parameter, which had passes into the function, you tell the browser to execute when that event occurs.

- => And that's an object describing the event that occurs. So here I'll name this parameter "event".

- => I can still name the parameter however I want, because when the browser executes that function behind the scenes once the event occurs, it will just set this first parameter to this event object value, no matter how the parameter was named.

- => Now this is now not an HTML element object, instead it's an automatically generated object that contains a bunch of properties describing the event that occurred.

- => So no matter which event you are listening to, you will always get an event object automatically, but the content of that object will depend on the kind of event.

- => And for an input event, you, for example, get this data property that carries the input value the user provided.

- => Another very useful property we got in there, is this target property. That holds the HTML element object on which this event occurred. So in this case, the input element.

- => And since that's the case, we got two alternatives for retrieving that value.

- => If I do actually use "event.data" for getting the input, you will see that there is an important difference.

-=> Event.target.value or input.element.value, always gave us the full value that is currently stored in this input element.

- => With event data, instead, as you see, as I type here, I just get to the concrete character or the concrete input that was inserted with that last input event emission.

- => And that therefore is a different behavior, which sometimes might be what you're looking for. But very often it's not what you're looking for.

- => and I'll use event.target.value, but we could also use input element value.

- => As a side note, if we do use event target value, we have the extra small benefit that we now did get rid of that external variable, which we previously used in this function.

- => And it's always important to keep in mind that the concrete information will depend on the event.

- => For example, for a click event, if we also accept the event object there, on that change paragraph text event handler function,

- => These are events and definitely as always with everything, feel free to play around with that, add more elements, add more event listeners, log these event objects, and see what's in there in what you can do with them.

# 276. A More Realistic Demo & Example

- => So let's switch to this demo project and definitely also feel free to try it on your own first.

- => Now, if you try this on your own, I have one important hint. You will need to find out how many characters the user already entered,

- => I'll give you a short pause to pause the video and try it on your own and then thereafter we'll implement this together.

- => So, let's now implement this together.

- => Now let's maybe start with the html content for that. And here I will also add some styling and so on

- => Now for the styling, I prepared a couple of styles and to not bore you and waste your time, you find these styles attached as style.css file is attached.

- => Now, of course, we're all here for the JavaScript code, not for the styling or the HTML code and they'll for now, we will dive into demo.js and start writing some code. And for that `let's recap what we wanna do`.

- => We wanna listen to every keystroke here in this input field,

- => then we wanna count the number of characters,

- => and then once we did that, we want to update this number here with the remaining amount of characters.

- => Therefore to get started, I first of all wanna `get access to the input field, and then to this span` where I wanna output the updated number of remaining characters.

- => Now on that input element here, on that element, I wanna add an event listener because I wanna listen to every keystroke.

- => Now, we need to find out how long that entered text is. We need to find out how long it is so that we can then compare it to our maximum number of characters, which is 60.

- => With that, we know how long the enterText is, now we need to find out how many remaining characters we have.

- => And that should be all we need for now. If you save that and you make sure that demo.js is linked to your index.html file, then you should now be able to reload or to go back and start typing here.

- => And this applies basically everything we learned about over the last hours and we see now why we could use JavaScript

# 277. Introducing "Constant Variables" ("Constants")

- => this concept is about Variables and a variation of those variables, called Constants.

- => Now, often in development, though, you also deal with so-called Constant values. So, values which you store in a variable once, but which you then never change.

- => So variables where the value actually never changes are called Constants.

- => Now constants are created with the "const" keyword, and up to this point, we haven't seen them yet.

- => I'll now show you why we might wanna use constants in certain scenarios, and how we use them.

- => the idea is simple. Sometimes you have variables, data containers, that contain a value which you actually never replace with a new value.

- => and if you would try to assign another value, (as you're seeing it here in this little demo snippet I prepared,) then you would get an error if this code would be executed, because you would be violating your own rules,

- => And that can add extra code safety, and ensure that the code is not changed in a way that breaks your program.

- => And, because of that, it is typically considered a good practice, as a developer, to be explicit in cases where you can be explicit about your intentions of your code.

- => And if you know that some variable will never hold any other value than the initial value, whilst you can keep it as a variable, it is a good idea to turn it into a constant, instead, to make that very clear, that this variable will never receive a new value.

- => And we can apply this to this demo project we worked on, thus far.

- => So if we would leave that as a variable, we, theoretically, could write code where we overwrite the value stored in this variable with a different value, maybe with a different HTML element,

- => and all of a sudden our other code that depends on this being the initial value, the productNameInput field, would break.

- => This function executes with every keystroke, that is correct, but once it's done executing, all the variables that were created during the execution, and that are stored in memory, (because that is where the variables are stored, they are stored in your computer memory. All those variables) are thrown away,

- => So, technically, we don't change existing variables, we always create new ones, and, therefore, during the function execution they are constant, because thereafter they are deleted, they are never overwritten.

- => If I instead change the value of some property in there, then the constant stays the same. It's just the object stored in the constant where some of its properties change.

- => but it's essentially just important to keep in mind that values inside of an object are just that, values in an object, not the values stored directly in a constant.

- => If that's still a bit confusing, it is something that will become clearer with more practice, and the deeper you dive into JavaScript.

# 279. Changing Element Styles With JavaScript

- => As I type more and more characters, if we go below 10 remaining characters, in the demo I showed you, the color here that changed and the background color of the input field changed. And that's not happening here.

- => Now we need two additional building blocks to make this work.

- => 1 The first building block is that we need to learn how we can manipulate our DOM elements such that they do change color. So, `how we can change the styling of DOM elements with JavaScript`.

- => 2. And, then in a second step, we will need to find out how to do that conditionally.

- => And let's start with the first step. Let's learn how we can change the color of DOM elements.

- => And that's what we can do with JavaScript as well. We can also change the style attribute and then the different CSS properties that can be changed, like color, like text align, like background color, and so on.

- => And as solved, feel free to play around with it. Just keep in mind, that it's this camel case notation and that your values should be strings.

- => Now, that's one way of changing the styling. And of course, since I'm just doing this here in this console in the dev tools, whenever I reload the page, all these changes are gone.

- => If we would write it in this JavaScript code here, (demo.js) of course, they would persist since it would be updated on the running page, by the code that is part of this page.

- => there is another way of changing the styling, or the look of our elements.

# 280. Managing CSS Classes With JavaScript

- => The alternative way of using this style property, and then it's nested properties, would be that we maybe wanna set certain CSS classes on elements.
  background-color: rgb(248, 191, 145);

- => It's not added But that means that if we do added with JavaScript, we should be able to apply the styles configured for this class, whenever the class is added with JavaScript and that's something we can also do here.

- => and now to change the CSS classes on that element, we've got two main ways of doing that. We do have to className property,

- => So whatever you set as a value for className will be added as the class attribute on that element for which you are setting it.

- => This approaches often great, but it has a disadvantage. If you are doing this on an element that already has a class,

- => But that of course means that you always need to remember which classes are already on that element, or you always need to write some extra code that looks at the element, extracts the existing classes, and then appends a new class.

- => And that gets even more annoying if you then want to remove a class, because then you have to overwrite the existing string of class names with a new string, which is all the old class names minus the one you wanna remove.

- => That's why, in addition to className, we also have the classList property.

- => And classList actually is an object with a couple of utility methods that make managing classes on HTML elements easy.

- => And therefore you can also change classes besides those styles, with the style attribute either by using className, to override the class attribute or classList to manage it in a more elegant way.

- => And often classList of course, it's the better choice since you have more fine grain control over what's going on.

- => Now, that's also the conjunction of CSS and JavaScript, and we see how these two languages work together with help of style and of these class properties.

# 281. Module Summary

- => I want to summarize what you learned in this module up to this point.

- => the Dom in the end is just the parsed HTML code,

- => Now document, as you learn stores an object with a bunch of properties where most of these properties, then store more nested objects so that you can actually drill into that Dom and access the different HTML elements that live inside of it.

- => we also learned about utility methods, which exist like querySelector or a getElementById.

- => Now, once you got hold of an element,

- => you can also manipulate those elements, for example, you can set the ref attribute, the ref property and therefore the attribute off at element through JavaScript to change the link destination.

- => As you saw before, you can also change styles or the text content of elements through those different properties that exist on those elements.

- => And here indeed, it is a good idea to console.dir elements, to find out which properties and methods are available there.

- => Now you can not just select and add existing elements. You also learn that you can add new elements and insert them into the page, into the dom,

- => that you can remove elements and that you can also move elements around without deleting them. So just moving them into a new position on the page.

- => Now, in addition to selecting and manipulating elements, you can also add event listeners with that add event listener method, which you can call on all those elements.

- => We also learned about the const keyword, which you can use instead of let, if you have a variable where you indeed never assign a new value to, with help of the equal sign.
