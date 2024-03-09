import Image from "next/image";
import polygon1 from "../../../../public/images/Polygon 1.svg";
import playIcon from "../../../../public/images/PlayIcon.svg";
import profilePic from "../../../../public/images/image_page_1.svg";
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {tokens} from "@/locales/tokens";

export default function Home({
                                 arabic_title,
                                 english_title,
                                 arabic_slogan,
                                 english_slogan,
                                 video_link,
                                 arabic_action_button_text,
                                 english_action_button_text,
                                 action_button_link
                             }) {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const title = i18n.language === "en" ? english_title : arabic_title;
    const slogan = i18n.language === "en" ? english_slogan : arabic_slogan;
    const action_btn_text = i18n.language === "en" ? english_action_button_text : arabic_action_button_text;
    return (
        <Layout className="flex items-center justify-center w-full lg:flex-col xs:flex-col-reverse">
            <div className="absolute w-[90%] h-fit left-[18%] top-[-10%] translate-x-[-30%] sm:top-0 z-0 sm:hidden ">
                <Image width={500} height={500} src={polygon1} alt="" className="w-full h-auto"/>
            </div>
            <div
                className="w-full  flex flex-col mt-8 items-center self-center
                 lg:w-full sm:px-0 z-10 xl:z-[1]">
                <h3
                    className="w-full !text-primary font-light
                md:!text-xl sm:!text-xs sm:mb-3 lg:!text-center"
                    style={{
                        direction: i18n.language === "en" ? "ltr" : "rtl",
                        textAlign: i18n.language === "en" ? "start" : "end"
                    }}

                >
                    {title}
                </h3>

                <div

                    className="w-full mt-8 sm:mt-0 !text-4xl  !text-primary font-light
             lg: lg:me-2 lg:!text-3xl md:!text-3xl sm:!text-3xl xs:!text-2xl lg:!text-center"
                    style={{
                        direction: i18n.language === "en" ? "ltr" : "rtl",
                        textAlign: i18n.language === "en" ? "start" : "end"
                    }}
                >
                    {t(tokens.nav.affordable)}
                </div>

                <div className="w-full flex items-center justify-center">
                    <div

                        className="w-full mt-3 sm:mt-0 !text-4xl lg:!text-center !text-primary font-extrabold sm:!text-3xl
                        sm:px-2
                "
                        style={{
                            direction: i18n.language === "en" ? "ltr" : "rtl",
                            textAlign: i18n.language === "en" ? "start" : "end"
                        }}

                    >
                        {t(tokens.nav.starting)} {" "}
                        <span

                            className="w-full !text-4xl  !text-darkGreen font-extrabold
                 lg: lg:!text-3xl md:!text-3xl sm:!text-3xl xs:!text-2xl lg:!text-center
                "
                        >
                8000 EGP
              </span>
                    </div>
                </div>
                <h3

                    className="w-full !text-primary font-light
                 md:!text-xl sm:!text-xs sm:mb-3 lg:!text-center"
                    style={{
                        direction: i18n.language === "en" ? "ltr" : "rtl",
                        textAlign: i18n.language === "en" ? "start" : "end"
                    }}
                >
                    {slogan}
                </h3>
                <div className="w-full flex items-center self-center mt-2 sm:mt-6 lg:!w-fit">
                    <div
                        className={`flex items-center bg-darkGreen text-white p-2.5 px-12
                  rounded-full text-lg font-normal hover:bg-white hover:text-darkGreen hover:border hover:border-darkGreen
                  border-2 border-solid border-transparent 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base xs:text-xs
                  `}
                        style={{cursor: "pointer"}}
                        onClick={() => {
                            router.push(`#${action_button_link}`)
                        }}
                    >
                        {action_btn_text}
                    </div>
                    <div
                        className={`flex items-center bg-transparent text-dark p-2.5 pe-12 ps-5 mx-4
                  rounded-3xl text-lg font-normal hover:bg-darkGreen hover:text-white 
                  border border-solid border-darkGreen
                  dark:bg-dark dark:border-white dark:text-white  
                  md:p-2 md:px-4 md:text-base xs:text-xs
                  `}
                        style={{cursor: "pointer"}}
                    >
                        <div className="w-full flex xs:text-xs items-center justify-center" onClick={() => {
                            //go to video
                            router.push(video_link)
                        }}>
                            <Image
                                src={playIcon}
                                width={18}
                                height={21.5}
                                alt="play"
                                className="me-4 mt-1 sm:!mt-0"
                            />
                            {t(tokens.nav.watch_video)}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>

            <div className="w-full md:w-full flex items-center justify-center">
                <Image
                    priority={true}
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                    src={profilePic}
                    alt="Sahm Nakheel"
                    className="w-[80%] h-auto md:inline-block md:w-full xs:w-2/3"
                />
            </div>
        </Layout>

    );
}