import React from "react";
import "./CustomerTestimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../slider/Slider";

function CustomerTestimonial(props) {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="CustomerTestimonialText ">
            Customer Testimonial
          </div>
          <Slider></Slider>
        </div>
      </div>
    </>
  );
}

export default CustomerTestimonial;
