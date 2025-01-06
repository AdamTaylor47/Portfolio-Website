import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out my Projects</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                    <CardItem
                        src='images/cogeco-project-image-1.png'
                        text='Interaction Generator developed to simplify the transfer matrix for Cogeco employees'
                        label='HTML - CSS - JS'
                        path='/CogecoProject'
                    />
                    <CardItem
                        src='images/school-project-1.png'
                        text='Game Development Project required for University Degree'
                        label='C# - Unity'
                        path='/SchoolProject'
                    />
                    <CardItem
                        src='images/background3.png'
                        text='Website for Knights of Columbus local hall'
                        label='HTML - CSS - JS'
                        path='/KnightsOfColumbus'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards