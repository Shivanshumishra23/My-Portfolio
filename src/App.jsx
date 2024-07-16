import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero2,
  Hero,
  Navbar,
  Tech,
  Tech2,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <div className="lg:flex hidden">
            <Hero />
          </div>
          <div className="lg:hidden flex">
            <Hero2 />
          </div>
        </div>
        <About />
        <Experience />
        <div className="lg:flex hidden">
          <Tech />
        </div>
        <div className="lg:hidden flex">
          <Tech2 />
        </div>

        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
