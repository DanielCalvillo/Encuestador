import React from 'react';
import './App.css';
import Encuesta from './Components/Encuesta';
import Inicio from './Components/Inicio';
import ShowSurveys from './Components/mainMenu/ShowSurveys'
import AddressConfirmation from './Components/location/AddressConfirmation'
import AddressMap from './Components/location/AddressMap'
import CreateVoter from './Components/CreateVoter';
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/address/map"
          render={ routeProps => (
            <AddressMap {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/survey/address/confirm"
          render={ routeProps => (
            <AddressConfirmation {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/survey/voter"
          render={ routeProps => (
            <CreateVoter {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/home/surveyor"
          render={ routeProps => (
            <ShowSurveys {...routeProps}/>
          )}
        />
        <Route
          exact
          //agregar id
          path="/survey"
          render={ routeProps => (
            <Encuesta {...routeProps}/>
          )}
        />
        <Route
          exact
          path="/"
          render={ routeProps => (
            <Inicio {...routeProps}/>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
