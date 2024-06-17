import {useState} from "react";
import Image from "next/image";
import profileIcon from '../../../../public/images/profileIcon.svg';
const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div  className="relative flex items-center justify-center">
            <Image style={{cursor: "pointer"}} onClick={toggleMenu} src={profileIcon} alt={``} className={`mx-2`} width={45} height={45}/>

            {isOpen && (
                <div className="w-56 absolute top-12 mt-2  bg-white rounded-md shadow-lg">
                    <div className="w-full flex flex-col items-start justify-start px-8 py-6">
                        <Image src={profileIcon} alt={``} width={75} height={75} />
                        <div className={`text-xs font-bold mt-2`}>
                            Ahmed Fathy
                        </div>
                        <div className={`text-xs font-thin`}>
                            John Doe@yahoo.com
                        </div>
                        <div className={`h-[0.5px] w-full bg-darkGreen mt-2`}/>
                        <div style={{cursor: "pointer"}} className={`text-xs font-normal mt-4`}>
                            Profile Settings
                        </div>
                        <div style={{cursor: "pointer"}} className={`text-xs font-normal mt-4`}>
                            Change Password
                        </div>
                        <div className={`h-[0.5px] w-full bg-darkGreen mt-2`}/>
                        <div style={{cursor: "pointer"}} className={`text-xs font-normal mt-4`}>
                            Sign Out
                        </div>
                        <div className={`h-[0.5px] w-full bg-darkGreen mt-2`}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
