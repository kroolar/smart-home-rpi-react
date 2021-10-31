import React, { useState } from 'react'
import { Button, Input } from '../../components'
import { useQuery } from '../../query'

const New = () => {
  const { create, errors, loading } = useQuery('rooms')
  const [name, setName] = useState('')

  const handleCreate = () => {
    const body = { name }
    const redirect = { url: '/rooms', text: 'New room created'}

    create(body, redirect) 
  }

  return (
    <div className="device-form">
      <h1 className="device-form__title">
        New Room
      </h1>

      <img
        alt="rooms"
        className="mb-10"
        width="80%"
        src="../illustrations/room.svg"
      />

      <Input
        className="mb-4"
        errors={errors?.name}
        label="Name"
        onChange={setName}
        value={name}
      />

      <Button
        loading={loading}
        onClick={handleCreate}
        text="Create"
      />
    </div>
  )
}

export default New
