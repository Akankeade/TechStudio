import React from 'react'
import students from '../images/students.jpg'

const Experience = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="text-center">
                <h5 className='mb-3'>Student's Experience</h5>

                <p>Whether you want to pursue a career as a Web Developer, a Freelancer, or an <br /> Entrepreneur, this program prepares you adequately for that. This is an immersive, <br /> collaborative and intensive program, prepared in a way to help you apply what you <br /> learn in real-time through project-based work.</p>

                <img src={students} style={{width:'90%'}} alt="" />
            </div>

        </div>
    )
}

export default Experience