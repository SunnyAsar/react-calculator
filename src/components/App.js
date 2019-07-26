import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import Calculate from '../logic/calculate'

class App extends Component {
    state = {
      total: '0',
      next: '0',
      operation: '',
      showResult: false
    }

    handleClick = (buttonName) => 
      this.setState(prevState => Calculate(prevState, buttonName))

  render () {
    return (
      <div>
        <h1>Calculator</h1>
        <Display result={this.state.next}/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }
}


export default App
