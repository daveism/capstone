// mui and react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// css
import '../css/search.scss';

// constants for layout
const defaultSpacing = 16;
const titleHeight = 60;
const buttonHeight = 150;
const sideHeight = 200;
const searchMapHeight = titleHeight + (buttonHeight + (defaultSpacing * 2));

const black = '#000000';
const white = '#ffffff';
const offWhite = '#EDEDED';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: white,
    color: black,
    maxWidth: '1024px',
    maxHeight: '758px',
    borderRadius: '4px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: black,
    }
  },
  mainTitle: {
    height: `${titleHeight}px`,
  },
  SearchMainYesNoButton: {
    width: '100%',
    height: `${buttonHeight}px`
  },
  searchMapsArea: {
    // height: `calc(100vh - ${searchMapHeight}px)`
  },
  mapsHolder: {
    height: '100%'
  },
  searchMapHolder: {
    height: '100%',
    backgroundColor: offWhite,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  targetMapHolder: {
    backgroundColor: '#EDEDED',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  targetMapImg: {
    margin: theme.spacing(2),
    height: '100%',
    width: '235px',
    height: '185px'
  },
  searchMapImg: {
    margin: theme.spacing(2),
    height: '500px',
    width: '633px',
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
    <div className={classes.root}>
      <Grid container spacing={1} display='flex' justifyContent='center' alignItems='center' direction={'row'} height='100%' >

        <Grid item xs={12} width='100%' className={classes.mainTitle}>
          <Box display='flex' flexDirection='row' m={2} flex={1} >
            Title
          </Box>
        </Grid>

        <Grid container spacing={0} justify='flex-start' direction={'row'} className={classes.searchMapsArea}>
          <Grid item xs={12} sm={3} display='flex' flex={1}>
            <Grid container spacing={0} justify='flex-start' direction={'row'} className={classes.mapsHolder}>

              <Grid item xs={12} display='flex' flex={1}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.targetMapHolder}>
                  <img src="src/img/target-01.png" alt="test" className={classes.targetMapImg}/>
                </Box>
              </Grid>

              <Grid item xs={12} display='flex' flex={1}>
                <Box display='flex' flexDirection='row' m={2} flex={1}>
                  Statistics
                </Box>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} sm={9} display='flex' flex={1} className={classes.mapsHolder}>
            <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.searchMapHolder} >
              <img src="src/img/target-01-distractor-clustered--large_rough-distractor-color-blue-basemap-streets.png" alt="test" className={classes.searchMapImg}/>
            </Box>
          </Grid>

        </Grid>



        <Grid container spacing={2} justify='flex-end' direction={'row'} >
          <Grid item xs={12} sm={3} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={2} flex={1}>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              <Button variant="contained" className={classes.SearchMainYesNoButton}>Yes</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              <Button variant="contained" className={classes.SearchMainYesNoButton}>No</Button>
            </Box>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

SearchMain.propTypes = {
};
