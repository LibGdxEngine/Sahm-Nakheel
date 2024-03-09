import {motion, useAnimation} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import {useTranslation} from "next-i18next";

// CardItem component is extracted into its own file for better reusability.
const CardItem = ({image, title, desc}) => {
    const controls = useAnimation();
    const {t, i18n} = useTranslation();
    const handleHoverStart = () => controls.start({scale: 1.1, rotate: -5});
    const handleHoverEnd = () => controls.start({scale: 1, rotate: 0});

    return (
        <div
            style={{direction: i18n.language === "en" ? "ltr" : "rtl"}}
            className="w-4/5 flex flex-col items-start bg-white bg-opacity-50 justify-start h-auto overflow-hidden shadow-green rounded-3xl mx-8 p-8 sm:items-center md:bg-gray-200"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            <motion.div animate={controls} className="w-16 h-16 rounded-full overflow-hidden">
                <Image src={image} height={76} width={73} alt="wallet"/>
            </motion.div>
            <div className="text-lg font-extrabold text-primary mt-6">{title}</div>
            <div className="text-lg text-black font-light mt-3">{desc}</div>
        </div>
    );
};

export default CardItem;
