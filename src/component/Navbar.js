import React from 'react'
import { useState } from 'react'
import {RiMenuFoldLine} from "react-icons/ri"
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../utils/motion'
import {Modal} from "reactstrap"
import Coverletter from './Coverletter'

const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false)
  const [coverletter, setCoverLetter]= useState(true)
  
  return (
    <>
      <Modal
        size='lg'
        isOpen={coverletter}
        toggle={()=>setCoverLetter(!coverletter)}
        className='coverletter'
        >
           <Coverletter/>
        </Modal>

    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false, amount:0.25}}
    className='navbar-wrapper'>
      <div className='navbar'>
        <div className='name'>
          Ryu Shrestha
        </div>
        <div className='navbar-list'>
          <ul className='nav-list'
          style={getMenuStyles(showMenu)}>
            <li className='list-items'><a href='#home' className='list-link'>Home</a></li>
            <li className='list-items'><a href='#education' className='list-link'>Education</a></li>
            <li className='list-items'><a href='#work' className='list-link'>Experience</a></li>
            
            <li className='list-items'><a className='list-link'>
              <button className='list-link1' onClick={()=>setCoverLetter(true)}>Letter

              </button>
              </a></li>
            <li className='list-items'><a href='#expertise'className='list-link'>Expertise</a></li>
          </ul>
        <div className='navbar-icon' onClick={()=>setShowMenu((prev)=>!prev)} >
          <RiMenuFoldLine />
        </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Navbar