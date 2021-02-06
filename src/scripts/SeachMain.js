// mui and react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// css
import '../css/search.scss';

const useStyles = makeStyles((theme) => ({
  SearchMainRoot: {
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#ffffff',
    }
  }
}));

export default function SearchMain() {

  // set React state via React Hooks
  // used to detect the first call - for getting state from url
  const [atStart, setAtStart] = useState(true);

  const classes = useStyles();

  // use the react effect to control when location and
  // regions change to repopulate the climate variable pulldown
  useEffect(() => {
    // call when something changes
  }, []);

  return (
    <div className={classes.SearchMainRoot}>
      <Grid container spacing={0} justify='flex-start' direction={'row'}>
        <Grid item xs={12} width='100%' >
          Title
        </Grid>

        <Grid container spacing={0} justify='flex-start' direction={'row'} >
          <Grid item xs={12} sm={4} display='flex' flex={1}>

            <Grid container spacing={0} justify='flex-start' direction={'row'} >

              <Grid item xs={12} display='flex' flex={1}>
                <Box display='flex' flexDirection='row' m={1} flex={1}>
                  Target Map
                </Box>
              </Grid>

              <Grid item xs={12} display='flex' flex={1}>
                <Box display='flex' flexDirection='row' m={1} flex={1}>
                  Statistics
                </Box>
              </Grid>

            </Grid>

          </Grid>
          <Grid item xs={12} sm={8} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              Search Map
            </Box>
          </Grid>
        </Grid>



        <Grid container spacing={0} justify='flex-start' direction={'row'} >
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              blank for alignment
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              Yes Button
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              No Button
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

SearchMain.propTypes = {
};
