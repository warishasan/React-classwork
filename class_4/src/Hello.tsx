import React, { useContext, useReducer, useState } from "react";
import counterReducer from "./reducer";
import {context,updateContext} from './context'

const Hello = () => {

  const value = useContext(context)
  const setValue = useContext(updateContext)

  return (
    <div>
        <p>{value.count}</p>
        <button onClick={()=>setValue({type:'INCREASE', payload:10})}>++</button>
    </div>
  );
};


export default Hello;


