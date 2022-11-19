import React from 'react'
import peter from '../images/peter.jpg'
import ridwan from '../images/ridwan.jpeg'
import joseph from '../images/joseph.jpg'
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center align-items-center">

                <div className="col-lg-6 col-sm-8 reviews">
                    <div className="text-center">
                        <img src={joseph} alt="" />
                        <p>I came into Tech Studio Academy with practically no prior knowledge in software development. However, within a few weeks, I was able to grasp the crux of software development and also master the soft skills required for being a software developer. <br /><br />

                            So far so good, the skills acquired have given me a mind-blowing push in my career as a software developer.</p>

                        <h5>JOSEPH DARAMOLA <span>(FRONTEND DEVELOPER)</span></h5>

                        <h5 style={{ color: 'red' }}>- FRIYAY.IO</h5>
                    </div>

                </div>

                <div className="col-lg-6 col-sm-8 reviews">
                    <div className="text-center">
                        <img src={peter} alt="" />
                        <p>Tech Studio Academy has been one of the big push I needed to get <br /> in the real world space. I had an immense learning that was really <br /> different from the self learning I started with. The learning was <br /> fun and there were some internship job opportunities that were <br /> presented to us. I got my first gig immediately after the program. <br /><br />

                            Thank you Tech Studio for that push I needed.

                        </p>

                        <h5>PETER EDEAWE <span>(SOFTWARE DEVELOPER)</span></h5>

                        <h5 style={{ color: 'red' }}>- BREATHEAGENCY.COM</h5>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-8 reviews">
                    <div className="text-center">
                        <img src={ridwan} alt="" />
                        <p>I bless the day the Instagram algorithm pop up Tech Studio Academy to my news feed. I read through their curriculum and other details about the Bootcamp and I told myself this is the opportunity I've been waiting for. <br /> <br />

                            I wasn't disappointed, the environment was well ventilated and conducive, with competent instructors. Here I am today at OT&T Consulting, fulfilling my dreams thanks to Tech Studio Academy.</p>

                        <h5>RILWAN AJIBOLA <span>(SOFTWARE DEVELOPER)</span></h5>

                        <h5 style={{ color: 'red' }}>- OTANDTCONSULTING.COM</h5>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Reviews