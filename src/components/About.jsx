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
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
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
I'm passionate problem solver and coding enthusiast and currently I'm  3rd-year BTech student with a strong foundation in programming languages such as JavaScript, C, C++, Python, and expertise in web development using Node.js, React.js, HTML, CSS, Bootstrap, and Tailwind CSS. My proficiency extends to database management with MongoDB, SQL, and MySQL, as well as Firebase integration. I am dedicated to creating dynamic and user-friendly web applications, reflecting my commitment to software development and problem-solving.
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