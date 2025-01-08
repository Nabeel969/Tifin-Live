import React, { useEffect, useState } from "react";
import "./MainCourse.css";
import MainCourseImage1 from "../../assets/Group 15.png";
import MainCourseImage2 from "../../assets/Group 16.png";
import MainCourseImage3 from "../../assets/Group 17.png";
import MainCourseImage4 from "../../assets/Group 18.png";
import MainCourseImage5 from "../../assets/Group 19.png";
import MainCourseImage6 from "../../assets/Group 20.png";
// import MainCourseImage7 from "../../assets/Rectangle 19.png"
import Week1Data from "../week/Week1Data";
import Week2Data from "../week/Week2Data";
import { Link } from "react-router-dom";

export default function MainCourse(props) {

  useEffect(()=>{
    setMenu(Week1Data);
  },[])

  // Week buttons design
  const [menu, setMenu] = useState([]);
  let color =
    "linear-gradient(0deg, #336E4E 0%, #CA231B 100%),linear-gradient(180deg, #CA231B, #CA231B)";
  const week1 = (a) => {
    document.getElementById("two").style.background = "";
    document.getElementById("four").style.background = "";
    if (a === 1) {
      document.getElementById("three").style.background = "";
      document.getElementById("one").style.background = color;
    }
    if (a === 3) {
      document.getElementById("one").style.background = "";
      document.getElementById("three").style.background = color;
    }
    setMenu(Week1Data);
  };
  const week2 = (a) => {
    setMenu(Week2Data);
    document.getElementById("three").style.background = "";
    document.getElementById("one").style.background = "";
    if (a === 2) {
      document.getElementById("four").style.background = "";
      document.getElementById("two").style.background = color;
    }
    if (a === 4) {
      document.getElementById("two").style.background = "";
      document.getElementById("four").style.background = color;
    }
  };

  return (
    <>
      <div
        className="container-fluid MainCourse"
        style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
      >
        <div className="row p-5">
          <div className="MainCourseText py-2">T i f i n &nbsp; M e n u</div>
          <div className="MainCoursebutton col-12 pb-5">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 p-1 mt-5 MainCoursebuttonMenu">
                <button
                  onClick={(event) => week1(1)}
                  id="one"
                  className="button  btn  bg-success " 
                >
                  <h4>Week # 1</h4>
                </button>
                {/* {isShown === 1 && (
                  <div className="d-grid">
                    <button className="btn buttonWeek my-2">Menu # 1</button>
                    <button className="btn buttonWeek">Menu # 3</button>
                  </div>
                )} */}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-1 mt-5 MainCoursebuttonMenu">
                <button
                  id="two"
                  className="button btn bg-success"
                  onClick={(event) => week2(2)}
                >
                  <h4>Week # 2</h4>
                </button>
                {/* {isShown === 2 && (
                  <div className="d-grid">
                    <button className="btn buttonWeek my-2">Week # 1</button>
                    <button className="btn buttonWeek">Week # 3</button>
                  </div>
                )} */}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-1 mt-5 MainCoursebuttonMenu">
                <button
                  id="three"
                  className="button btn bg-success"
                  onClick={(event) => week1(3)}
                >
                  <h4>Week # 3</h4>
                </button>
                {/* {isShown === 3 && (
                  <div className="d-grid">
                    <button className="btn buttonWeek my-2">Week # 2</button>
                    <button className="btn buttonWeek">Week # 4</button>
                  </div>
                )} */}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 p-1 mt-5 MainCoursebuttonMenu">
                <button
                  id="four"
                  className="button btn bg-success"
                  onClick={(event) => week2(4)}
                >
                  <h4>Week # 4</h4>
                </button>
                {/* {isShown === 4 && (
                  <div className="d-grid">
                    <button className="btn buttonWeek my-2">Week # 2</button>
                    <button className="btn buttonWeek">Week # 4</button>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-5 p-0">
          <div className="col-md-3 col-0">
            <label></label>
          </div>
          <div className="col-md-9 col-12 mb-5">
            <label className=" col-6 ">
              <span className="MainCourseImage7">Menu # 1</span>
            </label>
            <label className=" col-6 ">
              <span className="MainCourseImage7">Menu # 2</span>
            </label>
          </div>

          {/* Monday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 ">
            {/* <span
              // onClick={() => {
              //   window.scrollTo({ top: true, behavior: "smooth" });
              // }}
            > */}
            <img className="MainCourseImage1" src={MainCourseImage1} alt="" />
            {/* </span> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className=" col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(0, 2)}
          </div>
          {/* Tuesday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 ">
            {/* <Link
              onClick={() => {
                window.scrollTo({ top: true, behavior: "smooth" });
              }}
            > */}
            <img className="MainCourseImage1" src={MainCourseImage2} alt="" />
            {/* </Link> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className="col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(2, 4)}
          </div>
          {/* Wednesday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 ">
            {/* <Link
              onClick={() => {
                window.scrollTo({ top: true, behavior: "smooth" });
              }}
            > */}
            <img className="MainCourseImage1" src={MainCourseImage3} alt="" />
            {/* </Link> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className="col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(4, 6)}
          </div>
          {/* Thursday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 ">
            {/* <Link
              onClick={() => {
                window.scrollTo({ top: true, behavior: "smooth" });
              }}
            > */}
            <img className="MainCourseImage1" src={MainCourseImage4} alt="" />
            {/* </Link> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className="col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(6, 8)}
          </div>
          {/* Friday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 mt-5">
            {/* <Link
              onClick={() => {
                window.scrollTo({ top: true, behavior: "smooth" });
              }}
            > */}
            <img className="MainCourseImage2" src={MainCourseImage5} alt="" />
            {/* </Link> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className="col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(8, 10)}
          </div>
          {/* Saturaday list */}
          <div className="MainCourseDiv col-lg-3 col-sm-12 mt-5">
            {/* <Link
              onClick={() => {
                window.scrollTo({ top: true, behavior: "smooth" });
              }}
            > */}
            <img className="MainCourseImage2" src={MainCourseImage6} alt="" />
            {/* </Link> */}
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 row p-0">
            {menu
              .map((value, index) => (
                <div
                  key={index}
                  className="col-6 p-4  d-grid justify-content-center"
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: true, behavior: "smooth" });
                    }}
                    to="/dishdetail"
                    state={{ value: value }}
                  >
                    <img
                      className="MainCourseimage"
                      src={value.img}
                      alt="DishImage"
                    />
                  </Link>
                  <p className="MainCoursetext-danger my-2">{value.name}</p>
                  <p className="MainCoursetext-price">Rs. {value.price}</p>
                </div>
              ))
              .slice(10, 12)}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
