import React from 'react'
import billgate from '../images/billgate.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import './Login.css'

const Register = () => {
  return (
    <div className='register'>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 col-md-8 text-start">
            <h2>Create An Account</h2>

            <div className="reg my-3">
              <label htmlFor="name">Your Full Name</label> <br />
              <input type="text" name="" id="name" placeholder='e.g John Smith' />
            </div>

            <div className="reg mb-3">
              <label htmlFor="email">Your Email Address</label> <br />
              <input type="text" name="" id="email" placeholder='e.g name@example.com' />
            </div>

            <div className="reg mb-3">
              <label htmlFor="tel">Your Phone Number</label> <br />
              <input type="text" name="" id="tel" placeholder='e.g 07034777895' />
            </div>

            <div className="reg mb-3">
              <label htmlFor="course">Course</label> <br />
              <select name="" id="">
                <option value="">Javascript Fullstack</option>
                <option value="">Frontend</option>
                <option value="">Fullstack</option>
                <option value="">Ui Ux And Product Design</option>
                <option value="">Data Science</option>
                <option value="">Python Fullstack</option>
              </select>
            </div>

            <div className="reg mb-3">
              <label htmlFor="program">Type Of Program</label> <br />
              <select name="" id="">
                <option value="">Weekday Classes</option>
                <option value="">Weekend Classes</option>
              </select>
            </div>

            <div className="row pass">
              <div className="col-lg-4">
                <label htmlFor="password">Password</label>  <br />
                <input type="password" name="" id="password" />
              </div>
              <div className="col-lg-4">
                <label htmlFor="password">Confirm Password</label>  <br />
                <input type="password" name="" id="password" />
              </div>
            </div>

          </div>

          <div className="col-lg-6 col-sm-8 col-md-8">
            <div className="">
              <img src={billgate} alt="" />
              <div className="d-flex justify-content-center">
                <FaQuoteLeft size={35} />
                <p>Learning to write programs stretches your mind, and <br /> helps you think better, creates a way of thinking <br /> about things that I think is helpful in all domains.</p>
              </div>
              <p className='line'>- Bill Gates</p>
              <p className='line'>Co-Chairman, Bill & Melinda Gates Foundation and</p>
              <p className='line'>Co-Founder, Microsoft</p>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register