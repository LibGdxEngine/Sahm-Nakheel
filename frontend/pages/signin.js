import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SigninComponent from "../components/auth/Signin/SigninComponent";
import { withRouter } from "next/router";
import { useSelector } from "react-redux";
import ProgressBar from "../helpers/ProgressBar";
import TransitionEffect from "../components/TransitionEffect";
import Head from "next/head";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../config";
import { AnimatedLogo } from "../components/Icons";
import AuthLayout from "../components/AuthLayout";
import Image from "next/image";
import appleLogin from "../public/images/svgs/appleLogin.svg";
import googleLogin from "../public/images/svgs/googleLogin.svg";
import fbLogin from "../public/images/svgs/fbLogin.svg";
const SignIn = ({ router }) => {
  const [showTransition, setShowTransition] = useState(true);

  // Simulate a delay for the transition screen
  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2000); // Adjust the delay as needed
  }, []);


  const loadingStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (loadingStatus === "loading") {
    return (
      <div className="container mx-auto p-4">
        <ProgressBar />
      </div>
    );
  } else if (loadingStatus === "succeeded") {
  } else if (loadingStatus === "failed") {
  }

  if (
    loadingStatus === "succeeded" &&
    isAuthenticated &&
    typeof window !== "undefined"
  ) {
    router.push("/user");
  }
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  const head = () => {
    const title = `${APP_NAME}`;
    return (
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
        <meta property="og:title" content={`${APP_NAME}`} />
        <meta
          name="og:description"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/images/logo.png`} />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/static/images/logo.png`}
        />
        <meta property="og:image:type" content={`image/png`} />
        <meta property="fb:app_id" content={`${FB_APP_ID}`} />
      </Head>
    );
  };
  return (
    <>
      {head()}
      {showTransition && <TransitionEffect />}
      <AuthLayout className="w-full bg-cover bg-no-repeat bg-center bg-[url('/images/svgs/signinbg.svg')]" >
        <div className="w-[100%] h-[100%] flex items-center justify-center my-20 sm:my-2 sm:mb-20">
          <div className="w-96  authCardbg auth-card flex flex-col items-center justify-center px-10 py-10 rounded-3xl">
            <p className="text-2xl text-primary" style={{
              fontFamily: "poppins",
              fontWeight: "300",
              fontSize: "30px",
              lineHeight: "1"
            }}>Welcome to</p>
            <p className="text-2xl text-dark" style={{
              fontFamily: "poppins",
              fontWeight: "800",
              fontSize: "30px",
              lineHeight: "1"
            }}>Sahm Nakheel</p>
            <p className="text-xs text-primary mt-4" style={{
              fontFamily: "poppins",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "27px"
            }}>Login to your account</p>

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

            <p style={{
              fontFamily: "poppins",
              fontWeight: "300",
              fontSize: "15px",
              lineHeight: "27px"
            }} className="text-center text-sm text-primary mt-8">or login with</p>

            <div className="w-full flex items-center justify-between px-10 mt-4">
              <Image src={appleLogin} width={35} height={35} alt="" />
              <Image src={googleLogin} width={35} height={35} alt="" />
              <Image src={fbLogin} width={35} height={35} alt="" />
            </div>

            <p style={{
              fontFamily: "poppins",
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "27px"
            }} className="text-center text-sm text-navyBlue mt-8">New here ? <span className="text-dark">create an account</span></p>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default withRouter(SignIn);
