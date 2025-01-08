import React from "react";
import "./About.css";
import AboutImage1 from "../../assets/tiffin 2.png";

function About  () {
  return (
    <>
      <div
        className="container-fluid p-0 pt-5 MainCourse"
        style={{ backgroundColor: "rgb(228 228 237 / 86%)",overflow:'hidden' }}
      >
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12 mt-5 px-5 AboutImage3">
            <img className="AboutImage1" src={AboutImage1} alt="" />
          </div>
          <div className="col-lg-8 col-sm-12 mt-3 px-5">
            <div className="AboutText py-2">
              Tifin
              <h5 style={{ color: "#336E4E" }}>GOOD FOOD, GOOD HEALTH</h5>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
              <h5 style={{ color: "#336E4E" }}>Food delivery service</h5>
              <p style={{ fontWeight: "400", fontSize: "18px" }}>
                Tifin delivers hygienic home cooked food especially chapati made
                from pure wheat cultivated in our own fields. Because we care
                for your health.
              </p>
            </div>
            <div className="row mt-3">
              <div className="DishDetailText col-lg-6 col-sm-6 mt-5 ">
                Now, book your lunch slot on a daily, weekly, and monthly basis.
              </div>
              <div className="col-lg-3 col-sm-6 mt-5 mx-4">
                <div className="AboutBackgroundImage1">
                  <h6 className="AboutBackgroundText">12 PM to 1 PM</h6>
                </div>
                <div className="AboutBackgroundImage1">
                  <h6 className="AboutBackgroundText">1 PM to 2 PM</h6>
                </div>
                <div className="AboutBackgroundImage1">
                  <h6 className="AboutBackgroundText">2 PM to 3 PM</h6>
                </div>
              </div>
            </div>
            <div className="DishDetailText mt-2 py-2">
              Include
              <p style={{ fontWeight: "400", fontSize: "18px" }}>
                2 Special Chapati + Raita + Salad
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12 mt-5 AboutImage4">
            <img className="" src={AboutImage1} alt="" />
          </div>
        </div>
        <div className="p-0"></div>
        {/* <div className="row"> */}
          <div className="CustomerTestimonialBackgroundImage3">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <div className="CustomerTestimonialText1 mt-5  ">
                    Include
                    <p style={{ fontWeight: "400", fontSize: "18px" }}>
                      2 Special Chapati + Raita + Salad
                    </p>
                  </div>
                  <div className="CustomerTestimonialText2 mt-5 py-4">
                    Up to 10% off
                    <p style={{ fontWeight: "400", fontSize: "18px" }}>
                      On Weekly and Monthly Subscription
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                  <div className="CustomerTestimonialText3 mt-2   ">
                    Rs. 300/- special discount on Monthly Subscription
                  </div>
                  <div className="row">
                    <div className="CustomerTestimonialText4 col-3 py-3 mt-4">
                      Menu # 1{" "}
                    </div>
                    <div className="CustomerTestimonialText4 mt-4 col-9">
                      <p style={{ fontWeight: "400", fontSize: "18px" }}>
                        Per week Rs. <del>1620</del> Rs. 1500
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "18px" }}>
                        Per month Rs. <del>7020</del> Rs. 6200
                      </p>
                    </div>

                    <div className="CustomerTestimonialText4 col-3 py-3 mt-3 ">
                      Menu # 2{" "}
                    </div>
                    <div className="CustomerTestimonialText4 mt-3 col-9">
                      <p style={{ fontWeight: "400", fontSize: "18px" }}>
                        Per week Rs. <del>1420</del> Rs. 1280
                      </p>
                      <p style={{ fontWeight: "400", fontSize: "18px" }}>
                        Per month Rs. <del>6150</del> Rs. 5240
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default About;