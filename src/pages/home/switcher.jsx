import React from 'react'
import { Icon } from '../../components'

const Switcher = ({
  handlePrev,
  handleNext,
  roomName
}) => (
  <div className="home__switcher">
    <Icon
      className="home__switcher-arrow"
      onClick={handlePrev}
      type="arrowLeft"
    />

    <p className="home__switcher-name">
      {roomName}
    </p>

    <Icon
      className="home__switcher-arrow"
      onClick={handleNext}
      type="arrowRight"
    />
  </div>
)

export default Switcher
