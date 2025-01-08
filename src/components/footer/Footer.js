import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import FooterImage from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/social/ic_baseline-whatsapp.png";
import email from "../../assets/social/ic_baseline-email.png";
import instagram from "../../assets/social/ri_instagram-fill.png";
import facebook from "../../assets/social/ic_baseline-facebook.png";
// import twitter from "../../assets/social/mdi_twitter.png";
import DishesData from "../deliciousDishes/DishesData";
import location from "../../assets/location (2).png"


function Footer(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4" style={{ fontWeight: "500" }}>
        <div className="col-lg-1 col-md-12 col-sm-12 mb-3">
        <Link  onClick={() => {
                        window.scrollTo({ top: true, behavior: "smooth" });
                      }}
                      to="/"  >
            <img
            alt="" Route="/"
            
            style={{ height: "43px", width: "110px" }}
            src={FooterImage}
          ></img>
          </Link>
        </div>
          <div className="col-lg-3 col-md-6 col-sm-6 px-3 mb-3">
            <h5 className="mb-3">Contact us</h5>
            <div>
              <img alt="" className="mx-1" src={whatsapp} />{" "}
              <a
                
                rel="noreferrer"
                href="https://wa.me/+923188246123"
                target="_blank"
                message="hello"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
                
              >
               <span className="footer-a">+92 318 8246123</span>
               </a>
            </div>
            <div className="d-flex mt-1">
              <img alt="" className="mx-1" src={email} />{" "}
              <a
                rel="noreferrer"
                href="mailto:tifin.pk.lahore@gmail.com?body=My custom mail body"
                target="_blank"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
              >
                <span className="footer-a">tifin.pk.lahore@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6  col-sm-6 mb-3">
            <h5 className="mb-3">Follow us</h5>
            <div>
              <img alt="" className="mx-1" src={instagram} />{" "}
              <a
                rel="noreferrer"
                href="https://instagram.com/ttiiffiinn.pk"
                target="_blank"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
              >
                <span className="footer-a">ttiiffiinn.ppkk</span>
              </a>
            </div>
            <div className="d-flex mt-1">
              <img alt="" className="mx-1" src={facebook} />{" "}
              <a
                rel="noreferrer"
                href="https://www.facebook.com/ttiiffiinn.pk"
                target="_blank"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
              >
                <span className="footer-a">tifin.pk</span>
              </a>
            </div>
            {/* <div className="d-flex mt-1">
              <img alt="" className="mx-1" src={twitter} />{" "}
              <Link
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
              >
                Twitter
              </Link>
            </div> */}
          </div>

          <div className="footerMainCourse col-lg-3  col-sm-6 col-md-6 mb-3">
            <h5 className="mb-3">Main Course</h5>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-3">
                {DishesData.map((value, index) => (
                  <div key={index} className="mb-3">
                    <Link
                      style={{ textDecoration: "none",color: "#336E4E" }}
                      onClick={() => {
                        window.scrollTo({ top: true, behavior: "smooth" });
                      }}
                      to="/dishdetail"
                      state={{ value: value }}
                    >
                      <span className="footer-a" >{value.name}</span>
                    </Link>
                  </div>
                )).slice(0, 6)}
              </div>
              <div
                className="col-lg-6 col-md-4 col-sm-3"
                style={{ color: "#336E4E" }}
              >
                {DishesData.map((value, index) => (
                  <div key={index} className="mb-3">
                    <Link
                      style={{ textDecoration: "none", color: "#336E4E" }}
                      onClick={() => {
                        window.scrollTo({ top: true, behavior: "smooth" });
                      }}
                      to="/dishdetail"
                      state={{ value: value }}
                    >
                     <p style={{width:" max-content"}} className="footer-a">{value.name}</p> 
                    </Link>
                  </div>
                )).slice(6, 12)}
              </div>
            </div>
          </div>

          <div className="footerMore col-lg-2 col-md-6 col-sm-6">
            <h5 className="mb-3">More</h5>
            <div style={{ color: "#336E4E" }}>
              <img className="my-1"  alt="" src={location} />
                <a
                href="https://www.google.com/maps/place/Tifin.pk/@31.4603591,74.3260909,19.75z/data=!4m14!1m7!3m6!1s0x391907bd8e4bb641:0x434afcfa6f138e93!2sRana+Farman+Traders!8m2!3d31.4627709!4d74.3265132!16s%2Fg%2F11fs7vwt00!3m5!1s0x39190769f4f40f7b:0xdae7c7b59922b38d!8m2!3d31.4602519!4d74.3266164!16s%2Fg%2F11v0zzykbf?entry=ttu"
                rel="noreferrer" 
                target="_blank"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                style={{ textDecoration: "none", color: "#336E4E" }}
                >
                  <span className="footer-a">Peco Road Pindi Stop, Lahore</span>
                </a>      
              <div className="mt-2">
              <Link
                style={{ color: "#336E4E", textDecoration: "none" }}
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                to="/about"
              >
                <span className="footer-a">About us</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
