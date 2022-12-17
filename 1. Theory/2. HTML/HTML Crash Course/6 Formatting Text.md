# Formatting Text

- > Headings

  users looking at a web page tend to scan quickly to find relevant content
  often just reading the headings before designing whether to read the corresponding paragraph of text or not

  so html gives us heading and paragraph elements for some basic structuring of
  the text

  let's go over heading elements first

  - html headings are titles or subtitles that you want to display on a web page

  - there are six heading elements in total

- > the h1 tag

  the first one is the h1 element

  so we specify the opening h1 tag the closing h1 tag

  and the content in between let's type heading 1

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <h1>Hading 1</h1>
  </body>
  ```

  if you now head back to the browser and refresh
  you can see we have the text in larger font size and it's also bold

  - the h1 tag corresponds to the title of your web page

  - and it's a good practice to have only one h1 tag per page

- > the h2 tag

  which brings us to the h2 tag

  back in the editor i'm going to make a copy of this tag

  shift alt down arrow being the shortcut and change each one to h2

  and the content to heading two

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <h1>Hading 1</h1>
    <h2>Hading 2</h2>
  </body>
  ```

  save and take a look at the browser

  you can see we have the h2 text

  - and this is usually used for subheadings

- > h3 to h6

  if your web page needs more hierarchy in the content you can rely on the remaining heading
  tags

  i'm going to press alt shift or option shift and down arrow
  to make copies of the h2 tag once twice
  three times and four times

  now change the tags to h3
  all the way till h6

  change the content as well

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <h1>Hading 1</h1>
    <h2>Hading 2</h2>
    <h3>Hading 3</h3>
    <h4>Hading 4</h4>
    <h5>Hading 5</h5>
    <h6>Hading 6</h6>
  </body>
  ```

  if you now save the file and take a look at the browser refresh

  you can see the heading text being formatted in different ways

  and this seems a bit large because i
  have zoomed in let me reset and you can see the actual size of h1 to
  h6 tags

  they all are formatted differently

  each heading starts in a new line and also has some spacing at the bottom
  to separate from the content below

  so we have marked the content
  using tags to let the browser know how to display the content

  this is pretty much what we do with html hopefully you're starting to get the
  hang of it

- > the paragraph element

  another html element that is used for
  displaying text is the paragraph element

  add an opening tag
  which is p and the closing tag

  for the content i'm going to add this is
  a paragraph

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <p>This id a paragraph</p>
  </body>
  ```

  take a look at the browser
  and you see the paragraph text being displayed

  - a paragraph text always starts on a new line and unlike headings it is usually a block of text

  so text you see in a blog post product descriptions on your ecommerce sites etc

- > lorem ipsum

  to add more content to display in a paragraph add a new p tag
  and for the content type lorem l-o-r-e-m and press tab

  format it and you can see when we tab
  it fills in a paragraph of text without you having to type it all out

  let's make a copy of this save the file refresh

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
      voluptatum magni officiis incidunt ad sit optio! In?
    </p>
  </body>
  ```

  and you can see that each paragraph starts on a new line and adds a little
  spacing to the content below

- > white space is ignore by the browser

  and what you do have to learn here is
  that you cannot change the display by adding extra spaces or extra lines in
  your html code

  the browser will automatically remove any extra spaces and lines when the page
  is being displayed

  so even if you split this paragraph into
  separate lines the output will remain the same

- > the line brake element

  if you intentionally want to add line breaks html provides a line break element which
  you can use

  so after a line we can add
  the break tag copy and paste it

  ```html
  <body>
    <!-- Headings and Paragraph -->
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      <br />
      blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
      <br />
      voluptatum magni officiis incidunt ad sit optio! In?
    </p>
  </body>
  ```

- > self-closing elements

  now the break tag is sort of a special tag in the sense that

  - you're allowed to skip the closing tag as there is no content

  so just angle brackets

  and even this forward slash is optional
  the prettier formatter we are using does add the forward slash

  so when you format the document
  you're going to see this self-closing break tag

  if we save the file refresh
  you can see that our last paragraph is now split across three lines

  first line then html encounters a break tag

  so second line
  a break tag again

  and then the third line

- > horizontal rule element

  now while we're on this topic of
  separation of content and self-closing tags

  another noteworthy element is the
  horizontal rule

  the tag is hr

  which is again self closing

  i've added an hr tag in between the
  paragraph elements

  ```html
  <body>
    <p>This is a paragraph</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
      Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
      molestiae dolores in odio laudantium ipsa praesentium?
    </p>
    <hr />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
      <br />
      blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
      <br />
      voluptatum magni officiis incidunt ad sit optio! In?
    </p>
  </body>
  ```

  if i refresh the browser

  you can see a horizontal rule is drawn across the page and separates the two
  paragraphs

  generally spacing is sufficient to
  separate two paragraphs

  but it is worth knowing about the horizontal rule as well next
