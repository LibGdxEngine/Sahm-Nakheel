import Image from "next/image";
import footerPalms from "../../../../public/images/footer-palm-trees-d.svg"
const PreFooter = ()=>{
    return <div className={`w-full h-40 bg-white mt-48 mb-48`}>
        <div className=" ">

            <Image
                src={footerPalms}
                width={1000}
                height={291}
                alt=""
                className="w-full sm:h-60 k"
            />
        </div>
    </div>
};

export default PreFooter;