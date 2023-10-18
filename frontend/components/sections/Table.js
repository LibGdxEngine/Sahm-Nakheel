// components/Table.js

import React from "react";

const Row = () => {
  return (
    <>
      <div className="px-6 py-3 bg-white text-navyBlue  text-center text-xs font-medium ">
        #1
      </div>
      <div className="px-6 py-3 bg-white text-darkGreen  text-center text-xs font-extrabold ">
        25 Kilos
      </div>
      <div className="px-6 py-3  bg-white text-navyBlue  text-center text-xs font-medium ">
        120 EGP
      </div>
      <div className="px-6 py-3 bg-white text-darkGreen  text-center text-xs font-extrabold ">
        2
      </div>
      <div className="px-6 py-3 bg-white text-navyBlue  text-center text-xs font-medium ">
        1300 EGP
      </div>
    </>
  );
};

const Table = () => {
  return (
    <div
      className="w-full border rounded-tr-3xl rounded-tl-3xl bg-lightGray 
    grid grid-cols-5 gap-y-0.5 gap-x-15 mt-24"
    >
      <div className="px-6 py-3 text-navyBlue  text-center text-xs font-medium uppercase tracking-wider">
        Year Number
      </div>
      <div className="px-6 py-3 text-darkGreen  text-center text-xs font-extrabold uppercase tracking-wider">
        Date Produced
      </div>
      <div className="px-6 py-3 text-navyBlue  text-center text-xs font-medium uppercase tracking-wider">
        Date Price
      </div>
      <div className="px-6 py-3 text-darkGreen  text-center text-xs font-extrabold uppercase tracking-wider">
        Off shoots produced
      </div>
      <div className="px-6 py-3 text-navyBlue  text-center text-xs font-medium uppercase tracking-wider">
        Off shoots price
      </div>

      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Table;
