import Layout from "..//components/Layout";

import Image from "next/image";

import polygon3 from "../public/images/svgs/Polygon 3.svg";
import footerPalms from "/public/images/svgs/Footer Palm Trees ART.svg";

import FAQs from "../components//sections/FAQ";
import HowItWorks from "../components/sections/HowItWorks";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";
import DownloadApp from "../components/sections/DownloadApp";
import Features from "../components/sections/Features";
import PaymentLayout from "../components/PaymentLayout";
import HomePage from "../components/sections/HomePage";
import AboutUs from "../components/sections/AboutUs";
import WhatPeopleSays from "../components/sections/WhatPeopleSays";
import InvestmentCalculator from "../components/sections/InvestmentCalculator";
import Gallery from "../components/sections/Gallery";
import Table from "../components/sections/Table";
import TransitionEffect from "../components/TransitionEffect";
import { useEffect, useState } from "react";

export default function Home() {
  const [showTransition, setShowTransition] = useState(true);

  // Simulate a delay for the transition screen
  useEffect(() => {
    setTimeout(() => {
      setShowTransition(false);
    }, 2000); // Adjust the delay as needed
  }, []);
  return (
    <>
      {showTransition && <TransitionEffect />}
      <main className="flex flex-col items-center  text-dark w-full min-h-screen dark:text-light">
        <div className="w-full  absolute left-[0%] top-[170%] translate-x-[0%] sm:top-0 z-0 sm:hidden">
          <Image src={polygon3} alt="" className="w-full h-auto" />
        </div>

        <Layout className="pt-0 md:p-16 sm:pt-8 z-1 bg-transparent">
          {/* SECTION 1 */}
          <HomePage />
          {/* SECTION 2 */}
          <AboutUs />
          {/* SECTION 3 */}
          <Features />
          {/* SECTION 4 */}
          <PaymentLayout>
            <Pricing />
          </PaymentLayout>
          {/* SECTION 5 */}
          <HowItWorks />
          {/* SECTION 6 */}
          <DownloadApp />
          {/* SECTION 7 */}
          <ContactUs />
          {/* SECTION 8 */}
          <FAQs />
          {/* SECTION 9 */}
          <WhatPeopleSays />
          {/* SECTION 10 */}
          <InvestmentCalculator />
          {/* SECTION 11 */}
          <Table />
          {/* SECTION 12 */}
          <Gallery />
          {/* FOOTER IMAGE*/}
          <br className="sm:hidden" />
          <br className="sm:hidden" />
          <br className="sm:hidden" />
          <div className="absolute left-0 w-full mt-44 sm:mt-0">
            <Image
              src={footerPalms}
              width={1000}
              height={291}
              alt=""
              className="w-full sm:h-60 k"
            />
          </div>
          <div className="mb-96 md:mb-80 sm:mb-56" />
        </Layout>
      </main>
    </>
  );
}
