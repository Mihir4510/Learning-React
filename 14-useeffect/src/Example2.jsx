import { useEffect, useInsertionEffect, useState } from "react";

const Example2 = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)


  function achanging(){
    console.log("a ki value change hogi");
    
  }
  function bchanging(){
    console.log("b ki value change hogi");
    
  }
  useEffect(function(){
    achanging()
    // console.log("useefect is runnning .......");
    
  },[a])

  useEffect(function(){
    bchanging()
  },[b])

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>change a</button>


      <button onClick={()=>{
        setb(b -1)
      }}> change b</button>

    </div>
  )
}

export default Example2