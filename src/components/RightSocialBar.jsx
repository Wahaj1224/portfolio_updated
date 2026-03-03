
// import React from "react";

// const RightSocialBar = () => {
//   return (
//     <>
//       {/* Color Animation */}
//       <style>
//         {`
//           @keyframes colorChange {
//             0% { fill: #1877F2; }      /* Facebook Blue */
//             25% { fill: #0A66C2; }     /* LinkedIn Blue */
//             50% { fill: #6e5494; }     /* GitHub Purple */
//             75% { fill: #ff0055; }     /* Pink */
//             100% { fill: #1877F2; }
//           }

//           .animated-icon {
//             animation: colorChange 4s infinite linear;
//             transition: transform 0.3s ease;
//           }

//           .animated-icon:hover {
//             transform: scale(1.2);
//           }
//         `}
//       </style>

//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           right: "20px",
//           transform: "translateY(-50%)",
//           zIndex: "9999",
//         }}
//       >
//         <div
//           style={{
//             backdropFilter: "blur(15px)",
//             padding: "15px",
//             borderRadius: "20px",
//             boxShadow:
//               "inset 0 0 20px rgba(255,255,255,0.2), 0 5px 15px rgba(0,0,0,0.2)",
//           }}
//         >
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "flex",
//               flexDirection: "column",
//               gap: "20px",
//               alignItems: "center",
//             }}
//           >
//             {/* FACEBOOK */}
//             <li>
//               <a
//                 href="https://www.facebook.com/profile.php?id=100072136780561"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <svg
//                   viewBox="0 0 320 512"
//                   className="animated-icon"
//                   style={iconStyle}
//                 >
//                   <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
//                 </svg>
//               </a>
//             </li>

//             {/* GITHUB */}
//             <li>
//               <a
//                 href="https://github.com/Wahaj1224"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <svg
//                   viewBox="0 0 496 512"
//                   className="animated-icon"
//                   style={iconStyle}
//                 >
//                   <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 71.7 205 171.1 238.3 12.5 2.3 17-5.4 17-12v-42.3c-69.6 15.1-84.3-33.6-84.3-33.6-11.4-29-27.8-36.7-27.8-36.7-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.2 58.5 27.2 72.8 20.8 2.3-16.2 8.7-27.2 15.8-33.5-55.6-6.3-114-27.8-114-123.8 0-27.4 9.8-49.8 25.8-67.4-2.6-6.3-11.2-31.7 2.4-66.1 0 0 21-6.7 68.8 25.7 19.9-5.5 41.2-8.3 62.4-8.4 21.2.1 42.5 2.9 62.4 8.4 47.8-32.4 68.8-25.7 68.8-25.7 13.6 34.4 5 59.8 2.4 66.1 16 17.6 25.8 40 25.8 67.4 0 96.2-58.5 117.5-114.2 123.7 8.9 7.7 16.8 22.9 16.8 46.2v68.5c0 6.7 4.5 14.4 17.1 12C424.3 457 496 362.9 496 252 496 113.3 389.9 8 251.2 8z" />
//                 </svg>
//               </a>
//             </li>

//             {/* LINKEDIN */}
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/m-wahaj-yasin/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <svg
//                   viewBox="0 0 448 512"
//                   className="animated-icon"
//                   style={iconStyle}
//                 >
//                   <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.8-53.8 53.79 53.79 0 0 1-53.8 53.8zM447.9 448h-92.4V302.4c0-34.7-12.5-58.4-43.7-58.4-23.8 0-38 16-44.3 31.4-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c-.2.3-.5.6-.7.9h.7v-1c12.3-19 34.3-46.1 83.5-46.1 61 0 106.7 39.8 106.7 125.4V448z" />
//                 </svg>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// const iconStyle = {
//   height: "50px",
//   width: "50px",
//   padding: "12px",
//   borderRadius: "50%",
//   background: "rgba(255,255,255,0.1)",
//   boxShadow:
//     "inset 0 0 10px rgba(255,255,255,0.4), 0 5px 10px rgba(0,0,0,0.3)",
//   cursor: "pointer",
// };

// export default RightSocialBar;




