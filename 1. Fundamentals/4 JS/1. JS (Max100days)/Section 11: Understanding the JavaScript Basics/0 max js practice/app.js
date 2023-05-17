let age = 32
let userName = 'Max'
let hobbies = ['Sports', 'Cooking', 'Reading']
let job = {
  title: 'developer',
  place: 'New York',
  salary: 50000,
}

let totalAdultYears

function calculateAdultYears(userAge) {
  let result
  result = userAge - 18
  return result
}

totalAdultYears = calculateAdultYears(age)
alert(totalAdultYears)

age = 45
totalAdultYears = calculateAdultYears(age)

alert(totalAdultYears)

let person = {
  name: 'Max',
  greet() {
    alert('Hello!')
  },
}
