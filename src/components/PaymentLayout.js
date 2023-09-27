import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";
const PaymentLayout = ({ children }) => {
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    const url = "https://banquemisr.gateway.mastercard.com/api/nvp/version/74";
    const data = new URLSearchParams();

    // Set your API credentials
    const username = "merchant.YOUR_MERCHANT_ID"; // Replace 'YOUR_MERCHANT_ID' with your actual merchant ID
    const password = "YOUR_API_PASSWORD"; // Replace 'YOUR_API_PASSWORD' with your actual API password

    // Append API operation and other parameters as needed
    data.append("apiOperation", "INITIATE_CHECKOUT");
    data.append("apiUsername", "Merchant.TESTPALMOASES");
    data.append("apiPassword", "8853a5cd976f0fcc2c5a0fab5ca9ac50");

    data.append("interaction.operation", "NONE");
    data.append("interaction.merchant.name", "Palmoases");
    data.append("interaction.returnUrl", "http://localhost:3000/");

    data.append("merchant", "TESTPALMOASES"); // Replace 'YOUR_MERCHANT_ID' with your actual merchant ID
    data.append("order.id", '"'); // Replace 'UNIQUE_ORDER_ID' with your unique order ID
    data.append("order.amount", "100.00");
    data.append("order.currency", "EGP");
    data.append("order.description", "DESCRIPTION_OF_ORDER"); // Replace 'DESCRIPTION_OF_ORDER' with your description

    // Create a Basic Authentication header
    const headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(`${username}:${password}`)); // Base64 encode the credentials

    // Make the fetch request with authentication
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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
  }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://banquemisr.gateway.mastercard.com/static/checkout/checkout.min.js";
  //   script.async = true;
  //   script.dataset.error = "errorCallback";
  //   script.dataset.cancel = "http://localhost:3000/";
  //   script.onload = () => {
  //     const checkoutObject = window.Checkout;
  //     setCheckout(checkoutObject);
  //   };

  //   document.head.appendChild(script);

  //   return () => {
  //     // Cleanup when the component unmounts (optional)
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <Head>{/* Other head elements */}</Head>

      {React.cloneElement(children, { checkout })}
    </div>
  );
};

export default PaymentLayout;
