import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>
            Shivanshu 
              </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am <span className='text-[#915EFF]'>
            <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Full Stack Developer', 'Backend Developer','React Developer']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
              </span><br/> And Here is My Portfolio .
          </p>
         
        </div>
      </div>
      <ComputersCanvas/>

  

</section>
  )
}

export default Hero