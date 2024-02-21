import React, {useState} from 'react';
import useWindowScroll from '../hooks/useWindowScroll'; // Assuming this is the file where your hook is defined
import {throttle} from 'lodash';

import scrollBtn from "../../../../public/images/scrollBtn.svg";
import Image from "next/image";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Define the handler to toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) { // Adjust as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Use your custom hook with the toggleVisibility handler
    useWindowScroll({
        handler: toggleVisibility,
        delay: 100, // Throttle delay in ms
    });

    // Scroll to top logic
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    };

    return (
        isVisible && (
            <div
                onClick={scrollToTop}
                className={`h-auto fixed flex bottom-8 right-8 z-50 p-3 bg-greenCard 
                bg-opacity-10 text-white rounded-full hover:bg-greenCard
                 transition-all duration-300 ease-in-out cursor-pointer `}
            >
                <Image src={scrollBtn} width={35} height={35} alt="scroll"/>
            </div>
        )
    );
};

export default ScrollToTopButton;
