import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App.js";
import Recipe from "./Recipe.js"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
