import React from 'react'
import './About.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'

import reactjs from '../../assets/reactjs.png'
import nodejs from '../../assets/nodejs.png'
import expressjs from '../../assets/expressjs.png'
import mongodb from '../../assets/mongodb.png'
import mongoose from '../../assets/mongoose.png'

import git from '../../assets/git.png'
import github from '../../assets/github.png'
const About = () => {
    return (
        <div className='about' id='about'>

            <div className="top">
                <h3>ABOUT ME</h3>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>


            <div className="bottom">
                <div className="myself">
                    <h3>Get to know me!</h3>
                    <br />
                    <p>
                    Hello! I’m a final year Electronics and Communication Engineering (ECE) student with a strong interest in web development and software technologies. Over the past year, I’ve been actively exploring the MERN stack and building hands-on projects using React.js to sharpen my frontend development skills.

                      
                      <br />
                      <br />
                     I enjoy turning ideas into real-world applications and have worked on several mini projects that helped me understand the fundamentals of user experience, responsive design, and dynamic functionality. My background in ECE gives me a unique perspective when it comes to integrating hardware concepts with software, especially in IoT-based systems.

                     
                      <br />
                      <br />
                       Currently, I’m looking for an opportunity as a fresher where I can contribute, learn, and grow as a developer and bring value to meaningful projects.</p>
                </div>


                <div className="skills">
                    <h3>My Skills</h3>

                    <div className="boxes">
                        <div className="box">
                            <img src={html} alt="" width='30px' height='30px' />
                            <p>HTML</p>
                        </div>

                        <div className="box">
                            <img src={css} alt="" width='30px' height='30px' />
                            <p>CSS</p>
                        </div>

                        <div className="box">
                            <img src={js} alt="" width='30px' height='30px' />
                            <p>Javascript</p>
                        </div>

                        <div className="box">
                            <img src={reactjs} alt="" width='30px' height='30px' />
                            <p>React JS</p>
                        </div>

                        <div className="box">
                            <img src={nodejs} alt="" width='30px' height='30px' />
                            <p>Node JS</p>
                        </div>

                        <div className="box">
                            <img src={expressjs} alt="" width='30px' height='30px' />
                            <p>Express JS</p>
                        </div>

                        <div className="box">
                            <img src={mongodb} alt="" width='30px' height='30px' />
                            <p>MongoDB</p>
                        </div>

                        <div className="box">
                            <img src={mongoose} alt="" width='30px' height='30px' />
                            <p>Mongoose</p>
                        </div>

                        <div className="box">
                            <img src={git} alt="" width='30px' height='30px' />
                            <p>Git</p>
                        </div>

                        <div className="box">
                            <img src={github} alt="" width='30px' height='30px' />
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
