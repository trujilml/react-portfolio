import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

const Footer = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
    <footer>
    <p>Coded by <a href="https://github.com/trujilml" class="gitportfolio">Mekayla Trujillo</a></p> 
    <p>&copy;2022 - All Rights Reserved.</p>
    <br />
    <Button>
        <FaArrowCircleUp onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    <br />
    </footer>
    );
}
export default Footer;