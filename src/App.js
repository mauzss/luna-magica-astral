import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
