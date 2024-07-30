import React, {useState} from "react";

import Counter from "./Counter";

export default function App() {
  const [count,setCount] = useState(0);
  //let count = 0;

  const onClickAdd = (e) => {
    setCount(count+1)
    //return count+1;
   }
  
  const onClickSubstract = (e) => {
    setCount(count-1)
    //return count-1;
  }

  return (
    <div >
        
        
       <h1><Counter/> : {count} </h1>
       <button type="button" onClick={(e)=>{onClickAdd()}}>+</button>
        <br/>
        <button type="button" onClick={(e)=>{onClickSubstract()}}>-</button>
    
    </div>
  );
}
