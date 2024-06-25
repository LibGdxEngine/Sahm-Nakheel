import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import AuthNavbar from "@/pages/components/Navbar/AuthNavbar";
import Footer from "@/pages/components/Footer";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import successIcon from "../../public/images/success.svg";
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";

const englishFont = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"] });
const arabicFont = localFont({ src: './fonts/AGCRegular.ttf' });

// Dynamically import AuthNavbar and Footer to ensure they are only rendered on the client side
const DynamicAuthNavbar = dynamic(() => import('@/pages/components/Navbar/AuthNavbar'), { ssr: false });
const DynamicFooter = dynamic(() => import('@/pages/components/Footer'), { ssr: false });

const ActivateSuccess = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();

    // Ensure the router code only runs on the client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Client-side only code
        }
    }, []);

    return (
        <div className={`${i18n.language === "en" ? englishFont.className : arabicFont.className} w-full h-full flex flex-col bg-cover bg-no-repeat bg-center bg-[url('/images/signinbg.svg')]`}>
            <DynamicAuthNavbar />
            <div className="w-[100%] h-full flex items-center justify-center pt-20 pb-36">
                <div className="w-fit sm:w-80 h-[52vh] authCardbg auth-card flex flex-col items-center justify-center px-10 sm:px-5 rounded-3xl">
                    <Image src={successIcon} width={120} height={120} alt="success" />
                    <div className={`text-dark mt-10 font-bold`}>Successfully Registered, Thank You!</div>
                    <div className={`text-center`}>We have successfully created your account</div>
                    <button onClick={() => {
                        router.replace("/signin");
                    }} style={{ cursor: "pointer" }}
                            className="w-full border-none bg-dark text-white text-xl font-thin py-2 rounded-3xl mt-8">Continue
                    </button>
                </div>
            </div>
            <DynamicFooter />
        </div>
    );
};

export default ActivateSuccess;
