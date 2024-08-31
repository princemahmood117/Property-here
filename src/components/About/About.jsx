import React, { useEffect } from 'react';

const About = () => {

      // show the top of the page after clicking on "Read more"
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <h1>this is about us</h1>
        </div>
    );
};

export default About;