import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Map from './Map';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();

  const [difficulty, setDifficulty] = React.useState('beginner');
  const [location, setLocation] = React.useState('davis');

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}><Map /></Grid>
      <Grid item xs={12} sm={8} md={5}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsRunIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{marginBottom : '25px'}}>
            Runner App
          </Typography>
          <FormControl component="fieldset">
            <Typography style={{marginBottom : '10px'}}>Choose your route difficulty:</Typography>
            <RadioGroup aria-label="difficulty" name="difficulty1" value={difficulty} onChange={handleDifficulty}>
              <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
              <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
              <FormControlLabel value="expert" control={<Radio />} label="Expert" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <Typography style={{marginTop : '25px', marginBottom : '10px'}}>Choose your location:</Typography>
            <RadioGroup aria-label="location" name="location1" value={location} onChange={handleLocation}>
              <FormControlLabel value="davis" control={<Radio />} label="Davis" />
              <FormControlLabel value="sacramento" control={<Radio />} label="Sacramento" />
            </RadioGroup>
          </FormControl>
          <Button
              type="submit"
              variant="outlined"
              color="secondary"
              className={classes.submit}
            >
              Enter
            </Button>
          {/* <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form> */}
        </div>
      </Grid>
    </Grid>
  );
}
