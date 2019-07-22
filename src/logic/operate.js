import Big from 'big-js'
function operate(numberOne, numberTwo, operation){
  
  switch(operation){
    case '+':
      add(numberOne, numberTwo)
      break
      case '-':
        subtract(numberOne, numberTwo)
        break
      case '/':
        divide(numberOne, numberTwo)
        break
      case 'x':
        multiply(numberOne, numberTwo)
        break
      case '%':
        percentage(numberOne, numberTwo)
        break
      default:
        break
      
  }

}

function add (numberOne, numberTwo){
  return new Big(numberOne).plus(numberTwo).toString()
}
function subtract (numberOne, numberTwo){
  return new Big(numberOne).minus(numberTwo).toString()
}

function multiply (numberOne, numberTwo){
  return new Big(numberOne).times(numberTwo).toString()
}

function divide (numberOne, numberTwo){
  return new Big(numberOne).div(numberTwo).toString()
}
function percentage (numberOne, numberTwo){
  return new Big(numberOne).div(100).times(numberTwo).toString()
}


export default operate