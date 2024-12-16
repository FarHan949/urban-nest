import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar/Navbar';

const Root = () => {
    return (
        <div className='w-full m-auto' style={{fontFamily: "Poppins sans-serif"}}>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;