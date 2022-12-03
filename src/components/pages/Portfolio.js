import React from 'react';

function Portfolio() {
    const portfolio = 'Portfolio'
    const box = 'placeholder'
    return (
        <>
            <h1>{portfolio}</h1>
            <div className='box'>{box}</div>
            <div className='box'>{box}</div>
            <div className='box'>{box}</div>
            <div className='box'>{box}</div>
        </>
    )
}

export default Portfolio;