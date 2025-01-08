import React from "react";
import "./DeliciousDishes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DishesData from "./DishesData";
import { Link } from "react-router-dom";

function DeliciousDishes(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row dishes">
          <div className="text py-2">Our Delicious Dishes</div>{" "}  
        </div>
        </div>
      
        <div className="container"> 
          <div className="dishes">
           
              <div className="row">
                {DishesData.map((value,index) => (
                  <div key={index} className="col-lg-2  col-md-3 col-sm-6 col-6 p-4  d-grid justify-content-center text-center">
                    <Link onClick={() =>{window.scrollTo({top:true,behavior: 'smooth'})}} to="/dishdetail" state={
                      {value:value}
                      } >
                      <img className="image" src={value.img} alt="DishImage" />
                    </Link>
                    <p className="text-danger my-2">{value.name}</p>
                    <p style={{ color: "#336E4E", fontWeight: "500" }}>
                      Rs. {value.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* </div> */}
    </>
  );
}

export default DeliciousDishes;
