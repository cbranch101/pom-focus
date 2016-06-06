import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const WithMUI = (Component) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Component />
  </MuiThemeProvider>
);

export default WithMUI

