import React from 'react'

const EducationCard = (props) => {
  return (
    <>
    <div className='education-card rounded-4 mt-3 d-flex'>
       <span className='education-icon'>
       {props.icon && React.createElement(props.icon)}
       </span>
       <div className='education-text d-grid'>
            <h2 className='education-level'>{props.educationlevel}</h2>
            <p>{props.academy}</p>
       </div>
    </div>
    </>
  )
}

export default EducationCard