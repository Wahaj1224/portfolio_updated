
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { FaMagic,FaDownload, } from "react-icons/fa";
import logo from "../assets/img/LOGO.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >


                Projects
              </Nav.Link>

                 <Nav.Link
                href="#About"
                className={
                  activeLink === "About"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("About")}
              >
                About
              </Nav.Link>


            </Nav>

            <div className="navbar-buttons" style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "40px" }}>
              
              <a
                href="/Muhammad Wahaj Yasin Resume_Updated.pdf"
                download="Wahaj_Yasin_Resume.pdf"
                className="btn-link-reset"
              >
                <button className="button">
                  <FaDownload className="sparkle" />
                  <span className="text_button">Download Resume</span>
                </button>
              </a>

              <HashLink to="#connect" className="btn-link-reset">
                <button className="button">
                  <FaMagic className="sparkle" />
                  <span className="text_button">Let’s Connect</span>
                </button>
              </HashLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .navbar-buttons {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-left: 30px;
          flex-shrink: 0;
        }

        .btn-link-reset {
          text-decoration: none;
          display: inline-flex;
        }

        .button {
          --border_radius: 9999px;
          --transition: 0.4s ease;

          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;

          padding: 0.9rem 2rem;
          background: #1e1e1e;
          border-radius: var(--border_radius);
          border: 2px solid transparent;

          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition);
          overflow: hidden;
        }

        /* Gradient Hover Background */
        .button:hover {
          background: linear-gradient(
            90.21deg,
            rgba(170, 54, 124, 0.9) -5.91%,
            rgba(74, 47, 189, 0.9) 111.58%
          );

          box-shadow:
            0 0 15px rgba(170, 54, 124, 0.6),
            0 0 30px rgba(74, 47, 189, 0.6),
            0 0 50px rgba(74, 47, 189, 0.4);

          transform: translateY(-3px);
        }

        /* Gradient Border */
        // .button:hover {
        //   border: 2px solid;
        //   border-image: linear-gradient(
        //     90.21deg,
        //     rgba(170, 54, 124, 1),
        //     rgba(74, 47, 189, 1)
        //   ) 1;
        // }

        .button:active {
          transform: scale(0.97);
        }

        .sparkle {
          width: 1.1rem;
          color: white;
          z-index: 2;
        }

        .text_button {
          font-size: 1rem;
          color: white;
          z-index: 2;
        }

        /* Optional smooth gradient animation */
        .button:hover {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};