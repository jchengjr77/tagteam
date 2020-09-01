import React from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { customTheme } from './App.theme';
import { BrowserRouter as Router } from 'react-router-dom';

// state management
import { useStoreState, useStoreActions } from './store/hooks';

import AppRoutes from './components/AppRoutes';

import HeaderArea from './components/HeaderArea';

function App() {
  const theme = useStoreState((state) => state.theme.themeMode);
  const switchTheme = useStoreActions((actions) => actions.theme.switchTheme);
  const setDisplaySize = useStoreActions(
    (actions) => actions.displaySize.setSize
  );

  const toggleTheme = () => {
    const newThemeMode = theme === 'light' ? 'dark' : 'light';
    switchTheme(newThemeMode);
  };

  const appBackground = {
    dark: 'dark-3',
    light: '#ffffff',
  };

  return (
    <Grommet
      themeMode={theme}
      theme={customTheme}
      background={appBackground}
      full
    >
      <Router>
        <ResponsiveContext.Consumer>
          {(size) => {
            setDisplaySize(size);
            return (
              <Box fill align='center'>
                <HeaderArea toggleSidebar={toggleTheme} themeMode={theme} />
                <AppRoutes />
              </Box>
            );
          }}
        </ResponsiveContext.Consumer>
      </Router>
    </Grommet>
  );
}

export default App;
