import InputCard from "./components/input/InputCard";
import Card from "./components/displayTodoCard/Card";

import './App.css'
import { useEffect, useState } from "react";
import { Todoprovider } from "./context/TodoContext";



function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((prev)=>[...prev,{...todo}])

  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))

  }

  const deletetodo = (id) =>{
    // console.log(id)
    setTodos((prev)=>(prev.filter((todo)=>todo.id!==id)))


  }


  const toggleComplete = (id) =>{
    console.log(id)
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,isCompleted:!prevTodo.isCompleted}:prevTodo))
  }


  

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos&&todos.length>1)
    {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    if(todos.length>0){
    localStorage.setItem("todos",JSON.stringify(todos));
    }

  }, [todos])

  

  
  





  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deletetodo,toggleComplete}}>
    <div className="App">
      <h1>Manage Your Todos</h1>
      <InputCard/>
      
      {
        
        todos.map((todo)=>(
          
          <div key={todo.id}>
            <Card todo ={todo}/>

            </div>
        ))
        
      }

      
    </div>
    </Todoprovider>
  );
}

export default App;
