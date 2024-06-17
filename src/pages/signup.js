import React, {useEffect, useState} from "react";
import {withRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN, FB_APP_ID} from "../../config";
import Image from "next/image";
import appleLogin from "../../public/images/appleLogin.svg";
import googleLogin from "../../public/images/googleLogin.svg";
import fbLogin from "../../public/images/fbLogin.svg";
import AuthNavbar from "@/pages/components/Navbar/AuthNavbar";
import Footer from "@/pages/components/Footer";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import {useTranslation} from "next-i18next";
import {toast} from "react-toastify";
import {tokens} from "@/locales/tokens";
import {createUser} from "@/components/services/auth";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/splash-screen";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: './fonts/AGCRegular.ttf'})

const Signup = ({router}) => {
    const {t, i18n} = useTranslation();
    const [agree, setAgree] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const {token, loading} = useAuth();

    if (loading && !token){
        return <SplashScreen />
    }
    if (token) {
        router.push('/profile');
        return;
    }


    const handleSignUp = async () => {
        if (agree) {
            toast.error(t(tokens.errors.termsError));
            return;
        }
        await createUser({first_name: firstName, last_name: lastName, email, username: email, password})
            .then(async (response) => {
                console.log(response)
                toast.success(t(tokens.keys.signupsuccess));
            }).catch((error) => {
                const entries = Object.entries(error.response.data);
                if (entries.length > 0) {
                    const [key, messages] = entries[0];
                    console.log(key, messages)
                    let error = "";
                    if (key === "email" || key === "username") {
                        error = "emailExistError";
                    } else {
                        error = key;
                    }
                    toast.error(t(tokens.keys[key]) + ": " + t(tokens.errors[error]) );
                }
            });
    }


    const head = () => {
        const title = `${APP_NAME}`;
        return (
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content=""
                />
                <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
                <meta property="og:title" content={`${APP_NAME}`}/>
                <meta
                    name="og:description"
                    content=""
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
                <meta property="og:site_name" content={`${APP_NAME}`}/>

                <meta property="og:image" content={`${DOMAIN}/images/logo.png`}/>
                <meta
                    property="og:image:secure_url"
                    content={`${DOMAIN}/static/images/logo.png`}
                />
                <meta property="og:image:type" content={`image/png`}/>
                <meta property="fb:app_id" content={`${FB_APP_ID}`}/>
            </Head>
        );
    };
    return (
        <div
            className={`${i18n.language === "en" ? englishFont.className : arabicFont.className}  w-full h-full flex flex-col bg-cover bg-no-repeat bg-center bg-[url('/images/signinbg.svg')]`}>
            {head()}
            <AuthNavbar/>
            <div className="w-[100%] h-full flex items-center justify-center pt-16 pb-36">
                <div
                    className="w-96 sm:w-80 h-[90vh] authCardbg  auth-card flex flex-col items-center justify-center px-10 sm:px-5 rounded-3xl">

                    <div className="text-base text-primary mt-4 font-bold">Sign up for a new account</div>
                    <div className={`w-full flex items-center justify-center`}>
                        <input
                            id="name1"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full me-2 h-12 mt-4  rounded-full text-sm px-5 py-2 focus:outline-none border-none bg-white placeholder:text-mildGray placeholder:opacity-60"
                            placeholder="First Name"
                        />
                        <input
                            id="name2"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full ms-2 h-12 mt-4  rounded-full text-sm px-5 py-2 focus:outline-none border-none bg-white placeholder:text-mildGray placeholder:opacity-60"
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        id="mobile"
                        type="text"

                        className="w-full h-12 mt-4  rounded-full text-sm px-5 py-4 focus:outline-none border-none bg-white placeholder:text-mildGray placeholder:opacity-60"
                        placeholder="Mobile Number"
                    />
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 mt-4  rounded-full text-sm px-5 py-4 focus:outline-none border-none bg-white placeholder:text-mildGray placeholder:opacity-60"
                        placeholder="Email Address"
                    />
                    <input
                        id="password-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 mt-4 rounded-full text-sm px-5 py-4 focus:outline-none border-none placeholder:text-mildGray placeholder:opacity-60"
                        placeholder="Password"
                    />

                    <div className="w-full flex text-xs items-center justify-between mt-4">
                        <div className="w-full flex items-center">
                            <input
                                id="circular-checkbox"
                                type="checkbox"
                                value={agree}
                                onChange={(e) => {
                                    // console.log(e.target.checked)
                                    setAgree(!e.target.checked);
                                }}
                                className="w-3 h-3 rounded-full border border-gray-300 bg-white cursor-pointer focus:outline-none"
                            />
                            <label htmlFor={`circular-checkbox`}
                                   className="w-80 sm:w-60 ml-3 text-xs font-base text-gray-900">
                                I have read and agree to the <span className={`text-dark`}>Terms and Conditions & Privacy policy.</span>
                            </label>

                        </div>

                    </div>

                    <button onClick={handleSignUp} style={{cursor: "pointer"}}
                            className="w-full border-none bg-dark text-white text-base py-2 rounded-3xl mt-8">Signup
                    </button>

                    <div className="text-center text-xs font-light text-primary mt-8">or login with</div>

                    <div className="w-full flex items-center justify-between px-10 mt-6">
                        <Image style={{cursor: "pointer"}} src={appleLogin} width={35} height={35} alt=""/>
                        <Image style={{cursor: "pointer"}} src={googleLogin} width={35} height={35} alt=""/>
                        <Image style={{cursor: "pointer"}} src={fbLogin} width={35} height={35} alt=""/>
                    </div>

                    <div className="text-center text-sm text-navyBlue font-bold mt-8">New here ? <span
                        style={{cursor: "pointer"}} className="text-dark">create an account</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default withRouter(Signup);
