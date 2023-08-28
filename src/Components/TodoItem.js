import React from 'react'
import css from './items.module.css'

export const TodoItem = (props) => {
  let myStyle={
    width: "30rem",
    marginTop:"15px"
  }
  return (
    <>
      <div className="card" style={myStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.todos.title}</h5>
          <p className="card-text">{props.todos.desc}</p>
          <button className="btn btn-sm btn-danger" style={{ marginBottom: "0px"}} onClick={() => props.onDelete(props.todos)}>Delete</button>

        </div>
      </div>
    </>
  )
}
