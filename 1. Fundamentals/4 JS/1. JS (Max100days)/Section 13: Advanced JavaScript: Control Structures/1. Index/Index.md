# 284. Module Introduction

- => in this course section, we are going to stay in the JavaScript world, but we will dive into control structures,

- => so we can implement conditional code execution and how often some code is executed

- => Now, we are going to learn all about that in this course section, and as always, we are going to learn about that in theory, but also with concrete examples.

# 285. Getting Started with "Control Structures"

- => in Java script And basically in all programming languages, we have two main kinds of controlled structures

- => And of course, we're going to dive into both, but `we are going to start with if statements`,

- => And here I want to show you the general syntax for writing conditional code.

- => To make that work, we need to write a so-called if statement.

- => Now that's a if statement,

- => we need to put some code between those brackets, but which code?

# 286. Introducing Boolean Values ("Booleans") & Comparison Operators

- => If statements need Boolean values between those brackets and we also called those values just booleans

- => And these are useful, these values, if we have a yes or no question. And when do we have such a question? Exactly. If we have an "if statement",

- => So if false then do nothing. If true, then execute this code. This is how you can read this.

- => Now boolean values are super important in programming because we need them for control structures like this, because we need them for "if statements".

- => And as you will see in most programs that you write, you will have some parts of your code that are actually conditional, that need "if statements" so that you can control which code should run, and if it should run at all,

- => you will typically derive Boolean values with help of so-called `comparison operators` and also sometimes with `logical operators`.

- => whereas mathematical operators yield us numbers and the concatenation operator returns a string, comparison and logical operators will actually give us Boolean values.

- => Here, we got these operators, which we can use to compare values with each other.

- => The first set of operators here is the `equality operator` (`==` `===`)

- => This equality operator can be used to compare numbers with numbers, strings with strings, numbers with strings and a couple of other values as well.

- => Now the next set of comparison operators are these `greater than (>)`, `lesser than (<)`, `greater or equal (> =)` and `lesser or equal (< =)`operators, which allow you to do these exact operations

- => Now, the last set of comparison operators, which you see here are negation operators or operators that yield the inverse of what you're checking. `(!, ! =, ! ==)` So you can check if something is not true.

- => Now, Sometimes you don't just have one check that you want to perform, but multiple checks.

- => And that's exactly where `logical operators` can help you

- => Here, we got two kinds of logical operators. We got the and(&&) and or(||) operator

# 287. Booleans & Comparison Operators In Action

- => Now to play around with those operators, I'm back here in the console, this JavaScript console and the dev tools.

- => And for example, you see, we can compare numbers with each other for equality.

- => And I did mention that we have two kinds of equality operators there with two (==) and with three (===) equal signs.

Now, what's the difference? The difference is that

- => if you use the one with two equal signs, you compare the `(==)values` only.

- => With the triple equal sign operator, you instead, also the check for `(===)type equality`.

- => And therefore `it is generally considered a best practice to always use to triple equal sign operator(===)`, because typically you should compare equal types.

- => Of course, if you know that you need `to compare a string to a number and you want to check for value only` it is fine to use the double equal sign operator(==) as well.

- => Now, we also learned about the negation operator (! = =)

- => It also exists on a one equal sign only though.,(! =)

- => Now, besides equality or not equality, we can also check for values being greater or smaller.

- => Now it is worth mentioning that you can't combine the negation operator with those kinds of comparisons just like this. (`5 !< 5 `) So you can't do that.

- => Instead here, you would first execute this comparison, wrap in brackets, and then add your negation operator in front of it (`!(5 < 5)`)

- => because you can always use this negotiation operator to convert a true value to false or a false value to true.

- => we also got the logical operators. And here we got and(&&), and, or(||). And here, the idea is simply that sometimes we have multiple combined conditions.

- => Now it's also worth mentioning that you can combine as many comparisons as you want.

- => by default JavaScript will first evaluate this part with the end (&&) operator, since this has higher priority in JavaScript

