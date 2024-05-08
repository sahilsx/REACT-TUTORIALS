// import React from "react";
// import { useState, useRef, useEffect } from "react";
//                                                                           useeffect  examples
// const Navbar = ({ color }) => {
//   // Case 1: Run on every render
//   useEffect(() => {
//     alert("Hey I will run on every render");
//   });

//   // Case 2: Run only on first render
//   useEffect(() => {
//     alert("Hey welcome to my page. This is the first render");
//   }, []);

//   // Case 3: Run only when certain values change
//   useEffect(() => {
//     alert("Hey I am running because color was changed");
//   }, [color]);

//   // Example of Cleanup function
//   useEffect(() => {
//     alert("Hey welcome to my page. This is the first render of app.jsx");

//     return () => {
//       alert("component was unmounted");
//     };
//   }, []);

//   return <div>I am navbar of {color} color hehe..</div>;
// };
// export default Navbar;








                                                           




                                                     // usecontext used to avoid propdrilling
// import React from 'react'
// import Button from './button'

// const Navbar = () => {
//   return (
//     <>
//     <div>
//       Navbar
//     </div>
//     <Button/>
//     </>
//   )
// }

// export default Navbar










// // usecallback is used here
// import React from 'react'
// import { memo } from 'react'

// // const Navbar = ({adjective, getAdjective}) => {
// //     console.log("Navbar is rendered")
// //   return (
// //     <div>
// //       I am a {adjective} Navbar
// //       <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
// //     </div>
// //   )
// // }

// // export default memo(Navbar)