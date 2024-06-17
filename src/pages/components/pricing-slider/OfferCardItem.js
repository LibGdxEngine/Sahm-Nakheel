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
        <div className={`w-full `}>
            <motion.div
                className="w-full flex flex-col  items-start justify-between h-full bg-white rounded-3xl
                 sm:mx-0 p-8 xs:p-4 shadow-lg shadow-y-50 "
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
                onClick={() => {
                    if(onCardClicked) {
                        onCardClicked(cost);
                    }
                }}
                animate={controls}
            >
                <div className="w-full flex items-center justify-start ">
                    <div className="w-fit text-6xl text-dark font-extrabold me-5">{years}</div>
                    <div className="w-full flex flex-col items-start justify-center">
                        <div className=" text-xl text-lightGreen">{title}</div>
                        <div className="text-xs text-mildGray">{investment}</div>
                        <div className="text-sm text-navyBlue font-extrabold">{cost}</div>
                    </div>
                    <div className={`w-36 h-full text-2xl text-center text-dark font-bold `}>
                        8K <span className={`text-lightGreen`}>EGP</span>
                    </div>
                </div>

                <div className={`h-fit  ${income ? "my-6" : "my-1"}`}>
                    <FeatureRow text={`${rows[0]}`}/>
                    <FeatureRow text={`${rows[1]}`}/>
                    <FeatureRow text={`${rows[2]}`}/>
                    <FeatureRow text={`${rows[3]}`}/>
                    <FeatureRow text={`${rows[4]}`}/>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        {income &&
                            <h1 className="text-3xl  lg:text-2xl  sm:text-base  font-extrabold me-1">{income}</h1>}
                        {income && <h1 className="text-sm text-lightGreen font-bold me-1 ">EGP</h1>}
                    </div>
                    {income && <div
                        className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light p-1.5 px-4
              rounded-3xl text-xs font-bold hover:bg-light 
              
              dark:bg-light dark:text-white   
               md:p-2 md:px-4 md:text-sm 
               sm:px-1.5 sm:text-xs sm:py-1 xs:text-xs xs:text-center 
              `}
                        style={{cursor: "pointer"}}
                    >
                        {button_text}
                    </div>}

                </div>

            </motion.div>
        </div>
    );
};

export default OfferCardItem;
