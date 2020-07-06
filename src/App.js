import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegation from "./componentes/Navegation";
import AppTutoriales from "./componentes/AppTutoriales";
import AgregarTutorial from "./componentes/AgregarTutorial";
import EditarTutorial from "./componentes/EditarTutorial";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navegation />
        <Switch>
          <Route path="/" exact component={AppTutoriales} />
          <Route path="/agregar" component={AgregarTutorial} />
          <Route path="/editar/:id" component={EditarTutorial} />
        </Switch>
      </Router>
    );
  }
}




