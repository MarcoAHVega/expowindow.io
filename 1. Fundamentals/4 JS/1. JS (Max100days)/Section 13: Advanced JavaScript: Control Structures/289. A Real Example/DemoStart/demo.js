const productNameInputElement = document.getElementById('product-name')
const remainingCharsElement = document.getElementById('remaining-chars')

//console.dir(productNameInputElement)
const maxAllowedChars = productNameInputElement.maxLength

function updateRemainingCharacters(event) {
  const enterText = event.target.value
  const enteredTextLength = enterText.length

  const remainingCharacters = maxAllowedChars - enteredTextLength

  remainingCharsElement.textContent = remainingCharacters

  if (remainingCharacters <= 10) {
    productNameInputElement.classList.add('warning')
    remainingCharsElement.classList.add('warning')
  } else {
    productNameInputElement.classList.remove('warning')
    remainingCharsElement.classList.remove('warning')
  }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters)
