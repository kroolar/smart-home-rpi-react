import React from 'react'

const Button = ({
  children,
  className,
  loading,
  onClick,
  text
}) => {
  const loadingElement = (
    <div className="button__loading">
      <div className="button__dot" />
      <div className="button__dot" />
      <div className="button__dot" />
    </div>
  )

  const content = children || text

  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {loading ? loadingElement : content}
    </button>
  )
}

export default Button
