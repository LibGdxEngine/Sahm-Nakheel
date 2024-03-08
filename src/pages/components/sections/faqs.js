import ExpandableDiv from "../utils/ExpandableDiv";
import Layout from "@/pages/utils/Layout";
import HoveredText from "@/pages/components/utils/HoveredText";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";




const FAQs = ({questions}) => {
    const {t, i18n} = useTranslation();

    return (
        <div className={`w-full mt-40 sm:mt-2 `}>
            <div
                id="faq"
                className="w-full flex flex-col items-center justify-center mt-16 relative"
            >
                <HoveredText text={`${t(tokens.nav.faq)}`} className={`!text-sm `}/>
                <Layout
                    className="w-full mt-10 grid grid-cols-2 gap-y-8 gap-x-2 lg:gap-2 md:grid-cols-1 md:gap-y-16 sm:gap-y-4">
                    {questions.map((faq, index) => {
                        const question = i18n.language === "en" ? faq.english_question : faq.arabic_question;
                        const answer = i18n.language === "en" ? faq.english_answer : faq.arabic_answer;
                        return(
                            <ExpandableDiv
                                key={index}
                                title={question}
                                content={
                                    <div className="flex mt-4">
                                        <div className="border-l-2 border-mildGray h-auto me-4"></div>
                                        <p className="text-primary ">
                                            {answer}
                                        </p>
                                    </div>
                                }
                            />
                        )
                    })}
                </Layout>
            </div>
        </div>
    );
};

export default FAQs;
