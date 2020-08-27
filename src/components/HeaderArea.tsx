import React, { useContext } from 'react';
import AppBar from './AppBar';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';

import { Image, Button, Anchor, Box } from 'grommet';
import { Notification } from 'grommet-icons';

interface propTypes {
  toggleSidebar: () => void;
  themeMode: string | undefined;
}

const HeaderArea = (props: propTypes) => {
  // get theme mode using grommetTheme.dark (boolean)

  let { toggleSidebar, themeMode } = props;

  const anchorMargins = {
    horizontal: 'large',
  };

  return (
    <AppBar background='transparent'>
      <Box height='xsmall' width='medium'>
        <Image
          src={themeMode === 'dark' ? logoDark : logoLight}
          fit='contain'
        />
      </Box>
      <Button icon={<Notification />} onClick={() => toggleSidebar()} />
      <Box direction='row' alignContent='center' justify='between'>
        <Anchor href='#' size='medium' margin={anchorMargins} label='Home' />
        <Anchor
          href='#'
          size='medium'
          margin={anchorMargins}
          label='Features'
        />
        <Anchor
          href='#'
          size='medium'
          margin={anchorMargins}
          label='Community'
        />
      </Box>
    </AppBar>
  );
};

export default HeaderArea;
