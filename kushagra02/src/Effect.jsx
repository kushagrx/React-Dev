import { useState,useEffect } from "react";
import React from "react";

function Effect(){

    const [count,setCount]=useState(0);

    function addCount(){
        setCount(c=>c+1);
    }

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        </>
    )
}

export default Effect;