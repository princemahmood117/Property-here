import React, { useEffect } from 'react';

const Career = () => {

      // show the top of the page after clicking on "Read more"
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6 text-xl">
              Please wait for any notice of 
              recruitment
            </p>

          </div>
        </div>
      </div>

    

      
    
    );
};

export default Career;