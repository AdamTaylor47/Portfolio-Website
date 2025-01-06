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
                        The picture to the left a lot going on so let me explain. What I have done is put lines to help visualize the way the pathfinding is working. The game was based off a grid system, each vertical line represents a tiles existence. Red meaning that it cannot be walked on and blue representing that it is able to be walked on. The solid red line going towards the player (the little blue circle at the bottom) is showing the enemies (white circles) most efficient path to approach the player.<br/><br/>The enemy compares adjacent nodes until player is reached with the goal of the fastest time in mind. The algorithm used for this is called A* pathfinding. This algorithm combines the cost to reach a node and an estimated cost to the target to prioritize paths that are likely to be optimal. A* uses a priority queue to explore nodes with the lowest combined cost first. It will always find the shortest path as long as it exists.

                    </p>
                </div>


            </div>
            <div className='school-project-text'>
                <h2>State Machines</h2>
                <hr/>
                <p>
                    The other complex component of the project I included are state machines. I used state machines to create the bosses of each level. I unfortunaly could not grab an image or video representing as currently the project is corrupt and under repair. The state machines are used to control an enemies behavior by defining a set of states. Each state is triggered on its own condition such as individual attributes such as health, or even environmental like distance from the player. The states would look something like this: <br/> - Decision State<br/>- Phase One<br/>- Phase Two<br/>- and so on...<br/>
                    The decision state is based off of a real time clock, checking the environment around it and determining when or if it will enter the next state. This is the basis of how I used state machines to control bosses in the game I developed for my school project.<br/><br/><br/><br/><br/><br/><br/><br/>
                </p>
            </div>


        </div>
        

    ) 
}