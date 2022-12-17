# inline text formatting

- > the strong tag

  html provides a few elements to format text in a certain way

  the first one is the strong tag which is used to add importance to the text

  in our paragraph we can wrap any text with the strong tag

  so strong opening and strong closing

  save the file refresh

  ```html
  <!-- Text Formatting-->
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet consectetur adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque, totam
    odit dignissimos suscipit fugiat asperiores minus nulla, dolorem animi inventore odio vitae
    voluptas expedita.
  </p>
  ```

  you can see such content
  being displayed in bold to the user

  you can mark any text that the user
  should not miss when reading the content

- > the emphasis tag

  similarly the next tag is the emphasis tag and is used to stress on certain words

  so opening tag is em and let's wrap the next two words

  ```html
  <!-- Text Formatting-->
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque, totam odit dignissimos
    suscipit fugiat asperiores minus nulla, dolorem animi inventore odio vitae voluptas expedita.
  </p>
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
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque, totam odit dignissimos
    suscipit fugiat asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
  ```

  if you have find print in your web page you can use small tag and it will appear
  small as you can see

- > the mark tag

  the next tag is the mark tag which is
  used to highlight text

  so opening `mark` tag
  closing

  ```html
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque, totam odit dignissimos
    suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
  ```

  and this will highlight text similar to
  highlighting text in a book

- > the delete tag

  if you want to indicate strikethrough
  the tag to use is the delete tag

  so wrap with `del`

  ```html
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
    odit dignissimos suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
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
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
      <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
    odit dignissimos suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p> dignissimos suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
  ```

  refresh
  and we have underlined text

- > the sub tag

  last but not the least
  you can use the sub tag
  for subscripts

  ```html
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
      <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
    odit dignissimos suscipit
    <mark>fugiat</mark>
    asperiores <sub>minus</sub> nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p> dignissimos suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
  ```

- > the sup tag

  and the sup tag for superscripts

  ```html
  <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
      <p>
    Lorem ipsum,
    <strong>dolor</strong>
    sit amet
    <em>consectetur</em>
    adipisicing elit. In dolorem quaerat impedit. Consectetur ut atque,
    <del>totam</del>
    odit dignissimos suscipit
    <mark>fugiat</mark>
    asperiores <sub>minus</sub> <sup>nulla</sup>,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p> dignissimos suscipit
    <mark>fugiat</mark>
    asperiores minus nulla,
    <small>dolorem animi inventore odio vitae voluptas expedita.</small>
  </p>
  ```

  refresh and you can see the subscript and the superscript
  as you can see html provides good support for formatting text the way you
  want to
