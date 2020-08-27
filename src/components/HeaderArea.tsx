import React from 'react';
import AppBar from './AppBar';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';

import { Image, Button, Anchor, Box } from 'grommet';
import { Actions } from 'grommet-icons';

interface propTypes {
  toggleSidebar: () => void;
  themeMode: string | undefined;
}

const HeaderArea = (props: propTypes) => {
  // get theme mode using grommetTheme.dark (boolean)

  let { toggleSidebar, themeMode } = props;

  const anchorMargins = {
    horizontal: 'large',
    vertical: 'auto',
  };

  const themeIcon =
    themeMode === 'dark' ? (
      <Actions color='accent-1' />
    ) : (
      <Actions color='dark-2' />
    );

  return (
    <AppBar background='transparent'>
      <Box height='xsmall' width='medium'>
        <Image
          src={themeMode === 'dark' ? logoDark : logoLight}
          fit='contain'
        />
      </Box>
      <Box direction='row' alignContent='center' justify='between' pad='medium'>
        <Anchor href='/' size='medium' margin={anchorMargins} label='Home' />
        <Anchor
          href='/features'
          size='medium'
          margin={anchorMargins}
          label='Features'
        />
        <Anchor size='medium' margin={anchorMargins} label='Community' />
        <Button icon={themeIcon} onClick={() => toggleSidebar()} />
      </Box>
    </AppBar>
  );
};

export default HeaderArea;
