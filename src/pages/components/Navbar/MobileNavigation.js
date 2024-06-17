import Link from "next/link";

import MobileAuthSection from "@/pages/components/Navbar/MobileAuthSection";


const CustomMobileLink = ({href, title, className = "", toggle}) => {
    const handleClick = () => {
        toggle();
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Link
                style={{textDecoration: "none"}}
                onClick={handleClick}
                href={href}
                className={`text-lg relative group text-white dark:text-dark bg-transparent my-2.5 ${className}`}
            >
                {title}
            </Link>
            <span
                className={`h-[1px] w-full small-header-items-separator`}
            >
        &nbsp;
      </span>
        </div>
    );
};
const MobileNavItem = ({href, title, onClick}) => (
    <CustomMobileLink href={href} title={title} toggle={onClick}/>
);

const MobileNavigation = ({handleClick}) => {
    const navItems = [
        {href: "/transactions", title: "Transactions"},
        {href: "/contracts", title: "contracts", target: "contracts"},
        {href: "/plans", title: "Plans", target: "Plans"},

    ];

    return (
        <div
            className="min-w-[100%] min-h-[110%] xs:mt-[35vh] sm:mt-[30vh] mt-[35vh] pt-24 flex flex-col items-center z-[-1]
            justify-between fixed top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md py-0
             bg-dark/95 dark:bg-light/75 rounded-lg xl:flex"
        >
            <nav className="w-full h-[80vh] flex items-center flex-col justify-between mt-[35%]">
                {navItems.map((item, index) => (
                    <MobileNavItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        onClick={()=>{
                            handleClick();
                        }}
                    >
                    </MobileNavItem>
                ))}
                <MobileAuthSection/>
            </nav>
        </div>
    )
};

export default MobileNavigation;
