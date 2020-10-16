import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home/index";
import Saved from "./pages/Saved/index";
import NoMatch from "./pages/NoMatch";

function App() {

  return (
    <div>
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
              {/* <Route path="/404" component={NoMatch} />
              <Redirect to="/404" /> */}
            </Switch>
      </Router>
    </div>
  );
}

export default App;
