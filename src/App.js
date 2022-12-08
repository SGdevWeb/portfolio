import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cv from "./Pages/Cv/Cv";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Project/Project";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cv' element={<Cv />}></Route>
          <Route path='/projects/:nameProject' element={<Projects />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
