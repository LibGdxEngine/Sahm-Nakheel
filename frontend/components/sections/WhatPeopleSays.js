import { motion, useAnimation } from "framer-motion";
import personPlaceHolder from "../../public/images/svgs/personPlaceHolder.svg";
import { useState } from "react";
import Image from "next/image";
const CardItem = ({ image, title, desc }) => {
  const [hovered, setHovered] = useState(false);

  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.1, rotate: -5 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1, rotate: 0 }); // Reset scale when not hovered
  };

  return (
    <>
      <div
        className="w-4/5 flex flex-col items-start bg-white bg-opacity-50 justify-between h-auto overflow-hidden shadow-green
        rounded-3xl mx-8 p-8 sm:items-center md:bg-gray-200"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div animate={controls} className="">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image src={image} height={76} width={73} alt="wallet" />
          </div>
        </motion.div>

        <h1 className="text-lg font-extrabold text-primary">{title}</h1>
        <p className="text-sm text-dark font-thin">{desc}</p>
      </div>
    </>
  );
};

const WhatPeopleSays = () => {
  return (
    <div className="w-full flex flex-col mt-56 sm:mt-32">
      <p className="text-center text-6xl text-primary leading-normal font-thin sm:text-3xl sm:mt-0 sm:font-extrabold">
        What people say about{" "}
      </p>
      <p className="text-center text-6xl text-midGreen leading-normal sm:text-3xl sm:mt-0 sm:font-extrabold">
        Sahm Nakheel
      </p>
      <div className="grid grid-cols-3 gap-y-8 gap-x-14 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-y-16 mt-10">
        <CardItem
          image={personPlaceHolder}
          title={`Abdullah Hussein`}
          desc={`“Simple, reliable, scalable, and consistent - that’s the type of investment I look for and Nakheel Valley has it all. The business is promised to 
          generate competitive returns for investors in the form of both cash and peace of mind.”`}
        />
        <CardItem
          image={personPlaceHolder}
          title={`Khaled Ahmed`}
          desc={`“I have a dozen different investments, and with the current situation of the pandemic, agri-business model of Nakheel Valley seems to be the optimum solution for a stable and safe investment.”`}
        />
        <CardItem
          image={personPlaceHolder}
          title={`Ahmed Hosny`}
          desc={`“Nakheel Valley Investment project provides an excellent choice of great returns with the least risk to be taken. I get the feeling that Nakheel Valley is ahead of the game.”`}
        />
        <CardItem
          image={personPlaceHolder}
          title={`Ahmed Adel`}
          desc={`“We feel that our investment is secure with Nakheel Valley. The idea is solid and promising in the long-run. Suits us very well.”`}
        />
        <CardItem
          image={personPlaceHolder}
          title={`Rokaya Nabil`}
          desc={`“As an investor, I am constantly searching for solid investment opportunities and the ones presented by Nakheel Valley rise to the top.”`}
        />
        <CardItem
          image={personPlaceHolder}
          title={`Ahmed Adel`}
          desc={`“We feel that our investment is secure with Nakheel Valley. The idea is solid and promising in the long-run. Suits us very well.”`}
        />
      </div>
    </div>
  );
};

export default WhatPeopleSays;
