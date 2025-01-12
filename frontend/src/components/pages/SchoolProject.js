import React from 'react'
import '../../App.css'
import './SchoolProject.css'

export default function SchoolProject() {
    return(
        
        <div className='school-project-container'>
            <h1>Solo Game Development Project</h1>
            
            <div className='school-project-section-one'>
                <div className='school-project-text'>
                    <h2>The Original Plan</h2>
                    <hr/>
                    <p>
                        I completed my schooling at the Unniversity of Windsor. I graduated with a degree in Computer Information Systems. In fourth year, one of the courses you need to complete requires you to have a 2 semester long project with a proffessor looking over your progress. Ever since I was introduced to computer science I wanted to make a game by myself. I used this as an oppurtunity to do so.<br/><br/>I wanted to make a topdown bullet-hell shooter. In order to make the project complicated and worthy of being a graduation project, the complex components I decided to include were pathfinding and state-machines. Both considered simple forms of artificial intelligence.

                    </p>
                </div>
                <img 
                    src="images/school-project-1.png" 
                    alt="level-example" 
                    className="school-project-image"
                />
            </div>
            <div className='school-project-section-one'>
                <img 
                    src="images/school-project-2.png" 
                    alt="Description of the image" 
                    className="school-project-image"
                />
                <div className='school-project-text'>
                    <h2>Pathfinding</h2>
                    <hr/>
                    <p>
                    The picture to the left has a lot going on, so let me explain. I’ve added lines to help visualize how the pathfinding works. The game is based on a grid system, where each vertical line represents a tile. Red lines indicate tiles that cannot be walked on, while blue lines represent walkable tiles. The solid red line leading toward the player (the small blue circle at the bottom) shows the enemies' (white circles) most efficient path to approach the player.<br/><br/>The enemy evaluates adjacent nodes until it reaches the player, prioritizing the fastest route. This process uses an algorithm called A* pathfinding. A* combines the cost to reach a node with an estimated cost to the target, allowing it to prioritize paths that are likely to be optimal. It uses a priority queue to explore nodes with the lowest combined cost first and always finds the shortest path if one exists.

                    </p>
                </div>


            </div>
            <div className='school-project-text'>
                <h2>State Machines</h2>
                <hr/>
                <p>
                The other complex component of the project I included is state machines. I used state machines to create the bosses of each level. Unfortunately, I could not grab an image or video representing it, as the project is currently corrupted and under repair. The state machines are used to control an enemy's behavior by defining a set of states. Each state is triggered by its own condition, such as individual attributes like health, or even environmental factors like distance from the player. The states would look something like this: <br/>&emsp;• Decision State<br/>&emsp;• Phase One<br/>&emsp;• Phase Two<br/>&emsp;• and so on...<br/>The decision state is based on a real-time clock, checking the environment around it and determining when or if it will enter the next state. This is the basis of how I used state machines to control bosses in the game I developed for my school project.<br/><br/><br/><br/><br/><br/><br/><br/>
                </p>
            </div>


        </div>
        

    ) 
}