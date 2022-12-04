import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header center" id="navbar">
        <h3 className="logo">
          <a  className="link">
            Rohit Kumar
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
