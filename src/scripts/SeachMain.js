// mui and react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import RandomMaps from './RandomMaps';
import RandomClusteredMaps from './RandomClusteredMaps';
// css
import '../css/search.scss';

//AWS s3 bucket with images
const baseURL = 'http://capstone-images-daveism.s3-website-us-east-1.amazonaws.com/'

// constants for layout
const defaultSpacing = 16;
const titleHeight = 60;
const buttonHeight = 50;
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
    maxHeight: '650px',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '360px',
      maxHeight: '800px',
    }
  },
  mainTitle: {
    height: `${titleHeight}px`,
  },
  buttonsYesNo: {
    width: '100%',
    height: `${buttonHeight}px`,
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 'unset'
    }
  },
  searchMapGrid: {
    display: 'flex',
  },
  searchMapHolder: {
    height: '500px',
    width: '633px',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      height: '265px',
      width: '336px'
    }
  },
  targetMapHolder: {
    backgroundColor: '#EDEDED',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: '4px',
    height: '220px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      height: '168px',
    }
  },
  statGridLeft: {
    paddingLeft: theme.spacing(2),
    height: '145px',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      height: '121px' ,
      display: window.screen.height < 700 ? 'none' : 'flex',
    }
  },
  statGridRight: {
    paddingRight: theme.spacing(2),
    height: '145px',
    [theme.breakpoints.down('sm')]: {
      order: 2,
      height: '121px',
      display: window.screen.height < 700 ? 'none' : 'flex',
    }
  },
  statTitle: {
    height: '125px',
    display: 'flex',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      display: 'none'
    }
  },
  targetTitle: {
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      order: 3,
      paddingLeft: theme.spacing(2),
      height: '45px',
    }
  },
  targetMapGrid: {
    [theme.breakpoints.down('sm')]: {
      order: 4,
      paddingLeft: theme.spacing(2),
    }
  },
  searchMapsTitle: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      height: '45px',
    }
  },
  statBoxLeft: {
    height: '145px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      height: '121px',
    }
  },
  statBoxRight: {
    height: '145px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      height: '121px',
    }
  },
  targetMapImg: {
    width: '280px',
    height: '220px',
    [theme.breakpoints.down('sm')]: {
      height: '158px',
      width: '200px',
    }
  },
  searchMapImg: {
    borderRadius: '4px',
    height: '500px',
    width: '633px',
    [theme.breakpoints.down('sm')]: {
      height: '266px',
      width: '336px',
      paddingLeft: theme.spacing(4),
    }
  },
  spaceRow : {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  h3: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
    }
  },
  none: {
    display: 'none',
  }
}));

