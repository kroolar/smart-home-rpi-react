import React from 'react'

const Table = ({ headers, data }) => (
  <>
    <table className="table">
      <thead>
        <Headers headers={headers} />
      </thead>
      <tbody>
        {data.map((item, index) => <Row data={item} key={index} />)}
      </tbody>
    </table>

    {Boolean(!data.length) && (
      <div className="table__no-data">
        No data to display
      </div>
    )}
  </>
)

const Headers = ({ headers }) => (
  <tr className="table__headers">
    {headers.map((header, index) => (
      <th className="table__header" key={index}>
        {header}
      </th>
    ))}
  </tr>
)

const Row = ({ data }) => {
  return(
    <tr className="table__row">
      {data.map((item, key) => <Cell item={item} key={key} />)}
    </tr>
  )
}

const Cell = ({ item }) => <td className="table__cell">{item}</td>

export default Table
