import React from 'react'
import './HeroSection.css';




const HeroSection = () => {
  return (
    <div className='Herocontainer'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <h1 className='h1'>ADVENTURE AWAITS</h1>
        <h1 className='h2'>What are you waiting for?</h1>
        <button className='btn1'>

            GET STARTED
        </button>

        <button className='btn2 '>
        
        WATCH TRAILER <i className='far fa-play-circle'/>

        </button>   
    </div>

    
   
   
  )
}

export default HeroSection
