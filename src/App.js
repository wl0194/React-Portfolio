import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import AboutMe from "./components/aboutMe/AboutMe";


import "./app.scss"
import { useState } from "react";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutMe />
        <Works />
        <Contact />
      </div>
    </div>
  );

}

export default App;
