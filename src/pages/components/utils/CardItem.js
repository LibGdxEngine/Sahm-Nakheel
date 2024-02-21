import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import {useState} from "react";

// CardItem component is extracted into its own file for better reusability.
const CardItem = ({image, title, desc}) => {
    const controls = useAnimation();

    const handleHoverStart = () => controls.start({scale: 1.1, rotate: -5});
    const handleHoverEnd = () => controls.start({scale: 1, rotate: 0});

    return (
        <div
            className="w-4/5 flex flex-col items-start bg-white bg-opacity-50 justify-between h-auto overflow-hidden shadow-green rounded-3xl mx-8 p-8 sm:items-center md:bg-gray-200"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            <motion.div animate={controls} className="w-16 h-16 rounded-full overflow-hidden">
                <Image src={image} height={76} width={73} alt="wallet"/>
            </motion.div>
            <h1 className="text-lg font-extrabold text-primary">{title}</h1>
            <p className="text-sm text-black font-light">{desc}</p>
        </div>
    );
};

export default CardItem;
