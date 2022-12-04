import React from 'react';
import Project from './Project';

function Portfolio() {
    const portfolio = 'Portfolio'
    return (
        <>
            <h1>{portfolio}</h1>
            <div className='box'><Project/></div>
            <div className='box'><Project/></div>
            <div className='box'><Project/></div>
            <div className='box'><Project/></div>
        </>
    )
}

export default Portfolio;