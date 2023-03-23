import React from 'react'
import stylecss from "./memo.module.css"
import {useMemo, useState} from 'react';

 function Memo() {
 const [count,setCount] =useState(0);
  const [item , setItem] =useState(10);
  const multiCountMemo = useMemo(function multicount(){
    console.log("multiCount")
    return count*5
  },[count])

  return (
    <div className={stylecss.container}>
    <h1>use memo hook in react</h1>
    <h2>Count :{count}</h2>
    <h2>item:{item}</h2>
    <h2>{multiCountMemo}</h2>

    <button  className='' onClick={()=>setCount(count+1)}>update count</button>
    <button onClick={()=>setItem(item*10)}>update item</button>
    </div>
  )
}

export default Memo;
