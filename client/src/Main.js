import React from 'react';
import Meals from './Meals.js';
import Home from './Home.js';
import Recipes from './Recipes.js'
import Map from './Map.js'
import MealRequest from './MealRequest.js'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/meals" component={Meals}></Route>
    <Route exact path="/recipes" component={Recipes}></Route>
    <Route exact path="/map" component={Map}></Route>
    <Route exact path="/mealrequests" component={MealRequest}></Route>
  </Switch>
);

export default Main;
