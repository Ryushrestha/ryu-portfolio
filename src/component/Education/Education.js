import React from 'react'
import EducationCard from './educationCard'
import {motion } from 'framer-motion'
import {FaUserGraduate,FaBook,FaSchool,FaGraduationCap} from 'react-icons/fa'
import { fadeIn, Parent } from '../../utils/motion'

const Education = () => {
  return (
    <>
    <motion.div 
variants={Parent}
initial="hidden"
whileInView="show"
viewport={{once:false,amount:0.25}}
    className='w-100   bg-secondary-subtle'>
    <h1 className='education-heading'>Education</h1>
    <div className='wrapper1 gap-3'>
    <a className='anchor' id='education'></a>
        <motion.div 
        variants={fadeIn('right',"tween",0.2,1)}
        className='cards'>
            <EducationCard
            className='card1'
            icon={FaGraduationCap}
            educationlevel='Master of science in Information Technology'
            academy='WestCliff University'
            />
            <EducationCard
            className='card2'
            icon={FaUserGraduate}
            educationlevel='Bachelor in Business Administration'
            academy='Kathmandu University'
            /> 
            <EducationCard
            className='card3'
            icon={FaBook}
            educationlevel='Higher Seondary Education Board'
            academy='United Academy'
            />
            <EducationCard
              
            className='card4'
            icon={FaSchool}
            educationlevel='School Level Certificate'
            academy='Rosebud School'
            ></EducationCard>
          </motion.div>
        <motion.div 
        variants={fadeIn('left',"tween",0.2,1)}
        className='education-description'>

            <p className='edu-paragraph mt-3'>As a recent graduate with BBA in marketing from Kathmandu University (CGPA 3.00), I have developed strong communication skills and gained the knowledge in management. These experience in LACM had taught about the operating system, which is adaptable to numerous business models.
            <br></br>  
            <br></br>
            With an arising interest in information technology, i have joined westcliff university for Msc.IT degree in Data science and AI. I can surely meet potential demands for learning IT skills with my easy adaptability and rapid learner qualities.</p>
        </motion.div>
    </div>
    </motion.div>
    </>
  )
}

export default Education