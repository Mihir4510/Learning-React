import React, { useState } from 'react'

const Batchupdate = () => {

    const [num, setnum] = useState(90)
    
    const btnclicked = () => {
        // here the no increase to one at a time 
        // setnum(num + 1)
        // setnum(num + 1)
        // setnum(num + 1)
        setnum(prev=>(prev+1))
         setnum(prev=>(prev+1))
          setnum(prev=>(prev+1))
    }

    return (
        <div>
            <h2>{num}</h2>
            <button onClick={btnclicked}>CLICK HERE</button>
        </div>
    )
}

export default Batchupdate