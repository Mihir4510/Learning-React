import React, { useState } from 'react'

const Arrusestate = () => {

const [num, setnum] = useState([10,20,30,40])

const btnclicked=()=>{
   const newnum =[...num]
   newnum[2]=1000;
   newnum.push(20,40)
   newnum.pop()
   setnum(newnum)

    

}
  return (
    <div>
        <h2>{num}</h2>
        <button onClick={btnclicked}>CLICK HERE</button>

    </div>
  )
}

export default Arrusestate