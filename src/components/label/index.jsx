import React from 'react'

const Label = ({ className, text }) => (
  <label className={`label ${className}`}>
    {text}
  </label>
)

export default Label
