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
            
            <form className='form col-7'>
                <h3>Contact Me @<a href='#'>Heatonpschreiber@gmail.com</a></h3>
                <div class="row">
                    <div className='col'>
                        <label>Email:</label>
                        <input
                            value={email}
                            name='email'
                            type='email'
                            placeholder='email'
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <div className='col'>
                        <label>Name:</label>
                        <input
                            value={name}
                            name='name'
                            type='text'
                            placeholder='name'
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                </div>
                <div class="form-group">
                    <label>Message:</label>
                    <textarea
                        value={message}
                        name='message'
                        type='text'
                        placeholder='insert message here'
                        onChange={handleInputChange}
                        className='form-control'
                        rows='4'
                    />
                    <button
                    type='button'
                    className='btn btn-outline-light mt-2'
                    onClick={handleFormSubmit}>
                        Submit Message
                    </button>
                </div>
            </form>
        </>
    )
}

export default Contact;