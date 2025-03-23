import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SelectMovie from "./pages/SelectMovie";
import ReviewMovie from "./pages/ReviewMovie";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-movie" element={<SelectMovie />} />
        <Route path="/review" element={<ReviewMovie />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
