import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello Calculator</h1>
        <Display/>
        <ButtonPanel />

      </div>
    )
  }
}

export default App;
