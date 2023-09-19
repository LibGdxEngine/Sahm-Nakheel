import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/svgs/image_page_1.svg";
import mobileImage from "../../public/images/svgs/Mobile.svg";
import profilePic2 from "../../public/images/svgs/page2.svg";
import playIcon from "../../public/images/svgs/playIcon.svg";
import polygon1 from "../../public/images/svgs/polygon 1.svg";
import polygon3 from "../../public/images/svgs/polygon 3.svg";
import walletImage from "../../public/images/svgs/wallet Icon.svg";
import walletImage1 from "../../public/images/svgs/Wallet Icon (1).svg";
import walletImage2 from "../../public/images/svgs/Wallet Icon (2).svg";
import walletImage3 from "../../public/images/svgs/Wallet Icon (3).svg";
import walletImage4 from "../../public/images/svgs/Wallet Icon (4).svg";
import walletImage5 from "../../public/images/svgs/Wallet Icon (5).svg";
import walletImage6 from "../../public/images/svgs/Wallet Icon (6).svg";
import walletImage7 from "../../public/images/svgs/Wallet Icon (7).svg";
import aboutUs from "../../public/images/svgs/About Us.svg";
import howItWorks from "../../public/images/svgs/How It Works.svg";
import group1 from "../../public/images/svgs/Group 1.svg";
import group2 from "../../public/images/svgs/Group 1 (1).svg";
import group3 from "../../public/images/svgs/Group 1 (2).svg";
import group4 from "../../public/images/svgs/Group 1 (3).svg";
import bullet from "../../public/images/svgs/Bullet.svg";
import downloadAppText from "../../public/images/svgs/downloadAppText.svg";
import DownloadAppTextHidden from "../../public/images/svgs/DownloadAppTextHidden.svg";
import investmentPlan from "../../public/images/svgs/Investment Plans.svg";
import greatFeatures from "../../public/images/svgs/Great Features.svg";
import bestROI from "../../public/images/svgs/Best ROI Lable.svg";
import longTerm from "../../public/images/svgs/Long Term Lable.svg";
import secure from "../../public/images/svgs/Secure Lable.svg";
import map from "../../public/images/svgs/Map.svg";
import contactUs from "../../public/images/svgs/Contact Us.svg";
import vector1 from "../../public/images/svgs/Vector 1.svg";
import vector2 from "/public/images/svgs/Vector (3).svg";
import vector3 from "/public/images/svgs/Vector (2).svg";
import vector4 from "/public/images/svgs/Vector (1).svg";
import faq from "/public/images/svgs/Frequently asked questions.svg";
import footerPalms from "/public/images/svgs/Footer Palm Trees ART.svg";
import AnimatedText from "@/components/AnimatedText";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import ExpandableDiv from "@/components/ExpandableDiv";

const inter = Inter({ subsets: ["latin"] });

const FeatureRow = ({
  text,
  classes = "",
  imageWidth = 28,
  imageHeight = 18,
}) => {
  return (
    <>
      <div className={`w-full flex items-center justify-start ms-3 mb-3`}>
        <Image
          src={bullet}
          width={imageWidth}
          height={imageHeight}
          alt=""
          className="me-3"
        />
        <p className={`text-navyBlue text-xs font-semibold  ${classes}`}>
          {text}
        </p>
      </div>
    </>
  );
};

