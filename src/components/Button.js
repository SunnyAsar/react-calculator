import React from 'react'
import PropTypes from 'prop-types'

const default_color = 'rgb(249, 144, 77)'
function Button(props){
const style = {
  width: props.wide ? '50%' : '25%',
  background: props.color ? props.color :default_color
}
  return(
    <button style={style}>{props.name}</button>
  )
}

Button.prototype = {
name: PropTypes.String
}

export default Button