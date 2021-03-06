import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import AllEntries from "./components/AllEntries";
import AllTrips from "./components/AllTrips";
import EditEntry from "./components/EditEntry";
import SingleEntry from "./components/SingleEntry";
import history from "./history";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Map from "./components/Map";
import AllCountries from "./components/AllCountries";

function Routes(props) {
  return (
    <Router history={history}>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/countries" component={AllCountries} />
          <Route exact path="/trips" component={AllTrips} />
          <Route exact path="/trips/:id/entries" component={AllEntries} />
          <Route exact path="/trips/:id/entries/:id" component={SingleEntry} />
          <Route path="/trips/:id/entries/:id/edit" component={EditEntry} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
