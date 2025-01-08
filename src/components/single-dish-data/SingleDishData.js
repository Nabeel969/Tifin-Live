// // import React from 'react';
// // import DishDetailImage1 from "../../assets/Ellipse 13.png";
// // import './SingleDishData.css';
// // import { useParams } from 'react-router-dom';


// // function SingleDishData({props}) {
// //   const {name}=useParams();
// //   const {price}=useParams();
// //   const {description}=useParams();
 
  
// //   return (
// //     <>
// //     <div
// //         className="container-fluid MainCourse"
// //         style={{ backgroundColor: "rgb(228 228 237 / 86%)" }}
// //       >
// //         <div className="row">
// //           <div className="col-lg-4 col-md-8 col-sm-12 mt-4">
// //             <img className="DishDetailImage1" src={DishDetailImage1} alt=""/>
// //           </div>
// //           <div className="col-lg-8 col-sm-12 mt-3">
// //             <div className="DishDetailText py-2">{name}</div>
// //             <div className="row mt-3">
// //               <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
// //                 <h5 style={{ color: "#CA231B" }}>Prep</h5>
// //                 <h6>20 min</h6>
// //               </div>
// //               <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
// //                 <h5 style={{ color: "#CA231B" }}>Cook</h5>
// //                 <h6>30 min</h6>
// //               </div>
// //               <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
// //                 <h5 style={{ color: "#CA231B" }}>Marination Time</h5>
// //                 <h6>2 hour</h6>
// //               </div>
// //               <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
// //                 <h5 style={{ color: "#CA231B" }}>Total Time</h5>
// //                 <h6>3 hour</h6>
// //               </div>
// //             </div>
// //             <div className="DishDetailText mt-3 py-2">Price</div>
// //             <h4>Rs. {price}</h4>
// //             <div className="DishDetailText mt-3 py-2">Description:</div>
// //             <p style={{fontWeight:'400',fontSize:'18px',height:'10rem',overflow:'scroll'}}>
// //               {description}
// //               {/* When it comes to Biryani, there is no such a thing as one variety.
// //               One of the most royal delicacies that you can enjoy on any
// //               occasion or festival, Chicken Biryani is the epitome of a one-pot
// //               meal. Served hot with raita (yogurt-based side dish), salad,
// //               homemade Chicken Biryani is a celebration of tastes and aromas
// //               that delights anyone fortunate enough to experience it. Whether
// //               it's a festive occasion or a special family dinner, this flavorful
// //               masterpiece brings people together over a meal they'll never
// //               forget. */}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default SingleDishData;

// import React, { useState } from "react";
// import ItemsCarousel from "react-items-carousel";
// import "./SingleDishData.css";
// import { Link } from "react-router-dom";
// import DishesData from "../deliciousDishes/DishesData";

// const SingleDishData = () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(2);
//   const chevronWidth = 40;
//   const a = 8;
//   function scroll ()  {

//   }
// //   console.log(window.innerWidth);
// //   if (window.innerWidth <= 720) {
// //     a = 1;
// //   } else if (window.innerWidth <= 1000) {
// //     a = 2;
// //   }

//   return (
//     <>
//     <div style={{  paddingTop: "50px" }}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={a}
//         gutter={0}
//         infiniteLoop={true}
//         leftChevron={
//           <button className="sliderbutton">
//             <i class="fa fa-arrow-circle-left" aria-hidden="true" />
//           </button>
//         }
//         rightChevron={
//           <button className="sliderbutton">
//             <i class="fa fa-arrow-circle-right" aria-hidden="true" />
//           </button>
//         }
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//          {DishesData.map((value,index) => (
//                   <div key={index} className="col-lg-2  col-md-3 col-sm-6 p-4  d-grid justify-content-center text-center">
//                     <Link onClick={() =>{window.scrollTo({top:true,behavior: 'smooth'})}} to="/dishdetail" state={
//                       {value:value}
//                       } >
//                       <img className="image" src={value.img} alt="DishImage" />
//                     </Link>
//                     <p className="text-danger my-2">{value.name}</p>
//                     <p style={{ color: "#336E4E", fontWeight: "500" }}>
//                       Rs. {value.price}
//                     </p>
//                   </div>
//                 ))}
//       </ItemsCarousel>
//     </div>
//    <div className="row" id="target">
//    <div  className="col-1">
//                 <button className="" onClick={scroll(target)}>
//             <i class="fa fa-arrow-circle-left" aria-hidden="true" />
//           </button>
//                 </div>
//     <div className="col-10 d-flex" style={{overflow:"scroll"}}>
//          {DishesData.map((value,index) => (
//                   <div key={index} className="col-lg-2 p-4  d-grid justify-content-center text-center">
//                     <Link onClick={() =>{window.scrollTo({top:true,behavior: 'smooth'})}} to="/dishdetail" state={
//                       {value:value}
//                       } >
//                       <img className="image" src={value.img} alt="DishImage" />
//                     </Link>
//                     <p className="text-danger my-2">{value.name}</p>
//                     <p style={{ color: "#336E4E", fontWeight: "500" }}>
//                       Rs. {value.price}
//                     </p>
//                   </div>
//                 )).slice(0,12)}
//                 </div>
//                 <div  className="col-1">
//                 <button className="mt-5">
//             <i class="fa fa-arrow-circle-right" aria-hidden="true" />
//           </button>
//                 </div>
//    </div>
    
//     </>
//   );
// };

// export default SingleDishData;

