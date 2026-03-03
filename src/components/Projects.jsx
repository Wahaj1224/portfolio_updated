// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import Furni from "../assets/img/Furni5.png";
// import Shoes from "../assets/img/shoes2.png";
// import Sports from "../assets/img/sports_week.png";
// import Car from "../assets/img/car_web.png";
// import Cancer_detect from "../assets/img/c1.jpeg";
// import Skin_Cancer from "../assets/img/skin_cancer_3.png";
// import { useState } from "react";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// import Seeing_Unseen from "../assets/img/Seeing_Unseen.png";
// import DevOps from "../assets/img/DevOps.png";
// import OpenVPN from "../assets/img/OpenVPN.jpg";
// import SoftEther from "../assets/img/SoftEther.png";

// export const Projects = () => {

//    const [hovered, setHovered] = useState(false);
//   const [btnHovered, setBtnHovered] = useState(false);

//    const projects = [

//     {
//   title: "Seeing The Unseen – AI Assistant",
//   description: "AI Assistant for Visually Impaired (Flutter & Python)",
//   imgUrl: Seeing_Unseen,
//   githubUrl: "https://github.com/Wahaj1224/FYP_COMPLETE",
// },

// {
//   title: "E-commerce DevOps CI/CD Pipeline",
//   description: "AWS | Jenkins | Docker | Kubernetes | Terraform | Monitoring",
//   imgUrl: DevOps,
//   githubUrl: "https://github.com/Wahaj1224/mern-ecommerce-k8s",
// },{
//   title: "OpenVPN Server with Node.js API",
//   description: "AWS | REST APIs | VPN System",
//   imgUrl: OpenVPN,
//   githubUrl: "https://github.com/Wahaj1224/VPN_APP",
// },
// {
//   title: "SoftEther VPN & Custom Admin Panel",
//   description: "Cloud & Network Systems Development",
//   imgUrl: SoftEther,
//   githubUrl: "https://github.com/Wahaj1224/Softether-Admin",
// },
//     {
//       title: "Furniture Website",
//       description: "Design & Development",
//       imgUrl: Furni,
//       githubUrl: "https://github.com/Wahaj1224/Furniture_website",
//     },
//     {
//       title: "Shoes Ecommerce Website",
//       description: "Design & Development",
//       imgUrl: Shoes,
//       githubUrl: "https://github.com/Wahaj1224/React_Shoes_website",
//     },
//     {
//       title: "Breast Cancer Detection",
//       description: "Ai & Machine Learning",
//       imgUrl: Cancer_detect,
//       githubUrl: "https://github.com/Wahaj1224/Breast_Cancer_Detection-Using-Neral-Networks",
//     },
//     {
//       title: "Skin Cancer Detection ",
//       description: "Ai & Machine Learning",
//       imgUrl: Skin_Cancer,
//       githubUrl: "https://github.com/Wahaj1224/Skin_Cancer_Detection-Using-Yolo11-accuracy-89.8_Percent",
//     },
//     {
//       title: "Event Management",
//       description: "UI/UX",
//       imgUrl: Sports,
//       githubUrl: "https://www.behance.net/gallery/229608591/Sports_Week_Website(design)",
//     },
//     {
//       title: "Carvilla Website ",
//       description: "UI/UX",
//       imgUrl: Car,
//       githubUrl: "https://www.behance.net/gallery/229609245/Car_website_UIUX",
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>A showcase of my work in web development , app development , AI/ML , UI/UX , and backend engineering. These projects highlight my skills as a software engineer, building responsive websites, mobile apps, and intelligent systems with clean, secure, and scalable code.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <div style={{ marginTop: '130px' }}>
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
                             
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />

                           
//                             )

                            
//                           })
//                         }
//                       </Row>
//                       </div>
//                     </Tab.Pane>





                    

//                         {/* 🔥 PURPLE HORIZONTAL GITHUB CARD */}

