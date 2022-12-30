import React from "react";
import "./About.css";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import {AiOutlineCloudDownload} from 'react-icons/ai'
import Rohit_Kumar_Resume from "../Navbar/Resume/Rohit_Kumar_Resume.pdf"
import { Box } from "@chakra-ui/react";
export const About = () => {
  return (
    <>
      <Box className="about center" id="home">
        <h1 >
          Hi, I am <span className="about__name">Rohit Kumar </span>
        </h1>
         <h1>I am a<span className="about__name"> full-stack developer</span></h1>
        <p className="about__desc">
          A passionate Full Stack Software Developer having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs / MongoDb
          and some other cool libraries and frameworks.I love to transform ideas into reality using code and developing web-apps using the latest front-end technologies and full fleged APIs.
          Currently I'm learning Typescript and Chakra UI.
        </p>
        <Box className="about__contact center" >
          <a href={Rohit_Kumar_Resume}
             download="Rohit_Kumar_Resume.pdf">
            <button className="resume_btn">Download CV &nbsp;
            <AiOutlineCloudDownload size={19}></AiOutlineCloudDownload></button>
          </a>
        </Box>
      </Box>
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
