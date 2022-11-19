import React from 'react'
import group from '../images/group.jpg'
import './Package.css'

const Package = () => {
    return (
        <div className='package'>
            <div className='container mt-5'>

                <div className="text-center">
                    <h3>Become a well-rounded web Developer</h3>
                </div>

                <div className="row justify-content-center align-items-center mt-3">
                    <div className="col-lg-6 col-md-6 col-sm-7 text-md-start">
                        <p>We teach the important skills required to jumpstart your career as a web developer. <br /> With 16 intense weeks of on-campus training, you learn to think and build like <br /> software developers. You move from understanding programming fundamentals <br /> to launching full-stack web apps. You do all these while learning to solve everyday <br />problems with constructive, well-written programs. <br /><br />

                            You'll be taught to build smart, data-driven web applications using JavaScript <br /> and it's robust React framwork - Next.js. Work with the famous NoSQL database <br /> MongoDB to integrate data into your project; connect with other third-party <br /> applications using API calls. <br /><br />

                            And finally, you'll learn the fundamentals of working as a team; collaborate with <br /> other group members of the class to build, change, maintain, and secure an <br /> application. Track your team development process using Version Control Systems.
                            <br /><br />
                            Interested in viewing more details on the program?</p>

                        {/* eslint-disable-next-line */}
                        <button><a href="#">Get Program Package</a></button>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-7">
                        <img src={group} alt="" />
                    </div>

                </div>


            </div>
        </div>

    )
}

export default Package