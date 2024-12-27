import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Agent = () => {

    const agent = useLoaderData()

    console.log(agent)

    return (
        <div>
            
        </div>
    );
};

export default Agent;