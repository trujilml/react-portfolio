import React from 'react';

function Nav() {
    return(
        <header className = "flex-row px-1">
            <h2>
                <a href="/">
                    <h2 id ="name">Mekayla Trujillo</h2>
                    {/* remove clicked link asset */}
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* remove li button elements */}
                    <li className="mx-2">
                        <a href="#about">
                            <span>About</span>
                        </a>
                        {/* remove clicked link asset */}
                    </li>
                    <li className="mx-2">
                        <a href="#contact">
                        <span>Contact</span>
                        </a>
                    </li>
                    <li className = "mx-2">
                        <a href="#portfolio">
                        <span>Portfolio</span>
                        </a>
                    </li>
                    <li className = "mx-2">
                        <a href="#esume">
                        <span>Resume</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;