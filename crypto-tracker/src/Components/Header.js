import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return
  (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography>
            Crypto Compass
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
