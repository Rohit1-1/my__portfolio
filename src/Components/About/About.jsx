import React from "react";
import "./About.css";
import { Type } from "./Type";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import resume from "../Navbar/Resume/RESUME.pdf"
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 >
          Hi, I am <span className="about__name">Rohit Kumar</span>
        </h1>
        <Type />
        <p className="about__desc">
          A passionate Full Stack Software Developer having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs / MongoDb
          and some other cool libraries and frameworks.
        </p>
        <div className="about__contact center" >
          <a href={resume}
             download={resume}>
            <button className="resume_btn">RESUME</button>
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
