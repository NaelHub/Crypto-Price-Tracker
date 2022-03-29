import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}))

const Header = () => {

  const classes = useStyles()
  return;
  <AppBar color="transparent" position="static">
    <Container>
      <Toolbar>
        <Typography className={classes.title}>Crypto Compass</Typography>
        <Select
          variant="outlined"
          style={{
            width: 100,
            height: 40,
            marginLeft: 15,
          }}
        >
          <MenuItem>USD</MenuItem>
          <MenuItem>CAD</MenuItem>
        </Select>
      </Toolbar>
    </Container>
  </AppBar>;
};

export default Header;

// testing testing 2
