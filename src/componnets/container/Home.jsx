import React, { useContext } from 'react'

import Sidebar1 from '../sidebar/Sidebar1'
import Sidebar2 from '../sidebar/Sidebar2'
import { globaldata } from '../contextApi/context'
import HeroSection from '../Herosection.jsx/HeroSection'
import Topices from '../sidebar/Topices'



const Home = () => {
  const {menu, setmenu}=useContext(globaldata)
  return (
    <>
      <div className="container">
            <div className="navbar">
                {
                  menu ?   <img src="https://cdn-icons-png.flaticon.com/128/2099/2099192.png" onClick={()=>setmenu(!menu)} alt="" />
                :   
                <img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png" onClick={()=>setmenu(!menu)} alt="" />
                }
                <span>Front-End Developer Interview Questions and Answers</span>
                <button>Sign in</button>
            </div>
            <HeroSection/>
            <Topices/>
            <div className="body">
                <Sidebar1/>
                <Sidebar2/>
            </div>
            
      </div>
    </>
  )
}

export default Home
