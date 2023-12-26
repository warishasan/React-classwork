
type propsType ={
counterValue:number
}

function Display(props:propsType) {

    console.log('rerender display component')

  return (
   
    <div>
        <p>My counter value - {props.counterValue}</p>
        
    </div>
  )
 
}

export default Display;
