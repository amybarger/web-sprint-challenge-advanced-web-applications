import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
      <div className="App">
        <div className="login">
        <Route exact path="/" component={Login} />
        </div>
        <Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/protected/bubblepage" component={BubblePage}
         />
         </Switch>

      </div>
  );
}

export default App;
