import React from 'react'
import Left from './Left'
import Right from './Right'

const Pagecontent = (props) => {
  return (
    <div className='flex gap-10 pt-5 pb-20 h-[90vh]  px-18'>
        <Left/>
        <Right users={props.users}/>

    </div>
  )
}

export default Pagecontent