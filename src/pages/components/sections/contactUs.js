import Image from "next/image";
import HoveredText from "@/pages/components/utils/HoveredText";
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import {useState} from "react";
import {toast} from "react-toastify";

// Dynamic import for images
const dynamicImageImport = (imageName) => `/images/${imageName}.svg`;

// Reusable style constants
const flexCenter = "w-full flex items-center justify-center px-20  sm:flex-col-reverse sm:relative sm:px-0";
const flexStart = "w-full flex flex-col items-start justify-start sm:px-[10%]";
const inputStyle = "border-0 rounded-2xl mb-5 px-3 py-4 w-full focus:outline-none" + "focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90";

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

    // State variables for inputs
    const [name, setName] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [query, setQuery] = useState("");

    // Handle input changes
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmailInput(e.target.value);
    const handleQueryChange = (e) => setQuery(e.target.value);


    // Handle form submission
    const handleSubmit = () => {
        if(name === "" || emailInput === "" || query === "") {
            toast.error("Please fill all fields");
            return;
        }
        toast.success("Your message has been sent successfully");
        setName("");
        setEmailInput("");
        setQuery("");

        // Here you can add code to send the data to a server or perform other actions
    };
    const openMap = () => {
        window.open(map_link, "_blank");
    };

    return (
        <div id={`contactus`} className={`w-full mt-40 flex flex-col items-center justify-center`}>


            <Layout className={flexCenter}>
                <Image
                    src={dynamicImageImport("Vector 1")}
                    width={900}
                    height={600}
                    alt=""
                    className="absolute w-full left-[-0%] top-[30%] z-0 hidden sm:block"
                />
                <div className={`${flexStart} relative`}>
                    <Image
                        src={dynamicImageImport("Vector 1")}
                        width={900}
                        height={600}
                        alt=""
                        className="absolute w-full left-[-25%] top-[-25%] z-0 xs:top-[30%] sm:hidden"
                    />
                    <div className={`text-7xl text-primary font-normal sm:text-4xl sm:mt-8 sm:font-extrabold z-[3]
                    sm:text-center sm:w-full`}>
                        {t(tokens.contact.title)}
                    </div>
                    <div className="w-full text-start sm:text-center text-xl text-primary font-light py-2 sm:text-base">
                        {slogan}
                    </div>


                    <div className={`${flexStart} w-2/3 mt-4 z-10 self-center`}>
                        <input id="name-input" type="text" className={inputStyle}
                               placeholder={`${t(tokens.contact.name)}`}
                               value={name} onChange={handleNameChange}/>
                        <input id="email-input" type="email" className={inputStyle}
                               placeholder={`${t(tokens.contact.email)}`}
                               value={emailInput} onChange={handleEmailChange}/>
                        <textarea id="query-input" className={`${inputStyle} h-32`}
                                  placeholder={`${t(tokens.contact.query)}`}
                                  value={query} onChange={handleQueryChange}/>
                    </div>
                    <div className="flex w-full items-center justify-center mt-2">

                        <h1 className="w-full  p-0 m-0 text-sm text-primary font-normal sm:text-left sm:w-1/2 xs:text-xs">
                            {message}
                        </h1>
                        <div
                            onClick={handleSubmit}
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
                        className="w-full h-full hidden sm:block "
                    />
                </div>
            </Layout>

            <div className="w-[80%] sm:w-[90%] mt-4 flex items-center justify-around md:flex-col
            sm:items-start sm:bg-mintyGreen sm:py-6 sm:rounded-3xl ">
                <div
                    className="w-fit flex items-center justify-center md:justify-start sm:justify-center md:px-12 xs:px-2">
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
