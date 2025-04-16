import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project_1.jpg'
import project_2 from '../../assets/project_2.jpg'
import project_3 from '../../assets/project_3.jpg'
import project_4 from '../../assets/project_4.jpg'
import project_5 from '../../assets/project_5.jpg'


const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className="top">
                <h3>PROJECTS</h3>
                <p>Here you will find my personal projects that I created with each project containing its own case study</p>
            </div>

            <div className="bottom">
                 <div className="cards">

                    <div className="card">
                    <img src={project_1} alt="" />

                    <div className="content">
                    <h3>Youtube Clone</h3>
                    <p>YouTube Clone built with React.js featuring real-time data, responsive design, and seamless video browsing.</p>
                    
                    <div className="btn">
                    <a href="https://youtube-clone-amber-chi.vercel.app/" target='_blank' >Live Link</a>
                    <a href="" target='_blank' >Github Link</a>
                    </div>

                    </div>
                    </div>

                    <div className="card">
                    <img src={project_2} alt="" />

                    <div className="content">
                    <h3>Staybnb</h3>
                    <p>Designed a travel booking platform frontend like Airbnb using HTML, CSS, and JavaScript with a fully responsive UI.</p>
                    
                    <div className="btn">
                    <a href="https://staybnb-sooty.vercel.app/" target='_blank'>Live Link</a>
                    <a href="https://github.com/sivajeevacode/Staybnb" target='_blank'>Github Link</a>
                    </div>
                    </div>
                    </div>

                    <div className="card">
                    <img src={project_3} alt="" />

                    <div className="content">
                    <h3>Image Search Engine</h3>
                    <p>Built a responsive image search engine using HTML, CSS, and JavaScript with dynamic image results powered by the Pexels API.</p>
                    
                    <div className="btn">
                    <a href="https://sivajeevacode.github.io/Image-Search-Engine/" target='_blank'>Live Link</a>
                    <a href="https://github.com/sivajeevacode/Image-Search-Engine/tree/main" target='_blank'>Github Link</a>
                    </div>
                    </div>
                    </div>

                    <div className="card">
                    <img src={project_4} alt="" />

                    <div className="content">
                    <h3>Weather App</h3>
                    <p>Created a responsive Weather App using HTML, CSS, and JavaScript to display real-time weather with a clean UI.</p>
                   
                    <div className="btn">
                    <a href="https://sivajeevacode.github.io/Weather-App/" target='_blank'>Live Link</a>
                    <a href="https://github.com/sivajeevacode/Weather-App" target='_blank'>Github Link</a>
                    </div>
                    </div>
                    </div>

                    <div className="card">
                    <img src={project_5} alt="" />

                    <div className="content">
                    <h3>To-Do App</h3>
                    <p>Built a dynamic To-Do App using HTML, CSS, and JavaScript with a clean interface for managing tasks efficiently.</p>
                   
                    <div className="btn">
                    <a href="https://sivajeevacode.github.io/ToDo-App/" target='_blank'>Live Link</a>
                    <a href="https://github.com/sivajeevacode/ToDo-App" target='_blank'>Github Link</a>
                    </div>
                    </div>
                    </div>


                 </div>
            </div>
        </div>
    )
}

export default Projects
