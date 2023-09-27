import Layout from "..//components/Layout";

import Image from "next/image";
import { useRef } from "react";
import polygon1 from "../../public/images/svgs/Polygon 1.svg";
import polygon3 from "../../public/images/svgs/Polygon 3.svg";
import footerPalms from "/public/images/svgs/Footer Palm Trees ART.svg";

import FAQs from "../components//sections/SectionEight";
import HowItWorks from "../components/sections/SectionFive";
import Pricing from "../components/sections/SectionFour";
import ContactUs from "../components/sections/SectionSeven";
import DownloadApp from "../components/sections/SectionSix";
import Features from "../components/sections/SectionThree";
import PaymentLayout from "../components/PaymentLayout";
import HomePage from "../components/sections/SectionOne";
import AboutUs from "../components/sections/SectionTwo";

export default function Home() {
  const aboutUsElement = useRef(null);
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
          <HomePage />
          {/* SECTION 2 */}
          <AboutUs aboutUsElementRef={aboutUsElement} />
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
          {/* FOOTER IMAGE*/}
          <div className="absolute left-0 w-full mt-44 sm:mt-28">
            <Image
              src={footerPalms}
              width={1000}
              height={291}
              alt=""
              className="w-full "
            />
          </div>
          <div className="mb-96 md:mb-80 sm:mb-64" />
        </Layout>
      </main>
    </>
  );
}
