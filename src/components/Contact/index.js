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
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
            if(!errorMessage) {
                setFormState({...formState, [e.target.name]: e.target.value})
            }
        } 
    }

        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }

    return(
        <section>
            <h1 id="contact">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name={name} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type = "email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                            </div>
                    )}
                    <button id="button" type="submit">Submit</button>
                </div>
            </form>

            <h2 id = "contactlinks">
            Where I am at
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <a href="mailto: mickeytrj@gmail.com" title="Email address"><i class="fas fa-envelope"></i> Email Address</a>
                    </li>
                    <li className="mx-2">
                    <a href="https://github.com/trujilml" title="GitHub Page"><i class="fab fa-github"></i> GitHub</a>
                    </li>
                    <li className="mx-2">
                    <a href="https://www.linkedin.com/in/mekayla-trujillo-4149b4178/" title="LinkedIn Page"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </li>
                    <li className="mx-2">
                    <a href="https://codepen.io/trujilml21" title="CodePen Page"><i class="fab fa-codepen"></i> CodePen</a>
                    </li>
                    <li className="mx-2">
                    <a href="https://stackoverflow.com/users/16589330/mickey" title="Stack Overflow Page"><i class="fab fa-stack-overflow"></i> Stack Overflow</a>
                    </li>
                </ul>
            </nav>
            

        </section>
    );
}

export default Contact;