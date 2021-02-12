// TODO:
//    * add attribute data for baesmaps
// mui and react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import LinearProgress from '@material-ui/core/LinearProgress';

import RandomMaps from './RandomMaps';
import RandomMapsNoTarget from './RandomMapsNoTarget';
import RandomClusteredMaps from './RandomClusteredMaps';
import DataRecorder from './DataRecorder';
import LastAnswer from './LastAnswer';

// css
import '../css/search.scss';

// AWS s3 bucket with images
const baseURL = 'https://capstone-images-daveism.s3.amazonaws.com/'; // 'http://capstone-images-daveism.s3-website-us-east-1.amazonaws.com/'
const blankIMG = 'src/images/blank.png';
const gestaltTarget = 'src/images/target-01.png';
const notGestaltTarget = 'src/images/target-not-gestalt-01.png';

// constants for layout
const titleHeight = 60;
const buttonHeight = 50;

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
      padding: theme.spacing(0)
    }
  },
  mainTitle: {
    height: `${titleHeight}px`
  },
  buttonsDirecton: {
    textTransform: 'none',
    width: '328px',
    height: `${buttonHeight}px`,
    fontSize: '1.5rem',
    fontWeight: 'normal',
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      display: window.screen.height < 700 ? 'none' : 'inline',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '320px'
    }
  },
  buttonsYesNo: {
    textTransform: 'none',
    width: '100%',
    height: `${buttonHeight}px`,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.85rem'
    }
  },
  searchMapsArea: {
    margin: theme.spacing(0)
  },
  buttonsYesNoArea: {
    margin: theme.spacing(0)
  },
  buttonYesBox: {
    marginLeft: theme.spacing(2)
  },
  buttonNoBox: {
    marginRight: theme.spacing(2)
  },
  sideMapsHolder: {
    height: '100%'
  },
  searchMapsGrid: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 'unset',
      order: 5,
      padding: theme.spacing(0.5)
    }
  },
  searchMapGrid: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2)
    }
  },
  searchMapHolder: {
    height: '500px',
    width: '633px',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      height: '198px',
      width: '253px'
    }
  },
  targetMapHolder: {
    backgroundColor: offWhite,
    borderRadius: '4px',
    height: '200px',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      height: '135px',
      width: '253px',
      maxWidth: '253px'
    }
  },
  statGridLeft: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    height: '145px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0),
      order: 2,
      height: '121px',
      display: window.screen.height < 700 ? 'none' : 'flex'
    }
  },
  statGridRight: {
    paddingTop: theme.spacing(1),
    height: '145px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0),
      order: 2,
      height: '121px',
      display: window.screen.height < 700 ? 'none' : 'flex'
    }
  },
  statTitle: {
    marginLeft: theme.spacing(2),
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      display: 'none'
    }
  },
  statProgressOverall: {
    marginLeft: theme.spacing(2),
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      display: 'none'
    }
  },
  statProgressTrial: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  statProgressTrialBar: {
    width: '100%',
    height: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  targetTitle: {
    height: '60px',
    [theme.breakpoints.down('sm')]: {
      order: 3,
      paddingLeft: theme.spacing(2),
      height: '40px'
    }
  },
  targetMapGrid: {
    paddingTop: theme.spacing(1),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      order: 4,
      paddingLeft: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  searchMapsTitle: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      height: '45px'
    }
  },
  statBoxLeft: {
    height: '145px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      height: '121px'
    }
  },
  statBoxRight: {
    height: '145px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      height: '121px'
    }
  },
  targetMapImg: {
    width: '310px',
    height: '66px',
    [theme.breakpoints.down('sm')]: {
      width: '225px',
      height: '48px'
    }
  },
  searchMapImg: {
    height: '500px',
    width: '633px',
    border: `2px solid ${offWhite}`,
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      height: '198px',
      width: '253px'
    }
  },
  StartGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: `${theme.spacing(1)} !important`,
      paddingTop: `${theme.spacing(0)} !important`,
      order: 7
    }
  },
  yesNoGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: `${theme.spacing(1)} !important`,
      paddingTop: `${theme.spacing(0)} !important`,
      marginBottom: `${theme.spacing(1)} !important`,
      paddingBottom: `${theme.spacing(0)} !important`,
      order: 6
    }
  },
  h3: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1)
    }
  },
  none: {
    display: 'none'
  },
  nextTargetModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextTargetInfo: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    backgroundColor: theme.palette.background.paper,
    border: '0px solid transparent',
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3)
  },
  nextTargetInfoCenter: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start'
  },
  nextTargetInfoEnd: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  nextTargetDescription: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '.75em'
    }
  },
  nextTargetDescriptionMobile: {
    marginBottom: theme.spacing(2),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      fontSize: '.75rem'
    }
  },
  agreementModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  agreementInfo: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    backgroundColor: theme.palette.background.paper,
    border: '0px solid transparent',
    borderRadius: '4px',
    padding: theme.spacing(2, 4, 3)
  },
  agreementInfoTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
      marginBottom: theme.spacing(0.5)
    }
  },
  agreementInfoDecription: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '.75em',
      marginBottom: theme.spacing(0.5)
    }
  },
  agreementInfoContact: {
    fontSize: '.85rem',
    marginBottom: theme.spacing(3),
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.60rem'
    }
  },
  agreementCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }

  },
  agreeButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      width: '100%'
    }
  },
  StatDataTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.1em',
    color: '#888888',
    marginTop: theme.spacing(0)
  },
  StatData: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2.75em',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    color: '#000000',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.25em'
    }
  },
  StatDataDescription: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1em',
    color: '#888888',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    height: '25px'
  },
  StatDataDescriptionSub: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.9em',
    color: '#888888',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0)
  },
  statProgress: {
    width: '100%'
  }
}));

