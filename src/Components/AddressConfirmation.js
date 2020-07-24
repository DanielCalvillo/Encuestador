import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  formHouseNumbers: {
    display: 'flex',
    justifyContent: 'center'

  },
  formExtNumber: {
    marginRight: "20px"
  }
});

class AddressConfirmation extends Component {
  constructor(props){
    super(props)
    this.state= {
      calle: "",
      numExterior: "",
      numInterior: "",
      colonia: "",
      codPostal: "",
      estado: ""
    }
  }

  handleChange = e => {
    this.setState({
        ...this.state.form,
        [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

    render(){
      const { classes } = this.props;
      const { calle, numExterior, numInteror, colonia, codPostal, estado } = this.state

      return (
        <div>
          <h1>Dirección</h1>
  
          <form onSubmit={this.handleSubmit}>
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="calle"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="calle"
              value={calle}
            />
  
            <div className={classes.formHouseNumbers}>
              <TextField
                onChange={this.handleChange}
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
                name="numExterior"
                value={numExterior}
              />

              <TextField
                onChange={this.handleChange}
                label="#Interior"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                margin='normal'
                name="numInterior"
                value={numInteror}
              />
            </div>
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="colonia"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="colonia"
              value={colonia}
            />
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Código Postal"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="codPostal"
              value={codPostal}
            />
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Estado"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="estado"
              value={estado}
            />
  
            <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              onClick={this.handleClick}
              size="large"
            >
            Confirmar Dirección
            </Button>
          </form>
        </div>
      );
    }
}

AddressConfirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressConfirmation);