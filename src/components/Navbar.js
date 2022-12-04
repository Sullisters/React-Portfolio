import React from 'react';
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
    <ul className='navbar d-flex justify-content-around'>
        <a 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            href='#About'
            onClick={() => handlePageChange('About')}>
            About
        </a>
        <a 
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            href='#Portfolio'
            onClick={() => handlePageChange('Portfolio')}>
            Portfolio
        </a>
        <a 
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            href='#Contact'
            onClick={() => handlePageChange('Contact')}>
            Contact
        </a>
        <a 
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            href='#Resume'
            onClick={() => handlePageChange('Resume')}>
            Resume
        </a>           
    </ul>
    );
}

export default Navbar;