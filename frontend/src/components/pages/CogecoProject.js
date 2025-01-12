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
                    This is a tool I developed to streamline the process of transferring customers at Cogeco. During my time there, a common frustration among employees was the lack of sufficient information being passed along when transferring a customer to another department. To address this issue, I created a tool that allows users to input information about the current call and outputs it in a standardized format. This solution resolved several problems: it ensured that all vital information was transferred for security purposes and that the information was presented in a consistent and standardized manner across the company.

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