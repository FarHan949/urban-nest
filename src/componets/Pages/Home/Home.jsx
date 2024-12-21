import React from "react";
import Banner from "../../Layout/Banner/Banner";
import Feature_01 from "../../Layout/Features/Feature_01";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Layout/Card/Card";
import Feature_02 from "../../Layout/Features/Feature_02";


const Home = () => {

  const houses = useLoaderData()
  // console.log(houses)

  return (
    <div style={{ fontFamily: "Poppins sans-serif" }} className="m-auto md:max-w-7xl">
      <div className="mt-3 p-1">
        <Banner />
      </div>

      {/*Features_01*/}
      <Feature_01/>

      {/*Cards*/}
      <div className="max-w-7xl relative mt-14 md:mt-20 mb-10 pb-10 md:bg-yellow-50 rounded px-5">
        <h1 className="text-3xl md:text-4xl text-left md:py-0">Recent properties</h1>
        <h2 className="absolute right-2 md:right-5 mt-3 text-sm underline cursor-pointer">
          <Link to='/'>View All Properties</Link></h2>
        <div className="items-center grid gap-5 grid-cols-1 md:grid-cols-3 mt-12 md:mt-16">
      {
        houses.slice(0,3).map(house => <Card key={house.id}
          house={house}
          ></Card>)
        }
        </div>
      </div>

      {/*Features_02*/}
      <Feature_02/>
    </div>
  );
};

export default Home;

