import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Log into your BubblePage!</h1>
        <div className="login">
        <Route exact path="/" component={Login} />
        </div>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

      </div>
    </Router>
  );
}

export default App;
