import React, {useState} from "react";
function Todo(){
    const[task,setTask]=useState([]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addtask(){

    }
    function deleteTask(index){

    }
    function moveTaskup(index){

    }
    function moveTaskdown(index){

    }


    return(
        <>
        <div className="todolist">
            <h1>TO DO LIST</h1>
        </div>
        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="addbtn" onClick={addtask}>Add</button>
        </div>
        </>
    )
}
export default Todo;