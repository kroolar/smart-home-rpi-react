import React from 'react'
import { useQuery } from '../../query'
import {
  Alert,
  Box,
  Icon,
  Table
} from '../../components'

const Devices = () => {
  const params = new URLSearchParams(window.location.search).get('success')

  const { data:devices, remove } = useQuery('devices')
  const { data:rooms } = useQuery('rooms')
  
  const tableData = devices.map(({
    icon,
    id,
    gpio,
    name,
    room_id,
    state
  }) => {
    const room = rooms.find(({ id }) => id === room_id)

    return (
      [
        <Icon type={icon} />,
        gpio,
        name,
        room?.name,
        <div className={`device__state device__state--${state}`} />,
        <Icon onClick={() => remove(id)} type="trash" />
      ]
    )
  })

  return (
    <div>
      <Box title="Devices" action="/devices/new">
        <Table
          data={tableData}
          headers={['Icon', 'GPIO', 'Name', 'Room', 'State']}
        />
      </Box>

      <Alert text={params} />
    </div>
  )
}

export default Devices
