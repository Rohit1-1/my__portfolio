import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ScrollToTop.css";
import { Box } from "@chakra-ui/react";

export const ScrollToTop = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <Box className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </Box>
  ) : null;
};
