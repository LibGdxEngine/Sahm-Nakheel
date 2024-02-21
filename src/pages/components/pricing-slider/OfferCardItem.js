import {motion, useAnimation} from "framer-motion";
import {useState} from "react";
import FeatureRow from "./FeatureRow";

const OfferCardItem = ({
                           years,
                           title,
                           investment,
                           cost,
                           rows,
                           income,
                           onCardClicked,
                           button_text
                       }) => {
    const [hovered, setHovered] = useState(false);
    const controls = useAnimation();

    const handleHover = () => {
        setHovered(true);
        controls.start({scale: 1.05}); // Scale up when hovered
    };

    const handleHoverEnd = () => {
        setHovered(false);
        controls.start({scale: 1}); // Reset scale when not hovered
    };
    return (
        <>
            <motion.div
                className="w-full flex flex-col items-start justify-between h-full bg-white rounded-3xl sm:mx-0 p-8 shadow-lg shadow-y-50"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
                onClick={() => {
                    onCardClicked(cost);
                }}
                animate={controls}
            >
                <div className=" flex items-center justify-center">
                    <div className="text-6xl font-extrabold me-5">{years}</div>
                    <div className="flex flex-col items-start justify-center">
                        <div className=" text-xl text-lightGreen">{title}</div>
                        <div className="text-xs text-mildGray">{investment}</div>
                        <div className="text-sm text-navyBlue font-extrabold">{cost}</div>
                    </div>
                </div>

                <div className={`h-fit  my-6`}>
                    <FeatureRow text={`${rows[0]}`}/>
                    <FeatureRow text={`${rows[1]}`}/>
                    <FeatureRow text={`${rows[2]}`}/>
                    <FeatureRow text={`${rows[3]}`}/>
                    <FeatureRow text={`${rows[4]}`}/>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-3xl  lg:text-2xl  sm:text-base  font-extrabold me-1">{income}</h1>
                        <h1 className="text-sm text-lightGreen font-bold me-1 ">EGP</h1>
                    </div>

                    <div
                        className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light p-1.5 px-4
              rounded-3xl text-xs font-bold hover:bg-light 
              
              dark:bg-light dark:text-white   
               md:p-2 md:px-4 md:text-sm 
               sm:px-1.5 sm:text-xs sm:py-1
              `}
                        style={{cursor: "pointer"}}
                    >
                        {button_text}
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default OfferCardItem;
