import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import IdealClients from "./components/IdealClients";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <IdealClients />
      <Services />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
