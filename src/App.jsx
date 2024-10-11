import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Iphones from "./components/Iphones";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Iphones />
      <Highlights />
      <Footer/>
    </main>
  );
};

export default App;
