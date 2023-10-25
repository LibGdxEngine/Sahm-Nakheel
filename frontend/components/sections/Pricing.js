import Image from "next/image";

import { useCallback, useEffect, useState } from "react";
import investmentPlan from "../../public/images/svgs/Investment Plans.svg";
import FeatureRow from "../FeatureRow";
import { initateCheckout, startCheckOut } from "../../actions/user";
import OfferCardItem from "../Slider/OfferCardItem";
import SpecialOfferCard from "../Slider/SpecialOfferCard";
import Slider from "../Slider/Slider";
import { getCookie } from "../../actions/auth";
const crypto = require("crypto");

const startNewCheckOut = () => {
  const token = getCookie("token");
  const inputString = "770000015886"
    + 569863
    + "b3ab571f-a2c8-4e91-8464-276134adf160";
  // Create a SHA-256 hash
  const sha256Hash = crypto.createHash("sha256");

  // Update the hash with your input
  sha256Hash.update(inputString);

  // Get the hexadecimal representation of the hash
  const hashedString = sha256Hash.digest("hex");

  console.log("SHA-256 Hash:", hashedString);
  startCheckOut(token, "770000015886", 569863, hashedString).then((data) => {
    console.log(data);
  });
};

const cards = [
  {
    years: [10],
    title: "Medjool Trees",
    investment: "10 - Years ROI would be",
    cost: "EGP 250,000",
    rows: [
      "EGP 25000 Annual ROI",
      "Installment over 10 Months",
      "EGP 8000 installment per Month",
      "30% Average ROI",
      "EGP 70000 for Cash Payment",
    ],
    income: "EGP 80,000",
  },
  {
    years: [5],
    title: "Medjool Trees",
    investment: "10 - Years ROI would be",
    cost: "EGP 125,000",
    rows: [
      "EGP 12500 Annual ROI",
      "Installment over 10 Months",
      "EGP 4000 installment per Month",
      "30% Average ROI",
      "EGP 35000 for Cash Payment",
    ],
    income: "EGP 40,000",
  },
  {
    years: [1],
    title: "Medjool Trees",
    investment: "10 - Years ROI would be",
    cost: "EGP 125,000",
    rows: [
      "EGP 12500 Annual ROI",
      "Installment over 10 Months",
      "EGP 4000 installment per Month",
      "30% Average ROI",
      "EGP 7000 for Cash Payment",
    ],
    income: "EGP 8,000",
    isSpecial: true,
  },
  {
    years: [1],
    title: "Medjool Trees",
    investment: "10 - Years ROI would be",
    cost: "EGP 25,000",
    rows: [
      "EGP 2500 Annual ROI",
      "Installment over 10 Months",
      "EGP 4000 installment per Month",
      "30% Average ROI",
      "EGP 7000 for Cash Payment",
    ],
    income: "EGP 8,000",
  },
];

function generateRandomNumberString(length) {
  const numbers = "0123456789";
  let randomNumberString = "";

  const randomBytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes[i] % numbers.length;
    randomNumberString += numbers.charAt(randomIndex);
  }

  return randomNumberString;
}

function buildChargeRequest(cost) {
  let newCostStr = cost.split(" ")[1].split(",")[0] + "000.00";
  console.log(newCostStr);
  const refNum = generateRandomNumberString(6);
  console.log(refNum);
  const inputString =
    "770000015886" +
    refNum +
    "123456" +
    "localhost:3000" +
    "6b5fdea340e31b3b0339d4d4ae5" +
    "1" +
    newCostStr +
    "b3ab571f-a2c8-4e91-8464-276134adf160";
  // Create a SHA-256 hash
  const sha256Hash = crypto.createHash("sha256");

  // Update the hash with your input
  sha256Hash.update(inputString);

  // Get the hexadecimal representation of the hash
  const hashedString = sha256Hash.digest("hex");

  console.log("SHA-256 Hash:", hashedString);

  const currentDate = new Date();

  // Calculate the timestamp for tomorrow
  const tomorrowTimestamp = currentDate.getTime() + 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds

  const PaymentData = {
    merchantCode: "770000015886",
    customerName: "Ahmed Fathy",
    customerMobile: "01019867911",
    customerEmail: "ahmed.fathy1445@gmail.com",
    customerProfileId: "123456",
    merchantRefNum: refNum,
    amount: newCostStr,
    paymentExpiry: `${tomorrowTimestamp}`,
    currencyCode: "EGP",
    language: "en-gb",
    chargeItems: [
      {
        itemId: "6b5fdea340e31b3b0339d4d4ae5",
        description: "Nakhla 1",
        price: newCostStr,
        quantity: 1,
        imageUrl: "https://developer.fawrystaging.com/photos/45566.jpg",
      },
    ],
    returnUrl: "localhost:3000",
    authCaptureModePayment: false,
    signature: hashedString,
  };
  return PaymentData;
}

async function checkout(cost) {
  const configuration = {
    locale: "en", //default en
    mode: DISPLAY_MODE.POPUP, //required, allowed values [POPUP, INSIDE_PAGE, SIDE_PAGE , SEPARATED]
  };
  FawryPay.checkout(buildChargeRequest(cost), configuration);
}

const Pricing = ({ }) => {
  // useEffect(() => {
  //   startNewCheckOut(checkout);
  // }, []);

  return (
    <>
      <div
        id="pricing"
        className="w-full pt-8 bg-mintyGreen rounded-3xl px-14 mt-44 sm:px-2 sm:pt-1"
      >
        <div className="w-full flex flex-col items-center justify-center mt-12 relative">
          <div className="w-full absolute left-[58%] top-[-20%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
            <Image src={investmentPlan} width={1010} height={130} alt="" />
          </div>
          <h1 className="text-6xl text-primary font-normal text-center  sm:text-3xl sm:mt-0 sm:font-extrabold">
            Investment Plans
          </h1>
          <h1 className="w-full text-xl text-primary font-thin text-center mt-5 sm:text-sm sm:w-full sm:mt-4">
            Your Path to Effortless Financial Growth
          </h1>
        </div>

        <div className="mt-8">
          <Slider cards={cards} onCardClicked={checkout} />
        </div>
      </div>
    </>
  );
};

export default Pricing;
