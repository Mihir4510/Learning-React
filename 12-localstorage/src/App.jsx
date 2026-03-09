import React from 'react'

const App = () => {
  // // to clear
  // localStorage.clear();


  // // to push or set data in the local storage
  // localStorage.setItem('user','sarthak')
  

  // // to retrive the data to the local storage 
  // const user = localStorage.getItem('user')
  // console.log(user);

  // // to remove the data from the localstorage
  // localStorage.removeItem('user')
  
  // to store object convert it into the string using JASON.stringfy
  const userdetails ={
    username :'mihir',
    age:19,
    city:'indore'
  }

  localStorage.setItem('userdetails' ,JSON.stringify(userdetails))

  const user =JSON.parse(localStorage.getItem('userdetails'))
  console.log(user);
  
    
  return (
  
    <div>App</div>  
  )
}

export default App 