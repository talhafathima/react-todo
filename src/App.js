import React, {useState} from "react";
import {nanoid} from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
function App(props) {
const [tasks, setTasks] = useState(props.tasks);
 function addTask(name){
  const task={id:nanoid(),name:name}
  setTasks([...tasks,task])
 }
 function deleteTask(id){
   const newtodolist=tasks.filter((task)=>id!==task.id)
   setTasks(newtodolist)
 }
 const todolist=tasks.map(task=><Todo id={task.id} name={task.name} deleteTask={deleteTask} />)
  return (
    <div className="App">
      <Form addTask={addTask}/>
      {todolist}
    </div>
  );
}

export default App;
