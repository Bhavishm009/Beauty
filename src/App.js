import "./App.css";
import Home from "./Pages/Home";
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div id="home" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingUp" element={<SignUp />} />
          <Route path="/SingIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
