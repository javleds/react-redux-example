import React, { useState } from 'react'
import TableRow from './TableRow'
import TableActions from './TableActions'

const TableComponent = () => {
  const [records] = useState([
    {
      id: 1,
      name: 'Balbino',
    },
    {
      id: 2,
      name: 'Victor',
    },
    {
      id: 3,
      name: 'Carlos',
    },
    {
      id: 4,
      name: 'JuanP',
    },
  ])

  return (
    <>
      <TableActions />
      <table>
        <thead>
          <tr>
            <th>Check</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => <TableRow id={record.id} name={record.name} />)}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent