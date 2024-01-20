import React, { useReducer, useState } from "react";
import counterReducer from "./reducer";

const Display = () => {


  const [state, dispatch] = useReducer(counterReducer, { count: 0 });


  return (
    <div>

      <p>Counter value - {state.count}</p>
     
      <button onClick={() => dispatch({type:'INCREASE', payload:10})}  >increase</button>
      <button  onClick={() => dispatch({type:'DECREASE', payload:1})} >decrease</button>

    </div>
  );
};


export default Display;


