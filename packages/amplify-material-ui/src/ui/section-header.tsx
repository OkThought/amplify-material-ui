import * as React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled, Theme } from '@mui/material/styles';

const PREFIX = 'SectionHeader';

const classes = {
  box: `${PREFIX}-box`,
  avatar: `${PREFIX}-avatar`,
};

const StyledBox = styled(Box)(({ theme }: { theme: Theme }) =>
  ({
    [`&.${classes.box}`]: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    [`& .${classes.avatar}`]: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }),
);

export const SectionHeader: React.FC = ({ children }) => {
  return (
    <StyledBox className={classes.box}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h6">
        {children}
      </Typography>
    </StyledBox>
  );
};
