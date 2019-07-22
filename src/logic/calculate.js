import operate from './operate'


function calculate({ total, next, operation }, buttonName){
  if (buttonName === '+'){
    return total + next
  }
  if (buttonName === '-'){
    return total - next
  }
  if (buttonName === 'X'){
    return total * next
  }
  if (buttonName === '/'){
    return total / next
  }
  

}

export default calculate