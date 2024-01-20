import React, { useEffect, useReducer, useRef, useState } from "react";





const Display = () => {


  const [buttonState,setButtonState] = useState()


  useEffect(()=>{


    
  },[buttonState])


  return (
    <div>
      <button onClick={()=>setButtonState(true)}> send message</button>
    </div>
  )

}




const App = () => {

  const [toggle,setToggle] = useState(true)


    
  return (
    <div>
  {toggle && <Display/>}

  <button onClick={()=>setToggle(!toggle)}>toggle</button>
  </div>

  )

}

export default App;
