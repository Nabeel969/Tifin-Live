import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import "./Navbar.css";
import Image from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Contact from "./../contact/Contact";

export default function Navbar(props) {
  const [rout, setRoute] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false)
  const [isOpen, setOpen] = useState(false);
  // const [searchToggle, setSearchToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-wrapper col-1">
          <Link
            onClick={() => {
              window.scrollTo({ top: true, behavior: "smooth" });
            }}
            to="/"
          >
            <img height={"100%"} src={Image} alt="" />
          </Link>
        </div>
        <div className=" col-9">
          <ul className="nav-list">
            <li>
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                className={`navlink ${rout === "/" ? "active" : ""}`}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                className={`navlink ${rout === "/mainCousre" ? "active" : ""}`}
                to={"/mainCousre"}
              >
                Main Course
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                className={`navlink ${rout === "/about" ? "active" : ""}`}
                to={"/about"}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
                className={`navlink ${rout === "/contact" ? "active" : ""}`}
                to={"/contact"}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="search col-3">
          {searchToggle ? (
            <div className="search-wrapper">
              <input type="text" />
              <span>
                <AiOutlineSearch
                  cursor={"pointer"}
                  size={20}
                  className="search-icon"
                ></AiOutlineSearch>
              </span>
              <span>
                <AiOutlineClose
                  onClick={() => setSearchToggle(false)}
                  cursor={"pointer"}
                  size={20}
                  className="search-icon"
                ></AiOutlineClose>
              </span>
            </div>
          ) : (
            <>
              <AiOutlineSearch
                onClick={() => setSearchToggle(true)}
                cursor={"pointer"}
                size={25}
                className="search-icon"
              ></AiOutlineSearch> */}
        {/* {
                    !loggedIn? <FaRegUserCircle cursor={'pointer'} size={25}></FaRegUserCircle> : <button type="button" class="btn btn-outline-success">Login</button>
                } */}
        {/* </> */}
        {/* )}
        </div> */}

        {/* Mobile View */}
        <span className="mobile-view ">
          {isOpen ? (
            <div
              style={{ backgroundColor: " #4BBD7F " }}
              className={`sidebar ${"opened"} `}
            >
              <ul>
                <li>
                  {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
                  <AiOutlineClose
                    style={{ color: "white" }}
                    onClick={() => setOpen(false)}
                    size={25}
                  ></AiOutlineClose>
                </li>
                {/* <li className="search-list-item">
                  <div className="sidebar-search-wrapper">
                    <input type="text" />
                    <span>
                      <AiOutlineSearch
                        cursor={"pointer"}
                        size={20}
                        className="search-icon"
                      ></AiOutlineSearch>
                    </span>
                  </div>
                </li> */}
                {/* <li>Profile</li> */}

                <NavLink
                  onClick={() => {
                    window.scrollTo({ top: true, behavior: "smooth" });
                  }}
                  className={`navlink ${rout === "/" ? "active" : ""}`}
                  to={"/"}
                >
                  <li style={{ color: "white" }} onClick={() => setOpen(false)}>
                    Home
                  </li>
                </NavLink>

                <NavLink
                  onClick={() => {
                    window.scrollTo({ top: true, behavior: "smooth" });
                  }}
                  className={`navlink ${
                    rout === "/mainCousre" ? "active" : ""
                  }`}
                  to={"/mainCousre"}
                >
                  <li style={{ color: "white" }} onClick={() => setOpen(false)}>
                    Main Course
                  </li>
                </NavLink>

                <NavLink
                  onClick={() => {
                    window.scrollTo({ top: true, behavior: "smooth" });
                  }}
                  className={`navlink ${rout === "/about" ? "active" : ""}`}
                  to={"/about"}
                >
                  <li style={{ color: "white" }} onClick={() => setOpen(false)}>
                    About us
                  </li>
                </NavLink>

                <NavLink
                  onClick={() => {
                    window.scrollTo({ top: true, behavior: "smooth" });
                  }}
                  className={`navlink ${rout === "/contact" ? "active" : ""}`}
                  to={"/contact"}
                >
                  <li style={{ color: "white" }} onClick={() => setOpen(false)}>
                    Contact us
                  </li>
                </NavLink>
              </ul>
            </div>
          ) : (
            <FaBars className="bar" size={25} onClick={() => setOpen(true)} />
          )}
        </span>
      </div>
    </div>
  );
}
