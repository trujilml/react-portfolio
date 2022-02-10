import React from 'react';

function Nav() {
    return(
        <header>
            <h2>
                <a href="/">
                    <span><h2 id ="name">Mekayla Trujillo</h2></span> 
                    {/* remove clicked link asset */}
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {/* remove li button elements */}
                    <li className="mx-2">
                        <a href="#about">
                            About
                        </a>
                        {/* remove clicked link asset */}
                    </li>
                    <li className="mx-2">
                        <a href="#Contact">
                        <span>Contact</span>
                        </a>
                    </li>
                    <li className = "mx-2">
                        <a href="#Portfolio">
                        <span>Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                    <li>
                        <span>Footer</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;