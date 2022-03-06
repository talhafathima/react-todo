import React from "react";
function Todo(props){
    return(
        <div className="task-list">
                <label className="todo" id={props.id} >{props.name}</label>
                <button type="button" className="btn" data-testid="deleteTask" onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>


    )
}
export default Todo;