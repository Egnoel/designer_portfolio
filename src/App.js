import "./App.css";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

import Logo from "./components/Logo";
import Motto from "./components/Motto";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
      <Logo />
      <Motto />
      <Skills />
      <Banner />
      <Carousel />
      <Contact />
      <Logo />
    </div>
  );
}

export default App;
