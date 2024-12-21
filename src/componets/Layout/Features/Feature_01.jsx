import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa"

const Feature_01 = () => {
  return (
    <div className='m-auto md:ml-10'>

    <div className="grid grid-cols-1 md:grid-cols-8 mt-10 md:mt-20 gap-4 px-4 md:px-0 pb-20 md:pb-12 border-b-2">
    {/* Left Section */}
    <div className="md:col-span-2 flex flex-col items-center md:items-start">
      <p className="text-2xl md:text-4xl font-bold text-center md:text-left">
        Our mission is to redefine townhouses for the customer's
      </p>
    </div>

    {/* Middle Section */}
    <div className="md:col-span-4">
      <div className="flex flex-col px-4 md:px-6 py-4 gap-6 text-slate-600">
        <p>
          Finderland is one of the world's townhouse property agents. Our
          experience spans the globe.
        </p>
        <p>
          We have been advising on buying, selling, and renting townhouses
          for over 20 years. Our team of experts is dedicated to providing
          you with the best possible service.
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="md:col-span-2 mt-3 md:mt-0">
      <div className="space-y-4">
        {[
          "Only the best properties",
          "Full feature app event",
          "Ultimate customer experience",
          "24/7 customer support",
          "Event analytic",
        ].map((text, index) => (
          <div key={index} className="flex items-center">
            <IoCheckmarkCircleOutline className="text-LightTaupe mr-3" />
            <p className="text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-9 gap-10 md:gap-3 px-4 md:px-0">
  {/* First Column */}
  <div className="col-span-3 flex px-10 flex-col justify-center items-center gap-4 text-center md:text-left">
    <p className="text-4xl text-CoyoteBrown font-bold">$17.5M</p>
    <p className="text-slate-600 text-sm">OWNED FROM PROPERTY TRANSACTION</p>
  </div>

  {/* Second Column */}
  <div className="col-span-3 flex px-10 flex-col justify-center items-center gap-4 text-center md:text-left">
    <p className="text-4xl text-CoyoteBrown font-bold flex items-center">30K<FaPlus className='text-lg'/></p>
    <p className="text-slate-600 text-sm">OWNED FROM PROPERTY TRANSACTION</p>
  </div>

  {/* Third Column */}
  <div className="col-span-3 flex px-10 flex-col justify-center items-center gap-4 text-center md:text-left">
    <p className="text-4xl text-CoyoteBrown font-bold">500</p>
    <p className="text-slate-600 text-sm">OWNED FROM PROPERTY TRANSACTION</p>
  </div>
</div>


  </div>
  );
};


export default Feature_01;