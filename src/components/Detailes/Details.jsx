import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    const property = useLoaderData();

        console.log(property,"this is the property data");
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          
            
        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src={property.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-default-600">{property.estate_title}</h3>
                </a>
                <p className="leading-snug dark:text-gray-600">{property.description} </p>
            </div>
        </div>
    </div>
    );
};

export default Details;