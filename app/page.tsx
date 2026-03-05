import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/sections/About";
import ChooseUs from "./components/sections/ChooseUs";
import Achive from "./components/sections/Achive";
import Innovative from "./components/sections/Innovative";
import Roadmap from "./components/sections/Roadmap";
import Trust from "./components/sections/Trust";
import Allinone from "./components/sections/Allinone";
import Services from "./components/sections/Services";
import Brand from "./components/sections/Brand";
import TheTeam from "./components/sections/TheTeam"
import NewsLetter from './components/sections/NewsLetter'
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <ChooseUs/>
      <Achive/>
      <Innovative/>
      <Roadmap/>
      <Trust/>
   <Allinone/>
   <Services/>
   <Brand/>
   <TheTeam/>
   <NewsLetter/>
   <Contact/>
   <Footer/>
    </>
  );
}
