import React from 'react'
import './Footer.css'
import dark from '../images/logo dark.png'
import facebook from '../images/icons/facebook.png'
import insta from '../images/icons/insta.png'
import twitter from '../images/icons/twitter.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-sm-8 col-md-6 text-md-start text-sm-center info">
                        <div className="d-flex gap-3">
                            <img src={dark} alt="" />
                            <h5 className='text-white'>TechStudio Academy</h5>
                        </div>
                        <p className='text-white'>3, Ogunlesi Street, Off Awoyokun,</p>
                        <p className='text-white'>Onipanu, Palmgroove,</p>
                        <p className='text-white'>Lagos.</p>
                    </div>

                    <div className="col-lg-6 col-sm-8 col-md-8">
                        <div className="d-flex gap-5">
                            <div>
                                <h3>SIGN UP FOR NEWSLETTER</h3>
                                <div>
                                    <input type="email" id="email" placeholder='Enter Your Email Address' />
                                </div>

                                <button>Submit</button>


                            </div>

                            <div>
                                <h5>Social Media</h5>
                                <img src={insta} alt="" width={18} />
                                <img src={facebook} alt="" width={12} className='mx-2'/>
                                <img src={twitter} alt="" width={18}/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer