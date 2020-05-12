import * as React from 'react';
import {Router,Scene,Stack} from 'react-native-router-flux';

import Login from '/pages/login';
import Home from '/pages/home';



const Routes=()=>{return (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login}  />
      <Scene key="home" component={Home}  />
    </Stack>
  </Router>
);}

export default Routes;