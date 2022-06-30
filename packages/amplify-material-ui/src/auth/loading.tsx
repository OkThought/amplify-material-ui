import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { FormSection } from '../ui';

const PREFIX = 'Loading';

const classes = {
  progress: `${PREFIX}-progress`
};

const StyledFormSection = styled(FormSection)(
  ({ theme }: { theme: Theme }) => ({
    [`& .${classes.progress}`]: {
      margin: theme.spacing(2)
    }
  })
);

export interface LoadingProps {
  color?: 'inherit' | 'primary' | 'secondary' | undefined;
}

export const Loading: React.FC<LoadingProps> = ({ color }) => {
  return (
    <StyledFormSection>
      <CircularProgress className={classes.progress} color={color} />
    </StyledFormSection>
  );
};

Loading.defaultProps = {
  color: 'secondary',
};
