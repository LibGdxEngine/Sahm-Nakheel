import { ToastContainer } from "react-toastify";
import AuthNavbar from "./AuthNavbar";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";


const AuthLayout = ({ children, className = "" }) => {
    return <div className="bg-cover bg-no-repeat bg-center bg-[url('/images/svgs/signinbg.svg')]">

        <AuthNavbar />
        <ToastContainer />
        <div
            className={`w-full h-full inline-block z-0 bg-light px-40 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
        >
            {children}
        </div>

        <ScrollToTopButton />
        <Footer />
    </div>
}

export default AuthLayout;