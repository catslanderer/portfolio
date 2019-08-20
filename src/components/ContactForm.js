import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    width: '10%',
    marginLeft: '1%',
    marginRight: '1%',
  },
  textArea: {
    width: '22%',
    marginLeft: '1%',
    marginRight: '1%',
  },
}));

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
      <div>
        <TextField
          id='outlined-name'
          label='Name'
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin='normal'
          variant='filled'
          multiline={false}
        />
        <TextField
          id='outlined-email'
          label='Email'
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin='normal'
          variant='filled'
          multiline={false}
        />
      </div>
      <TextField
        id='outlined-message'
        label='Message'
        className={classes.textArea}
        value={values.message}
        onChange={handleChange('message')}
        margin='normal'
        variant='filled'
        multiline={true}
        rows={10}
      />
    </form>
  );
}
