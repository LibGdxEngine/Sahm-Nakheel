import Image from "next/image";
import walletImage1 from "../../../../public/images/Wallet Icon (1).svg";
import walletImage2 from "../../../../public/images/Wallet Icon (2).svg";
import walletImage3 from "../../../../public/images/Wallet Icon (3).svg";
import walletImage4 from "../../../../public/images/Wallet Icon (4).svg";
import walletImage5 from "../../../../public/images/Wallet Icon (5).svg";
import walletImage6 from "../../../../public/images/Wallet Icon (6).svg";
import walletImage7 from "../../../../public/images/Wallet Icon (7).svg";
import walletImage from "../../../../public/images/Wallet Icon.svg";
import polygon3 from "../../../../public/images/Polygon 3.svg";
import HoveredText from "@/pages/components/utils/HoveredText";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import Layout from "@/pages/utils/Layout";


const CardItem = ({image, title, desc}) => {


    return (
        <>
            <div
                className="h-72 w-fit flex flex-col items-start bg-white bg-opacity-50 justify-start
                        rounded-3xl mx-4 md:mx-1 p-8 md:p-4   sm:text-xs "
            >
                <div  className="w-full sm:w-8 sm:h-auto ">
                    <Image src={image} height={76} width={73} alt="wallet"/>
                </div>

                <div className="text-lg font-extrabold text-primary sm:mt-4 w-full my-4">{title}</div>
                <div className="text-sm text-dark font-thin sm:text-sm">
                    {desc}
                </div>
            </div>
        </>
    );
};

const Features = ({
                      arabic_features_slogan,
                      english_features_slogan
                  }) => {
    const {t, i18n} = useTranslation();
    const features_slogan = i18n.language === "en" ? english_features_slogan : arabic_features_slogan;
    const cardData = [
        {
            image: walletImage,
            title: t(tokens.features.affordable),
            desc: t(tokens.features.affordable_desc)
            //
        },
        {
            image: walletImage1,
            title: t(tokens.features.exceptional),
            desc: t(tokens.features.exceptional_desc)
            // title: 'Exceptional',
            // desc:
        },
        {
            image: walletImage2,
            title: t(tokens.features.longterm),
            desc: t(tokens.features.longterm_desc)
            // title: 'Long-Term',
            // desc:
        },
        {
            image: walletImage3,
            title: t(tokens.features.guaranteed),
            desc: t(tokens.features.guaranteed_desc)
            // title: 'Guaranteed',
            // desc:
        },
        {
            image: walletImage4,
            title: t(tokens.features.effortless),
            desc: t(tokens.features.effortless_desc)
            // title: 'Effortless',
            // desc:
        },
        {
            image: walletImage5,
            title: t(tokens.features.flexible),
            desc: t(tokens.features.flexible_desc)
            // title: 'Flexible',
            // desc:
        },
        {
            image: walletImage6,
            title: t(tokens.features.easy),
            desc: t(tokens.features.easy_desc)
            // title: 'Easy',
            // desc:
        },
        {
            image: walletImage7,
            title: t(tokens.features.safe),
            desc: t(tokens.features.safe_desc)
            // title: 'Safe',
            // desc:
        },

    ];
    const title = i18n.language === "en" ? "Great Features" : "مميزات رائعة";
    return (
        <div className={`w-full `}>
            <div
                id="features"
                className="w-full flex flex-col items-center justify-center my-20 relative">
                <div className="w-full  absolute left-[0%] top-[-80%] translate-x-[0%] sm:top-0 z-[-1] md:hidden">
                    <Image src={polygon3} alt="" className="w-full h-auto"/>
                </div>
                <HoveredText text={`${title}`}/>
                <div className="text-xl w-[40%] sm:w-full text-primary font-light text-center sm:text-base">
                    {features_slogan}
                </div>
            </div>

            <div
                className="w-full mt-10 px-[10%] sm:px-[2%] grid grid-cols-4 gap-y-8 md:grid-cols-2 md:gap-x-0 lg:grid-cols-2
                lg:gap-8 md:gap-y-16 sm:sm-features rounded-3xl sm:bg-lightGreen sm:bg-opacity-20 sm:grid-cols-1 ">
                {cardData.map((card, index) => (
                    <CardItem key={index} image={card.image} title={card.title} desc={card.desc}/>
                ))}
            </div>
        </div>
    );
};

export default Features;
