import React from "react";

interface propType {
    children: React.ReactNode
    name?:string
}

function Display(props:propType) {

    
  return (
    <div>
        {props.children}
    </div>
  );
}



export default Display


