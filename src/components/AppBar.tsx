import React from 'react';
import { Box } from 'grommet';

interface AppBarProps {
  size: string | undefined;
  children: any;
  background: any;
}

const AppBar = (props: AppBarProps) => {
  const { size } = props;

  return (
    <Box
      tag='header'
      direction={size !== 'small' ? 'row' : 'column'}
      align='center'
      justify='between'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='none'
      style={{ zIndex: 1 }}
      responsive
      width={size === 'small' ? '100vw' : 'auto'}
      {...props}
    />
  );
};

export default AppBar;
