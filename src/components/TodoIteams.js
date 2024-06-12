import React from 'react'

const TodoIteams = ({todo, onDelete}) => {
  return (
    <div>
      <h5>SrNo: {todo.sno}</h5>
      <h4>TITLE: {todo.title}</h4>
      <p>DES: {todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}
      >Delete</button>
    </div>
  )
}

export default TodoIteams
