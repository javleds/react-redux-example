import React from 'react'
import RadioButton from './RadioButton'

type TableRowComponentProps = {
  id: number,
  name: string
}

const TableRowComponent = (props: TableRowComponentProps) => {
  return (
    <tr>
      <td><RadioButton value={props.id} /></td>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
}

export default TableRowComponent