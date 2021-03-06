import React from 'react'
import PropTypes from 'prop-types'

const defaultColor = 'rgb(249, 144, 77)'
function Button (props) {
  const style = {
    width: props.wide ? '50%' : '25%',
    background: props.color ? props.color : defaultColor
  }
  return (
    <button style={style} onClick={() => props.clickHandler(props.name)}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
}

Button.defaultProps = {
  wide: false,
  color: defaultColor
}

export default Button
