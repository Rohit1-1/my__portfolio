import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Github } from "./Components/About/Github";
export default function App() {
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
    <div id="top" className={`light app`}>
      <section 
         className="sticky" id="#home">
        <Header />
      </section>
      {/* <section 
         className="on" id="#home">
        <Header />
      </section> */}
      <main>
        <div className="mrgn_top">
        <About />
        </div>
        <div className="mrgn_top">
        <Github/>
        </div>
       <section id="#projects" className="mrgn_top">
          <Projects />
        </section>
        
        <section id="#contact" className="mrgn_top">
          <Contact />
        </section>
      </main>
      
     
      <Footer />
      <ScrollToTop />
    </div>
  );
}
