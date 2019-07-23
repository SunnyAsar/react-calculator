import React from 'react'
import Button from './Button'
const grey = 'rgb(224, 224, 224)'
function ButtonPanel (props) {
  return (
    <div id='button-panel'>
      <div className="row">
        <Button name='AC' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='+/-' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='%'color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='/' clickHandler={buttonName => props.clickHandler(buttonName)}/>
      </div>
      <div className="row">
        <Button name='7' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='8' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='9' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='x' clickHandler={buttonName => props.clickHandler(buttonName)}/>
      </div>
      <div className="row">
        <Button name='4' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='5' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='6' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='-' clickHandler={buttonName => props.clickHandler(buttonName)} />
      </div>
      <div className="row">
        <Button name='1' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='2' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='3' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='+' clickHandler={buttonName => props.clickHandler(buttonName)}/>
      </div>
      <div className="row">
        <Button name='0' wide color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='.' color={grey} clickHandler={buttonName => props.clickHandler(buttonName)}/>
        <Button name='=' clickHandler={buttonName => props.clickHandler(buttonName)}/>
      </div>
    </div>
  )
}

export default ButtonPanel
