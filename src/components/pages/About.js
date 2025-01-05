import React from 'react'
import '../../App.css'
import './About.css'
import PieChart from '../PieChart'


export default function About() {
    return(
        <div className='about-container'>
            <div className='about-section-one'>
                <div className='about-section-one-text'>
                    <h1>About Me.</h1>
                    <h2>Junior software developer in Windsor, Ontario</h2>
                    <p>
                        I love solving problems with applications that are creative and simple to use. When I am not troubleshooting, you can find me playig video games or out on a golf course.
                    </p>
                </div>
                <img
                    src='images/background1.png'
                    alt='picture-of-me'
                    className='profile-picture'
                />
            </div>
            <div className='about-section-two'>
                <div className='about-section-two-text'>
                    <h2>Creative & Visual Development</h2>
                    <p>
                        I enjoy working on creative and visually engaging aspects of development. It’s exciting to design interfaces and bring ideas to life in a way that users can interact with and enjoy. Object orientated and front-end development are my favorites.
                    </p>
                </div>
                <div className='pie-chart-container'>
                    <PieChart/>
                </div>
                <div className='about-section-two-text'>
                    <h2>Creative & Visual Development</h2>
                    <p>
                        While not my primary focus, I appreciate the problem-solving challenges of backend and technical work. It's rewarding to ensure everything functions smoothly behind the scenes.
                    </p>
                </div>
            </div>
        </div>
    )
}