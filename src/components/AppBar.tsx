import React from 'react';
import { Box } from 'grommet';

const AppBar = (props: any) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='white'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='xsmall'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export default AppBar;
