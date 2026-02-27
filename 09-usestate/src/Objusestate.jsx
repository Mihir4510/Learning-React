import React, { useState } from 'react'

const Objusetate = () => {


const [num, setnum] = useState( {users:'mihir',age:12} )
const btnclicked = ()=>{
    const newnum = {...num}
    newnum.users='payal'
    newnum.age=20
    setnum(newnum)
    
}
  return (
    <div>
        <h1>{num.users},{num.age}</h1>
        <button onClick={btnclicked}>click</button>

    </div>
  )
}

export default Objusetate