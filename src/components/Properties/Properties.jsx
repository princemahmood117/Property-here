import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Property from "../property/Property";


const Properties = () => {

       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const properties = useLoaderData();


    return (
        <div className="space-y-3">

           {
            properties.map(property => <Property property={property} key={property.id}></Property>)
           }
            
        </div>
    );
};

export default Properties;