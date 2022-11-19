import React from 'react'
import './Bg.css'
import Smallcal from '../images/smallcal.png'
import Location from '../images/location.png'
import Duration from '../images/duration.png'
import './Form.css'

const Bg = () => {
    return (
        <div className='bg'>
            <div className="header-wrapper">

                <div className='bg-text'>
                    <h1>JAVASCRIPT FULL STACK WEB <br /> DEVELOPMENT</h1>
                    <p>Explore the fastest, most effective way to instantly grow your skills, transform yourself and get ready to be hired as a highly-paid web developer.</p>

                    <h5>Enrolment Details</h5>

                    <div className='location'>
                        <h6><img src={Location} style={{ width: '15px' }} alt='' /> Location</h6>
                        <h6>Palmgroove</h6>
                    </div>

                    <div className='location'>
                        <h6><img src={Smallcal} style={{ width: '15px' }} alt='' />Start Date</h6>
                        <h6>26/ 11/ 22</h6>
                    </div>

                    <div className='location'>
                        <h6><img src={Duration} alt="" style={{ width: '15px' }} />Duration</h6>
                        <h6>16 Weeks</h6>
                    </div>

                </div>

                <div className='bg-form'>
                    <h5>Register to learn more about the program <br /> pricing and curriculum</h5>
                    <div className="firstName">
                        <input type="text" placeholder='First Name' />
                    </div>

                    <div className="lastname my-3">
                        <input type="text" placeholder='Last Name' />
                    </div>

                    <div className="reg-email mb-3">
                        <input type="text" placeholder='Email' />
                    </div>

                    <div className="phone">
                        <input type="tel" placeholder='Phone Number' />
                    </div>

                    <div className='experience mt-4'>
                        {/* eslint-disable-next-line */}
                        <button><a href="#">Get Program Package</a></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bg