# DesignSystemCSS

- 1. > Variables

- > in `base/_variables.scss` , add comments variables matching those in the figma design system

- delete the red color variable

```scss _variables.scss
/*=============================================
                Variables
=============================================*/

/**
 * TABLE OF CONTENTS
 *
 *
 * TYPOGRAPHY
 *
 * Font families............The fonts used in the design system.
 * Heading sizes............Font sizing for page headings
 * Sizes....................Font sizing for body text, paragraphs, inputs
 * Font weights.............Font weights
 * 
 * COLORS
 *
 * Primary color............These are the main brand colors. They will be used the most
 * Secondary color..........These are the secondary brand colors.
 * Neutral colors...........White and black, gray scale, secondary colors.
 * Utility colors...........Other colors to represent states: info, warning, success, etc.
 * 
 *
 *
 * BREAKPOINTS
 *
 * Breakpoints..............Global responsive breakpoints definitions.
 *
 *
 * SPACING
 *
 * Spacing..................Global fixed set of spacing variables
 */

/*=============================================
 =                Typography                  =
 =============================================*/

/* Font families */

/* 1) The [Montserrat] font. We'll use this for headings mostly. 
      [https://fonts.google.com/specimen/Montserrat]*/

$montserrat: 'Montserrat', sans-serif;

/* 2) The [raleway] font. We'll use this for the body text.
      [https://fonts.google.com/specimen/Raleway] */

$raleway: 'Raleway', 'HelveticaNeue', 'Helvetica', sans-serif;

/* Heading font sizes */

$h-1: 6rem; // 60px
$h-2: 5rem; // 50px
$h-3: 4rem; // 40px
$h-4: 3rem; // 30px
$h-5: 2.4rem; // 24px
$h-6: 2rem; // 20px

/* Font sizes */

$fs-xs: 1.2rem; // 12px
$fs-sm: 1.4rem; // 14px
$fs-base: 1.6rem; // 16px
$fs-lg: 1.8rem; // 18px
$fs-xl: 2.4rem; // 24px

/* Font weights */

$fw-light: 300;
$fw-regular: 400;
$fw-medium: 500;
$fw-semibold: 600;
$fw-bold: 700;
$fw-extrabold: 800;
$fw-black: 900;

/*=====  End of Typography  ======*/

/*=============================================
=                  Colors                     =
=============================================*/

/* Primary color */

$primary: #9e6883;
$primary-light: #c39caf;
$primary-dark: #5b3b4b;

/* Secondary color */

$secondary: #587cb4;
$secondary-light: #97b3cc;
$secondary-dark: #324462;

/* Text colors */

$text-dark: #1d1f22;
$text-gray: #bebfc4;
$text-light: #f2f2f2;

/* Gray Scale Colors */

$black: #000000;
$gray-dark: #767676;
$gray: #e0e0e0;
$gray-light: #f2f2f2;
$white: #ffff;

/* Utility colors */

$red: #d12727;
$red-light: #f5c4c6;

$blue: #0468db;
$blue-light: #b4d2f4;

$yellow: #ffb800;
$yellow-light: #f3d483;

$green: #3c8505;
$green-light: #acd091;

/*=====  End of Colors  ======*/

/*=============================================
=            Breakpoints                      =
=============================================*/

$bk-md: 76.8rem; // 768px
$bk-lg: 102.4rem; //1024px
$bk-xl: 128rem; //1280px

/*=====  End of Breakpoints  ======*/

/*=============================================
=            Spacing                          =
=============================================*/

//  0px
$sp-none: 0rem;

//  4px
$sp-xxxs: 0.4rem;

//  8px
$sp-xxs: 0.8rem;

// 12px
$sp-xs: 1.2rem;

// 16px
$sp-sm: 1.6rem;

// 24px
$sp-md: 2.4rem;

// 32px
$sp-lg: 3.2rem;

// 48px
$sp-xl: 4.8rem;

// 72px
$sp-xxl: 7.2rem;

// 96px
$sp-xxxl: 9.6rem;

/*=====  End of Spacing  ======*/

/*=============================================
=                  Shadows                    =
=============================================*/

$shadow-0: 0px 0px 0px rgba(0, 0, 0, 0.2);
$shadow-1: 0px 2px 1px rgba(0, 0, 0, 0.2);
$shadow-2: 0px 3px 1px rgba(0, 0, 0, 0.2);
$shadow-3: 0px 3px 3px rgba(0, 0, 0, 0.2);
$shadow-4: 0px 2px 4px rgba(0, 0, 0, 0.2);
$shadow-5: 0px 3px 5px rgba(0, 0, 0, 0.2);
$shadow-6: 0px 3px 6px rgba(0, 0, 0, 0.2);
$shadow-7: 0px 4px 5px rgba(0, 0, 0, 0.2);
$shadow-8: 0px 5px 5px rgba(0, 0, 0, 0.2);
$shadow-9: 0px 5px 6px rgba(0, 0, 0, 0.2);
$shadow-10: 0px 6px 6px rgba(0, 0, 0, 0.2);
$shadow-11: 0px 6px 7px rgba(0, 0, 0, 0.2);
$shadow-12: 0px 6px 8px rgba(0, 0, 0, 0.2);
$shadow-13: 0px 7px 8px rgba(0, 0, 0, 0.2);
$shadow-14: 0px 7px 9px rgba(0, 0, 0, 0.2);
$shadow-15: 0px 8px 9px rgba(0, 0, 0, 0.2);
$shadow-16: 0px 8px 10px rgba(0, 0, 0, 0.2);
$shadow-17: 0px 8px 11px rgba(0, 0, 0, 0.2);
$shadow-18: 0px 9px 11px rgba(0, 0, 0, 0.2);
$shadow-19: 0px 9px 12px rgba(0, 0, 0, 0.2);
$shadow-20: 0px 9px 13px rgba(0, 0, 0, 0.2);
$shadow-21: 0px 10px 13px rgba(0, 0, 0, 0.2);
$shadow-22: 0px 10px 14px rgba(0, 0, 0, 0.2);
$shadow-23: 0px 11px 14px rgba(0, 0, 0, 0.2);
$shadow-24: 0px 11px 15px rgba(0, 0, 0, 0.2);

/*=====  End of Shadows  ======*/
```

