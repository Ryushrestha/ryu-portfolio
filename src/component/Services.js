import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion} from 'framer-motion'
import { fadeIn, Parent } from '../utils/motion';



const Services = () => {

    return (
        <>
            <motion.div
             variants={Parent}
             initial="hidden"
             whileInView="show"
             viewport={{once:false,amount:0.25}}
            className='wrapper2'>
        <a href='#' className='anchor' id='expertise'/>
                
                <h1 className='skill-heading'>My Expertise on</h1>
                <div className='skill-type'>
                    <h5 className='type-heading'>IT</h5>
                    <h5 className='type-heading'>NON IT</h5>
                </div>
                <div className='skills'>

                    <motion.div 
                     variants={fadeIn('right',"tween",0.2,1)}
                    className='it-skill'>
                        
                          
                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar 
                            value={85} 
                            text={`${85}%`}
                            styles={buildStyles({
                                textColor:'black',
                                trailColor: "transparent",
                                pathColor: '#eab676'
                            })}
                            />
                            <h3 className='skills-name'>HTML</h3>
                        </div>
                    </div>

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={80}
                                text={`${80}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#eab676',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>CSS3</h3>
                        </div>
                    </div>

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={76}
                                text={`${76}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#eab676',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Javascript</h3>
                        </div>
                    </div>    

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={95}
                                text={`${95}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#eab676',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Bootstrap</h3>
                        </div>
                    </div>          

                     <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={70}
                                text={`${70}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#eab676',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>React js</h3>
                        </div>
                    </div>    

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={65}
                                text={`${65}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#eab676',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Express js</h3>
                        </div>
                    </div>  

                    </motion.div>


                    <motion.div
                     variants={fadeIn('left',"tween",0.2,1)}
                    className='non-it'>
                        
                        <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={95}
                                text={`${95}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Ms Office</h3>
                        </div>
                    </div>  

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={98}
                                text={`${98}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Punctuality</h3>
                        </div>
                    </div>  

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={85}
                                text={`${85}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Creative</h3>
                        </div>
                    </div>  

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={90}
                                text={`${90}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Marketing</h3>
                        </div>
                    </div>  
                    
                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={97}
                                text={`${97}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Adaptability</h3>
                        </div>
                    </div>  

                    <div className='skill-card'>
                        <div className='skill'>
                            <CircularProgressbar
                                value={83}
                                text={`${83}%`}
                                styles={buildStyles({
                                    trailColor: "transparent",
                                    pathColor: '#873e23',
                                    textColor:'black',
                                })}
                            />
                            <h3 className='skills-name'>Problem solving</h3>
                        </div>
                    </div>  

              
                    
                    </motion.div>
                </div>
               
            </motion.div>

        </>
    )
}

export default Services