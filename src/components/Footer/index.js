import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {

    return (
    <footer>
    <div class="details">
    <p><FontAwesomeIcon icon={brands('github')} /> <a href="https://github.com/trujilml" title="GitHub Page">GitHub</a></p>
    <p><FontAwesomeIcon icon={brands('linkedin')} /> <a href="https://www.linkedin.com/in/mekayla-trujillo-4149b4178/" title="LinkedIn Page">LinkedIn</a></p>
    <p><FontAwesomeIcon icon={brands('stack-overflow')} /><a href="https://stackoverflow.com/users/16589330/mickey" title="Stack Overflow Page"> Stack Overflow</a></p>
    <p><FontAwesomeIcon icon={brands('codepen')} /><a href="https://codepen.io/trujilml21" title="CodePen Page"> CodePen</a></p>
    </div>

    <p>Coded by Mekayla Trujillo <br></br> &copy;2022 - All Rights Reserved.</p>
    
    </footer>
    );
}
export default Footer;