- 2. > CSS reset

- > in `base/_global.scss` add a css reset using the universal selector

- delete the body css rules

```css
/* css reset */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

/* root font size - (100% = 16px) - (62.5% = 10px)*/
html {
  font-size: 62.5%;
}

/* project-wide font definitions */
body {
  font-family: $montserrat;
  font-weight: $fw-regular;
  line-height: 1.7;
  color: $text-dark;

  box-sizing: border-box;
}
```

- 3. > comment out `TestJsFeature.js` and `TestReactComponent.jsx` and `App.js`

```js
// class TestJsFeature {
//   constructor() {
//     alert('Testing from MobileMenu.')
//   }
// }

// export default TestJsFeature
```

```jsx
// import React from 'react'

// function TestReactComponent() {
//   return (
//     <div>
//       <h2>This is the Test React Component</h2>
//       <p>React is great!</p>
//     </div>
//   )
// }

// export default TestReactComponent
```

```js
import '../styles/styles.scss'
// import TestJsFeature from './modules/TestJsFeature'
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import TestReactComponent from './modules/TestReactComponent.jsx'

// let testJsFeature = new TestJsFeature()

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<TestReactComponent />)

// if (module.hot) {
//   module.hot.accept()
// }
```

- 4. > import the google fonts

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
    </style>

    <title>Document</title>
  </head>
  <body>
    <h1>This is a test!</h1>
    <!-- div for React commented out  -->
    <!-- <div id="root"></div>-->
  </body>
</html>
```
