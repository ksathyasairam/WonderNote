import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';
import Todo from './Todo'


class App extends Component {
 
  render() {
    return (

    	 <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  
                  <li><Link to={'/Todo'}>Todo</Link></li>
               </ul>

               <hr />
               
               <Switch>
                 
                  <Route exact path='/Todo' component={Todo} />
               </Switch>
            </div>


     
         </Router>


    );
  }
}
const style = {
  margin: 15,
};
export default App;