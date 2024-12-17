import React from "react";
import Banner from "../../Layout/Banner/Banner";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const Home = () => {

  return (
    <div style={{fontFamily: "Poppins sans-serif"}}>
      <div className=" mt-3 p-1 ">
      <Banner/>
      </div>
   
   { /*Features*/}

      <div className="grid grid-cols-8 mt-20">
        <div className="col-span-2">
          <p className="text-4xl font-bold">Our mission is to redefine townhouses for the costumer's</p>
        </div>
        <div className="col-span-4">
        <div className="flex flex-col px-6 py-4 gap-10 text-slate-600">
           <p>Finderland is one the world's townhouse property agents. Our experience spans the globe.</p>
           <p>We have been advising on buying, selling and ranting townhouses for over 20 years. Our team of experts is dedicated to providing you with the best possible service.</p>
        </div>
        </div>
        <div className="col-span-2 mt-3">
                <div className="grid grid-cols-8 gap-2 justify-center items-center">
                  <div className="col-span-2 ml-20 space-y-3">
                  <IoCheckmarkCircleOutline className="text-LightTaupe"/>
                  <IoCheckmarkCircleOutline className="text-LightTaupe"/>
                  <IoCheckmarkCircleOutline className="text-LightTaupe"/>
                  <IoCheckmarkCircleOutline className="text-LightTaupe"/>
                  </div>
                  <div className="col-span-6 space-y-1">
                  <p className="text-slate-600">Only the best properties</p>
                  <p className="text-slate-600">Full feature event app</p>
                  <p className="text-slate-600">Only the best properties</p>
                  <p className="text-slate-600">Only the best properties</p>

                  </div>
               
               </div>    
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
