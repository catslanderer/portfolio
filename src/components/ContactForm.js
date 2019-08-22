import React from 'react';
import clsx from 'clsx';
import { fade, withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
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

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete='off'>
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
    </form>
  );
}
