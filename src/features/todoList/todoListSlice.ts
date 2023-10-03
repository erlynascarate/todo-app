import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: crypto.randomUUID(),
        name: 'Complete online JavaScript course',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Jog around the park 3x',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: '10 minutes meditation',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Read for 1 hour',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Pick up groceries',
        checked: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'Complete Todo App on Frontend Mentor',
        checked: false,
    },
]

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: crypto.randomUUID(),
                name: action.payload,
                checked: false,
            }

            state.unshift(newTodo)
        },
        removeTodo: (state, action) => {
            const id = action.payload

            const foundTodo = state.find((todo) => todo.id === id)

            if (foundTodo) {
                const index = state.indexOf(foundTodo)

                state.splice(index, 1)
            }
        },
        check: (state, action) => {
            const id = action.payload

            const foundTodo = state.find((todo) => todo.id === id)

            if (foundTodo) {
                foundTodo.checked = !foundTodo.checked
            }
        },
        clearCompleted: (state) => {
            return state.filter((todo) => todo.checked === false)
        },
    },
})

export const { addTodo, removeTodo, check, clearCompleted } =
    todoListSlice.actions

export default todoListSlice.reducer
