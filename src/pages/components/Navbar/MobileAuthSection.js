import Image from "next/image";
import {useRouter} from "next/router";
import langIconWhite from "../../../../public/images/langIconWhite.svg";
import userIcon from "../../../../public/images/userIcon.svg";

// LoginButton component
function LoginButton() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/signin");
    };

    return (
        <div className="flex items-center justify-center mt-8">
            <Image src={userIcon} width={42.5} height={42.5} alt="user" className="mx-2"/>
            <button
                onClick={handleLogin}
                style={{cursor: "pointer"}}
                className="border border-white border-1 text-lg rounded-3xl bg-dark
                 px-12 py-0.5 mx-2 text-white font-thin hover:text-dark hover:bg-white"
            >
                Log In
            </button>
        </div>
    );
}

// LanguageSelector component
function LanguageSelector() {
    return (
        <div className="flex items-center justify-items-center mt-8">
            <div className="flex items-center rounded-full dark:border-white bg-transparent p-2"
                 style={{cursor: "pointer"}}>
                <Image src={langIconWhite} height={9} width={9} alt="lang"/>
                <div className="text-xs mx-1 text-white dark:text-white">EN</div>
            </div>
            <p className="text-xs text-white">Change Language</p>
        </div>
    );
}

export default function MobileAuthSection() {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <LoginButton/>
            <p style={{cursor: "pointer"}} className="text-sm text-white font-extralight mt-3">
                New here? <span className="text-lightGreen">Create an account</span>
            </p>
            <LanguageSelector/>
        </div>
    );
}
