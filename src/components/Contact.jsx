
// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation rules
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{7,15}$/;

//     if (!formDetails.firstName.trim() || !formDetails.lastName.trim()) {
//       setStatus({ success: false, message: "Name fields cannot be empty." });
//       return;
//     }

//     if (!emailRegex.test(formDetails.email)) {
//       setStatus({ success: false, message: "Please enter a valid email address." });
//       return;
//     }

//     if (!phoneRegex.test(formDetails.phone)) {
//       setStatus({ success: false, message: "Phone number must contain 7–15 digits only." });
//       return;
//     }

//     if (!formDetails.message.trim()) {
//       setStatus({ success: false, message: "Message cannot be empty." });
//       return;
//     }

//     setButtonText("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });

//       setButtonText("Send");
//       setFormDetails(formInitialDetails);

//       if (response.ok) {
//         setStatus({ success: true, message: "Message sent successfully!" });
//       } else {
//         setStatus({ success: false, message: "Something went wrong. Please try again later." });
//       }
//     } catch (error) {
//       setButtonText("Send");
//       setStatus({ success: false, message: "Error sending message. Please check your connection or try again." });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="First Name"
//                           onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lastName}
//                           placeholder="Last Name"
//                           onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email Address"
//                           onChange={(e) => onFormUpdate('email', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Phone No."
//                           onChange={(e) => onFormUpdate('phone', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Message"
//                           onChange={(e) => onFormUpdate('message', e.target.value)}
//                         ></textarea>
//                         <button type="submit"><span>{buttonText}</span></button>
//                       </Col>
//                       {
//                         status.message &&
//                         <Col>
//                           <p className={status.success === false ? "danger" : "success"}>
//                             {status.message}
//                           </p>
//                         </Col>
//                       }
//                     </Row>
//                   </form>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };


// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import '../contact.css';

// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [popup, setPopup] = useState({ visible: false, message: '', success: false });

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{7,15}$/;

//     if (!formDetails.firstName.trim() || !formDetails.lastName.trim()) {
//       return showPopup("Name fields cannot be empty.", false);
//     }

//     if (!emailRegex.test(formDetails.email)) {
//       return showPopup("Please enter a valid email address.", false);
//     }

//     if (!phoneRegex.test(formDetails.phone)) {
//       return showPopup("Phone number must contain 7–15 digits only.", false);
//     }

//     if (!formDetails.message.trim()) {
//       return showPopup("Message cannot be empty.", false);
//     }

//     setButtonText("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });

//       setButtonText("Send");
//       setFormDetails(formInitialDetails);

//       if (response.ok) {
//         showPopup("Message sent successfully!", true);
//       } else {
//         showPopup("Something went wrong. Please try again later.", false);
//       }
//     } catch (error) {
//       setButtonText("Send");
//       showPopup("Error sending message. Please check your connection.", false);
//     }
//   };

//   const showPopup = (message, success) => {
//     setPopup({ visible: true, message, success });
//   };

//   const closePopup = () => {
//     setPopup({ ...popup, visible: false });
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                         <button type="submit"><span>{buttonText}</span></button>
//                       </Col>
//                     </Row>
//                   </form>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>

//         {/* Popup Modal */}
//         {popup.visible && (
//           <div className="popup-overlay" onClick={closePopup}>
//             <div className="popup-box" onClick={(e) => e.stopPropagation()}>
//               <h4 style={{ color: popup.success ? 'green' : 'red' }}>{popup.success ? "Success!" : "Error"}</h4>
//               <p>{popup.message}</p>
//               <button onClick={closePopup} className="popup-btn">Close</button>
//             </div>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// };


// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import '../contact.css'; // Your custom popup styles
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [popup, setPopup] = useState({ visible: false, message: '', success: false });

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{7,15}$/;

//     if (!formDetails.firstName.trim() || !formDetails.lastName.trim()) {
//       return showPopup("Name fields cannot be empty.", false);
//     }

//     if (!emailRegex.test(formDetails.email)) {
//       return showPopup("Please enter a valid email address.", false);
//     }

