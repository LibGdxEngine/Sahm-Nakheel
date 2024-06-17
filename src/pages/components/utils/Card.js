// components/Card.js

import React from "react";
import Image from "next/image";
import logo from '../../../../public/images/googleLogin.svg';
const Card = ({ children , className=""}) => {
    return (
        <div className={`card h-full max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ${className}`}>
            <div className="flex flex-col items-center justify-start">
                <div className="px-8 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;
