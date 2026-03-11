import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // API calling using the fetch

// normal function
//  async function getdata(){
//     const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')

//     const data = await res.json()
//     console.log(data);
    

//   }

  // arrow function

  // const getdata = async ()=>{
  //   const res= await fetch('https://jsonplaceholder.typicode.com/todos/7')
  //   const data = await res.json()
  //   console.log(data);

  // }

//  API calling useing the axious
const [data, setdata] = useState([])

const getdata = async()=>{

  const res= await axios.get('https://jsonplaceholder.typicode.com/todos')
  // console.log(res);
  setdata([res.data])
  
}

  return (
   
    <div>
  <button onClick={getdata}>Get Data</button>

  <div>
    {data.map((elem, idx) => {
      return <h3> hello</h3>;
    })}
  </div>
</div>
  )
}

export default App