import React from 'react'
import "./Reason.css"
import smile from '../images/smile.jpg'
import './Package.css'

const Career = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="text-center">
                    <h2>CAREER SUPPORT</h2>
                    <div className='blue mt-3'>
                        <span className='b'></span>
                    </div>
                    <p className='mt-3'>As a student of this program, you'll be provided with access to career readiness tools, <br /> resources and trainings, connections to employers, and opportunities to sharpen your <br /> skills.</p>
                </div>

                <div className="row justify-content-center align-items-center mt-3">

                    <div className="col-lg-6 col-sm-8 col-md-7 smile">
                        <img src={smile} alt="" />
                    </div>

                    <div className="col-lg-6 col-sm-8 col-md-7 text-md-start">
                        <h5>Get excellent career guidance from industries' best</h5>

                        <p>Our support team provides students with guidance and tips on building a top- <br /> notch portfolio that woos employers.</p>

                        <p>Tech Studio Academy is always reaching out to employers picking resumés <br /> and arranging interviews for our students. You gain access to networking opportunities <br /> and foster connections within the industry.</p>

                        <p> Through our partnerships, you'll meet and have access to Hiring Managers across different companies.</p>

                        <p>Register To Get The Complete Course Package</p>

                        

                    </div>

                </div>
            </div>

            <div className="inter mt-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center get">

                        <div className="col-lg-6 col-sm-8 col-md-8 text-md-start">
                            <h5 className='text-white'>Interested in what you'll learn during the course of this program?</h5>
                        </div>

                        <div className="col-lg-4 col-sm-8 col-md-8">
                            <button>Get Program Package</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career