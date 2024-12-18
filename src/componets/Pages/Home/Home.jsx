import React from "react";
import Banner from "../../Layout/Banner/Banner";
import Feature_01 from "../../Layout/Features/Feature_01";


const Home = () => {
  return (
    <div style={{ fontFamily: "Poppins sans-serif" }}>
      <div className=" mt-3 p-1 ">
        <Banner />
      </div>

      {/*Features*/}
      <Feature_01/>
      

    </div>
  );
};

export default Home;