- => Now, just like in regular math, you can override is built in priority by adding parentheses.

- => So you can combine as many comparisons as you want and you now also learned about the priority of the different operators.

- => Of course, playing around with numbers in the console like this, is not what we would do in real apps, but it is useful to understand these operators.

# 288. Using Booleans In "if" Statements (Conditional Code Execution)

- => Now that we learned about comparison operators and logical operators, here we could say that we wanna print this if the name is Max.

- => But now that we got this and we know basically how that works, we can go back to our demo.js file. And in there, we could now alter this function a little bit to actually add this warning clause here,

- => Definitely try this out on your own. We'll do it together in the next lecture.

# 289. A Real Example

- => So, were you successful? Let's do this together.

- => We want to make sure that we add this warning class here to the input and to the remainingCharacter's span if we have less than 10 remaining characters.

- => Now at the moment, it never goes away if we go above 10 again, because we have no logic for that, but that's something we'll dive in next.

# 290. Alternatives with "else" and "else if"

- => whenever we go beneath 10 characters that works as expected, but if we go above 10 remaining characters again, then the warning class is not removed.

- => Now that's working as expected because with this if statement, we only add the warning class, we have no code that would remove it.

- => So if we wanna remove this warning class as soon as we are above 10 characters again, we need to alter this if statement a little bit, and we need to add a so called else statement, an else branch to it.

- => You cannot just define a condition and then code that should be executed if the condition is met, but you can also define code that should be executed if that condition is not met.

- => Now you don't need an else branch for every if statement you write. It simply depends on what you wanna achieve, but very often such a else branch can be useful to execute some alternative code.

- => And the great thing about remove(), by the way, is that if it should run, when no warning class has been added yet, it will just not do anything.

- => But an else branch is not all you can add. Sometimes you even have different conditions which you wanna check. Maybe we wanna add a brand new class.

- => If we have no remaining characters, maybe we wanna add a red background then, and we wanna add the warning class if we have less than 10 and no class if we have more than 10 remaining characters.

- => Now let's say in this case, we wanna add an error class here, not a warning class, but an error class.

- => Now this is a class we have yet to add in our CSS code, so let's quickly go there to style CSS

- => And with that, we, of course, wanna remove that error class if we have more than zero remaining characters,

- => we also wanna have a condition in between zero and this else block here. And for that, we can also add an `else if` statement to add multiple conditions that are evaluated step-by-step.

- => By the way, you can also rewrite this and simply pass multiple parameter values to remove and pass all the classes you wanna remove as individual class names like this,

- => Now with that, we added our else if condition. And how will this overall conditional block now be evaluated by JavaScript?

- => Well, it always starts at the top. That's always how your JavaScript code executes, top to bottom.

- => Now the error class is actually not removed as soon as I am above zero because we only execute this remove command in the else branch, so only if we also are greater than 10.

- => If you would want to remove the error class as soon as possible, you would have to add that remove code here to this else if branch.

- => And that's how we can run code conditionally with if statements and how we can use extra features like else if and else, if we need them.

# 291. More on Boolean Values

- => And in this conditional-code.js file, I now want to show you a different way of using Boolean values and of writing if statements, which is also very common in Javascript.

- => sometimes you also have so-called `flag variables`, which have a true or false value stored inside of them.

- => knowing that you can store Booleans in variables as I'm doing it here,

- => and how you should then name these variables, that you should name them as if they answer a question,

- => and that this is also a common thing to do and how you can then use these Boolean values in if checks, that is important.

- => Because again, that's also a certain way of working with Booleans and if statements, which you will see a lot in web development.

# 292. "Truthy" & "Falsy" Values

- => there is another important concept in JavaScript, which you don't find in most programming languages, but which is a key part of JavaScript, and which you therefore also have to know.

- => JavaScript has this concept of truthy and falsy values.

- => Now, we have true and false for Booleans, but in a place where JavaScript wants a Boolean, (like in this if condition here,) if you provide a non-Boolean value, JavaScript will basically try to convert that provided value to a Boolean,

