import React, { useState } from 'react'

const AlphaLogin = () => {
  const [alphaKey, setAlphaKey] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (event) => {
    setAlphaKey(event.target.value);
  }

  const send = () => {
    fetch("http://localhost:3000/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({alphaKey: alphaKey}),
      credentials: "include",
    }).then(
      (res) => res.json()
    ).then(
      (res) => {
        if (res.result == "allow") window.location.replace("/play");
        else {
          setShowError(true);
          setTimeout(() => setShowError(false), 3000)
        }
      }
    );
  }

  return (
    <>
      <div className="w-[35%] mt-[8rem] mx-auto p-5 rounded-[1rem] ring-slate-100/25 ring-[2px] flex items-center gap-5 bg-slate-100/5">
          <input onChange={handleChange} className="text-center w-[80%] mx-auto text-slate-100 text-[2rem] font-thin bg-slate-100/10 ring-[2px] ring-slate-100/25 rounded-md outline-none hover:scale-[102%] focus:scale-[104%] focus:placeholder:text-transparent transition-all duration-300" type="text" placeholder="Paste your alpha key here"></input>
          <a onClick={send} className="cursor-pointer ml-auto px-6 text-slate-100 text-[2rem] rounded-md bg-[#808FAD]/30 hover:bg-[#808FAD]/60 hover:scale-[105%] ring-[2px] ring-slate-100/40 transition-all duration-300">Play</a>
      </div>
      {showError ? <p className="text-center text-red-500 text-[2rem] mt-[1rem] hover:scale-[105%] cursor-default transition-all duration-300">This key is not valid!</p> : null}
    </>
  )
}

export default AlphaLogin