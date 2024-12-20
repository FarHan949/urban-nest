import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa"

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 mt-10 -mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
          {/* Uniland Real Estate */}
          <div>
            <h2 className="text-2xl font-semibold mb-7">UNILAND</h2>
            <p className="text-gray-400 mb-4">
              Risus commodo congue augue phasellus morbi hymenaeos ante tincidunt
              eu orci dictum bibendum lacus platea primis mi lacinia.
            </p>
            <div className="flex space-x-4 text-gray-400 justify-center">
              <Link to='/' aria-label="Facebook" className="hover:text-white">
                <FaFacebook size={20} />
              </Link>
              <Link to='/' aria-label="Twitter" className="hover:text-white">
                 <FaTwitter size={20} />
              </Link>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <Link to='/' aria-label="Google+" className="hover:text-white">
                 <FaGoogle size={20} />
              </Link>
              <Link to='/' aria-label="Pinterest" className="hover:text-white">
                 <FaPinterest size={20} />
              </Link>
            </div>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-7">Contact Info</h3>
            <p className="text-gray-400 mb-2">
              Unicoder Design Agency <br />
              301 The Greenhouse, Custard Factory, London, E3 8DY.
            </p>
            <p className="text-gray-400 mb-2">+1 246-345-0695</p>
            <p className="text-gray-400">helpline@homex.com</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-7">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to='/' className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to='/' className="hover:text-white">
                  Investment Solution
                </Link>
              </li>
              <li>
                <Link to='/' className="hover:text-white">
                  Frequently Ask Question
                </Link>
              </li>
              <li>
                <Link to='/' className="hover:text-white">
                  How It Work
                </Link>
              </li>
              <li>
                <Link to='/' className="hover:text-white">
                  Become a Member
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Appointment */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Appointment</h3>
            <p className="text-gray-400 mb-6">
              Litora ligula dapibus scelerisque vitae fermentum aenean gravida
              lobortis mus pulvinar magna turient primis.
            </p>
            <Link to='/register'>
            <button className="bg-CoyoteBrown text-white py-2 px-4 rounded hover:bg-JackoBean ">
              Register Now
            </button>
            </Link>
          </div>
        </div>
          <p className='text-left pt-8 pl-6 text-sm text-slate-400'>Copyright ©2024 Urban Nest. All Rights Reserved.</p>
      </footer>
    );
  };
  

export default Footer;