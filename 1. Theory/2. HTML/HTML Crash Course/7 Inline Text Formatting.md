# inline text formatting


- > the strong tag

  html provides a few elements to format text in a certain way

  the first one is the strong tag which is used to add importance to the text

  in our paragraph we can wrap any text with the strong tag

  so strong opening and strong closing

  save the file refresh

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        dolor, sit amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit optio! In?
      </p>
    </body>
  </html>
  ```

  you can see such content
  being displayed in bold to the user

  you can mark any text that the user
  should not miss when reading the content

- > the emphasis tag

  similarly the next tag is the emphasis tag and is used to stress on certain words

  so opening tag is em and let's wrap the next two words

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit optio! In?
      </p>
    </body>
  </html>
  ```

  in webpages emphasized text is italicized as you can see here with the next two
  words

- > avoid tags with no semantic meaning

  now you could substitute strong
  with b tag for bold and emphasis tag with i tags for italics

  refresh and the display remains the same

  however these tags do not carry any
  semantic meaning and is not good for a search engine

  and from a screen reader point of view
  which reads out the text for people with visual impairment

  so make sure you stick to strong
  and emphasis tags

- > the small tag

  the next tag is a small tag which is
  used to define smaller text

  so small opening and closing

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        blanditiis distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>
    </body>
  </html>
  ```

  if you have find print in your web page you can use small tag and it will appear
  small as you can see

- > the mark tag

  the next tag is the mark tag which is
  used to highlight text

  so opening `mark` tag
  closing

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        <mark>blanditiis</mark>
        distinctio beatae aperiam repudiandae velit laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>
    </body>
  </html>
  ```

  and this will highlight text similar to
  highlighting text in a book

- > the delete tag

  if you want to indicate strikethrough
  the tag to use is the delete tag

  so wrap with `del`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        <mark>blanditiis</mark>
        <del>distinctio beatae</del>
        aperiam repudiandae velit laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>
    </body>
  </html>
  ```

  refresh and you can see the strikethrough

  this tag can be used to showcase
  intentional correction for example

- > the insert tag

  if you need to `underline` text you can
  use the insert tag

  so `ins`
  opening tag closing tag

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        <mark>blanditiis</mark>
        <del>distinctio beatae</del>
        <ins>aperiam repudiandae velit</ins>
        laborum eligendi dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>
    </body>
  </html>
  ```

  refresh
  and we have underlined text

- > the sub tag

  last but not the least
  you can use the sub tag
  for subscripts

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        <mark>blanditiis</mark>
        <del>distinctio beatae</del>
        <ins>aperiam repudiandae velit</ins>
        <sub>laborum eligendi</sub>
        dolore asperiores
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>
    </body>
  </html>
  ```

- > the sup tag

  and the sup tag for superscripts

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Crash Course</title>
    </head>
    <body>
      <h1>Hading 1</h1>
      <h2>Hading 2</h2>
      <h3>Hading 3</h3>
      <h4>Hading 4</h4>
      <h5>Hading 5</h5>
      <h6>Hading 6</h6>

      <p>This is a paragraph</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur autem unde sed.
        Doloremque, quae quo doloribus quia ipsum sapiente officiis repellat tenetur eligendi
        molestiae dolores in odio laudantium ipsa praesentium?
      </p>
      <hr />
      <p>
        <strong>Lorem ipsum</strong>
        <em>dolor, sit</em>
        amet consectetur adipisicing elit. Deserunt ex dolores, doloribus
        <br />
        <mark>blanditiis</mark>
        <del>distinctio beatae</del>
        <ins>aperiam repudiandae velit</ins>
        <sub>laborum eligendi</sub>
        <sup>dolore asperiores</sup>
        <br />
        voluptatum magni officiis incidunt ad sit
        <small>optio! In?</small>
      </p>

      

    </body>
  </html>
  ```

  refresh and you can see the subscript and the superscript
  as you can see html provides good support for formatting text the way you
  want to
