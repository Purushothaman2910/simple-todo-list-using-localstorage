import React, { useState } from 'react'
import {useTodo} from '../context/index'

function TodoItem({todo}) {
  let [editable , setEditable] = useState(false)
  let { updateTodo ,deleteTodo ,toggleComplete } = useTodo()
  let [value ,setValue] = useState(todo.todo)
  function handleUpdate(){
    if( editable && !todo.completed ){
      updateTodo( todo.id , {todo : value , completed : todo.completed } )
      setEditable(false)
    }else{
      if(todo.completed) {
        return setEditable(false)
      }else{
        return setEditable(true)
      }      
    }
  }
  return (
    <div className={`text-3xl gap-4 flex p-4 ${(todo.completed)?'bg-green-600':'bg-red-500 '} items-center justify-center rounded-md duration-300`}>
      <input type="checkbox" onChange = {() => toggleComplete(todo.id)} checked = {todo.completed}/>
      <input type="text" 
      className='p-1 outline-none rounded-lg'
      value={value || ''}
      readOnly = {!editable }
      onChange={(e) => setValue(e.target.value)}
      />
      <button 
      onClick={() => handleUpdate() } 
      className='p-1  bg-yellow-500 rounded-lg'
      >
        {(editable && !todo.completed)?"save":"edit"}
      </button>
      <button
      onClick={()=>deleteTodo(todo.id)}
      className='p-1  bg-yellow-500 rounded-lg'
      >
       Delete 
      </button>
    </div>
  )
}

export default TodoItem