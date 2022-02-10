import React from 'react';

import pdf from './Trujillo-resume-2022.pdf';

function Resume() {
    return (
       <div>
        <h1 id="resume">Resume</h1>
        <a href = {pdf}>Download Resume</a>
        </div> 
    );
}

export default Resume;