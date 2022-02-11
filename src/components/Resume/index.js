import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import pdf from './Trujillo-resume-2022.pdf';

function Resume() {
    return (
       <div className="resume">
        <h2>Resume</h2>
        <br />
        <p><a href = {pdf}> Download Resume  <FontAwesomeIcon icon={solid ('file')} /></a></p>
        </div> 
        // list proficiencies in programs here
    );
}

export default Resume;