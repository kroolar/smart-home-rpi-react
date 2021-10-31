import React from 'react'
import { Icon, Toggle } from '../../components'

const Device = ({
  device: {
    icon,
    id,
    name,
    state
  },
  update
}) =>  (
  <div className={`home__device home__device--${state}`}>
    <div className="home__device-content">
      <Icon
        className="home__device-icon"
        type={icon}
      />

      <Toggle
        onChange={() => update(id, { state: !state })}
        value={state}
      />
    </div>

    <p className="home__device-name">
      {name}
    </p>
  </div>
)

export default Device
