import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <div className="front">
        <Header />
        <MainContent />
        <Footer />
      </div>
      <div className="circle"></div>
      <div className="square"></div>
    </div>
  );
}

export default App;
