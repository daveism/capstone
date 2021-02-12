import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { green, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(.5),
    fontWeight: 'bold'
  },
}));

export default function LastAnswer(props) {
  const classes = useStyles();
  const { answerCorrect } = props;

  if (answerCorrect === 'none') {
    return (
      <Box display='flex' flexDirection='row' justifyContent='flex-start"' alignItems='center'>
        No answers yet
     </Box>
    )
  }

  if (answerCorrect) {
    return (
      <Box display='flex' flexDirection='row' justifyContent='flex-start"' alignItems='center'>
        Last answer <CheckIcon style={{ color: green[500] }} className={classes.icon}/>
     </Box>
    )
  } else {
    return (
      <Box display='flex' flexDirection='row' justifyContent='flex-start"' alignItems='center'>
        Last answer <CloseIcon style={{ color: red[500] }} className={classes.icon}/>
     </Box>
    )
  }
}
