import {useRouter} from "next/router";
import SplashScreen from "@/pages/components/splash-screen";

import {useEffect} from "react";
import {activateAccount} from "@/components/services/auth";

const Activate = () => {
    const router = useRouter()
    const {query} = router;
    const activationCode = query.code;

    useEffect(() => {
        const handleActivation = async (code) => {
            activateAccount(code)
                .then((response) => {
                    router.replace("/activate-success");
                }).catch((error) => {
                console.log(error)
            });
        }
        handleActivation(activationCode);
    }, [activationCode]);

    return <div>
        <SplashScreen/>
    </div>
};

export default Activate;