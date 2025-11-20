import { useState } from "react";
import ProgressTracker from "./Component/ProgressTracker";
import Taskform from "./Component/Taskform";
import Tasklist from "./Component/Tasklist";

export default function App() {
  const[tasks, setTasks] = useState([]);
  const addTask = (task)=>{
    setTasks(task);
  }
  return(
    <div>
      <header>
        <h1>TaskGuru</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist/>
      <ProgressTracker/>
      <button>Clear Tasks</button>
    </div>
  )
}