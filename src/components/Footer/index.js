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

//     const mybutton = document.getElementById("TopButton");

//     // When the user scrolls down 20px from the top of the document, show the button
//     window.onscroll = function() {scrollFunction()};

//     function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//     } else {
//     mybutton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
//     function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

    return (
    <footer>
    <p>Coded by <a href="https://github.com/trujilml" class="gitportfolio">Mekayla Trujillo</a></p> 
    <br />
    <Button>
        <FaArrowCircleUp onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    {/* <button onclick={topFunction} class="TopButton" title="Go to top of the page" placeholder="Return to top page">TOP</button> */}
    <br />
    <p>&copy;2021 - All Rights Reserved.</p>
    </footer>
    );
}
export default Footer;