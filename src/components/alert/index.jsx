import React from 'react'
import { Icon } from '..'

const Alert = ({ text }) => {
  if (!text) return null

  return (
    <div className="alert">
      <Icon
        className="alert__icon"
        type="checkmark"
      />

      <p className="alert__text">
        {text}
      </p>
    </div>
  )
}

export default Alert