import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsapp,FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const RightSocialBar = () => {
  return (
    <>
      {/* Color Animation */}
      <style>
        {`
          @keyframes colorChange {
            0% { color: #1877F2; }
            25% { color: #0A66C2; }
            50% { color: #6e5494; }
            75% { color: #ff0055; }
            100% { color: #1877F2; }
          }

          .animated-icon {
            animation: colorChange 4s infinite linear;
            transition: transform 0.3s ease;
            fill: currentColor;
          }

          .animated-icon:hover {
            transform: scale(1.2);
          }
        `}
      </style>

      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: "9999",
        }}
      >
        <div
          style={{
            backdropFilter: "blur(15px)",
            padding: "15px",
            borderRadius: "20px",
            boxShadow:
              "inset 0 0 20px rgba(255,255,255,0.2), 0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* FACEBOOK */}
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100072136780561"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <svg
                  viewBox="0 0 320 512"
                  className="animated-icon"
                  style={iconStyle}
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg> */}

                <FaFacebookF
  className="animated-icon"
  size={50}
  style={iconStyle}
/>
              </a>
            </li>

            {/* GITHUB */}
            <li>
              <a
                href="https://github.com/Wahaj1224"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <svg
                  viewBox="0 0 496 512"
                  className="animated-icon"
                  style={iconStyle}
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 71.7 205 171.1 238.3 12.5 2.3 17-5.4 17-12v-42.3c-69.6 15.1-84.3-33.6-84.3-33.6-11.4-29-27.8-36.7-27.8-36.7-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.2 58.5 27.2 72.8 20.8 2.3-16.2 8.7-27.2 15.8-33.5-55.6-6.3-114-27.8-114-123.8 0-27.4 9.8-49.8 25.8-67.4-2.6-6.3-11.2-31.7 2.4-66.1 0 0 21-6.7 68.8 25.7 19.9-5.5 41.2-8.3 62.4-8.4 21.2.1 42.5 2.9 62.4 8.4 47.8-32.4 68.8-25.7 68.8-25.7 13.6 34.4 5 59.8 2.4 66.1 16 17.6 25.8 40 25.8 67.4 0 96.2-58.5 117.5-114.2 123.7 8.9 7.7 16.8 22.9 16.8 46.2v68.5c0 6.7 4.5 14.4 17.1 12C424.3 457 496 362.9 496 252 496 113.3 389.9 8 251.2 8z" />
                </svg> */}

                <FaGithub
  className="animated-icon"
  size={50}
  style={iconStyle}
/>
              </a>
            </li>

            {/* LINKEDIN */}
            <li>
              <a
                href="https://www.linkedin.com/in/m-wahaj-yasin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <svg
                  viewBox="0 0 448 512"
                  className="animated-icon"
                  style={iconStyle}
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.8-53.8 53.79 53.79 0 0 1-53.8 53.8zM447.9 448h-92.4V302.4c0-34.7-12.5-58.4-43.7-58.4-23.8 0-38 16-44.3 31.4-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 61 0 106.7 39.8 106.7 125.4V448z" />
                </svg> */}
                <FaLinkedinIn
  className="animated-icon"
  size={50}
  style={iconStyle}
/>

              </a>
            </li>

            {/* WHATSAPP */}
            <li>
              <a
                href="https://wa.me/923229395631"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <svg
                  viewBox="0 0 448 512"
                  className="animated-icon"
                  style={iconStyle}
                >
                  <path d="M380.9 97.1C339-5.4 213.6-36.5 116.7 24.7 19.9 85.9-14.4 213.4 46.8 310.2l-27.5 100.4 102.7-26.9c95.3 52.6 217.2 15.3 268.6-80.4 51.3-95.7 15.2-214.2-80.7-265.6zM222.1 338c-31.6 0-62.5-8.5-89.6-24.6l-6.4-3.8-60.9 16 16.3-59.3-4.1-6.6c-23.6-37.7-27.2-84.2-9.4-125.3 28.7-66.4 106.5-97.2 172.9-68.5 66.4 28.7 97.2 106.5 68.5 172.9-20.9 48.4-68.4 79.2-120.3 79.2zm67.2-95.7c-3.7-1.8-21.8-10.8-25.2-12-3.4-1.2-5.9-1.8-8.4 1.8-2.5 3.7-9.6 12-11.8 14.5-2.2 2.5-4.4 2.8-8.1.9-3.7-1.8-15.5-5.7-29.5-18.2-10.9-9.7-18.2-21.7-20.4-25.4-2.2-3.7-.2-5.7 1.6-7.5 1.6-1.6 3.7-4.4 5.5-6.6 1.8-2.2 2.5-3.7 3.7-6.2 1.2-2.5.6-4.7-.3-6.6-.9-1.8-8.4-20.3-11.5-27.8-3-7.3-6-6.3-8.4-6.4h-7.2c-2.5 0-6.6.9-10 4.7-3.4 3.7-13.1 12.8-13.1 31.1 0 18.3 13.4 36 15.3 38.5 1.8 2.5 26.4 40.3 64 56.5 8.9 3.8 15.9 6 21.3 7.7 8.9 2.8 17 2.4 23.4 1.5 7.1-1.1 21.8-8.9 24.9-17.4 3.1-8.5 3.1-15.8 2.2-17.4-.9-1.6-3.4-2.5-7.2-4.4z" />
                </svg> */}

                <FaWhatsapp
  className="animated-icon"
  size={50}
  style={iconStyle}
/>


              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const iconStyle = {
  height: "50px",
  width: "50px",
  padding: "12px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.1)",
  boxShadow:
    "inset 0 0 10px rgba(255,255,255,0.4), 0 5px 10px rgba(0,0,0,0.3)",
  cursor: "pointer",
};

export default RightSocialBar;