import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DeliciousDishes from "../deliciousDishes/DeliciousDishes";
import CustomerTestimonial from "../customerTestimonial/CustomerTestimonial";
import "./Home.css";
import { Link } from "react-router-dom";
import HomeImage1 from "../../assets/Vector 3.png";

export default function Home(props) {
  
  return (
    
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="HomebackgroundImage">
              <div className="HomeContent">
                <h3>Are you Hungry?</h3>
                <h5>Don’t wait!!!</h5>
                <p>Delicious food is waiting for you </p>
                <Link to="/mainCousre">
                  <button className="HomeButton ">Check the menu</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeliciousDishes></DeliciousDishes>
      <div
        className="py-5"
        style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
      >
        <div className="CustomerTestimonialBackgroundImage3 ">
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
      <CustomerTestimonial></CustomerTestimonial>
      <div
        className="py-5"
        style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
      >
        <div className="container-fluid">
          <div className="row">
          <div style={{ backgroundColor: "white" }} className=" col-sm-12 p-0">
              <img className="HomeImage2" alt="" src={HomeImage1} />
            </div>
            <div style={{ backgroundColor: "white" }} className="col-lg-6 col-md-6 col-sm-12 p-0">

           

              <div className="HomeContent2 mt-5 mx-3">
                <p>Have no time to</p>
                <p>
                  prepare <span style={{ color: "#CA231B" }}>Food</span>?
                </p>
                <h6  className="mt-5">
                  Choose one of our plans, enter delivery time and enjoy
                  delicious food without leaving your home! from{" "}
                  <span style={{ color: "#CA231B" }}>TIFIN</span>
                </h6>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: true, behavior: "smooth" });
                  }}
                  className=""
                  to="/contact"
                >
                  <button className="HomeButton2 mt-4 mb-4">Contact us now</button>
                </Link>
              </div>
            </div>
            <div style={{ backgroundColor: "white" }} className="col-lg-6 col-md-6 p-0">
              <img className="HomeImage1" alt="" src={HomeImage1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
