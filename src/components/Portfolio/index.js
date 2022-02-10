import React from 'react';

function Portfolio() {
    return(
        <section>
        <div>
            <h2 id="portfolio"> Portfolio </h2>
        </div>
        

        <div class="grid-container">
            <a href="https://trujilml.github.io/top-3-taco-shops/" title="Top 3 Taco Shops" class="grid-item taco-shop">
            <div>
              <h3>Top 3 Taco Shops</h3>
              <span>HTML, CSS, JavaScript, Mapbox, OpenWeatherMap One Call API, Materialize</span>
              <a href="https://github.com/trujilml/top-3-taco-shops" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>

          <a href="https://trujilml.github.io/the-password-generator/" title="Password Generator" class="grid-item password">
            <div>
              <h3>Password Generator</h3>
              <span>HTML, CSS, JavaScript</span>
              <a href="https://github.com/trujilml/the-password-generator" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>

          <a href="http://mybrary2400.herokuapp.com/" title="MyBrary" class="grid-item mybrary">
            <div>
              <h3>MyBrary</h3>
              <span>JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku, CSS</span>
              <a href="https://github.com/Dustin2400/Mybrary" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>

          <a href="https://trujilml.github.io/web-api-coding-quiz/" title="Web API Coding Quiz" class="grid-item codequiz">
            <div>
              <h3>Web API Coding Quiz</h3>
              <span>HTML, CSS, JavaScript, Web API use</span>
              <a href="https://github.com/trujilml/web-api-coding-quiz" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>

          <a href="https://trujilml.github.io/vacation-weather-dashboard/" title="Vacation! A Weather Dashboard" class="grid-item vacationweather">
            <div>
              <h3>Vacation! A Weather Dashboard</h3>
              <span>HTML, CSS, JavaScript, Bootstrap, OpenWeatherMap One Call API, Moment.js</span>
              <a href="https://github.com/trujilml/vacation-weather-dashboard" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>

          <a href="https://trujilml.github.io/git-it-done/" title="Git it Done!" class="grid-item gititdone">
            <div>
              <h3>Git it Done!</h3>
              <span>HTML, CSS, JavaScript</span>
              <a href="https://github.com/trujilml/git-it-done" class="btn">View Project on GitHub<i class="fab fa-github"></i></a>
            </div>
            </a>
            
        </div>
        </section>
    );
}

export default Portfolio;