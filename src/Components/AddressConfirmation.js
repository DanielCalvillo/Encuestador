import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formHouseNumbers: {
    display: 'flex',
    justifyContent: 'center'

  },
  formExtNumber: {
    marginRight: "20px"
  }
}));

function AddressConfirmation() {

  const handleClick = e => {
    console.log('Button was clicked');
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

    const classes = useStyles();
    return (
      <div>
        <h1>Dirección</h1>

        <form onSubmit={handleSubmit}>

          <TextField
            size="small"
            label="calle"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <div className={classes.formHouseNumbers}>
            <TextField
            classes={{
              root: classes.formExtNumber
            }}
            label="#Exterior"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin='normal'
            />
            <TextField
            label="#Interior"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin='normal'
            />
          </div>

          <TextField
            size="small"
            label="Colonia"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            size="small"
            label="Código Postal"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <TextField
            size="small"
            label="Estado"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleClick}
            size="large"
          >
          Confirmar Dirección
          </Button>
        </form>
      </div>
    );
}

export default AddressConfirmation;