import React, { useState } from 'react'
import { Icon, Label } from '../../components'

const Select = ({
  className,
  label,
  value,
  options,
  onChange,
  errors = []
}) => {
  const [isOpen, open] = useState(false)

  const handleChange = (option) => {
    onChange(option)
    open(false)
  }

  return (
    <div className={`select ${isOpen && 'select--open'} ${errors.length && 'select--error'} ${className}`}>
      <Label className="mb-1" text={label} />

      <div onClick={() => open(!isOpen)} className="select__field">
        <p>{value.name}</p>
        <Icon className="select__arrow" type="arrowDown" />
      </div>

      {errors.map((error, key) => (
        <div key={key} className="input__error">
          {error}
        </div>
      ))}

      {isOpen && <div className="select__options">
        {!options.length && (
          <div className="select__no-options">
            No options
          </div>
        )}
  
        {options.map((option, key) => (
          <div
            className="select__option"
            key={key}
            onClick={() => handleChange(option)}
          >
            {option.name}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Select