- => and it has certain rules for that conversion.

- => but it's generally straightforward.

- => An empty string, or the number zero, will be treated as false.

- => A string with anything in there, (even if it's the text "false") would be treated as true because it's not empty.

- => Even a blank character would count as not empty and therefore as true.

- => Very often you will perform checks like this simply because it's shorter than checking for .length > zero, and it has exactly the same result.

- => So whilst you could do that, this is simply shorter and it works because of this truthy falsy behavior that's built into JavaScript.

# 293. Introducing Loops (Repeated Code Execution)

- => you'll learn that besides if statements, we also have loops as another super important kind of control structure or a set of control structures,

- => Now, before we dive into the different kind of loops JavaScript supports, let me show you a little demo page, which I prepared, which we are going to build throughout this course section.

- => This demo page consists of four examples, and these examples use different kinds of loops JavaScript supports.

- => These are all examples that rely on some code repetition and therefore we will rebuild these examples later on in the section to see how loops work.

- => But before we get there, let's first explore, which kind of loops JavaScript supports and which problems they solve before we then dive into some actual code.

- => In JavaScript, you have `"for" loops`, you have `"for...of" loops`, you have `"for...in" loops`, and you have `"while" loops. `

- => With `"for" loops`, you can basically define a certain number of times some code should be executed.

- => With `"for...of" loops` on the other hand, you can loop through all the elements in an array, and then do something with every array element.

- => `"For...in" loops` are a bit like "for...of" loops, the difference is, just that with "for...in" loops, you can loop through all the properties of an object.

- => And `while loops` are a bit different, there you don't define a certain number of times at advance and you don't loop through an object or an array, instead with "while" loops, you define a condition, so you work with Boolean values, and a loop, the code in the loop will be executed as long as a certain condition is met.

- => Now all of these loops have their purposes and you might need them for different purposes therefore, but especially "for...of" and "for...in" are used quite frequently.

- => Nonetheless, you need to know all "for" loops and hence, I will show you all "for" loops here.

- => Now, one short word about this demo page before we continue, by the way,

# 294. The Regular "for" Loop

- => Now, to explore those loops, I'll add a new file loops.js in our project here and replace demo.js with loops.js in index.html.

- => Now, I'll start with the console and the regular `for loop`.

- => You start with the `for keyword`, then `parentheses`, and we'll put some code that determines how long the loop will run into those parentheses. And then `curly braces`.

- => Now, here, `between those brackets`, we have to write some `code that defines how long that loop is running`.

- => And, with a for loop, the execution of that loop code depends on some variable. Some `helper variable`, you could say, that is defined for this loop.

- => Then, `after the semicolon`, still between those parentheses, you write your `looping condition`.

- => Now, we `add another semicolon`, and now we `define how i should change` in every loop iteration. And very `often here we will increment it by one`. So we will add one to it.

- => and I will console.log i here so that we see how i, this helper variable, changes during all those iterations.

- => So when could this kind of loop be helpful? It is helpful whenever you know that you have some code that should be executed a certain amount of times.

# 295. The "for-of" Loop (for Arrays)

- => Now, besides this for-let loop, we also have a `for-of loop`. And even though it sounds familiar, it works totally differently.

- => Let's say we have an array of users, and this is simply an array with a couple of names in there like this.

- => And now we want to do something with every user, in a real website who might want to send an email to the user, or just show that user on some dashboard screen. Here I'll just log these usernames.
- => And that's where a for-of loop can help us.

- => We again start with the 'for' keyword, and then we again have brackets and curly braces.

- => But now between those parentheses here, we don't write code as we did it up here, but instead we create a helper constant, user could be the name we want here.

- => The name is up to you. `It should describe your individual array elements` though. And since here I have users an individual element could be named user.

- => And then we at the 'of' keyword there after and then we point at the array for which we want to loop. In my case to 'users' array.

- => And with that, we loop through all the elements in 'users' and we get access to the individual elements inside of that looping code under this helper constant.

- => And then here I can console log user, so not 'users', but 'user' to log to individual elements for every iteration.

# 296. Using the Regular "for" Loop with Arrays

- => Years ago, we didn't have the for-of loop in JavaScript.

- => To still loop through all the elements of an array, this code could be used:

- => This code still works today and you can absolutely use it instead of using a for-of loop. But of course it's longer and a bit more clunky, so there is no strong reason to use that code, unless you prefer it.

# 297. The "for-in" Loop (for Objects)

- => Now we also have a for in loop. And the difference is that for in is meant to be used on objects.

- => Let's say we have a loggedInUser object here,

- => And now that I got these three properties, we could output these key value pairs here with help of a for in loop.

- => For this again, we started with the for keyword, and then again we try to help with constant, but this constant will then actually hold the different property names, or keys as we can also call them.

- => And hence you very often named this key, But the name is up to you. We could also name it propertyName.

- => Then we use the in keyword here, and then we point at the object through which we want to loop. So in this case for propertyName in loggedInUser,

- => Now in here we can now console log propertyName to see what's stored in there,

- => Now, if you want to get access to the values as well, that's possible with help all of a special kind of syntax which we haven't seen yet.

- => We can console log the loggedInUser, and now dynamically access the different properties stored in the user.

- => And to access such property names dynamically, we can use a syntax which we already know from arrays.

- => We can't add square brackets here after loggedInUser, even though that's not an array but an object, but there you can use square brackets as well.

- => But since we have this syntax, we can now also not hard-code the propertyName as a string here, but instead refer to propertyName. our helper constant here.

- => And property name indeed holds the different property names as strings. So therefore this line of code will dynamically access the values for those different propertyNames, which are different for every execution.

- => This does not work with the dot notation because of you had loggedInUser.propertyName, it would look for a property named propertyName,

# 298. The "while" Loop

- => And with the for loops, we basically always had like a fixed number of times that loop executed either because we defined it here or because we had a fixed amount of array elements or properties in an object.

- => With while loop , we instead just have a condition on which we depend. And as long as that condition is true, we continue.

- => As long as the condition we put in here () is met, we'll continue executing this code.

- => So if I would write while (true) here, we would create an infinite loop and therefore for you should not saved this because this will crash your website since it will never end.

- => Instead, we could be doing something like this. We could add a variable, "isFinished," and that could store a Boolean value, so initially it could be "false."

- => Here in the while loop, we then check for the opposite. We want to keep on running as long as we are not finished, hence we can execute "not isFinished" here.

- => And in here, we could now show a confirmation dialogue to the user with help of the confirm function.

- => It's basically an alternative to alert, but confirm allows us to answer with yes or no.

- => And therefore it will return a Boolean value. We can then enter the message that should be shown to the user like, "Do you want to quit?"

- => And this will open up an alert box, which already has a yes or no button.

- => And hence, since this will return a Boolean, we can store this in "isFinished" and override this "isFinished" variable value with the response of the user here.
- => And if the user chooses, "Yes," he or she wants to quit, "isFinished" will be true, and then "not true" will be false, and the while loop will quit.

- => So thereafter, we could "console.log done",

- => but that will only execute if that while loop stops. Because as long as this keeps on executing, this code will not be executed.

# 299. Practice Time: Setup & The "for" Loop

- => Now, to practice more JavaScript and explore loops in more realistic examples, I attached another ZIP file,

- => And that is the example I showed you a little bit earlier in this course already but without any functionality.

- => And here in this first example, we wanna build a simple calculator where we can enter a number here, and when we click that button, we add up all the numbers leading up to this number, and output the overall sum here in this box.

- => For this, I'll add a `loops-in-action.js` file with dashes between these words since this is how we commonly name our files in web development.

- => And, of course, I wanna include that file, I wanna link to that file from inside my index.html file,

- => Now we can save this index.html file and work on this loops-in-action.js file.

- => And here to solve this first task, as I mentioned, we wanna get access to the button, to the input field and to this paragraph.

- => Therefore here, I'll start with the First Example where we sum our numbers.

- => Now it's time to sum up all the values leading up to that number, and that is a task where we can utilize JavaScript loops.

- => and now we just need to output it, and for this, we need to get access to this paragraph,

- => Now, that will not be all that we have to do because if we have a look at styles.css, we can actually see that this calculated-sum element has display: none initially so that we don't see the empty result box initially

- => And with all of that done, we should have the finished code for this first example.

# 300. Practice Time: The "for-of" Loop

- => In the next example, we also will need a loop because I wanna highlight all the elements, which we have here, all the anchor elements I mean, which we have in this text here.

- => Now to highlight them, in style.CSS I got this highlight class, which when applied to an anchor element, adds this purple background and increases the padding a little bit.

- => And therefore, here I'll first of all start by getting access to my button by creating a new constant, the highlightLinksButtonElement.

- => And in highlightLinks, we now wanna find all the anchor elements in that section with highlight-links with that ID in the end, and then add that warning class to all the elements.

- => but one way of doing it is by using a for of loop.

- => And since it selects all elements and not just one, querySelectorAll in the end returns an array. And since we have an array, we can use the for of loop as we learned to loop through all the elements in that array.

- => And now inside of the loop, we can do something with every array element, so with every anchorElement in this case.

- => And that should be all we need here.

# 301. Practice Time: The "for-in" Loop

- => Now, if we move on to the next example, here our goal is to display some dummy user data. Some dummy user data, which we actually will create in our JavaScript code.

- => So here in this loops, in action JavaScript file, I'll work on that display user data task here on this example and I'll start by defining some dummy data here.

- => But now the goal is to, again, listen to a click on this button here and then reach out to this unordered list and add new list items in there that represent this dummy data.

- => And now in that function here, the goal is to get access to this unordered list and to then add list items to it.

- => One list item for every property I have in this object and that screams for a for in loop.

- => Whenever you have some task that needs to do something for every property in an object, that's a prime example for in loop.

- => And then here inside of that code, inside of that loop code, we now got access to this key and with help of that key, as we learned, we can also get access to the individual values of those properties in this object.

- => And now with that done, we just need to append this list item to this output data element.

- => Now, if we do that, then we generally have the behavior we want. If I saved this and I clicked this button, we now output this user data here.

- => However, at the moment, if I click the button again, we add more and more user data. And of course, instead I would want to override the existing user data with the new user data.

- => And with this change implemented, now I can hammer this button and I will still only get the output once because it's technically removed and re added with every click

# 302. Practice Time: The "while" Loop

- => Now the last example I wanna dive in is this statistics example here. And here, we will use a while loop.

- => And the goal here will be to get that entered number and upon a click, we wanna roll the dice in JavaScript and roll it as often as needed to the derive or to roll that target number, which therefore must be between one and six. And we then wanna output all the dice rolls we had in a list and also output sum summary as statistics down there in this sentence.

- => Now we can continue. We have that entered number, which is the number we wanna roll. So now as a next step here, I wanna add a while loop

- => and then here between curly braces, we have the actual code for this loop and that's where we now wanna roll a number.

- => Now this is one way of doing it, but it's actually a bit too long on the other hand it is hopefully pretty easy to understand.

- => And hence now after this while loop, we can output some summary statistics.

- => With that, we're outputting this, but we still don't create a list item for every roll. And of course we're not rolling the dice at all. We'll do that as a last step.

- => With that, we should be outputting that roll result. Now we just need to make sure that we do actually roll a random number.

- => Now here, we don't want a number between zero and one though, but between one and six.

- => And now that should be all, was quite a lot of work, but it should be all.

# 303. Module Summary

- => Now with these examples, I showed you in the last minutes and in the last lectures, I now want to conclude this section. It, was never a big section with a lot of new content, but this now basically concludes or finishes our JavaScript foundation.
