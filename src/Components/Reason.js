import React from 'react'
import studentpics from '../images/studentspic.jpeg'
import './Reason.css'

const Reason = () => {
    return (
        <div className='reason mt-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-8 col-md-7">
                        <img src={studentpics} style={{ width: '90%' }} alt="" />
                    </div>

                    <div className="col-lg-6 col-sm-8 col-md-7">
                        <h2>Why choose Tech Studio Academy?</h2>
                        <p className='text-md-start'>Tech Studio Academy is a top-rated tech academy in Lagos. In the last 3 years, we've trained hundreds of students - both online and physical - and helped them to navigate and forge their paths in the tech industry.

                            With our career guidance and thorough assistance, some of our students are working with top organizations in the country and beyond. If you're looking to advance your career in the tech industry, we'll help fulfill your dream.

                            Though there's not enough reasons why we're the best tech training school around, but here are a couple:</p>

                        <ul>
                            <li className='text-md-start'>We provide you with the best learning facility you can lay your eyes on. All our classes are en-suite and equipped with the latest technologies for learning.</li> <br />

                            <li className='text-md-start'>Our tutors are highly trained professionals that are choosen based on industry experience and teaching ability.</li> <br />

                            <li className='text-md-start'>We offer you the best support - either while you're learning or after you've graduated. We provide career support to get you hired in no time.</li>
                        </ul>



                    </div>
                </div>

            </div>
        </div>
    )
}

export default Reason