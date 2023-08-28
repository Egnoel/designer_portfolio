import "./App.css";
import Banner from "./components/Banner";

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
      <Works />
    </div>
  );
}

export default App;
