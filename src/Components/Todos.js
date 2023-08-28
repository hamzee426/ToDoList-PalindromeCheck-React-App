import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

  let myStyle = {
    minHeight:"76.4vh",
    display:"block"
  }

  return (
    <>
    <div className='container my-3' style={myStyle}>
      {props.todos.length === 0 ? 
      <h4 className='text-center'>No Todos to Display</h4>
      :
      props.todos.map((items)=>{
        return <TodoItem todos={items} key={items.sno} onDelete={props.onDelete}/>
        
    })
      }
    </div>
    </>
  )
}
