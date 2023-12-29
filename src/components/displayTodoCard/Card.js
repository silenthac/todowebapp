import React from 'react'
import '../displayTodoCard/Card.css'

const Card = () => {

  return (
    <div className='card '>
        <input type='checkbox'/>
        <input class='input1' type='text' value="Learn DSA" readOnly ={true}/>
        <button  className='btn1'>🖊️</button>
        <button class='btn1'>❌</button>


    </div>
  )
}

export default Card