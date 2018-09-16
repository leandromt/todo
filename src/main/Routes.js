import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./../template/Menu";
import Todo from "./../todo/Todo";
import About from "./../about/About";
import Erro404 from "./../template/Erro404";

export default props => (
  <BrowserRouter>
    <div>
      <Menu />
      <Switch>
        <Route path="/" component={Todo} exact />
        <Route path="/about" component={About} />
        <Route component={Erro404} />
      </Switch>
    </div>
  </BrowserRouter>
);
