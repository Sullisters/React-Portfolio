import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
                <ul className='navbar-nav text-decoration-none d-flex justify-content-around'>
                    <li className='nav-item'>
                        <a 
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            href='#About'
                            onClick={() => handlePageChange('About')}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                            href='#Portfolio'
                            onClick={() => handlePageChange('Portfolio')}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            href='#Contact'
                            onClick={() => handlePageChange('Contact')}>
                            Contact
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a 
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            href='#Resume'
                            onClick={() => handlePageChange('Resume')}>
                            Resume
                        </a>
                    </li>
                </ul>
    );
}

export default Navbar;