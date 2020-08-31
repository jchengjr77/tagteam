import React, { useState } from 'react';
import { Box, TextInput, Button } from 'grommet';
import { Mail } from 'grommet-icons';
// import { StyledPrimaryButton } from './EmailField.styles';

const EmailField = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const buttonMargins = {
    horizontal: 'small',
  };

  return (
    <Box margin='large' direction='row'>
      <TextInput
        placeholder='Email Address'
        value={email}
        onChange={handleEmailChange}
        size='medium'
        icon={<Mail />}
      />
      <Button
        margin={buttonMargins}
        primary
        label='Get Early Access'
        hoverIndicator
      />
    </Box>
  );
};

export default EmailField;
