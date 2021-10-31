import React, { useEffect, useState } from 'react'
import { Icon } from '../../components'
import { useQuery } from '../../query'
import Device from './device'
import NoData from './noData'
import Switcher from './switcher'

const Home = () => {
  const { data:devices, update } = useQuery('devices')
  const { data:rooms } = useQuery('rooms')

  const [currentRoomID, setCurrentRoomID] = useState(0)
  const [currentDevices, setCurrentDevices] = useState([])


  const handleCurrentDevices = () => {
    if (!rooms.length) return

    const newDevices = devices.filter(device => (
      device.room_id == rooms[currentRoomID].id
    ))

    setCurrentDevices(newDevices)
  }

  useEffect(() => handleCurrentDevices(), [currentRoomID, rooms, devices])

  const nextRoom = () => {
    const numberOfRooms = rooms.length

    if ((numberOfRooms - 1) == currentRoomID) setCurrentRoomID(0)
    else setCurrentRoomID(currentRoomID + 1)
  }

  const prevRoom = () => {
    const numberOfRooms = rooms.length

    if (currentRoomID == 0) setCurrentRoomID(numberOfRooms - 1)
    else setCurrentRoomID(currentRoomID - 1)
  }

  if (!devices.length) return <NoData />

  return (
    <div>
      <Switcher
        handlePrev={prevRoom}
        handleNext={nextRoom}
        roomName={rooms[currentRoomID]?.name}
      />

      <div className="home">
        {currentDevices.map(device => (
          <Device
            device={device}
            key={device.id}
            update={update}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
