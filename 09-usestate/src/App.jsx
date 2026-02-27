import React, { useState } from 'react'
import Useme from './Useme'

import Objusetate from './Objusestate'
import Arrusestate from './arrusestate'
import Batchupdate from './Batchupdate'

const App = () => {


// let a =10;

// function changea(){
//   console.log(a);
//   a=30;
//   console.log(a);
// }

const [a, seta] = useState(9)
const [username, setusername] = useState("mihir")
function changea(){
  seta(30)
  setusername("payal")
}

  return (
    <div>
      <h1>value of a is {a} <br /> value of user is {username}</h1>
      <button onClick={changea}> click to change value</button>
      <Useme/>
      <Objusetate/>
      <Arrusestate/>
      <Batchupdate/>
    </div>
  )
}


export default App