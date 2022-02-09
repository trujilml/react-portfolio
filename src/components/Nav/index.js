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
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;