import Logo from "@/pages/components/Icons";
import {useRouter} from "next/router";
import langImage from "/public/images/langIconWhite.svg";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import userIcon from "../../../../public/images/userIcon.svg";
import langIconWhite from "../../../../public/images/langIconWhite.svg";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import MobileNavigation from "@/pages/components/Navbar/MobileNavigation";

const CustomLink = ({onClick, title, className = ""}) => {
    return (
        <div
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
            style={{cursor: "pointer"}}
            className={`${className} relative group text-white text-sm font-thin dark:text-white inline-block  `}
        >
            {title}
            &nbsp;
        </div>
    );
};

const CustomMobileLink = ({href, title, className = "", toggle}) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        // router.push(href);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center ">
            <button
                onClick={handleClick}
                href={href}
                className={`${className} text-lg relative group text-light dark:text-dark my-2.5`}
            >
                {title}
            </button>
            <span
                className={`h-[1px] w-full small-header-items-separator 
       `}
            >
        &nbsp;
      </span>
        </div>

    );
};

const SmallScreenHeader = ({handleClick, isOpen}) => {
    return (
        <div
            className={`hidden lg:flex w-full  flex-row items-center justify-between  xl:flex pt-10 ${isOpen ? "bg-midGreen" : "bg-dark"} px-8 rounded-bl-3xl rounded-br-3xl pb-8 ${isOpen ? 'fixed mt-32' : ''}`}>
            <Logo isOpen={true} classes={`pb-8`}/>
            <div className="w-auto flex items-center justify-between h-auto px-2 py-3 bg-darkGreen rounded-lg"
                 onClick={handleClick} style={{cursor: "pointer"}}>
                <div className="flex-col justify-center items-start hidden xl:flex">
                    <span
                        className={`bg-white dark:bg-darkGreen block transition-all duration-300 ease-out h-0.5 ${isOpen ? "w-5" : "w-4"} rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                    <span
                        className={`bg-white dark:bg-darkGreen block transition-all duration-300 ease-out h-0.5 ${isOpen ? "w-5" : "w-5"} rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span
                        className={`bg-white dark:bg-darkGreen block transition-all duration-300 ease-out h-0.5 ${isOpen ? "w-5" : "w-2.5"} rounded-sm -translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
                </div>
            </div>
        </div>
    );
};

const LargeScreenHeader = ({handleClick, isOpen}) => {
    const router = useRouter();
    return <div className="w-full flex flex-row items-center justify-center xl:hidden bg-dark px-32  rounded-bl-3xl
  rounded-br-3xl">
        <Logo isOpen={true} classes="pb-8"/>
        <div className="w-full flex items-center justify-between h-24 ms-6">
            <div></div>
            <nav className="w-fit flex items-center justify-center">
                <CustomLink title={"Home"}/>
                <CustomLink
                    onClick={() => {

                    }}
                    title={"About Us"}
                    className="mx-4"
                />
                <CustomLink
                    onClick={() => {

                    }}
                    title={"Features"}
                    className="mx-4"
                />
                <CustomLink
                    onClick={() => {

                    }}
                    title={"Pricing"}
                    className="mx-4"
                />
                <CustomLink
                    onClick={() => {

                    }}
                    title={"FAQs"}
                    className="mx-4"
                />
                <CustomLink title={"Gallery"} className="mx-4"/>
                <CustomLink title={"Blog"} className="mx-4"/>
                <CustomLink
                    onClick={() => {

                    }}
                    title={"Contact Us"}
                    className="mx-4"
                />
            </nav>
            <nav className="w-fit flex items-center justify-center flex-wrap">
                <div
                    className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light py-1 px-4
      rounded-3xl text-base font-bold hover:bg-light 
      
      dark:bg-light dark:text-white  
         md:text-base
      `}
                    style={{cursor: "pointer"}}
                >
                    Get App
                </div>

                <div
                    onClick={() => {
                        router.push("/signin");
                    }}
                    className={`flex items-center bg-transparent text-white py-1 px-4 mx-2
      rounded-3xl text-base font-normal hover:bg-white hover:text-dark 
      border border-solid border-white
      dark:bg-dark dark:border-white dark:text-white  
       md:p-2 md:px-4 md:text-base
      `}
                    style={{cursor: "pointer"}}
                >
                    Sign in
                </div>

                <div
                    className="flex rounded-full  dark:border-white bg-transparent p-2 "
                    style={{cursor: "pointer"}}
                >
                    <Image src={langImage} height={9} width={9} alt="lang"/>

                    <div className="text-xs mx-1 text-white dark:text-white">
                        EN
                    </div>
                </div>
            </nav>
        </div>
    </div>
}

const AuthNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const {t, i18n} = useTranslation();
    useEffect(() => {
        const userLocale = localStorage.getItem('NEXT_LOCALE');
        if (userLocale) {
            i18n.changeLanguage(userLocale)
            setCurrentLanguage(userLocale);
        }
    }, [currentLanguage, i18n]);


    // Define an array of TopNavItems and header buttons
    const topNavItemss = [
        {key: 'home', path: '/', title: 'Home', translationKey: tokens.nav.home},
        {key: 'aboutus', path: '#aboutus', title: 'About Us', translationKey: tokens.nav.about},
        {key: 'features', path: '#features', title: 'Features', translationKey: tokens.nav.features},
        {key: 'pricing', path: '#pricing', title: 'Pricing', translationKey: tokens.nav.pricing},
        {key: 'faq', path: '#faq', title: 'FAQ', translationKey: tokens.nav.faq},
        {key: 'gallery', path: '#gallery', title: 'Gallery', translationKey: tokens.nav.gallery},
        {key: 'blog', path: '#blog', title: 'Blog', translationKey: tokens.nav.blog},
        {key: 'contactus', path: '#contactus', title: 'Contact Us', translationKey: tokens.nav.contact},
    ];
    const changeLang = () => {
        if (currentLanguage === "en") {
            setCurrentLanguage("ar");
            changeLanguage("ar");
        } else {
            setCurrentLanguage("en");
            changeLanguage("en");
        }
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className="w-full  xl:px-0 xl:pt-0  font-medium flex items-center justify-between dark:text-light z-10 bg-transparent">
            <SmallScreenHeader handleClick={handleClick} isOpen={isOpen}/>

            <LargeScreenHeader topNavItems={topNavItemss} translator={t} changeLang={changeLang}/>
            {/* Rest of the code */}

            {isOpen && <MobileNavigation handleClick={handleClick}/>}

        </header>
    );
};

export default AuthNavbar;
