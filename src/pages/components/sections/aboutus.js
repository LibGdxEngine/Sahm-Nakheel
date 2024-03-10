import Image from "next/image";
import aboutUs from "../../../../public/images/About Us.svg";
import profilePic2 from "../../../../public/images/page2.svg";
import HoveredText from "@/pages/components/utils/HoveredText";
import Layout from "@/pages/utils/Layout";
import i18next from "i18next";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";

// Create a reusable ImageComponent
const ImageComponent = ({src, alt}) => (
    <div className="w-full h-full flex items-center justify-center">
        <Image
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={src}
            alt={alt}
            width={1200}
            height={1400}
            className="w-full h-auto  sm:inline-block md:w-3/4 self-center"
        />
    </div>
);

// Create a reusable TextSection component
const TextSection = ({id, title, children, titleClass=""}) => (
    <div
        className="w-full flex flex-col items-center justify-center text-center  lg:w-full lg:text-center " >
        <h1 id={id}
            className={`!text-4xl !text-left md:!text-center !text-primary font-light xl:!text-xl
            lg:!text-center lg:!text-3xl md:!text-3xl sm:!text-lg sm:font-extrabold ${titleClass}`}>
            {title}
        </h1>
        <div className={`w-full`}>
            {children}
        </div>
    </div>
);

const ReserveButton = ({text = "Reserve your share now", dir="ltr"}) => {
    return <div style={{direction: dir}} className="w-full md:w-fit flex items-center self-center mt-2 lg:self-center">
        <div
            className={`flex items-center justify-center bg-dark text-light p-2.5 px-12
  rounded-full text-lg font-normal hover:bg-light hover:text-dark
  border-2 border-solid border-transparent hover:border-dark
  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
  hover:dark:border-light md:p-2 md:px-4 md:text-base sm:text-center sm:w-full sm:mx-10
  `}
            style={{cursor: "pointer"}}
        >
            {text}
        </div>
    </div>;
}

const AboutUs = ({
                     arabic_aboutus_slogan,
                     english_aboutus_slogan,
                     arabic_aboutus_title,
                     english_aboutus_title,
                     arabic_aboutus_desc,
                     english_aboutus_desc,
                     arabic_aboutus_button,
                     english_aboutus_button,
                     aboutus_photo
                 }) => {
    const {t, i18n} = useTranslation();
    const aboutuse_slogan = i18n.language === "en" ? english_aboutus_slogan : arabic_aboutus_slogan;
    const aboutus_title = i18n.language === "en" ? english_aboutus_title : arabic_aboutus_title;
    const aboutus_desc = i18n.language === "en" ? english_aboutus_desc : arabic_aboutus_desc;
    let dotIndex = aboutus_desc.indexOf('.'); // Find the index of the first dot

    // Extract the part before the dot
    let firstPart = aboutus_desc.substring(0, dotIndex);

    // Extract the part after the dot, adding 1 to skip the dot itself
    let secondPart = aboutus_desc.substring(dotIndex + 1);

    const aboutus_button = i18n.language === "en" ? english_aboutus_button : arabic_aboutus_button;
    const photo = aboutus_photo === null || aboutus_photo === "http://mobile.letaskono-zwaj.com/mediafiles/default_aboutus_img.png"
        ? profilePic2 : profilePic2;

    return (
        <Layout className={`w-full mt-20 sm:mt-0 sm:px-0`}>
            <br id="aboutus"/>
            <HoveredText text={`${t(tokens.nav.about)}`} className={`sm:mt-10`}/>
            <div className="text-xl text-primary font-light text-center sm:text-base sm:mb-10 ">
                {aboutuse_slogan}
            </div>

            <div className="w-full grid grid-cols-2 gap-x-2 items-center justify-center mt-20 lg:grid-cols-1 sm:mt-0 relative">
                <ImageComponent src={photo} alt="Sahm Nakheel"/>
                <div className="w-full  px-20 sm:!w-full flex items-center justify-center h-full flex-col sm:mt-0 sm:px-8">

                    <TextSection title={`${aboutus_title}`} titleClass={`${i18n.language === "en" ? "" : "!text-end"}`}>
                        <div className={`text-left md:!text-center sm:!w-full`} style={{textAlign: i18n.language === "en" ? "" : "end"}}>
                            {firstPart}
                        </div>
                    </TextSection>
                    <TextSection>
                        <div className={`text-left md:!text-center`} style={{textAlign: i18n.language === "en" ? "" : "end"}}>
                            {secondPart}
                        </div>

                    </TextSection>
                    <br/>
                    <ReserveButton text={aboutus_button} dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}/>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
