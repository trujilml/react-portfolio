import React from 'react';
import Project from '../../components/Project';

const projects = [
  {
    id: 0,
    title: "FITr",
    languages: "React, MongoDB, Node.js, JavaScript, Express.js",
    packages: "Concurrently, Heroku, Mongoose, MongoDB Atlas, JSON webtoken, Apollo-Server-Express, GraphQL",
    image: "/img/fitr-app.png",
    description: "FITr is a workout application where fitness enthusiasts can post their workout sessions and share them with their followers. Their workouts are presented in a daily format and in a weekly format where they can review their exercise routine.",
    repo: "https://github.com/SmasherCoder/fitr",
    live: "https://fitrfitr.herokuapp.com/"
  },
  {
    id: 1,
    title: "MyBrary",
    languages: "JavaScript, Node.js, Express.js, MySQL, Sequelize, CSS",
    packages: "Flatpickr (Vue.js), Dotenv, Bcrypt",
    image: "/img/mybrary.png",
    description: "MyBrary is your home for interactive book rentals. MyBrary allows users to rent, review, vote for, add, and delete their favorite books to the website.",
    repo: "https://github.com/Dustin2400/Mybrary",
    live: "http://mybrary2400.herokuapp.com/"
  },
  {
    id: 2,
    title: "Top 3 Taco Shops",
    languages: "HTML, JavaScript, CSS, jQuery, jQuery UI",
    packages: "Mapbox, Materialize, OpenWeatherMap One Call API",
    image: "/img/top3tacos.png",
    description: "Top 3 Taco Shops is a webpage that highlights the top three taco shops in Austin, Texas, and allows users to view these three taco shops and their popular offerings, followed by voting for their favorite taco from that respective shop, and viewing the map below that shows the exact map location of their favorite taco shop.",
    repo: "https://github.com/trujilml/top-3-taco-shops",
    live: "https://trujilml.github.io/top-3-taco-shops/"
  },
  {
    id: 3,
    title: "Budget Tracker Offline",
    languages: "MongoDB, Node.js, JavaScript, Express.js",
    packages: "IndexedDB, Heroku, Mongoose, MongoDB Atlas, Morgan, Compression",
    image: "/img/budget-tracker-app.png",
    description: "Budget Tracker Offline is a budget tracker application that allows for offline access and functionality. Users are able to add their expenses and deposits to their budget with or without a internet connection. Their offline transactions will be updated when brought back from offline.",
    repo: "https://github.com/trujilml/budget-tracker-offline",
    live: "https://ancient-coast-11043.herokuapp.com/"
  },
  {
    id: 4,
    title: "Note Taker",
    languages: "Node.js, Express.js, CSS, HTML, JavaScript",
    packages: "UUID, Heroku, Insomnia",
    image: "/img/notetaker.png",
    description: "Note Taker is a web application that allows you to type and save your notes - whether it is to keep track of tasks needed to completed or to organize personal thoughts.",
    repo: "https://github.com/trujilml/note-taker",
    live: "https://young-stream-50103.herokuapp.com/"
  },
  {
    id: 5,
    title: "MVC Tech Blog",
    languages: "MySQL2, Node.js, JavaScript, Sequelize, Express.js, CSS, HTML",
    packages: "Handlebars, Express-Session, Connect-Session -Sequelize, JawsDB, Insomnia, Heroku, dotenv, bcrypt, nodemon",
    image: "/img/mvc-techblog.png",
    description: "Tech Blog is a blogging website that allows user to publish their own posts about tech, coding, and anything else related to the tech world! This is a CMS-style blog that is built with the MVC (model-view-controller) paradigm with Handlebars.js as the HTML template language, Sequelize as the ORM (object-relational mapping), and the Express-Session npm package for user authentication.",
    repo: "https://github.com/trujilml/mvc-tech-blog",
    live: "https://vast-brushlands-11504.herokuapp.com/"
  },
];

function Portfolio() {
    return(
      <section className="container">
            <h2 id="portfolio"> Portfolio </h2>
            <hr></hr>

            <Project projects={projects} />
            <hr></hr>
        </section>
    );
}

export default Portfolio;