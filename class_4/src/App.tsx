import React, { useReducer, useState } from "react";
import Display from "./Display";
import counterReducer from "./reducer";
import {context,updateContext} from './context'
import Hello from "./Hello";

const App = () => {


  // const [counter,setCounter] = useState(0)

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });



  return (
    <div>
      
      <context.Provider value={state}>
      <updateContext.Provider value={dispatch}>
      <Hello/>
      </updateContext.Provider>
      </context.Provider>

    </div>
  );
};


export default App;


