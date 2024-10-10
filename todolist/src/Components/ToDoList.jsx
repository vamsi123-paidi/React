import React from 'react'

const ToDoList = () => {
  return (
    <div>
        <h1>To - DO - List</h1>
        <input type='text' placeholder='Add your task here'></input>
        <button onSubmit={handleSubmit}>Add Task</button>
    </div>
  )
}

export default ToDoList
