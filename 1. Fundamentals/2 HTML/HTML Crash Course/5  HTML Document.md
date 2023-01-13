# HTML Document

- > `the structure of an html document`

- > the doctype tag

  we begin by informing the browser this document is an html document so angle brackets exclamation doctype html

  ```html
  <!DOCTYPE html>
  ```

  this will be the very first line of every html document you write

- > the html element

  next we're going to write our first html element which is the html element

  so angle brackets again html and when i close the angle brackets vscode automatically populates the closing tag

  ```html
  <!DOCTYPE html>
  <html></html>
  ```

  so we have an opening tag and a closing tag in between the two tags we specify the
  content

  now this html element wraps all the content and `is known as the root element`

- > the head and body elements

  within the html element we add two more elements the first one is the head element and the second is the body element

  ```html
  <!DOCTYPE html>
  <html>
    <head></head>
    <body></body>
  </html>
  ```

- > the head element

  the head element is where you want to add content you want included in the html page but shouldn't be presented to the user

  now that's a bit confusing so we will talk more about the head tag later on in the video

- > the title element

  but for now let's include one html element to understand how it works and that element is the title element

  which sets the title of the html page and appears in the browser tab

  so within the head tag add a title tag and the content is going to be html
  crash course

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body></body>
  </html>
  ```

- > the body element

  finally within the body tag we can
  specify the text from before `welcome to html`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      Welcome to HTML
    </body>
  </html>
  ```

- > auto formatting the document

  you can now press ctrl shift p and click on format document

  now if it prompts you select prettier as the code formatter

  you can also press alt shift f as the keyboard shortcut to format the document

  - `and this pretty much completes our very first html document`

  let's save the file head to the browser and refresh

  you can see the text welcome to html still being displayed

  if you look at the browser tab you can see html crash course which is the title of this web page it is also what is used to describe the page when you bookmark it

  and of course that corresponds to the content in the title tag

  - `so this is the basic html document structure that you'll need to keep in mind`

  - a document type

  - the enclosing html tag

  - the head tag for information that should not be presented to the user

  - and the body tag for the content that
    should be presented to the user

  with this structure in mind let us
  now focus on the different elements that we can use to structure the content
  within the body tag
