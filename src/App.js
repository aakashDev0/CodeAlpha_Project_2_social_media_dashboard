import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facebook from "./components/Facebook";
import Home from "./Pages/Home/Home";
import Instagram from "./components/Instergram";
import YouTube from "./components/Youtube";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
