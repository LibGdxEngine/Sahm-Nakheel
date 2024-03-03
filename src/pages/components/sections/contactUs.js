import Image from "next/image";
import HoveredText from "@/pages/components/utils/HoveredText";
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";

// Dynamic import for images
const dynamicImageImport = (imageName) => `/images/${imageName}.svg`;

// Reusable style constants
const flexCenter = "w-full flex items-center justify-center px-20 xs:px-8 sm:flex-col-reverse sm:relative";
const flexStart = "w-full flex flex-col items-start justify-start";
const inputStyle = "border-0 rounded-2xl mb-5 px-3 py-6 w-full focus:outline-none" + "focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90";

const ContactUs = ({
                       arabic_contact_slogan,
                       english_contact_slogan,
                       arabic_contact_message,
                       english_contact_message,
                       map_link,
                       phone_number,
                       location_as_text,
                       email
                   }) => {
    const {t, i18n} = useTranslation();
    const slogan = i18n.language === "en" ? english_contact_slogan : arabic_contact_slogan;
    const message = i18n.language === "en" ? english_contact_message : arabic_contact_message;
    const openMap = () => {
        window.open(map_link, "_blank");
    };

    return (<div id={`contactus`} className={`w-full mt-40 flex flex-col items-center justify-center`}>
            <HoveredText text={`${t(tokens.contact.title)}`}/>

            <div className={flexCenter}>
                <Image
                    src={dynamicImageImport("Vector 1")}
                    width={900}
                    height={600}
                    alt=""
                    className="absolute w-full left-[-0%] top-[-0%] z-0 xs:top-[20%] hidden sm:block"
                />
                <div className={`${flexStart}  relative`}>
                    <Image
                        src={dynamicImageImport("Vector 1")}
                        width={900}
                        height={600}
                        alt=""
                        className="absolute w-full left-[-25%] top-[-25%] z-0 xs:top-[30%] sm:hidden"
                    />

                    <p className="w-full text-xl text-primary font-light text-center sm:text-base">
                        {slogan}
                    </p>

                    <div className={`${flexStart} w-2/3  mt-4 z-10 self-center`}>
                        <input id="name-input" type="text" className={inputStyle} placeholder={`${t(tokens.contact.name)}`}/>
                        <input id="email-input" type="email" className={inputStyle} placeholder={`${t(tokens.contact.email)}`}/>
                        <textarea id="query-input" className={`${inputStyle} h-32`} placeholder={`${t(tokens.contact.query)}`}/>
                    </div>

                    <div className="flex w-full items-center justify-center mt-2">
                        <h1 className="w-full  p-0 m-0 text-sm text-primary font-normal sm:text-left sm:w-1/2 xs:text-xs">
                            {message}
                        </h1>
                        <div
                            className={`w-1/3 sm:w-1/2 flex items-center justify-center bg-dark text-light p-1.5 px-6 pt-2 pb-2 
                              rounded-full text-xs font-semibold hover:bg-light hover:text-dark
                              border-2 border-solid border-transparent hover:border-dark
                              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                              hover:dark:border-light md:p-2 md:px-2
                              xs:p-0 xs:px-3 xs:py-2 md:text-sm xs:mx-2 xs:font-normal xs:text-xs xs:text-center
                            `}
                            style={{cursor: "pointer"}}
                        >{t(tokens.contact.send_btn)}
                        </div>
                    </div>
                </div>

                <div className={`w-full`} onClick={openMap} style={{cursor: "pointer"}}>
                    <div className={`h-[15%]`}/>
                    <Image
                        priority={true}
                        width={899}
                        height={591}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={dynamicImageImport("Map")}
                        alt="Sahm Nakheel"
                        className="w-full h-full sm:hidden"
                    />
                    <Image
                        priority={true}
                        width={899}
                        height={591}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={dynamicImageImport("map_small")}
                        alt="Sahm Nakheel"
                        className="w-full h-full hidden sm:block"
                    />
                </div>
            </div>

            <div className="w-[80%] mt-4 flex items-center justify-around md:flex-col
            sm:items-start sm:bg-mintyGreen sm:py-6 sm:rounded-3xl ">
                <div className="w-fit flex items-center justify-center md:justify-start md:px-12 xs:px-2">
                    <Image
                        src={dynamicImageImport('Vector (3)')}
                        width={23}
                        height={23}
                        alt="phone"
                        className="mx-2"
                    />
                    <h1 className="text-lightGreen text-lg font-normal ms-5 md:text-sm md:mt-3">
                        ( +20 ) 011 511 511 26
                    </h1>
                </div>
                <div className="w-fit flex items-center justify-center md:justify-start md:px-12 xs:px-2">
                    <Image
                        src={dynamicImageImport('Vector (2)')}
                        width={23}
                        height={23}
                        alt="phone"
                        className="mx-2"
                    />
                    <h1 className="w-full text-lightGreen text-lg font-normal ms-6 md:text-sm md:mt-3">
                        35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
                    </h1>
                </div>
                <div className="w-fit flex items-center justify-center md:justify-start md:px-12 xs:px-2">
                    <Image
                        src={dynamicImageImport('Vector (1)')}
                        width={23}
                        height={23}
                        alt="phone"
                        className="mx-2"
                    />
                    <h1 className="text-lightGreen text-lg font-normal ms-5 md:text-sm md:mt-3">
                        info@sahmnakheel.com
                    </h1>
                </div>
            </div>
        </div>);
};

export default ContactUs;
