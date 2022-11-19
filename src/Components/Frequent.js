import React from 'react'
import './Stateart.css'

const Frequent = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Frequently Asked Questions</h2>
                    <div className='blue mt-3'>
                        <span className='b'></span>
                    </div>
                    <p className='mt-3'>We love to hear questions from our prospective students, almost as much as we love <br /> providing answers to them. Here are a few questions along with our responses:</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-7 col-sm-8 text-sm-start">
                        <h5>Why Is This Course Relevant Today?</h5>
                        <p>There's never been a better time to start a career as a web developer because there <br /> is a consistent demand for developers who both write high-quality code and <br /> experienced problem solvers who can design creative solutions. <br /><br />
                            The web and the applications built for it have transformed the way we do business globally, and is disrupting industries from education to manufacturing.</p> <br />

                        <h5>What Practical Skill Sets Can I Expect To Have Upon Completion Of The Course?</h5>
                        <p>By the end of the course, you will have gained practice in the most used web-based programming language - JavaScript. You'll have built several full-stack applications of varying complexity, and have experience working with a team in a development environment.
                            <br /><br />
                            You'll gain confidence in tackling new technologies in an ever-changing field. You'll have gained foundational skill in many disciplines that touch web development - managing complex data sets, securing your applications with encrypted passwords, and testing and deploying your applications to prepare them to scale.</p> <br />

                        <h5>Should I Come Equipped With Anything?</h5>
                        <p>Yes, a laptop is required (either Mac or PC) with a minimum of 4GB RAM with a storage capacity of at least 350GB. The course will walk you through installing the necessary free software.
                            <br /><br />
                            At least, you'll require basic secondary school mathematics, but no previous programming language experience is required.</p>

                        <p>Register To Get The Complete Course Package</p>

                        <div className="experience">
                              {/* eslint-disable-next-line */}
                            <button><a href="#">Get Program Package</a></button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-7 col-sm-8 text-sm-start">
                        <h5>What Can I Expect To Accomplish By The End Of This Program?</h5>
                        <p>By the end of this course, you'd have:</p>
                        <ul>
                            <li>Completed several individual and group projects</li>

                            <li>Learned about web development from experienced web developers</li>

                            <li>Networked with some of the best developers, companies, and entrepreneurs in Lagos</li>

                            <li>Prepared yourself with the foundational knowledge you need to begin a career that embraces continuous learning</li>
                        </ul>

                        <h5>What Does Success In This Program Look Like?</h5>

                        <p>To get the most out of this course, you have to be willing to fully immerse yourself (get it?) in the classroom environment. This means actively engaging with your instructors, classmates, and career coach, as well as taking every opportunity to apply your new skills toward real-life projects.</p>

                        <p>We’ll help guide you through the entire process, but in order to succeed you’ll need to completely commit to your work and continuously push yourself</p>

                    </div>
                </div>
            </div>

            <div className="white-red">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-sm-8 col-md-7 text-sm-start started">
                            <h6>Get started with</h6>
                            <p className='java'>JavaScript Full Stack Web Development Immersive</p>

                            <h6>DURATION</h6>
                            <p>It takes 16 weeks for weekday and 16 weeks for weekend classes <br /> respectively to successfully complete this program.</p>

                            <h6>LEARN</h6>
                            <p>You'll learn the fundamentals of web development - structure and <br /> design using HTML and CSS, and also the concept of Responsive Design</p>

                            <p>You'll be introduced to vanilla JavaScript and it's use to add  <br /> to your project. You'll use React to create SPAs and do DOM <br /> manipulations.</p>

                            <p>You'll learn NextJS as a framework and use it to perform client and <br /> server-side rendering. You'll also learn to use REST along with NextJS <br /> to create a database-driven web application.</p>

                            <h6>BENEFITS</h6>
                            <ul>
                                <li>Build Real-World projects</li>
                                <li>Access program materials anytime, anywhere</li>
                                <li>Technical mentor support</li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-sm-8 col-md-7 text-sm-start mx-5 red mt-3">
                            <p>Weekday Classes</p>
                            <ul>
                                <li>Starts 24 / 10 / 2022</li>
                                <li>Duration: 16 Weeks</li>
                                <li>Mondays - Fridays</li>
                                <li>10am - 5pm</li>
                                <h3>₦400,000</h3>
                            </ul>

                            <p>Weekend Classes</p>
                            <ul>
                                <li>Starts 22 / 10 / 2022</li>
                                <li>Duration: 16 Weeks</li>
                                <li>10am - 5pm (Saturdays)</li>
                                <li>1:30pm - 5pm (Sundays)</li>
                                <h3>₦300,000</h3>
                            </ul>

                            <p>Virtual Classes</p>
                            <ul>
                                <li>Starts 24 / 10 / 2022</li>
                                <li>Duration: 16 Weeks</li>
                                <li>Same One-On-One Mentorship <br /> Like Physical Classes</li>
                                <h3>₦300,000</h3>
                            </ul>

                            <div className="text-center">
                                  {/* eslint-disable-next-line */}
                                <button><a href="#">Start Your Registration</a></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequent