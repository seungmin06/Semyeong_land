import "./Styles/App.css";

import Header from "./Components/header";
import Slide from "./Components/Slide";
import Footer from "./Components/footer";
import Contents from "./Components/contents";


function App() {
  return (
    <div className="App">

      <Header />
      <Slide />
      <Footer /> 
      <Contents /> 
    </div>

  );
}

export default App;
