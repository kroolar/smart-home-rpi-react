import React from 'react'
import { Icon } from '..'
import { Link } from 'react-router-dom'

const Box = ({ children, title, action }) => (
  <div className="box">
    <div className="box__header">
      <div className="box__title">
        {title}
      </div>

      <Link className="box__action" to={action}>
        <Icon type="plus" />
      </Link>
    </div>

    {children}
  </div>
)

export default Box
