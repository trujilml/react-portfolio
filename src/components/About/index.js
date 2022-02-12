import React from 'react';
import jpg from './trujillom.jpg';

function About() {
    return (
        <section className="container">
            <img src={jpg} id="avatar" class="my-2"  alt="Mekayla Trujillo" />
            <h2 id="about">About Mekayla Trujillo</h2>
            <hr></hr>
            <p>I am a Full Stack Web Developer who loves technology and has a strong interest in coding new applications for the online world.</p>
            <p>My technical skills involve the use of JavaScript, the MERN Stack (MongoDB, Express, React, Node.js), MySQL, Mongoose, HTML, and CSS.</p>
            <p>When not coding, I find myself either baking, working out, chatting with friends, or playing with my pets.</p>
            <hr></hr>
        </section>
    
    );
}

export default About;