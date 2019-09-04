import React from 'react';
import cc from 'classcat';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import SuccessSnackBar from './SuccessSnackBar';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  textFieldDiv: {
    margin: '20px 0 10px 0',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0',
      flexDirection: 'column',
    },
  },
  textAreaDiv: {
    display: 'flex',
    width: '100%',
  },
  buttonDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xl')]: {
      padding: '20px 15px 15px 15px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px 15px 15px 15px',
    },
  },
  textField: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      marginTop: '8px',
      maxWidth: 'none',
    },
  },
  textArea: {
    padding: '0',
    width: '100%',
  },
  formControl: {
    flexGrow: 1,
    padding: '0 15px 10px 15px',
  },
  inputLabel: {
    color: theme.palette.c.main + ' !important',
  },
  shrink: {
    paddingLeft: '22px',
    fontSize: '1.6em',
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.fontSize.text.xlDown,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.3em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: '1.1em',
    },
  },
  input: {
    background: '#FBECEB !important',
    borderTopLeftRadius: '4px !important',
    borderTopRightRadius: '4px !important',
  },
  button: {
    background: theme.palette.d.main,
    color: theme.palette.c.main,
    '&:hover': {
      background: theme.palette.d.light,
      color: theme.palette.c.main,
    },
    width: 'calc(50% - 15px)',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const TextInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.b.main,
    border: '1px solid #ced4da',
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.a.main,
      color: 'black',
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.only('xxs')]: {
      fontSize: theme.fontSize.text.xxsOnly,
    },
  },
}))(InputBase);

export default function ContactForm() {
  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [open, setOpen] = React.useState(false);

  const openSnackBar = () => {
    setOpen(true);
  };

  const closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'portfolio contact',
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    })
      .then(() => setValues({ name: '', email: '', message: '' }))
      .then(() => openSnackBar())
      .catch(error => alert(error));
    e.preventDefault();
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form
      name='portfolio contact'
      className={classes.container}
      autoComplete='off'
      data-netlify='true'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='portfolio contact' />
      <div className={classes.textFieldDiv}>
        <FormControl className={cc([classes.formControl, classes.textField])}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-name'
            className={cc([classes.inputLabel, classes.shrink])}
          >
            Name
          </InputLabel>
          <TextInput
            id='text-input-name'
            required={true}
            label='Name'
            type='text'
            className={cc([classes.textInput, classes.textField])}
            value={values.name}
            onChange={handleChange('name')}
          />
        </FormControl>
        <FormControl className={cc([classes.formControl, classes.textField])}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-email'
            className={cc([classes.inputLabel, classes.shrink])}
          >
            Email
          </InputLabel>
          <TextInput
            id='text-input-email'
            required={true}
            label='Email'
            type='email'
            className={cc([classes.textInput, classes.textField])}
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>
      </div>
      <div className={classes.textAreaDiv}>
        <FormControl className={cc([classes.formControl, classes.textArea])}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-message'
            className={cc([classes.inputLabel, classes.shrink])}
          >
            Message
          </InputLabel>
          <TextInput
            id='text-input-message'
            required={true}
            label='Message'
            placeholder="Let's work together..."
            className={cc([classes.textInput, classes.textArea])}
            value={values.message}
            onChange={handleChange('message')}
            multiline={true}
            rows={useMediaQuery(theme.breakpoints.only('xxs')) ? 10 : 5}
          />
        </FormControl>
      </div>
      <div className={classes.buttonDiv}>
        <Button variant='contained' type='submit' className={classes.button}>
          SEND
          <SendIcon className={classes.rightIcon} />
        </Button>
      </div>
      <SuccessSnackBar open={open} closeSnackBar={closeSnackBar} />
    </form>
  );
}
