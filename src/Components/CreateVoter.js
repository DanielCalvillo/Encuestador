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

class CreateVoter extends Component {
  constructor(props){
    super(props)
    this.state= {
      nombre: "",
      telefono: "",
      correoElectronico: "",
      fechaNacimiento: ""
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
      const { nombre, telefono, correoElectronico, fechaNacimiento } = this.state

      return (
        <div>
          <h1>Encuestado</h1>
  
          <form onSubmit={this.handleSubmit}>
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Nombre"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="nombre"
              value={nombre}
            />
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Teléfono"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="telefono"
              value={telefono}
            />
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Correo electrónico"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="correoElectronico"
              value={correoElectronico}
            />
  
            <TextField
              onChange={this.handleChange}
              size="small"
              label="Fecha de nacimiento"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              name="fechaNacimiento"
              value={fechaNacimiento}
            />
  
            <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              size="large"
            >
              Confirmar Datos
            </Button>
          </form>
        </div>
      );
    }
}

CreateVoter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateVoter);