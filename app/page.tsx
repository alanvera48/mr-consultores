import CursorUI from "./components/CursorUI";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import GlobeSection from "./components/GlobeSection";
import About from "./components/About";
import Units from "./components/Units";
import Cases from "./components/Cases";
import CtaBanner from "./components/CtaBanner";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Interactions from "./components/Interactions";
import Tilt from "./components/Tilt";

export default function Home() {
  return (
    <>
      <CursorUI />
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <GlobeSection />
      <About />
      <Units />
      <Cases />
      <CtaBanner />
      <Blog />
      <Faq />
      <Contact />
      <Footer />
      <Interactions />
      <Tilt />
    </>
  );
}
