import { configureStore } from '@reduxjs/toolkit'
import tableActionSliceReducer from '../features/table-actions/tableActionSlice'

export const store = configureStore({
  reducer: {
    tableAction: tableActionSliceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch