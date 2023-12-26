import { useState } from "react";
import DisplayComponent from './Display'

function App() {

  const myState = useState(0) 

  let myStateValue = myState[0]
  let changeMyState = myState[1]

  console.log('rerender app component')

  return (
   
    <div>
      <p>current Number - {myStateValue}</p>
      <button onClick={()=> changeMyState(myStateValue+20)}>increase number</button>
      <button onClick={()=> changeMyState(myStateValue-20)}>decrease number</button>

      <DisplayComponent counterValue={myStateValue}    />
      <DisplayComponent counterValue={myStateValue}  />
      <DisplayComponent counterValue={myStateValue}  />
      <DisplayComponent counterValue={myStateValue}  />
      <DisplayComponent counterValue={myStateValue}  />
      <DisplayComponent counterValue={myStateValue}  />
      <DisplayComponent counterValue={myStateValue}  />


    </div>
  )
 
}

export default App;
