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
      <head>
        <title>BikeRace</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/0777252af7.js"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8LtfQbg9Y5zJj5hFvd5f2qOEGljWZEKQ&v=weekly"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
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
      </body>
    </>
  );
}

export default App;
