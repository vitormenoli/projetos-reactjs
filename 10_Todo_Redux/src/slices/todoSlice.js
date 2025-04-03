import { createSlice } from "@reduxjs/toolkit"

const loadTodosFromStorage = () => {
    const storedTodos = localStorage.getItem('todoList')
    return storedTodos ? JSON.parse(storedTodos) : []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        list: loadTodosFromStorage(),
        filter: 'all'
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: new Date().toISOString(),
                text: action.payload,
                completed: false
            }
            state.list.push(newTodo)
            localStorage.setItem('todoList', JSON.stringify(state.list))
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
                localStorage.setItem('todoList', JSON.stringify(state.list))
            }
        },
        removeTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todoList', JSON.stringify(state.list))
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.list.find((todo) => todo.id === id)
            if (todo) {
                todo.text = text
                localStorage.setItem('todoList', JSON.stringify(state.list))
            }
        },
        filterTodos: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTodo, toggleTodo, removeTodo, editTodo, filterTodos } = todoSlice.actions

export default todoSlice.reducer