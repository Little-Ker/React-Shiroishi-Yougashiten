import React from 'react'
import PropTypes from 'prop-types'

function Arrow(props) {
  const { strokeColor, className } = props
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23">
      <path stroke={strokeColor} strokeMiterlimit="10" d="M13.18 0a11.084 11.084 0 0 0 11.084 11.083"></path><path stroke={strokeColor} strokeMiterlimit="10" d="M24.294 11.083A11.08 11.08 0 0 0 13.21 22.167"></path><path stroke={strokeColor} d="m24.295 11.083-24-.1"></path>
    </svg>
  )
}

Arrow.propTypes = {
  strokeColor: '',
  className: '',
}

Arrow.defaultProps = {
  strokeColor: '',
  className: '',
}

export default Arrow
