import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import pdf from './trujillo-resume-2022.pdf';

function Resume() {
    return (
        <section class="container">
        <div className="resume" class="mt-5">
        <h2 class="justify-content-center" >Resume</h2>
        <hr></hr>
        <p><a class="resumelink" href = {pdf}> Download Resume  <FontAwesomeIcon icon={solid ('file')} /></a></p>
        </div>

       <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <hr></hr>
        <p>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB, <br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs, Handlebars, <br />
            Webpack, GraphQL, GitHub, Heroku, Insomnia, Apollo Server, React Redux <br />
        </p>
        </div>
      </div>
      <hr></hr>
        </section>
    );
}

export default Resume;