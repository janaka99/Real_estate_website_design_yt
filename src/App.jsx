import About from "./components/About";
import Banner from "./components/Banner";
import Destinations from "./components/Destinations";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Properties from "./components/Properties";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className=" overflow-x-hidden relative">
      <Header />
      <Hero />
      <About />
      <Properties />
      <Featured />
      <Banner />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
