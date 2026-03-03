// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png";
// import { useInView } from 'react-intersection-observer';

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
//   };

// const spinnerWrapper = {
//   position: 'relative',
//   width: '140px',
//   height: '140px',
//   margin: '0 auto',
// };

// const spinnerRing = {
//   width: '140px',
//   height: '140px',
//   borderRadius: '50%',
//   backgroundImage: 'linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255))',
//   animation: 'spin 1.7s linear infinite',
//   filter: 'blur(1px)',
//   boxShadow: '0px -5px 20px rgb(186, 66, 255), 0px 5px 20px rgb(0, 225, 255)',
// };

// const spinnerInner = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '140px',
//   height: '140px',
//   borderRadius: '50%',
//   backgroundColor: 'rgb(36, 36, 36)',
//   filter: 'blur(10px)',
//   zIndex: 1,
// };

// const percentText = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   color: 'white',
//   fontWeight: 'bold',
//   fontSize: '24px', // Increased from 20px
//   zIndex: 2,
//   textShadow: '0 0 2px black',
// };


//   const SkillItem = ({ title, targetPercent }) => {
//     const [count, setCount] = useState(0);
//     const { ref, inView } = useInView({ triggerOnce: false });

//     useEffect(() => {
//       if (!inView) return;

//       let start = 0;
//       const end = parseInt(targetPercent.replace('%', ''));
//       const duration = 1000;
//       const stepTime = Math.max(Math.floor(duration / end), 15);

//       setCount(0); // reset when re-entering view

//       const timer = setInterval(() => {
//         start += 1;
//         setCount(start);
//         if (start === end) clearInterval(timer);
//       }, stepTime);

//       return () => clearInterval(timer);
//     }, [inView, targetPercent]);

//     return (
//       <div className="item" ref={ref} style={{ margin: '24px auto'}}>
//         <div style={spinnerWrapper}>
//           <div style={spinnerRing}></div>
//           <div style={spinnerInner}></div>
//           <div style={percentText}>{count}%</div>
//         </div>

//         <h5 style={{ marginTop: '20px' }}>{title}</h5>
//       </div>
//     );
//   };

//   return (
//     <section className="skill" id="skills">
//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>

//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               <h2>Skills</h2>
//               <p>
//                 Skilled in web and app development, AI/ML, and backend engineering using React, Node.js, Python,<br />
//                 and Laravel. Focused on building secure, responsive, and scalable digital solutions.
//               </p>
//               <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                 <SkillItem title="Web Development" targetPercent="95%" />
//                 <SkillItem title="App Development" targetPercent="90%" />
//                 <SkillItem title="UI/UX Design" targetPercent="85%" />
//                 <SkillItem title="AI/ML Engineer" targetPercent="80%" />
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   );
// };


// import React, { useEffect, useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import colorSharp from "../assets/img/color-sharp.png";
// import { useInView } from 'react-intersection-observer';
// import TrackVisibility from 'react-on-screen';
// import 'animate.css';

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
//   };

//   const spinnerWrapper = {
//     position: 'relative',
//     width: '140px',
//     height: '140px',
//     margin: '0 auto',
//   };

//   const spinnerRing = {
//     width: '140px',
//     height: '140px',
//     borderRadius: '50%',
//     backgroundImage: 'linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255))',
//     animation: 'spin 1.7s linear infinite',
//     filter: 'blur(1px)',
//     boxShadow: '0px -5px 20px rgb(186, 66, 255), 0px 5px 20px rgb(0, 225, 255)',
//   };

//   const spinnerInner = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '140px',
//     height: '140px',
//     borderRadius: '50%',
//     backgroundColor: 'rgb(36, 36, 36)',
//     filter: 'blur(10px)',
//     zIndex: 1,
//   };

//   const percentText = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '24px',
//     zIndex: 2,
//     textShadow: '0 0 2px black',
//   };

//   const spinKeyframes = `
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   `;

//   // Trigger animation every time heading comes into view
//   const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false });

//   const SkillItem = ({ title, targetPercent }) => {
//     const [count, setCount] = useState(0);
//     const { ref, inView } = useInView({ triggerOnce: false });

//     useEffect(() => {
//       if (!inView) return;

//       let start = 0;
//       const end = parseInt(targetPercent.replace('%', ''));
//       const duration = 1000;
//       const stepTime = Math.max(Math.floor(duration / end), 15);

//       setCount(0); // reset when re-entering view

//       const timer = setInterval(() => {
//         start += 1;
//         setCount(start);
//         if (start === end) clearInterval(timer);
//       }, stepTime);

//       return () => clearInterval(timer);
//     }, [inView, targetPercent]);

//     return (
//       <div className="item" ref={ref} style={{ margin: '24px auto' }}>
//         <div style={spinnerWrapper}>
//           <div style={{ ...spinnerRing, animationName: 'spin' }}></div>
//           <div style={spinnerInner}></div>
//           <div style={percentText}>{count}%</div>
//         </div>
//         <h5 style={{ marginTop: '20px' }}>{title}</h5>
//       </div>
//     );
//   };

//   const headingStyle = {
//     opacity: headingInView ? 1 : 0,
//     transform: headingInView ? 'translateY(0)' : 'translateY(30px)',
//     transition: 'all 0.8s ease-out',
//   };

//   return (
//     <section className="skill" id="skills">
//       <style>{spinKeyframes}</style>

//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               {/* <h2 ref={headingRef} style={headingStyle}>Skills</h2> */}

//                <TrackVisibility once={false} partialVisibility>
//                 {({ isVisible }) =>
//                   <h2 className={`text-white ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
//                     Skills
//                   </h2>
//                 }
//               </TrackVisibility>
//               <p>
//                 Skilled in web and app development, AI/ML, and backend engineering using React, Node.js, Python,<br />
//                 and Laravel. Focused on building secure, responsive, and scalable digital solutions.
//               </p>
//               <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                 <SkillItem title="Web Development" targetPercent="95%" />
//                 <SkillItem title="App Development" targetPercent="90%" />
//                 <SkillItem title="UI/UX Design" targetPercent="85%" />
//                 <SkillItem title="AI/ML Engineer" targetPercent="80%" />
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   );
// };


import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useInView } from 'react-intersection-observer';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false });

  const SkillItem = ({ title, targetPercent }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: false });

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const end = parseInt(targetPercent.replace('%', ''));
      const duration = 1000;
      const stepTime = Math.max(Math.floor(duration / end), 15);

      setCount(0);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [inView, targetPercent]);

    return (
      <div className="item" ref={ref} style={{ margin: '24px auto' }}>
        <div className="spinner-wrapper">
          <div className="spinner-ring"></div>
          <div className="spinner-inner"></div>
          <div className="percent-text">{count}%</div>
        </div>
        <h5 style={{ marginTop: '20px' }}>{title}</h5>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility once={false} partialVisibility>
                {({ isVisible }) => (
                  <>
                    <h2 className={`text-white ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                      Skills
                    </h2>
                    <p className={`${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                      Skilled in web and app development, AI/ML, and backend engineering using React, Node.js, Python,<br />
                      and Laravel. Focused on building secure, responsive, and scalable digital solutions.
                    </p>
                  </>
                )}
              </TrackVisibility>
              
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <SkillItem title="Full Stack Development" targetPercent="95%" />
                <SkillItem title="AI & ML Engineer" targetPercent="94%" />
                 <SkillItem title="DevOps & Cloud Computing" targetPercent="95%" />
                <SkillItem title="Web Development" targetPercent="95%" />
                <SkillItem title="App Development" targetPercent="90%" />
               
                
              </Carousel>    
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
