import Image from "next/image";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import investmentPlan from "../../../public/images/svgs/Investment Plans.svg";
import FeatureRow from "../FeatureRow";

const OfferCardItem = ({ years, title, investment, cost, rows, income }) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.05 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1 }); // Reset scale when not hovered
  };
  return (
    <>
      <motion.div
        className="flex flex-col items-start justify-between h-96 bg-white  rounded-3xl mx-8 sm:mx-0 p-8 shadow-lg shadow-y-50"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        animate={controls}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-extrabold me-5">{years}</h1>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl text-lightGreen">{title}</h1>
            <h1 className="text-xs text-mildGray">{investment}</h1>
            <h1 className="text-sm text-navyBlue font-extrabold">{cost}</h1>
          </div>
        </div>

        <div>
          <FeatureRow text={`${rows[0]}`} />
          <FeatureRow text={`${rows[1]}`} />
          <FeatureRow text={`${rows[2]}`} />
          <FeatureRow text={`${rows[3]}`} />
          <FeatureRow text={`${rows[4]}`} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold me-1">{income}</h1>
            <h1 className="text-sm text-lightGreen font-bold mt-1">EGP</h1>
          </div>

          <div
            className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-darkGreen text-light p-1.5 px-6
            rounded-3xl text-sm font-bold hover:bg-light 
            
            dark:bg-light dark:text-white  
             md:p-2 md:px-4 md:text-base
            `}
            style={{ cursor: "pointer" }}
          >
            Choose Plan
          </div>
        </div>
      </motion.div>
    </>
  );
};

const SpecialOfferCard = ({ years, title, investment, cost, rows, income }) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setHovered(true);
    controls.start({ scale: 1.05 }); // Scale up when hovered
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({ scale: 1 }); // Reset scale when not hovered
  };
  return (
    <>
      <motion.div
        className="flex flex-col items-start justify-between h-96 bg-white sm:mx-0 rounded-3xl mx-8 p-8 shadow-lg shadow-y-50
        bg-gradient-to-bl from-dark  to-greenCard
        relative
        "
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverEnd}
        animate={controls}
      >
        <div className="w-2/3 absolute left-[17%] top-[-5%] bg-mOrange rounded-full text-center p-3">
          <p className="text-dark font-bold text-normal">Most popular plan</p>
        </div>
        <div className="flex items-center justify-center text-white">
          <h1 className="text-6xl font-extrabold me-5">{years}</h1>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl text-lightGreen">{title}</h1>
            <h1 className="text-xs text-lightGreen">{investment}</h1>
            <h1 className="text-sm text-white font-extrabold">{cost}</h1>
          </div>
        </div>

        <div>
          <FeatureRow classes="!text-white" text={`${rows[0]}`} />
          <FeatureRow classes="!text-white" text={`${rows[1]}`} />
          <FeatureRow classes="!text-white" text={`${rows[2]}`} />
          <FeatureRow classes="!text-white" text={`${rows[3]}`} />
          <FeatureRow classes="!text-white" text={`${rows[4]}`} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-extrabold me-1">
              {income}
            </h1>
            <h1 className="text-sm text-white font-bold mt-1">EGP</h1>
          </div>

          <div
            className={` shadow-lg shadow-y-20 flex items-center bg-gradient-to-br from-lightGreen to-lightGray  p-1.5 px-6
            rounded-3xl text-sm font-bold hover:bg-light 
            text-darkGreen
            dark:bg-light dark:text-white  
             md:p-2 md:px-4 md:text-base
            `}
            style={{ cursor: "pointer" }}
          >
            Choose Plan
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Pricing = ({ checkout }) => {
  useEffect(() => {
    if (checkout) {
      const url =
        "https://banquemisr.gateway.mastercard.com/api/rest/version/74/merchant/TESTPALMOASES/session";
      // Set your API credentials
      const userid = "Merchant.TESTPALMOASES"; // Replace 'YOUR_MERCHANT_ID' with your actual merchant ID
      const password = "8853a5cd976f0fcc2c5a0fab5ca9ac50"; // Replace 'YOUR_API_PASSWORD' with your actual API password

      const payload = {
        apiOperation: "INITIATE_CHECKOUT",
        interaction: {
          operation: "NONE",
          returnUrl: "https://sahm-nakheel.vercel.app/",
        },
        order: {
          id: "", // You can set the order ID as needed
          amount: "100.00",
          currency: "EGP",
          description: "1 nakhla",
        },
      };
      const payloadJSON = JSON.stringify(payload);

      fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${userid}:${password}`),
        },
        body: payloadJSON,
        // mode: "no-cors",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((responseText) => {
          // Handle the response here
          console.log("Response:", responseText);
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });

      // Checkout.configure({
      //   session: {
      //     id: "SESSION0002294515827K28401232I5",
      //   },
      // });
      // checkout.showPaymentPage();
    }
  }, [checkout]);

  return (
    <>
      <div id="pricing" className="bg-mintyGreen rounded-3xl p-14 mt-44 xs:p-3">
        <div className="flex flex-col items-center justify-center mt-12 relative">
          <div className="w-full absolute left-[58%] top-[12%] translate-x-[-53%] sm:top-0 z-100 sm:hidden">
            <Image src={investmentPlan} width={1010} height={130} alt="" />
          </div>
          <h1 className="text-7xl text-primary font-normal text-center xs:text-3xl">
            Investment Plans
          </h1>
          <br />
          <h1 className="w-full text-2xl text-primary font-thin text-center">
            Your Path to Effortless Financial Growth
          </h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-3 gap-y-8  lg:grid-cols-1 sm:gap-16 lg:gap-10 2xl:grid-cols-2 2xl:gap-y-16 xl:gap-y-16">
          <OfferCardItem
            years={10}
            title={`Medjool Trees`}
            investment={`10 - Years ROI would be `}
            cost={`EGP 250,000`}
            rows={[
              `EGP 25000 Annual ROI`,
              `Installment over 10 Months`,
              ` EGP 8000 installment per Month`,
              `30% Average ROI`,
              `EGP 70000 for Cash Payment`,
            ]}
            income={`80,000`}
          />
          <OfferCardItem
            years={5}
            title={`Medjool Trees`}
            investment={`10 - Years ROI would be `}
            cost={`EGP 125,000`}
            rows={[
              `EGP 12500 Annual ROI`,
              `Installment over 10 Months`,
              `EGP 4000 installment per Month`,
              `30% Average ROI`,
              `EGP 35000 for Cash Payment`,
            ]}
            income={`40,000`}
          />
          <SpecialOfferCard
            years={1}
            title={`Medjool Trees`}
            investment={`10 - Years ROI would be `}
            cost={`EGP 25,000`}
            rows={[
              `EGP 2500 Annual ROI`,
              `Installment over 10 Months`,
              `EGP 4000 installment per Month`,
              `30% Average ROI`,
              `EGP 7000 for Cash Payment`,
            ]}
            income={`8,000`}
          />
        </div>
      </div>
    </>
  );
};

export default Pricing;
