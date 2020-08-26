import React from 'react';
import AppBar from './AppBar';

import { Heading, Button, Anchor, Box } from 'grommet';
import { Notification } from 'grommet-icons';

interface propTypes {
  toggleSidebar: () => void;
}

const HeaderArea = (props: propTypes) => {
  let { toggleSidebar } = props;

  const anchorMargins = {
    horizontal: 'large',
  };

  return (
    <AppBar>
      <Heading level='1' margin='none'>
        Tagteam
      </Heading>
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
