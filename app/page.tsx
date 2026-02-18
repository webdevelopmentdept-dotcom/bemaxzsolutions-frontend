import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/sections/About";
import ChooseUs from "./components/sections/ChooseUs";
import Achive from "./components/sections/Achive";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <ChooseUs/>
      <Achive/>
   
    </>
  );
}
