import React from 'react';
import { Box, Heading, Text, Image } from 'grommet';
import EmailField from '../components/EmailField';

// state management
import { useStoreState } from 'easy-peasy';

// image imports
import businessTravel from '../assets/business-travel.png';
import businessLogin from '../assets/business-login.png';

const Home = () => {
  const size = useStoreState((state) => state.displaySize.size);

  const homePadding = {
    horizontal: 'large',
  };

  const headingMargin = {
    top: 'large',
    bottom: 'medium',
  };

  return (
    <Box flex align='center' justify='center' pad={homePadding}>
      <Heading
        margin={headingMargin}
        level={size !== 'small' ? '1' : '2'}
        responsive
        alignSelf='center'
        textAlign='center'
      >
        Presence-aware workspace for teams
      </Heading>
      <Text
        size={size !== 'small' ? 'xlarge' : 'large'}
        margin='medium'
        textAlign='center'
      >
        Experience in-person workflows, remotely.
        <br /> Connect and communicate with your team in one click.
      </Text>
      <EmailField />
      <Box width='100%' direction='row' alignContent='center' justify='center'>
        <Box height='medium' width='large'>
          <Image fit='contain' src={businessTravel} />
        </Box>
        <Box height='medium' width='large'>
          <Image fit='contain' src={businessLogin} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
