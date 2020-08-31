import React from 'react';
import { Box, Heading, Text } from 'grommet';
import EmailField from '../components/EmailField';

const Home = () => {
  return (
    <Box flex align='center' justify='center'>
      <Heading
        margin='small'
        level='1'
        responsive
        alignSelf='center'
        textAlign='center'
      >
        Presence-aware workspace for teams
      </Heading>
      <Text size='xlarge' margin='medium' textAlign='center'>
        Experience in-person workflows, remotely.
        <br /> Connect and communicate with your team in one click.
      </Text>
      <EmailField />
    </Box>
  );
};

export default Home;
