import React from "react";
import "./DishDetail.css";
import DishesData from "../deliciousDishes/DishesData";
import { useLocation,Link } from "react-router-dom";

function DishDetail(props) {
  const state = useLocation().state
  return (
    <>
      <div
        className="container-fluid MainCourse"
        style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
      >
        <div className="row">
          <h1>{props.na}</h1>
          <div className="col-lg-4 col-md-8 col-sm-12 mt-4 mb-4">
            <img className="DishDetailImage1" src={state.value.img} alt=""/>
          </div>
          <div className="col-lg-8 col-sm-12 mt-3">
            <div className="DishDetailText py-2">{state.value.name}</div>
            {/* <div className="row mt-3">
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <h5 style={{ color: "#CA231B" }}>Prep</h5>
                <h6>20 min</h6>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <h5 style={{ color: "#CA231B" }}>Cook</h5>
                <h6>30 min</h6>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <h5 style={{ color: "#CA231B" }}>Marination Time</h5>
                <h6>2 hour</h6>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                <h5 style={{ color: "#CA231B" }}>Total Time</h5>
                <h6>3 hour</h6>
              </div>
            </div> */}
            <div className="DishDetailText mt-3 py-2">Price</div>
            <h4>Rs. {state.value.price}</h4>
            <div className="DishDetailText mt-3 py-2">Description:</div>
            <p style={{fontWeight:'400',fontSize:'18px',height:'10rem',overflow:'scroll'}}>
              {state.value.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row dishes" >
          <div className="DishDetailText1 py-2">This Week Menu</div>{" "}
        </div>
        <div className="container">
          <div className="dishes">
            <div className="col-12">
              <div className="row">
                {DishesData.map((value) => (
                  <div key={value.id} className="col-lg-2  col-md-4 col-sm-6 p-4  d-grid justify-content-center text-center">
                    <Link onClick={() =>{window.scrollTo({top:true,behavior: 'smooth'})}} to="/dishdetail" state={
                      {value:value}
                      } >
                      <img className="image" src={value.img} alt="DishImage" />
                    </Link>
                    <p className="text-danger my-2">{value.name}</p>
                    <p style={{color: "#336E4E",fontWeight:'500'}}>Rs. {value.price}</p>
                  </div>
                )).slice(0,6)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default DishDetail;
