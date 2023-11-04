import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import AfterAuth from "./components/AfterAuth";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />

          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/auth"
            element={<AfterAuth setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
