import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layout/Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;