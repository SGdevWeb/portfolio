import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cv from "./Pages/Cv";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cv' element={<Cv />}></Route>
          <Route path='/projects/:id' element={<Projects />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
