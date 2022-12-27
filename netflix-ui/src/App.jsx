import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import Netflix from "./pages/netflix";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
