import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import pdf from './Trujillo-resume-2022.pdf';

function Resume() {
    return (
       <div>
        <h1 id="resume">Resume</h1>
        <FontAwesomeIcon icon={solid ('file')} size="l"/>
        <a href = {pdf}>Download Resume</a>
        </div> 
    );
}

export default Resume;