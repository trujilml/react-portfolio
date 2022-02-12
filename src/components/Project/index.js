import React from 'react';

function Project(props) {
    return(
        <section className="container">
                <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
                {props.projects.map((project) => (
                    <div className="column is-half">
                        <div className="card">
                            <div className="card-image">
                                    <a href={project.live}>
                                        <img src={process.env.PUBLIC_URL + project.image} 
                                        class="project-image"
                                        style= {{width: '750px', height: '500px'}}
                                       alt="placeholder" />
                                    </a>
                                </div>
                                <br></br>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left"></div>
                                        <div className="media-content">
                                            <h4 className="title" key={project.id}>
                                                {project.title}
                                            </h4>
                                            </div>
                                        </div>

                                <div className="content">
                                    {project.description}
                                <br />
                                <br />
                                <div className="content">
                                    Languages: {project.languages}
                                    <br />
                                    NPM packages: {project.packages}
                                    </div>
                                    <br></br>
                                <div className="card-footer">
                                    <footer class="footcard">
                                        <a
                                        href={project.repo}
                                        className="card-footer-item"
                                        target="_blank" rel="noreferrer"
                                        >
                                        Repo link
                                        </a>
                                        <br />
                                        <a 
                                        href={project.live}
                                        className="card-footer-item"
                                        target="_blank" rel="noreferrer"
                                        >
                                        Deployed Link
                                        </a>
                                    </footer>
                                    </div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                         </div>
                    </div>
                ))}
                </div>
        </section>
    );
}

export default Project;