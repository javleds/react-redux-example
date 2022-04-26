import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TableActionState {
  showActions: boolean,
  assignmentId: number|null,
}

const initialState: TableActionState = {
  showActions: false,
  assignmentId: null,
}

export const tableActionSlice = createSlice({
  name: 'tableAction',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<number>) => {
      state.showActions = true
      state.assignmentId = action.payload
    },
    hide: (state) => {
      state.showActions = false
      state.assignmentId = null
    }
  }
})

export const { show, hide } = tableActionSlice.actions

export default tableActionSlice.reducer
