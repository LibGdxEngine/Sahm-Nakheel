import React, {useEffect, useState} from "react";
import {useRouter, withRouter} from "next/router";
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
import {getToken} from "@/components/services/auth";
import SplashScreen from "@/pages/components/splash-screen";
import {useAuth} from "@/context/AuthContext";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: './fonts/AGCRegular.ttf'})

const SignIn = ({router}) => {
    const {t, i18n} = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {token, loading, login} = useAuth();

    if (loading && !token){
        return <SplashScreen />
    }
    if (token) {
        router.push('/profile');
        return;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await getToken({ email: username, password });
            login(response.token);
            router.replace("/profile");
            // Handle successful signup (e.g., redirect to login)
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };


    // const loadingStatus = useSelector((state) => state.auth.status);
    // const user = useSelector((state) => state.auth.user);
    // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    // if (loadingStatus === "loading") {
    //     return (
    //         <div className="container mx-auto p-4">
    //             <SplashScreen/>
    //         </div>
    //     );
    // } else if (loadingStatus === "succeeded") {
    // } else if (loadingStatus === "failed") {
    // }
    //
    // if (
    //     loadingStatus === "succeeded" &&
    //     isAuthenticated &&
    //     typeof window !== "undefined"
    // ) {
    //     router.push("/user");
    // }

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
            <div className="w-[100%] h-full flex items-center justify-center py-36">
                <div
                    className="w-fit h-[80vh] authCardbg auth-card flex flex-col items-center justify-center px-10 rounded-3xl">
                    <div className="text-4xl font-light">Welcome to</div>
                    <div className="text-4xl text-dark font-extrabold">Sahm Nakheel</div>
                    <div className="text-base text-primary mt-4 font-bold">Login to your account</div>

                    <input
                        id="text-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full h-12 mt-4  rounded-full text-sm px-5 py-2 focus:outline-none border-none bg-white placeholder:text-mildGray placeholder:opacity-60"
                        placeholder="Mobile Number"
                    />
                    <input
                        id="password-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 mt-4 rounded-full text-sm px-5 py-2 focus:outline-none border-none placeholder:text-mildGray placeholder:opacity-60"
                        placeholder="Password"
                    />

                    <div className="w-full flex text-xs items-center justify-between mt-4">
                        <div className="w-full flex items-center">
                            <input
                                id="circular-checkbox"
                                type="checkbox"
                                className="w-3 h-3 rounded-full border border-gray-300 bg-white cursor-pointer focus:outline-none"
                            />
                            <label htmlFor={`circular-checkbox`} className="ml-3 text-xs font-base text-gray-900">
                                Stay logged in
                            </label>
                        </div>
                        <div style={{cursor: "pointer"}} className={`w-full text-xs text-center hover:font-bold`}>
                            Forgot password ?
                        </div>
                    </div>

                    <button onClick={handleLogin} style={{cursor: "pointer"}}
                            className="w-full border-none bg-dark text-white text-base py-2 rounded-3xl mt-8">Login
                    </button>

                    <div className="text-center text-xs font-light text-primary mt-8">or login with</div>

                    <div className="w-full flex items-center justify-between px-10 mt-6">
                        <Image style={{cursor: "pointer"}} src={appleLogin} width={35} height={35} alt=""/>
                        <Image style={{cursor: "pointer"}} src={googleLogin} width={35} height={35} alt=""/>
                        <Image style={{cursor: "pointer"}} src={fbLogin} width={35} height={35} alt=""/>
                    </div>

                    <div onClick={()=>{
                        router.push("/signup");
                    }} className="text-center text-sm text-navyBlue font-bold mt-8">New here ? <span
                        style={{cursor: "pointer"}} className="text-dark">create an account</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default withRouter(SignIn);
