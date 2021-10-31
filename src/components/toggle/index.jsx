import React from 'react'

const Toggle = ({ onChange, value = true }) => (
  <div className={`toggle toggle--${value}`} onClick={onChange}>
    <div className="toggle__trigger" />

    <div className="toggle__label toggle__label--on">On</div>
    <div className="toggle__label toggle__label--off">Off</div>
  </div>
)

export default Toggle
