import './App.css';
import { useState } from  'react';
import { Task } from './Task';

function App() { 

  const [todoList,setTodoList]=useState([])
  const [newTask, setNewTask]=useState("")

  const handleChange=(event) =>{
    setNewTask(event.target.value)
  };
  const addTask=()=>{
    const task={
      id:todoList.length===0 ? 1 : todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false,
    };
    const newTodoList=[...todoList,task];
    setTodoList(newTodoList)
  };

  const deleteTask=(id) =>{
    const newTodoList=todoList.filter((task)=>{
      if(task.id===id){
        return false
      }
      else{
        return true
      }
    });
    setTodoList(newTodoList)
  };
  const completeTask=(id) =>{
    setTodoList(
      todoList.map((task) =>{
        if (task.id===id){
          return {...task, completed:true};
        }
        else{
          return task
        }
      })
    )
  };
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>
          Add task
        </button> 

      </div>
      <div className='list'>
        {todoList.map((task)=>{
          return (
            <Task taskName={task.taskName} id={task.id} completed={task.completed} completeTask={completeTask} deleteTask={deleteTask}/>
          )
        })}

      </div>
      
    </div>
  );
}

export default App;
