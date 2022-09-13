import React from "react";
import "./Projects.css";
import {
  SiCss3,
  SiHtml5,
  SiJavascript
} from "react-icons/si";
import anthro from "./Project_img/anthro.png"
import expedia from "./Project_img/expedia.png"
import weather from "./Project_img/weather.png"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="zoom-out-right">
                <img
                  src={anthro}
                  alt="KryptoBuzz"
                />
              </div>
            </div>
            <div className="project_information" data-aos="zoom-out-right">
              <h2>Anthropologie</h2>
              <p>
              Anthropologie is a unique, full-lifestyle shopping destination
              </p>
              <div>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://wonderful-malasada-e63214.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Mufadal03/Anthropologie-Unit3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="zoom-out-right">
                <img
                  src={expedia}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="zoom-out-right">
              <h2>Expedia</h2>
              <p>
              Expedia Group, Inc. is an American online travel shopping company for consumer and small business travel. 
              </p>
              <div>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://warm-gecko-dde4da.netlify.app/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rohit1-1/Expedia_project-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="zoom-out-right">
                <img
                  src={weather}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="zoom-out-right">
              <h2>Weather Application</h2>
              <p>
              It gives you the weather details of present day along with future forecast of seven days of searched city.
              </p>
              <div>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </div>
              <div>
                <a
                  href="https://rohit1-1.github.io/Weather-forecast/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rohit1-1/Weather-forecast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
