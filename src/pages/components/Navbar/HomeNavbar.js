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
import ColoredLogo from "@/pages/components/ColoredLogo";
import profileIcon from "../../../../public/images/Group 9.svg";
import notificationsIcon from "../../../../public/images/Group 8.svg";
import searchIcon from "../../../../public/images/search_icon.svg";
import filterIcon from "../../../../public/images/filter_icon.svg";
import ProfileMenu from "@/pages/components/utils/ProfileMenu";
import NotificationMenu from "@/pages/components/utils/NotificationMenu";
import {useAuth} from "@/context/AuthContext";

const CustomLink = ({onClick, title, className = "", isActive = false}) => {
    return (
        <div
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
            style={{cursor: "pointer"}}
            className={`${className} relative group ${isActive ? "text-lightGreen" : "text-white"} text-sm font-thin dark:text-white inline-block`}
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
            className={`hidden homeNav lg:flex w-full flex-col items-start justify-between xl:flex pt-10 ${isOpen ? "bg-midGreen" : "bg-white"} px-8 rounded-bl-3xl rounded-br-3xl pb-2 ${isOpen ? 'fixed mt-32' : ''}`}>
            <div className={`w-full flex items-center justify-between`}>
                <Logo isOpen={false} classes={`pb-8`}/>
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
            <div className={`${isOpen ? "hidden" : ""} flex flex-col items-start justify-start`}>
                <h1 className={`mt-6 mb-0`}>Transactions</h1>
                <div className={`flex items-center justify-center`}>
                    <div className={`rounded-full px-3 line-clamp-1  bg-orange-500 text-white font-light mx-1`}>
                        On Hold
                    </div>
                    <div className={`rounded-full px-3 line-clamp-1 bg-blue-800 text-white font-light mx-1`}>
                        In Progress
                    </div>
                    <div className={`rounded-full px-3  bg-lightGreen text-white font-light mx-1`}>
                        Completed
                    </div>
                </div>

                <div id={`top-bar`} className={`w-full flex items-center justify-between my-5 `}>
                    <div id={`search-bar`} className={`w-full flex items-center justify-start`}>
                        <Image src={searchIcon} alt={``} width={20} height={20} className={`me-2`}/>
                        <input type={`text`} placeholder={`Search by ID , Transaction name ...`}
                               className={`w-3/4 h-8 outline-lightGreen px-2 text-xs rounded-full border-none  placeholder:text-gray-400`}/>
                    </div>
                    <div className={`w-fit flex rounded-full  bg-dark items-center justify-between px-4 py-2`}>
                        <Image src={filterIcon} alt={``} width={15} height={15}/>
                        <div className={`w-full ms-2 font-thin h-fit text-white rounded-35`}>Filter</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const LargeScreenHeader = ({handleClick, isOpen}) => {
    const router = useRouter();
    const {logout} = useAuth();
    return <div className="w-full flex flex-row items-center justify-center xl:hidden bg-navyBlue px-32  rounded-bl-3xl
  rounded-br-3xl">
        <div className={`w-fit`}>
            <ColoredLogo/>
        </div>

        <div className="w-full flex items-center justify-between h-24 ms-6">
            <div></div>
            <nav className="w-full mx-10 flex items-center justify-start">
                <CustomLink title={"Transactions"} isActive={router.asPath === "/profile"} onClick={()=>{
                    router.push("/profile");
                }} className="mx-4"/>
                <CustomLink
                    onClick={() => {
                        router.push("/contracts");
                    }}
                    title={"Contracts"}
                    isActive={router.asPath === "/contracts"}
                    className="mx-4"
                />
                <CustomLink
                    onClick={() => {
                        router.push("plans/1")
                    }}
                    title={"Plans"}
                    isActive={router.asPath.includes("plans")}
                    className="mx-4"
                />


            </nav>
            <nav className="w-full flex items-center justify-center flex-wrap">

                <div className={`flex flex-row items-center justify-center`}
                >

                    <NotificationMenu />

                    <ProfileMenu />
                </div>

                <div
                    onClick={() => {
                        logout();
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
                    Sign out
                </div>

                <div
                    className="flex rounded-full items-center justify-center dark:border-white bg-transparent p-2 "
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

const HomeNavbar = (props) => {
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
        {key: 'transactions', path: '/transactions', title: 'Transactions', translationKey: tokens.nav.home},
        {key: 'contracts', path: '/contracts', title: 'Contracts', translationKey: tokens.nav.about},
        {key: 'plans', path: '/plans', title: 'Plans', translationKey: tokens.nav.features}
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

export default HomeNavbar;
