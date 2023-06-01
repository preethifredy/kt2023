import React from 'react';
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  inputLabelRoot: {
    color: '#222 !important',
    fontWeight: "600",
    fontFamily: 'IBM Plex Sans, sans-serif'
  },
  helperText: {
    position: 'absolute',
    bottom: '-20px'
  },
  inputRoot: {
    fontFamily: 'IBM Plex Sans, sans-serif',
    '&:before': {
      borderBottom: '1px solid #b8b8b8 !important'
    },
    '&:hover': {
      '&:before': {
        borderBottom: '1px solid #ffcb0d !important'
      }
    },
    '&:after': {
      borderBottom: '1px solid #ffcb0d'
    }
  }
}));

const Input = ({
  label,
  type,
  variant = 'standard',
  ...rest
}) => {

  const classes = useStyles();

  return (
    <TextField
      variant={variant}
      type={type}
      label={label}
      InputLabelProps={{
        classes: {
          root: classes.inputLabelRoot,
          focused: classes.inputLabelRoot
        }
      }}
      InputProps={{
        classes: {
          root: classes.inputRoot
        }
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.helperText
        }
      }}
      {...rest}
    />
  );
};

export default Input;