import React from 'react'
import board from '../images/board.png'
import calender from '../images/calendar.png'
import suitcase from '../images/suitcase.png'

const Benefits = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row justify-content-center align-items-center">

                <div className="col-lg-4 col-sm-7 col-md-6">
                    <div className="text-center">
                        <img src={board} alt="" />
                        <h5>16-Week Bootcamp</h5>
                        <p>In 16 weeks, you'll be a professional javascript full-stack developer, able to build real-time interactive and dynamic applications. We teach the JavaScript language because of it's growing popularity every day and it's here to stay.</p>
                    </div>

                </div>

                <div className="col-lg-4 col-sm-7 col-md-6">
                    <div className="text-center">
                        <img src={calender} alt="" />
                        <h5>Develop New Skills</h5>
                        <p>You'll get your hands dirty by building real life websites,APIs, and data-driven apps to gain confidence and sharpen yours skills. You'll also collaborate with classmates on a range of projects to add to your portfolio.</p>
                    </div>


                </div>

                <div className="col-lg-4 col-sm-7 col-md-6">
                    <div className="text-center">
                        <img src={suitcase} alt="" />
                        <h5>Be An Expert</h5>
                        <p>You graduate with a valued portfolio required to launch your career. All our students receive career guidance and mentorship with the support of our career counselors through every step of their job search.</p>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Benefits