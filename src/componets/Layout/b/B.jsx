import React from 'react';

const B = () => {
  return (
    <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="text-center md:text-left">
        <h1 class="text-4xl font-bold mb-4">Our mission is to redefine real estate for the customer's</h1>
        <p class="text-lg">Finderland is one of the world's leading property agents. Our experience spans the globe.</p>
        <p class="text-lg">We have been advising on buying, selling and renting property for over 160 years, from country cottages to city centre offices, agricultural land to new-build developments.</p>
      </div>
      <div class="mt-8 md:mt-0">
        <ul class="list-disc space-y-4">
          <li>Only pay when you publish</li>
          <li>Full featured event app</li>
          <li>Unlimited featured use</li>
          <li>24/7 supports</li>
          <li>Event analytics</li>
        </ul>
      </div>
    </div>
  </div>
  
  );
};

export default B;