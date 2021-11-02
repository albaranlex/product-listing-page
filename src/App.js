import Landing from "./components/Landing";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <div className="front">
        <Header />
        <Landing />
        <Product />
        <Footer />
      </div>
      <div className="circle"></div>
      <div className="square"></div>
    </div>
  );
}

export default App;
