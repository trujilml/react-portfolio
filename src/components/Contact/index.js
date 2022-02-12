import React, {useState} from 'react';
import {validateEmail} from "../../utils/helpers";

function Contact() {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if(!isValid) {
                setErrorMessage("Please enter a valid email address.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }
            if(!errorMessage) {
                setFormState({...formState, [e.target.name]: e.target.value})
            }
        } 

        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }
    

    return(
        <section className="container">
            <h2 id="contact">Contact Me</h2>
            <hr></hr>
            <form id="contact-form" form class= "justify-content-center">
                <div class="mt-5">
                    <label htmlFor="name">Name:</label>
                    <input class="form-control" type="text" defaultValue={name} onBlur={handleChange} name={name} />
                </div>
                <div class="mt-5">
                    <label htmlFor="email">Email Address:</label>
                    <input class="form-control" type = "email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div class="mt-5">
                    <label htmlFor="message">Message:</label>
                    <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="3"/>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                            </div>
                    )}
                    <div class="mt-5 mb-5">
                    <button id="button" class="btn btn-outline-dark" onSubmit={handleSubmit} type="submit">Submit</button>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </section>
        
    );
}

export default Contact;