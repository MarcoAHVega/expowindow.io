const productNameInputElement = document.getElementById('product-name')
const remainingCharsElement = document.getElementById('remaining-chars')

//console.dir(productNameInputElement)
const maxAllowedChars = productNameInputElement.maxLength

function updateRemainingCharacters(event) {
  const enterText = event.target.value
  const enteredTextLength = enterText.length

  const remainingCharacters = maxAllowedChars - enteredTextLength

  remainingCharsElement.textContent = remainingCharacters
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)
