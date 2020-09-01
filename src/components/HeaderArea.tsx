import React from 'react';
import AppBar from './AppBar';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';

import { Image, Button, Anchor, Box } from 'grommet';
import { Actions } from 'grommet-icons';

// state management
import { useStoreState } from 'easy-peasy';

interface propTypes {
  toggleSidebar: () => void;
  themeMode: string | undefined;
}

const HeaderArea = (props: propTypes) => {
  const size = useStoreState((state) => state.displaySize.size);

  // get theme mode using grommetTheme.dark (boolean)

  let { toggleSidebar, themeMode } = props;

  const anchorMargins = {
    horizontal: size !== 'small' ? 'large' : 'small',
    vertical: 'small',
  };

  const themeIcon =
    themeMode === 'dark' ? (
      <Actions color='accent-1' />
    ) : (
      <Actions color='dark-2' />
    );

  const buttonPadding = {
    left: 'small',
    right: 'large',
  };

  return (
    <AppBar background='transparent' size={size}>
      <Box height='xsmall' width={size !== 'small' ? 'medium' : 'small'}>
        <Image
          src={themeMode === 'dark' ? logoDark : logoLight}
          fit='contain'
        />
      </Box>
      <Box
        direction='row'
        alignContent='start'
        justify='between'
        pad={buttonPadding}
      >
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
