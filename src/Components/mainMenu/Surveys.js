import React, {useEffect} from 'react'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Surveys () {

  useEffect( () => {
    try {
      const encuestas = [{}]
    } catch {

    }
  })

  return (
    <div>
      <List component="nav" aria-label="surveys container">

        <ListItemLink href="/survey" >
          <ListItemText primary="Partidarios Nueva oxtotitlan" />
        </ListItemLink>



        <Divider />

        <ListItemLink href="/survey">
          <ListItemText primary="Partidarios Colonia Roma" />
        </ListItemLink>



      </List>
    </div>
  )
}
export default (Surveys)