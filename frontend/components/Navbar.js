import Link from "next/link";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import langImage from "/public/images/svgs/languageIcon.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import userIcon from "../public/images/svgs/userIcon.svg";
import langIconWhite from "../public/images/svgs/langIconWhite.svg";

const CustomLink = ({ onClick, title, className = "" }) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{ cursor: "pointer" }}
      className={`${className} relative group text-darkGreen text-base font-medium  dark:text-white inline-block`}
    >
      {title}
      &nbsp;
    </div>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    // router.push(href);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <button
        onClick={handleClick}
        href={href}
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

const SmallScreenHeader = ({ handleClick, isOpen }) => {
  return <div className={`w-full flex flex-row items-center justify-between hidden xl:flex pt-10 ${isOpen ? "bg-midGreen" : "bg-mintyGreen"}  px-8 
  rounded-bl-3xl rounded-br-3xl 
  ${isOpen ? 'fixed mt-32' : ''}
  `}>
    <Logo isOpen={isOpen} classes={`pb-8`} />
    <div className="w-auto flex items-center justify-between h-auto px-2 py-2.5 bg-dark rounded-lg">
      <button
        className="flex-col justify-center items-start hidden xl:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-white dark:bg-dark block transition-all duration-300 ease-out  h-0.5  ${isOpen ? "w-5" : "w-4"} rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-white dark:bg-dark block transition-all duration-300 ease-out  h-0.5  ${isOpen ? "w-5" : "w-5"} rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-white dark:bg-dark block transition-all duration-300 ease-out  h-0.5  ${isOpen ? "w-5" : "w-2.5"} rounded-sm -translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>
    </div>
  </div>
}

const LargeScreenHeader = ({ handleClick, isOpen }) => {
  const router = useRouter();
  return <div className="w-full flex flex-col items-center justify-between xl:hidden mt-10">
    <Logo classes="pb-8" />
    <div className="w-full flex items-center justify-between h-24 ">
      <nav className="w-[75%] flex items-center justify-between ">
        <CustomLink title={"Home"} />
        <CustomLink
          onClick={() => {
            handleScrollToTarget("aboutus");
          }}
          title={"About Us"}
          className="mx-4"
        />
        <CustomLink
          onClick={() => {
            handleScrollToTarget("features");
          }}
          title={"Features"}
          className="mx-4"
        />
        <CustomLink
          onClick={() => {
            handleScrollToTarget("pricing");
          }}
          title={"Pricing"}
          className="mx-4"
        />
        <CustomLink
          onClick={() => {
            handleScrollToTarget("faq");
          }}
          title={"FAQs"}
          className="mx-4"
        />
        <CustomLink title={"Gallery"} className="mx-4" />
        <CustomLink title={"Blog"} className="mx-4" />
        <CustomLink
          onClick={() => {
            handleScrollToTarget("contactus");
          }}
          title={"Contact Us"}
          className="mx-4"
        />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <div
          className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light py-1 px-4
      rounded-3xl text-base font-bold hover:bg-light 
      
      dark:bg-light dark:text-white  
       md:p-2 md:px-4 md:text-base
      `}
          style={{ cursor: "pointer" }}
        >
          Get App
        </div>

        <div
          onClick={() => {
            router.push("/signin");
          }}
          className={`flex items-center bg-transparent text-dark py-1 px-4 mx-2
      rounded-3xl text-base font-normal hover:bg-darkGreen hover:text-white 
      border border-solid border-darkGreen
      dark:bg-dark dark:border-white dark:text-white  
       md:p-2 md:px-4 md:text-base
      `}
          style={{ cursor: "pointer" }}
        >
          Sign in
        </div>

        <div
          className="flex rounded-full  dark:border-white bg-transparent p-2 "
          style={{ cursor: "pointer" }}
        >
          <Image src={langImage} height={9} width={9} alt="lang" />

          <div className="text-xs mx-1 text-darkGreen dark:text-white">
            EN
          </div>
        </div>
      </nav>
    </div>
  </div>
}

const Navebar = (props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleScrollToTarget = (elementId) => {
    // Scroll to the target item
    props.scrollToSection(elementId);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-40 xl:px-0 xl:pt-0 py-8 font-medium flex items-center justify-between
    dark:text-light  z-10 bg-transparent
    "
    >

      <SmallScreenHeader handleClick={handleClick} isOpen={isOpen} />

      <LargeScreenHeader handleScrollToTarget={handleScrollToTarget} />

      {isOpen ? (
        <motion.div
          initial={{ scale: 1, opacity: 0, x: "-50%", y: "-80%" }}
          animate={{ scale: 1, opacity: 1, x: "-50%", y: "-40%" }}
          className="min-w-[100vw] min-h-[100vh] mt-60 pt-24 flex flex-col items-center z-[-1] justify-between fixed top-20 left-1/2
        -translate-x-1/2 -translate-y-1/2 backdrop-blur-md py-0 bg-dark/90 dark:bg-light/75 rounded-lg hidden xl:flex
        ">
          <nav className="w-full h-[60vh] flex items-center flex-col justify-between mt-6">
            <CustomMobileLink href={`/`} title={"Home"} toggle={handleClick} />
            <CustomMobileLink
              href={`/about`}
              title={"About Us"}
              toggle={() => {
                handleScrollToTarget("aboutus");
                handleClick();
              }}
            />
            <CustomMobileLink
              href={`/projects`}
              title={"Features"}
              toggle={() => {
                handleScrollToTarget("features");
                handleClick();
              }}
            />
            <CustomMobileLink
              href={`/articles`}
              title={"Pricing"}
              toggle={() => {
                handleScrollToTarget("pricing");
                handleClick();
              }}
            />
            <CustomMobileLink
              href={`/articles`}
              title={"FAQs"}
              toggle={() => {
                handleScrollToTarget("faq");
                handleClick();
              }}
            />
            <CustomMobileLink
              href={`/articles`}
              title={"Gallery"}
              toggle={() => {
                handleScrollToTarget("gallery");
                handleClick();
              }}
            />
            <CustomMobileLink
              href={`/articles`}
              title={"Blog"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={`/articles`}
              title={"Contact Us"}
              toggle={() => {
                handleScrollToTarget("contactus");
                handleClick();
              }}
            />
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mt-8">
                <Image src={userIcon} width={42.5} height={42.5} alt="user" className="mx-2" />
                <button onClick={() => {
                  router.push("/signin");
                }} className="border border-white border-1 text-lg rounded-3xl px-12 py-0.5 mx-2
                text-white font-thin hover:text-dark hover:bg-white">Log In</button>
              </div>
              <p style={{ cursor: "pointer" }} className="text-sm text-white font-extralight mt-3">New here ?
                <span className="text-lightGreen"> create an account</span></p>
            </div>
            <div className="flex items-center mt-8">
              <div
                className="flex rounded-full  dark:border-white bg-transparent p-2 "
                style={{ cursor: "pointer" }}
              >
                <Image src={langIconWhite} height={9} width={9} alt="lang" />

                <div className="text-xs mx-1 text-white dark:text-white">
                  EN
                </div>

              </div>
              <p className="text-xs text-white">Change Language</p>
            </div>
          </nav>

        </motion.div>
      ) : null}

    </header>
  );
};

export default Navebar;
