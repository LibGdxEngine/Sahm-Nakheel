import { useState } from "react";
import { RangeSlider, Slider } from "rsuite";

const InvestmentCalculator = () => {
  const ButtonRow = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const buttons = [
      { id: 1, text: "Type A" },
      { id: 2, text: "Type B" },
      { id: 3, text: "Type C" },
      { id: 4, text: "Type D" },
    ];

    const handleButtonClick = (id) => {
      setSelectedButton(id);
    };

    return (
      <div className="flex space-x-4 mt-4 sm:space-x-2">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={` p-1.5 px-2.5 sm:px-1.5 rounded-xl ${
              selectedButton === button.id
                ? "bg-midGreen text-primary"
                : "text-white bg-white bg-opacity-30"
            }`}
            onClick={() => handleButtonClick(button.id)}
          >
            <div className="text-sm sm:text-xs">{button.text}</div>
          </button>
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
          <button
            onClick={handleDecrement}
            className="px-2 text-3xl text-white rounded-full mr-2 bg-white bg-opacity-30"
          >
            -
          </button>
          <input
            type="text"
            value={sliderValue}
            onChange={handleInputChange}
            className="w-36 sm:w-32 h-10 text-3xl bg-white bg-opacity-30 text-white rounded-lg text-start ps-6"
          />
          <button
            onClick={handleIncrement}
            className="px-2 text-3xl text-white rounded-full ml-2 bg-white bg-opacity-30"
          >
            +
          </button>
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
              <div className="w-auto h-auto text-white font-thin text-xs flex items-center justify-center">
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
          <button
            onClick={handleDecrement}
            className="px-2 text-3xl text-white rounded-full mr-2 bg-white bg-opacity-30"
          >
            -
          </button>
          <input
            type="text"
            value={sliderValue}
            onChange={handleInputChange}
            className="w-60 sm:w-32 h-12 text-3xl bg-dark border border-lightGreen text-white rounded-lg text-start ps-6"
          />
          <button
            onClick={handleIncrement}
            className="px-2 text-3xl text-white rounded-full ml-2 bg-white bg-opacity-30"
          >
            +
          </button>
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
              <div className="w-auto h-auto text-white font-thin text-xs flex items-center justify-center">
                {labelValue}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const InvestorReturn = () => {
    return (
      <div className="h-48 border flex flex-col items-center justify-around border-lightGreen rounded-3xl bg-dark shadow-calc">
        <p className="text-white font-extralight text-2xl">Investor Returns</p>
        <div className="w-4/5 text-center  border border-lightGreen rounded-3xl bg-lightGreen px-6 py-3 text-white">
          2,800
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mt-36 flex flex-col items-center justify-center relative">
      <p className="text-6xl text-primary">
        Your investment <span className="text-midGreen">Calculator</span>
      </p>
      <div
        className="w-full h-full p-14 border rounded-3xl bg-navyBlue 
       grid grid-cols-2 gap-y-16 gap-x-15 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-y-16 mt-24 pb-32"
      >
        <div className="w-full h-24 flex flex-col">
          <p className="text-white text-2xl">Palm Type</p>
          <ButtonRow />
        </div>
        <div className="w-full h-auto  flex flex-col ">
          <p className="text-white text-2xl">Number of Palms</p>
          <Slider />
        </div>
        <div className="w-full h-auto flex flex-col">
          <p className="text-white text-2xl">Year Number</p>
          <YearSlider />
        </div>
        <div className="w-full h-auto flex flex-col">
          <InvestorReturn />
        </div>
      </div>

      <div className="absolute bottom-[-3%] " style={{ cursor: "pointer" }}>
        <p className="text-white text-2xl calc-btn  rounded-full bg-dark px-6 py-4 hover:text-primary hover:bg-white hover:border hover:border-dark">
          Calculate
        </p>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
