import Link from "next/link";
import Image from "next/image";
import grayLogo from "../../../public/images/LogoGray.svg";
import googlePlay from "../../../public/images/Google Play.svg"
import appStore from "../../../public/images/App Store.svg";
import facebook from "../../../public/images/Facebook.svg";
import X from "../../../public/images/X.svg";
import insta from "../../../public/images/Insta.svg";
import youtube from "../../../public/images/Youtube.svg";
import LineSeparator from "@/pages/components/utils/LineSeparator";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import {useEffect, useState} from "react";

const Footer = ({word}) => {
    const {t, i18n} = useTranslation();
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [text3, setText3] = useState();
    const [join_mailing, setJoin_mailing] = useState();
    const [sahm_nakheel, setSahm_nakheel] = useState();
    const [joinBtn, setJoinBtn] = useState();
    const [downloadAppNow, setDownloadAppNow] = useState();
    const [terms, setTerms] = useState();
    const [contact, setContact] = useState();
    const [privacy, setPrivacy] = useState();
    const [accessibility, setAccessibility] = useState();
    const [legal, setLegal] = useState();
    const [cookie, setCookie] = useState();
    const [rights, setRights] = useState();
    const [downloadAppPost, setDownloadAppPost] = useState();


    useEffect(() => {
        setText1(t(tokens.footer.text1));
        setText2(t(tokens.footer.text2));
        setText3(t(tokens.footer.text3));
        setJoin_mailing(t(tokens.footer.join_mailing));
        setSahm_nakheel(t(tokens.wpsau.sahm_nakheel));
        setContact(t(tokens.contact.name));
        setJoinBtn(t(tokens.footer.joinButton));
        setDownloadAppNow(t(tokens.footer.dowloadAppNow));
        setTerms(t(tokens.footer.terms));
        setPrivacy(t(tokens.footer.privacy));
        setAccessibility(t(tokens.footer.accessibility));
        setLegal(t(tokens.footer.legal));
        setCookie(t(tokens.footer.cookie));
        setRights(t(tokens.footer.rights));
        setDownloadAppPost(i18n.language === "en" ?
            <span className="text-lightGreen">Now!</span> : "");
    }, [t]);
    return (
        <footer
            className="w-full h-full flex flex-col
    text-base text-white font-normal dark:text-light dark:border-light sm:text-base mt-40"
        >
            <div className="footer-border-radius py-12
       flex items-start justify-between lg:flex-col lg:items-center lg:justify-center lg:py-6 bg-primary px-60 lg:px-0 ">
                <div className="w-1/2 h-full flex flex-col items-start justify-between lg:mb-8 pe-5 lg:w-full lg:px-10">
                    <Image src={grayLogo} width={180} height={54} alt=""/>
                    <p className="text-white font-light text-base mt-12 me-16">
                        {text1}
                        <br/>
                        {text2}
                        <br/>
                        {text3}
                    </p>
                </div>

                <div
                    className="w-1/2  h-full flex flex-col items-center justify-start font-thin lg:w-full lg:px-10 lg:items-start pe-16    ">
                    <p className="text-xl">
                        {join_mailing}{" "}
                        <span className="text-lightGreen">{sahm_nakheel}</span>
                    </p>
                    <div className="w-full flex items-center justify-normal mt-8 ">
                        <input
                            id="text-input"
                            type="text"
                            className="border border-white rounded-full me-2 px-3 py-2.5 w-2/3 focus:outline-none focus:ring focus:border-blue-500 placeholder-gray-500 placeholder-opacity-90"
                            placeholder={`${contact}`}
                        />

                        <div
                            className={`w-auto flex items-center bg-dark text-light py-1 px-10 
                  rounded-full text-xl font-normal hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light  md:px-4 md:text-base
                  `}
                            style={{cursor: "pointer"}}
                        >
                            {joinBtn}
                        </div>
                    </div>
                    <h1 className="w-full  mt-8 text-lg text-left">
                        {downloadAppNow} {downloadAppPost}
                    </h1>

                    <div
                        className=" w-full flex items-center justify-start mt-2 xs:flex-col  xs:w-[100%] xs:justify-start">
                        <Image
                            src={appStore}
                            width={150}
                            height={44}
                            alt=""
                            className="me-3 sm:me-1"
                        />
                        <Image
                            src={googlePlay}
                            width={150}
                            height={44}
                            alt=""
                            className="me-3 sm:me-1"
                        />
                    </div>
                </div>

            </div>

            <div className="w-full h-24 bg-primary flex flex-col items-center justify-between
      sm:flex-col sm:justify-center sm:items-center px-60 xl:px-10 lg:h-auto">
                <LineSeparator color="white" thickness={1} width="100%" margin="-2px auto"/>

                <div className="w-full flex lg:flex-col lg:p-3 lg:items-center lg:justify-center">
                    <div className="w-full flex flex-col items-center justify-center ">
                        <div className="w-full flex items-center justify-between text-xs">
                            <p style={{cursor: "pointer"}}>{terms}</p>
                            <p style={{cursor: "pointer"}}>{privacy}</p>
                            <p style={{cursor: "pointer"}}>{accessibility}</p>
                            <p style={{cursor: "pointer"}}>{legal}</p>
                            <p style={{cursor: "pointer"}}>{cookie}</p>
                        </div>
                        <span className="w-full text-xs text-gray-500 mt-2">
              {new Date().getFullYear()} &copy; {rights}
            </span>
                    </div>
                    <div className="w-full flex flex-col  items-end justify-center lg:items-center lg:mt-3">
                        <div
                            className="w-full flex opacity-30 items-center justify-between  ps-60 sm:ps-0 sm:w-full sm:justify-start sm:space-x-3">
                            <Image src={facebook} width={44} height={44} alt=""/>
                            <Image src={X} width={44} height={44} alt=""/>
                            <Image src={insta} width={44} height={44} alt=""/>
                            <Image src={youtube} width={44} height={44} alt=""/>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </footer>
    );
};

export default Footer;
