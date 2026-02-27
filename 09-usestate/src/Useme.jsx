import React, { useState } from 'react'

const Useme = () => {

  const [a, seta] = useState(0)

  function increasea(){
    seta(a+1)

  }
  function decreasea(){
    seta(a-1)

  }
  function jump(){
    seta(a+5)
  }
  return (
    <div>
      <h3 className='w-fit h-[30vh] bg-gray-400 p-20 rounded-full'>value of a is {a}</h3>

  <div className="flex gap-4 p-10">
  <button onClick={increasea} className="bg-blue-500 text-white px-4 py-2 rounded">
    Increase
  </button>
  <button onClick={decreasea} className="bg-red-500 text-white px-4 py-2 rounded">
    Decrease
  </button>
  <button onClick={jump} className="bg-green-500 text-white px-4 py-2 rounded ">
    Jump
  </button>
</div>
      
    </div>
  )
}

export default Useme