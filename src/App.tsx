import React, { useState } from 'react';
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

  return (
    <Grommet themeMode={themeMode} theme={customTheme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <HeaderArea toggleSidebar={toggleSidebar} />
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
              </Box>
              {!showSidebar || size !== 'small' ? (
                <Collapsible direction='horizontal' open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
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
                    background='light-2'
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
