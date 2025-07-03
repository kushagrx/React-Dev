import React, {useState} from "react";
function Component(){
    const [age,setAge] = useState(1);

    const incrementAge=()=>{
        setAge(a=>a+1);      //updater function with first letter of the variable, its a good practice
    }
    const decrementAge=()=>{
        setAge(age-1);
    }

    const [name,setName]= useState("Kushagra");
    const changeName=()=>{
        setName(`Hey there ${name}`);
    }

    return(<div>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment</button>
        <button onClick={decrementAge}>Decrement</button>
        <br></br>
        <p>Name: {name}</p>
        <button onClick={changeName}>Change the Name</button>
    </div>)
}
export default Component