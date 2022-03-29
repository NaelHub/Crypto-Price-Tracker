import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";

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

  const history = useHistory()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  }) 

  return(
    <ThemeProvider>
  <AppBar color="transparent" position="static">
    <Container>
      <Toolbar>
        <Typography onClick={() => histoy.push("/")} className={classes.title}>
          Crypto Compass</Typography>
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
  </AppBar>
  </ThemeProvider>
  );
};

export default Header;

// testing testing 2
