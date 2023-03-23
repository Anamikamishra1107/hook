// import React from 'react'
import { useRef, useState } from "react";
//import styelcss from "./useref.module.css"

import React from 'react'

function Useref() {
    const refElement = useRef(null);
    const [name, setName] = useState("Anamika")
    console.log(refElement)
    function reset (){
        setName("")
        refElement.current.focus()
    }
    function handleInput(){
        refElement.current.styelcss.color= "blue"
        refElement.current.value= "prachi"
    }
    
  return (
    <div>
    <h1>useref</h1>
    <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    <button onClick={reset}>reset</button>
    <button onClick={handleInput}>handel input </button>

      
    </div>
  )
}

export default Useref;

