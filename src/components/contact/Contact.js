import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import location from "../../assets/location.png";
import whatsapp from "../../assets/whatsapp (1).png";
import ReactWhatsapp from 'react-whatsapp';

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneno, setPhoneNo] = useState("")
  const [message, setMessage] = useState("")
  var data = `${name + email + phoneno + message}` 
  const onSubmit = ()  =>{
    alert("clicked")
    let url = "https://wa.me/+923159338978"
    url += `&text=${encodeURI(data)}&app_absent=0`;
    window.open(url)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="py-5 mt-5"
            style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
          >
            {/* <div className="container">  */}
            <div className="contactImage3 col-lg-6 col-sm-12 col-md-12 col-sm-12 p-0">
              <div className="contactBackgroundImage2">
                <div
                  style={{ color: "white" }}
                  className="p-5"
                >
                  <h3 className="p-0">Visit us or Call us Today</h3>
                  <div className="my-2 p-0">
                    <img alt="" className="mx-1 py-2 " src={location} />{" "}
                    <Link
                      onClick={() => {
                        window.scrollTo({ top: true, behavior: "smooth" });
                      }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Peco Road Pindi Stop, Lahore
                    </Link>
                  </div>
                  <div>
                    <img alt="" className="mx-1  " src={whatsapp} />{" "}
                    <a
                      rel="_blank"
                      href="https://wa.me/+923041137877"
                      onClick={() => {
                        window.scrollTo({ top: true, behavior: "smooth" });
                      }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      +92 318 8246123
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}

            <div className="container ">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12  p-0">
                  <div className="contactBackgroundImage1 ">
                    <div
                      style={{ color: "white",fontFamily:'besley' }}
                      className="p-5"
                    >
                      <h1 className="">Contact us</h1>
                      <input
                        required
                        placeholder="Name"
                        className="contactInput1 mx-4"
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                      <input
                        required
                        placeholder="E-mail"
                        className="contactInput1 mx-4"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                      ></input>
                      <input
                        required
                        placeholder="Phone No"
                        className="contactInput1 mx-4"
                        onChange={(e) => setPhoneNo(e.target.value)}
                        type="tel"
                      ></input>
                      <textarea
                        required
                        placeholder="Message"
                        className="contactInput1 mx-4"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <div
                        style={{
                          display: "grid",
                          justifyContent: "end",
                          width: "85%",
                        }}
                      >
                        {/* <Link
                          onClick={() => {
                            window.scrollTo({ top: true, behavior: "smooth" });
                          }}
                          className=""
                          to=""
                        > */}
                        
                            <ReactWhatsapp number="+923041137877" message={name} style={{background:'inherit',height:"0px",width:'0px'}} >
                            <button className="contactButton1 mt-4 mb-4" >
                               Submit
                            </button>
                            </ReactWhatsapp>
                          
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="container"> */}
                <div className="contactImage4 col-lg-6 col-md-12 col-sm-12 p-0">
                  <div className="contactBackgroundImage2">
                    <div
                      style={{ color: "white" }}
                      className="p-3"
                    >
                      <h3 className="p-0">Visit us or Call us Today</h3>
                      <div className="my-2 p-0">
                        <img alt="" className="mx-1 py-2 " src={location} />{" "}
                        <a
                          href="https://www.google.com/maps/place/Tifin.pk/@31.4603591,74.3260909,19.75z/data=!4m14!1m7!3m6!1s0x391907bd8e4bb641:0x434afcfa6f138e93!2sRana+Farman+Traders!8m2!3d31.4627709!4d74.3265132!16s%2Fg%2F11fs7vwt00!3m5!1s0x39190769f4f40f7b:0xdae7c7b59922b38d!8m2!3d31.4602519!4d74.3266164!16s%2Fg%2F11v0zzykbf?entry=ttu"
                          rel="noreferrer"
                          target="_blank"
                          onClick={() => {
                            window.scrollTo({ top: true, behavior: "smooth" });
                          }}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Peco Road Pindi Stop, Lahore
                        </a>
                      </div>
                      <div>
                        <img alt="" className="mx-1  " src={whatsapp} />{" "}
                        <a
                          rel="noreferrer"
                          href="https://wa.me/+923188246123"
                          target="_blank"
                          onClick={() => {
                            window.scrollTo({ top: true, behavior: "smooth" });
                          }}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          +92 318 8246123
                        </a>
                      </div>
                    </div>
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

export default Contact;
