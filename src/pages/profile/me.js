import {useTranslation} from "next-i18next";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "@/pages/components/Navbar/HomeNavbar";
import EditProfileIcon from '../components/utils/EditProfileIcon';
import trueIcon from '../../../public/images/trueIcon.svg';
import falseIcon from '../../../public/images/falseIcon.svg';
import editIcon from '../../../public/images/editIcon.svg';
import calenderIcon from '../../../public/images/calenderIcon.svg';
import Image from "next/image";
import Footer from "@/pages/components/Footer";
import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import {useAuth} from "@/context/AuthContext";
import SplashScreen from "@/pages/components/splash-screen";
import {useRouter} from "next/router";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]});

const arabicFont = localFont({src: '../fonts/AGCRegular.ttf'});

const Me = () => {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const [showActionButtons, setShowActionButtons] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        dateOfBirth: null,
        country: "",
        email: "",
        phoneNumber: ""
    });


    const {token, loading, user} = useAuth();
    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.profile.first_name,
                lastName: user.profile.last_name,
                userName: user.profile.email,
                dateOfBirth: user.profile.created_at,
                country: user.profile.city,
                email: user.profile.email,
                phoneNumber: user.profile.phone_number
            });
        }
    }, [user]);
    if (loading && !token) {
        return <SplashScreen/>;
    }

    if (!token) {
        router.push('/signin');
        return null;
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setShowActionButtons(true);
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dateOfBirth: date
        });
        setShowActionButtons(true);
    };

    return (
        <div
            className={`${i18n.language === "en" ? englishFont.className : arabicFont.className} w-full h-full flex flex-col bg-mintyGreen`}>
            <HomeNavbar/>
            <div className={`w-full h-full bg-cover bg-no-repeat bg-center bg-[url('/images/home_bg.svg')]`}>
                <div className={`w-full h-full flex flex-col items-center justify-center`}>
                    <div className={`w-full px-20 flex flex-col justify-start items-center`}>
                        <div className={`w-[75%] h-48 mt-8 flex items-center justify-between`}>
                            <EditProfileIcon/>
                            <div className={`w-28 flex items-center justify-between`}>
                                {showActionButtons && (
                                    <>
                                        <Image style={{cursor: "pointer"}} onClick={() => setShowActionButtons(false)}
                                               src={falseIcon} alt="" width={50} height={50}/>
                                        <Image style={{cursor: "pointer"}} onClick={() => {
                                            setShowActionButtons(false);
                                            // TODO: save new data
                                        }} src={trueIcon} alt="" width={50} height={50}/>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={`w-[75%] text-3xl mt-8 mb-2`}>Personal Information</div>
                        <div className={`flex flex-col w-[75%] bg-lighterGray rounded-35 px-10 py-8`}>
                            <div className={`flex w-full mb-6`}>
                                <div className={`w-full flex me-2`}>
                                    <div className={`w-full relative h-fit me-2`}>
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="First Name"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[5%] top-[30%]`}/>
                                    </div>
                                    <div className={`w-full relative ms-2`}>
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[5%] top-[30%]`}/>
                                    </div>
                                </div>
                                <div className={`w-full`}>
                                    <div className={`w-full relative ms-2`}>
                                        <input
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="User Name"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[5%] top-[30%]`}/>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex w-full`}>
                                <div className={`w-full flex`}>
                                    <div className={`w-full relative h-fit me-2`}>
                                        <DatePicker
                                            selected={formData.dateOfBirth}
                                            onChange={handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            className="w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray"
                                            placeholderText="Date Of Birth"
                                        />
                                        <Image src={calenderIcon} width={18} height={18} alt=""
                                               className={`absolute right-[2%] top-[30%]`}/>
                                    </div>
                                </div>
                                <div className={`w-full`}>
                                    <div className={`w-full relative ms-2`}>
                                        <input
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="Country"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[5%] top-[30%]`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-[75%] text-3xl mt-16 mb-8`}>Contact Information</div>
                        <div className={`flex flex-col w-[75%] bg-lighterGray rounded-35 px-10 py-8`}>
                            <div className={`flex w-full`}>
                                <div className={`w-full flex`}>
                                    <div className={`w-full relative h-fit me-2`}>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[2%] top-[30%]`}/>
                                    </div>
                                </div>
                                <div className={`w-full`}>
                                    <div className={`w-full relative ms-2`}>
                                        <input
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className={`w-full py-4 px-3 rounded-2xl border-none placeholder:text-semiGray`}
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                        <Image src={editIcon} width={18} height={18} alt=""
                                               className={`absolute right-[5%] top-[30%]`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Me;
