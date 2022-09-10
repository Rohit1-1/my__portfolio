import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Github } from "./Components/About/Github";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  // const [showeffect,setShoweffect]=useState(false)
   React.useEffect(() => {
    Aos.init({ duration: 1500 });
   
   }, []);
  //  React.useEffect(() => {
  //   window.addEventListener("resize", checkWidth);
  //   console.log(window.innerWidth<601)
  //  // return () => window.removeEventListener("resize", checkWidth);
   
  //  }, [setShoweffect]);
  //  const checkWidth = () => {
  //   let val=window.innerWidth<601?true:false
  //   setShoweffect(val);
  //   console.log(showeffect,val)
  //   console.log(window.innerWidth)
    
    
  // };
  return (
    <div id="top" className={`${themename} app`}>
      <section 
         className="sticky" id="#home">
        <Header />
      </section>
      {/* <section 
         className="on" id="#home">
        <Header />
      </section> */}
      <main>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1400">
        <About />
        </div>
        {/* <Github /> */}
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
