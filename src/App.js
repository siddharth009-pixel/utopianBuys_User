import React from 'react';
import {Login, SignUp,Profile} from './component'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
     <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
