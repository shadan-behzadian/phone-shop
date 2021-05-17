import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PhoneList from "./PhoneList";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={PhoneList} exact />
      </Switch>
    );
  }
}

export default Router;
