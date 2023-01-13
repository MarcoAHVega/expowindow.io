# tables

- > arranging data in rows and columns is common

all right the next topic is html tables

when building web pages we're going to
come across the need to display rows of data

a table of user information a table of
product data a table of shipping charges by location etc

arranging data in rows and columns is common

to help with that html provides several
elements that need to be nested at different levels

- > the table tag

first we specify the table tag

so opening table
and closing table tag

```html

```

- > the table head tag and the table body tag

nested within table tags we specify thead for the table header and tbody
for the table body

```html

```

- > the table row

within the t head tag we specify one row using the tr tag
short for table row

```html

```

- > the table heading

a row can have one or more columns
and if it is the heading for the column we specify the th tag
short for table heading

let's specify the content as heading 1.

```html

```

similarly let's add two more columns

so duplicate the th tag twice
and change the content to heading 2 and heading 3.

```css

```

that should be good for our column headings

- > the table data (description) tag

now for the body

similar to the code above we begin by adding a row using the tr tag

```css

```

within the row we specify data that has to go in each column using td tags
since we have three columns we specify three td tags

the content can be data 1 data 2
and data three

```css

```

this now adds one row into our table

we can copy and paste this tr tag two more times
change the text to 4 5 6
and data 7 8 9.

```css

```

what we have done is basically add three rows to the table data

if you now refresh and zoom in a bit

you should see the arrangement of data in rows and columns

the first row consists of heading where
the text is in bold

then we have three rows of data
of course there is no border and the spacing isn't great but styling is part
of css which you will learn in the next crash course

for now make sure you're aware of the
different tags and the levels of nesting when it comes to displaying a table in the browser

table tag

a thead and tbody tag

within thead add a row using tr

and th for the columns

within the body tr for a row again

but

td for the columns

very important to keep in mind the different levels of nesting
so that is about the table tag
