import Layout from "../../utils/Layout";
import CardItem from "../utils/CardItem";
import personPlaceHolder from "../../../../public/images/personPlaceHolder.svg";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";

const WhatPeopleSays = ({feedbacks}) => {
    const {t, i18n} = useTranslation();

    return (
        <Layout className="w-full flex flex-col mt-56 sm:mt-32">
            <div
                className="text-center text-6xl text-primary leading-normal font-light sm:text-3xl sm:mt-0 sm:font-extrabold">
                {t(tokens.wpsau.what_people_say)}
            </div>
            <div
                className="text-center text-6xl text-midGreen leading-normal font-semibold sm:text-3xl sm:mt-0 sm:font-extrabold">
                {t(tokens.wpsau.sahm_nakheel)}
            </div>
            <div
                className="grid grid-cols-3 gap-y-8 gap-x-14 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  lg:gap-8 md:gap-y-16 mt-10 ">
                {feedbacks.map((item, index) => {
                    const name = i18n.language === "en" ? item.english_name : item.arabic_name;
                    const word = i18n.language === "en" ? item.english_word : item.arabic_word;
                    return (
                        <CardItem
                            key={index}
                            image={personPlaceHolder}
                            title={name}
                            desc={word}
                        />
                    )
                })}
            </div>
        </Layout>
    );
};

export default WhatPeopleSays;