const SpecialOfferCard = ({ years, title, investment, cost, rows, income }) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.05 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1 }); // Reset scale when not hovered
  };
  return (
    <>
      <motion.div
        className="flex flex-col items-start justify-between h-96 bg-white  rounded-3xl mx-8 p-8 shadow-lg shadow-y-50
        bg-gradient-to-bl from-dark  to-greenCard
        relative
        "
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        animate={controls}
      >
        <div className="w-2/3 absolute left-[17%] top-[-5%] bg-mOrange rounded-full text-center p-3">
          <p className="text-dark font-bold text-normal">Most popular plan</p>
        </div>
        <div className="flex items-center justify-center text-white">
          <h1 className="text-6xl font-extrabold me-5">{years}</h1>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl text-lightGreen">{title}</h1>
            <h1 className="text-xs text-lightGreen">{investment}</h1>
            <h1 className="text-sm text-white font-extrabold">{cost}</h1>
          </div>
        </div>

        <div>
          <FeatureRow classes="!text-white" text={`${rows[0]}`} />
          <FeatureRow classes="!text-white" text={`${rows[1]}`} />
          <FeatureRow classes="!text-white" text={`${rows[2]}`} />
          <FeatureRow classes="!text-white" text={`${rows[3]}`} />
          <FeatureRow classes="!text-white" text={`${rows[4]}`} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-extrabold me-1">
              {income}
            </h1>
            <h1 className="text-sm text-white font-bold mt-1">EGP</h1>
          </div>

          <div
            className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-lightGray  p-1.5 px-6
            rounded-3xl text-sm font-bold hover:bg-light 
            text-darkGreen
            dark:bg-light dark:text-white  
             md:p-2 md:px-4 md:text-base
            `}
            style={{ cursor: "pointer" }}
          >
            Choose Plan
          </div>
        </div>
      </motion.div>
    </>
  );
};

const OfferCardItem = ({ years, title, investment, cost, rows, income }) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.05 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1 }); // Reset scale when not hovered
  };
  return (
    <>
      <motion.div
        className="flex flex-col items-start justify-between  h-96 bg-white  rounded-3xl mx-8 p-8 shadow-lg shadow-y-50"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        animate={controls}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-extrabold me-5">{years}</h1>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl text-lightGreen">{title}</h1>
            <h1 className="text-xs text-mildGray">{investment}</h1>
            <h1 className="text-sm text-navyBlue font-extrabold">{cost}</h1>
          </div>
        </div>

        <div>
          <FeatureRow text={`${rows[0]}`} />
          <FeatureRow text={`${rows[1]}`} />
          <FeatureRow text={`${rows[2]}`} />
          <FeatureRow text={`${rows[3]}`} />
          <FeatureRow text={`${rows[4]}`} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold me-1">{income}</h1>
            <h1 className="text-sm text-lightGreen font-bold mt-1">EGP</h1>
          </div>

          <div
            className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light p-1.5 px-6
            rounded-3xl text-sm font-bold hover:bg-light 
            
            dark:bg-light dark:text-white  
             md:p-2 md:px-4 md:text-base
            `}
            style={{ cursor: "pointer" }}
          >
            Choose Plan
          </div>
        </div>
      </motion.div>
    </>
  );
};

