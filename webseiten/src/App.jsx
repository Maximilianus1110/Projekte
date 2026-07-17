import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProjectBackstage from "./pages/ProjectBackstage.jsx";
import ProjectTagebuch from "./pages/ProjectTagebuch.jsx";
import ProjectWebsite from "./pages/ProjectWebsite.jsx";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // let the DOM settle (route change) before measuring position
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekte/backstage-validator" element={<ProjectBackstage />} />
          <Route path="/projekte/tagebuch-app" element={<ProjectTagebuch />} />
          <Route path="/projekte/diese-webseite" element={<ProjectWebsite />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
