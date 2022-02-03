import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_mKdUJe7qQhWiVRQUXAltg");


function ContactForm() {
    
    //  hook will manage form data and initialize value of the state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formState,
            process.env.REACT_APP_USER_ID
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setErrorMessage('Your message has been sent!');
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        
    }
    // function will sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) {
        // validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                    // no error
                  setErrorMessage('');
                }
            }
            if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
            }
        }  
        // uses setFormState() to update the formState value for the name property
        // spread operator (...) to retain the other key-value pairs in this object
        setFormState({...formState, [e.target.name]: e.target.value })
    }
      
    return (
        <section id="contact-me">
          <h2 data-testid="h1tag">Contact me</h2>
          <br></br>
          <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="name" />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="email" />
                </div>
                <br></br>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} placeholder="Your message" rows="3" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
    )
}
    
export default ContactForm;