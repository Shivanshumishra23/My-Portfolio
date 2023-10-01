import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [btn_text, setBtnText] = useState("Send Message");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  async function submitHandler(event) {
    let result;
    event.preventDefault();
    setBtnText(" Sending");
    setLoading(true);
    try {
      result = await emailjs.sendForm('service_s9rog6w', 'template_i4pog28', form.current, 'LEbtOV3d7OjrlmzsO');
      console.log(result);
    }
    catch (error) {
      console.log(error.text);
    }
    finally {
      setEmail(""); setMessage(""); setName(""); setSubject("");
      setBtnText("Send Message");
      setLoading(false);
    }

  }



  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn( "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form  ref={form} className='mt-12 flex flex-col gap-8' onSubmit={submitHandler}>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input name="username" onChange={(event) => setName(event.target.value)} value={username} autoComplete="off" type="text" id="name" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="What's your good name?" required />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input name="email" onChange={(event) => setEmail(event.target.value)} value={email} autoComplete="off" required type="email" id="email"   className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="What's your web address" /> 
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Subject</span>
            <input name="subject" onChange={(event) => setSubject(event.target.value)} value={subject} autoComplete="off" type="text" id="subject" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="Let us know how we can help you" required />
           
          </label>

      

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea name="message" onChange={(event) => setMessage(event.target.value)} value={message} autoComplete="off" id="message" rows="4" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="What you want to say?" required></textarea>
        
          </label>
       
          <div>
            <button disabled={loading} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0DDB94] sm:w-fit "><i className={`${(loading) ? 'fa fa-spinner fa-spin' : ''}`}></i>{btn_text}</button>
          </div>

        </form>


      </motion.div>

      <motion.div
        variants={slideIn("tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");