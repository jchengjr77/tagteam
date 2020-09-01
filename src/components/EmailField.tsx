import React, { useState } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { Mail, Lock } from 'grommet-icons';

// state management
import { useStoreState } from 'easy-peasy';

// firebase
import auth from '../fire';

const EmailField = () => {
  const size = useStoreState((state) => state.displaySize.size);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const buttonMargins =
    size !== 'small'
      ? {
          horizontal: 'small',
        }
      : {
          vertical: 'small',
        };

  return (
    <Box
      gap='small'
      pad='large'
      direction={size !== 'small' ? 'row' : 'column'}
    >
      <TextInput
        placeholder='Email Address'
        value={email}
        onChange={handleEmailChange}
        size='medium'
        icon={<Mail />}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
        size='medium'
        icon={<Lock />}
        type='password'
      />
      <Button
        margin={buttonMargins}
        primary
        size='medium'
        label='Register'
        hoverIndicator
      />
    </Box>
  );
};

export default EmailField;
