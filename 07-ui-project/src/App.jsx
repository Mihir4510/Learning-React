import React from 'react'
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const App = () => {
  const users =[
    {
      img:'https://plus.unsplash.com/premium_photo-1731355900491-beebf2bea6dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Dedicated professionals delivering innovative solutions that drive measurable growth and long-term business success.',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1721871762391-f685a92cc8fd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Experienced team building scalable digital products focused on performance, reliability, and user satisfaction',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1584438772583-54e5d2219ca8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Committed experts transforming ideas into impactful solutions through strategy, technology, and collaboration.',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>

      <Section2 />
    </div>
  )
}

export default App
