import React, { useEffect, useReducer, useRef, useState,memo,useMemo, useCallback } from "react";





// const App2 = memo(() => {
  
//   console.log('from app2')
//   return (
//     <div>
//       hello
//     </div>

//   )

// })


const Todos = memo(({ todos, addTodo }:{todos:string[],addTodo:()=>void}) => {
  console.log("child render");
  return (
    <>
      <h2>Waris's Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
})




const App = () => {


  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);



  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t:string[]) => [...t, "New Todo"]);
  // };


  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  
    
  return (
    <div>
     <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );

}

export default App;
