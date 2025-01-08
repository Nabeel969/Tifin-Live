import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./Slider.css";

const Slider = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const chevronWidth = 40;
  var a = 3;
  console.log(window.innerWidth);
  if (window.innerWidth <= 720) {
    a = 1;
  } else if (window.innerWidth <= 1000) {
    a = 2;
  }

  return (
    <div style={{ padding: ` ${chevronWidth}px`, paddingTop: "50px" }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={a}
        gutter={40}
        infiniteLoop={true}
        leftChevron={
          <button className="sliderbutton">
            <i class="fa fa-arrow-circle-left" aria-hidden="true" />
          </button>
        }
        rightChevron={
          <button className="sliderbutton">
            <i class="fa fa-arrow-circle-right" aria-hidden="true" />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className=" d-grid px-5" style={{ justifyContent: "center" }}>
          <div className="CustomerTestimonialBackgroundImage1 col-lg-3 col-md-12 col-sm-12 my-2  ">
            <div
              className="mx-4 p-4"
              style={{
                color: "white",
                // fontFamily: "Besley",
                fontSize: "24px",
              }}
            >
              What Customer says!
              <p className="my-0 mx-3">"Meal were good.</p>
              <p className="my-0 mx-4">Affordable.</p>
              <p className="my-0 mx-4">Good packing.</p>
              <p className="my-0 mx-4"> Good taste."</p>
              <p className="my-4 mx-2">By: Umama Bilal</p>
            </div>
          </div>
        </div>
        <div className=" d-grid" style={{ justifyContent: "center" }}>
          <div className="CustomerTestimonialBackgroundImage2 col-lg-3 col-md-12 col-sm-12  my-2">
            <div
              className="mx-4 p-4"
              style={{
                color: "white",
                // fontFamily: "Besley",
                fontSize: "24px",
              }}
            >
              What Customer says!
              <div style={{ fontSize: "20px" }} className="my-0 mx-3">
                "Food was tasty and hygienic.Although it was my first order and
                definitely considering it in the future.Thank you"
              </div>
              <p className="my-2 mx-2">By: Sayyedain</p>
            </div>
          </div>
        </div>
        <div className=" d-grid" style={{ justifyContent: "center" }}>
          <div className="CustomerTestimonialBackgroundImage1 col-lg-3 col-md-12 col-sm-12 my-2">
            <div
              className="mx-4 p-4"
              style={{
                color: "white",
                // fontFamily: "Besley",
                fontSize: "24px",
              }}
            >
              What Customer says!
              <p style={{ height: "72px" }} className="my-0 mt-5 mx-4">
                "Food was good"
              </p>
              <p className="my-4 mt-5 mx-2">By: Azam</p>
            </div>
          </div>
        </div>
        <div className=" d-grid" style={{ justifyContent: "center" }}>
          <div className="CustomerTestimonialBackgroundImage2 col-lg-3 col-md-12 col-sm-12  my-2">
            <div
              className="mx-4 p-4"
              style={{
                color: "white",
                // fontFamily: "Besley",
                fontSize: "24px",
              }}
            >
              What Customer says!
              <div style={{ fontSize: "20px" }} className="my-2 mb-5 mx-3">
                "Very good,the taste of meal is delicious.I ordered it again
                Inshallah"
              </div>
              <p className="mx-3">By: Bilal Aslam</p>
            </div>
          </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
