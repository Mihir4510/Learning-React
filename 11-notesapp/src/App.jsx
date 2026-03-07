import React, { useState } from "react";

const App = () => {

  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")

  const [task, settask] = useState([])

  const submithandle = (e) => {
    e.preventDefault();
    // console.log(title,details);
    

    const copytask=[...task];
    copytask.push({title,details})

    settask(copytask)
    // console.log(copytask);
    


    settitle('')
    setdetails('')

    
  };

  const deletenote =(idx)=>{
    // console.log("delete note");
    const copytask = [...task]
    copytask.splice(idx,1)

    settask(copytask)

    

  }
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submithandle(e);
        }}
        className=" p-10 lg:w-1/2 flex gap-5 flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>


        <input
          className="px-5 w-full font-medium py-2 outline-none border-2 rounded-2xl"
          type="text "
          placeholder="Enter your Notes"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
            
          }}
        />

        <textarea
          className="px-5 py-2 font-medium h-20 w-full items-start flex-row border-2 outline-none rounded-2xl"
          type="text"
          placeholder="Write Details Here"
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value)
          }}
        />

        <button className="bg-white active:bg-gray-300 text-black px-5 py-2 w-1/3 rounded-2xl">
          Add Note
        </button>
      </form>
      <div className="lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap  items-start justify-start gap-5 h-[90%] mt-5 overflow-auto">
          {task.map(function(elem, idx){
            return <div className="h-56 w-40 rounded-2xl p-4 text-black bg-cover bg-white flex flex-col ">
              
            <h3 className="leading-tight font-bold">{elem.title}</h3>
              <h3 className="leading-tight mt-2 font-medium text-gray-700">{elem.details}</h3>
              <div>
                <button onClick={()=>{
                  deletenote(idx)}} className="mt-auto bg-red-400 active:scale-95 text-white py-1 w-full font-bold rounded-2xl">Delete  </button>
              </div>

            </div>

          })}
        </div>
      </div>
    </div>
  );
};

export default App;
