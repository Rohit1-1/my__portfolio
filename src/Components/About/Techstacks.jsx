import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiChakraui,
  SiPostman
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap} from "react-icons/bs";
import { Box } from "@chakra-ui/react";

export const Techstacks = () => {
  return (
    <>
      <Box className="section main">
        <h2 className="section__title different">Skills</h2>
        <Box className="techsection">
          <Box>
            <SiJavascript />
            <h5>Javascript</h5>
          </Box>
          <Box>
            <SiHtml5 />
            <h5>HTML</h5>
          </Box>
          <Box>
            <DiCss3 />
            <h5>CSS</h5>
          </Box>
          <Box>
            <FaReact />
            <h5>React</h5>
          </Box>
          <Box>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </Box>
          <Box>
            <DiMongodb />
            <h5>MongoDb</h5>
          </Box>
          <Box>
            <SiRedux />
            <h5>Redux</h5>
          </Box>
          <Box>
            <SiExpress />
            <h5>Express</h5>
          </Box>
          <Box>
          <SiPostman/>
            <h5>Postman</h5>
          </Box>
          <Box>
            <SiChakraui/>
            <h5>Chakra Ui</h5>
          </Box>
          <Box>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </Box>
          <Box>
            <VscGithub />
            <h5>Github</h5>
          </Box>
        </Box>
      </Box>
    </>
  );
};
