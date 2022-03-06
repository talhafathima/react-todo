import React , {useState} from "react";
function Form(props){
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if(name.length>0){
        props.addTask(name);
        }
        setName("");
      }
      function handleChange(e) {
        setName(e.target.value);
      }
    return(
        <div>
            <form  onSubmit={handleSubmit} >
             <div className="heading">TodoMatic</div>
             <label className="task-label">What are the tasks to be done?</label>
             <input type="text" className="input-task" value={name} onChange={handleChange} data-testid="taskToBeAdded" placeholder="Add a task"></input>
             <button className="btn" type="submit" data-testid="addTask" >Add Task</button>
            </form>
        </div>
    )
}
export default Form;