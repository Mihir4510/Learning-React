import React from 'react'
import Rightcard from './Rightcard'

const Right = (props) => {
  return (
    <div className=' w-2/3 h-full flex flex-nowrap gap-10 overflow-auto p-6 font-bold'>
      {props.users.map(function(elem,idx){

        return <Rightcard  key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
      
    </div>
  )
}

export default Right