import React, { useState, createContext } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose } from 'grommet-icons';
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
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction='horizontal' open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='transparent'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background='transparent'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
