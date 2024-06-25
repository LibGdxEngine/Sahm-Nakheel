
import {useTranslation} from "next-i18next";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "@/pages/components/Navbar/HomeNavbar";
import editIcon from '../../../public/images/editIcon.svg';

import Image from "next/image";
import Footer from "@/pages/components/Footer";
import OfferCardItem from "@/pages/components/pricing-slider/OfferCardItem";
import {useState} from "react";
import {getAllPlans} from "@/components/services/contracts";
import {toast} from "react-toastify";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]})

const arabicFont = localFont({src: '../fonts/AGCRegular.ttf'})

function Option({text, isChecked, type = 2, onSelect}) {
    let optionType = "";
    if (type === 1) {
        optionType = "rounded-tl-3xl"
    } else if (type === 2) {
        optionType = ""
    } else {
        optionType = "rounded-tr-3xl"
    }
    return <div style={{cursor: "pointer"}}
                className={`w-full flex items-center justify-center ${isChecked ? "bg-white" : "bg-mGray"} px-6 py-4 
             ${optionType}
    `} onClick={onSelect}>
        <div className={`h-3 w-3 rounded-full ${isChecked ? "bg-lightGreen" : "bg-white"} mx-2`}>

        </div>
        <div>
            {text}
        </div>
    </div>;
}

function PayOption({text, isChecked}) {
    return <div style={{cursor: "pointer"}}
                className={`w-fit flex items-center justify-center ${isChecked ? "bg-dark" : "bg-white"}
                 rounded-full py-1.5 px-2 my-2`}>
        <div className={`h-3 w-3 rounded-full ${isChecked ? "bg-white" : "bg-gray"} me-1`}>

        </div>
        <div className={`${isChecked ? "text-white" : "text-dark"} text-xs`}>
            {text}
        </div>
    </div>;
}

const Plan = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [selectedPayOption, setSelectedPayOption] = useState("FULL");
    const handlePayOptionChange = (payOptionType) => {
        setSelectedPayOption(payOptionType);
    };
    const handleOptionChange = (optionType) => {
        setSelectedOption(optionType);
    };

    const {t, i18n} = useTranslation();
    return <div
        className={`${i18n.language === "en" ? englishFont.className : arabicFont.className}  w-full h-full flex flex-col bg-mintyGreen`}>
        <HomeNavbar/>
        <div className={`w-full h-full bg-cover bg-no-repeat bg-center`}>
            <div className={`w-full h-full flex flex-row items-center justify-center`}>
                <div className={`w-full h-screen flex flex-col items-end justify-start py-8 my-8 me-20`}>
                    <div className={`w-fit flex flex-col items-start`}>
                        <div className={`text-midGreen font-thin text-5xl `}>
                            Check Out
                        </div>
                        <div className={`text-base text-navyBlue font-normal mt-2`}>
                            Your Plan Details
                        </div>
                        <div className={`w-96 mt-8`}>
                            <OfferCardItem
                                years={'10'}
                                title={'Medjool Trees'}
                                investment={'10 - Years ROI would be\n'}
                                cost={'EGP 250,000'}
                                rows={["EGP 25000 Annual ROI", "Installment over 10 Months", "EGP 8000 installment per Month",
                                    "30% Average ROI", "EGP 70000 for Cash Payment"]}
                                income={null}
                                onCardClicked={null}
                                button_text={null}
                            />
                        </div>
                        <div className={`w-96 flex mt-8`}>

                            <div
                                className={`w-full text-center text-dark ${selectedPayOption === "FULL" ? " text-white bg-dark" : "hover:bg-white hover:text-dark"} px-6 mx-1 py-1.5 
                                border border-solid border-darkGreen rounded-35`}
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    handlePayOptionChange("FULL")
                                }}
                            >
                                Pay Full Amount
                            </div>
                            <div
                                className={`w-full text-center px-6 text-dark ${selectedPayOption === "FULL" ? "hover:bg-white hover:text-dark" : "text-white bg-dark"} mx-1 py-1.5 border border-solid border-darkGreen rounded-35`}
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    handlePayOptionChange("INSTALLMENTS")
                                }}
                            >
                                Installments
                            </div>

                        </div>
                        {selectedPayOption === "INSTALLMENTS" &&
                            <div className={`w-full bg-lightGreen rounded-3xl px-4 py-4 grid grid-cols-2 mt-8`}>
                                <PayOption text={`800 EGP/M - 12 Months`} isChecked={true}/>
                                <PayOption text={`800 EGP/M - 20 Months`} isChecked={false}/>
                                <PayOption text={`700 EGP/M - 10 Months`} isChecked={false}/>
                                <PayOption text={`850 EGP/M - 25 Months`} isChecked={false}/>
                                <PayOption text={`900 EGP/M - 15 Months`} isChecked={false}/>
                                <PayOption text={`1000 EGP/M - 30 Months`} isChecked={false}/>

                            </div>}
                    </div>
                </div>
                <div className={`w-full h-screen flex flex-col items-start justify-start mt-44`}>
                    <div className={`text-bold text-navyBlue`}>
                        Payment Methods
                    </div>
                    <div className={`w-96 flex rounded-t-35 flex-col`}>
                        <div id={`top`} className={`w-full flex items-center justify-center rounded-t-35 mt-8`}>
                            <Option text={`Cash`} isChecked={selectedOption === 0} type={1}
                                    onSelect={() => handleOptionChange(0)}/>
                            <Option text={`Check`} isChecked={selectedOption === 1} type={2}
                                    onSelect={() => handleOptionChange(1)}/>
                            <Option text={`Credit`} isChecked={selectedOption === 2} type={3}
                                    onSelect={() => handleOptionChange(2)}/>
                        </div>
                        <div id={'bottom'} className={`w-96 rounded-b-3xl bg-white h-full pb-10`}>
                            <div className={`w-full flex items-center justify-center mt-16 px-8 relative`}>
                                <input
                                    className={`w-full bg-kGray py-4 px-3 rounded-3xl border-none placeholder:text-semiGray`}
                                    type="text" placeholder={`Address`}/>
                                <Image src={editIcon} width={18} height={18} alt={``}
                                       className={`absolute right-[12%] top-[30%]`}/>
                            </div>
                            <div className={`flex items-center justify-center mt-10`}>
                                <div className={`w-full flex items-center justify-center  ps-8 relative me-2`}>
                                    <input
                                        className={`w-full bg-kGray py-4 px-3 rounded-3xl border-none placeholder:text-semiGray`}
                                        type="text" placeholder={`City`}/>
                                    <Image src={editIcon} width={18} height={18} alt={``}
                                           className={`absolute right-[10%] top-[30%]`}/>
                                </div>
                                <div className={`w-full flex items-center justify-center  pe-8 relative ms-2`}>
                                    <input
                                        className={`w-full bg-kGray py-4 px-3 rounded-3xl border-none placeholder:text-semiGray`}
                                        type="text" placeholder={`Government`}/>
                                    <Image src={editIcon} width={18} height={18} alt={``}
                                           className={`absolute right-[25%] top-[30%]`}/>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full flex items-center justify-end mt-6`}>
                            <div
                                className={`w-fit text-center text-white bg-mDark px-6 mx-1 py-1.5  my-0
                                border border-solid border-darkGreen rounded-35 font-bold text-base hover:bg-white  hover:text-mDark`}
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                    toast.warning("Domain is not accepted!, should be www.sahmnakheel.com");
                                }}
                            >
                                Check Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    </div>
};

export default Plan;

export async function getServerSideProps(context) {

    getAllPlans().then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
    return {
        props: {
            // Data to be passed as props to the page component
        },
    };
}