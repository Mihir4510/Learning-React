import React from "react";

const App = () => {
  function btnclicked() {
    console.log("button is clicked");
  }

  function inputchanging(val) {
    console.log(val);
  }

  return (
    <div className=" flex flex-col gap-20">
      <div className="bg-gray-300 w-fit">
        <button
          onMouseEnter={function onmouseenter() {
            console.log("mouse enter");
          }}
          onClick={btnclicked}
        >
          click here
        </button>
      </div>
      <div className="bg-red-300 w-fit">
        <input
          onChange={function (elem) {
            inputchanging(elem.target.value);
          }}
          type="text"
          placeholder="Enter Name"
        />
      </div>

      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX);
        }}
        className="bg-blue-300 w-[30vh] h-[40vh]"
      >
        hi
      </div>
    </div>
  );
};

export default App;
