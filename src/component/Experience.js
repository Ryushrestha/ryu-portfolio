import React from 'react'
import { motion } from 'framer-motion'
import { workExperience } from '../data/data'
import { staggerChildren, textVariant } from '../utils/motion'

const Experience = () => {
  return (
    <>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='wrapper'>
        <a className='anchor' id='work'></a>
        <div className='exp-container'>
          <div className='exp-heading'>
            <h1> My Experience </h1>
          </div>
          <div className='experience'>
            {workExperience.map((exp, i) => {
              return (
                <motion.div
                  variants={textVariant}
                  className='exp' key={i}>
                  <div className='post col-3'>
                    <h2 className='post-heading'>{exp.Company}</h2>
                    <p className='post-time'>{exp.Time}</p>
                  </div>
                
                  <div className='role col-9'>
                    <h2 className='post-heading'>{exp.Position}</h2>
                    <p className='role-detail'>{exp.Detail}</p>
                  </div>
                </motion.div>
              )
            })}
            <div className='div-line'></div>

          </div>

        </div>
      </motion.div>
    </>
  )
}

export default Experience