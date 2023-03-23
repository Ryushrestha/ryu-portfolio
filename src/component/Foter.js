import React from 'react'
import {SiWhatsapp,SiGmail} from 'react-icons/si'
// import { Link } from 'react-router-dom'
import {BsInstagram,BsFacebook, BsLinkedin} from 'react-icons/bs'

const Foter = () => {
  return (
    <>
    <div className='footer-wrapper'>
        <div className='footer-section'>
            <div className='left-footer'>
                <h4 className='footer-text'>Be the change </h4>
                <h5  className='footer-text'>you wish to see in the world.</h5>
            </div>
            <div className='right-footer'>
                <h4  className='footer-text'>Contact</h4>
                <div className='contact'>
                    <div className='contact-data'>
                        
                        <SiWhatsapp className='contact-icon whatsapp'/>
                        <p className='information '>9860165454</p>
                    </div>

                    <div className='contact-data'>
                        <SiGmail className='contact-icon email'/>
                        <p className='information'>ryushrestha7@gmail.com</p>
                    </div>
                </div>
                
                <div className='social-media'>
                    <a href='https://www.instagram.com/ryu_sth/'>
                    <BsInstagram className='contact-icon instagram'/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100012073967001'>
                        <BsFacebook className='contact-icon facebook'/>
                    </a>
                    <a href='https://www.linkedin.com/in/ryu-shrestha-a1668a209/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BWmuzBm4zQhGVkd5qFMAJXA%3D%3D'>
                    <BsLinkedin className='contact-icon linkedin'/>
                    </a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Foter