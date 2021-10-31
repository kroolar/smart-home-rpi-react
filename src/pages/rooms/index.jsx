import React from 'react'
import { useQuery } from '../../query'
import {
  Alert,
  Box,
  Icon,
  Table
} from '../../components'

const Rooms = () => {
  const { data:rooms, remove } = useQuery('rooms')
  const params = new URLSearchParams(window.location.search).get('success')

  const tableData = rooms.map(({ devices, id, name }) => {
    const icon = (
      <Icon
        className="text-gray-800"
        onClick={() => remove(id)}
        type="trash"
      />
    )

    return [name, devices.length, icon]
  })

  return (
    <div>
      <Box title="Rooms" action="/rooms/new">
        <Table
          data={tableData}
          headers={['Name', 'Devices', '']}
        />
      </Box>

      <Alert text={params} />
    </div>
  )
}

export default Rooms
