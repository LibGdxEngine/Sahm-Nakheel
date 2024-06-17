
import {useTranslation} from "next-i18next";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "@/pages/components/Navbar/HomeNavbar";
import EditProfileIcon from '../components/utils/EditProfileIcon';
import trueIcon from '../../../public/images/trueIcon.svg';
import investingIcon from '../../../public/images/Investing 1.svg';

import Image from "next/image";
import Footer from "@/pages/components/Footer";
import OfferCardItem from "@/pages/components/pricing-slider/OfferCardItem";
import playIcon from "../../../public/images/PlayIcon.svg";
import {tokens} from "@/locales/tokens";
import {useState} from "react";
import Card from "@/pages/components/utils/Card";



const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: '../fonts/AGCRegular.ttf'})
const Confirmation = () => {
    const {t, i18n} = useTranslation();
    return <div
        className={`${i18n.language === "en" ? englishFont.className : arabicFont.className}  w-full h-screen flex flex-col bg-mintyGreen`}>
        <HomeNavbar/>
        <div className={`w-full h-full bg-cover bg-no-repeat bg-center bg-[url('/images/home_bg.svg')]`}>
            <div className={`w-full h-full flex flex-col items-center justify-center mt-16`}>
                <div className={`text-4xl text-midGreen`}>
                    Confirmation
                </div>
                <div>
                    <Card className={`mt-8`}>
                        <div className={`flex flex-col items-center justify-center`}>
                            <Image src={investingIcon} alt={``} width={100} height={100}/>
                            <h1 className={`text-xl text-mDark`}>
                                You’re investing in Plan 1
                            </h1>
                            <div className={`text-center text-lg text-dark`}>
                                With 800 EGP installment per month - CASH
                                Your Installments will be for the next 10 months, and starts in 10 May 2022
                            </div>
                            <div className={`w-full mt-8 flex flex-row items-center justify-center`}>
                                <div
                                    className={`w-full text-center text-dark px-6 mx-1 py-1.5 
                                border border-solid border-darkGreen rounded-35`}
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                    }}
                                >
                                    No, Go Back
                                </div>
                                <div
                                    className={`w-full text-center px-6 text-white bg-dark  mx-1 py-1.5 border border-solid border-darkGreen rounded-35`}
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                    }}
                                >
                                    Yes, Confirm
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
    </div>
};

export default Confirmation;