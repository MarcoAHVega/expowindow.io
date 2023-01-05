# styling

- > there are a couple of options to style react components

  all right next we're going to learn the basics of styling and css when it comes
  to react

  there are a couple of options to style react components

  - the first one is regular css style sheets

  - the second one is inline styling

  - third we have css modules

  - fourth we can use css in js libraries which work really well with react

  in this crash course we're going to cover the first three approaches

  learning a css in js library is a separate series in itself and i'll point you in the right direction towards the end of this video

- > using regular css style sheets

  all right let's start with the first approach using regular css style sheets

  back in vs code within the components folder

  - i'm going to create a new file called `Stylesheet.js`

  within the file i'm going to create a function component

  export const stylesheet, and this is equal to an arrow function

  in the jsx i'm going to return an h1 tag
  that says stylesheets

  ```js
  export const Stylesheet = () => {
    return <h1>Stylesheets</h1>
  }
  ```

  - i will also include the file in app
    component

  - and make sure to import it from dot slash components slash style sheet

  ```js

  ```

  - now to specify the css for this component i'm going to create a new file
    called myStyles.css

  - i'm going to add it within the components folder

  - within the file i'm going to create a class primary
    where color is set to orange

  ```css
  .primary {
    color: orange;
  }
  ```

  now to be able to use this class in our
  component we have to import it so at the top
  import dot slash my styles dot css

  ```js
  import './myStyles.css'

  export const Stylesheet = () => {
    return <h1>Stylesheets</h1>
  }
  ```

  now on the h1 tag we can specify the class using the class
  name attribute

  class name is equal to primary

  ```js
  import './myStyles.css'

  export const Stylesheet = () => {
    return <h1 className='primary'>Stylesheets</h1>
  }
  ```

  if we save the file and take a look at
  the browser the text should appear in orange

  so this is the regular css stylesheets approach to styling a react component

- > inline styling

  next we have inline styling

  - i'm going to create a new file called `Inline.js`

  - and create a new function component

  - within the return statement i will add a new heading that says inline

  ```js
  export const Inline = () => {
    return <h1>Inline</h1>
  }
  ```

  now let's style this heading

  in react inline styles are not specified as a string instead they are specified with an object whose key is the camel cased version of the style name

  - for example i can create a new object called heading

  and add a property

  font size 72 pixels

  color blue

  ```js
  export const Inline = () => {
    const heading = {
      fontSize: '72px',
      color: 'blue',
    }

    return <h1>Inline</h1>
  }
  ```

  the key is the css property name but as you can notice it has to be camel cased

  the value is specified as a string

  if you want to specify additional css properties add a comma and then list the next property

  now to apply this style we make use of the style attribute

  to the style attribute we assign heading

  ```js
  export const Inline = () => {
    const heading = {
      fontSize: '72px',
      color: 'blue',
    }

    return <h1 style={heading}>Inline</h1>
  }
  ```

  if we include this component in app component
  making sure we import the component at the top

  ```js

  ```

  and head back to the browser

  you should see the text in line with the styling applied

  so create an object and apply it to the style attribute

  inline styling as you can see is pretty
  straightforward

- > css modules

  finally let's talk about the third
  approach which is css modules

  for css modules there is a file naming
  convention with create react app

  the file name must be suffixed with .module.css

  for example let me create two style
  sheets in the source folder

  if `appStyles.css` is a regular style sheet `appStyles.module.css` is a css module style sheet

  in the regular style sheet i'm going to add a class error with color set to red

  ```css
  .error {
    color: red;
  }
  ```

  in the module style sheet i'm going to add a class success
  color set to green

  ```css
  .success {
    color: green;
  }
  ```

  in the app component i'm going to import both the files

  import dot slash app styles dot css

  and import styles from dot slash app styles dot module dot css

  ```js
  import './appStyles.css'
  import styles from './appStyles.module.css'
  ```

  you can see there is a difference in how we import a module style sheet

  now to use the error class from the regular style sheet i can add an h1 tag
  that says error with the class name attribute set to
  error

  ```js
  <h1 className='error'>Error</h1>
  ```

  to use the class from the module style sheet
  we still use the class name attribute but this is going to be equal to styles
  dot success

  ```js
  <h1 className='error'>Error</h1>
  <h1 className={Styles.success}>Success</h1>
  ```

  so we access the class using the import statement variable name

  if you now take a look at the browser
  you should see both the classes being applied

- > one advantage of using css modules is that the classes are locally scoped by default

  for example if i copy the error heading into the inline component

  ```js
  export const Inline = () => {
    const heading = {
      fontSize: '72px',
      color: 'blue',
    }

    return <h1 className='error'>Error</h1>
  }
  ```

  you can see that it still works so the css kind of applies to every
  child component as well

  this might lead to css conflicts

  css modules on the other hand because you reference the class name
  using the styles variable they cannot be used in the children component

  if i copy the success heading and paste it in the inline component

  ```js
  export const Inline = () => {
    const heading = {
      fontSize: '72px',
      color: 'blue',
    }

    return <h1 className={Styles.success}>Success</h1>
  }
  ```

  you can see that the application does not compile it doesn't know what styles is

  you can't accidentally use a class that is defined for some other component

  but this is pretty much the basics of styling react components
