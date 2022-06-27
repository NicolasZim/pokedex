import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PokeList from './pages/PokeList';
import PokeDescription from './pages/PokeDescription';
import PokeFavorite from './pages/PokeFavorite';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <PokeList />
      </Route>

      <Route path="/pokemon/:pokeName">
        <PokeDescription />
      </Route>

      <Route path="/favorites">
        <PokeFavorite />
      </Route>
    </Switch>
  );
};

export default Routes;
