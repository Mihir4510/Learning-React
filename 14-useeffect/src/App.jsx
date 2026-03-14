import React, { useEffect, useState } from 'react'
import Example2 from './Example2'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log("running.....")


  },[num2])
  function btnclicked(){
    setnum(num+1)
    
  }
  return (
    <div >
      <h1>Num 1 is {num}</h1>
       <h1>Num 2 is {num2}</h1>
      <button onClick={btnclicked}
      onDoubleClick={()=>{
        setnum2(num2+10)
      }}

      
      >click</button>
      


    <Example2/>
    </div>
  )
}

export default App