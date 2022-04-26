import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const TableActions = () => {
  const showActions = useSelector(
    (state: RootState) => state.tableAction.showActions
  )

  const assignmentId = useSelector(
    (state: RootState) => state.tableAction.assignmentId
  )

  return showActions ? <h1>Table actions for {assignmentId}</h1> : <div></div>
}

export default TableActions