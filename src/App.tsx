import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Education,  // ✅ Import EducationTimeline
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />         {/* ✅ Experience Timeline */}
        <Education/> {/* ✅ Added Education Timeline */}
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
