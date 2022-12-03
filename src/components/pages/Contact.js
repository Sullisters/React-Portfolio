import React, { useState } from 'react';

function Contact() {
    // State variables for form fields
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Change state of email, name, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setName('');
        setMessage('');
    }

    return (
        <>
            <h3>Contact Me:</h3>
            <form className='form'>
                <input
                    value={email}
                    name='email'
                    type='email'
                    placeholder='email'
                    onChange={handleInputChange}
                />
                <input
                    value={name}
                    name='name'
                    type='text'
                    placeholder='name'
                    onChange={handleInputChange}
                />
                <input
                    value={message}
                    name='message'
                    type='text'
                    placeholder='insert message here'
                    onChange={handleInputChange}
                />
                <button
                    type='button'
                    onClick={handleFormSubmit}>
                        Submit Message
                    </button>
            </form>
        </>
    )
}

export default Contact;