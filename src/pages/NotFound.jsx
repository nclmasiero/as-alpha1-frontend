import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-[#1B1F20] to-[#181610] w-screen h-screen">
      <NavBar />

      <div className="mx-auto text-center my-[10%] text-slate-100">
        <h1 className="text-[7rem] mb-[2rem] font-bold tracking-wider">Oops O.o</h1>
        <h3 className="text-[1.8rem] mb-[6rem] uppercase font-thin tracking-tight">This page doesn't seem to exist (yet?)</h3>
        <a href="/home" className="text-[1.3rem] underline underline-offset-2 hover:text-[1.5rem] hover:text-[#808FAD] transition-all duration-300">Go Back</a>
      </div>
    </div>
  )
}

export default NotFound