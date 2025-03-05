import { useEffect, useState } from "react";

import { SelectedPage } from "./types/types";
import Navbar from "./components/Navbar"
import Home from "./sections/home";
import Wells from "./sections/wells";
import Works from "./sections/work";
import Mission from "./sections/mission";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>
  (SelectedPage.Home);
  const[isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    // Location on Page - handleScroll
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0)setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="app bg-white">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Mission setSelectedPage={setSelectedPage}/>
      <Wells setSelectedPage={setSelectedPage} />
      <Works setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App