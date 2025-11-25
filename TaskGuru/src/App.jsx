import { useEffect, useState } from "react";
import Taskform from "./Component/Taskform";
import Tasklist from "./Component/Tasklist";
import ProgressTracker from "./Component/ProgressTracker";
import './style.css';

export default function App() {
  const[tasks, setTasks] = useState([]);
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task)=>{
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = ()=> {
    setTasks([]);
  }
  return(
    <div className="App">
      <header id="me">
        <h1>TaskGuru</h1>
        <br />
        <p><i>Your friendly Task Manager</i></p>
        <br />
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}
       updateTask={updateTask}
        deleteTask={deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      {tasks.length>0 && (<button className="clear-btn"
      onClick={clearTasks}>Clear Tasks</button>)}
      
    </div>
  )
}