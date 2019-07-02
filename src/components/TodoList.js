import React from 'react'
import Todo from './Todo'

const TodoList = ({tasks, remove}) => {
    const todoListMapped = tasks.map(task => {
        return <Todo item={task} removeItem={remove} key={task.id} />
    })
    return (
        <ul>
            {todoListMapped}
        </ul>
    )
}

export default TodoList