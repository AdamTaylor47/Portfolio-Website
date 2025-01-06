import React from 'react'
import '../../App.css'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Contact() {
    return(
        <div className='contact-container'>
            <div className='contact-section-one'>
                <div className='contact-section-one-text'>
                    <h1>Contact.</h1>
                    <h2>Feel free to contact for anything<br/> (email is the best)</h2>
                </div>
                <div className='icon-container'>
                    <div className='icon-bundle'>
                        <a href='https://www.linkedin.com/in/adam-taylor-614b79238/' target='_blank'>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin"size='5x' style={{color: "#74C0FC",}} />
                            <h3>Linkedin</h3>
                        </a>
                    </div>
                    <div className='icon-bundle'>
                        <a href='https://github.com/AdamTaylor47' target='_blank'>
                            <FontAwesomeIcon icon="fa-brands fa-github" size='5x' style={{color: "#74C0FC",}} />
                            <h3>Github</h3>
                        </a>
                    </div>
                    <div className='icon-bundle'>
                        <a href="">
                            <FontAwesomeIcon icon="fa-solid fa-file" size='5x' style={{color: "#74C0FC",}} />
                            <h3>Resume</h3>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}