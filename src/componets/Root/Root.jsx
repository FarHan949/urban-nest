import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full m-auto' style={{fontFamily: "Poppins sans-serif"}}>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;