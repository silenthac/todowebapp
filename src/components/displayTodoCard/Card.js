import React, { useState } from 'react'
import '../displayTodoCard/Card.css'
import { useTodo } from '../../context/TodoContext'

const Card = ({todo}) => {
    const [isEditable,setEditable] =useState(false);
    const [msg,setmsg] =useState(todo.todo);
    const {updateTodo,deletetodo,toggleComplete} = useTodo()


    const editTodo =()=>{
        updateTodo(todo.id,{...todo,todo:msg})
        setEditable(false);
    }

    const togglecomp = ()=>{
        toggleComplete(todo.id)
    }

    console.log('TODO ',todo.isCompleted)
  return (
    <div className='card '>
        <input class='check' type='checkbox' checked = {todo.isCompleted} onChange={togglecomp}/>
        <input class={`input1 ${todo.isCompleted? `input2`: ``} `} type='text' value={msg} onChange={(e)=>setmsg(e.target.value)} readOnly ={!isEditable}/>
        <button onClick={()=>{if(todo.isCompleted)return 
           if(isEditable){
            editTodo();
           }
            else{
                setEditable((prev) =>!prev);

            
           }
        
        }} disabled ={todo.isCompleted} className='btn1'>{isEditable?'🖊️':'📂'}</button>
        <button onClick={()=>{deletetodo(todo.id)}} class='btn1'>❌</button>


    </div>
  )
}

export default Card