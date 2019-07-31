import React from 'react'
import Button from './Button'

const grey = 'rgb(224, 224, 224)'

const ButtonPanel = (props) => {
  const { clickHandler } = props
  return (
    <div id='button-panel'>
      <div className="row">
        <Button name='AC' color={grey} clickHandler={ clickHandler }/>
        <Button name='+/-' color={grey} clickHandler={ clickHandler }/>
        <Button name='%'color={grey} clickHandler={ clickHandler }/>
        <Button name='/' clickHandler={ clickHandler }/>
      </div>
      <div className="row">
        <Button name='7' color={grey} clickHandler={ clickHandler }/>
        <Button name='8' color={grey} clickHandler={ clickHandler }/>
        <Button name='9' color={grey} clickHandler={ clickHandler }/>
        <Button name='x' clickHandler={ clickHandler }/>
      </div>
      <div className="row">
        <Button name='4' color={grey} clickHandler={ clickHandler }/>
        <Button name='5' color={grey} clickHandler={ clickHandler }/>
        <Button name='6' color={grey} clickHandler={ clickHandler }/>
        <Button name='-' clickHandler={ clickHandler } />
      </div>
      <div className="row">
        <Button name='1' color={grey} clickHandler={ clickHandler }/>
        <Button name='2' color={grey} clickHandler={ clickHandler }/>
        <Button name='3' color={grey} clickHandler={ clickHandler }/>
        <Button name='+' clickHandler={ clickHandler }/>
      </div>
      <div className="row">
        <Button name='0' wide color={grey} clickHandler={ clickHandler }/>
        <Button name='.' color={grey} clickHandler={ clickHandler }/>
        <Button name='=' clickHandler={ clickHandler }/>
      </div>
    </div>
  )
}

export default ButtonPanel
