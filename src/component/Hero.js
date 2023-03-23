import React from 'react'
import {MdOutlineMore} from "react-icons/md"
import { motion } from 'framer-motion'
import { fadeIn, Parent } from '../utils/motion'

const Hero = () => (
  <>
    <motion.div 
    variants={Parent}
    initial="hidden"
    whileInView="show"
    viewport={{once:false,amount:0.25}}
    className='wrapper d-flex justify-content-center'>
        <a className='anchor' id='home'></a>

      <motion.div 
      variants={fadeIn('right',"tween",0.2,1)}
      className='hero-text '>
        <h2 className='hero-heading'>Full Stack developer</h2>
        <p>Beginner</p>
        <p className='hero-paragraph'>As an trained programmer with the knowledge of <b>MERN stack</b>, I am dedicated to delivering high-quality, efficient, and innovative software solutions. With a passion for problem-solving and a strong analytical mindset</p>       
         <a href='#' className='hero-icon'><MdOutlineMore /></a>
        <p className='hero-paragraph1'> I am skilled in developing and implementing complex systems that meet business needs and exceed user expectations. As a team player, I thrive in collaborative environments and enjoy sharing my knowledge and learning from my peers. I also have a habit of easy learning and adoption to any environment provided by profession.</p>
       
      </motion.div>
      
      <motion.div 
      variants={fadeIn('up','tween',0.3,1)}
      className='hero-img  '>
        <motion.img 
        variants={fadeIn('up','tween',0.5,1.5 )}
        src='/images/self.png' className='hero2-img'></motion.img>
      </motion.div>
      
    </motion.div>
  </>
)

export default Hero