import React from 'react'

const Hero = ({toggleLoginPopup}) => {
  return (
    <>
    <main>
        <div className=' w-full h-screen flex flex-col justify-center
         items-center'>
            <h1 className=' md:w-[550px] text-center font-dancing
             text-6xl font-semibold text-white
              mix-blend-difference'>Adopt the pace of nature.</h1>
            <p className=' mix-blend-difference text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <button
           onClick={() => toggleLoginPopup(true)}
            className=' btn mt-3'>Join Now</button>
        </div>
    </main>      
    </>
  )
}

export default Hero
