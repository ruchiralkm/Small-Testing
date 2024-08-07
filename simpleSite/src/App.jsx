import { color, motion, spring } from "framer-motion";
import "./App.css";
import BgAnimation from "./com/BgAnimation";
import NavBar from "./com/NavBar";
import Bottom from "./com/Bottom";
import Hero from "./com/Hero";

function App() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <BgAnimation />
        <NavBar />
        <Bottom />
        <Hero />
      </div>
    </>
  );
}

export default App;
