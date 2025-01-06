import React from 'react'
import '../../App.css'
import './CogecoProject.css'

export default function CogecoProject() {
    return(
        
        <div className='cogeco-project-container'>
            <h1>Cogeco Interaction Generator</h1>
            <img 
                src="images/cogeco-project-image-4.png" 
                alt="main-menu" 
                className="cogeco-project-image"
            />
            <div className='cogeco-project-text'>
            <h2>The Tool</h2>
            <hr/>
                <p>
                    This is a tool I developed to make the process of transferring customers more efficient at Cogeco. While I was employed there, a common frustration amongst employees was that insufficient information was being passed along when transferring a customer to another department. I decided to resolve this issue and develop a tool that allows you to input the information about the current call, and have the program output the information in the standard format. This solved a few problems: Ensuring all vital information was sent when transferring for security purposes, and making sure the information was presented in a specific way that is consistent across the whole company.

                </p>
            </div>
        <div className='cogeco-project-image-bundle'>
            <img 
                src="images/cogeco-project-image-2.png" 
                alt="example-1" 
                className="cogeco-project-image"
            />
            <img 
                src="images/cogeco-project-image-1.png" 
                alt="example-2" 
                className="cogeco-project-image"
            />
        </div>
    </div>
        

    ) 
}