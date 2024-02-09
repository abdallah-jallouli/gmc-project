import "./App.css";
import Nav from "./Component/nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Component/signup/SignUp";
import Header from "./Component/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
