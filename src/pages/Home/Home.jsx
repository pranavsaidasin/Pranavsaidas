import React from 'react'
import { Navbar } from '../../components/Navbar'
import { ProfileCard } from '../../components/profileCard'
import { Awards } from '../../components/awards'
import { GifPlayer } from '../../components/gifPlayer'
import gifOne from "../../assets/IMG_0285.gif";
import gifTwo from "../../assets/dis_port.gif";
import dpImg from "../../assets/cp.png";
import cpImg from "../../assets/dp.png";

export const Home = () => {
  return (
    <div className="container max-w-custom 2xl:max-w-2xl 4k:max-w-4k mx-auto px-[1.8rem] md:px-[1rem]">
      <Navbar/>
      <ProfileCard/>
      <Awards/>
      <div className='flex flex-col md:flex-row py-[1.1rem] 4k:pt-[3.75rem] 4k:gap-[2.5rem] gap-[1.1rem]'>
       <GifPlayer path='/designer' image={dpImg} gif={gifTwo}/>
       <GifPlayer path='/colourist' image={cpImg} gif={gifOne}/>
      </div>
    </div>
  )
}
