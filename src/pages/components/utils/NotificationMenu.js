import {useState} from "react";
import Image from "next/image";
import notification from '../../../../public/images/notification.svg';
import closeIcon from '../../../../public/images/closeIcon.svg';
import notificationsIcon from "../../../../public/images/Group 8.svg";
const NotificationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div  className="relative flex items-center justify-center">
            <Image style={{cursor: "pointer"}} onClick={toggleMenu} src={notificationsIcon} alt={``} className={`mx-2`} width={45} height={45}/>


            {isOpen && (
                <div className="w-80 absolute top-12 mt-2  bg-white rounded-md shadow-lg">
                    <div className="w-full flex flex-col items-start justify-start px-8 py-6">

                        <div className={`text-xs font-bold mt-2`}>
                            Notifications
                        </div>
                        <div className={`h-[0.5px] w-full bg-darkGreen mt-2`}/>
                        <div className={`w-full py-1 flex items-center justify-between text-xs text-lightBlack`}>
                            <div style={{cursor: "pointer"}}>
                                Mark all as read
                            </div>
                            <div style={{cursor: "pointer"}}>
                                Clear all
                            </div>
                        </div>
                        <div className={`w-full h-20 flex items-center justify-between bg-mintyGreen rounded-2xl px-3 pt-2`}>
                            <div className={`h-16 flex flex-col items-start justify-start`}>
                                <Image src={notification} alt={``} width={30} height={30}/>
                            </div>
                            <div style={{cursor: "pointer"}} className={`w-full h-16 ms-2 flex flex-col items-start justify-start`}>
                                <div className={`w-full flex flex-col items-start justify-center`}>
                                    <div className={`text-sm text-start text-navyBlue font-semibold line-clamp-1`}>
                                        Welcome Ahmed
                                    </div>
                                    <div style={{fontSize: "12px"}} className={`text-primary line-clamp-1 font-thin`}>
                                        Lorem Ipsum is simply dummy text to ...
                                    </div>
                                    <div style={{fontSize: "7px"}} className={` text-primary line-clamp-1 font-thin mt-2`}>
                                        20 March at 12:04
                                    </div>
                                </div>

                            </div>
                            <div style={{cursor: "pointer"}} className={`h-16  flex flex-col items-start justify-start`}>
                                <Image src={closeIcon} alt={``} width={12} height={12}/>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationMenu;
