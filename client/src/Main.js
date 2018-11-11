import React from 'react';
import Meals from './Meals.js';
import Recipes from './Recipes.js'
import Map from './Map.js'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Meals}></Route>
    <Route exact path="/meals" component={Meals}></Route>
    <Route exact path="/recipes" component={Recipes}></Route>
    <Route exact path="/map" component={Map}></Route>
  </Switch>
);

export default Main;