const experimentTypes = ['random-gestalt', 'random-not-gestalt', 'random-clustered-gestalt', 'random-clustered-not-gestalt'];

export default function SearchMain() {
  const uuid = () => (crypto.getRandomValues(new Uint32Array(4)).join('-'));

  const [UID, setUID] = React.useState(uuid()); // eslint-disable-line no-unused-vars
  const dataRecorder = new DataRecorder(UID);

  const [progressTrial, setProgressTrial] = React.useState(0);
  const [progressOverall, setProgressOverall] = React.useState(0);
  const [trialCount, setTrialCount] = React.useState(0);

  const [times, _setTimes] = React.useState([]);
  const timesRef = React.useRef(times);
  const setTimes = (data) => {
    timesRef.current = data;
    _setTimes(data);
  };

  const [currentTarget, _setCurrentTarget] = React.useState(0);
  const currentTargetRef = React.useRef(currentTarget);
  const setCurrentTarget = (data) => {
    currentTargetRef.current = data;
    _setCurrentTarget(data);
  };

  const [answers, _setAnswers] = React.useState([]);
  const answersRef = React.useRef(answers);
  const setAnswers = (data) => {
    answersRef.current = data;
    _setAnswers(data);
  };

  const [answerCorrect, setAnswerCorrect] = React.useState('none');

  const [avgCorrect, _setAvgCorrect] = React.useState([0]);
  const avgCorrectRef = React.useRef(avgCorrect);
  const setAvgCorrect = (data) => {
    avgCorrectRef.current = data;
    _setAvgCorrect(data);
  };

  const [avgTime, _setAvgTime] = React.useState([0]);
  const avgTimeRef = React.useRef(avgTime);
  const setAvgTime = (data) => {
    avgTimeRef.current = data;
    _setAvgTime(data);
  };
  // set React state via React Hooks
  // used to detect the first call - for getting state from url
  // most of these need a ref so we can use window key press
  //   which enables the user use the y and n key for yes and no
  const [timestamp, _setTimestamp] = useState(Date.now());
  const timestampRef = React.useRef(timestamp);
  const setTimestamp = (data) => {
    timestampRef.current = data;
    _setTimestamp(data);
  };

  const [yesNoDisabled, _setYesNoDisabled] = useState(true);
  const yesNoDisabledRef = React.useRef(yesNoDisabled);
  const setYesNoDisabled = (data) => {
    yesNoDisabledRef.current = data;
    _setYesNoDisabled(data);
  };

  const [allExperiments, _setAllExperiments] = useState(experimentTypes);
  const allExperimentsRef = React.useRef(allExperiments);
  const setAllExperiments = (data) => {
    allExperimentsRef.current = data;
    _setAllExperiments(data);
  };

  const [startDisabled, _setStartDisabled] = useState(true);
  const setStartDisabledRef = React.useRef(startDisabled);
  const setStartDisabled = (data) => {
    setStartDisabledRef.current = data;
    _setStartDisabled(data);
  };

  // random noise background and target is gestalt
  const [randomMapsWithTargetGestalt, _setRandomMapsWithTargetGestalt] = useState(RandomMaps());
  const randomMapsWithTargetGestaltRef = React.useRef(randomMapsWithTargetGestalt);
  const setRandomMapsWithTargetGestalt = (data) => {
    randomMapsWithTargetGestaltRef.current = data;
    _setRandomMapsWithTargetGestalt(data);
  };

  // random noise background and target is missing
  const [randomMapsWithoutTargetGestalt,
    _setRandomMapsWithoutTargetGestalt] = useState(RandomMaps());
  const randomMapsWithoutTargetGestaltRef = React.useRef(randomMapsWithoutTargetGestalt);
  const setRandomMapsWithoutTargetGestalt = (data) => {
    randomMapsWithoutTargetGestaltRef.current = data;
    _setRandomMapsWithoutTargetGestalt(data);
  };

  // random noise background and target is not as gestalt
  const [randomMapsWithTargetNotGestalt,
    _setRandomMapsWithTargetNotGestalt] = useState(RandomMapsNoTarget());
  const randomMapsWithTargetNotGestaltRef = React.useRef(randomMapsWithTargetNotGestalt);
  const setRandomMapsWithTargetNotGestalt = (data) => {
    randomMapsWithTargetNotGestaltRef.current = data;
    _setRandomMapsWithTargetNotGestalt(data);
  };

  // random noise background and target is not as gestalt missng
  const [randomMapsWithoutTargetNotGestalt,
    _setRandomMapsWithoutTargetNotGestalt] = useState(RandomMapsNoTarget());
  const randomMapsWithoutTargetNotGestaltRef =
    React.useRef(randomMapsWithoutTargetNotGestalt);
  const setRandomMapsWithoutTargetNotGestalt = (data) => {
    randomMapsWithoutTargetNotGestaltRef.current = data;
    _setRandomMapsWithoutTargetNotGestalt(data);
  };

  // clustered
  const [randomMapsClusteredWithTargetGestalt,
    _setRandomMapsClusteredWithTargetGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithTargetGestaltRef =
    React.useRef(randomMapsClusteredWithTargetGestalt);
  const setRandomMapsClusteredWithTargetGestalt = (data) => {
    randomMapsClusteredWithTargetGestaltRef.current = data;
    _setRandomMapsClusteredWithTargetGestalt(data);
  };

  const [randomMapsClusteredWithoutTargetGestalt,
    _setRandomMapsClusteredWithoutTargetGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithoutTargetGestaltRef =
    React.useRef(randomMapsClusteredWithoutTargetGestalt);
  const setRandomMapsClusteredWithoutTargetGestalt = (data) => {
    randomMapsClusteredWithoutTargetGestaltRef.current = data;
    _setRandomMapsClusteredWithoutTargetGestalt(data);
  };

  const [randomMapsClusteredWithTargetNotGestalt,
    _setRandomMapsClusteredWithTargetNotGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithTargetNotGestaltRef =
    React.useRef(randomMapsClusteredWithTargetNotGestalt);
  const setRandomMapsClusteredWithTargetNotGestalt = (data) => {
    randomMapsClusteredWithTargetNotGestaltRef.current = data;
    _setRandomMapsClusteredWithTargetNotGestalt(data);
  };

  const [randomMapsClusteredWithoutTargetNotGestalt,
    _setRandomMapsClusteredWithoutTargetNotGestalt] = useState(RandomClusteredMaps());
  const randomMapsClusteredWithoutTargetNotGestaltRef =
    React.useRef(randomMapsClusteredWithoutTargetNotGestalt);
  const setRandomMapsClusteredWithoutTargetNotGestalt = (data) => {
    randomMapsClusteredWithoutTargetNotGestaltRef.current = data;
    _setRandomMapsClusteredWithoutTargetNotGestalt(data);
  };

  const [searchMapURL, _setSearchMapURL] = useState(blankIMG);
  const searchMapURLRef = React.useRef(searchMapURL);
  const setSearchMapURL = (data) => {
    searchMapURLRef.current = data;
    _setSearchMapURL(data);
  };

  const [targetMapURL, _setTargetMapURL] = useState(gestaltTarget);
  const targetMapURLRef = React.useRef(targetMapURL);
  const setTargetMapURL = (data) => {
    targetMapURLRef.current = data;
    _setTargetMapURL(data);
  };

  // blank string or -not-gestalt
  const [targetExtra, _setTargetExtra] = useState('');
  const targetExtraRef = React.useRef(targetExtra);
  const setTargetExtra = (data) => {
    targetExtraRef.current = data;
    _setTargetExtra(data);
  };

  const [mapRefs, _setMapRefs] = useState([randomMapsWithTargetGestaltRef,
    randomMapsWithoutTargetGestaltRef]);
  const mapRefsRef = React.useRef(mapRefs);
  const setMapRefs = (data) => {
    mapRefsRef.current = data;
    _setMapRefs(data);
  };

  const [mapSets, _setMapSets] = useState([setRandomMapsWithTargetGestalt,
    setRandomMapsWithoutTargetGestalt]);
  const mapSetsRef = React.useRef(mapSets);
  const setMapSets = (data) => {
    mapSetsRef.current = data;
    _setMapSets(data);
  };

  const classes = useStyles();

  const [openNext, setOpenNext] = React.useState(false);

  const handleOpenNext = () => {
    setOpenNext(true);
  };

  const handleCloseNext = () => {
    setOpenNext(false);
  };

  const [openagreement, setOpenagreement] = React.useState(true);

  const handleDisagree = () => {
    setYesNoDisabled(true);
    setStartDisabled(true);
    setOpenagreement(false);
  };

  const handleagree = () => {
    setStartDisabled(false);
    setOpenagreement(false);
    setRefAndSets();
    setOpenNext(true);
  };

  // generate ranom numbers to pull in map
  const getRandomMap = (mapArray) => {
    const mapNumber = Math.floor(Math.random() * mapArray.length);
    return mapArray[mapNumber];
  };

  // remove map from array
  const removeRandomNumber = (array, mapName) => (array.filter((value) => (value !== mapName)));

  // sets/gets targetname based on three target types, non, gestalt, and not gestalt
  const getTargetName = (target) => {
    if (target === 0) return 'target-none-';
    if (target >= 1) {
      const targetNumber =
        target.toString().length < 2 ? `0${target.toString()}` : target.toString();
      return `target${targetExtraRef.current}-${targetNumber}-`;
    }
    return null;
  };

  // get with or without target array used to retreive the correct map
  const getWithORwithout = (withORwithout) => (withORwithout === 'with' ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50] : [0]);

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
    // return map name
    return mapURL;
  };

  const setRefAndSets = () => {
    if (allExperimentsRef.current.length === 0) {
      setYesNoDisabled(true);
      setStartDisabled(true);
      setSearchMapURL(blankIMG);
      setTargetMapURL(blankIMG);
      return null;
    }

    const experiment = getRandomMap(allExperimentsRef.current);
    const percentComplete =
      ((experimentTypes.length - allExperimentsRef.current.length) / experimentTypes.length) * 100;

    setProgressOverall(percentComplete);

    setAllExperiments(removeRandomNumber(allExperimentsRef.current, experiment));
    switch (experiment) {
      case 'random-gestalt':
        setMapSets([setRandomMapsWithTargetGestalt,
          setRandomMapsWithoutTargetGestalt]);
        setMapRefs([randomMapsWithTargetGestaltRef,
          randomMapsWithoutTargetGestaltRef]);
        setTargetExtra('');
        setTargetMapURL(gestaltTarget);
        setTrialCount(randomMapsWithTargetGestaltRef.current.length +
            randomMapsWithoutTargetGestaltRef.current.length);
        return undefined;
      case 'random-not-gestalt':
        setMapSets([setRandomMapsWithTargetNotGestalt,
          setRandomMapsWithoutTargetNotGestalt]);
        setMapRefs([randomMapsWithTargetNotGestaltRef,
          randomMapsWithoutTargetNotGestaltRef]);
        setTargetExtra('-not-gestalt');
        setTargetMapURL(notGestaltTarget);
        setTrialCount(randomMapsWithTargetNotGestaltRef.current.length +
            randomMapsWithoutTargetNotGestaltRef.current.length);
        return undefined;
      case 'random-clustered-gestalt':
        setMapSets([setRandomMapsClusteredWithTargetGestalt,
          setRandomMapsClusteredWithoutTargetGestalt]);
        setMapRefs([randomMapsClusteredWithTargetGestaltRef,
          randomMapsClusteredWithoutTargetGestaltRef]);
        setTargetExtra('');
        setTargetMapURL(gestaltTarget);
        setTrialCount(randomMapsClusteredWithTargetGestaltRef.current.length +
            randomMapsClusteredWithoutTargetGestaltRef.current.length);
        return undefined;
      case 'random-clustered-not-gestalt':
        setMapSets([setRandomMapsClusteredWithTargetNotGestalt,
          setRandomMapsClusteredWithoutTargetNotGestalt]);
        setMapRefs([randomMapsClusteredWithTargetNotGestaltRef,
          randomMapsClusteredWithoutTargetNotGestaltRef]);
        setTargetExtra('-not-gestalt');
        setTargetMapURL(notGestaltTarget);
        setTrialCount(randomMapsClusteredWithTargetNotGestaltRef.current.length +
            randomMapsClusteredWithoutTargetNotGestaltRef.current.length);
        return undefined;
      default:
        setMapSets([setRandomMapsWithTargetGestalt,
          setRandomMapsWithoutTargetGestalt]);
        setMapRefs([randomMapsWithTargetGestaltRef,
          randomMapsWithoutTargetGestaltRef]);
        setTargetExtra('');
        setTargetMapURL(gestaltTarget);
        setTrialCount(randomMapsWithTargetGestaltRef.current.length +
            randomMapsWithoutTargetGestaltRef.current.length);
        return undefined;
    }
  };

  const timeEllapsed = () => {
    const end = Date.now();
    return end - timestampRef.current;
  };

  // gets the net map
  const getNextMap = () => {
    const targetYesNo = getRandomMap([0, 1]);
    const useWith = targetYesNo ? 'with' : 'without';
    const ref = mapRefsRef.current[targetYesNo];
    const set = mapSetsRef.current[targetYesNo];
    const otherRef = mapRefsRef.current[targetYesNo ? 0 : 1];

    const currentTrialCount = ref.current.length + otherRef.current.length;
    const percentComplete = ((trialCount - currentTrialCount) / trialCount) * 100;
    setProgressTrial(percentComplete);
    setCurrentTarget(targetYesNo);

    if (ref.current.length === 0 && otherRef.current.length === 0) {
      window.removeEventListener('keydown', handleYNkeyPress); // eslint-disable-line no-use-before-define
      setYesNoDisabled(true);
      setStartDisabled(false);
      setSearchMapURL(blankIMG);
      setRefAndSets();
      setOpenNext(true);
      return null;
    }

    nextMapURL({ ref, set, useWith });
    if (ref.current.length === 0) getNextMap();
    return null;
  };

  const calcAvgTime = (timeEllapsedArray) => {
    setTimes([...timesRef.current, timeEllapsedArray]);
    const tempAvg = timesRef.current.reduce((p, c) => p + c, 0) / timesRef.current.length;
    const averageTimeMS = tempAvg > 0 ? tempAvg : 0;
    const averageTime = ((averageTimeMS % 60000) / 1000);
    setAvgTime(Number((averageTime).toFixed(2)));
  };

  const calcAvgCorrect = (theAnswer) => {
    const value = theAnswer === 'Y' ? 1 : 0;
    currentTargetRef.current === value ?
      setAnswers([...answersRef.current, 1]) : setAnswers([...answersRef.current, 0]);
    const tempAvg = Math.round((answersRef.current.reduce((p, c) => p + c, 0) /
      answersRef.current.length) * 100) / 100;
    const averageCorrect = tempAvg > 0 ? tempAvg * 100 : 0;
    setAvgCorrect(Number((averageCorrect).toFixed(0)));
  };

  const recordData = (answer, timetaken) => {
    const dataForAPI = {
      answer,
      timetaken,
      hadtarget: currentTargetRef.current === 0 ? 'N' : 'Y',
      targetmapurl: targetMapURLRef.current,
      searchmapurl: searchMapURLRef.current.replace('https://capstone-images-daveism.s3.amazonaws.com/', ''),
      screentype: window.innerWidth < 960 ? 'small' : 'large',
      mobile: window.screen.width < 500 ? 'Y' : 'N'
    };
    dataRecorder.setEvent(dataForAPI);
  };

  const howAnswered = (keypressed) => {
    if (yesNoDisabledRef.current) return null;
    switch (keypressed) {
      case 'Y': {
        const yesTime = timeEllapsed();
        calcAvgTime(yesTime);
        calcAvgCorrect(keypressed);
        setTimestamp(Date.now());
        recordData(keypressed, yesTime);
        if (currentTargetRef.current === 1) {
          setAnswerCorrect(true);
        } else {
          setAnswerCorrect(false);
        }
        getNextMap();
        return keypressed;
      }
      case 'N': {
        const noTime = timeEllapsed();
        setTimestamp(Date.now());
        calcAvgCorrect(keypressed);
        calcAvgTime(noTime);
        recordData(keypressed, noTime);
        if (currentTargetRef.current === 1) {
          setAnswerCorrect(false);
        } else {
          setAnswerCorrect(true);
        }
        getNextMap();
        return keypressed;
      }
      default:
        return null;
    }
  };

  const handleYNkeyPress = (event) => {
    if (event.key) {
      howAnswered(event.key.toUpperCase());
      return null;
    }
    howAnswered(event.target.innerText.toUpperCase() === 'YES' ? 'Y' : 'N');
    return null;
  };

  // when subject clicks the start button
  const handleStart = (event) => {
    setYesNoDisabled(false);
    setStartDisabled(true);
    window.addEventListener('keydown', handleYNkeyPress);
    setTimestamp(Date.now());
    getNextMap();
  };

  const bodyNext = (
    <div className={classes.nextTargetInfo}>
      <h2 id='simple-modal-title'>Directions</h2>
      <p id='simple-modal-description' className={classes.nextTargetDescription}>
        You are looking for the following object on the map,
        the color of the object will NOT change.
      </p>
      <div className={classes.nextTargetInfoCenter}>
        <img src={targetMapURL} alt='test' className={classes.targetMapImg}/>
      </div>
      <p id='simple-modal-description' className={classes.nextTargetDescription}>
        It is important that you answer as quickly as you can. If
        the object does not exist on the map,
        you should answer no. If the object does exist on the map,
        you should answer yes. You can answer
        yes or no by using the <strong>&apos;y&apos;</strong> or <strong>&apos;
        n&apos;</strong> key on the keyboard or
        clicking the <strong>yes</strong> or <strong>no</strong> button.
      </p>
      <p id='simple-modal-description' className={classes.nextTargetDescriptionMobile}>
        This task will be more comfortable on a larger screen size. While it
        is not required, you
        may want to consider switching to a larger screen such as a tablet, a
        laptop, or a secondary monitor.
      </p>
      <p id='simple-modal-description' className={classes.nextTargetDescription}>
        To begin the close this box and then click  <strong>Start Experiment</strong>.
      </p>
      <div className={classes.nextTargetInfoEnd}>
        <Button onClick={handleCloseNext} color='primary' variant='contained' >Close</Button>
      </div>
    </div>
  );

  const bodyagreement = (
    <div className={classes.agreementInfo}>
      <h2 id='simple-modal-title' className={classes.agreementInfoTitle}>Study Participation agreement</h2>
      <p id='simple-modal-description' className={classes.agreementInfoDecription}>
        Thank you for taking part in this study. By using the following website,
        you are agreeing to participate in
        a study about how people use web-presented maps. We will collect information about your
        interactions with this site but not any personally identifiable information. The only
        people with access
        to the study data will the researchers. However, the data will be summarized, shared,
        and disseminated
        in talks, blogs, and possibly research journals. There is no cost to you to participate
        in this research
        study and you will not be compensated. There are no known risks in the following tasks.
      </p>
      <p id='simple-modal-description' className={classes.agreementInfoDecription}>
        By agreeing to this, you have acknowledged that you have read the contents of
        this consent, are an
        adult over 18 years of age, and you are giving consent to participate in this study
      </p>
      <p id='simple-modal-contact' className={classes.agreementInfoContact}>
        The researchers conducting this study are Michael Neelon, PhD and
        David Michelson. For questions or more information concerning this
        research you may contact Dr. Neelon at 828-250-2359 or mneelon@unca.edu,
        or David Michelson at dmichels@unca.edu.  If you have any questions about your
        rights as a research subject, you may contact the UNC Asheville Institutional
        Review Board at 828.251.6313 or irb@unca.edu.
      </p>
      <div className={classes.agreementCenter}>
        <Button onClick={handleagree} className={classes.agreeButton} color='primary' variant='contained' >I agree</Button>
        <Button onClick={handleDisagree} className={classes.agreeButton} color='default' variant='contained' >I do not agree</Button>
      </div>
    </div>
  );

  // use the react effect to allow the y and n key to be pressed
  useEffect(() => (window.removeEventListener('keydown', handleYNkeyPress)), []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1} height='100%' >

        <Grid container spacing={2} className={classes.searchMapsArea}>
          <Grid item xs={12} md={4} m={2}display='flex' flex={1}>

            <Grid container spacing={0} className={classes.sideMapsHolder}>
              <Grid onClick={handleOpenNext} item xs={12} display='flex' flex={1} className={classes.targetTitle}>
                <h3 className={classes.h3}>Look for this object</h3>
              </Grid>
              <Grid onClick={handleOpenNext} item xs={12} display='flex' flex={1} className={classes.targetMapGrid}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems='center' className={classes.targetMapHolder}>
                  <img src={targetMapURL} alt='test' className={classes.targetMapImg}/>
                </Box>
              </Grid>
              <Button onClick={handleOpenNext} variant='outlined' color='default' className={classes.buttonsDirecton} height='100%'>Directions</Button>
                <Grid item xs={12} display='flex' flex={1} className={classes.statTitle}>
                   {progressOverall}% of all trials complete
                </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.statProgressOverall}>
                <LinearProgress color='primary' variant="determinate" value={progressOverall} className={classes.statProgress}/>
              </Grid>
              <Grid item xs={6} display='flex' flex={1} className={classes.statGridLeft}>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={0} flex={1} border={1} borderColor='grey.300' className={classes.statBoxLeft}>
                  <h3 className={classes.StatDataTitle}>
                     Avg Correct
                   </h3>
                   <p className={classes.StatData}>
                      {avgCorrect}%
                  </p>
                  <p className={classes.StatDataDescription}>
                    <LastAnswer answerCorrect={answerCorrect} />
                  </p>
               </Box>
              </Grid>
              <Grid item xs={6} display='flex' flex={1} className={classes.statGridRight}>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' m={0} flex={1} border={1} borderColor='grey.300' className={classes.statBoxRight}>
                  <h3 className={classes.StatDataTitle}>
                     Avg Time
                   </h3>
                   <p className={classes.StatData}>
                      {avgTime}
                  </p>
                  <p className={classes.StatDataDescription}>
                     seconds
                 </p>
                </Box>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} md={8} display='flex' flex={1} className={classes.searchMapsGrid}>
            <Grid container spacing={0} display='flex'>
              <Grid item xs={12} display='flex' flex={1} className={classes.searchMapsTitle}>
                <h3 className={classes.h3}>On this map</h3>
                <span className={classes.statProgressTrial}>
                  <LinearProgress color='primary' variant="determinate" value={progressTrial} className={classes.statProgressTrialBar}/>
                </span>
              </Grid>
              <Grid item xs={12} display='flex' flex={1} className={classes.searchMapGrid}>
                <Box display='flex' flexDirection='row' flex={1} justifyContent='center' alignItems='center' className={classes.searchMapHolder} >
                  <img src={searchMapURL} className={classes.searchMapImg}/>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.buttonsYesNoArea}>

          <Grid item xs={12} md={4} display='flex' flex={1} className={classes.StartGrid}>
            <Box display='flex' flexDirection='row' m={1} flex={1}>
              <Button onClick={handleStart} disabled={startDisabled} variant='contained' color='primary' className={classes.buttonsYesNo} height='100%'>Start Experiment</Button>
            </Box>
          </Grid>

          <Grid item xs={6} md={4} display='flex' flex={1} className={classes.yesNoGrid}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonYesBox}>
              <Button onClick={handleYNkeyPress} disabled={yesNoDisabled} variant='contained' value='Y' className={classes.buttonsYesNo} height='100%'>Yes</Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} display='flex' flex={1} className={classes.yesNoGrid}>
            <Box display='flex' flexDirection='row' m={1} flex={1} className={classes.buttonNoBox}>
              <Button onClick={handleYNkeyPress} disabled={yesNoDisabled} variant='contained' value='N' className={classes.buttonsYesNo} height='100%'>No</Button>
            </Box>
          </Grid>

        </Grid>

      </Grid>
      <Modal open={openNext} onClose={handleCloseNext} className={classes.nextTargetModal} aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description' >
        {bodyNext}
      </Modal>
      <Modal open={openagreement} onClose={handleDisagree} className={classes.agreementModal} aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description' >
        {bodyagreement}
      </Modal>
    </div>
  );
}

SearchMain.propTypes = {
  ref: PropTypes.func,
  set: PropTypes.func,
  useWith: PropTypes.string
};
