import Image from "next/image";
import bestROI from "../../../../public/images/Best ROI Lable.svg";
import DownloadAppTextHidden from "../../../../public/images/DownloadAppTextHidden.svg";
import DownloadAppTextSm from "../../../../public/images/Download Our Mobile App Now sm.svg";
import longTerm from "../../../../public/images/Long Term Lable.svg";
import mobileImage from "../../../../public/images/Mobile.svg";
import secure from "../../../../public/images/Secure Lable.svg";
import downloadAppText from "../../../../public/images/downloadAppText.svg";
import FeatureRow from "../pricing-slider/FeatureRow";
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";


const labels = [
    {src: bestROI, width: 226, height: 104, style: "absolute right-[14%] top-[64%] sm:hidden lg:"},
    {src: longTerm, width: 250, height: 95, style: "absolute left-[6%] top-[41.5%] sm:hidden lg:"},
    {src: secure, width: 191, height: 101, style: "absolute right-[35%] top-[-5%] sm:hidden lg:"}
];


const DownloadApp = () => {
    const {t, i18n} = useTranslation();
    const features = [
        t(tokens.download_app.row1),
        t(tokens.download_app.row2),
        t(tokens.download_app.row3),
    ];

    return (
        <Layout className={`mt-60 sm:mt-20`}>
            <div className="flex items-center justify-between w-full lg:flex-col sm:px-10">
                <div className="w-1/2 md:w-full relative">
                    <Image
                        priority={true}
                        src={mobileImage}
                        width={789}
                        height={728}
                        alt="Sahm Nakheel"
                        className="w-full h-auto lg: md:inline-block md:w-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {labels.map((label, index) => (
                        <Image key={index} src={label.src} width={label.width} height={label.height} alt=""
                               className={label.style}/>
                    ))}
                </div>

                <div className="w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center relative md:mt-2">
                    <Image src={downloadAppText} width={496} height={205} alt="" className="sm:hidden"/>
                    <Image src={DownloadAppTextSm} width={304} height={86} alt="" hidden className="sm:block"/>
                    <Image
                        src={DownloadAppTextHidden}
                        width={708}
                        height={268}
                        alt=""
                        className="absolute right-[4%] top-[-8%] sm:hidden"
                    />
                    <div style={{direction: i18n.language === "en" ? "ltr" : "rtl"}}
                         className="w-[95%] flex flex-col items-center self-start mt-10 lg:self-center ">
                        {features.map((feature, index) => (
                            <FeatureRow key={index} text={feature} classes="!text-lg !text-primary font-thin !text-left"
                                        imageWidth={47} imageHeight={33}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DownloadApp;
