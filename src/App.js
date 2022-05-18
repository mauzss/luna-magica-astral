import React from "react";
import GlobalStyle from "./globalStyles";

//Pages
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Zodiacal from "./components/Zodiaco/Zodiacal";
import Tarot from "./components/Tarot/Tarot";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Features />
      <Zodiacal />
      <Tarot />
      <Footer />
    </div>
  );
}

export default App;
