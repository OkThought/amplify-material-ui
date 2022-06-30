import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'SectionFooter';

const classes = {
  box: `${PREFIX}-box`
};

const StyledBox = styled(Box)(() => ({
  [`&.${classes.box}`]: {}
}));

export const SectionFooter: React.FC = ({ children }) => {
  return <StyledBox className={classes.box}>{children}</StyledBox>;
};
