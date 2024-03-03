import {useState} from "react";
import Layout from "@/pages/utils/Layout";
import Table from "../utils/Table";
import {useTranslation} from "next-i18next";
import {tokens} from "@/locales/tokens";


const InvestmentCalculator = () => {
    const {t, i18n} = useTranslation();
    const ButtonRow = () => {
        const [selectedButton, setSelectedButton] = useState(1);

        const buttons = [
            {id: 1, text: "Type A"},
            {id: 2, text: "Type B"},
            {id: 3, text: "Type C"},
            {id: 4, text: "Type D"},
        ];

        const handleButtonClick = (id) => {
            setSelectedButton(id);
        };

        return (
            <div className="flex space-x-4 mt-4 sm:space-x-2">
                {buttons.map((button) => (
                    <div
                        key={button.id}
                        style={{cursor: "pointer"}}
                        className={` p-1.5 px-2.5 sm:px-1.5 rounded-xl ${selectedButton === button.id
                            ? "bg-midGreen text-primary"
                            : "text-white bg-white bg-opacity-30"
                        }`}
                        onClick={() => handleButtonClick(button.id)}
                    >
                        <div className="text-sm sm:text-xs">{button.text}</div>
                    </div>
                ))}
            </div>
        );
    };

    const Slider = () => {
        const [sliderValue, setSliderValue] = useState(5);

        const handleInputChange = (e) => {
            const newValue = e.target.value;
            if (newValue >= 1 && newValue <= 20) {
                setSliderValue(parseInt(newValue));
            }
        };

        const handleIncrement = () => {
            if (sliderValue < 20) {
                setSliderValue(parseInt(sliderValue) + 1);
            }
        };

        const handleDecrement = () => {
            if (sliderValue > 1) {
                setSliderValue(parseInt(sliderValue) - 1);
            }
        };

        return (
            <div className="w-4/5 mx-0 mt-4">
                <div className="flex items-center">
                    <div
                        style={{cursor: "pointer"}}
                        onClick={handleDecrement}
                        className="px-2 text-3xl text-white rounded-full mr-2 bg-white bg-opacity-30"
                    >
                        -
                    </div>
                    <input
                        style={{border: "none"}}
                        type="text"
                        value={sliderValue}
                        onChange={handleInputChange}

                        className="w-48 sm:w-32 h-10 text-3xl bg-white bg-opacity-30 text-white rounded-lg text-start ps-6"
                    />
                    <div
                        style={{cursor: "pointer"}}
                        onClick={handleIncrement}
                        className="px-2 text-3xl text-white rounded-full ml-2 bg-white bg-opacity-30"
                    >
                        +
                    </div>
                </div>
                <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    className="w-full h-0.5 bg-primary"
                />
                <div className="flex justify-between">
                    {[1, 5, 10, 15, 20].map((labelValue) => (
                        <div key={labelValue} className="relative flex items-center">
                            <div
                                className="w-auto h-auto text-white font-thin text-xs flex items-center justify-center">
                                {labelValue}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const YearSlider = () => {
        const [sliderValue, setSliderValue] = useState(5);

        const handleInputChange = (e) => {
            const newValue = e.target.value;
            if (newValue >= 4 && newValue <= 10) {
                setSliderValue(parseInt(newValue));
            }
        };

        const handleIncrement = () => {
            if (sliderValue < 10) {
                setSliderValue(parseInt(sliderValue) + 1);
            }
        };

        const handleDecrement = () => {
            if (sliderValue > 4) {
                setSliderValue(parseInt(sliderValue) - 1);
            }
        };

        return (
            <div className="w-4/5 mx-0 mt-4">
                <div className="flex items-center">
                    <div
                        style={{cursor: "pointer"}}
                        onClick={handleDecrement}
                        className="px-2 text-3xl text-white rounded-full mr-2 bg-white bg-opacity-30"
                    >
                        -
                    </div>
                    <input
                        style={{border: "none"}}
                        type="text"
                        value={sliderValue}
                        onChange={handleInputChange}
                        className="w-60 sm:w-32 h-12 text-3xl bg-dark border border-lightGreen text-white rounded-lg text-start ps-6"
                    />
                    <div
                        style={{cursor: "pointer"}}
                        onClick={handleIncrement}
                        className="px-2 text-3xl text-white rounded-full ml-2 bg-white bg-opacity-30"
                    >
                        +
                    </div>
                </div>
                <input
                    type="range"
                    min="4"
                    max="10"
                    step="1"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    className="w-full h-0.5 bg-primary"
                />
                <div className="flex justify-between">
                    {[4, 5, 6, 7, 8, 9, 10].map((labelValue) => (
                        <div key={labelValue} className="relative flex items-center">
                            <div
                                className="w-auto h-auto text-white font-thin text-xs flex items-center justify-center">
                                {labelValue}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const InvestorReturn = ({text=""}) => {
        return (
            <div
                className="h-48 border flex flex-col items-center justify-around border-lightGreen rounded-3xl bg-dark shadow-calc">
                <div className="text-white font-normal text-3xl pt-2">{text}</div>
                <div
                    className="w-4/5 text-center text-6xl font-bold border border-lightGreen rounded-3xl bg-lightGreen px-6 py-3 text-white">
                    2,800
                </div>
            </div>
        );
    };

    const ResultTable = () => {
        return <>
            <Table/>
        </>
    }

    return (
        <Layout className="w-full mt-36 flex flex-col items-center justify-center relative px-28 sm:px-10 xs:px-4">
            <div className="absolute bottom-[24%] xs:bottom-[21%] sm:bottom-[24%] lg:bottom-[22%] " style={{cursor: "pointer"}}>
                <p className="text-white text-2xl calc-btn  rounded-full bg-dark px-6 py-4
                 hover:text-primary hover:bg-white hover:border hover:border-dark">
                    {t(tokens.calculator.calculate)}
                </p>
            </div>
            <p className="text-6xl text-primary sm:text-4xl sm:text-center">
                {t(tokens.calculator.your_investment)} <span className=" text-midGreen sm:text-center"> {t(tokens.calculator.calculator)} </span>
            </p>
            <div
                className="w-full h-full p-14 border rounded-3xl bg-navyBlue
                            grid grid-cols-2 gap-y-16 gap-x-15 mt-24 pb-32
                            lg:grid-cols-1
                            sm:p-4
                             ">
                <div className="w-full h-24 flex flex-col lg:mx-10">
                    <p className="w-full text-white text-2xl ">{t(tokens.calculator.plam_type)}</p>
                    <ButtonRow/>
                </div>
                <div className="w-full h-auto  flex flex-col lg:mx-10">
                    <p className="text-white text-2xl">{t(tokens.calculator.num_of_palms)}</p>
                    <Slider/>
                </div>
                <div className="w-full h-auto flex flex-col lg:mx-10">
                    <p className="text-white text-2xl">{t(tokens.calculator.year_num)}</p>
                    <YearSlider/>
                </div>
                <div className="w-4/5 h-auto flex flex-col lg:mx-10">
                    <InvestorReturn text={`${t(tokens.calculator.investor_returns)}`}/>
                </div>
            </div>
            <ResultTable />
        </Layout>
    );
};

export default InvestmentCalculator;
