import React, {Component} from 'react';
import { HashRouter as Router, Route, Link, hashHistory } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../components/home';


class App extends Component {
    constructor(props){
        super(props);
        console.log(this.props , '1');
    }
  render() {
    return (
      <MuiThemeProvider>
      	<Router history={hashHistory}>
          <div>
            <div className="main">
              <Route exact path='/' component={Home} />
            </div>
          </div>
      	</Router>
      </MuiThemeProvider>
    );
  }
 };
export default App;
