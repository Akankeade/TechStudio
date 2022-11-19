import React from 'react'
import './Package.css'

const Fundamental = () => {
    return (
        <div className='container'>

            <div className="row justify-content-center align-items-center">

                <div className="col-lg-6 col-sm-8 col-md-7 text-sm-start">
                    <h5>Fundamentals</h5>

                    <p>The first weeks of this bootcamp is to help you appreciate the fundamentals of web development, understanding structure, design and getting comfortable coding in HTML and CSS.<br /> <br /> You'll also be introduced to the concepts of Responsive Design - targeting different screen sizes and working with frameworks such as Bootstrap</p>

                    <h5>Frontend Programming</h5>

                    <p>After mastering the fundamentals, the focus shifts towards frontend programming. You'll learn to add motion and interactivity to your project with JavaScript & <br /> jQuery.</p>

                    <h5>The React Library</h5>

                    <p>You'll learn to buid dynamic Single Page Applications using the famous React <br /> Library. Render basic React components using JSX and the virtual Document Object Model (DOM).</p>

                    <h5>Version Control</h5>

                    <p>You'll learn to use the Git version control system, collaborate with other team members and push your projects to GitHub using Git <br /><br />Register To Get The Complete Course Package.</p>

                    <div className="experience">
                        <button><a href="#">Get Program Package</a></button></div>
                    </div>

                <div className="col-lg-6 col-sm-8 col-md-7 text-sm-start mt-3">
                    <h5>Front and Backend Rendering with Next.JS</h5>

                    <p>You'll understand the client/server roles in handling HTTP requests and thereafter move to advanced concepts used to populate dynamic data to projects. <br /><br />

                    You'll learn to use the amazing server-side rendering of NextJS to create database-driven web applications. <br /> <br /> You'll learn to use components like user authentication, contact forms, content administration, file uploads and a lot more with NextJS to create real-life web applications.</p>

                    <h5>Databases</h5>

                    <p>Modern web applications need querying real-time data for interactivity. You'll spend considerable time learning Next.JS interaction with NoSQL. <br /><br />

                    You'll be exposed to querying the database to perform the CRUD functions - Create, Read, Update and Delete resources</p>

                    <h5>Production Deployment</h5>

                    <p>You'll be taught how to deploy your production ready project to a public web server <br /> to be accessed by everyone in the online community.</p>

                    <div className='lorem'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit consequuntur modi fugiat nobis omnis labore, exercitationem vero voluptate voluptatum fuga illum, cum eaque unde quasi rem, porro inventore. Fugit, modi?</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Fundamental