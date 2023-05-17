// document.body.children[1].children[0].href = 'https://google.com'

// console.dir(document)
// alert()
// window.alert()

let anchorElement = document.getElementById('external-link')
anchorElement.href = 'https://google.com'

anchorElement = document.querySelector('p a') // a { color: red;}
anchorElement.href = 'https://academind.com'

// ************************************************

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let headingOneElement = document.body.children[0]
headingOneElement = document.body.firstElementChild

console.dir(headingOneElement)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.log(headingOneElement.parentElement)
console.dir(headingOneElement.parentElement)

//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)

console.log(headingOneElement.parentElement.children[1])
console.dir(headingOneElement.nextElementSibling)

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

headingOneElement = document.getElementById('heading-one')
console.log(headingOneElement)
console.dir(headingOneElement)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let secondParagraphElement = document.querySelector('.second-paragraph')
console.log(secondParagraphElement)
console.dir(secondParagraphElement)

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

// secondParagraphElement.innerHTML = 'new text'
secondParagraphElement.textContent = 'new text'

// **************************************************

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a')
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'This leads to Google!'

// 2. Get access to the parent element that should hold the new element.

let firstParagraph = document.querySelector('p')

// 3. insert the new element into the parent element content

firstParagraph.append(newAnchorElement)

// REMOVE ELEMENTS
// 1. Select the element that should be removed

let firstH1Element = document.querySelector('h1')

// 2. Remove it!

// firstH1Element.remove()
firstH1Element.parentElement.removeChild(firstH1Element) //for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph)

// innerHTML

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>'
