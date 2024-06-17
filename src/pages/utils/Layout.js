import SplashScreen from "@/pages/components/splash-screen";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "next/router";

const Layout = ({children, requiresAuth = false, className = ""}) => {
    const router = useRouter();
    const { token, loading } = useAuth();

    if (requiresAuth) {
        if (loading) {
            return <SplashScreen />;
        }

        if (!token) {
            router.push('/signin');
            return null;
        }
    }
    return <div className={`px-[10%] sm:px-0  sm:mx-4 ${className}`}>
        {children}
    </div>
};

export default Layout;