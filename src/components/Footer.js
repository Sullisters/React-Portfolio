import React, { useState } from 'react';

function Footer() {
    const [footer, setFooter] = useState(['Github','LinkedIn','StackOverflow'])

    return (
        <div className='footer'>
            {footer[0]}
            {footer[1]}
            {footer[2]}
        </div>
    )
}

export default Footer;
