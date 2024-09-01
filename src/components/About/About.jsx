import React, { useEffect } from 'react';

const About = () => {

      // show the top of the page after clicking on "Read more"
      useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="about-us">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Welcome to Property Here, where our mission is to provide you your dream properties in an affordable price.
          </p>
          <p>
            Founded in 1996, our journey began with the goal of providing customers with their dream property. Over the years, we've grown into a humangus company. Today, we are proud to serve you with respect.
          </p>
          <h2>Our Values</h2>
        
          <h2>Meet the Team</h2>
          <p>
            Our team is composed of dedicated professionals who are passionate about reaching you out. Each member brings a wealth of experience and a commitment to excellence.
          </p>
          <h2>Contact Us</h2>
          <p>
            Have any questions or want to learn more about what we do? Feel free to get in touch. We’re here to help!
          </p>
        </div>
      </section>
    );
};

export default About;