//                          <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{
//           width: "100%",
//           maxWidth: "900px",
//           background: "#1a0128",
//           borderRadius: "20px",
//           padding: "40px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           border: "1px solid rgba(168,85,247,0.3)",
//           // Glow on hover
//           boxShadow: hovered
//             ? "0 0 60px rgba(168,85,247,0.8)"
//             : "0 0 40px rgba(168,85,247,0.4)",
//           transition: "box-shadow 0.3s ease-in-out",
//         }}
//       >
//         {/* LEFT SIDE */}
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <div
//             style={{
//               width: "90px",
//               height: "90px",
//               borderRadius: "50%",
//               background: "#a855f7",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginRight: "30px",
//               boxShadow: hovered ? "0 0 30px #a855f7" : "0 0 20px #a855f7",
//               transition: "box-shadow 0.3s ease-in-out",
//             }}
//           >
//             <svg width="50" height="50" fill="white" viewBox="0 0 16 16">
//               <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
//             </svg>
//           </div>

//           <div>
//             <h3 style={{ color: "white", margin: 0 }}>Wahaj Yasin</h3>
//             <p style={{ color: "#c084fc", margin: 0 }}>Full Stack Developer</p>
//             <div style={{ marginTop: "10px", color: "#ddd" }}>
//               <span style={{ marginRight: "20px" }}>Repositories: 25+</span>
//               <span>Watch my porjects </span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT BUTTON */}
//         <a
//           onMouseEnter={() => setBtnHovered(true)}
//           onMouseLeave={() => setBtnHovered(false)}
//           href="https://github.com/Wahaj1224"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             padding: "14px 30px",
//             background: btnHovered ? "#c084fc" : "#a855f7",
//             color: "white",
//             borderRadius: "30px",
//             textDecoration: "none",
//             fontWeight: "bold",
//             letterSpacing: "1px",
//             boxShadow: btnHovered
//               ? "0 0 30px #c084fc"
//               : "0 0 20px #a855f7",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           VIEW GITHUB
//         </a>
//       </div>
//     </div>
             
//                       {/* 🔥 PURPLE HORIZONTAL GITHUB CARD */}
















//                     <Tab.Pane eventKey="second">

//                       <p>No More Projects to Show</p>

//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>No More Projects to Show</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }






import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import colorSharp2 from "../assets/img/color-sharp2.png";
import Furni from "../assets/img/Furni5.png";
import Shoes from "../assets/img/shoes2.png";
import Sports from "../assets/img/sports_week.png";
import Car from "../assets/img/car_web.png";
import Cancer_detect from "../assets/img/c1.jpeg";
import Skin_Cancer from "../assets/img/skin_cancer_3.png";
import Seeing_Unseen from "../assets/img/Seeing_Unseen.jpeg";
import Seeing_Unseen1 from "../assets/img/Seeing_Unseen1.png";
import DevOps from "../assets/img/DevOps.png";
import OpenVPN from "../assets/img/OpenVPN.jpg";
import OpenVPN1 from "../assets/img/OpenVPN1.png"; 
import SoftEther from "../assets/img/SoftEther.png";
import SoftEther1 from "../assets/img/SoftEther1.png";


