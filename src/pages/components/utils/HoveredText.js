const HoveredText = ({text = "", className = ""}) => {
    return <div className={`w-full flex flex-col items-center justify-center mt-20 sm:mt-0 relative ${className}`}>
        {/*<div*/}
        {/*    className={`w-full  text-center absolute left-[50%] top-[-65%] translate-x-[-53%] sm:top-0 z-[2] sm:hidden ${className}`}>*/}
        {/*    <h1 className={`text-black font-thin`} style={{fontSize: "700%", opacity: "0.05"}}>{text}</h1>*/}
        {/*</div>*/}
        <h1 className={`text-7xl text-primary font-normal sm:text-4xl sm:mt-8 sm:font-extrabold z-[3]`}>
            {text}
        </h1>
    </div>
};


export default HoveredText;