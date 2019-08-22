import React from 'react';
import clsx from 'clsx';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
  },
  container: {
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
      flexDirection: 'column',
    },
  },
  textAreaDiv: {
    display: 'flex',
    width: '100%',
  },
  buttonDiv: {
    padding: '15px',
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  textField: {
    flexGrow: 1,
    maxWidth: '400px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
    },
  },
  textArea: {
    width: '100%',
    maxWidth: '800px',
  },
  formControl: {
    flexGrow: 1,
    padding: '0 15px 15px 15px',
  },
  inputLabel: {
    color: theme.palette.a.xdark + ' !important',
  },
  shrink: {
    fontSize: '1.6em',
    paddingLeft: '22px',
  },
  input: {
    background: '#FBECEB !important',
    borderTopLeftRadius: '4px !important',
    borderTopRightRadius: '4px !important',
  },
  button: {
    // marginLeft: '15px',
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
  multiline: {
    padding: 0,
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.b.main,
    border: '1px solid #ced4da',
    fontSize: '1em',
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.a.main,
      color: 'black',
    },
  },
}))(InputBase);

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    console.log('submit!');
    console.log(values.name, values.email, values.message);
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
      .then(() => alert('Success!'))
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
      noValidate
      autoComplete='off'
      data-netlify='true'
      data-netlify-recaptcha='true'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='portfolio contact' />
      <div className={classes.textFieldDiv}>
        <FormControl className={clsx(classes.formControl, classes.textField)}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-name'
            className={clsx(classes.inputLabel, classes.shrink)}
          >
            Name
          </InputLabel>
          <TextInput
            id='text-input-name'
            required={true}
            label='Name'
            className={clsx(classes.textInput, classes.textField)}
            value={values.name}
            onChange={handleChange('name')}
          />
        </FormControl>
        <FormControl className={clsx(classes.formControl, classes.textField)}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-email'
            className={clsx(classes.inputLabel, classes.shrink)}
          >
            Email
          </InputLabel>
          <TextInput
            id='text-input-email'
            required={true}
            label='Email'
            className={clsx(classes.textInput, classes.textField)}
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>
      </div>
      <div className={classes.textAreaDiv}>
        <FormControl className={clsx(classes.formControl, classes.textArea)}>
          <InputLabel
            required={true}
            shrink
            htmlFor='text-input-message'
            className={clsx(classes.inputLabel, classes.shrink)}
          >
            Message
          </InputLabel>
          <TextInput
            id='text-input-message'
            required={true}
            label='Message'
            placeholder='I love your work 😉'
            className={clsx(
              classes.textInput,
              classes.textArea,
              classes.multiline
            )}
            value={values.message}
            onChange={handleChange('message')}
            multiline={true}
            rows={5}
          />
        </FormControl>
      </div>
      <div data-netlify-recaptcha='true' />
      <div className={classes.buttonDiv}>
        <Button
          variant='contained'
          type='submit'
          color='secondary'
          className={classes.button}
        >
          SEND
          <SendIcon className={classes.rightIcon} />
        </Button>
      </div>
    </form>
  );
}
