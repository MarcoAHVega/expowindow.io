# links

- > the anchor tag

all right the second element we should learn about when learning html attributes is the anchor tag denoted by `<a></a>`

this tag is used to create hyperlinks to other pages

it is also probably the element you're already familiar with having navigated thousands of websites

the syntax is as follows

in between the tags we specify the text to display in the
browser let's say `Google`

now on the opening tag
we specify an attribute called `href`

to this attribute we specify the address
where we need to navigate to, in our case `https colon slash slash google.com`

```html
   <!-- Attributes -->
    <Google href="https://google.com">Google</a>
```

now head back to the browser refresh
you can see we have a link that says google

- `the styling is a little different` to the
  other text elements we have seen so far

- the cursor also changes to a pointer
  when we hover over the text

- click on the link and we are directed to google home page

this is the basic working of an anchor tag

- > we could link between two pages in our own folder

of course the linking doesn't have to be
to other pages on the internet we could link between two pages in our
own folder

- so back in vs code let me create a new file `contact.html`

type exclamation and tab
this will populate a sample html document

in the body tag `add another anchor tag`
the text is going to be `Home` and `href` is going to be index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="index.html">Home</a>
  </body>
</html>
```

similarly `in index.html` we're going to `add another anchor tag`
where the text is contact and href is going to be contact.html

```html
<!-- Attributes -->
<a href="https://google.com" target="_blank">Google</a>
<a href="contact.html">Contact</a>
```

if we head back to the browser refresh

we can click on contact
we go to contact.html which is the contacts page

click on home
and we are back at the home page

so we can navigate back and forth within
our own website

we have two pages which are linked together

- > the target attribute

now one attribute that is commonly used with anchor element is the target
attribute

you can set target is equal to underscore blank

```html
<!-- Attributes -->
<a href="https://google.com" target="_blank">Google</a>
```

and what this does is open the link in a new tab instead of the same tab

refresh click on google and it opens in a new tab

so target is equal to blank is pretty useful when you're directing users away
from your web page

both image and anchor elements are
essential when building websites so make sure you're clear on these topics
