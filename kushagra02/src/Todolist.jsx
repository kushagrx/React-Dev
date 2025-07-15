import React,{useState} from "react";

function Todolist(){
    const [tasks,setTasks]=useState([]);
    const [newtask,setNewtask]=useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <div className="todolist">
            <h1>Your To-Do List</h1>
            <div>
                <input type="text" placeholder="Enter a task" value={newtask} onChange={handleInputChange}/>
                <button className="addbutton" onClick={addTask}>Add Task</button>
            </div>
        </div>

    )
}
export default Todolist;