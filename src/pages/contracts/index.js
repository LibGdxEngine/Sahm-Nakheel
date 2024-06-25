import {useTranslation} from "next-i18next";
import {Poppins} from "next/font/google";
import localFont from "next/font/local";
import HomeNavbar from "@/pages/components/Navbar/HomeNavbar";
import searchIcon from '../../../public/images/search_icon.svg';
import filterIcon from '../../../public/images/filter_icon.svg';
import Image from "next/image";
import React, {useEffect, useState} from "react";
import FilterMenu from "@/pages/components/utils/FilterMenu";
import SplashScreen from "@/pages/components/splash-screen";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";
import Layout from "@/pages/utils/Layout";
import Footer from "@/pages/components/Footer";
import TransactionList from "@/pages/components/utils/TransactionList";
import Pagination from "@/pages/components/utils/Pagination";
import {getContracts} from "@/components/services/contracts";
import ContractList from "@/pages/components/utils/ContractsList";

const englishFont = Poppins({subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"]});
const arabicFont = localFont({src: '../fonts/AGCRegular.ttf'});


const Profile = () => {
    const router = useRouter();
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const handleOpenFilterMenu = () => {
        setFilterMenuOpen(!filterMenuOpen);
    }
    const {t, i18n} = useTranslation();
    const {token, loading, logout} = useAuth();


    useEffect(() => {
        if (token) {
            getContracts(token).then((data) => {
                setTransactions(data);
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [token]);

    if (loading && !token) {
        return <SplashScreen/>
    }

    if (!token) {
        router.push('/signin');
        return null;
    }

    return (
        <div
            className={`${i18n.language === "en" ? englishFont.className : arabicFont.className} w-full min-h-screen h-screen flex flex-col bg-mintyGreen`}>
            <HomeNavbar/>
            <Layout requiresAuth={true}
                    className="w-full min-h-[85%] bg-cover bg-repeat-y bg-center bg-[url('/images/home_bg.svg')]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div id="transactions-table"
                         className="w-8/12 h-4/5 sm:w-full lg:w-3/5 sm:h-full flex flex-col items-center justify-start transactions-table rounded-35 sm:rounded-none bg-white">
                        <div id="top-bar"
                             className="sm:hidden w-full flex items-center justify-between my-5 px-10 lg:px-10">
                            <div id="search-bar" className="w-full flex items-center justify-start">
                                <Image src={searchIcon} alt="Search" width={20} height={20} className="mx-3"/>
                                <input type="text" placeholder="Search by ID, Transaction name ..."
                                       className="w-3/4 h-10 border-none rounded-full outline-none focus:border-none placeholder:text-gray-400"/>
                            </div>
                            <div style={{cursor: "pointer"}} onClick={handleOpenFilterMenu}
                                 className="w-fit flex rounded-full bg-dark items-center justify-between px-4 lg:px-6 py-1.5">
                                <Image src={filterIcon} alt="Filter" width={15} height={15}/>
                                <div className="w-full mx-4 font-thin h-fit text-white rounded-35">Filter</div>
                            </div>
                            {filterMenuOpen && <FilterMenu onFilterChange={(option)=>{
                                console.log("Filter changed "  + option[0])
                            }} />}
                        </div>

                        <div id="big-table-header" className="w-full sm:block">
                            <div className="h-10 bg-lightGray  mx-8 lg:m-10  px-4 lg:px-10 rounded-t-2xl grid grid-cols-9
                            sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs text-primary text-center">
                                <div className="bg-gray-200 p-3">ID</div>
                                <div className="bg-gray-200 p-3">DATE</div>
                                <div className="bg-gray-200 p-3">METHOD</div>
                                <div className="bg-gray-200 p-3">AMOUNT</div>
                                <div className="bg-gray-200 p-3">ALL</div>
                                <div className="bg-gray-200 p-3">DONE</div>
                                <div className="bg-gray-200 p-3">LEFT</div>
                                <div className="bg-gray-200 p-3">STATUS</div>
                                <div className="bg-gray-200 p-3">VIEW</div>
                            </div>
                            {/*<TransactionList transactions={transactions}/>*/}
                            {/*{JSON.stringify(transactions)}*/}
                            <ContractList  contracts={[{id:1, date: 'date',amount: 1500, method: 'CREDIT',all : 1, done: 2, left: 3, status: 'REJECTED' }]}/>
                        </div>

                        <div id="small-table-list"
                             className="sm:hidden flex w-full h-full flex-col items-center justify-center">
                            {/*<div id="no-transaction-placeholder" className="w-full h-full flex flex-col justify-center items-center mt-10">*/}
                            {/*    <Image src={transactionsIcon} alt="No transactions" width={100} height={100}/>*/}
                            {/*    <div className="font-thin text-lg text-dark">No transactions yet</div>*/}
                            {/*</div>*/}
                        </div>
                        <Pagination
                            page={1}
                            totalPages={Math.ceil(1 / 10)}
                            onPageChange={() => {
                                console.log("Page changed")
                            }}
                        />
                    </div>
                </div>
            </Layout>
            <Footer/>
        </div>
    );
};

export default Profile;
