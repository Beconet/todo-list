import { useState } from 'react'
import './app.css'

function App() {
  const [todoList , setTodoList] = useState('');
  const [todoArray , setTodoArray] = useState([]);

  const handleInputValue = (e) =>{
    setTodoList(e.target.value);
  }
  const addTask = () => {
    if(todoList != ""){
      setTodoArray([...todoArray,todoList]);
      setTodoList('');
    }
  }
  const removeTask = (taskToRemove) => {
    const updatedTodoArray = todoArray.filter(task => task !== taskToRemove);
    setTodoArray(updatedTodoArray);
  }
  console.log(todoList)
  console.log(todoArray);
  return (
      <>
      <div className='container'>
        <div className='container_box'>
      <h1>To-Do List</h1>
      <div>
        <input type="text" placeholder='type here' onChange={handleInputValue} value={todoList}/>
        <button onClick={addTask}> Add Task</button>
      </div>
    
    <div>
      <ul>
        {todoArray.map((todo,index)=>{
         return(
          <li key={index}>{todo} <button  onClick={() => removeTask(todo)} value={todo} >remove</button></li>
         )
        })}
      </ul>
    </div>
    </div>
    </div>
      </>
  )
}

export default App
