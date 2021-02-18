import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { findByLabelText } from '@testing-library/react';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: 250,
      height: 150,
      marginBottom: 25,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cards: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        // backgroundColor: 'red',
    },
    content: {
        height: 65,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    avatar: {
        height: 50,
        width: 50,
    },
    value: {
        fontSize: 30,
    }
  });

export default function Dashboard(props) {
//   const [city, setCity] = useState(props.location.city);
//   const [updateTime, setUpdateTime] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);
    const [customersAmount, setCustomersAmount] = useState(0);
    const [dealsAmount, setDealsAmount] = useState(0);
    const [plan, setPlan] = useState(0);
    const [profit, setProfit] = useState(0);

  useEffect(() => {
    // if (props.location.city) {
    //   // setCity(props.location.city);
    //   // sessionStorage.setItem("0", props.location.city);
    //   fetchWeather();
    // }
    getData();
  }, []);

  function getData() {
    setCustomersAmount(5);
    setDealsAmount(2);
    setPlan(40);
    setProfit('12,000');
  }

  

//   if (!weatherData) return null;

const classes = useStyles();

  return (
    <Box className={classes.cards}>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>ВСЬОГО КЛІЄНТІВ</Typography>
        <Box className={classes.content}>
            <Typography className={classes.value} variant="h4">
            {customersAmount}
            </Typography>
            <Avatar className={classes.avatar} style={{backgroundColor: colors.blue[600]}}>
                <PersonIcon />
            </Avatar>
        </Box>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>УГОД СКЛАДЕНО</Typography>
        <Box className={classes.content}>
            <Typography className={classes.value} variant="h4">
            {dealsAmount}
            </Typography>
            <Avatar className={classes.avatar} style={{backgroundColor: colors.orange[600]}}>
                <DescriptionIcon />
            </Avatar>
        </Box>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>ВИКОНАННЯ ПЛАНУ</Typography>
        <Box className={classes.content}>
            <Typography className={classes.value} variant="h4">
            {plan}%
            </Typography>
            <Avatar className={classes.avatar} style={{backgroundColor: colors.red[600]}}>
                <WorkIcon />
            </Avatar>
        </Box>
        <LinearProgress variant="determinate" value={plan} style={{marginTop: 10}}/>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>ЗАГАЛЬНИЙ ПРИБУТОК, ГРН</Typography>
        <Box className={classes.content}>
            <Typography className={classes.value} variant="h4">
            {profit}
            </Typography>
            <Avatar className={classes.avatar} style={{backgroundColor: colors.green[600]}}>
                <AttachMoneyIcon />
            </Avatar>
        </Box>
      </CardContent>
    </Card>

    </Box>
  );
}
