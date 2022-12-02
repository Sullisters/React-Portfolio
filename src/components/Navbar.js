import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
                <ul className='navbar-nav text-decoration-none d-flex justify-content-around'>
                    <li className='nav-item'>
                        <a 
                            className='nav-link'
                            href='#'
                            onClick={() => handlePageChange('About')}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className='nav-link'
                            href='#'
                            onClick={() => handlePageChange('Portfolio')}>
                        Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className='nav-link'
                            href='#'
                            onClick={() => handlePageChange('Contact')}>
                        Contact
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className='nav-link'
                            href='#'
                            onClick={() => handlePageChange('Resume')}>
                        Resume
                        </a>
                    </li>
                </ul>
    )
}

export default Navbar;