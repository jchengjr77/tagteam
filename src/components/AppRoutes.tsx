import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Box } from 'grommet';

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
        <Box flex align='center' justify='center'>
          home
        </Box>
      </Route>
    </Switch>
  );
};

export default AppRoutes;
