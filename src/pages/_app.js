import '@/styles/globals.css'
import Head from 'next/head';

import CssBaseline from '@mui/material/CssBaseline';
import SplashScreen from '../pages/components/splash-screen';

// Remove if nprogress is not used
import 'nprogress';

// Remove if locales are not used
import '@/locales/i18n';
import Footer from "@/pages/components/Footer";
import ScrollToTopButton from "@/pages/components/utils/ScrollToTopButton";
import useFetch from "@/pages/components/hooks/useFetch";


const App = (props) => {
    const {Component, pageProps} = props;
    const {data, loading, error} = useFetch('https://mobile.letaskono-zwaj.com/api/v1/landing_page/landing-page/');
    pageProps.data = data;
    const getLayout = Component.getLayout ?? ((page) => page);


    return (
        <div>
            <Head>
                {/*<NavBar/>*/}

            </Head>

            <CssBaseline/>

            {loading
                ? <SplashScreen/>
                : (
                    <>
                        {getLayout(
                            <Component {...pageProps} />
                        )}
                    </>
                )}
            <Footer/>
            <ScrollToTopButton/>
        </div>
    );
};

export default App;

