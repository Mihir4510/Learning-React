import React, { useState } from "react";

const App = () => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log("form submitted by",title);

    settitle('')
  };

const [title, settitle] = useState('')

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col gap-3"
        >
          <input
            className="bg-amber-500 w-fit p-2 text-black border-2"
            type="text"
            placeholder="Enter Your Name"
            value={title}
            onChange={(e)=>{settitle(e.target.value);
           
            

            }}
          />
          <button className="bg-amber-500 w-fit p-2 text-black border-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
