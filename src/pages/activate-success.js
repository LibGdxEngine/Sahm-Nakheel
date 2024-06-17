import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import {tokens} from "@/locales/tokens";
import AuthNavbar from "@/pages/components/Navbar/AuthNavbar";
import Footer from "@/pages/components/Footer";
import {useTranslation} from "next-i18next";
import Image from "next/image";
import appleLogin from "../../public/images/appleLogin.svg";
import successIcon from "../../public/images/success.svg";
import fbLogin from "../../public/images/fbLogin.svg";
import React from "react";
import {router} from "next/client";
import {useRouter} from "next/router";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: './fonts/AGCRegular.ttf'})

const ActivateSuccess = () => {
    const {t, i18n} = useTranslation();
    const router = useRouter();
    return (
        <div
            className={`${i18n.language === "en" ? englishFont.className : arabicFont.className}  w-full h-full flex flex-col bg-cover bg-no-repeat bg-center bg-[url('/images/signinbg.svg')]`}>

            <AuthNavbar/>
            <div className="w-[100%] h-full flex items-center justify-center pt-20 pb-36">
                <div
                    className="w-fit sm:w-80 h-[52vh] authCardbg auth-card flex flex-col items-center justify-center px-10 sm:px-5 rounded-3xl">
                    <Image src={successIcon} width={120} height={120} alt="appleLogin"/>
                    <div className={`text-dark mt-10 font-bold`}>Successfully Registered, Thank You!</div>
                    <div className={`text-center`}>We have successfully created your account</div>
                    <button onClick={()=>{
                        router.replace("/signin");
                    }} style={{cursor: "pointer"}}
                            className="w-full border-none bg-dark text-white text-xl font-thin py-2 rounded-3xl mt-8">Continue
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ActivateSuccess;