import React,{useState} from "react";

function Todolist(){
    const [tasks,setTasks]=useState(["Take a shower","Eat breakfast","Do coding"]);
    const [newtask,setNewtask]=useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){
        if(newtask.trim()!==""){
            setTasks(tasks=>[...tasks,newtask]);    /* ... is the spread operator and t is the updater fxn for tasks */
            setNewtask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);  /* _ because the element parameter is being ignored*/
        setTasks(updatedTasks);
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

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deletebutton" onClick={() => deleteTask(index)}>
                        Delete</button>
                        <button className="movebutton" onClick={() => moveTaskUp(index)}>
                        ☝️</button>
                        <button className="movebutton" onClick={() => moveTaskDown(index)}>
                        👇</button>
                    </li>
                ))}
            </ol>

        </div>

    )
}
export default Todolist;