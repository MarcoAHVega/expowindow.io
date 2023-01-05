# how to split our javascript up into multiple files

- > in the scripts folder, create a new sub folder named modules

```
scripts/
  modules/
```

- each New Feature we create using JavaScript should have its own new separate file in this modules folder.

- > in scripts/modules folder, create a new file named TestJsFeature.js`

```
scripts/
  modules/
    TestJsFeature.js
```

- > in the TestJsFeature.js file, add a class

- be sure to export this class
- add a constructor function
- and a test alert to make sure that everything is working correctly

```js
class TestJsFeature {
  constructor() {
    alert('Testing from MobileMenu.')
  }
}

export default TestJsFeature
```

- > in the App.js file, import in the TestJsFeature module

```js
import '../styles/styles.css'
import TestJsFeature from './modules/TestJsFeature'

if (module.hot) {
  module.hot.accept()
}
```

- > We also need to create a new object that uses this class as a blueprint.

- So on a new line let's say `new testJsFeature ()`

- and grab it in a variable (`But we begin with a lowercase t`)

```js
import '../styles/styles.css'
import TestJsFeature from './modules/TestJsFeature'

let testJsFeature = new TestJsFeature()

if (module.hot) {
  module.hot.accept()
}
```

- Now if we save this file over `in the browser we see that test alert message pop up`
