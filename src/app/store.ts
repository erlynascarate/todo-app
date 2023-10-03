import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from '../features/todoList/todoListSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        todoList: todoListReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
