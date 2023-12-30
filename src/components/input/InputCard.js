import React, { useState } from 'react'
import  '../input/inputcard.css'
import { useTodo } from '../../context/TodoContext'

const 
InputCard = () => {
    const [todo,settodo] = useState("")
    const {addTodo} = useTodo();

    const add = (e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({id:Date.now(),todo:todo,iscompleted:false}) 
        settodo("");
    }

  return (
    <div>
        <input value={todo} onChange={(e)=>settodo(e.target.value)} class='input' type='text' placeholder='Write Todo...'/>
        <button class = 'btn' onClick={add}>Add</button>
    </div>
  )
}

export default InputCard