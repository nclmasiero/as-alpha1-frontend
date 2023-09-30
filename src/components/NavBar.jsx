import React from 'react'

const NavButton = (props) => {
  return (
    <a href={props.link}
      className="mx-3 text-slate-100 hover:font-normal font-light rounded px-3 text-[1.5rem] transition-all duration-300"
    >
      {props.name}
    </a>
  )
}

const NavBar = () => {
  return (
    <div className="flex px-[10%] h-[5rem] items-center border-b-[1px] border-slate-100 border-opacity-10">

      <a href="/home" className="font-bold text-slate-100 tracking-wide text-[2rem] hover:text-[2.1rem] transition-all duration-300">Another Story</a>
      <p className="font-thin text-[1rem] text-slate-100 ml-10 bg-slate-100 bg-opacity-10 rounded px-3 animate-pulse cursor-default">ALPHA v2</p>

      <div className="ml-auto inline-block">
        <NavButton link="/home" name="Home" />
        <NavButton link="/plans" name="Plans" />
        <NavButton link="/about" name="About" />
        <NavButton link="/account" name="Account" />
      </div>

    </div>
  )
}

export default NavBar