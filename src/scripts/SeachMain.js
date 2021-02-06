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
  buttonsYesNo: {
    width: '100%',
    height: `${buttonHeight}px`,
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  searchMapsArea: {
    margin: theme.spacing(0),
  },
  buttonsYesNoArea: {
    margin: theme.spacing(0),
  },
  buttonYesBox: {
    marginLeft: theme.spacing(2),
  },
  buttonNoBox: {
    marginRight: theme.spacing(2),
  },
  sideMapsHolder: {
    height: '100%'
  },
  searchMapsHolder: {
    height: '100%'
  },
  searchMapGrid: {
    display: 'flex',
  },
  searchMapHolder: {
    height: '500px',
    width: '633px',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
  targetMapHolder: {
    backgroundColor: '#EDEDED',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: '4px',
    height: '220px'
  },
  statGridLeft: {
    paddingLeft: theme.spacing(2),
    height: '145px',
  },
  statGridRight: {
    paddingRight: theme.spacing(2),
    height: '145px',

  },
  statTitle: {
    height: '125px',
    display: 'flex',
    alignItems: 'flex-end'
  },
  targetTitle: {
    heigtht: '60px'
  },
  statBoxLeft: {
    height: '145px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  statBoxRight: {
    height: '145px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px'
  },
  targetMapImg: {
    width: '280px',
    height: '220px'
  },
  searchMapImg: {
    borderRadius: '4px',
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
      <Grid container spacing={1} height='100%' >

        <Grid container spacing={2} className={classes.searchMapsArea}>
          <Grid item xs={12} sm={4} m={2}display='flex' flex={1}>

            <Grid container spacing={0} className={classes.sideMapsHolder}>
              <Grid item xs={12} display='flex' flex={1} className={classes.targetTitle}>
                <h3>Look for this object</h3>
              </Grid>
              <Grid item xs={12} display='flex' flex={1}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.targetMapHolder}>
                  <img src="src/img/target-01.png" alt="test" className={classes.targetMapImg}/>
                </Box>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.statTitle}>
                <h3>Your stats</h3>
              </Grid>
              <Grid item xs={6} display='flex' flex={1} className={classes.statGridLeft}>
                <Box display='flex' flexDirection='row' m={0} flex={1} border={1} borderColor="grey.500" className={classes.statBoxLeft}>
                </Box>
              </Grid>
              <Grid item xs={6} display='flex' flex={1} className={classes.statGridRight}>
                <Box display='flex' flexDirection='row' m={0} flex={1} border={1} borderColor="grey.500" className={classes.statBoxRight}>
                </Box>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} sm={8} display='flex' flex={1} className={classes.searchMapsHolder}>
            <Grid container spacing={0} display='flex'>
              <Grid item xs={12} display='flex' flex={1}>
                <h3>On this map</h3>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.searchMapGrid}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.searchMapHolder} >
                  <img src="src/img/target-01-distractor-clustered--large_rough-distractor-color-blue-basemap-streets.png" alt="test" className={classes.searchMapImg}/>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid container spacing={2} className={classes.buttonsYesNoArea}>

          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={2} flex={1}>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonYesBox}>
              <Button variant="contained" className={classes.buttonsYesNo} height='100%'>Yes</Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonNoBox}>
              <Button variant="contained" className={classes.buttonsYesNo} height='100%'>No</Button>
            </Box>
          </Grid>

        </Grid>

      </Grid>
    </div>
  );
}

SearchMain.propTypes = {
};
