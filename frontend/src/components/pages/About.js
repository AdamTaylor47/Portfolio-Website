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
                        I thrive on solving problems through creative, user-friendly applications. Outside of troubleshooting, you can often find me immersed in video games or enjoying a round of golf.
                    </p>
                </div>
                <img
                    src='images/me.jpg'
                    alt='picture-of-me'
                    className='profile-picture'
                />
            </div>
            <div className='about-section-two'>
                <div className='about-section-two-text'>
                    <h2>Creative & Visual Development</h2>
                    <p>
                        My passion lies in crafting engaging and visually appealing interfaces. I enjoy bringing concepts to life through creative design and user-friendly interactions, with front-end and object-oriented development being areas I find most exciting.
                    </p>
                </div>
                <div className='pie-chart-container'>
                    <PieChart/>
                </div>
                <div className='about-section-two-text'>
                    <h2>Logical & Technical Development</h2>
                    <p>
                         I value the problem-solving aspects of technical and backend development. Ensuring systems work seamlessly is a satisfying challenge that complements my skill set and broadens my capabilities. I recognize the importance of a strong backend foundation in creating robust and scalable applications.
                    </p>
                </div>
            </div>
        </div>
    )
}