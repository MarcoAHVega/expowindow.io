# forms

- > you will come across situations where you need to collect data from the user

the next topic we have to learn about is
html forms

so far we have been displaying data to the user

when building web pages you will come across situations where you need to collect data from the user

for example user details in a registration form or personal details
when applying for a bank account

- forms allow users to enter data which is generally sent to a web server for processing and storage

- in this video we are only going to focus on the html part of a web form and not processing the data as you need a lot more than just html for that

let's take a look at the different html elements that are typically used when
creating forms

- > form tag

now every form begins with a form tag
so opening and closing tags

```html

```

- > label element

next let's add a form input to collect a
user's name for that we make use of two elements

first a label element to display the input label

let's call this field username

```html

```

- > input element and type attribute

next an input element to accept some text input
is a tag and this is a self-closing tag

we're going to specify type is equal to
text as an attribute

and i'm going to add a few break tags
for some spacing so after the label a break tag
and another pair of break tags after the input element

```html

```

ideally spacing should be taken care with css but break tags will serve the purpose
for now

if we take a look at the browser
refresh

you can see the username label and the input element

- > form controls, the id attribute and the for attribute

- (form elements or tags are known as form controls)

now what is a good practice with form controls as we call them is tying the label with the input

for that we add an id attribute to the input element

and use its value on the for attribute for the label

so id on input is going to be equal to username
and label for attribute is equal to the id of the input which is again username

```html

```

so we are telling this label is for this input

what this does is when `we click on the label it focuses the input element` and this is considered a good practice in html

so this is the input element

- > text area element

let's look at a few more form elements

next we have a text area to collect a
larger text from the user

first we're going to add a label
which is going to be about you

and then for text area we use the text
area tag

i'm going to set id is equal to about

and add on label for attribute is equal to about

i'm also going to add a few break tags for spacing

```html

```

if we now take a look at the browser refresh you can see that we have a text area
and here we can type multiple lines of text

the select element (drop-down control)

the next form control is the drop-down control

again a label, let's call it country

and the tag this time is select

```html

```

- > the option tag and the value attribute

within the select tag we need to specify the different options

we're going to specify three countries
as options

each option is represented with an option tag

and for
each option we specify the text to be displayed and the value of that option

for example text is india value is also going to be india

```html

```

so india with upper case is displayed to the user

and lowercase india is the value sent to
the server

let's add two more options

i'm going to
make a copy

this is going to be singapore
the value is going to be the same with lowercase and finally
vietnam

also going to add on the select tag id is equal to country

and for the label for is equal to country

a bit of spacing

```html

```

and if you now take a look at the browser you can see the drop down with three
options india singapore and i guess vietnam is cut out
of the display

- > radio button group and the type radio attribute

alright the next form control is radio button group which allows the user to select one value from many options

let's say the job type is part time or full time

in that case we're going to add a label that says job type

```html

```

and below the label we're going to add first an input element
this is a self-closing tag

```html

```

by default the input element type is
text which is not what we want right now

for radio buttons
we specify type is equal to radio

```html

```

but we also need to specify a few more
attributes

i'm going to add `name` is equal to job type

the actual `value` which will be sent to the server so this is going to be part time

and then i'm also going to set an `id` part time

```html

```

and this radio button needs a label so we're going to add the label after the input

```html

```

this is going to be part time

and the for attribute is also going to
be part time so this label is for this input element

i'm going to add a break tag after the main job type label and also after the first radio button

```html

```

i'm going to make a copy of the input element along with the label and paste
it

our second option type is going to be radio again
and the name needs to remain the same job type and job type

both the radio buttons belong to the same group

the value though is going to be full
time and so is the id

the label for attribute is going to be
full time and the text is going to be full time

i'm also going to add another pair of break tags for some spacing

```html

```

if we now head to the browser you can see we can now select the job type as part time or full time

now it's also possible that you want the user selecting both the options

- > check box control

in that case we make use of check boxes instead of radio buttons

all we have to do is change the type attribute from radio to check box

so let me make a copy of this job type

and change radio to check box

and i'll also change the id as it should
be unique within a page part time check box
full time check box

job type is job type check box
job type check box for the name attribute

```html

```

if you now go back to the browser refresh
we have check boxes

we can select part time as well as full time

so these are some of the most common ways to accept input from a user a

single line input

multi-line input

a drop down radio buttons

and check boxes

- > button element

now what you might want at the end of this form is a button to send all the data to your server

for that within the form tag add a button element

so button opening and closing tags and the text is going to be submit

```html

```

at the moment this will not send the data to any server

that part is out of scope for html so for now make sure you understand about the various form controls and this submit button
