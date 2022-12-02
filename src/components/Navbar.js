import React, { useState } from 'react';

function Navbar() {
    let [nav, setNav] = useState(['About','Portfolio','Contact','Resume'])
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='navbar'>
                    <h3>{nav[0]}</h3>
                    <h3>{nav[1]}</h3>
                    <h3>{nav[2]}</h3>
                    <h3>{nav[3]}</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar;