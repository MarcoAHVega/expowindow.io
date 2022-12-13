# font styles

- > the font-family property

let's start with font styles

by default on windows chrome
the font is times new roman

if i inspect the element
head over to computed and scroll down you can see the rendered font is times
new roman

we can change that using the font family
property let me show you an example

in the css file
i'm going to create a new class called font styles

so font hyphen styles with a
dot at the beginning

i'm going to add the property font family
and set it to verdana

```css

```

in the html file i'm going to add two h1
elements css text and again css text

but this time on the second h1 element i'm going to add class is equal to font styles

```html

```

if you now head back to the browser
refresh you can see that the font is now different from before

- > adding a web safe font as a backup font

now not every browser and operating system supports the font you might specify

so it is a good idea to add what is called a web safe font as a backup font

and vs code does a pretty good job of audit completing web safe fonts for a few font families

in styles.css if i remove verdana and type colon again

we can select verdana from the suggestions and vs code gives us all the fallback
fonts

sans serif which is last one here is pretty safe and is supported by all
browsers

- > font-style and font-weight properties

now the next two properties are font style and font weight

you can specify font style italic and font weight
bold for italicized bold text

```css

```

an h1 tag is bold by default so as a
quick exercise i want you to create a paragraph text and apply the font styles
class and verify how it appears in the browser

- > text decoration property

the next property is text decoration
and this you can set to underline

```css

```

this will underline the text

- > font size property

next you have font size which as the name indicates controls the
size of the text

if we set it to 50 pixels

refresh and you can see the text is way larger now
so
font family

font style

font weight

and font size

these are some of the more common font-related properties
