import React from 'react'
import  '../input/inputcard.css'

const InputCard = () => {
  return (
    <div>
        <input class='input' type='text' placeholder='Write Todo...'/>
        <button class = 'btn' onClick={(e)=>e.preventDefault()}>Add</button>
    </div>
  )
}

export default InputCard