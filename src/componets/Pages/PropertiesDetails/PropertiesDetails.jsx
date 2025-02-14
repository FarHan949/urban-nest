import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaHeart, FaBed } from 'react-icons/fa';
import { LuBath } from "react-icons/lu"
import { BiShapeSquare } from "react-icons/bi"
import { GiHomeGarage } from "react-icons/gi";


const PropertiesDetails = () => {

    const houses = useLoaderData();
    const { id } = useParams();
    const house = houses.find(house => house.id === id);
    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        room,
        location,
        facilities
    } = house
  
    const [currentImage, setCurrentImage] = useState(0);
    const images = house.images;
  
    const prevImage = () => {
      setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const nextImage = () => {
      setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="container m-auto max-w-6xl">
      <div className="mx-auto p-4 mt-7 bg-gray-100 rounded-lg shadow-lg">
        {/* Main Image */}
        <div className="relative">
          <img
            src={images[currentImage]}
            alt={`Property ${currentImage + 1}`}
            className="rounded-t-lg w-full h-64 object-cover sm:h-80 md:h-96 lg:h-[500px]"
          />
          <div className="absolute top-3 right-3 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
            {price}
          </div>
        </div>
  
        {/* Thumbnail Slider */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            onClick={prevImage}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronLeft />
          </button>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                  index === currentImage ? "border-2 border-gray-800" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
          <button
            onClick={nextImage}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
  
        {/* Details Section */}
        <div className="flex flex-wrap items-center justify-between mt-4 px-4">
          <ul className="flex flex-wrap space-x-4 text-gray-600 text-sm sm:space-x-6 md:space-x-8">
           <div className='flex justify-center items-center gap-1'>
              <LuBath className='text-CoyoteBrown'/>
              <p>{room[1]} Bathrooms</p>
           </div>
           <div className='flex justify-center items-center gap-1'>
              <FaBed className='text-CoyoteBrown'/>
              <p>{room[0]} Bedrooms</p>
           </div>
           <div className='flex justify-center items-center gap-1'>
              <BiShapeSquare className='text-CoyoteBrown'/>
              <p>{area}</p>
           </div>
           <div className='flex justify-center items-center gap-1'>
              <GiHomeGarage className='text-CoyoteBrown'/>
              <p>1 Garage</p>
           </div>
        
            
          </ul>
          <button className="flex items-center text-gray-600 hover:text-gray-800 mt-2 sm:mt-0">
            <FaHeart className="mr-1" /> Add to Favorites
          </button>
        </div>
        
      </div>
      <div className='p-10 mx-auto'>
         {/* Description */}
       <p className="mb-4 text-gray-600">{description}</p>
      </div>
            {/* Address */}
      <div className="p-4 bg-gray-200 rounded-lg">
        <h3 className="md:text-3xl text-lg font-semibold mb-2 border-b-2">Address</h3>
        <div className="grid grid-cols-2 gap-2 md:text-lg text-sm text-gray-700 mt-5">
          <p>
            <span className="font-semibold">Street:</span> {location[0]}
          </p>
          <p>
            <span className="font-semibold">Zip:</span> {location[1]}
          </p>
          <p>
            <span className="font-semibold">State:</span> {location[2]}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {location[3]}
          </p>
          <p>
            <span className="font-semibold">City:</span> {location[4]}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {location[5]}
          </p>
        </div>
      </div>

      </div>
    );
  };

export default PropertiesDetails;