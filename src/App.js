import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MainCourse from "./components/main-course/MainCourse";
// import SingleDishData from './components/single-dish-data/SingleDishData';
import Footer from "./components/footer/Footer";
import DishDetail from "./components/dish-detail/DishDetail";
import "./App.css";
import DeliciousDishes from "./components/deliciousDishes/DeliciousDishes";
import DishesData from "./components/deliciousDishes/DishesData";
import React, { useState } from "react";
import Slider from "./components/slider/Slider";
import "./App.css";
import SingleDishData from "./components/single-dish-data/SingleDishData";
import whatsapp from '../src/assets/whatsapp.png';

function App() {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

 


  return (
    <>
      <div>
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </div>

      <div >
      <a
                
                rel="noreferrer"
                href="https://wa.me/+923188246123"
                target="_blank"
                onClick={() => {
                  window.scrollTo({ top: true, behavior: "smooth" });
                }}
         
                
              >
                <img className="whatsapp" src={whatsapp}></img>
              {/* <i className="fa fa-whatsapp" aria-hidden="true"></i> */}
               </a>

  </div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/mainCousre" Component={MainCourse}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/dishesdata" Component={DishesData}></Route>
        <Route path="/dishdetail" Component={DishDetail}></Route>
        <Route path="/deliciousdishes" Component={DeliciousDishes}></Route>
        <Route path="/slider" Component={Slider}></Route>
        <Route path="/singledishdata" Component={SingleDishData}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
