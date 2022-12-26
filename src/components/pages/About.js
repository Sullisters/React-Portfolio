import React from 'react';
import '../../styles/About.css'

function About() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <img src={require('file:///C:/Users/music/Downloads/80B7DE0A-E3A0-454D-9E08-64827AA0489E.jpeg')} alt='' className='profile'></img>
                </div>
            
                <div className='col-7'>
                    <h1>
                        About
                    </h1>
                    <p>
                    Hello! I am Philip. I've been drawing and working with technology for over a decade. I graduated from University with a BFA in Illustration. I wanted to work on changing my life and decided to attend the Univeristy of Washington Full Stack Web Dev Bootcamp.

                    More to come!
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default About;