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
const blankIMG = 'src/images/blank.png';
const gestaltTarget = 'src/images/target-01.png';
const notGestaltTarget = 'src/images/target-not-gestalt-01.png';

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
  // most of these need a ref so we can use window key press
  //   which enables the user use the y and n key for yes and no
  const [key, setKey] = useState(true);

  const [timestamp, _setTimestamp] = useState(Date.now());
  const timestampRef = React.useRef(timestamp);
  const setTimestamp = data => {
    timestampRef.current = data;
    _setTimestamp(data);
  };

  const [yesNoDisabled, _setYesNoDisabled] = useState(true);
  const yesNoDisabledRef = React.useRef(yesNoDisabled);
  const setYesNoDisabled = data => {
    yesNoDisabledRef.current = data;
    _setYesNoDisabled(data);
  };

  const [startDisabled, _setStartDisabled] = useState(false);
  const setStartDisabledRef = React.useRef(setStartDisabled);
  const setStartDisabled = data => {
    setStartDisabledRef.current = data;
    _setStartDisabled(data);
  };

  // random noise background and target is gestalt
  const [randomMapsWithTargetGestalt, _setRandomMapsWithTargetGestalt] = useState(RandomMaps());
  const randomMapsWithTargetGestaltRef = React.useRef(randomMapsWithTargetGestalt);
  const setRandomMapsWithTargetGestalt = data => {
    randomMapsWithTargetGestaltRef.current = data;
    _setRandomMapsWithTargetGestalt(data);
  };

  // random noise background and target is missing
  const [randomMapsWithoutTargetGestalt, _setRandomMapsWithoutTargetGestalt] = useState(RandomMaps());
  const randomMapsWithoutTargetGestaltRef = React.useRef(randomMapsWithoutTargetGestalt);
  const setRandomMapsWithoutTargetGestalt = data => {
    randomMapsWithoutTargetGestaltRef.current = data;
    _setRandomMapsWithoutTargetGestalt(data);
  };

  // random noise background and target is not as gestalt
  const [randomMapsWithTargetNotGestalt, _setRandomMapsWithTargetNotGestalt] = useState(RandomMaps());
  const randomMapsWithTargetNotGestaltRef = React.useRef(randomMapsWithTargetNotGestalt);
  const setRandomMapsWithTargetNotGestalt = data => {
    randomMapsWithTargetNotGestaltRef.current = data;
    _setRandomMapsWithTargetNotGestalt(data);
  };

  // random noise background and target is not as gestalt missng
  const [randomMapsWithoutTargetNotGestalt, _setRandomMapsWithoutTargetNotGestalt] = useState(RandomMaps());
  const randomMapsWithoutTargetNotGestaltRef = React.useRef(randomMapsWithoutTargetNotGestalt);
  const setRandomMapsWithoutTargetNotGestalt = data => {
    randomMapsWithoutTargetNotGestaltRef.current = data;
    _setRandomMapsWithoutTargetNotGestalt(data);
  };

  const [randomMapsClusteredWithTargetGestalt, _setRandomMapsClusteredWithTargetGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithTargetGestaltRef = React.useRef(randomMapsClusteredWithTargetGestalt);
  const setRandomMapsClusteredWithTargetGestalt = data => {
    randomMapsClusteredWithTargetGestaltRef.current = data;
    _setRandomMapsClusteredWithTargetGestalt(data);
  };

  const [randomMapsClusteredWithTargetNotGestalt, _setRandomMapsClusteredWithTargetNotGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithTargetNotGestaltRef = React.useRef(randomMapsClusteredWithTargetNotGestalt);
  const setRandomMapsClusteredWithTargetNotGestalt = data => {
    randomMapsClusteredWithTargetNotGestaltRef.current = data;
    _setRandomMapsClusteredWithTargetNotGestalt(data);
  };

  const [randomMapsClusteredWithoutTarget, _setRandomMapsClusteredWithoutTarget] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithoutTargetRef = React.useRef(randomMapsClusteredWithoutTarget);
  const setRandomMapsClusteredWithoutTarget = data => {
    randomMapsClusteredWithoutTargetRef.current = data;
    _setRandomMapsClusteredWithoutTarget(data);
  };

  const [searchMapURL, _setSearchMapURL] = useState(blankIMG);
  const searchMapURLRef = React.useRef(searchMapURL);
  const setSearchMapURL = data => {
    searchMapURLRef.current = data;
    _setSearchMapURL(data);
  };

  const [targetMapURL, _setTargetMapURL] = useState(gestaltTarget);
  const targetMapURLRef = React.useRef(targetMapURL);
  const setTargetMapURL = data => {
    targetMapURLRef.current = data;
    _setTargetMapURL(data);
  };

  // random-gestalt, random-not-gestalt, random-clustered-gestalt, random-clustered--not-gestalt
  const [series, _setSeries] = useState('random-gestalt');
  const seriesRef = React.useRef(series);
  const setSeries = data => {
    seriesRef.current = data;
    _setSeries(data);
  };


  // blank string or -not-gestalt
  const [targetExtra, _setTargetExtra] = useState('');
  const targetExtraRef = React.useRef(targetExtra);
  const setTargetExtra = data => {
    targetExtraRef.current = data;
    _setTargetExtra(data);
  };

  const [mapRefs, _setMapRefs] = useState([randomMapsWithTargetGestaltRef, randomMapsWithoutTargetGestaltRef]);
  const mapRefsRef = React.useRef(mapRefs);
  const setMapRefs = data => {
    mapRefsRef.current = data;
    _setMapRefs(data);
  };

  const [mapSets, _setMapSets] = useState( [setRandomMapsWithTargetGestalt, setRandomMapsWithoutTargetGestalt]);
  const mapSetsRef = React.useRef(mapSets);
  const setMapSets = data => {
    mapSetsRef.current = data;
    _setMapSets(data);
  };

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
      return `target${targetExtraRef.current}-${targetNumber}-`;
    }
  }

  // get with or without target array used to retreive the correct map
  const getWithORwithout = (withORwithout) => (withORwithout === 'with' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20] : [0] );

  const nextMapURL = (props) => {
    // get target name none or 1-20

    const { ref, set, useWith } = props;

    const possibleTarget = getWithORwithout(useWith);

    const targetNumber = getRandomMap(possibleTarget);
    const targetName = getTargetName(targetNumber);

    // get map name (without target)
    const mapName = getRandomMap(ref.current);
    const newMapArray = removeRandomNumber(ref.current, mapName);

    // remove from array so we don't use it again
    set(newMapArray);

    const mapURL = `${baseURL}${targetName}${mapName}.png`;
    setSearchMapURL(mapURL);

    console.log('array with is this long: ', ref.current.length)
    console.log('current map: ', mapName)
    console.log('at: ', mapURL)

    // return map name
    return mapURL;
  }

  // gets the net map
  const getNextMap = () => {
    const targetYesNo = getRandomMap([0,1]);
    const useWith = targetYesNo ? 'with' : 'without' ;
    const ref = mapRefs[targetYesNo];
    const set =  mapSets[targetYesNo];
    const otherRef = mapRefs[targetYesNo ? 0 : 1];

    if (ref.current.length === 0 && otherRef.current.length === 0) {
      window.removeEventListener('keydown', handleYNkeyPress);
      setYesNoDisabled(true);
      setStartDisabled(false);
      setSearchMapURL(blankIMG);
      setTargetMapURL(notGestaltTarget);
      setSeries('random-not-gestalt') // kicks of use effect
      return null;
    }

    nextMapURL({ref, set, useWith});
    if (ref.current.length === 0) getNextMap();
    return null;
  }

  const classes = useStyles();

  const timeEllapsed = () => {
    const end = Date.now();
    return end - timestampRef.current;
  }

  const howAnswered = (keypressed) => {
    if (yesNoDisabledRef.current) return null;
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

  const setRefAndSets = () => {
    switch (seriesRef.current) {
      case 'random-gestalt':
        setMapSets([setRandomMapsWithTargetGestalt, setRandomMapsWithoutTargetGestalt]);
        setMapRefs([randomMapsWithTargetGestaltRef, randomMapsWithoutTargetGestaltRef]);
        setTargetExtra('');
        return undefined;
      case 'random-not-gestalt':
        setMapSets([setRandomMapsWithTargetNotGestalt, setRandomMapsWithoutTargetNotGestalt]);
        setMapRefs([randomMapsWithTargetNotGestaltRef, randomMapsWithoutTargetNotGestaltRef]);
        setTargetExtra('-not-gestalt');
        return undefined;
      case 'random-clustered-gestalt':
        setMapSets([setRandomMapsWithTargetNotGestalt, setRandomMapsWithoutTargetNotGestalt]);
        setMapRefs([randomMapsWithTargetNotGestaltRef, randomMapsWithoutTargetNotGestaltRef]);
        setTargetExtra('');
        return undefined;
      case 'random-clustered--not-gestalt':
        setMapSets([setRandomMapsWithTargetNotGestalt, setRandomMapsWithoutTargetNotGestalt]);
        setMapRefs([randomMapsWithTargetNotGestaltRef, randomMapsWithoutTargetNotGestaltRef]);
        setTargetExtra('-not-gestalt');
        return undefined;
      default:
        setMapSets([setRandomMapsWithTargetGestalt, setRandomMapsWithoutTargetGestalt]);
        setMapRefs([randomMapsWithTargetGestaltRef, randomMapsWithoutTargetGestaltRef]);
        setTargetExtra('');
        return undefined;
    }
  }

  // when subject clicks the start button
  const handleStart = (event) => {
    setYesNoDisabled(false);
    setStartDisabled(true);
    setRefAndSets();
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

  // use the react effect to allow the y and n key to be pressed
  useEffect(() => {
    // window.addEventListener('keydown', handleYNkeyPress);
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
                  <img src={targetMapURL} alt="test" className={classes.targetMapImg}/>
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
