import Image from "next/image";
import {useEffect, useState} from "react";
import Logo from "@/pages/components/Icons";
import langImage from "../../../../public/images/languageIcon.svg";
import MobileNavigation from "@/pages/components/Navbar/MobileNavigation";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import Link from "next/link";
import {useRouter} from "next/router";


const headerButtons = [
    {
        text: 'Sign in',
        onClick: () => {
            router.push('/signin');
        },
    },
];


const SmallScreenHeader = ({handleClick, isOpen}) => {
    return (
        <div
            className={`hidden lg:flex w-full  flex-row items-center justify-between  xl:flex pt-10 ${isOpen ? "bg-midGreen" : "bg-mintyGreen"} px-8 rounded-bl-3xl rounded-br-3xl pb-8 ${isOpen ? 'fixed mt-32' : ''}`}>
            <Logo isOpen={isOpen} classes={`pb-8`}/>
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

const LargeScreenHeader = ({topNavItems, translator: t, changeLang}) => {
    const router = useRouter();
    const NavItem = ({title = "", path = "/"}) => {
        return <Link className={`text-darkGreen`} style={{textDecoration: "none"}} href={`/${path}`}>
            {title}
        </Link>
    }
    // const router = useRouter();
    return (
        <div className="w-full flex flex-col items-center justify-between xl:hidden mt-10">
            <Logo classes="pb-8"/>

            <div className="w-full flex items-center justify-between h-24">
                <nav className="w-[70%] flex items-center justify-between">
                    {/* Use a map function to render TopNavItems */}
                    {topNavItems.map((item) => (
                        <div key={item.key}>
                            <NavItem title={t(item.translationKey)} path={item.path}/>
                        </div>
                    ))}
                </nav>

                <nav className="w-[30%]  flex items-center justify-center flex-wrap">
                    <div className={`shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light py-1 
                                    rounded-3xl text-base font-normal hover:bg-white px-4
                                    dark:bg-light dark:text-white  
                                    md:p-2 md:px-4 md:text-base`}
                         style={{cursor: "pointer"}}>
                        {t(tokens.nav.getapp)}
                    </div>
                    <div
                        key={`Sign in`}
                        onClick={()=>{
                            router.push("/signin");
                        }}
                        className={`flex items-center bg-transparent py-1 px-4 mx-2 rounded-3xl font-normal hover:bg-darkGreen 
                            hover:text-white text-darkGreen border border-solid border-darkGreen
                            dark:bg-dark dark:border-white dark:text-white md:p-2 md:px-4 md:text-base`}
                        style={{cursor: "pointer"}}
                    >
                        {t(tokens.nav.signin)}
                    </div>

                    <div className="flex items-center rounded-full dark:border-white bg-transparent p-2"
                         style={{cursor: "pointer"}}
                         onClick={changeLang}
                    >
                        <Image src={langImage} height={9} width={9} alt="lang" className={``}/>
                        <div className=" text-xs mx-1 text-darkGreen dark:text-white">{t(tokens.nav.language)}</div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
const changeLanguage = (language) => {
    localStorage.setItem('NEXT_LOCALE', language);
};
const Navbar = ({className=""}) => {
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
        {key: 'blog', path: '/articles', title: 'Blog', translationKey: tokens.nav.blog},
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
            className={`px-[10%] w-full xl:px-0 xl:pt-0 py-8 font-medium flex items-center justify-between dark:text-light z-10 bg-transparent ${className}`}>
            <SmallScreenHeader handleClick={handleClick} isOpen={isOpen}/>

            <LargeScreenHeader topNavItems={topNavItemss} translator={t} changeLang={changeLang}/>

            {isOpen && <MobileNavigation handleClick={handleClick}/>}

        </header>
    );
};

export default Navbar;


