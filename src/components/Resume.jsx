import React from 'react'
import MacWindow from './MacWindow'
import "./Resume.scss"

const Resume = () => {
  return (
    <MacWindow>
        <div className='resume-window'>
            <iframe src="/dev_resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>


  )
}

export default Resume