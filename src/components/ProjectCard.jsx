import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
//   return (
  
//   <Col sm={6} md={4}>
//        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
//       <div className="proj-imgbx">
       
//           <img className="project_image_container" src={imgUrl} alt={title} />
       
//         <div className="proj-txtx">
//           <h4 style={{ color: "white" }}>{title}</h4>
//           <span style={{ color: "white" }}>{description}</span>
//         </div>
//       </div>
//        </a>
//     </Col>
//   );
// };
export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col sm={6} md={4} className="mb-5 px-3"> 
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <div className="project_image_container">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="proj-txtx">
            <h4 style={{ color: "white" }}>{title}</h4>
            <span style={{ color: "white" }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
