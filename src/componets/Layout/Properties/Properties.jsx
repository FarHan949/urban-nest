import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Properties = () => {
  const houses = useLoaderData();
  const [filter, setFilter] = useState("all");

  const filterHouses =
    filter === "all"
      ? houses
      : houses.filter((house) => house.status.includes(filter));

  console.log(houses);
  return (
    <div className="md:ml-10 ml-4 m-auto mt-10">
      <div className="items-center mb-7 text-center">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-LiverChestnut text-white m-1"
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-CoyoteBrown text-white rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => setFilter("rent")}>Rent</a>
            </li>
            <li>
              <a onClick={() => setFilter("sale")}>sales</a>
            </li>
            <li>
              <a onClick={() => setFilter("all")}>All</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1  gap-1">
        {filterHouses.map((house) => (
          <Card key={house.id} house={house}></Card>
        ))}
      </div>
    </div>
  );
};

export default Properties;
