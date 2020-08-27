import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import { customTheme } from './App.theme';

import HeaderArea from './components/HeaderArea';

type ThemeState = 'dark' | 'light' | undefined;

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeState>('light');

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const appBackground = {
    dark: 'dark-3',
    light: '#ffffff',
  };

  return (
    <Grommet
      themeMode={themeMode}
      theme={customTheme}
      background={appBackground}
      full
    >
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <HeaderArea toggleSidebar={toggleSidebar} themeMode={themeMode} />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
