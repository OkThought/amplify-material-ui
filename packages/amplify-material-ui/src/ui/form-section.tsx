import * as React from 'react';
import { Paper } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { FormContainer } from './form-container';

const PREFIX = 'FormSection';

const classes = {
  paper: `${PREFIX}-paper`
};

const StyledFormContainer = styled(FormContainer)(
  ({ theme }: { theme: Theme }) => ({
    [`& .${classes.paper}`]: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '300px',
      padding: theme.spacing(1)
    }
  })
);

export const FormSection: React.FC = ({ children }) => {
  return (
    <StyledFormContainer>
      <Paper className={classes.paper}>{children}</Paper>
    </StyledFormContainer>
  );
};
