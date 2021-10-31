import React from 'react'
import { Icon } from '../../components'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const currentLocation = useLocation().pathname

  const items = [
    {
      active: currentLocation == '/',
      icon: 'home',
      href: '/'
    },
    {
      active: currentLocation.includes('/devices'),
      icon: 'device',
      href: '/devices'
    },
    {
      active: currentLocation.includes('/rooms'),
      icon: 'room',
      href: '/rooms',
    }
  ]

  return (
    <div className="nav">
      {items.map(({ icon:type, href, active }) => (
        <Link className="nav__link" to={href} key={type}>
          <Icon
            className={`nav__icon ${active && 'nav__icon--active'}`}
            type={type}
          />
        </Link>
      ))}
    </div>
  )
}


export default Nav
