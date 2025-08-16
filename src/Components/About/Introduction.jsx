import React from "react";
import "./Introduction.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import img from "../Img/me.png"
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import { Box, Heading, Image } from "@chakra-ui/react";
export const Introduction = () => {
  console.log(img)
  return (
    <>
      <section >
        <Box className="section">
          <Heading className="section__title" id="#about">
            About <span className="different">Me</span>
          </Heading>
          <Box className="introduction">
            <Box className="introduction_logocontainer">
              <Image
                src={img}
                alt="Images"
              />
            </Box>
            <Box className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Rohit Kumar</span> from{" "}
                <span className="different"> Bhagalpur , Bihar</span>. I have
                completed HSC from New Horizon School ,    Bhagalpur , Bihar
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different flex_extra">
               <VscDebugBreakpointLog/>&nbsp; Playing cricket 🏏{" "}
              </h4>
              <h4 className="different flex_extra">
               
              <VscDebugBreakpointLog/>&nbsp;Solving Problems {" "}
              </h4>
              <h4 className="different flex_extra">
                
              <VscDebugBreakpointLog/>&nbsp;Watching K-Drama 🎭{" "}
              </h4>
              <h4 className="different flex_extra">
                
              <VscDebugBreakpointLog/>&nbsp;Listening to Music 🎶{" "}
              </h4>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};
