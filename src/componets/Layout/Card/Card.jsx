import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBed } from "react-icons/fa"
import { LuBath } from "react-icons/lu"
import { BiShapeSquare } from "react-icons/bi"

const Card = ({house}) => {

    const {estate_title, cover, id, price, status, location, area, room} = house;
    
    return (
        <div className="card bg-base-100 w-96 h-5/6 shadow-xl">
  <figure>
    <img
      src={cover}
      alt="property" />
  </figure>
  <div className="card-body">
    <h2 className="card-title -mt-5 -ml-5 pb-2 text-CoyoteBrown">{price}</h2>
    <h2 className="card-title -mt-5 -ml-5">{estate_title}</h2>
    <p className="text-sm -ml-5 items-center flex gap-1">
        <FaLocationDot className='text-CoyoteBrown'/>
        {location}</p>
   
      <div className='text-sm -ml-7 pr-28 flex justify-center items-center'>
        <p className="flex justify-center gap-1">
            <FaBed className='text-CoyoteBrown'/> 
            {room[0]}
        </p>
        <p className="flex justify-center gap-1">
            <LuBath className='text-CoyoteBrown'/> 
            {room[1]}
        </p>
        <p className="flex justify-center gap-1">
            <BiShapeSquare className='text-CoyoteBrown'/> 
            {area}
        </p>
      </div>
      <button className="w-full bg-CoyoteBrown mt-5 text-white hover:bg-JackoBean rounded-lg py-2">View Details</button>
  </div>
</div>
    );
};

export default Card;