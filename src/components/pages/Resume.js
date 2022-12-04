import React from 'react';

function Resume() {
    return (
        <>
            <h1>Resume</h1>
            <a
                className='resume-download'
                href='#'>
                Download PDF:
            </a>
            <h4>Front End:</h4>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
            <h4>Back End:</h4>
            <ul>
                <li>SQL</li>
                <li>MySQL</li>
                <li>GraphSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </>
    )
}

export default Resume;