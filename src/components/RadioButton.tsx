import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hide, show } from '../features/table-actions/tableActionSlice'
import { RootState } from '../store'

type RadioButtonProps = {
  value: number
}

const RadioButton = (props: RadioButtonProps) => {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const assignmentId = useSelector(
    (state: RootState) => state.tableAction.assignmentId
  )

  // Observa cambios en assignmentId
  useEffect(() => {
    if (assignmentId === props.value) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [assignmentId, props.value])

  const handleClick = (event: any) => {
    if (checked) {
      setChecked(false)
      dispatch(hide())

      return
    }

    setChecked(true)
    dispatch(show(props.value))
  }

  return (
    <input type="radio" value={props.value} checked={props.value === assignmentId} onClick={handleClick}/>
  );
}

export default RadioButton