export const Projects = () => {

  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const projects = [
    {
      title: "Seeing The Unseen – AI Assistant",
      description: "AI Assistant for Visually Impaired (Flutter & Python)",
      imgUrl: Seeing_Unseen1,
      githubUrl: "https://github.com/Wahaj1224/FYP_COMPLETE",
    },
    {
      title: "E-commerce DevOps CI/CD Pipeline",
      description: "AWS | Jenkins | Docker | Kubernetes | Terraform | Monitoring",
      imgUrl: DevOps,
      githubUrl: "https://github.com/Wahaj1224/mern-ecommerce-k8s",
    },
    {
      title: "OpenVPN Server with Node.js API",
      description: "AWS | REST APIs | VPN System",
      imgUrl: OpenVPN1,
      githubUrl: "https://github.com/Wahaj1224/VPN_APP",
    },
    {
      title: "SoftEther VPN & Custom Admin Panel",
      description: "Cloud & Network Systems Development",
      imgUrl: SoftEther1,
      githubUrl: "https://github.com/Wahaj1224/Softether-Admin",
    },
    {
      title: "Furniture Website",
      description: "Design & Development",
      imgUrl: Furni,
      githubUrl: "https://github.com/Wahaj1224/Furniture_website",
    },
    {
      title: "Shoes Ecommerce Website",
      description: "Design & Development",
      imgUrl: Shoes,
      githubUrl: "https://github.com/Wahaj1224/React_Shoes_website",
    },
    {
      title: "Breast Cancer Detection",
      description: "AI & Machine Learning",
      imgUrl: Cancer_detect,
      githubUrl: "https://github.com/Wahaj1224/Breast_Cancer_Detection-Using-Neral-Networks",
    },
    {
      title: "Skin Cancer Detection",
      description: "AI & Machine Learning",
      imgUrl: Skin_Cancer,
      githubUrl: "https://github.com/Wahaj1224/Skin_Cancer_Detection-Using-Yolo11-accuracy-89.8_Percent",
    },
    {
      title: "Event Management",
      description: "UI/UX",
      imgUrl: Sports,
      githubUrl: "https://www.behance.net/gallery/229608591/Sports_Week_Website(design)",
    },
    {
      title: "Carvilla Website",
      description: "UI/UX",
      imgUrl: Car,
      githubUrl: "https://www.behance.net/gallery/229609245/Car_website_UIUX",
    },
  ];

  // 🔥 Split projects into groups of 6
  const tab1Projects = projects.slice(0, 6);
  const tab2Projects = projects.slice(6, 12);
  const tab3Projects = projects.slice(12, 18);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    A showcase of my work in web development, app development,
                    AI/ML, DevOps in Cloud Computing, and backend engineering.
                  </p>

                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* TAB 1 */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* TAB 2 */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.length > 0 ? (
                            tab2Projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))
                          ) : (
                            <p className="text-center">No More Projects</p>
                          )}
                        </Row>
                      </Tab.Pane>

                      {/* TAB 3 */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {tab3Projects.length > 0 ? (
                            tab3Projects.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))
                          ) : (
                            <p className="text-center">No More Projects</p>
                          )}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>

                  {/* 🔥 GITHUB CARD */}
                  {/* <div style={{ marginTop: "80px", textAlign: "center" }}>
                    <a
                      href="https://github.com/Wahaj1224"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "15px 35px",
                        background: "#a855f7",
                        color: "white",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      View My GitHub
                    </a>
                  </div> */}





                         <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#1a0128",
          borderRadius: "20px",
          padding: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(168,85,247,0.3)",
          // Glow on hover
          boxShadow: hovered
            ? "0 0 60px rgba(168,85,247,0.8)"
            : "0 0 40px rgba(168,85,247,0.4)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              background: "#a855f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "30px",
              boxShadow: hovered ? "0 0 30px #a855f7" : "0 0 20px #a855f7",
              transition: "box-shadow 0.3s ease-in-out",
            }}
          >
            <svg width="50" height="50" fill="white" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>

          <div>
            <h3 style={{ color: "white", margin: 0 }}>Wahaj Yasin</h3>
            <p style={{ color: "#c084fc", margin: 0 }}>Full Stack Developer</p>
            <div style={{ marginTop: "10px", color: "#ddd" }}>
              <span style={{ marginRight: "20px" }}>Repositories: 25+</span>
              <span>Watch my porjects </span>
            </div>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <a
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          href="https://github.com/Wahaj1224"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "14px 30px",
            background: btnHovered ? "#c084fc" : "#a855f7",
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            letterSpacing: "1px",
            boxShadow: btnHovered
              ? "0 0 30px #c084fc"
              : "0 0 20px #a855f7",
            transition: "all 0.3s ease-in-out",
          }}
        >
          VIEW GITHUB
        </a>
      </div>
    </div>










                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};