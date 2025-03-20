import React, { useState } from "react";

const Theme = () => {
  const [mode, setMode] = useState(true);

  let handleThemeToggle = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`w-[100vw] h-[100vh] ${
        mode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-center pt-8">
        {mode ? "Light Theme" : "Dark Theme"}
      </h1>
      <button
        onClick={handleThemeToggle}
        className={`border ml-[160px] mt-[30px] p-2 rounded-2xl ${
          mode ? "bg-black text-white" : "bg-white text-black"
        } cursor-pointer`}
      >
        {mode ? "Change to Dark Theme" : "Change to Light Theme"}
      </button>
    </div>
  );
};

export default Theme;
