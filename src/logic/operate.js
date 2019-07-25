import Big from 'big.js'
function operate (numberOne, numberTwo, operation) {
  switch (operation) {
    case '+':
      return add(numberOne, numberTwo)
    case '-':
      return subtract(numberOne, numberTwo)
    case '/':
      if (numberTwo === '0') return 'what?....'
      return divide(numberOne, numberTwo)
    case 'x':
      return multiply(numberOne, numberTwo)
    case '%':
      return percentage(numberOne, numberTwo)
    default:
      break
  }
}

function add (numberOne, numberTwo) {
  return  Big (numberOne).plus(numberTwo).toString()
}
function subtract (numberOne, numberTwo) {
  return  Big (numberOne).minus(numberTwo).toString()
}

function multiply (numberOne, numberTwo) {
  return  Big(numberOne).times(numberTwo).toString()
}

function divide (numberOne, numberTwo) {
  return  Big (numberOne).div(numberTwo).toString()
}
function percentage (numberOne, numberTwo) {
  return  Big (numberOne).div(100).times(numberTwo).toString()
}
export default operate
