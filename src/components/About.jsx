import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn ,textVariant} from '../utils/motion'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);




const About = () => {
  return (
    <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText} >Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>

  </motion.div>

<motion.p variants={fadeIn("","",0.1,1)}
 className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
>
I'm passionate problem solver and coding enthusiast and currently I'm B.tech 3rd year student. With a strong foundation in coding and problem-solving, coupled with my expertise in technologies such as Node.js, JavaScript, MongoDB, React.js, HTML, CSS, and Tailwind CSS, I'm well-equipped to create robust and engaging web applications. Let's work together to bring your idea to life !!!
</motion.p>

<div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>



    </>
  )
}

export default SectionWrapper(About, "about")