import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import SplashScreen from '../pages/components/splash-screen';
import 'react-datepicker/dist/react-datepicker.css';
// Remove if locales are not used
import '@/locales/i18n';
import ScrollToTopButton from "@/pages/components/utils/ScrollToTopButton";
// Remove if nprogress is not used
import 'nprogress';
import NProgress from "nprogress"; //nprogress module
import {ToastContainer, toast} from 'react-toastify';
import {Router} from "next/router";
import {useEffect, useState} from "react";

import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from "@/context/AuthContext";
import '@/styles/globals.css'
import {fetchApi} from "@/components/services/auth";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = (props) => {
    const {Component, pageProps} = props;
    const [data, setData] = useState(null);
    const [plans, setPlans] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchApi(`https://mobile.letaskono-zwaj.com/api/v1/landing_page/landing-page/`);
                const plans = await fetchApi(`https://mobile.letaskono-zwaj.com/api/v1/landing_page/investment-plans/`);
                setData(data);
                setPlans(plans);
                console.log(data, plans)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    pageProps.data = data;
    pageProps.plans = plans;
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <div>
            <ToastContainer/>
            <Head>
                {/*<NavBar/>*/}

            </Head>

            <CssBaseline/>

            {isLoading
                ? <SplashScreen/>
                : (
                    <AuthProvider>
                        {getLayout(
                            <Component {...pageProps} />
                        )}
                    </AuthProvider>
                )}

            <ScrollToTopButton/>
        </div>
    );
};

export default App;

