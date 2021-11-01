import React from 'react'
import { Label } from '../'

const Input = ({
  label,
  onChange,
  value,
  className,
  errors = []
}) => (
  <div className={`input ${errors.length && 'input--errors'} ${className}`}>
    <Label className="mb-10" text={label} />

    <input
      className="input__field"
      onChange={e => onChange(e.target.value)}
      value={value}
    />

    {errors.map((error, key) => <div key={key} className="input__error">{error}</div>)}
  </div>
)

export default Input
