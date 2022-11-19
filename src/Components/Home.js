import React from 'react'
import Benefits from './Benefits'
import Bg from './Bg'
import Career from './Career'
import Experience from './Experience'
import Frequent from './Frequent'
import Fundamental from './Fundamental'
import Package from './Package'
import Reason from './Reason'
import Reviews from './Reviews'
import Stateart from './Stateart'

const Home = () => {
    return (
        <div>
            <Bg />
            <Reviews/>
            <Benefits/>
            <Package/>
            <Experience/>
            <Fundamental/>
            <Stateart/>
            <Reason/>
            <Career/>
            <Frequent/>
        
        </div>
    )
}

export default Home