import Button from "./components/button/Button";
import Card from "./components/cards/Card";
import Contact from "./components/contactSection/Contact";
import Footer from "./components/footer/Footer";
import Fresh from "./components/freshFruits/Fresh";
import Main from "./components/header/Main";
import Made from "./components/madeby/Made";
import Men from "./components/men/Men";
import Navbar from "./components/navbar/Navbar";
import Ourservices from "./components/oursServices/Ourservices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Ourservices />
      <Card />
      <Button />
      <Fresh />
      <Men />
      <Contact />
      <Footer />
      <Made />
    </div>
  );
}

export default App;
