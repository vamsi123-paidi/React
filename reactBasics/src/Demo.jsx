import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Demo(props) {  
  const [count,setCount] = useState(0)
  const increment = ()=>{
    setCount(count + 1)
  }
  const decrement = ()=>{
    setCount(count - 1)
  }

    return (
        <div>
            <h3 class="text-center">Count :{count} </h3>
            <button onClick={increment} class="btn btn-primary">Increment</button>
            <button onClick={decrement} class="btn btn-warning" >Decrement</button>
        </div>
    )
  }
  
  export default Demo;