//     if (!phoneRegex.test(formDetails.phone)) {
//       return showPopup("Phone number must contain 7–15 digits only.", false);
//     }

//     if (!formDetails.message.trim()) {
//       return showPopup("Message cannot be empty.", false);
//     }

//     setButtonText("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });

//       setButtonText("Send");
//       setFormDetails(formInitialDetails);

//       if (response.ok) {
//         showPopup("Message sent successfully!", true);
//       } else {
//         showPopup("Something went wrong. Please try again later.", false);
//       }
//     } catch (error) {
//       setButtonText("Send");
//       showPopup("Error sending message. Please check your connection.", false);
//     }
//   };

//   const showPopup = (message, success) => {
//     setPopup({ visible: true, message, success });
//   };

//   const closePopup = () => {
//     setPopup({ ...popup, visible: false });
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
//                         <button type="submit"><span>{buttonText}</span></button>
//                       </Col>
//                     </Row>
//                   </form>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>

//         {/* Popup Modal */}
//         {popup.visible && (
//           <div className="popup-overlay" onClick={closePopup}>
//             <div className="popup-box" onClick={(e) => e.stopPropagation()}>
//               <h4 className={popup.success ? "popup-success" : "popup-error"}>
//                 {popup.success ? "Success!" : "Error"}
//               </h4>
//               <p>{popup.message}</p>
//               <button onClick={closePopup} className="popup-btn">Close</button>
//             </div>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// };


// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import contactImg from "../assets/img/contact-img.svg";
// import contactGif from "../assets/img/contact_img.gif";

// import 'animate.css';
// import '../contact.css';
// import TrackVisibility from 'react-on-screen';

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Send');
//   const [popup, setPopup] = useState({ visible: false, message: '', success: false });
//   const [isFadingOut, setIsFadingOut] = useState(false); 

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value
//     });
//   };

//   const showPopup = (message, success) => {

//      setIsFadingOut(false);
     
//     setPopup({ visible: true, message, success });
      
//     setTimeout(() => {
      
//     setIsFadingOut(true);

//     setPopup({ visible: false, message: '', success: false });
//   }, 2500);
//   };


//   const closePopup = () => {
//   setIsFadingOut(true); // trigger fade-out
//   setTimeout(() => {
//     setPopup({ visible: false, message: '', success: false });
//     setIsFadingOut(false);
//   }, 400);
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{7,15}$/;

//     if (!formDetails.firstName.trim()) {
//       return showPopup("First name cannot be empty.", false);
//     }

//     if (!formDetails.lastName.trim()) {
//       return showPopup("Last name cannot be empty.", false);
//     }

//     if (!emailRegex.test(formDetails.email)) {
//       return showPopup("Please enter a valid email address.", false);
//     }

//     if (!phoneRegex.test(formDetails.phone)) {
//       return showPopup("Phone number must contain 7–15 digits only.", false);
//     }

//     if (!formDetails.message.trim()) {
//       return showPopup("Message cannot be empty.", false);
//     }

//     setButtonText("Sending...");

//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });

//       setButtonText("Send");
//       setFormDetails(formInitialDetails);

//       if (response.ok) {
//         showPopup("Message sent successfully!", true);
//       } else {
//         showPopup("Something went wrong. Please try again later.", false);
//       }
//     } catch (error) {
//       setButtonText("Send");
//       showPopup("Error sending message. Please check your connection.", false);
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <img
//                   className={isVisible ? "animate__animated animate__zoomIn" : ""}
//                   // src={contactImg}
//                   src={contactGif}
//                   alt="Contact Us"
//                 />
//               }
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="First Name"
//                           onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lastName}
//                           placeholder="Last Name"
//                           onChange={(e) => onFormUpdate('lastName', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email Address"
//                           onChange={(e) => onFormUpdate('email', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Phone No."
//                           onChange={(e) => onFormUpdate('phone', e.target.value)}
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Message"
//                           onChange={(e) => onFormUpdate('message', e.target.value)}
//                         ></textarea>
//                         <button type="submit"><span>{buttonText}</span></button>
//                       </Col>
//                     </Row>
//                   </form>
//                 </div>
//               }
//             </TrackVisibility>
//           </Col>
//         </Row>

