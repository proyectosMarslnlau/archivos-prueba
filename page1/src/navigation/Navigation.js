import React, { Fragment } from "react";
//Importamos las librerias del REACT ROUTER DOOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importamos los componentes
import Inicio from "../components/Inicio";
import Form from "../components/Form";
import Introduccion from "../components/Introduccion";
import Error from "../error/Error";
//----------------------------------------------------------
const Navigation = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/introduccion" component={Introduccion} />
          <Route component={Error} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Navigation;
