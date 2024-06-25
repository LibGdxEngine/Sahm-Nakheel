import React, {useEffect, useState} from "react";
import OfferCardItem from "./OfferCardItem";
import Image from "next/image";
import nextPrevImage from "../../../../public/images/nextprevbtn.svg";
import SpecialOfferCard from "./SpecialOfferCard";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";

function mapScreenWidthToTailwindBreakpoint(screenWidth) {
    if (screenWidth < 640) {
        return "sm";
    } else if (screenWidth < 768) {
        return "md";
    } else if (screenWidth < 1023) {
        return "lg";
    } else {
        return "xl";
    }
}

const Slider = ({investment_plans, onCardClicked}) => {
    const {t, i18n} = useTranslation();
    const cards = investment_plans;
    const [currentIndex, setCurrentIndex] = useState(0);

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
        numberOfRows = 1;
    } else if (currentScreenSize === "lg") {
        numberOfRows = 2;
    } else if (currentScreenSize === "xl") {
        numberOfRows = 3;
    } else if (currentScreenSize === "sm") {
        numberOfRows = 1;
    }

    return (
        <div className="w-[80vw] lg:w-[90vw] flex flex-col items-center justify-center pb-10 overflow-hidden">
            <div className="w-full flex items-center justify-between relative ">
                <div className="w-full">
                    <div
                        className="flex transition-transform transform"
                        style={{translate: `-${currentIndex * (100 / numberOfRows)}%`}}
                    >
                        {cards.map((card, index) => {
                            const name = i18n.language === "en" ? card.english_name : card.arabic_name;
                            const years_roi = i18n.language === "en" ? card.english_years_roi : card.arabic_years_roi;
                            const note1 = i18n.language === "en" ? card.english_note1 : card.arabic_note1;
                            const note2 = i18n.language === "en" ? card.english_note2 : card.arabic_note2;
                            const note3 = i18n.language === "en" ? card.english_note3 : card.arabic_note3;
                            const note4 = i18n.language === "en" ? card.english_note4 : card.arabic_note4;
                            const note5 = i18n.language === "en" ? card.english_note5 : card.arabic_note5;
                            const note6 = i18n.language === "en" ? card.english_note5 : card.arabic_note6;
                            const rows = [note1, note2, note3, note4, note5, note6]
                            return (
                                <div
                                    key={index}
                                    className="w-full flex-none px-6 py-10"
                                    style={{width: `${100 / numberOfRows}%`}}
                                >

                                    {card.is_most_popular ? (
                                        <SpecialOfferCard
                                            years={card.years}
                                            title={name}
                                            investment={years_roi}
                                            cost={card.roi}
                                            rows={rows}
                                            income={card.cash_price}
                                            onCardClicked={()=>{
                                                onCardClicked(card.id);
                                            }}
                                            button_text={t(tokens.plans.button_text)}
                                            most_popular_text={t(tokens.plans.most_popular)}
                                        />
                                    ) : (
                                        <OfferCardItem
                                            years={card.years}
                                            title={name}
                                            investment={years_roi}
                                            cost={card.roi}
                                            rows={rows}
                                            income={card.cash_price}
                                            onCardClicked={()=>{
                                                onCardClicked(card.id);
                                            }}
                                            button_text={t(tokens.plans.button_text)}
                                        />
                                    )}
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
            <span className={`w-full font-normal text-lg text-center sm:px-10`}>{t(tokens.plans.message)}</span>

            <div className="w-full flex items-center justify-between mt-10">
                <Image
                    onClick={prevSlide}
                    src={nextPrevImage}
                    width={35}
                    height={35}
                    alt=""
                    style={{transform: "rotate(180deg)", cursor: " pointer"}}
                    className={`mx-10`}
                />

                <div className="indicators border-1 border-darkGreen rounded-full p-1">
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
                    style={{cursor: " pointer"}}
                    className={`mx-10`}
                />
            </div>
        </div>
    );
};

export default Slider;
