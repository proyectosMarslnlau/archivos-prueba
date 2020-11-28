import React, { Fragment } from "react";
//Importamos las librerias del REACT ROUTER DOOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importamos los componentes
import Login from '../components/Login';
import Information from '../components/Information';
import Track from '../components/Track';
import Error from '../error/Error';
//----------------------------------------------------------
const Navigation = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/track" component={Track} />
          <Route component={Error} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Navigation;
