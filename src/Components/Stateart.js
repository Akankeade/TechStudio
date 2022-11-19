import React from 'react'
import studio from '../images/studio.png'
import './Stateart.css'

const Stateart = () => {
    return (
        <div className='stateart mt-3'>
            <div className='container'>

                <div className="text-center">
                    <h2>A State-Of-The-Art Facility</h2>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-8">
                        <img src={studio} alt="" />
                    </div>

                    <div className="col-lg-4 col-sm-8 text-sm-start world">
                        <h5>A world-class learning facility</h5>
                        <p>Our learning studio is designed to inspire focused learning, creativity and collaboration. It is equiped with state-of-the-art learning equipments with no more than 10 students per class. <br /><br />Learn in an environment that puts you in direct contact with professional web developers and software engineer. <br /><br />You'll be provided with constant power and internet supply to make you focus on the job at hand</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Stateart
