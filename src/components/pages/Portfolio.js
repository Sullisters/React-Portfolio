import React from 'react';
import Project from './Project';

function Portfolio() {
    const portfolio = 'Portfolio'
    return (
        <>
            <h1>{portfolio}</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col'><Project/></div>
                    <div className='col'><Project/></div>
                    <div class='w-100'></div>
                    <div className='col'><Project/></div>
                    <div className='col'><Project/></div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;