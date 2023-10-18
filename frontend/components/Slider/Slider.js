import React, { useEffect, useState } from "react";
import OfferCardItem from "./OfferCardItem";
import Image from "next/image";
import nextPrevImage from "../../public/images/svgs/nextprevbtn.svg";
import SpecialOfferCard from "./SpecialOfferCard";

function mapScreenWidthToTailwindBreakpoint(screenWidth) {
  if (screenWidth < 640) {
    return "sm";
  } else if (screenWidth < 768) {
    return "md";
  } else {
    return "lg";
  }
}

const Slider = ({ cards, onCardClicked }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentScreenSize, setCurrentScreenSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setCurrentScreenSize(
        mapScreenWidthToTailwindBreakpoint(window.innerWidth)
      );
    }

    window.addEventListener("resize", handleResize);
    setCurrentScreenSize(mapScreenWidthToTailwindBreakpoint(window.innerWidth));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    x;
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  let numberOfRows = 3;
  if (currentScreenSize === "md") {
    numberOfRows = 2;
  } else if (currentScreenSize === "lg") {
    numberOfRows = 3;
  } else if (currentScreenSize === "sm") {
    numberOfRows = 1;
  }
  return (
    <div className="w-full flex flex-col items-center justify-center pb-10 overflow-hidden">
      <div className="w-full flex items-center justify-between relative ">
        <div className="w-full">
          <div
            className="flex transition-transform transform"
            style={{ translate: `-${currentIndex * (100 / numberOfRows)}%` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full flex-none px-2 py-10"
                style={{ width: `${100 / numberOfRows}%` }}
              >
                {card.isSpecial ? (
                  <SpecialOfferCard
                    years={card.years}
                    title={card.title}
                    investment={card.investment}
                    cost={card.cost}
                    rows={card.rows}
                    income={card.income}
                    onCardClicked={onCardClicked}
                  />
                ) : (
                  <OfferCardItem
                    years={card.years}
                    title={card.title}
                    investment={card.investment}
                    cost={card.cost}
                    rows={card.rows}
                    income={card.income}
                    onCardClicked={onCardClicked}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mt-10">
        <Image
          onClick={prevSlide}
          src={nextPrevImage}
          width={35}
          height={35}
          alt=""
          style={{ transform: "rotate(180deg)", cursor: " pointer" }}
        />
        <div className="indicators  border border-midGreen rounded-full p-1">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
        <Image
          onClick={nextSlide}
          src={nextPrevImage}
          width={35}
          height={35}
          alt=""
          style={{ cursor: " pointer" }}
        />
      </div>
    </div>
  );
};

export default Slider;
