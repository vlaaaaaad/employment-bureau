import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Button from '@material-ui/core/Button';
import {
    Avatar,
    Box,
    Paper,
    TextField,
    Grid,
    Typography,
    colors,
    makeStyles
  } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: 500,
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 25,
      boxSizing: 'border-box',
    },
    textField: {
      width: '100%',
      marginTop: 25,
    },
    buttonGroup: {
      marginTop: 25,
      display: 'flex',
      justifyContent: 'space-between',
      
      
    },
    loginButton: {
      width: 200,
      
    }

  });

  

export default function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
  }, []);

  function Login() {
    if(username == 'user' && password == 1234) props.setIsLoggedIn(true);
    else alert('Помилка введенних даних!')
  }

  function NoAccount() {
    alert("Ім'я користувача: user, Пароль: 1234");
  }



  return (
    <div> 
      <Paper variant="outlined" elevation={3} className={classes.root}>
        <Typography variant="h5">Вхід до системи</Typography>
      <TextField
          className={classes.textField}
          id="outlined-textarea"
          label="Ім'я користувача"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              Login();
            }
          }}
        />
        <TextField
          className={classes.textField}
          type="password"
          label="Пароль"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              Login();
            }
          }}
        />
        <div className={classes.buttonGroup}>
        <Button
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                onClick={Login}
                className={classes.loginButton}
            >
                Вхід
        </Button>
        <Button color="secondary" onClick={NoAccount}>Немає аккаунта?</Button>
        </div>
      </Paper>
    </div>
  );
}
