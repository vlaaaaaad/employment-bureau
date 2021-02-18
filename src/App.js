import './App.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import reactDom from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Dashboard from './Dashboard';
import Customers from './Customers';
import Workplaces from './Workplaces';
import Contracts from './Contracts';
import Login from './Login';

const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: 'none',
    color: "#616161",
  },
  active: {
    color: "#3f51b5",
  },
  button: {
    marginLeft: 'auto',
    color: 'white',
    textDecoration: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    
    height: 40,
    width: 40,
  },
}));

const items = [
  {
    href: '/',
    icon: <DashboardIcon />,
    title: 'Панель керування'
  },
  {
    href: '/employees',
    icon: <PersonIcon />,
    title: 'Працівники'
  },
  {
    href: '/employers',
    icon: <WorkIcon />,
    title: 'Роботодавці'
  },
  {
    href: '/contracts',
    icon: <DescriptionIcon />,
    title: 'Контракти'
  },
  // {
  //   href: '/about',
  //   icon: <InfoIcon />,
  //   title: 'Інформація'
  // },
];

export default function App() { {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function TestLogin() {
    setIsLoggedIn(true);
  }
  function TestLogout() {
    setIsLoggedIn(false);
  }
  function HandleLogin(newValue) {
    setIsLoggedIn(newValue);
  }

  useEffect(() => {
    document.title = "Бюро з працевлаштування"
  }, []);

  if(!isLoggedIn) return (<Login setIsLoggedIn={setIsLoggedIn} />);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Бюро з працевлаштування
          </Typography>
          <IconButton aria-label="delete" className={classes.button} onClick={TestLogout}>
            <ExitToAppIcon />
          </IconButton>
          {/* <NavLink to={'/account'} className={classes.button} >
          
            <AccountCircleIcon style={{ fontSize: 30 }}/>
          <Avatar className={classes.orange}>A</Avatar> 
          </NavLink>  */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          {items.map((item) => (
            <NavLink to={item.href} className={classes.link} exact activeClassName={classes.active} >
              <ListItem button key={item.title} >
                <ListItemIcon style={{ color: "inherit"}}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </NavLink>
          ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <Switch>
        <main className={classes.content}>
        <Toolbar />
        <Route exact path='/'>
          <Dashboard />
          </Route>
        <Route exact path='/employees'><Typography variant="h3"><Customers /></Typography></Route>
        <Route exact path='/employers'><Typography variant="h3"><Workplaces /></Typography></Route>
        <Route exact path='/contracts'><Typography variant="h3"><Contracts /></Typography></Route>
        {/* <Route exact path='/about'><Typography variant="h3">Інформація</Typography></Route> */}
        <Route exact path='/account'><Typography variant="h3">Аккаунт</Typography></Route>
        </main>
      </Switch>
      </Router>
    </div>
  );
}
}