const CardItem = ({ image, title, desc }) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.1, rotate: -5 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1, rotate: 0 }); // Reset scale when not hovered
  };

  return (
    <>
      <div
        className="flex flex-col items-start justify-between  h-72 bg-white bg-opacity-60 rounded-3xl mx-8 p-8"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div animate={controls}>
          <Image src={image} height={76} width={73} alt="wallet" />
        </motion.div>

        <h1 className="text-lg font-extrabold text-primary">{title}</h1>
        <p className="text-sm text-dark font-thin">{desc}</p>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <div className="absolute left-[30%] top-[15%] translate-x-[-30%] sm:top-0 z-0 sm:hidden">
          <Image src={polygon1} alt="" className="w-full h-auto" />
        </div>

        <div className="w-full absolute left-[30%] top-[180%] translate-x-[-30%] sm:top-0 z-0 sm:hidden">
          <Image src={polygon3} alt="" className="w-full h-auto" />
        </div>

        <Layout className="pt-0 md:p-16 sm:pt-8 z-1 bg-transparent">
          {/* SECTION 1 */}
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center  ">
              <h1
                className="w-full !text-md !text-left !text-primary font-light 
                xl:!text-2xl lg:!text-center lg:!text-3xl md:!text-3xl sm:!text-3xl"
              >
                Start your investment journey with Sahm Nakheel
              </h1>

              <br />
              <h1
                className="w-full !text-5xl !text-left !text-primary font-light
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-3xl sm:!text-3xl
                "
              >
                Affordable investment
              </h1>

              <div className="w-full flex items-center justify-center">
                <h1
                  className="w-full !text-mlg !text-left !text-primary font-extrabold 
                xl:!text-5xl lg:!text-right lg:me-2 lg:!text-4xl md:!text-3xl sm:!text-3xl xs:!text-2xl 
                "
                >
                  Starting from
                </h1>
                <h1
                  className="w-full !text-5xl !text-left !text-darkGreen font-extrabold 
                xl:!text-5xl lg:!text-left lg:!text-4xl md:!text-3xl sm:!text-3xl xs:!text-2xl
                "
                >
                  8000 EGP
                </h1>
              </div>
              <h1
                className="w-full !text-md !text-left !text-primary font-light
                xl:!text-2xl lg:!text-center lg:!text-3xl md:!text-3xl sm:!text-3xl
                "
              >
                Achieve an exceptional long-term ROI up to 50%
              </h1>

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                <br />
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <div
                  className={`flex items-center bg-dark text-light p-2.5 px-12
                  rounded-full text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  `}
                  style={{ cursor: "pointer" }}
                >
                  Get Started
                </div>
                <div
                  className={`flex items-center bg-transparent text-dark p-2.5 pe-12 ps-5 mx-4
                  rounded-3xl text-lg font-normal hover:bg-darkGreen hover:text-light 
                  border border-solid border-darkGreen
                  dark:bg-dark dark:border-white dark:text-white  
                  md:p-2 md:px-4 md:text-base
                  `}
                  style={{ cursor: "pointer" }}
                >
                  <div className="w-full flex ">
                    <Image
                      src={playIcon}
                      width={18}
                      height={21.5}
                      alt="play"
                      className="me-4 "
                    />
                    Watch Video
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="w-1/2 md:w-full">
              <Image
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                src={profilePic}
                alt="Sahm Nakheel"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
          </div>
          {/* SECTION 2 */}
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="absolute left-[50%] top-[111%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
              <Image src={aboutUs} alt="" className="w-full h-auto" />
            </div>
            <h1 className="text-7xl text-primary font-normal">About Us</h1>
            <br />
            <h1 className="text-2xl text-primary font-thin">
              Maximizing your investment opportunities
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full me-8">
              <Image
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                src={profilePic2}
                alt="Sahm Nakheel"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text={`Take control of your financial destiny and build future`}
                className="!text-5xl !text-left !text-primary font-normal
                xl:!text-xl lg:!text-center lg:!text-3xl md:!text-5xl sm:!text-3xl
                "
              />
              <br />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                With Sahm Nakheel, you can own a share, which represents a palm
                tree, for an impressive period of 50 years.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                And guess what? The value of one share is a mere 8000 Egyptian
                pounds! Such an affordable investment opens the door to
                incredible possibilities.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <div
                  className={`flex items-center bg-dark text-light p-2.5 px-12
                  rounded-full text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  `}
                  style={{ cursor: "pointer" }}
                >
                  Reserve your share now
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
          {/* SECTION 3 */}
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="absolute left-[50%] top-[213%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
              <Image src={greatFeatures} alt="" className="w-full h-auto" />
            </div>
            <h1 className="text-7xl text-primary font-normal">
              Great Features
            </h1>
            <br />
            <h1 className="text-2xl text-primary font-thin w-1/2 text-center">
              There is no better asset to own than one that increases in value
              over time & keeps pace with inflation
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="grid grid-cols-4 gap-y-8 lg:gap-2 md:grid-cols-1 md:gap-y-16">
            <CardItem
              image={walletImage}
              title={`Affordable`}
              desc={`As low as just 800 EGP per month/share, Sahm Nakheel offers an accessible investment.`}
            />
            <CardItem
              image={walletImage1}
              title={`Exceptional`}
              desc={`Your financial stake in Sahm Nakheel opens the doors to exceptional returns.`}
            />
            <CardItem
              image={walletImage2}
              title={`Long-Term`}
              desc={`The 50-year ownership period provides stability and a long-term commitment.`}
            />
            <CardItem
              image={walletImage3}
              title={`Guaranteed`}
              desc={`Medjool dates are becoming a world-famous export product with an exceptional demand.`}
            />

            <CardItem
              image={walletImage4}
              title={`Effortless`}
              desc={`Our tailor-made plans allow you to buy the number of shares that best suits your needs.`}
            />
            <CardItem
              image={walletImage5}
              title={`Flexible`}
              desc={`Investment options allow you to tailor your initial investment to what you are comfortable with.`}
            />
            <CardItem
              image={walletImage6}
              title={`Easy`}
              desc={`Invest from anywhere through our user-friendly website, with just a few clicks.`}
            />
            <CardItem
              image={walletImage7}
              title={`Safe`}
              desc={`Ensure peace of mind and a risk-free venture with our top-notch risk practices.`}
            />
          </div>
          {/* SECTION 4 */}
          <div className="bg-mintyGreen rounded-3xl p-14 mt-44">
            <div className="flex flex-col items-center justify-center mt-12">
              <div className="absolute left-[50%] top-[370%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
                <Image src={investmentPlan} alt="" className="w-full h-auto" />
              </div>
              <h1 className="text-7xl text-primary font-normal">
                Investment Plans
              </h1>
              <br />
              <h1 className="text-2xl text-primary font-thin w-1/2 text-center">
                Your Path to Effortless Financial Growth
              </h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-3 gap-y-8 lg:gap-2 md:grid-cols-1 md:gap-y-16">
              <OfferCardItem
                years={10}
                title={`Medjool Trees`}
                investment={`10 - Years ROI would be `}
                cost={`EGP 250,000`}
                rows={[
                  `EGP 25000 Annual ROI`,
                  `Installment over 10 Months`,
                  ` EGP 8000 installment per Month`,
                  `30% Average ROI`,
                  `EGP 70000 for Cash Payment`,
                ]}
                income={`80,000`}
              />
              <OfferCardItem
                years={5}
                title={`Medjool Trees`}
                investment={`10 - Years ROI would be `}
                cost={`EGP 125,000`}
                rows={[
                  `EGP 12500 Annual ROI`,
                  `Installment over 10 Months`,
                  `EGP 4000 installment per Month`,
                  `30% Average ROI`,
                  `EGP 35000 for Cash Payment`,
                ]}
                income={`40,000`}
              />
              <SpecialOfferCard
                years={1}
                title={`Medjool Trees`}
                investment={`10 - Years ROI would be `}
                cost={`EGP 25,000`}
                rows={[
                  `EGP 2500 Annual ROI`,
                  `Installment over 10 Months`,
                  `EGP 4000 installment per Month`,
                  `30% Average ROI`,
                  `EGP 7000 for Cash Payment`,
                ]}
                income={`8,000`}
              />
            </div>
          </div>
          {/* SECTION 5 */}
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="absolute left-[50%] top-[467%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
              <Image src={howItWorks} alt="" className="w-full h-auto" />
            </div>
            <h1 className="text-7xl text-primary font-normal sm:text-center">
              How It Works
            </h1>
            <br />
            <h1 className="text-2xl text-primary font-thin w-1/2 text-center">
              With just a few clicks, you can create your own investment
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="grid grid-cols-4 gap-x-40 gap-y-8 lg:gap-2 md:grid-cols-1 md:gap-y-16">
            <div className="w-full flex flex-col items-center justify-center ">
              <Image src={group1} width={129} height={192} alt="" />
              <h1 className="text-primary text-3xl font-bold mt-2">Register</h1>
              <h1 className="text-dark text-xl font-thin text-center p-2">
                Sign-Up easily through our website or application.
              </h1>
            </div>
            {/*  */}
            <div className="w-full flex flex-col items-center justify-center ">
              <Image src={group2} width={129} height={192} alt="" />
              <h1 className="text-primary text-3xl font-bold mt-2">Choose</h1>
              <h1 className="text-dark text-xl font-thin text-center p-2">
                Get your investment option from our wide range offers.
              </h1>
            </div>
            {/*  */}
            <div className="w-full flex flex-col items-center justify-center ">
              <Image src={group3} width={129} height={192} alt="" />
              <h1 className="text-primary text-3xl font-bold mt-2">Easy Pay</h1>
              <h1 className="text-dark text-xl font-thin text-center p-2">
                Flexible & convenient payments for everyone.
              </h1>
            </div>
            {/*  */}
            <div className="w-full flex flex-col items-center justify-center ">
              <Image src={group4} width={129} height={192} alt="" />
              <h1 className="text-primary text-3xl font-bold mt-2">Own</h1>
              <h1 className="text-dark text-xl font-thin text-center p-2">
                You will get notified within 24H of New Investment.
              </h1>
            </div>
          </div>
          {/* SECTION 6 */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full relative">
              <Image
                priority={true}
                width={789}
                height={728}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                src={mobileImage}
                alt="Sahm Nakheel"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
              <Image
                src={bestROI}
                width={226}
                height={104}
                alt=""
                className="absolute right-[14%] top-[64%]"
              />
              <Image
                src={longTerm}
                width={250}
                height={95}
                alt=""
                className="absolute left-[6%] top-[41.5%]"
              />
              <Image
                src={secure}
                width={191}
                height={101}
                alt=""
                className="absolute right-[35%] top-[-5%]"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center relative">
              <Image src={downloadAppText} width={496} height={205} alt="" />
              <Image
                src={DownloadAppTextHidden}
                width={708}
                height={268}
                alt=""
                className="absolute right-[4%] top-[-8%]"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs"></p>
              <div className="flex flex-col items-center self-start mt-2 lg:self-center">
                <FeatureRow
                  text={`Easy options to sign up and enjoy our Sahm Nakheel app`}
                  classes="!text-lg !text-primary font-thin"
                  imageWidth={47}
                  imageHeight={33}
                />
                <br />
                <FeatureRow
                  text={`The project's latest developments are notified to you through notifications`}
                  classes="!text-lg !text-primary font-thin"
                  imageWidth={47}
                  imageHeight={33}
                />
                <br />
                <FeatureRow
                  text={`Track your installments and view your account statement for the latest transactions`}
                  classes="!text-lg !text-primary font-thin"
                  imageWidth={47}
                  imageHeight={33}
                />
              </div>
              <br />
              <br />
            </div>
          </div>
          {/* SECTION 7 */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="flex h-full items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center relative">
              <Image
                src={vector1}
                width={698}
                height={631}
                alt=""
                className="absolute left-[-20%] top-[-25%] z-0"
              />
              <Image
                src={contactUs}
                width={496}
                height={205}
                alt=""
                className="absolute left-[-10%] top-[5%] sm:left-[0%]"
              />
              <h1 className="w-full text-7xl text-primary font-normal">
                Contact Us
              </h1>
              <h1 className="w-full text-2xl text-primary font-thin mt-4">
                Get in touch, with easy ways to reach
              </h1>
              <div className="w-3/4 h-full mt-4 flex flex-col items-center self-start  lg:self-center z-1 relative">
                <div class=" container mx-auto mt-4">
                  <input
                    id="text-input"
                    type="text"
                    class="border border-white rounded-2xl mb-5 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                    placeholder="Name"
                  />
                  <input
                    id="text-input"
                    type="text"
                    class="border border-white rounded-2xl mb-5 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                    placeholder="Email"
                  />
                  <input
                    id="text-input"
                    type="text"
                    class="border border-white rounded-2xl h-32 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                    placeholder="Query"
                  />

                  <div className="flex w-full items-center justify-between mt-8 ">
                    <h1 className="w-2/3 text-sm text-primary font-normal sm:text-left sm:w-1/2">
                      You will recieve a response within 48 hours from our team.
                    </h1>
                    <div
                      className={`w- 1/3 flex items-center bg-dark text-light p-1.5 px-6 pt-2 pb-2 
                  rounded-full text-sm font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  `}
                      style={{ cursor: "pointer" }}
                    >
                      Send Message
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>

            <div className="w-1/2 md:w-full absolute right-0 sm:hidden">
              <Image
                priority={true}
                width={899}
                height={591}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                src={map}
                alt="Sahm Nakheel"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 sm:flex-col ">
            <div className="w-full flex items-center justify-center sm:justify-between sm:px-12">
              <Image
                src={vector2}
                width={23}
                height={23}
                alt="phone"
                className="mx-2"
              />
              <h1 className="text-darkGreen text-lg font-normal">
                ( +20 ) 011 511 511 26
              </h1>
            </div>
            <div className="w-full flex items-center justify-center sm:justify-between sm:px-12">
              <Image
                src={vector3}
                width={16}
                height={23}
                alt="phone"
                className="mx-2"
              />
              <h1 className="text-darkGreen text-lg font-normal sm:text-right">
                35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
              </h1>
            </div>{" "}
            <div className="w-full flex items-center justify-center sm:justify-between sm:px-12">
              <Image
                src={vector4}
                width={30}
                height={20}
                alt="phone"
                className="mx-2"
              />
              <h1 className="text-darkGreen text-lg font-normal">
                info@sahmnakheel.com
              </h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* SECTION 8 */}
          <div className="w-full flex flex-col items-start justify-center mt-16 relative">
            <div className="absolute left-[-3%] top-[0%] translate-x-[-0%] sm:top-0 z-100 sm:hidden">
              <Image src={faq} alt="" className="w-full h-auto" />
            </div>
            <h1 className="text-7xl text-primary font-normal sm:text-center">
              Frequently asked questions
            </h1>
            <br />
            <h1 className="text-2xl text-primary font-thin w-full text-left">
              We can answer your questions any time
            </h1>
            <div className="w-full mt-20 grid grid-cols-2 gap-y-8 gap-x-6 lg:gap-2 md:grid-cols-1 md:gap-y-16 sm:gap-y-4">
              <ExpandableDiv
                title={"What are the benefits of investing with Sahm Nakheel?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
              <ExpandableDiv
                title={"What makes Nakheel Al Majdool so special?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
              <ExpandableDiv
                title={"How does the contracting process work?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
              <ExpandableDiv
                title={"What is the location of Sahm Nakheel project?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
              <ExpandableDiv
                title={"What are the benefits of investing with Sahm Nakheel?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
              <ExpandableDiv
                title={"What guarantees are provided by the project?"}
                content={
                  <div className="flex mt-4">
                    <div class="border-l-2 border-mildGray h-auto me-4"></div>
                    <h1 className="text-primary px-3">
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups.
                    </h1>
                  </div>
                }
              />
            </div>
          </div>
          {/* FOOTER */}
          <div className="absolute left-0 w-full mt-44 sm:mt-28">
            <Image
              src={footerPalms}
              width={1000}
              height={291}
              alt=""
              className="w-full "
            />
          </div>
          <div className="mb-96 md:mb-80 sm:mb-64"/>
    
        </Layout>
      </main>
    </>
  );
}
