import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Box } from 'grommet';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/features'>
        <Box flex align='center' justify='center'>
          features
        </Box>
      </Route>
      {/* default route */}
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
