import { useState } from "react";
function Randomnumber(){
    var [val,setval]=useState("0")
    var change=event =>{
         setval(event.target.value)
    }
    var [random,setrandom]=useState(0)
    function gennum(){
        setrandom(Math.floor(Math.random()*val)+1)
    }
        return(
        <>
            <div class="container">
            <div class="container-props">
                <h1>Random Number Generator</h1>
                <div class="props">
                    <label for="maximum-number">Enter the Maxinmum Random Number:</label>
                    <input type="number" onChange={change}  name="maximum-number"></input>
                </div>
                <div class="props">
                    <button onClick={gennum}>Generate Number</button>
                </div>
                <div class="result-container">
                <div  style={{color: "blueviolet"}}> Given Range value: {val} </div>
                    <div  style={{color: "blueviolet"}}>Your Random Number:  {random}</div>
                </div>
            </div>
        </div>
        </>
        )
}
export default Randomnumber;