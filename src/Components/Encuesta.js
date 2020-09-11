import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = makeStyles({
  contenedor: {
    textAlign: 'left',
    fontSize: '1.3rem',
    margin: '20px 0 20px 0'
  },
  pregunta: {
    marginTop: '5px'
  },
  respuestas: {
    marginTop: '10px',
    fontSize:'1rem'
  },
  respuesta: {
    marginRight: '15px'
  }
})

function Encuesta({encuesta}) {
  const classes = styles()

  const [state, setState] = React.useState(({
    firstOption: true,
    secondOption: false,
    thirdOption: false
  }))

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }


  const { firstOption, secondOption, thirdOption} = state
  //handle if there is more than one option checked
  const error = [firstOption, secondOption, thirdOption].filter((isChecked) => isChecked).length >= 2;

  return (
    <div>
      {/* {showTest()} */}
      <h1>Título de la encuesta</h1>
      <hr/>
      <div>
        <h3>Pregunta 1. ¿A qué candidato conoces?</h3>
        <FormControl required error={error} component="fieldset" className={classes.formControl}>
        { error ? <FormLabel component="legend">Sólo elige una opción</FormLabel>: null}
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={firstOption} onChange={handleChange} name="firstOption" />}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={<Checkbox checked={secondOption} onChange={handleChange} name="secondOption" />}
                label="Jason Killian"
              />
              <FormControlLabel
                control={<Checkbox checked={thirdOption} onChange={handleChange} name="thirdOption" />}
                label="Antoine Llorca"
              />
            </FormGroup>
        </FormControl>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  encuesta: state.encuesta
});

export default connect(mapStateToProps)(Encuesta)