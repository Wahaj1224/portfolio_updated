// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import myavatar from "../assets/img/my_avatar.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { HashLink } from 'react-router-hash-link';
// // import Avatar3D from './AvaturnBuilder'; 
// import AvaturnBuilder from "./AvaturnBuilder";
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               // <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//               //   <span className="tagline">Welcome to my Portfolio</span>
//               //   <h1>{`Hi! I'm Wahaj`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "App Designer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
//               //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//               //     <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               // </div>}
//                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//   <span className="tagline">Welcome to my Portfolio</span>
//   <h1>
//     {`Hi! I'm Wahaj`}
//     <br />
//     <span
//       className="txt-rotate"
//       dataPeriod="1000"
//       data-rotate='[ "Web Developer", "App Designer", "Software Engineer" ]'
//     >
//       <span className="wrap">{text}</span>
//     </span>
//   </h1>
//   <p>
//     Aspiring software engineer with a strong foundation in web development, secure coding practices, and backend
// technologies. Experienced in building RESTful APIs, implementing JWT-based authentication, and performing secure
// database operations. Currently expanding knowledge in artificial intelligence and machine learning, with a growing
// interest in model training, algorithms, and data-driven solutions. Passionate about building efficient, secure, and
// intelligent systems.Seeking opportunities to contribute to innovative projects and grow in dynamic development environments.



//   </p>
//    <Router>
//   <HashLink to='#connect' style={{ textDecoration: 'none' }}>
//   <button onClick={() => console.log('connect')}>
//     Let’s Connect <ArrowRightCircle size={25} />
//   </button>
//      </HashLink>
// </Router>

// </div>}

              
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   {/* <img src={headerImg} alt="Header Img"/> */}
//                   {/* <img src={myavatar} alt="Header Img"/> */}
//                    {/* <Avatar3D /> */}
//                       <AvaturnBuilder />
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }



















// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { HashLink } from 'react-router-hash-link';
// import AvaturnBuilder from "./AvaturnBuilder";
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

// // Import your MP4 video
// import bannerVideo from "../assets/img/aboutus.mp4";

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       {/* Video Background */}
//       <div className="video-container">
//         <video autoPlay muted loop playsInline>
//           <source src={bannerVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="video-overlay" />

//       </div>

//       {/* Banner Content */}
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <span className="tagline">Welcome to my Portfolio</span>
//                   <h1>
//                     {`Hi! I'm Wahaj`}
//                     <br />
//                     <span
//                       className="txt-rotate"
//                       dataPeriod="1000"
//                       data-rotate='[ "Web Developer", "App Designer", "Software Engineer" ]'
//                     >
//                       <span className="wrap">{text}</span>
//                     </span>
//                   </h1>
//                   <p>
//                     Aspiring software engineer with a strong foundation in web development, secure coding practices, and backend
//                     technologies. Experienced in building RESTful APIs, implementing JWT-based authentication, and performing secure
//                     database operations. Currently expanding knowledge in artificial intelligence and machine learning, with a growing
//                     interest in model training, algorithms, and data-driven solutions. Passionate about building efficient, secure, and
//                     intelligent systems. Seeking opportunities to contribute to innovative projects and grow in dynamic development environments.
//                   </p>
//                   <Router>
//                     <HashLink to='#connect' style={{ textDecoration: 'none' }}>
//                       <button onClick={() => console.log('connect')}>
//                         Let’s Connect <ArrowRightCircle size={25} />
//                       </button>
//                     </HashLink>
//                   </Router>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <AvaturnBuilder />
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };





import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import AvaturnBuilder from "./AvaturnBuilder";

// Import your MP4 video
import bannerVideo from "../assets/img/aboutus.mp4";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Devops Engineer", "Web/App Developer", "AI/ML Enthusiast" ];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prev) => prev - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
      </div>

      {/* Banner Content */}
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Wahaj`}
                    <br />
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "FUll Stack Developer", "Devops Engineer", "Web/App Developer", "AI/ML Enthusiast" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Aspiring Software Engineer with strong expertise in full-stack development, 
                  cloud-native infrastructure, and AI-driven systems. Experienced in building 
                  scalable MERN stack applications with secure RESTful APIs and JWT authentication,
                   deploying containerized solutions using Docker and Kubernetes, and implementing CI/CD
                    pipelines on AWS with Jenkins, Terraform, and Ansible. Proficient in developing and 
                    deploying machine learning and computer vision models, including YOLO-based detection
                     and neural networks, with real-time inference and monitoring using Prometheus and 
                     Grafana. Passionate about designing secure, scalable, and intelligent systems, and 
                     eager to contribute to innovative, high-impact development environments.
                  </p>

                  {/* Smooth scroll to #connect via HashLink.
                      Use absolute path to ensure it works from any route. */}
                  <HashLink smooth to="/#connect" style={{ textDecoration: 'none' }}>
                    <button onClick={() => console.log('connect')}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <AvaturnBuilder />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};