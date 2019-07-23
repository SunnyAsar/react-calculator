import operate from './operate'


function calculate ({ total, next, operation }, buttonName){

  const OPERATIONS = ['+','-','/','x','%','+/-']
  if(OPERATIONS.includes(buttonName)){
    total = operate(total,next,buttonName)
  }
  return total
}
export default calculate
