import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-12 items-center max-w-7xl mt-20 m-auto">
        {/* {Contact Info} */}
      <div className="col-span-6 md:border-r-2">
        <h1 className="text-3xl py-5 px-10 ">Contact Details</h1>
        <p className="text-sm text-slate-500 py-5 px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi
          nemo architecto modi deserunt! Ratione rem corrupti voluptates,
          praesentium ea voluptas, maxime sapiente harum distinctio, ut possimus
          maiores! Fugit quasi exercitationem deserunt quos enim ut molestias!
          Dolorem eum culpa perferendis.
        </p>
        <div className="py-5 px-10 max-w-2xl border-b-2 mr-16 m-auto">
            <p className="py-2 text-sm">Client Support:</p>
            <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-CoyoteBrown"/>
                <span className="text-xl"> 1-123-456-7890</span>
            </p>
        </div>
        <div className="py-5 px-10 max-w-2xl border-b-2 mr-16 m-auto">
            <p className="py-2 text-sm">Email:</p>
            <p className="flex items-center gap-2">
                <MdOutlineEmail className="text-CoyoteBrown"/>
                <span className="text-xl">urban@gmail.com</span>
            </p>
        </div>
        <div className="py-5 px-10 max-w-2xl mr-16 m-auto">
            <p className="py-2 text-sm">Location:</p>
            <p className="flex items-center gap-2">
                <FaLocationDot className="text-CoyoteBrown"/>
                <span className="text-xl">3015 Grand Ave, coconut grove</span>
            </p>
        </div>
        
      </div>
        
        {/* {Get in touch with us} */}
      <div className="col-span-6">
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Contact;
