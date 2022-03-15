import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/navbar/nav";
import Footer from "./Components/footer/footer";
import Home from "./Pages/home";
import About from "./Pages/about";
import Riders from "./Pages/riders";
import Gallery from "./Pages/gallery";
import InteractiveMap from "./Pages/map";
import Slogan from "./Pages/slogan";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <section>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/riders" element={<Riders />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/map" element={<InteractiveMap />} />
            <Route path="/slogan" element={<Slogan />} />
          </Routes>
        </section>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
