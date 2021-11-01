import React, { useState } from 'react'
import { Input, Select, Button, Icon } from '../../components'
import { useQuery } from '../../query'

const New = () => {
  const [name, setName] = useState('')
  const [gpio, setGpio] = useState({ name: '', value: ''})
  const [icon, setIcon] = useState({ name: '', value: ''})
  const [room, setRoom] = useState({ name: '', value: ''})

  const { create, errors, loading } = useQuery('devices')
  const { data:rooms } = useQuery('rooms')

  const gpios = [1, 2, 3, 4, 5, 6]

  const icons = [
    { name: 'Light',       type: 'light' },
    { name: 'TV',          type: 'tv' },
    { name: 'Fan',         type: 'fan' },
    { name: 'Fire',        type: 'fire' },
    { name: 'Water',       type: 'water' },
    { name: 'Plug',        type: 'plug' },
    { name: 'Bolt',        type: 'bolt' },
    { name: 'Video',       type: 'video' },
    { name: 'Bell',        type: 'bell' },
    { name: 'Solar Panel', type: 'solarPanel' }
  ]

  const roomsOptions = rooms.map(({ id, name }) => ({ name, value: id }))
  const gpioOptions = gpios.map(gpio => ({ name: gpio, value: gpio }))
  const iconOptions = icons.map(({ name, type }) => {
    const v = (
      <div className="flex">
        <div className="w-4 text-center">
          <Icon type={type} />
        </div>
        {name}
      </div>
    )

    return { name: v, value: type }
  })
  
  const handleCreate = () => {
    const data = {
      gpio: gpio.value,
      icon: icon.value,
      name,
      room_id: room.value,
    }

    const redirect = { url: '/devices', text: 'New device create' }

    create(data, redirect)
  }
  
  return (
    <div className="device-form">
      <h1 className="device-form__title">
        New Device
      </h1>

      <img
        alt="device"
        className="device-form__illustration"
        src="../illustrations/device.svg"
      />

      <Input
        className="mb-2"
        label="Name"
        value={name}
        onChange={setName}
        errors={errors.name}
      />

      <Select
        className="mb-2"
        label="Icon"
        options={iconOptions}
        value={icon}
        onChange={setIcon}
        errors={errors?.icon}
      />

      <Select
        className="mb-2"
        label="Room"
        options={roomsOptions}
        value={room}
        onChange={setRoom}
        errors={errors?.room}
      />

      <Select
        className="mb-6"
        label="GPIO"
        options={gpioOptions}
        value={gpio}
        onChange={setGpio}
        errors={errors?.gpio}
      />

      <Button
        onClick={handleCreate}
        loading={loading}
        text="Create"
      />
    </div>
  )
}

export default New
