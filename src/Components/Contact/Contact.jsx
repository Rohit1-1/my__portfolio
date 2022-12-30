import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Box, Tooltip } from "@chakra-ui/react";
export const Contact = () => {
  return (
    <>
      <Box className="section">
        <h2 className="section__title different" >
          Contacts
        </h2>
       
        <Box className="contactcontainer" >
        <Tooltip p={2} textAlign={'center'} w={'6rem'} bg='#4A5568'  color='white' label="Linkedin" hasArrow placement="top">
          <a
            href="https://www.linkedin.com/in/rohit-kumar-826365233/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          </Tooltip>
          <Tooltip p={2} textAlign={'center'} w={'6rem'} bg='#4A5568'  color='white' label="Github" hasArrow placement="top">
          <a
            href="https://github.com/Rohit1-1"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          </Tooltip>
          <Tooltip p={2} textAlign={'center'} w={'12rem'} bg='#4A5568'  color='white' label="rohittkumar232@gmail.com" hasArrow placement="top">
          <a
            href="mailto:rohittkumar232@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          </Tooltip>
          <Tooltip p={2} textAlign={'center'} w={'8rem'} bg='#4A5568'  color='white' label="+916204591216" hasArrow placement="top">
          <a href="tel:+916204591216" target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};
