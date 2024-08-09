import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./index.css";

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div className="app__home">
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
