import React, {useEffect, useState} from "react";
import {withRouter} from "next/router";
import {useSelector} from "react-redux";
import Head from "next/head";
import {APP_NAME, DOMAIN, FB_APP_ID} from "../../config";
import Image from "next/image";
import appleLogin from "../../public/images/appleLogin.svg";
import googleLogin from "../../public/images/googleLogin.svg";
import fbLogin from "../../public/images/fbLogin.svg";
import SplashScreen from "@/pages/components/splash-screen";
import signin from "../../public/images/signinbg.svg"
import AuthNavbar from "@/pages/components/Navbar/AuthNavbar";
import Footer from "@/pages/components/Footer";

const SignIn = ({router}) => {
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
        <div className={`w-full h-full  bg-cover bg-no-repeat bg-center bg-[url('/images/signinbg.svg')]`}>
            {head()}
            <AuthNavbar/>
            <div className="w-[100%] h-full flex items-center justify-center py-36">
                <div
                    className="w-[28%] h-[80vh] authCardbg auth-card flex flex-col items-center justify-center px-10  rounded-3xl">
                    <div className="text-2xl text-primary" style={{
                        fontFamily: "poppins",
                        fontWeight: "300",
                        fontSize: "30px",
                        lineHeight: "1"
                    }}>Welcome to
                    </div>
                    <div className="text-2xl text-dark" style={{
                        fontFamily: "poppins",
                        fontWeight: "800",
                        fontSize: "30px",
                        lineHeight: "1"
                    }}>Sahm Nakheel</div>
                    <div className="text-xs text-primary mt-4" style={{
                        fontFamily: "poppins",
                        fontWeight: "700",
                        fontSize: "15px",
                        lineHeight: "27px"
                    }}>Login to your account</div>

                    <input
                        id="text-input"
                        type="text"
                        className="w-full h-12 mt-4 border border-white rounded-full text-sm px-5 py-2  focus:outline-none focus:ring focus:border-green-500
              placeholder-mildGray placeholder-opacity-60"
                        placeholder="Mobile Number"
                    />
                    <input
                        id="password-input"
                        type="password"
                        className="w-full h-12 mt-4 border border-white rounded-full text-sm px-5 py-2  focus:outline-none focus:ring focus:border-green-500
              placeholder-mildGray placeholder-opacity-60"
                        placeholder="Password"
                    />

                    <div className="w-full flex text-xs items-center justify-between mt-4">
                        <div>
                            stay logged in
                        </div>
                        <div>
                            forgot your password ?
                        </div>
                    </div>

                    <button className="w-full bg-dark text-white text-base py-2 rounded-3xl mt-8">Login</button>

                    <div style={{
                        fontFamily: "poppins",
                        fontWeight: "300",
                        fontSize: "15px",
                        lineHeight: "27px"
                    }} className="text-center text-sm text-primary mt-8">or login with</div>

                    <div className="w-full flex items-center justify-between px-10 mt-4">
                        <Image src={appleLogin} width={35} height={35} alt=""/>
                        <Image src={googleLogin} width={35} height={35} alt=""/>
                        <Image src={fbLogin} width={35} height={35} alt=""/>
                    </div>

                    <div style={{
                        fontFamily: "poppins",
                        fontWeight: "700",
                        fontSize: "15px",
                        lineHeight: "27px"
                    }} className="text-center text-sm text-navyBlue mt-8">New here ? <span className="text-dark">create an account</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default withRouter(SignIn);