//         {/* Popup Modal */}
//         {popup.visible && (
//           <div  className={`popup-overlay ${isFadingOut ? 'fade-out' : ''}`}  onClick={closePopup}>
//             <div className="popup-box" onClick={(e) => e.stopPropagation()}>
//               <h4 style={{ color: popup.success ? 'green' : 'red' }}>
//                 {/* {popup.success ? "Success!" : "Error"} */}
//                 {popup.message}
//               </h4>
//               {/* <p>{popup.message}</p> */}
//               {/* <button onClick={closePopup} className="popup-btn">Close</button> */}
//             </div>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// };


import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import '../contact.css';

// Import your video file (or use a public URL if it's in /public folder)
import contactVideo from "../assets/img/contact3.mp4";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [popup, setPopup] = useState({ visible: false, message: '', success: false });
  const [isFadingOut, setIsFadingOut] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const showPopup = (message, success) => {
    setIsFadingOut(false);
    setPopup({ visible: true, message, success });

    setTimeout(() => {
      setIsFadingOut(true);
      setPopup({ visible: false, message: '', success: false });
    }, 2500);
  };

  const closePopup = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setPopup({ visible: false, message: '', success: false });
      setIsFadingOut(false);
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!formDetails.firstName.trim()) {
      return showPopup("First name cannot be empty.", false);
    }
    if (!formDetails.lastName.trim()) {
      return showPopup("Last name cannot be empty.", false);
    }
    if (!emailRegex.test(formDetails.email)) {
      return showPopup("Please enter a valid email address.", false);
    }
    if (!phoneRegex.test(formDetails.phone)) {
      return showPopup("Phone number must contain 7–15 digits only.", false);
    }
    if (!formDetails.message.trim()) {
      return showPopup("Message cannot be empty.", false);
    }

    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.ok) {
        showPopup("Message sent successfully!", true);
      } else {
        showPopup("Something went wrong. Please try again later.", false);
      }
    } catch (error) {
      setButtonText("Send");
      showPopup("Error sending message. Please check your connection.", false);
    }
  };

  return (
    <section className="contact" id="connect"  >
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="video-overlay"></div> */}
      </div>

      {/* <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2 className="text-white">Get In Touch</h2>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {popup.visible && (
          <div className={`popup-overlay ${isFadingOut ? 'fade-out' : ''}`} onClick={closePopup}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <h4 style={{ color: popup.success ? 'green' : 'red' }}>
                {popup.message}
              </h4>
            </div>
          </div>
        )}
      </Container> */}

      {/* <h2  >

             GET IN TOUCH
          </h2> */}

     <Container>
  {/* Heading Row */}
  <Row>
    <Col className="text-center mb-4">
      <TrackVisibility>
        {({ isVisible }) =>
          <h2 className={`text-white ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
            GET IN TOUCH
          </h2>
        }
      </TrackVisibility>
    </Col>
  </Row>

  {/* Centered Form */}
  <Row className="justify-content-center">
    <Col xs={12} md={8} lg={6}>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                {/* <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col> */}

                <Col size={12} className="px-1">
  <textarea
    rows="6"
    value={formDetails.message}
    placeholder="Message"
    onChange={(e) => onFormUpdate('message', e.target.value)}
  ></textarea>
  <div className="text-center mt-3">
    <button type="submit"><span>{buttonText}</span></button>
  </div>
</Col>
              </Row>
            </form>
          </div>
        }
      </TrackVisibility>
    </Col>
  </Row>

  {/* Popup */}
  {popup.visible && (
    <div className={`popup-overlay ${isFadingOut ? 'fade-out' : ''}`} onClick={closePopup}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <h4 style={{ color: popup.success ? 'green' : 'red' }}>
          {popup.message}
        </h4>
      </div>
    </div>
  )}
</Container>


    </section>
  );
};
