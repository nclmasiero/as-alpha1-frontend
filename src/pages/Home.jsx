import React from 'react'
import NavBar from '../components/NavBar'
import HomeAnimation from '../components/HomeAnimation';
import AlphaLogin from '../components/AlphaLogin';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="bg-[url(https://getwallpapers.com/wallpaper/full/2/e/2/1389410-fantasy-world-backgrounds-1920x1200-for-ios.jpg)] bg-cover bg-center w-screen h-[50rem]">
        <div className="bg-black/40 h-full w-full backdrop-blur-sm">
          <div className="bg-gradient-to-t from-[#1B1F20] via-transparent h-[100%] w-full">
          
            <NavBar />
            <HomeAnimation />
            <h1 className="text-center text-slate-100 mt-8 font-thin text-[2rem] tracking-tight">Enter the gateway to infinite adventures</h1>
            <AlphaLogin />
          
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home