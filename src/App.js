import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import Login from './container/login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
			  <div>
				  {/* <AuthRoute></AuthRoute> */}
          <Switch>					
            <Route path='/login' component={Login}></Route>
            {/* <Route path='/geniusinfo' component={GeniusInfo}></Route> */}
            {/* <Route path='/login' component={Login}></Route> */}
            {/* <Route path='/register' component={Register}></Route> */}
            {/* <Route component={Dashboard}></Route> */}
          </Switch>
			  </div>
	   	</BrowserRouter>
    );
  }
}

export default App;
