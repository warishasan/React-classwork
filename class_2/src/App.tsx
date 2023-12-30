import React, { useState } from "react";

function Cup({ guest }:{guest:number}) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

 function App() {
  return (
    <div>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </div>
  );
}


export default App;
