import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import CertificationDetail from "./pages/CertificationDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </>
          }
        />

        <Route path="/certification/:id" element={<CertificationDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
