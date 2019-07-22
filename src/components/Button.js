import React from 'react'
import PropTypes from 'prop-types'


function Button(props){
  return(
    <button>{props.name}</button>
  )
}
Button.defaultProps = {
  name: 'Button'
}

Button.prototype = {
name: PropTypes.String
}

export default Button