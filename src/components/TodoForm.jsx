import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
  let {addTodo} = useTodo()
  let [value , setvalue] = useState()
  return (
    <form className='p-8 mt-7 mb-4 mx-7 w-full flex justify-center' >
      <div className='rounded-lg text-2xl w-fit p-0 overflow-hidden border-[2px] border-black/20'>
        <input 
          type="text" className='outline-none px-2 py-1' 
          onChange={(e) => setvalue(e.target.value)} 
          value={value || ''} 
        />
        <input 
          type="submit" 
          className='bg-green-900 px-2 py-1' 
          onClick={(e) => {e.preventDefault(); addTodo({todo : value ,completed : false}); setvalue('')}} 
          value="Add todo" 
        />
      </div>
        
    </form>
  )
}

export default TodoForm