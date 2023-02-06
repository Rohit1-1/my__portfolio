import React from "react";
import "./Projects.css";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiChakraui
} from "react-icons/si";
import {GrReactjs} from 'react-icons/gr'
import anthro from "./Project_img/anthro.png"
import expedia from "./Project_img/expedia.png"
import weather from "./Project_img/weather.png"
import nine from "./Project_img/nine.png"
import blog from "./Project_img/blog.png"
import urlsort from "./Project_img/urlsort.png"
import { Box, Heading, Image } from "@chakra-ui/react";
export const Projects = () => {
  return (
    <>
      <Box className="section">
        <h2 className="section__title different">
          Projects
        </h2>



        <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box >
                <Image
                  src={nine}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2>911.com</h2>
              <p>
              911.com website is a healthcare platform. It provides services, such as an e-pharmacy, where you can buy different kinds of medicine and healthcare products.
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
                <GrReactjs/>
                <SiMongodb/>
                <SiExpress/>
                <SiChakraui/>
              </Box>
              <Box>
                <a
                  href="https://911-com.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rohit1-1/phobic-turn-8444"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>



        <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box >
                <Image
                  src={blog}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2>Blog Application</h2>
              <p>
              This is a blog application where you can read all blog posted by different users and you can post , update ,delete, your own blog. You can visit the link below to use it.
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
                <GrReactjs/>
                <SiMongodb/>
                <SiExpress/>
                <SiChakraui/>
              </Box>
              <Box>
                <a
                  href="https://mern-blogapp.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rohit1-1/MERN_BLOGAPP_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box >
                <Image
                  src={urlsort}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2 className="urlS">UrlSortner Application</h2>
              <p>
              This is a URL Shortener application where you make your url short , you can also give a unique keyname to the endpoint.
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
                <GrReactjs/>
                <SiMongodb/>
                <SiExpress/>
                <SiChakraui/>
              </Box>
              <Box>
                <a
                  href="https://urlsortner.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Rohit1-1/urlSortner_app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box>
                <Image
                  src={anthro}
                  alt="KryptoBuzz"
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2>Anthropologie</h2>
              <p>
              Anthropologie is a unique, full-lifestyle shopping destination
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </Box>
              <Box>
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
              </Box>
            </Box>
          </Box>
        </Box> */}
    
        <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box>
                <Image
                  src={weather}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2>Weather Application</h2>
              <p>
              It gives you the weather details of present day along with future forecast of seven days of searched city.
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </Box>
              <Box>
                <a
                  href="https://rohit1-1.github.io/WeatherApp_Clone/"
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
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="projects_container">
          <Box className="project">
            <Box className="project_videocontainer">
              <Box>
                <Image
                  src={expedia}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="project_information" >
              <h2>Expedia</h2>
              <p>
              Expedia Group, Inc. is an American online travel shopping company for consumer and small business travel. 
              </p>
              <Box>
              <SiJavascript/>
                <SiHtml5 />
                <SiCss3/>
              </Box>
              <Box>
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
              </Box>
            </Box>
          </Box>
        </Box>

      
      </Box>
    </>
  );
};
