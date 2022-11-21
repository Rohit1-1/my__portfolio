import React from "react";
import "./Introduction.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import img from "../Img/me.jpg"
export const Introduction = () => {
  console.log(img)
  return (
    <>
      <section >
        <div className="section" data-aos="fade-up"
     data-aos-duration="2000">
          <h2 className="section__title" id="#about">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src={img}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Rohit Kumar</span> from{" "}
                <span className="different"> Bhagalpur , Bihar</span>. I have
                completed HSC from New Horizon School ,    Bhagalpur , Bihar
              </h4>
              <h4>
                Apart from coding, some other activities that I love to do!
              </h4>
              <h4 className="different">
                Playing cricket{" "}
              </h4>
              <h4 className="different">
               
                Solving Problems{" "}
              </h4>
              <h4 className="different">
                
                  Watching K-Drama{" "}
              </h4>
              <h4 className="different">
                
                Listening to Music{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
