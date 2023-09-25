import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="text-center bg-dark text-white">About MedStore</h1>
          <p className="text-justify mt-3">
          Are you exhausted of waiting in the lengthy rows of people just to get the right medicines you want??? Well then, we’ve got solutions to your exhaustion. Do away with running out of your essential medicines, heavy traffic, monsoons, driving to stores, waiting in line or even remembering your refills. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;