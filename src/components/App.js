import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import Calculate from '../logic/calculate'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      total: '0',
      next: '0',
      operation: '',
      showResult: false
    }
  }

  handleClick (buttonName) {
    console.log(buttonName)
    this.setState(Calculate(this.state, buttonName))
  }

  render () {
    return (
      <div>
        <h1>Calculator</h1>
        <Display result={this.state.next}/>
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    )
  }
}
export default App
