import React, {useState} from "react";
function Component(){
    const [age,setAge] = useState(0);

    const incrementAge=()=>{
        setAge(age+1);
    }

    const [name,setName]= useState("Kushagra");
    const changeName=()=>{
        setName(`Hey there ${name}`);
    }

    return(<div>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment</button>
        <br></br>
        <p>Name: {name}</p>
        <button onClick={changeName}>Change the Name</button>
    </div>)
}
export default Component