import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faBolt,
  faCoffee,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faDoorOpen,
  faFan,
  faFire,
  faHome,
  faLightbulb,
  faPlug,
  faPlus,
  faQuestion,
  faSolarPanel,
  faTimes,
  faTrash,
  faTv,
  faVideo,
  faWater
} from '@fortawesome/free-solid-svg-icons'

const Icon = ({ className, type, onClick }) => {
  const icons = {
    arrowDown: faChevronDown,
    arrowLeft: faChevronLeft,
    arrowRight: faChevronRight,
    bell: faBell,
    bolt: faBolt,
    coffee: faCoffee,
    checkmark: faCheck,
    device: faPlug,
    fan: faFan,
    fire: faFire,
    home: faHome,
    light: faLightbulb,
    plug: faPlug,
    plus: faPlus,
    question: faQuestion,
    room: faDoorOpen,
    solarPanel: faSolarPanel,
    times: faTimes,
    trash: faTrash,
    tv: faTv,
    video: faVideo,
    water: faWater,
  }

  return (
    <FontAwesomeIcon
      className={className}
      onClick={onClick}
      icon={icons[type] || faQuestion}
    />
  )
}

export default Icon
