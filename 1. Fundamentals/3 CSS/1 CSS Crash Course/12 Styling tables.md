# styling tables

- > setup (adding the relevant html to display a table)

next let's move on to styling tables

let me begin by adding the relevant html to display a table and this is going to be the same table we had a look at in the html crash course

so table tag t head tag
and t body tag

within t head add a tr tag and within the tr tag i'm
going to add three th tags with the text
heading one two and three

within tbody i'm going to add a tr tag again and within the tr tag i'm going to add
three td tags with the text data one
two and three

i'm going to copy paste this row twice
and change the text to data for five
six seven eight and nine

so a heading row with three columns and three rows
for data in the table body

```html

```

if we save the file and take a look at
the browser you can see the table being rendered

- > adding a border

but this doesn't really look like a table does it so let's add some styles let's begin by
adding a border

in the css file on the th and td tags
let's add border one pixel
solid and a shade of gray

```css

```

- > border collapse property

if we save the file and refresh this still looks like individual cells
rather than a table

to fix this on the table tag
we add another property border collapse
and set it to collapse

```css

```

refresh and you can see it looks more like a
table now

- > sometimes you might want the table to take up the entire available width

in such cases you can set width to 100 percent on the
table tag

```css

```

refresh you can see the table is wider now

let's go with sixty percent

```css

```

looks much better

- > the text align property

next let's talk about the alignment

by default th tag is center aligned and
td tag is left aligned

you can control that using the text
align property

so just on the td tag we can set text
align and a value of center

```css

```

refresh
and the text is now center aligned

- > vertical align property

also depending on the height of each
cell you can also control the vertical alignment

for example below text align we can set height to 50 pixels
and vertical align to bottom

```css

```

refresh the browser and you can see the text is now aligned at the bottom of each cell

i don't use this much but it is something to be aware of

- > next to add spacing within the cell we can add padding to th and td tags

so apart from the border add padding 15 pixels
and remove height and vertical align from td

```css

```

refresh the browser and you can see the table looks much better now

- > to make this look a bit more elegant we can change border in all directions to just border bottom

so border bottom
one pixel solid ccc

```css

```

refresh
and we see the separation of each row rather than each cell in the table

of course we're going to come across a variety of table styles when you start browsing websites

but these are some fundamental properties that you need to know as a beginner

border collapse width text alignment and padding for each cell

all right we have now covered styling most of the html elements
