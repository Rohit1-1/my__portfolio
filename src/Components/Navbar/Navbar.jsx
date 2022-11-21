import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import resume from "./Resume/RESUME.pdf"


export const Navbar = () => {
 const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav  className="center nav" id="navbar">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
           
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
          
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
            {/* <Link activeClass="active" to="#about" spy={true} delay={10} smooth={true}>
                Home
            </Link> */}
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
            href={resume}
             download={resume}
              onClick={toggleNavList}
              className="link link--nav"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
