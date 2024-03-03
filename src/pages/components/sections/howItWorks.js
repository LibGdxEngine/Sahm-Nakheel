import Image from "next/image";
import HoveredText from "@/pages/components/utils/HoveredText";
import arrow from "../../../../public/images/Arrow.svg"
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
// Data for each step


// Step Component
const Step = ({imageSrc, title, description}) => (
    <div className="w-full flex flex-col items-center justify-center ">
        <Image src={imageSrc} width={90} height={150} alt={title}/>
        <h1 className="text-primary text-3xl font-bold mt-2 text-center">{title}</h1>
        <p className="text-dark text-lg font-thin text-center sm:text-sm">
            {description}
        </p>
    </div>
);

const HowItWorks = () => {
    const {t, i18n} = useTranslation();
    const steps = [
        {
            imageSrc: "/images/Group 1.svg",
            title: t(tokens.hiw.register),
            description: t(tokens.hiw.register_desc)
        },
        {
            imageSrc: "/images/Group 1 (1).svg",
            title: t(tokens.hiw.choose),
            description: t(tokens.hiw.choose_desc)
        },
        {
            imageSrc: "/images/Group 1 (2).svg",
            title: t(tokens.hiw.easy_pay),
            description: t(tokens.hiw.easy_pay_desc)
        },
        {
            imageSrc: "/images/Group 1 (3).svg",
            title: t(tokens.hiw.own),
            description: t(tokens.hiw.own_desc)
        }
    ];
    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center mt-20 relative">
                <HoveredText text={`${t(tokens.hiw.title)}`}/>
                <h1 className="text-xl text-primary font-light text-center sm:text-base sm:mx-8">
                    {t(tokens.hiw.slogan)}
                </h1>
            </div>
            <div
                className={`mx-40 md:mx-10 sm:mx-4 mt-10 grid grid-cols-7 gap-y-8 lg:gap-2 md:grid-cols-2 md:gap-y-16`}>
                {steps.map((step, index) => (
                    <>
                        <Step key={index} {...step} />
                        {index + 1 === steps.length ?
                            "" : <div className=" flex flex-col items-center justify-center  md:hidden ">
                                <Image src={arrow}
                                       width={92}
                                       height={37}
                                       alt=""/>
                            </div>}
                    </>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
