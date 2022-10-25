import "./App.css";
import Confidence from "./components/Confidence";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Confidence />
      <Footer />
    </div>
  );
}

export default App;
