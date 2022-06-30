import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'SectionBody';

const classes = {
  box: `${PREFIX}-box`
};

const StyledBox = styled(Box)(() => ({
  [`&.${classes.box}`]: {}
}));

export const SectionBody: React.FC = ({ children }) => {
  return <StyledBox className={classes.box}>{children}</StyledBox>;
};
