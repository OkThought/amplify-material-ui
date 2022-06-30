import * as React from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import { colors, IconButton, Snackbar, SnackbarOrigin, SnackbarContent } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const PREFIX = 'Toast';

const classes = {
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  info: `${PREFIX}-info`,
  warning: `${PREFIX}-warning`,
  icon: `${PREFIX}-icon`,
  iconVariant: `${PREFIX}-iconVariant`,
  message: `${PREFIX}-message`
};

const StyledSnackbar = styled(Snackbar)(({theme}: { theme: Theme }) => ({
  [`& .${classes.success}`]: {
    backgroundColor: colors.green[600],
  },

  [`& .${classes.error}`]: {
    backgroundColor: theme.palette.error.dark,
  },

  [`& .${classes.info}`]: {
    backgroundColor: theme.palette.primary.dark,
  },

  [`& .${classes.warning}`]: {
    backgroundColor: colors.amber[700],
  },

  [`& .${classes.icon}`]: {
    fontSize: 20,
  },

  [`& .${classes.iconVariant}`]: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },

  [`& .${classes.message}`]: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export interface ToastProps {
  className?: string;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  content?: string;
  variant?: keyof typeof variantIcon;
  open?: boolean;
  onClose?: (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => void;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    autoHideDuration = 6000,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'center',
    } as SnackbarOrigin,
    className,
    content,
    variant = 'info',
    open = false,
    onClose,
  } = props;


  const Icon = variantIcon[variant];

  return (
    <StyledSnackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {content}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
            size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </StyledSnackbar>
  );
};
