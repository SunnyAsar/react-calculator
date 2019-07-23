import operate from './operate'

function calculate ({ total, next, operation, showResult }, buttonName) {
  switch (buttonName) {
    case 'AC':
      total = '0'
      next = '0'
      operation = ''
      showResult = false
      break
    case '=':
      showResult = true
      total = operation ? operate(total, next, operation) : next
      next = total
      operation = ''
      if (total === 'Error') total = '0'
      break
    case '+/-':
      showResult = true
      total = invertValue(total)
      next = total
      operation = ''
      break
    case '/':
    case 'x':
    case '-':
    case '+':
    case '%':
      showResult = true
      total = operation ? operate(total, next, operation) : next
      next = total
      operation = buttonName
      if (total === 'Error') {
        total = '0'
        operation = ''
      }
      break
    default:
      next = showResult ? buttonName : concatStringNumbers(next, buttonName)
      showResult = false
      break
  }
  return { total, next, operation, showResult }
}

function concatStringNumbers (base, added) {
  const elements = (base + added).split('')
  if (added === '.' && base.split('').includes(added)) {
    return base
  }
  if (elements[0] === '0' && elements.length > 1) {
    elements.shift()
  }
  return elements.join('')
}

function invertValue (value) {
  const digits = value.split('')
  if (digits[0] === '-') {
    digits.shift()
  } else {
    digits.unshift('-')
  }
  return digits.join('')
}

export default calculate
