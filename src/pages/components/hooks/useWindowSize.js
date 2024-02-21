import { useState, useEffect } from 'react';

 function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize once to set initial window size
        handleResize();

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
export default useWindowSize;