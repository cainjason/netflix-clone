import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {" "}
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
