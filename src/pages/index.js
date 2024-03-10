import Image from 'next/image'
import {Poppins} from 'next/font/google'
import localFont from 'next/font/local'
import polygon2 from "../../public/images/Polygon 2.svg";
import Home from "@/pages/components/sections/home";
import AboutUs from "@/pages/components/sections/aboutus";
import Features from "@/pages/components/sections/features";

import Pricing from "@/pages/components/sections/pricing";
import HowItWorks from "@/pages/components/sections/howItWorks";
import DownloadApp from "@/pages/components/sections/downloadApp";
import ContactUs from "@/pages/components/sections/contactUs";
import FAQs from "@/pages/components/sections/faqs";
import WhatPeopleSays from "@/pages/components/sections/WhatPeopleSays";
import InvestmentCalculator from "@/pages/components/sections/InvestmentCalculator";
import Gallery from "@/pages/components/sections/Gallery";
import PreFooter from "@/pages/components/sections/preFooter";
import {useTranslation} from 'next-i18next';
import NavBar from "@/pages/components/Navbar/NavBar";
import Footer from "@/pages/components/Footer";


const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: './fonts/AGCRegular.ttf'})

export default function Index({data}) {
    const {t, i18n} = useTranslation();

    const {
        id,
        arabic_title,
        english_title,
        arabic_slogan,
        english_slogan,
        video_link,
        arabic_action_button_text,
        english_action_button_text,
        action_button_link,
        arabic_aboutus_slogan,
        english_aboutus_slogan,
        arabic_aboutus_title,
        english_aboutus_title,
        arabic_aboutus_desc,
        english_aboutus_desc,
        arabic_aboutus_button,
        english_aboutus_button,
        aboutus_photo,
        arabic_features_slogan,
        english_features_slogan,
        arabic_plans_slogan,
        english_plans_slogan,
        android_app_link,
        ios_app_link,
        arabic_contact_slogan,
        english_contact_slogan,
        arabic_contact_message,
        english_contact_message,
        map_link,
        phone_number,
        location_as_text,
        email,
        arabic_faq_slogan,
        english_faq_slogan,
        type_a_price,
        type_b_price,
        type_c_price,
        type_d_price,
        footer_word,
        fb_link,
        X_link,
        youtube_link,
        insta_link,
        investment_plans,
        questions,
        feedback,
        gallery_items
    } = data[0];

    return (
        <div
            className={`${i18n.language === "en" ? englishFont.className : arabicFont.className}  flex flex-col items-center  text-dark w-full min-h-screen dark:text-light`}>

            <div className="absolute left-[60%] top-[0%] translate-x-[-0%] sm:top-0 z-0 sm:hidden">
                <Image src={polygon2} alt="" className="w-full h-auto"/>
            </div>

            <NavBar/>
            <Home arabic_title={arabic_title}
                  english_title={english_title}
                  arabic_slogan={arabic_slogan}
                  english_slogan={english_slogan}
                  video_link={video_link}
                  arabic_action_button_text={arabic_action_button_text}
                  english_action_button_text={english_action_button_text}
                  action_button_link={action_button_link}/>
            <AboutUs arabic_aboutus_slogan={arabic_aboutus_slogan}
                     english_aboutus_slogan={english_aboutus_slogan}
                     arabic_aboutus_title={arabic_aboutus_title}
                     english_aboutus_title={english_aboutus_title}
                     arabic_aboutus_desc={arabic_aboutus_desc}
                     english_aboutus_desc={english_aboutus_desc}
                     arabic_aboutus_button={arabic_aboutus_button}
                     english_aboutus_button={english_aboutus_button}
                     aboutus_photo={aboutus_photo}/>
            <Features arabic_features_slogan={arabic_features_slogan}
                      english_features_slogan={english_features_slogan}/>
            <Pricing arabic_plans_slogan={arabic_plans_slogan}
                     english_plans_slogan={english_plans_slogan}
                     investment_plans={investment_plans}/>
            <HowItWorks/>
            <DownloadApp/>
            <ContactUs arabic_contact_slogan={arabic_contact_slogan}
                       english_contact_slogan={english_contact_slogan}
                       arabic_contact_message={arabic_contact_message}
                       english_contact_message={english_contact_message}
                       map_link={map_link}
                       phone_number={phone_number}
                       location_as_text={location_as_text}
                       email={email}/>
            <FAQs questions={questions}/>
            <WhatPeopleSays feedbacks={feedback}/>
            <InvestmentCalculator type_a_price={type_a_price}
                                  type_b_price={type_b_price}
                                  type_c_price={type_c_price}
                                  type_d_price={type_d_price}/>
            <Gallery/>
            <PreFooter/>
            <Footer/>
        </div>

    )
};
