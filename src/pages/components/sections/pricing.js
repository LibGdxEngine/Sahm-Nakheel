import Slider from "@/pages/components/pricing-slider/Slider";
import HoveredText from "@/pages/components/utils/HoveredText";
import Layout from "@/pages/utils/Layout";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";
import {useRouter} from "next/router";


const Pricing = ({
                     arabic_plans_slogan,
                     english_plans_slogan,
                     investment_plans
                 }) => {
    const {t, i18n} = useTranslation();
    const slogan = i18n.language === "en" ? english_plans_slogan : arabic_plans_slogan;
    const router= useRouter();
    return (
        <div className={`mt-60 `}>
            <div
                id="pricing"
                className="w-full bg-mintyGreen rounded-3xl mt-20 px-18 sm:pt-1 "
            >
                <div className="w-full flex flex-col items-center justify-center text-center mt-0 relative">
                    <HoveredText text={`${t(tokens.plans.title)}`}/>
                    <h1 className="text-xl text-primary font-light text-center sm:text-base sm:mt-0">
                        {slogan}
                    </h1>
                </div>

                <div className="mt-8">
                    <Slider investment_plans={investment_plans} onCardClicked={(planId) => {
                        router.push(`/plans/${planId}`)
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
