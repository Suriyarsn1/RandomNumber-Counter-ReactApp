import { useState } from "react";
function Counter(){
 
    var[count,setCount]=useState(0)
    function Increment()
    {
        setCount(count+1)
    }
    function Decrement(){
        
        setCount(count-1)
    }
    function Reset(){
        setCount(0);
    }


    return(
        <> <div class="container">
        <div class="container-props">
            <h1>Counter</h1>
          <div class="props">
                <button onClick={Increment} >Increment</button>
            </div>
            <div class="props">
                <button onClick={Decrement} >Decrement</button>
            </div>
            <div class="props">
                <button onClick={Reset} >Reset</button>
            </div>
            <div class="result-container">
            <div  style={{color: "blueviolet"}}> Count Your Touches : {count}{Reset}</div>
                
            </div>
        </div>
    </div>
        </>
    )
}
export default Counter;