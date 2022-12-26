import React from 'react';
import Wizard from '../../assets/projects/TradeWizard.JPG';
import Bird from '../../assets/projects/BirdBrain.JPG';
import Tech from '../../assets/projects/TechBlog.JPG';
import Note from '../../assets/projects/NoteTaker.JPG';
import '../../styles/Project.css';

function Project() {
    const tradeWizard = 
        <a href='https://sullisters.github.io/card-broker/' target='_blank'>
            <img className=' project' src={Wizard} />
        </a>

    const birdBrain = 
        <a href='https://birdbrain2022.herokuapp.com/' target='_blank'>
            <img className=' project' src={Bird} />
        </a>

    const techBlog = 
        <a href='https://schreiber-tech-blog.herokuapp.com/' target='_blank'>
            <img className=' project' src={Tech} />
        </a>

    const noteTaker = 
        <a href='https://express-note-taker-schreiber.herokuapp.com/' target='_blank'>
            <img className=' project' src={Note} />
        </a>

    const projects = [tradeWizard, birdBrain, techBlog, noteTaker]
    return (
        <div className='d-flex row'>
            <div className='col d-flex justify-content-center'>{projects[0]}</div>
            <div className='col d-flex justify-content-center'>{projects[1]}</div>
            <div className='col d-flex justify-content-center'>{projects[2]}</div>
            <div className='col d-flex justify-content-center'>{projects[3]}</div>
        </div>
    );
}

export default Project;