export default function SearchMain() {

  // set React state via React Hooks
  // used to detect the first call - for getting state from url
  const [key, setKey] = useState(true);
  const [timestamp, _setTimestamp] = useState(Date.now());

  const [yesNoDisabled, _setYesNoDisabled] = useState(true);
  const [startDisabled, setStartDisabled] = useState(false);

  const [randomMapsWithTargetGestalt, setRandomMapsWithTargetGestalt] = useState(RandomMaps());
  const [randomMapsWithTargetNotGestalt, setRandomMapsWithTargetNotGestalt] = useState(RandomMaps());
  const [randomMapsWithoutTarget, setRandomMapsWithoutTarget] = useState(RandomMaps());

  const [RandomMapsClusteredWithTargetGestalt, setRandomMapsClusteredWithTargetGestalt] = useState(RandomClusteredMaps());
  const [RandomMapsClusteredWithTargetNotGestalt, setRandomMapsClusteredWithTargetNotGestalt] = useState(RandomClusteredMaps());
  const [RandomMapsClusteredWithoutTarget, setRandomMapsClusteredWithoutTarget] = useState(RandomClusteredMaps());

  const [searchMapURL, setSearchMapURL] = useState();

  const timestampeRef = React.useRef(timestamp);
  const setTimestamp = data => {
    timestampeRef.current = data;
    _setTimestamp(data);
  };

  const yesNoDisabledRef = React.useRef(yesNoDisabled);
  const setYesNoDisabled = data => {
    yesNoDisabledRef.current = data;
    _setYesNoDisabled(data);
  };

  // const yesNoDisabled = data => {
  //   yesNoDisabledRef.current = data;
  //   _yesNoDisabled;
  // };

  // generate ranom numbers to pull in map
  const getRandomMap = (mapArray) => {
    const mapNumber = Math.floor(Math.random() * mapArray.length);
    return mapArray[mapNumber];
  };

  // remove map from array
  const removeRandomNumber = (array, mapName) => {
    return array.filter( (value) => (value != mapName))
  }

  const getTargetName = (target) => {
    if (target === 0) return 'target-none-';
    if (target => 1) {
      const targetNumber = target.toString().length < 2 ? `0${target.toString()}` : target.toString();
      return `target-${targetNumber}-`;
    }
  }

  // gets the net map
  const getNextMap = () => {

    // get target name none or 1-20
    const possibleTarget = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const targetNumber = getRandomMap(possibleTarget);
    const targetName = getTargetName(targetNumber);

    // get map name (without target)
    const mapName = getRandomMap(randomMapsWithTargetGestalt);
    const newMapArray = removeRandomNumber(randomMapsWithTargetGestalt, mapName);

    // remove from array so we don't use it again
    setRandomMapsWithTargetGestalt(newMapArray);

    const mapURL = `${baseURL}${targetName}${mapName}.png`;
    setSearchMapURL(mapURL);

    // return map name
    return mapURL;
  }

  //  check iof done with random maps with normal target
  const randomMapsTargetGestaltDone = () => {
    if (randomMapsWithTargetGestalt.length > 0 && randomMapsWithoutTarget.length > 0) return true;
    if (randomMapsWithTargetGestalt.length > 0 && randomMapsWithoutTarget.length > 0) return true;
    return false;
  }

  //  check iof done with random maps with not gestalt target
  const randomMapsTargetNotGestaltDone = () => {
    if (randomMapsWithTargetNotGestalt.length > 0 && randomMapsWithoutTarget.length > 0) return true;
    return false;
  }


  const classes = useStyles();

  const timeEllapsed = () => {
    const end = Date.now();
    return end - timestampeRef.current;
  }

  const howAnswered = (keypressed) => {
    switch (keypressed) {
      case 'Y':
        const yesTime = timeEllapsed()
        setTimestamp( Date.now());
        console.log(`you answered yes in ${yesTime} ms`)
        getNextMap();
        return keypressed;
      case 'N':
        const noTime = timeEllapsed()
        setTimestamp( Date.now());
        console.log(`you answered no in ${noTime} ms`)
        getNextMap();
        return keypressed;
      default:
        return null;
    }
  }

  const handleStart = (event) => {

    setYesNoDisabled(false);
    setStartDisabled(true);
    window.addEventListener('keydown', handleYNkeyPress);
    setTimestamp( Date.now());
    getNextMap();
  }

  const handleYNkeyPress = (event) => {
    let keypressed = '';
    if (event.key) {
      howAnswered(event.key.toUpperCase())
      return null;
    } else {
      howAnswered( event.target.innerText.toUpperCase() === 'YES' ? 'Y' : 'N')
      return null;
    }
  };

  // use the react effect to control when location and
  // regions change to repopulate the climate variable pulldown
  useEffect(() => {
    return () => (window.removeEventListener('keydown', handleYNkeyPress));
  }, []);

  return (
    <div  className={classes.root}>
      <Grid  container spacing={1} height='100%' >

        <Grid container spacing={2} className={classes.searchMapsArea}>
          <Grid item xs={12} md={4} m={2}display='flex' flex={1}>

            <Grid container spacing={0} className={classes.sideMapsHolder}>
              <Grid item xs={12} display='flex' flex={1} className={classes.targetTitle}>
                <h3  className={classes.h3}>Look for this object</h3>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.targetMapGrid}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.targetMapHolder}>
                  <img src="src/img/target-01.png" alt="test" className={classes.targetMapImg}/>
                </Box>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.statTitle}>
                <h3  className={classes.h3}>Your stats</h3>
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

          <Grid item xs={12} md={8} display='flex' flex={1} className={classes.searchMapsHolder}>
            <Grid container spacing={0} display='flex'>
              <Grid item xs={12} display='flex' flex={1}  className={classes.searchMapsTitle}>
                <h3  className={classes.h3}>On this map</h3>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.searchMapGrid}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems="center" className={classes.searchMapHolder} >
                  <img src={searchMapURL} className={classes.searchMapImg}/>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid container spacing={2} className={classes.buttonsYesNoArea}>

          <Grid item xs={12} md={4} display='flex' flex={1} className={classes.spaceRow}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              <Button onClick={handleStart} disabled={startDisabled} variant="contained" color="primary" className={classes.buttonsYesNo} height='100%'>Start</Button>
            </Box>
          </Grid>

          <Grid item xs={6} md={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonYesBox}>
              <Button onClick={handleYNkeyPress} disabled={yesNoDisabled} variant="contained" value='Y' className={classes.buttonsYesNo} height='100%'>Yes</Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} display='flex' flex={1}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonNoBox}>
              <Button onClick={handleYNkeyPress} disabled={yesNoDisabled} variant="contained" value='N' className={classes.buttonsYesNo} height='100%'>No</Button>
            </Box>
          </Grid>

        </Grid>

      </Grid>
    </div>
  );
}

SearchMain.propTypes = {
};
